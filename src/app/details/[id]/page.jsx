import React from 'react';
import Image from "next/image";
import PlanBtn from '@/components/buttons/PlanBtn';
import SaveBtn from '@/components/buttons/SaveBtn';
import Footer from '@/components/footer/Footer';

const page = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  const data = await res.json();

  const { image, description, muscleGroups, difficulty, name, instructions, reps, sets, rating, caloriesBurned, equipment, duration } = data;

  // console.log(data);

  const info = [
    { label: "Equipment", value: equipment },
    { label: "Difficulty", value: difficulty },
    { label: "Sets", value: sets },
    { label: "Reps", value: reps },
    { label: "Duration", value: duration },
    { label: "Calories", value: caloriesBurned },
    { label: "Rating", value: rating },
  ]
  //    console.log(id)
  return (
    <>
      <div className=" text-white p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="relative w-full rounded-2xl overflow-hidden">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold uppercase font-oswald">
                {name}
              </h1>
              <p className="mt-2 text-sm text-neutral-400 font-inter">
                {description}
              </p>
            </div>
            <div className="flex gap-2 my-2">
              {muscleGroups.map((muscleGroup, idx) => (
                <span
                  key={idx}
                  className="bg-[#CCFF00] text-black text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {muscleGroup}
                </span>
              ))}
            </div>
            <div className="rounded-xl bg-[#11141b] divide-y divide-white/10 overflow-hidden font-inter mt-1  font-semibold">
              {info.map((row, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between px-4 py-3 text-sm"
                >
                  <span className="uppercase text-neutral-500 text-xs">
                    {row.label}
                  </span>
                  <span className=" text-gray-300 text-xs">{row.value}</span>
                </div>
              ))}
            </div>

            <div className='font-inter'>
              <h3 className="text-md font-bold uppercase my-4 font-oswald">
                Instructions
              </h3>
              <ol className="space-y-2 text-sm text-neutral-300">
                {instructions.map((instruction, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-neutral-500">{i + 1}.</span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex gap-3 mt-5 font-inter">
              <PlanBtn currentPlan={data}></PlanBtn>
              <SaveBtn currentPlan={data} ></SaveBtn>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default page;
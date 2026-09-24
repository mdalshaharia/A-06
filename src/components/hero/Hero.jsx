import Image from 'next/image';
import React from 'react';
import heroImg from '../../assests/banner.png'

const Hero = () => {
    return (
    <section className='container mx-auto'>
        <div className="rounded-3xl bg-[#15171D] px-8 py-14 md:px-16 md:py-20 mx-10 my-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Copy */}
        <div className="flex-1 max-w-xl">
          <p className="text-[#C2F800] text-xs font-bold tracking-wide uppercase">
            Workout Library
          </p>

          <h1 className="mt-3 text-white text-4xl md:text-5xl font-black">
            Train with intent. Log every set.
          </h1>

          <p className="mt-5 text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button
            className=" bg-[#C2F800] text-black mt-8 rounded-md font-bold border-none py-2 px-3 text-sm"
          >
            Browse workouts
          </button>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src={heroImg}
            alt="Anatomical figure training on a gym machine"
            width={340}
            height={340}
            className="w-full max-w-[320px]"
          />
        </div>
      </div>
    </div>
    </section>
  );
}


export default Hero;
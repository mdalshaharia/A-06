'use client'

import Image from 'next/image';
import React from 'react';
import heroImg from '../../assests/banner.png'
import { CalendarPlus, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className='container mx-auto'>
      <div className="rounded-3xl bg-[#15171D] p-12 mx-6 my-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 max-w-xl">
            <p className="text-[#C2F800] text-xs font-bold uppercase">
              Workout Library
            </p>
            <h1 className="mt-3 text-white text-5xl font-bold font-oswald uppercase">
              Train with intent. Log every set.
            </h1>

            <p className="mt-5 text-gray-400 font-inter text-sm">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <button
              onClick={() => {
                document.getElementById("library").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="inline-flex items-center gap-2 bg-[#CCFF00] font-semibold text-black text-xs rounded-lg px-4 py-2.5 mt-5 font-inter">
              <Globe size={16} />
              BROWSE WORKOUTS
            </button>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src={heroImg}
              alt="figure training on a gym machine"
              width={340}
              height={340}
              className="w-full max-w-[320px] hidden md:block lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


export default Hero;
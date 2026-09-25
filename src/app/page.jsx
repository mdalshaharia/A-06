import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Library from "@/components/library/Library";
import Navbar from "@/components/navbar/Navbar";
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={
        <div className="flex flex-col items-center justify-center h-64 gap-4 mt-10">
           <span className="loading loading-spinner loading-lg text-[#CCFF00]"></span>
           <p className="text-neutral-400 font-inter text-sm font-semibold uppercase">
               Loading Workouts...
           </p>
        </div>
      }>
        <Library></Library>
      </Suspense>
      <Footer></Footer>
    </div>
  );
}

import React from 'react';
import Image from "next/image";
import { Clock, Flame, Star, Check, X } from "lucide-react";
import Link from 'next/link';

const MyPlanCard = ({ currentPlan, onMarkAsDone, onDismiss }) => {
  const { image, name, equipment, caloriesBurned, duration, rating, id } = currentPlan;

  return (
    <div className="flex items-center gap-4 w-full bg-[#0e1116] border border-white/10 rounded-2xl p-3 pr-5">
      {/* Thumbnail */}
      <div className="relative w-30 h-20 rounded-xl overflow-hidden flex-shrink-0">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-extrabold uppercase text-sm tracking-tight text-white">
          {name}
        </h3>
        <p className="text-xs text-neutral-500 mt-0.5">{equipment}</p>

        <div className="flex items-center gap-4 mt-1.5 text-xs text-neutral-400">
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-lime-400" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Flame size={14} className="text-lime-400" fill="currentColor" />
            <span>{caloriesBurned}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={14} className="text-lime-400" />
            <span>{rating}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
          <Link
href={`http://localhost:3000/details/${id}`}            
            className="rounded-full border border-white/15 px-5 py-2 text-sm text-white hover:bg-white/5 transition-colors"
          >
            View Details
          </Link>

          <button
            onClick={onMarkAsDone}
            className="inline-flex items-center gap-1.5 rounded-full bg-lime-400 hover:bg-lime-300 px-5 py-2 text-sm font-bold text-black transition-colors"
          >
            <Check size={14} strokeWidth={3} />
            Mark as Done
          </button>
    
    
          <button
            onClick={onDismiss}
            aria-label="Dismiss"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
   
      </div>
    </div>
  );
};

export default MyPlanCard;
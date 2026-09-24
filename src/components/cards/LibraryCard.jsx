import { Clock, Star, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const LibraryCard = ({data}) => {
   const {image, muscleGroups, name , reps, rating, caloriesBurned, equipment, duration} = data;
    // console.log(data)
    return (
        <div className="card w-full max-w-md text-white border border-white/10 rounded-2xl">
      <figure className="relative h-52 w-full">
        <Image src={image} alt={name} fill className="object-cover" />
      </figure>
 
      <div className="card-body gap-3 p-5">
        {/* Tags */}
        <div className="flex gap-2">
          {muscleGroups.map((muscleGroup, idx) => (
            <span
              key={idx}
              className="bg-lime-400 text-black text-xs font-bold uppercase px-3 py-1 rounded-full font-inter"
            >
              {muscleGroup}
            </span>
          ))}
        </div>

        <h2 className="card-title uppercase text-lg font-extrabold font-oswald ">
          {name}
        </h2>
        <p className="text-sm text-neutral-500 -mt-2 font-inter">{equipment}</p>
 
        <div className="border-t border-white/10 my-1" />

        <div className="flex items-center gap-5 text-sm text-neutral-400">
          <div className="flex items-center gap-1.5">
            <Clock size={16} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ThumbsUp size={16} fill="currentColor" />
            <span>{caloriesBurned}</span>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <Star size={16} />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
    );
};

export default LibraryCard;
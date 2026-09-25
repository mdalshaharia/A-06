import Link from 'next/link';
import React from 'react';

const EmptyCard = () => {
    return (
        <div className="text-center py-16 px-6">
            <h2 className="text-2xl text-white uppercase font-oswald">
              Nothing here yet
            </h2>
            <p className="mt-2 text-sm mb-5 font-inter text-gray-600">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
               className="items-center gap-2  bg-[#CCFF00] text-black font-semibold text-sm rounded-2xl px-4 py-2" 
            >
              Go to workouts
            </Link>
          </div>
    );
};

export default EmptyCard;
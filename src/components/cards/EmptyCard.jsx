import Link from 'next/link';
import React from 'react';

const EmptyCard = () => {
    return (
        <div className="text-center py-16 px-6">
            <h2 className="text-sm text-white uppercase">
              Nothing here yet
            </h2>
            <p className="mt-2 text-sm text-white">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="btn bg-[#CCFF00] btn-sm mt-6 rounded-full font-bold normal-case px-6"
            >
              Go to workouts
            </Link>
          </div>
    );
};

export default EmptyCard;
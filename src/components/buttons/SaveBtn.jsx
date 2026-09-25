'use client';

import { WorkOutContext } from '@/context/WorkOutContext';
import { Bookmark } from 'lucide-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const SaveBtn = ({currentPlan}) => {


       const { saved, setSaved } = useContext(WorkOutContext);
    
        const handleSetSaved = () => {
            const alreadyAdded = saved.find((s) => s.name === currentPlan.name);
            if (alreadyAdded) {
                toast.warn(`This plan is already saved!`);
                return;
            }
            const newSavedArr = [...saved, currentPlan];
            setSaved(newSavedArr);
            toast.success(`Saved for later!`);
            localStorage.setItem('workout_saved', JSON.stringify(newSavedArr));
        }


    return (
       <button onClick={() => handleSetSaved()} className="inline-flex items-center gap-2 border border-gray-600 text-white text-sm rounded-lg px-4 py-2">
              <Bookmark size={16} />
              Save for later
            </button>
    );
};

export default SaveBtn;
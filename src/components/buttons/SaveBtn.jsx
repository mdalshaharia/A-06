'use client';

import { WorkOutContext } from '@/context/WorkOutContext';
import { Bookmark } from 'lucide-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const SaveBtn = ({currentPlan}) => {


       const { saved, setSaved } = useContext(WorkOutContext);
    
        const handleSetSaved = () => {
            console.log('clicked')
            const newSavedArr = [...saved , currentPlan];
            setSaved(newSavedArr);
        toast.success(`You have saved "${currentPlan.name}"`);
         localStorage.setItem('workout_saved', JSON.stringify(newSavedArr));
        // alert('success')
        }


    return (
       <button onClick={() => handleSetSaved()} className="inline-flex items-center gap-2 border border-white/15 hover:bg-white/5 text-white text-sm rounded-lg px-4 py-2.5">
              <Bookmark size={16} />
              Save for later
            </button>
    );
};

export default SaveBtn;
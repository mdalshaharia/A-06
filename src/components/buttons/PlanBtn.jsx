'use client';

import { WorkOutContext } from '@/context/WorkOutContext';
import { CalendarPlus } from 'lucide-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const PlanBtn = ({currentPlan}) => {

    const { plan, setPlan } = useContext(WorkOutContext);

    const handleSetPlan = () => {
        console.log('clicked')
        const newPlanArr = [...plan , currentPlan];
        setPlan(newPlanArr);
    toast.success(`You have read "${currentPlan.name}"`);
    localStorage.setItem('workout_plan', JSON.stringify(newPlanArr));
    // alert('success')
    }

    return (
        <button onClick={()=>handleSetPlan()} className="inline-flex items-center gap-2 bg-[#CCFF00] text-black font-semibold text-sm rounded-lg px-4 py-2.5 ">
              <CalendarPlus size={16} />
              Add to today&apos;s plan
            </button>
    );
};

export default PlanBtn;
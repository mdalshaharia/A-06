'use client';

import { WorkOutContext } from '@/context/WorkOutContext';
import { CalendarPlus } from 'lucide-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const PlanBtn = ({currentPlan}) => {

    const { plan, setPlan } = useContext(WorkOutContext);

    const handleSetPlan = () => {
        const alreadyAdded = plan.find((p) => p.name === currentPlan.name);
        if (alreadyAdded) {
            toast.warn(`this plan is already added`);
            return;
        }
        const newPlanArr = [...plan, currentPlan];
        setPlan(newPlanArr);
        toast.success(`Added to today's plan!`);
        localStorage.setItem('workout_plan', JSON.stringify(newPlanArr));
    }

    return (
        <button onClick={()=>handleSetPlan()} className="inline-flex items-center gap-2 bg-[#CCFF00] text-black font-semibold text-sm rounded-lg px-4 py-2 ">
              <CalendarPlus size={16} />
              Add to today&apos;s plan
            </button>
    );
};

export default PlanBtn;
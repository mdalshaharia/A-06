"use client";

import Navbar from '@/components/navbar/Navbar';
import React, { useContext, useMemo } from 'react';
import { useState } from "react";
import { WorkOutContext } from '@/context/WorkOutContext';
import MyPlanCard from '@/components/cards/MyPlanCard';
import EmptyCard from '@/components/cards/EmptyCard';

const tabs = ["Today's Plan", "Saved"];

const MyPlanPage = () => {
    const [activeTab, setActiveTab] = useState("Today's Plan");
    const [sortBy, setSortBy] = useState("Duration");

    const { saved, setSaved, plan, setPlan } = useContext(WorkOutContext);

    const activeList = activeTab === "Today's Plan" ? plan : saved;

    const sortedList = useMemo(() => {
        const sorted = [...activeList];
        if (sortBy === "Duration") {
            sorted.sort((a, b) => (Number(a.duration)) - (Number(b.duration)));
        } else if (sortBy === "Name") {
            sorted.sort((a, b) => (a.name).localeCompare(b.name));
        } else if (sortBy === "Calories") {
            sorted.sort((a, b) => (Number(a.caloriesBurned)) - (Number(b.caloriesBurned)));
        }
        return sorted;
    }, [activeList, sortBy]);
    console.log(sortedList)

    const handleDismiss = (item) => {
        if (activeTab === "Today's Plan") {
            const updated = plan.filter((p) => p !== item);
            setPlan(updated);
            localStorage.setItem('workout_plan', JSON.stringify(updated));
        } else {
            const updated = saved.filter((s) => s !== item);
            setSaved(updated);
            localStorage.setItem('workout_saved', JSON.stringify(updated));
        }
    };

  const stats = [
    { label: "Exercises", value: activeList.length, color: true },
    {
      label: "Minutes",
      value: activeList.reduce((sum, e) => sum + (Number(e.duration) || 0), 0),
      color: false,
    },
    {
      label: "Calories",
      value: activeList.reduce((sum, e) => sum + (Number(e.caloriesBurned) || 0), 0),
      color: false,
    },
  ];

  return (
    <div>
      <Navbar></Navbar>
      <section className="container mx-auto">
        <div className="mx-5">

          <div>
            <h1 className="text-2xl font-extrabold uppercase font-oswald text-white">
              My Plan
            </h1>
            <p className="mt-2 text-sm text-neutral-400 font-inter">
              Cap of five lifts for today. Finish them, then load more.
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-[#11141b] px-8 py-6 flex justify-between text-white">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xs text-neutral-400">{stat.label}</p>
                <p
                  className={
                    stat.color
                      ? "mt-1 text-3xl text-pink-700"
                      : "mt-1 text-3xl "
                  }
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="tabs tabs-boxed bg-[#0e1116] border  rounded-xl text-xs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={
                    activeTab === tab
                      ? "tab tab-sm rounded-xl bg-[#2a3141] text-white font-semibold text-xs"
                      : "tab tab-sm rounded-xl text-neutral-400 text-xs"
                  }
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Sort select */}
            <div className="flex items-center gap-2 text-sm">
              <p className="text-white w-20 text-xs">Sort By</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="select select-sm bg-[#0e1116] border text-white rounded-xl text-xs"
              >
                <option value="Duration">Duration</option>
                <option value="Name">Name</option>
                <option value="Calories">Calories</option>
              </select>
            </div>
          </div>
          <div className=" mt-4 rounded-2xl min-h-70">
            {sortedList.length > 0 ? (
              <ul className="w-full  flex flex-col gap-3 items-center justify-center">
                {sortedList.map((item, idx) => (
                  <MyPlanCard key={idx} currentPlan={item} onDismiss={() => handleDismiss(item)} />
                ))}
              </ul>
            ) : (
              <EmptyCard />
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

export default MyPlanPage;
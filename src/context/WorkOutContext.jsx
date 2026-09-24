'use client';

import React, { createContext, useEffect, useState } from 'react';

export const WorkOutContext = createContext({
  plan: [],
  setPlan: () => {},
  saved: [],
  setSaved: () => {},
});

const WorkOutProvider = ({ children }) => {
  const [plan, setPlan] = useState(() => {
    try {
      const stored = localStorage.getItem('workout_plan');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [saved, setSaved] = useState(() => {
    try {
      const stored = localStorage.getItem('workout_saved');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const sharedData = {
    plan,
    setPlan,
    saved,
    setSaved,
  };

  return (
    <WorkOutContext.Provider value={sharedData}>{children}</WorkOutContext.Provider>
  );
};

export default WorkOutProvider;

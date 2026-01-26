import React, { createContext, useContext, useState, useEffect } from 'react';

const RamadanContext = createContext();

export const RamadanProvider = ({ children }) => {
  const [isRamadanMode, setIsRamadanMode] = useState(false);

  useEffect(() => {
    if (isRamadanMode) {
      document.documentElement.classList.add('ramadan-mode');
    } else {
      document.documentElement.classList.remove('ramadan-mode');
    }
  }, [isRamadanMode]);

  return (
    <RamadanContext.Provider value={{ isRamadanMode, setIsRamadanMode }}>
      {children}
    </RamadanContext.Provider>
  );
};

export const useRamadan = () => useContext(RamadanContext);
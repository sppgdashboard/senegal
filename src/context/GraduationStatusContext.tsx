"use client"
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface GraduationStatusContextProps {
  data: any;
  fetchData: () => void;
}

const GraduationStatusContext = createContext<GraduationStatusContextProps | undefined>(undefined);

export const GraduationStatusProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    const response = await fetch('/api/graduationStatus');
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GraduationStatusContext.Provider value={{ data, fetchData }}>
      {children}
    </GraduationStatusContext.Provider>
  );
};

export function useGraduationStatus() {
  const context = useContext(GraduationStatusContext);
  if (context === undefined) {
    throw new Error('useGraduationStatus must be used within a GraduationStatusProvider');
  }
  return context;
};

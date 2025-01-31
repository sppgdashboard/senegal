"use client";
import { ReactNode, useState } from "react";
import { createContext, useContext } from "react";

export type dashboardType = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  matricNumber: string;
};

type Props = {
  children: ReactNode;
};

export const DashboardContext = createContext<dashboardType | null>(null);

export function useContextDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useContextDashboard must be used within a DashboardProvider"
    );
  }
  return context;
}

export function DashboardProvider({ children }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const matricNumber = "SC4/2310/062";

  const value = {
    isSidebarOpen,
    setIsSidebarOpen,
    matricNumber,
  };

  return (
    <>
      <DashboardContext.Provider value={value}>
        {children}
      </DashboardContext.Provider>
    </>
  );
}

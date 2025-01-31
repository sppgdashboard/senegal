import React from "next";
import type { Metadata } from "next";
import SideBar from "@src/components/SideBar";
import Header from "@src/components/Header";
import { DashboardProvider } from "@src/context/DashboardContext";

export const metadata: Metadata = {
  title: "SPPG | Dashboard",
  description: "dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DashboardProvider>
      <div className={`grid md:grid-cols-[auto,_1fr]`}>
        <SideBar />
        {/* </DashboardProvider>
        <DashboardProvider> */}
        <div className="grid grid-rows-[auto,_1fr,_auto] h-screen">
          <Header />
          <main className="flex flex-col items-center justify-between p-4 md:p-10 bg-[#F5F6FA] rounded-tl-xl overflow-y-auto gap-8">
            {children}
          </main>
          {/* <Footer /> */}
        </div>
      </div>
    </DashboardProvider>
  );
}

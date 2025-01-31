"use client";
import Image from "next/image";
import React from "react";
import nigeriaFlag from "@public/pics/nigeria_flag.png";
import { useContextDashboard } from "@src/context/DashboardContext";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Header() {
  const { isSidebarOpen, setIsSidebarOpen } = useContextDashboard();

  return (
    <nav className="flex justify-between bg-white p-4">
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? (
          <Icon icon="ci:menu-alt-02" width={32} />
        ) : (
          <Icon icon="ci:menu-alt-03" width={32} />
        )}
      </button>
      <Image
        priority
        src={nigeriaFlag}
        alt="Nigeria"
        width={50}
        className="scale-50"
        title="Nigeria"
      />
    </nav>
  );
}

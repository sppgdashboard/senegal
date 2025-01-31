import React from "react";

export default function loading() {
  return (
    <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2 gap-8">
      <h3 className="tracking-tight text-base font-semibold">Loading...</h3>
      <div className="flex gap-1">
        <div className="animate-spin bg-[#0D9EDA] w-2 h-2"></div>
        <div className="animate-spin bg-[#13B04B] w-2 h-2"></div>
        <div className="animate-spin bg-[#F5A623] w-2 h-2"></div>
        <div className="animate-spin bg-[#DA121A] w-2 h-2"></div>
      </div>
    </div>
  );
}

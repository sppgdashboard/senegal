import React from "react";
import { GoArrowRight } from "react-icons/go";

export default function AssignmentsGR() {
  return (
    <div className="grid grid-cols-3">
      <section className=" px-8 py-4 flex flex-col items-center gap-4 border-l border-[#00000080]">
        <p className="w-full flex flex-col items-center font-bold text-sm">
          Status
        </p>
        <p className="text-xl font-semibold">0%</p>
        <p className="bg-[#DA121A] text-white font-bold rounded-full py-1 px-2 text-xs w-fit">
          None
        </p>
      </section>

      <section className=" p-4 flex flex-col items-center gap-4 border-l border-[#00000080]">
        <p className="w-full flex flex-col items-center font-bold text-xs">
          Pending
        </p>
        <div className="w-full flex justify-center gap-4">
          <p className="text-2xl font-semibold">0</p>
        </div>
      </section>

      <section className="flex items-center justify-center gap-2 border-l border-[#00000080] ">
        <button className="p-4 flex gap-4 justify-center items-center font-semibold duration-300 hover:scale-105 hover:bg-gradient-to-r hover:to-[#13B04B] hover:from-[#0D9EDA] hover:text-[#ffffff] cursor-pointer w-full h-full">
          <GoArrowRight />
        </button>
      </section>
    </div>
  );
}

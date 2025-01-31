import React from "react";
import { FaAngleDown } from "react-icons/fa";

type Props = {
  [key: string]: any;
};

export default function MonthlyRating({ data }: Props){
  const group = data?.group_no_from_student_database;
  return (
    <div className="grid grid-cols-3">
      {/* 1 */}
      <section className=" px-8 py-4 flex flex-col items-center justify-center gap-4 border-l border-[#00000080]">
        <p className="bg-[#383FE6] text-white rounded-full py-1 px-2 text-xs w-fit">
          {group}
        </p>
      </section>

      {/* 2 */}
      <section className=" px-8 py-4 flex flex-col items-center gap-4 border-l border-[#00000080]">
        <p className="w-full flex flex-col items-center font-bold text-sm">
          Monthly Rating
        </p>
        <p className="text-xl font-semibold">60%</p>
        <p className="bg-[#DA121A] text-white font-bold rounded-full py-1 px-2 text-xs w-fit">
          not on track
        </p>
      </section>

      {/* 3 */}
      <section className=" p-4 flex items-center justify-center gap-2 border-l border-[#00000080]">
        <button className="px-3 py-1.5 rounded-lg border-2 border-[#00000080] flex gap-4 justify-center items-center font-semibold duration-300 hover:bg-gradient-to-r hover:to-[#13B04B] hover:from-[#0D9EDA] hover:text-[#ffffff] hover:border-white">
          <p>Show More</p>
          <FaAngleDown />
        </button>
      </section>
    </div>
  );
}

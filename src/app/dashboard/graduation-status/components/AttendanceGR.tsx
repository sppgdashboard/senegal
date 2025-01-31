"use client";
import React, { useState } from "react";
import { formatToNumber } from "../../utils";
type Props = {
  [key: string]: any;
};

type DetailsProps = {
  [key: string]: any;
};

export default function AttendanceGR({ data }: Props) {
  const attendanceRating = data?.program_attendance_rating;
  const cumTotalClassesMissed = formatToNumber(data?.cum_total_classes_missed);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="grid grid-cols-4">
        {/* 1 */}
        <section className=" px-8 py-4 flex flex-col items-center gap-4 border-l border-[#00000080]">
          {/* <p className="w-full flex flex-col items-center font-bold text-sm">
            Attendance Rating
          </p>
          <p className="text-xl font-semibold">
            {" "}
            {formatToNumber(attendanceRating, 2)}%
          </p>
          {attendanceRating >= 70 ? (
            <p
              className={`bg-[#13B04B] text-white font-bold rounded-full py-1 px-2 text-xs flex justify-center`}
            >
              On track
            </p>
          ) : (
            <p
              className={` bg-[#DA121A] text-white font-bold rounded-full py-1 px-2 text-xs flex justify-center`}
            >
              Not on track
            </p>
          )} */}
        </section>

        {/* 2 */}
        <section className=" p-4 flex flex-col items-center gap-4 border-l border-[#00000080]">
          <p className="w-full flex flex-col items-center font-bold text-xs">
            Waivers used
          </p>
          <div className="w-full flex justify-center gap-4">
            <p className="text-2xl font-semibold">
              {Math.min(+cumTotalClassesMissed, 6)}/6
            </p>
          </div>
        </section>

        {/* 3 */}
        <section className=" p-4 flex flex-col items-center gap-4 border-l border-[#00000080]">
          <p className="w-full flex flex-col items-center font-bold text-xs">
            Life lines
          </p>
          <div className="w-full flex justify-center gap-4">
            <p className="text-2xl font-semibold">
              {35 - Math.max(+cumTotalClassesMissed, 6)}
            </p>
          </div>
        </section>
      </div>

      <AttendanceShowMore data={data} isOpen={isOpen} />
    </>
  );
}

export function AttendanceShowMore({ cumTotalClassesMissed }: DetailsProps) {
  const lifeLines = 29 - Math.max(+cumTotalClassesMissed, 7)
  return (
    <div className="absolute top-20 left-0 z-10 w-full group-hover:scale-100 scale-0 duration-300 text-left delay-300">
      <div className="bg-white p-12 pr-16 rounded-lg">
        <div className="grid mb-10 grid-cols-2 gap-8">
          <div>
            <h2 className="font-extrabold text-base">Waiver</h2>
            <h3 className="font-extrabold my-1">
              <span className="text-yellow-400">
                {" "}
                {Math.min(+cumTotalClassesMissed, 7)}
              </span>{" "}
              / 7 remaining
            </h3>
            <p>
            Waivers take into account missed classes due to eventualities beyond Human control. You have used {Math.min(+cumTotalClassesMissed, 7)} out of 7 waivers. You are not required to submit makeup task, however, you are required to watch the recording for knowledge acquisition. When these waivers are exhausted you have 22 lifelines left to leave the program
            </p>
          </div>
          <div>
            <h2 className="font-extrabold text-base">Life Line</h2>
            <h3 className="font-extrabold my-1">
              <span className="text-green-500">
                {lifeLines}
              </span>{" "}
              more to leave the program
            </h3>
            <p>
              You have a total of 22 Life Line throughout the program, when{" "}
              <br /> exhausted you would be evicted from the program.
            </p>
          </div>
          <div>
            <h2 className="font-extrabold text-base mb-1">Note</h2>
            <p>
              95% Attendance with no more than 29 missed
              classes.
            </p>
            <ul>
              <li className="list-disc ml-7">
                These 22 missed classes are cumulative for the entire duration
                of this program and require submission of make-up tasks.
              </li>
              <li className="list-disc ml-7">
                You are granted 7 class waivers that do not require any makeup.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

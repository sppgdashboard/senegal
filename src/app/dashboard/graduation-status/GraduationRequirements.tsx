import React, { ReactNode, Suspense } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  getAssignmentData,
  getAttendanceData,
  getCapstoneGroupData,
  getFullAttendanceData,
  getGroupManifestoData,
  getMyManifestoData,
} from "../data";
import { NoDataCard } from "@src/components/ui/Card";
import { formatToNumber, getManifestoUrl } from "../utils";
import { UploadButton } from "@src/components/ui/Button";
import { GrView } from "react-icons/gr";
import { AttendanceShowMore } from "./components/AttendanceGR";
import { LoadingCard } from "@src/components/Skeleton/CardSkeleton";
import { MIN_ATTENDANCE_VALUE } from "@src/constants";
import Link from "next/link";
import { Status } from "@src/components/Status";

export default function GraduationRequirements() {
  return (
    <section className="  w-full flex flex-col gap-4">
      <h5 className="text-3xl">Graduation Requirements</h5>
      <ul className="grid grid-rows-5 gap-4">
        <Suspense fallback={<LoadingCard />}>
          <AttendanceGR />
        </Suspense>

        <Suspense fallback={<LoadingCard />}>
          <ManifestoGR />
        </Suspense>
        <Suspense fallback={<LoadingCard />}>
          <GroupManifestoGR />
        </Suspense>

        <Suspense fallback={<LoadingCard />}>
          <AssignmentsGR />
        </Suspense>
{/* 
        <Suspense fallback={<LoadingCard />}>
          <MonthlyRating />
        </Suspense> */}

        <Suspense fallback={<LoadingCard />}>
          <CapstoneGR />
        </Suspense>
      </ul>
    </section>
  );
}

type Props = {
  children: ReactNode;
  name: string;
};

async function AttendanceGR() {
  const [data, hasData] = await getFullAttendanceData();
  const attendanceRating = data?.program_attendance_rating;
  const cumTotalClassesMissed = data?.jan_sept_2025_total_classes_missed;

  if (!hasData) {
    return <NoDataCard name={"Attendance"} />;
  }

  return (
    <li
      key={1}
      className="bg-white rounded-2xl  w-full items-center border bg-card text-card-foreground shadow"
    >
      <div className="p-4  flex justify-between border-b-2 border-gray-300 items-center relative">
        <div className="flex  gap-4">
          <Status status={attendanceRating > MIN_ATTENDANCE_VALUE} />
          <h5 className="font-bold text-base">Attendance</h5>
        </div>

        <button className="text-sm flex gap-2 items-center group bg-[#0D9EDA20] hover:delay-100 px-2 py-1 rounded-lg">
          <span>show more</span>{" "}
          <Icon
            icon="iconamoon:arrow-down-2-thin"
            width={24}
            className="rotate-0 group-hover:rotate-180 duration-300 group-hover:delay-500"
          />
          <AttendanceShowMore cumTotalClassesMissed={cumTotalClassesMissed} />
        </button>
      </div>

      <div className="p-4 grid grid-cols-fluid gap-8">
        <RequirementsCard name={"Attendance Rating"}>
          <div className="flex gap-2">
            <p className="text-2xl font-semibold">
              {formatToNumber(attendanceRating, 2)}%
            </p>
            {attendanceRating > MIN_ATTENDANCE_VALUE ? (
              <p
                className={`bg-[#13B04B] text-white font-bold rounded-full py-1 px-2 text-xs h-fit`}
              >
                On track
              </p>
            ) : (
              <p
                className={` bg-[#DA121A] text-white font-bold rounded-full py-1 px-2 text-xs  h-fit`}
              >
                Not on track
              </p>
            )}
          </div>
        </RequirementsCard>

        <RequirementsCard name={"Waivers used"}>
          <p className="text-2xl font-semibold">
            {Math.min(+cumTotalClassesMissed, 7)}/7
          </p>
        </RequirementsCard>

        <RequirementsCard name={"Life lines"}>
          <p className="text-2xl font-semibold">
            {29 - Math.max(+cumTotalClassesMissed, 7)} left
          </p>
        </RequirementsCard>
      </div>
    </li>
  );
}

async function ManifestoGR() {
  const [data, hasData] = await getMyManifestoData();
  const manifestoUrl = getManifestoUrl(data?.upload_your_manifesto);
  const manifestoStatus = manifestoUrl ? "Submitted" : "Not Submitted";

  if (!hasData) {
    return <NoDataCard name={"My Manifesto"} />;
  }

  return (
    <li
      key={1}
      className="bg-white rounded-2xl  w-full items-center relative border bg-card text-card-foreground shadow"
    >
      <div className="p-4  flex justify-between border-b-2 border-gray-300 items-center">
        <div className="flex  gap-4">
          <Status status={manifestoStatus === "Submitted"} />
          <h5 className="font-bold text-base">My Manifesto</h5>
        </div>
        {manifestoStatus === "Submitted" ? (
          <a
            target="_blank"
            href={manifestoUrl}
            className="h-fit px-2 py-1 rounded-md border border-[#00000080] flex gap-4 justify-center items-center font-semibold duration-300 hover:bg-gradient-to-r hover:to-[#13B04B] hover:from-[#0D9EDA] hover:text-[#ffffff] hover:border-white"
          >
            <p>View</p>
            <GrView />
          </a>
        ) : (
          <UploadButton link="https://airtable.com/appdBZvAEpTBH3cAP/shrjJ8fSvYeaJkuQY" />
        )}
      </div>

      <div className="p-4 grid grid-cols-fluid gap-8">
        <RequirementsCard name={"Status"}>
          <p
            className={`${
              manifestoStatus === "Submitted" ? "bg-[#13B04B]" : "bg-[#DA121A]"
            } text-white font-bold rounded-full py-1 px-2 text-xs  w-fit`}
          >
            {manifestoStatus}
          </p>
        </RequirementsCard>
      </div>
    </li>
  );
}

async function GroupManifestoGR() {
  const [data, hasData] = await getGroupManifestoData();
  const manifestoUrl = getManifestoUrl(data?.upload_your_groups_best_manifesto);
  const manifestoStatus = manifestoUrl ? "Submitted" : "Not Submitted";

  if (!hasData) {
    return <NoDataCard name={"Group Manifesto"} />;
  }

  return (
    <li
      key={1}
      className="bg-white rounded-2xl  w-full items-center relative border bg-card text-card-foreground shadow"
    >
      <div className="p-4  flex justify-between border-b-2 border-gray-300 items-center">
        <div className="flex  gap-4">
          <Status status={manifestoStatus === "Submitted"} />
          <h5 className="font-bold text-base">Group Manifesto</h5>
        </div>
        {manifestoStatus === "Submitted" ? (
          <a
            target="_blank"
            href={manifestoUrl}
            className="h-fit px-2 py-1 rounded-md border border-[#00000080] flex gap-4 justify-center items-center font-semibold duration-300 hover:bg-gradient-to-r hover:to-[#13B04B] hover:from-[#0D9EDA] hover:text-[#ffffff] hover:border-white"
          >
            <p>View</p>
            <GrView />
          </a>
        ) : (
          <UploadButton link="https://airtable.com/appdBZvAEpTBH3cAP/shrjJ8fSvYeaJkuQY" />
        )}
      </div>

      <div className="p-4 grid grid-cols-fluid gap-8">
        <RequirementsCard name={"Status"}>
          <p
            className={`${
              manifestoStatus === "Submitted" ? "bg-[#13B04B]" : "bg-[#DA121A]"
            } text-white font-bold rounded-full py-1 px-2 text-xs  w-fit`}
          >
            {manifestoStatus}
          </p>
        </RequirementsCard>
      </div>
    </li>
  );
}

async function AssignmentsGR() {
  const [data, hasData] = await getAssignmentData();
  // console.log(data);

  if (!hasData) {
    return <NoDataCard name={"Assignment"} />;
  }
  const numberOfAssignments = data.length;
  
  return (
    <li
      key={1}
      className="bg-white rounded-2xl  w-full items-center relative border bg-card text-card-foreground shadow"
    >
      <div className="p-4  flex justify-between border-b-2 border-gray-300 items-center">
        <div className="flex  gap-4">
          <Status status={numberOfAssignments > 0} />

          <Link
            href={"/dashboard/assignment"}
            className="font-bold text-base hover:underline"
          >
            Assignment
          </Link>
        </div>

        <p></p>
      </div>
      <div className="p-4 grid grid-cols-fluid gap-8">
        <RequirementsCard name={`Assignments Submitted`}>
          <p className={` font-bold rounded-full py-1 px-2 text-2xl  w-fit`}>
            {numberOfAssignments}
          </p>
        </RequirementsCard>
      </div>
    </li>
  );
}
async function MonthlyRating() {
  return (
    <li
      key={1}
      className="bg-white rounded-2xl  w-full items-center relative border bg-card text-card-foreground shadow"
    >
      <div className="p-4  flex justify-between border-b-2 border-gray-300 items-center">
        <div className="flex  gap-4">
          <Status status={null} />
          <h5 className="font-bold text-base">360 Monthly Rating</h5>
        </div>
        <p>Pending</p>
      </div>
      <div className="p-4 grid grid-cols-fluid gap-8">
        <RequirementsCard name={`Meeting Rating`}>
          <p className={` font-bold rounded-full py-1 px-2 text-2xl  w-fit`}>
            0/5
          </p>
        </RequirementsCard>
        <RequirementsCard name={`Assignment Rating`}>
          <p className={` font-bold rounded-full py-1 px-2 text-2xl  w-fit`}>
            0/5
          </p>
        </RequirementsCard>
      </div>
    </li>
  );
}
async function CapstoneGR() {
  const [data, hasData] = await getCapstoneGroupData();
  const manifestoUrl = getManifestoUrl(data?.upload_your_capstone_proposal);
  const capstoneStatus = manifestoUrl ? "Submitted" : "Not Submitted";

  if (!hasData) {
    return <NoDataCard name={"Capstone Group"} />;
  }

  return (
    <li
      key={1}
      className="bg-white rounded-2xl  w-full items-center relative border bg-card text-card-foreground shadow"
    >
      <div className="p-4  flex justify-between border-b-2 border-gray-300 items-center">
        <div className="flex  gap-4">
          <Status status={capstoneStatus === "Submitted"} />
          <h5 className="font-bold text-base">Capstone Group</h5>
        </div>
        {capstoneStatus === "Submitted" ? (
          <a
            target="_blank"
            href={manifestoUrl}
            className="h-fit px-2 py-1 rounded-md border border-[#00000080] flex gap-4 justify-center items-center font-semibold duration-300 hover:bg-gradient-to-r hover:to-[#13B04B] hover:from-[#0D9EDA] hover:text-[#ffffff] hover:border-white"
          >
            <p>View</p>
            <GrView />
          </a>
        ) : (
          <UploadButton link="https://airtable.com/appdBZvAEpTBH3cAP/shrjJ8fSvYeaJkuQY" />
        )}
      </div>

      <div className="p-4 grid grid-cols-fluid gap-8">
        <RequirementsCard name={`Group`}>
          <p
            className={`bg-[#0D9EDA] text-white font-bold rounded-full py-1 px-2 text-xs  w-fit`}
          >
            {data?.select_your_capstone_focus_area}
          </p>
        </RequirementsCard>
        <RequirementsCard name={`Status`}>
          <p
            className={`${
              capstoneStatus === "Submitted" ? "bg-[#13B04B]" : "bg-[#DA121A]"
            } text-white font-bold rounded-full py-1 px-2 text-xs  w-fit`}
          >
            {capstoneStatus}
          </p>
        </RequirementsCard>
      </div>
    </li>
  );
}


function RequirementsCard({ children, name }: Props) {
  return (
    <div className="flex gap-2 flex-col border-r-2 border-[#0D9EDA40] bg-gradient-to-r from-white to-[#0D9EDA10]">
      <p className="text-sm">{name}</p>
      {children}
    </div>
  );
}

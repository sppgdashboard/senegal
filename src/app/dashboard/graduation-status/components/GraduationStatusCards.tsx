import React from "react";
import {
  getAttendanceData,
  getCapstoneGroupData,
  getGroupManifestoData,
  getMyManifestoData,
  getSchoolFeesData,
} from "../../data";
import { Icon } from "@iconify/react";
import { GrView } from "react-icons/gr";
import { UploadButton } from "@src/components/ui/Button";
import { NoDataCard } from "@src/components/ui/Card";
import { formatToNumber, getManifestoUrl } from "../../utils";
import { PaymentStatusTag } from "@src/components/PaymentStatusTag";
import { MIN_ATTENDANCE_VALUE } from "@src/constants";

export async function MyManifesto() {
  const [data, hasData] = await getMyManifestoData();  

  if (!hasData) {
    return <NoDataCard name={"My Manifesto"} />;
  }

  const manifestoUrl = getManifestoUrl(data?.upload_your_manifesto);
  const manifestoStatus = data?.upload_your_manifesto? "Submitted": "Not Submitted";

  return (
    <li
      key={1}
      className="rounded-xl border bg-card text-card-foreground shadow bg-white"
    >
      <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="tracking-tight text-base font-semibold">My Manifesto</h3>
        <Icon icon="iconoir:megaphone" width={24} />
      </div>
      <div className="p-6 py-2">
        <p
          className={`${
            manifestoStatus === "Submitted" ? "bg-[#13B04B]" : "bg-[#DA121A]"
          } text-white font-bold rounded-full py-1 px-2 text-xs flex justify-center w-fit`}
        >
          {manifestoStatus}
        </p>
      </div>
      <div className="p-6 flex flex-row items-center justify-between space-y-0 py-2">
        <h3 className="tracking-tight text-sm font-medium"></h3>
        <div className="">
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
      </div>
    </li>
  );
}

export async function AttendanceRatingsCard() {
  const [data, hasData] = await getAttendanceData();
  const attendanceRating = data?.program_attendance_rating;

  if (!hasData) {
    return <NoDataCard name={"Attendance Rating"} />;
  }

  return (
    <li
      key={3}
      className="rounded-xl border bg-card text-card-foreground shadow bg-white"
    >
      <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="tracking-tight text-base font-semibold">
          Attendance Rating
        </h3>
        <Icon icon="lets-icons:group-add-light" width={24} />
      </div>
      <div className="p-6 py-2 grid gap-2">
        {attendanceRating >= MIN_ATTENDANCE_VALUE ? (
          <p className="bg-[#13B04B] text-white font-bold rounded-full py-1 px-2 text-xs flex justify-center w-fit">
            On track
          </p>
        ) : (
          <p className="bg-[#DA121A] text-white font-bold rounded-full py-1 px-2 text-xs flex justify-center w-fit">
            Not on track
          </p>
        )}
        <p className="text-2xl font-bold">
          {formatToNumber(attendanceRating, 2)}%
        </p>
      </div>
    </li>
  );
}

export async function GroupManifestoCard() {
  const [data, hasData] = await getGroupManifestoData();

  if (!hasData) {
    return <NoDataCard name={"Group Manifesto"} />;
  }

  const manifestoUrl = getManifestoUrl(data?.upload_your_groups_best_manifesto);
  const manifestoStatus = manifestoUrl ? "Submitted" : "Not Submitted";

  return (
    <li
      key={1}
      className="rounded-xl border bg-card text-card-foreground shadow bg-white"
    >
      <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="tracking-tight text-base font-semibold">
          Group Manifesto
        </h3>
        <Icon icon="iconoir:megaphone" width={24} />
      </div>
      <div className="p-6 py-2">
        <p
          className={`${
            manifestoStatus === "Submitted" ? "bg-[#13B04B]" : "bg-[#DA121A]"
          } text-white font-bold rounded-full py-1 px-2 text-xs flex justify-center w-fit`}
        >
          {manifestoStatus}
        </p>
      </div>
      <div className="p-6 flex flex-row items-center justify-between space-y-0 py-2">
        <h3 className="tracking-tight text-sm font-medium"></h3>
        <div className="">
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
      </div>
    </li>
  );
}

export async function ShoolFeesCard() {
  const [data, hasData] = await getSchoolFeesData();

  if (!hasData) {
    return <NoDataCard name={"School fees status"} />;
  }

  return (
    <li
      key={7}
      className="rounded-xl border bg-card text-card-foreground shadow bg-white"
    >
      <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="tracking-tight text-base font-semibold">
          School fees status
        </h3>
        <Icon icon="ion:card-outline" width={24} />
      </div>
      <div className="p-6 py-2">
        <PaymentStatusTag status={data?.school_fees_status} />
      </div>
      <div className="p-6 flex flex-row items-center justify-between space-y-0 py-2">
        <h3 className="tracking-tight text-sm font-medium"></h3>
        {/* <a
          href={"/"}
          className="px-2 py-1 rounded-md border border-[#00000080] flex gap-4 justify-center items-center font-semibold duration-300 hover:bg-gradient-to-r hover:to-[#13B04B] hover:from-[#0D9EDA] hover:text-[#ffffff] hover:border-white opacity-50"
          
        >
          <p>Pay Now</p>
          <BsCashStack />
        </a> */}
      </div>

      <div className="w-full flex justify-center pt-2"></div>
    </li>
  );
}

export async function CapstoneGroupCard() {
  const [data, hasData] = await getCapstoneGroupData();

  if (!hasData) {
    return <NoDataCard name={"Capstone Group"} />;
  }

  const capstoneUrl = getManifestoUrl(data?.upload_your_capstone_proposal);
  const capstoneStatus = capstoneUrl ? "Submitted" : "Not Submitted";

  return (
    <li
      key={1}
      className="rounded-xl border bg-card text-card-foreground shadow bg-white"
    >
      <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="tracking-tight text-base font-semibold">
          Capstone Group
        </h3>
        <Icon icon="system-uicons:projector" width={24} />
      </div>
      <div className="p-6 py-2">
        <p
          className={`${
            capstoneStatus === "Submitted" ? "bg-[#13B04B]" : "bg-[#DA121A]"
          } text-white font-bold rounded-full py-1 px-2 text-xs flex justify-center w-fit`}
        >
          {capstoneStatus}
        </p>
      </div>
      <div className="p-6 flex flex-row items-center justify-between space-y-0 py-2">
        <h3 className="tracking-tight text-sm font-medium"></h3>
        <div className="">
          {capstoneStatus === "Submitted" ? (
            <a
              target="_blank"
              href={capstoneUrl}
              className="h-fit px-2 py-1 rounded-md border border-[#00000080] flex gap-4 justify-center items-center font-semibold duration-300 hover:bg-gradient-to-r hover:to-[#13B04B] hover:from-[#0D9EDA] hover:text-[#ffffff] hover:border-white"
            >
              <p>View</p>
              <GrView />
            </a>
          ) : (
            <UploadButton link="https://airtable.com/appdBZvAEpTBH3cAP/shrjJ8fSvYeaJkuQY" />
          )}
        </div>
      </div>
    </li>
  );
}

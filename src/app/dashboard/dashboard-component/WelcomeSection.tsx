import React, { ReactNode } from "react";
import { getProfileData } from "../data";
import { ClipboardCopy } from "@src/components/ClipboardCopy";
import { LinkOut } from "@src/components/ui/Links";
import { DownloadButton } from "@src/components/ui/Button";
import { Card } from "@src/components/ui/Card";
import { getProfileUrl } from "../utils";

export default async function WelcomeSection() {
  const [ProfileData, hasData] = await getProfileData();
 
  const name = ProfileData?.name;
  return (
    <section className="rounded-xl border bg-card text-card-foreground shadow bg-white w-full p-6">
      <div>
        <h1 className="text-3xl">
          Hey{" "}
          <span className="font-bold capitalize ">
            {name?.trim()?.toLowerCase()}
          </span>
          !
        </h1>
        <h1 className="text-xl">Welcome to your SPPG Status Tracker</h1>
      </div>
    </section>
  );
}

type dashboardCardProps = {
  title?: string;
  children?: ReactNode;
  stat?: string;
  isGood?: boolean;
};

export async function DashboardCards({
  title,
  children,
  stat,
  isGood,
}: dashboardCardProps) {
  return (
    <section className="rounded-xl border bg-card text-card-foreground shadow bg-white">
      <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <h3
          className={`tracking-tight text-base font-semibold ${
            isGood === undefined
              ? ""
              : isGood
              ? "text-[#13B04B]"
              : "text-[#F93C65]"
          }`}
        >
          {title}
        </h3>
      </div>
      <div className="p-6 py-2 text-sm">
        <p className="text-4xl font-bold">{stat}</p>
        {children}
      </div>
    </section>
  );
}

export function DownloadCard({ link = "", name = "" }) {
  return (
    <Card className="flex justify-between items-center">
      <h1 className="text-base">{name}</h1>
      <DownloadButton link={link} fileName={name} />
    </Card>
  );
}

export function LinkCard({ link = "", name = "" }) {
  return (
    <Card className="flex justify-between items-center">
      <LinkOut link={link} text={name} />
      <ClipboardCopy copyText={link} />
    </Card>
  );
}

export async function StudentInfo() {
  const [profileData, hasData] = await getProfileData();
  const profilePicture = getProfileUrl(profileData?.passport);
  
if(!hasData){
  return <div className="w-full bg-white inline-flex flex-col p-6 items-center rounded-2xl  justify-center border bg-card text-card-foreground shadow gap-4">No data</div>
}
  return (
    <div className="w-full bg-white inline-flex flex-col p-6 items-center rounded-2xl  justify-center border bg-card text-card-foreground shadow gap-4">
      <div
        className={` bg-green-400 rounded-full border-green-400 border-2 w-[150px] h-[150px] overflow-hidden flex justify-center items-center`}
      >
        <img
          src={profilePicture?.url}
          alt="profile picture"
          className="scale-150 w-fit h-fit "
        />
      </div>
      <h2 className="text-2xl font-bold text-center capitalize">
        {profileData?.first_middle_last_name?.trim()?.toLowerCase()}
      </h2>
      <div className="flex flex-wrap justify-center items-start gap-2">
        <p className="bg-green-600 px-4 mr-2 text-white rounded-2xl">
          {profileData?.matric_number}
        </p>
        <p className="bg-blue-600 px-4 text-white rounded-2xl flex ">
          {profileData?.group_no}
        </p>
      </div>
    </div>
  );
}

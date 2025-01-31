import React from "react";
import UploadButton from "../../components/UploadButton";

type Props = {
  [key: string]: any;
};

export default function GroupManifestoGR({ data }: Props) {
  const manifestoStatus = data?.manifesto_grade_from_student_manifesto;

  return (
    <div className="grid grid-cols-2 h-full">
      <section className=" px-8 py-4 flex flex-col items-center gap-4 border-l border-[#00000080] justify-center ">
        <p className="w-full flex flex-col items-center font-bold text-sm">
          Status
        </p>
        <p
          className={`${
            manifestoStatus === "Submitted" ? "bg-[#13B04B]" : "bg-[#DA121A]"
          } text-white font-bold rounded-full py-1 px-2 text-xs  w-fit`}
        >
          {manifestoStatus}
        </p>
      </section>

      <section className="p-4 flex items-center justify-center gap-2 border-l border-[#00000080]">
        <UploadButton link="https://airtable.com/appdBZvAEpTBH3cAP/shrjJ8fSvYeaJkuQY" />
      </section>
    </div>
  );
}

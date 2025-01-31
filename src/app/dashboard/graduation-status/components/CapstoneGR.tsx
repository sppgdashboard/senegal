import React from "react";
import UploadButton from "../../components/UploadButton";

type Props = {
  [key: string]: any;
};

export default function CapstoneGR({ data }: Props) {
  return (
    <div className="grid grid-cols-2 h-full">
      <section className="  px-8 py-4 flex flex-col items-center gap-4 border-l border-[#00000080] justify-center ">
        <p className="w-full flex flex-col items-center font-bold text-sm">
          Status
        </p>
        <p className="bg-[#DA121A] text-white font-bold rounded-full py-1 px-2 text-xs w-fit">
          Not Submitted
        </p>
      </section>

      <section className="p-4 flex items-center justify-center gap-2 border-l border-[#00000080]">
        <UploadButton link="/" />
      </section>
    </div>
  );
}

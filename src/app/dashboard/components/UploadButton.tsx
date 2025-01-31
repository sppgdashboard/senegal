import Link from "next/link";
import React from "react";
import { BsUpload } from "react-icons/bs";

type Props = {
  link: string;
};

export default function UploadButton({ link }: Props) {
  return (
    <>
      <Link
        href={link}
        className="px-2 py-1 rounded-lg border border-[#00000080] flex gap-4 justify-center items-center font-semibold duration-300 hover:bg-gradient-to-r hover:to-[#13B04B] hover:from-[#0D9EDA] hover:text-[#ffffff] hover:border-white "
      >
        <p>Upload</p>
        <BsUpload />
      </Link>
    </>
  );
}

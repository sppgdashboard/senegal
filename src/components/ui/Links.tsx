import React from "react";
import { Icon } from "@iconify/react";
// import Link from "next/link";

type LinkOutProps = {
  link: string;
  text: string;
};

export function LinkOut({ link, text }: LinkOutProps) {
  return (
    <a
      href={link}
      target="_blank"
      className=" group flex items-center gap-1 underline text-base"
    >
      <p>{text}</p>
      <span className="opacity-0 group-hover:opacity-100 ">
        <Icon icon="quill:link-out" width={16} />
      </span>
    </a>
  );
}

type LinkToProps = {
  link: string;
  text: string;
};

// export function LinkTo({ link, text }: LinkToProps) {
//   return (
//     <Link href={link} target="_blank" className="hover:underline">
//       <p>{text}</p>
//     </Link>
//   );
// }

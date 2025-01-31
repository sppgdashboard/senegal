"use client";
import React from "react";
import Link from "next/link";
import { RiLogoutCircleRLine } from "react-icons/ri";

export default function Logout() {
  return (
    <Link
      href={`/login`}
      className={`hover:bg-gradient-to-r hover:to-[#13B04B] hover:from-[#0D9EDA]  hover:text-[#ffffff] p-2 rounded-2xl flex gap-4 items-center text-xl group relative group `}
      title="Logout"
    >
      <div>
        <RiLogoutCircleRLine />
      </div>
      <div className="md:hidden">Log out</div>
    </Link>
  );
}

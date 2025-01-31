import React from "next";
import GraduationStatus from "./GraduationStatus";
import GraduationRequirements from "./GraduationRequirements";
import { Suspense } from "react";
import { Loading } from "@src/components/Skeleton/CardSkeleton";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <GraduationStatus />
      </Suspense>
      <figure className="w-full">
        <div className="w-full bg-[#00000090] h-[1px]"></div>
      </figure>
      <Suspense fallback={<Loading />}>
        <GraduationRequirements />
      </Suspense>
    </>
  );
}

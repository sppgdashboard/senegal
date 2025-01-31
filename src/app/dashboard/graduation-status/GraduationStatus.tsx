import React, { Suspense } from "react";
import {
  MyManifesto,
  AttendanceRatingsCard,
  GroupManifestoCard,
  ShoolFeesCard,
  CapstoneGroupCard,
} from "./components/GraduationStatusCards";
import { LoadingCard } from "@src/components/Skeleton/CardSkeleton";

export default function GraduationStatus() {
  return (
    <section className="w-full flex flex-col gap-4">
      <h5 className="text-3xl">Graduation Status</h5>

      <ul className=" grid grid-cols-fluid gap-4">
        <Suspense fallback={<LoadingCard />}>
          <AttendanceRatingsCard />
        </Suspense>

        <Suspense fallback={<LoadingCard />}>
          <ShoolFeesCard />
        </Suspense>

        <Suspense fallback={<LoadingCard />}>
          <MyManifesto />
        </Suspense>

        <Suspense fallback={<LoadingCard />}>
          <GroupManifestoCard />
        </Suspense>

        <Suspense fallback={<LoadingCard />}>
          <CapstoneGroupCard />
        </Suspense>

        {/* <Suspense fallback={<LoadingCard />}>
          Assignment rating Section
          <li
            key={5}
            className="rounded-xl border bg-card text-card-foreground shadow bg-white"
          >
            <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="tracking-tight text-base font-semibold">
                Assignment rating
              </h3>
              <Icon
                icon="material-symbols-light:assignment-outline"
                width={24}
              />
            </div>
            <div className="p-6 py-2">
              <p className="text-2xl font-bold">57%</p>
              <p className="">360-degree rating</p>
            </div>
          </li>{" "}
        </Suspense> */}

        {/* <Suspense fallback={<LoadingCard />}>
          <li
            key={6}
            className="rounded-xl border bg-card text-card-foreground shadow bg-white"
          >
            <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="tracking-tight text-base font-semibold">
                Meeting rating
              </h3>
              <Icon icon="mingcute:performance-line" width={24} />
            </div>
            <div className="p-6 py-2">
              <p className="text-2xl font-bold">89%</p>
              <p className="">360-degree rating</p>
            </div>
          </li>
        </Suspense> */}
      </ul>
    </section>
  );
}

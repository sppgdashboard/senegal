import React from "react";
import { getSchoolFeesData } from "../data";
import { formatToNumber } from "../utils";
import { PaymentStatusTag } from "@src/components/PaymentStatusTag";
import { PaymentsShowMore } from "./PaymentDetails";
import { Icon } from "@iconify/react/dist/iconify.js";


export default async function PaymentSection() {
  const [data] = await getSchoolFeesData();
  const schoolFeesData: schoolFeesType = await data;  

  const completedPercentage = formatToNumber(
    (+schoolFeesData?.total_paid / +schoolFeesData?.fees_to_pay_naira) * 100,
    2
  );
  const IncompletedPercentage = formatToNumber(
    (+schoolFeesData?.total_due / +schoolFeesData?.fees_to_pay_naira) * 100,
    2
  );

  return (
    <div className=" grid gap-4 w-full">
      <div className="flex gap-4 items-center flex-wrap relative">
        <h1 className="text-3xl">Payments</h1>
        <PaymentStatusTag status={schoolFeesData?.school_fees_status} />

         <div className=" flex gap-2 items-center group bg-[#0d9dda] hover:delay-100 px-2 py-1 rounded-lg text-white font-semibold">
                  <span>Show payment details</span>{" "}
                  <Icon
                    icon="iconamoon:arrow-down-2-thin"
                    width={24}
                    className="rotate-0 group-hover:rotate-180 duration-300 group-hover:delay-500"
                  />
               <PaymentsShowMore />
                </div>
        {/* <LinkOut text="View Receipt" link="/" /> */}
      </div>
      <div className="grid grid-cols-fluid gap-4">
        <PaymentCard
          title="Fees to Pay"
          stat={formatToNumber(schoolFeesData?.fees_to_pay_naira, 2)}
          subtitle="40% discount"
        />

        <PaymentCard
          title="Total Paid"
          stat={formatToNumber(schoolFeesData?.total_paid, 2)}
          subtitle={`${completedPercentage}% paid`}
        />

        <PaymentCard
          title="Total Due"
          stat={formatToNumber(schoolFeesData?.total_due, 2)}
          subtitle={`${IncompletedPercentage}% due`}
        />
      </div>
    </div>
  );
}

export function PaymentCard({ title = "", subtitle = "", stat = "" }) {
  return (
    <section className="rounded-xl border bg-card text-card-foreground shadow bg-white relative overflow-hidden">
      {/* <div className="w-[300px] h-[300px] absolute bg-red-400 rounded-full bottom-0 -right-60  z-10 blur-3xl"></div> */}
      <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="tracking-tight text-base font-semibold">{title}</h3>
      </div>
      <div className="p-6 py-2">
        <p className="text-4xl font-bold">
          ₦{stat}
          <span className="font-light text-base"></span>
        </p>
        <p className="text-sm">{subtitle}</p>
      </div>
    </section>
  );
}

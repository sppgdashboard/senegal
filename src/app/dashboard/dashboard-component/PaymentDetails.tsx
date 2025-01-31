import { ClipboardCopy } from "@src/components/ClipboardCopy";
import { LinkOut } from "@src/components/ui/Links";
import React from "react";

export function PaymentsShowMore() {
  return (
    <div className="absolute top-0 left-0 z-10 w-full group-hover:scale-100 scale-0 duration-300 text-left delay-300 text-black">
      <div className="bg-white p-12 pr-16 rounded-lg">
        <div className="grid mb-10 grid-cols-2 gap-8">
          <div>
            <h2 className="font-extrabold text-base">Pay in Naira</h2>
            <h3 className="font-extrabold my-1"> NAIRA ACCOUNT</h3>
            <p>
              <span className="flex items-center gap-4">
                Account Name: New Africa School of Public Policy and Governance
              </span>
              <br />
              <span className="flex items-center gap-4">
                Account Number: 1228527971{" "}
                <ClipboardCopy copyText={"1228527971"} />
              </span>
              <br />
              <span className="flex items-center gap-4">
                Bank Name: Zenith Bank{" "}
                <ClipboardCopy copyText={"Zenith Bank"} />
              </span>
            </p>
          </div>
          <div>
            <h2 className="font-extrabold text-base">Pay in Dollar</h2>
            <h3 className="font-extrabold my-1"> DOLLAR ACCOUNT</h3>
            <p>
              <span className="flex items-center gap-4">
                Account Name: New Africa School of Public Policy and Governance
              </span>
              <br />
              <span className="flex items-center gap-4">
                Account Number: 5074024259{" "}
                <ClipboardCopy copyText={"5074024259"} />
              </span>
              <br />
              <span className="flex items-center gap-4">
                Bank Name: Zenith Bank{" "}
                <ClipboardCopy copyText={"Zenith Bank"} />
              </span>
              <br />
              <span className="flex items-center gap-4">
                Swift Code: ZEIBNGLA <ClipboardCopy copyText={"ZEIBNGLA"} />
              </span>
            </p>
          </div>

          {/* <LinkOut
            link={"https://paystack.com/pay/hws811vp8f"}
            text={"Pay through Paystack"}
          /> */}
          <span className="flex items-center gap-4">
            Send receipts to: admission@thesppg.org{" "}
            <ClipboardCopy copyText={"admission@thesppg.org"} />
          </span>
        </div>
      </div>
    </div>
  );
}

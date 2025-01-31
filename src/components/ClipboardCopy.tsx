"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";

type Props = {
  copyText?: string;
};
export function ClipboardCopy({ copyText }: Props) {
  const [isCopied, setIsCopied] = useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text: string = "") {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {copyText ? (
        <button className={``} onClick={handleCopyClick}>
          {isCopied ? (
            <Icon icon="ph:check-bold" width={16} />
          ) : (
            <Icon icon="solar:copy-linear" width={16} />
          )}
        </button>
      ) : (
        <></>
      )}
    </>
  );
}

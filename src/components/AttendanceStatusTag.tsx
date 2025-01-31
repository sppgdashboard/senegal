type Props = {
  status: StatusOptions;
};

export function AttendanceStatusTag({ status }: Props) {
  const options: Record<StatusOptions, string> = {
    None: "bg-[#000000]",
    "Waived by FLO but watch class": "bg-[#13B04B80]",
    "Attended Class": "bg-[#13B04B80]",
    "Not Required" : "bg-[#13B04B80]",
    "M-  Taken Make-up class, (Makeup Accepted)": "bg-[#DA121A80]",
    "T - Re-watch Class (Sent SLO an absence Notification)": "bg-[#DA121A80]",
    "Missed Class - Spent below 2hrs  in Class - Re-Watch Class & Take Makeup Test": "bg-[#DA121A80]",
    "Did not attend class - Watch Class & Take Makeup Test": "bg-[#DA121A80]",
  };

  const colorClass = options[status] || "";
  // console.log(options[status], status);
  
  return (
    <div
      className={` max-w-[200px] overflow-hidden whitespace-nowrap text-ellipsis px-2 py-1 rounded-full w-fit text-nowrap text-xs text-black ${colorClass}`}
    >
      {status}
    </div>
  );
}

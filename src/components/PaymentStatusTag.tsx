type StatusOptions =
  | "None"
  | "100% Scholarship"
  | "No Payment Made"
  | "Payment Complete"
  | "Paid Less than 50%"
  | "Paid More than 50%";

type Props = {
  status: StatusOptions;
};

export function PaymentStatusTag({ status }: Props) {  
  const options: Record<StatusOptions, string> = {
    None: "bg-[#000000]",
    "100% Scholarship": "bg-[#FFBA05]",
    "No Payment Made": "bg-[#DC043B]",
    "Payment Complete": "bg-[#006400]",
    "Paid Less than 50%": "bg-[#FFA6C1]",
    "Paid More than 50%": "bg-[#9AE095]",
  };

  const colorClass = options[status] || "";

  return (
    <div
      className={`px-2 py-1 rounded-full w-fit text-nowrap text-xs text-white ${colorClass}`}
    >
      {status}
    </div>
  );
}

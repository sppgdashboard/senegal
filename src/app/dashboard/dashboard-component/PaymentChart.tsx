"use client";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LinkOut } from "@src/components/ui/Links";
import { PaymentStatusTag } from "@src/components/PaymentStatusTag";
const chartData = [
  { browser: "total_paid", visitors: 40, fill: "#13B04B" },
  { browser: "total_due", visitors: 200, fill: "#DA121A" },
  { browser: "scholarship", visitors: 160, fill: "#0D9EDA" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  total_paid: {
    label: "Amount Paid",
    color: "hsl(var(--chart-1))",
  },
  total_due: {
    label: "Amount Due",
    color: "hsl(var(--chart-2))",
  },
  scholarship: {
    label: "Scholarship",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

type PaymentsChartProps = {
  completedSchoolFees: string;
};
export function PaymentsChart() {
  return (
    <Card className="flex flex-col w-full">
      <CardHeader className="items-center pb-0">
        <LinkOut text="View Receipt" link="/" />
        <CardTitle>School Fees Payment</CardTitle>
        <CardDescription className="flex flex-col items-center gap-4 ">
          <span>Fees To pay (naira)</span>
          <span className="text-xl text-black font-bold">₦240,000</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[350px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" label nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        {/* <div>{completedSchoolFees}% Completed</div> */}
        {/* <PaymentStatusTag status="Paid less than 50%" /> */}
      </CardFooter>
    </Card>
  );
}

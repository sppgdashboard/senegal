import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: Props) {
  return (
    <section
      className={cn("rounded-xl border shadow bg-white w-full p-4", className)}
    >
      {children}
    </section>
  );
}

export function NoDataCard({ name = "" }) {
  return (
    <li
      key={1}
      className="rounded-xl border bg-card text-card-foreground shadow bg-white"
    >
      <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="tracking-tight text-base font-semibold">{name}</h3>
        <Icon icon="mdi:delete-empty-outline" width={24} />
      </div>
      <div className="p-6 py-2">
        <p>No data found</p>
      </div>
      <div className="p-6 flex flex-row items-center justify-between space-y-0 py-2">
        <h3 className="tracking-tight text-sm font-medium"></h3>
      </div>
    </li>
  );
}

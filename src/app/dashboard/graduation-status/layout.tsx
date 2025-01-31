import React from "next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SPPG | Dashboard | Graduation Status",
  description: "Graduation Status",
};

export default async function GraduationStatusLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

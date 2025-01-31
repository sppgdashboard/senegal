"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Status } from "@src/components/Status";
import React from "next";
import { AttendanceStatusTag } from "@src/components/AttendanceStatusTag";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";


interface AttendanceListType {
  list: AttendanceType[];
}

export default function AttendanceTable({ list }: AttendanceListType) {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const months = list.map((l) => l.month);
  const uniqueMonths = Array.from(new Set(months));

  const themes = list.map((l) => l.theme);
  const uniquethemes = Array.from(new Set(themes));

  // Filter the attendance list based on selected filters
  const filteredList = list.filter((attendance) => {
    const themeMatch = selectedTheme ? attendance.theme === selectedTheme : true;
    const monthMatch = selectedMonth
      ? attendance.month === selectedMonth
      : true;
    return themeMatch && monthMatch;
  });
  
  return (
    <>
      <section className="flex justify-between flex-wrap gap-2 mb-4">
        {/* Month Filter */}
              <div className="flex gap-2 ">
        <Select onValueChange={(value) => setSelectedMonth(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Month" />
          </SelectTrigger>
          <SelectContent>
            {uniqueMonths?.map((month) => (
              <SelectItem value={month} className="capitalize" key={month}>
                {month}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <button onClick={() => setSelectedMonth(null)}>
        <Icon
        icon="material-symbols-light:close"
        width={24}
        className="bg-[#74747480] rounded-full p-1"
      />
        </button>
        </div>

        {/* Theme Filter */}
            <div className="flex gap-2">
            <Select onValueChange={(value) => setSelectedTheme(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Theme"/>
          </SelectTrigger>
          <SelectContent>
            {uniquethemes?.map((theme) => (
              <SelectItem value={theme} className="capitalize" key={theme}>
                {theme}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <button onClick={() => setSelectedTheme(null)}>
        <Icon
        icon="material-symbols-light:close"
        width={24}
        className="bg-[#74747480] rounded-full p-1"
      />
        </button>
            </div>
      </section>

      <Table>
        <TableCaption>A list of your attendance records.</TableCaption>
        <TableHeader>
          <TableRow className="bg-white hover:bg-white text-black">
            <TableHead className="text-black">In Class</TableHead>
            <TableHead className="text-black">Date</TableHead>
            <TableHead className="text-black">Theme</TableHead>
            <TableHead className="text-black">Course</TableHead>
            <TableHead className="text-black">Attendance Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredList.length > 0 ? (
            filteredList.map((attendance, index) => (
              <TableRow key={index}>
                <TableCell className="p-4">
                  <Status status={attendance.in_class === 1} />
                </TableCell>
                <TableCell className="p-4">{attendance.date}</TableCell>
                <TableCell className="p-4">{attendance.theme}</TableCell>
                <TableCell className="p-4">{attendance.course_code}</TableCell>
                <TableCell className="p-4 max-w-[200px] overflow-hidden whitespace-nowrap text-ellipsis">
                  <AttendanceStatusTag status={attendance.status} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                No records found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}

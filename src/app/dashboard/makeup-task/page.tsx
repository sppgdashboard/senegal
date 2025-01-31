import React from "next";
import { getMakeupTaskData } from "../data";
import { formatDate } from "../utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function MakeUpTask() {
  const [data] = await getMakeupTaskData();
  
  const MakeupTasks: MakeupTaskListType = await data;

  return (
    <section className="grid gap-4 w-full">
      <div className="w-full font-bold text-2xl">Makeup Task</div>

      <figure className="w-full">
        <div className="w-full bg-[#00000090] h-[1px]"></div>
      </figure>
      <Table>
        <TableCaption>A list of your makeup tasks.</TableCaption>
        <TableHeader>
          <TableRow className="bg-white hover:bg-white text-black">
            <TableHead className="text-black">Course Code</TableHead>
            <TableHead className="text-black">Theme</TableHead>
            <TableHead className="text-black">Grading</TableHead>
            <TableHead className="text-black">Date Missed</TableHead>
            <TableHead className="text-black">Reviewer comments</TableHead>
            <TableHead className=""></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {MakeupTasks?.map((makeupTask, index) => (
            <TableRow key={index}>
              <TableCell className="p-4">{makeupTask.theme}</TableCell>
              <TableCell className="p-4 max-w-[150px] overflow-hidden whitespace-nowrap text-ellipsis">
                {makeupTask.topic_code}
              </TableCell>
              <TableCell className="p-4">{makeupTask.make_up_grade}</TableCell>
              <TableCell className="p-4">
                {formatDate(makeupTask.date).dateOnly}
              </TableCell>
              <TableCell className="p-4">
                {makeupTask.reviewer_comments}
              </TableCell>
              <TableCell className="p-4">
                {makeupTask.make_up_grade === "Makeup Accepted" ? (
                  <span className="bg-gray-300 grid place-content-center py-1 px-2 rounded-full text-white text-xs">
                    Submit
                  </span>
                ) : (
                  <span className="bg-[#0D9EDA] grid place-content-center py-1 px-2 rounded-full text-white text-xs">
                    <a
                      href="https://airtable.com/appsbsxg7a39gW5nM/shrShP8To5qLCZnKy"
                      target="_blank"
                      className="underline"
                    >
                      Submit
                    </a>
                  </span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="bg-[#DC0000] text-white p-4 rounded-lg">
        <span className="font-bold">Disclamer</span> <br />
        Please note that if you have submitted your makeup task with an
        acknowledgment, you don’t have to do anything further than to await the
        outcome, it can be either of two outcomes; rejected or accepted.
      </p>
    </section>
  );
}

import React from "next";
import { getAssignmentData } from "../data";
import { formatDate, getManifestoUrl } from "../utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function assignment() {
  const [data] = await getAssignmentData();
  console.log(data);

  const assignmentList: AssignmentListType = await data;

  return (
    <section className="grid gap-4 w-full">
      <div className="w-full font-bold text-2xl">Assignments</div>

      <figure className="w-full">
        <div className="w-full bg-[#00000090] h-[1px]"></div>
      </figure>
      <Table>
        <TableCaption>A list of your assignment tasks.</TableCaption>
        <TableHeader>
          <TableRow className="bg-white hover:bg-white text-black">
            <TableHead className="text-black">Assignment Type</TableHead>
            <TableHead className="text-black">Faculty</TableHead>
            <TableHead className="">Group (if any)</TableHead>
            <TableHead className="text-black">Uploaded Assignment</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assignmentList?.map((assignment, index) => (
            <TableRow key={index}>
              <TableCell className="p-4">
                {assignment?.assignment_type}
              </TableCell>
              <TableCell className="p-4">
                {assignment?.which_faculty_s_assignment_are_you_submitting}
              </TableCell>
              <TableCell className="p-4">
                {assignment?.assignment_type?.trim() === "Group Assignment"
                  ? assignment.group_no_name
                  : ""}
              </TableCell>
              <TableCell className="p-4">
                <span className="bg-[#0D9EDA] grid place-content-center py-2 px-4 rounded-full text-white text-xs w-fit">
                  <a
                    href={`${getManifestoUrl(
                      assignment.upload_your_assignment
                    )}`}
                    target="_blank"
                    className="underline"
                  >
                    View
                  </a>
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}

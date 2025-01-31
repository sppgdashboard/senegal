import React from "next";
import { getAttendanceData, getFullAttendanceData } from "../data";
import { DashboardCards } from "../dashboard-component/WelcomeSection";
import { formatDate, formatToNumber } from "../utils";
import AttendanceTable from "./AttendanceTable";

export default async function attendance() {
  const [attendanceData, hasData] = await getFullAttendanceData();
  if (!hasData) {
    return <div>No data found</div>;
  }
  const attendanceList: AttendanceListType =
    formatAttendanceList(attendanceData);

  return (
    <section className="w-full flex flex-col gap-8">
      <StudentAttendanceInfo />
      <AttendanceTable list={attendanceList} />
    </section>
  );
}

async function StudentAttendanceInfo() {
  const [attendanceData] = await getAttendanceData();

  return (
    <div className=" grid grid-cols-fluid gap-4 w-full">
      <DashboardCards
        title="Classes Attended"
        isGood={true}
        stat={formatToNumber(attendanceData?.cum_total_classes_attended)}
      >
        <p>
          out of{" "}
          {formatToNumber(
            +attendanceData?.cum_total_classes_held,
            0
          )}
        </p>
      </DashboardCards>

      <DashboardCards
        title="Classes Missed"
        isGood={false}
        stat={formatToNumber(attendanceData?.cum_total_classes_missed, 0)}
      >
        out of{" "}
        {formatToNumber(
          +attendanceData?.cum_total_classes_held ,
          0
        )}
      </DashboardCards>

      <DashboardCards
        title="Classes Held"
        isGood={true}
        stat={formatToNumber(
          +attendanceData?.cum_total_classes_held,
          0
        )}
      ></DashboardCards>
    </div>
  );
}

function formatAttendanceList(attendanceData: NestedObject) {
  const data = Object.entries(attendanceData);
  const list = [];

  let goodOptions = ["Waived by FLO but watch class", "Attended Class",  "Not Required"];

  const badOptions = [
    "None",
    "T - Re-watch Class (Sent SLO an absence Notification)",
    "Missed Class - Spent below 2hrs  in Class - Re-Watch Class & Take Makeup Test",
    "Did not attend class - Watch Class & Take Makeup Test",
    "M-  Taken Make-up class, (Makeup Accepted)",
  ];

  for (let i = 0; i < data.length; i++) {
    let colName = data[i][0];
    let words = colName.split("_");
    let firstWord = words[0];

    if (firstWord === "att") {
      let classDate = `${words[1]} ${words[2]} ${words[3]}`.toUpperCase();

      let theme = words[4].toUpperCase();
      let course_code = words.slice(5).join(" ").toUpperCase();
      let attendanceStatus = data[i][1];
      attendanceStatus = attendanceStatus.toLowerCase().trim();
      let inClass = 1;

      let [Status] = goodOptions.filter((opt) => {
        if (opt.trim().toLowerCase() === attendanceStatus) {
          return true;
        }
        return false;
      });
      
      
      if (!Status) {
        [Status] = badOptions.filter((opt) => {
          if (opt.trim().toLowerCase() === attendanceStatus) {
            return true;
          }
          return false;
        });

        inClass = 0;
      }

      // console.log(2, Status , attendanceStatus);
      
      let att = {
        date: classDate,
        month: words[2].toUpperCase(),
        theme,
        course_code,
        status: Status || attendanceStatus,
        in_class: inClass,
      };

      list.push(att);
    }
  }

  // console.log(list);
  
  return list;
}

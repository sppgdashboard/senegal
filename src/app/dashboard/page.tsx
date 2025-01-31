import WelcomeSection, {
  DashboardCards,
  DownloadCard,
  LinkCard,
  StudentInfo,
} from "./dashboard-component/WelcomeSection";
import { Suspense } from "react";
import { formatToNumber } from "./utils";
import { getAttendanceData } from "./data";
import PaymentSection from "./dashboard-component/PaymentSection";
import { Loading, LoadingCards } from "@src/components/Skeleton/CardSkeleton";
import {
  ProfileSkeleton,
  WelcomeSkeleton,
} from "@src/components/Skeleton/ProfileSkeleton";
import { MIN_ATTENDANCE_VALUE } from "@src/constants";
import { Card } from "@src/components/ui/Card";
import { ClipboardCopy } from "@src/components/ClipboardCopy";

export default async function Dashboard() {
  return (
    <>
      <Suspense fallback={<WelcomeSkeleton />}>
        <WelcomeSection />
      </Suspense>
      <div className="w-full grid lg:grid-cols-[1fr,_2fr] gap-4 grid-cols-1">
        <Suspense fallback={<ProfileSkeleton />}>
          <StudentInfo />
        </Suspense>

        <Suspense fallback={<LoadingCards />}>
          <StudentAttendanceInfo />
        </Suspense>
      </div>

      <figure className="w-full">
        <div className="w-full bg-[#00000090] h-[1px]"></div>
      </figure>
      <Suspense fallback={<Loading />}>
        <PaymentSection />
      </Suspense>
      <figure className="w-full">
        <div className="w-full bg-[#00000090] h-[1px]"></div>
      </figure>
      <div className="text-3xl grid gap-4 w-full">
        <h1>Downloads</h1>

        <section className="grid grid-cols-fluid md:grid-cols-fluid-lg w-full gap-4 text-base">
          <DownloadCard
            link="https://drive.google.com/file/d/1SyfHucJ9NMSl2xyX4DXXYYrWLiZ4yJAE/view?usp=sharing"
            name="Acculturation Calendar"
          />
          <DownloadCard
            link="https://docs.google.com/document/d/19m7zGsK4KnCdoTjpwd1k4Q7Q-qR5HoFs/edit?usp=sharing&ouid=110083603378106356238&rtpof=true&sd=true"
            name="Academic Calendar for Class of 2025"
          />
          <DownloadCard
            link="https://drive.google.com/file/d/1l4aOZduKpsWG350lm9gLEYFuiGzrvQzN/view?usp=sharing"
            name="Student Hand Book"
          />
          <DownloadCard
            link="https://docs.google.com/document/d/1ocXLprc7j38y2MPJwlc8KbZmxsTb921e/edit?usp=sharing&ouid=114822974040207518011&rtpof=true&sd=true"
            name="Capstone Guidelines"
          />

        </section>
      </div>
      <figure className="w-full">
        <div className="w-full bg-[#00000090] h-[1px]"></div>
      </figure>
      <div className="text-3xl grid gap-4 w-full">
        <h1>Links</h1>

        <section className="grid grid-cols-fluid md:grid-cols-fluid-lg w-full gap-4 text-base">
          <LinkCard
            link="https://airtable.com/appgnFrdh8X7Zqlhr/shrkuZCCCvLbvxQlx"
            name="Submit your Make-up Task"
          />
          <LinkCard
            link="https://airtable.com/appgnFrdh8X7Zqlhr/shr8xjbWEkqbf4D0d"
            name="Dispute your attendance"
          />
          <LinkCard
            link="https://drive.google.com/drive/folders/1gQZANL4GywSC_aaH9Iy9-MlK_Pa3nFju?usp=sharing"
            name="Confirm Your Attendance from Zoom"
          />

          <LinkCard
            link="https://airtable.com/appsbsxg7a39gW5nM/shru48o5GGxt8xJPu"
            name="2024 Best Group Manifesto Sample"
          />

          <LinkCard
            link="https://drive.google.com/drive/folders/1Qc6Lxu9Fm_vty-Kb1xNfWdz709Z1O_RE?usp=sharing"
            name="2023 Final Capstone Submission Sample"
          />

          <LinkCard
            link="https://drive.google.com/drive/folders/1P9W8wXPgQMYQDmklHUpbvARdJbzJOAvm?usp=sharing"
            name="2023 Group Best Manifesto Sample"
          />

          <LinkCard
            link="https://drive.google.com/drive/folders/1KFEmC34hQ3yjoPAszoAlnRCMhDb01gxI?usp=sharing"
            name="2024 Final Capstone Submission Sample"
          />
          <LinkCard
            link="https://airtable.com/appgnFrdh8X7Zqlhr/shrmIGzMnFMkQCk09"
            name="Submit Your Video Spotlight"
          />
          <LinkCard
            link="https://airtable.com/appgnFrdh8X7Zqlhr/shrAINn4kzWsVmGfg"
            name="Submit Your Manifesto"
          />
        </section>
      </div>
      <figure className="w-full">
        <div className="w-full bg-[#00000090] h-[1px]"></div>
      </figure>
      <div className="text-3xl grid gap-4 w-full">
        <h1>Contacts</h1>

        <section className="grid grid-cols-fluid md:grid-cols-fluid-lg w-full gap-4 text-base">
          <Card>
            <span className="flex items-center justify-between gap-4">
              Contact SAO: sao.nigeria@thesppg.org
              <ClipboardCopy copyText={"sao.nigeria@thesppg.org"} />
            </span>
          </Card>
          <Card>
            <span className="flex items-center justify-between gap-4">
              Contact HLE: technology@nigeria.thesppg.org
              <ClipboardCopy copyText={"technology@nigeria.thesppg.org"} />
            </span>
          </Card>
          <Card>
            <span className="flex items-center justify-between gap-4">
              Contact Admissions: admission@nigeria.thesppg.org
              <ClipboardCopy copyText={"admission@nigeria.thesppg.org"} />
            </span>
          </Card>
        </section>
      </div>
    </>
  );
}

async function StudentAttendanceInfo() {
  const [attendanceData] = await getAttendanceData();
  const attendanceRating = attendanceData?.program_attendance_rating;

  return (
    <div className=" grid grid-cols-fluid gap-4 w-full">
      <DashboardCards
        title="Programme Attendance"
        isGood={true}
        stat={formatToNumber(attendanceRating, 2) + "%"}
      >
        {attendanceRating >= MIN_ATTENDANCE_VALUE ? (
          <p className="bg-[#13B04B] text-white font-bold rounded-full py-1 px-2 text-xs flex justify-center w-fit">
            On track
          </p>
        ) : (
          <p className="bg-[#DA121A] text-white font-bold rounded-full py-1 px-2 text-xs flex justify-center w-fit">
            Not on track
          </p>
        )}
      </DashboardCards>

      <DashboardCards
        title="Classes Attended"
        isGood={true}
        stat={formatToNumber(attendanceData?.cum_total_classes_attended)}
      >
        <p>
          out of{" "}
          {formatToNumber(
            +attendanceData?.cum_total_classes_attended +
              +attendanceData?.cum_total_classes_missed,
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
          +attendanceData?.cum_total_classes_attended +
            +attendanceData?.cum_total_classes_missed,
          0
        )}
      </DashboardCards>

      <DashboardCards
        title="Ungraded Make-up Task"
        isGood={true}
        stat={formatToNumber(attendanceData?.ungraded_makeup_tasks, 0)}
      >
        <p>
          out of {formatToNumber(attendanceData?.submitted_makeup_tasks, 0)}
        </p>
      </DashboardCards>
      <DashboardCards
        title="Accepted Make-up Task"
        isGood={true}
        stat={formatToNumber(attendanceData?.accepted_makeup_tasks, 0)}
      >
        <p>
          out of {formatToNumber(attendanceData?.submitted_makeup_tasks, 0)} 
        </p>
      </DashboardCards>
      <DashboardCards
        title="Rejected Make-up Task"
        isGood={false}
        stat={formatToNumber(attendanceData?.rejected_makeup_tasks, 0)}
      >
        <p>
          out of {formatToNumber(attendanceData?.submitted_makeup_tasks, 0)}
        </p>
      </DashboardCards>
      {/* 
          <DashboardCards
            title="Assignment Rating"
            subtitle={`out of ${formatToNumber(0, 0)}`}
            stat={formatToNumber(0, 0)}
          />

          <DashboardCards
            title="Meeting Rating"
            subtitle={`out of ${formatToNumber(0, 0)}`}
            stat={formatToNumber(0, 0)}
          /> */}
    </div>
  );
}

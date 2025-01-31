"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import sppg_logo from "@public/icons/sppg.svg";
import sppg from "@public/icons/sppg_text.svg";
import { Raleway } from "next/font/google";
import { useContextDashboard } from "@src/context/DashboardContext";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";
import { FaQuestion, FaS } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { CgPerformance, CgProfile } from "react-icons/cg";
import { BsCashStack } from "react-icons/bs";
import { GrAnnounce } from "react-icons/gr";
import { usePathname } from "next/navigation";
import Logout from "./Logout";
import { Icon } from "@iconify/react/dist/iconify.js";

const raleway = Raleway({ subsets: ["latin"] });

export default function SideBar() {
  let { isSidebarOpen, setIsSidebarOpen } = useContextDashboard();
  const pathname = usePathname();

  const tabs = [
    {
      display_name: "Dashboard",
      url_name: "",
      icon: <MdOutlineSpaceDashboard />,
    },
    {
      display_name: "Attendance",
      url_name: "attendance",
      icon: <FaRegAddressBook />,
    },
    {
      display_name: "Makeup-Task",
      url_name: "makeup-task",
      icon: <LuMail />,
    },
    {
      display_name: "Graduation Status",
      url_name: "graduation-status",
      icon: <CgPerformance />,
    },
    {
      display_name: "Assignment",
      url_name: "assignment",
      icon: <Icon icon="ic:outline-assignment" width={24} />,
    },
    // {
    //   display_name: "Payment",
    //   url_name: "/payment",
    //   icon: <BsCashStack />,
    // },
    // {
    //   display_name: "Announcement",
    //   url_name: "/announcement",
    //   icon: <GrAnnounce />,
    // },
    {
      display_name: "FAQ's",
      url_name: "/faqs",
      icon: <FaQuestion />,
    },
  ];
  const ww =
    "w-0 overflow-hidden absolute h-screen md:w-[100%] md:p-4 md:static lg:overflow-visible ";
  const www =
    " w-[100%] absolute h-screen  shadow-2xl lg:shadow-none  p-4 md:w-[300px] lg:static";
  // className={`${isOpen ? ww : www} `}

  if (false) {
    return (
      <aside
        className={`${raleway.className} ${
          isSidebarOpen ? www : ww
        }  duration-300 z-20 bg-white `}
      >
        <div className="flex justify-between w-full bg-red-200">
          <Link href="/" className="flex justify-center">
            <Image
              priority
              src={sppg_logo}
              alt="close sidebar"
              className="fill-blue-500"
            />
          </Link>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            close
          </button>
        </div>

        <ul className="flex flex-col px-4 gap-2">
          {tabs.map((tab) => (
            <li key={tab.display_name}>
              <Link
                href={`/dashboard${tab.url_name}`}
                className={`${
                  "/dashboard" + tab.url_name === pathname
                    ? "bg-gradient-to-r to-[#13B04B] from-[#0D9EDA] text-[#ffffff]"
                    : "hover:bg-gradient-to-r hover:to-[#13B04B] hover:from-[#0D9EDA] hover:text-[#ffffff] "
                } p-2 rounded-2xl flex gap-4 items-center text-xl group relative z-20`}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <div className="w-[10px] bg-[#0d9ddad3] h-[90%] hidden group-hover:flex absolute -left-[35px] rounded-r-lg"></div>

                <div className="">{tab.icon}</div>
                <p className="whitespace-nowrap">{tab.display_name}</p>
                <p className="absolute scale-0 group-hover:scale-100 group-hover:bg-gradient-to-r group-hover:to-[#13B04B] group-hover:from-[#0D9EDA] w-[200px] py-1 px-2 duration-300 left-10 rounded-xl">
                  {tab.display_name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center">
          {/* <Link
            href={`/profile`}
            className={`hover:bg-gradient-to-r hover:to-[#13B04B] hover:from-[#0D9EDA]  hover:text-[#ffffff] p-2 rounded-2xl flex gap-4 items-center text-xl group relative group`}
            title="profile"
          >
            <div>
              <CgProfile />
            </div>
          </Link> */}
          <Logout />
        </div>
      </aside>
    );
  }

  return (
    <aside
      // className={`${raleway.className} py-8 px-4 gap-8 grid grid-rows-[auto,_1fr,_auto]`}
      className={`${raleway.className} ${
        isSidebarOpen ? www : ww
      }  duration-300 z-20 bg-white grid grid-rows-[auto,_1fr,_auto] gap-4 max-w-[300px]  `}
    >
      <div className="flex gap-8 justify-between">
        <Link
          href="/posts/first-post"
          className={` ${isSidebarOpen ? "md:flex" : "md:hidden"}`}
        >
          <Image
            priority
            src={sppg}
            alt="close sidebar"
            className="fill-blue-500"
          />
        </Link>
        <Link
          href="/"
          className={`hidden ${isSidebarOpen ? "md:hidden" : "md:flex"}`}
        >
          <Image
            priority
            src={sppg_logo}
            alt="close sidebar"
            className="fill-blue-500"
          />
        </Link>

        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`${isSidebarOpen ? "md:flex" : "md:hidden"} lg:hidden`}
        >
          <Icon icon="ci:menu-alt-02" width={32} />
          {/* <Icon icon="pajamas:close" width={24} /> */}
        </button>
      </div>
      <ul className="flex flex-col gap-2">
        {tabs.map((tab) => (
          <li key={tab.display_name} className="w-fit">
            <Link
              href={`/dashboard/${tab.url_name}`}
              // className="p-2 rounded-2xl flex gap-4 items-center hover:bg-gradient-to-r hover:to-[#13B04B] hover:from-[#0D9EDA] hover:text-[#ffffff] text-xl group relative"
              className={`${
                "/dashboard" + tab.url_name === pathname
                  ? "bg-gradient-to-r to-[#13B04B] from-[#0D9EDA] text-[#ffffff]"
                  : "hover:bg-gradient-to-r hover:to-[#13B04B] hover:from-[#0D9EDA] hover:text-[#ffffff] "
              } p-2 rounded-2xl flex gap-4 items-center text-xl group relative z-20`}
              onClick={() => setIsSidebarOpen(false)}
            >
              <div className="w-[10px] bg-[#0d9ddad3] h-[90%] hidden group-hover:flex absolute -left-[20px] rounded-r-lg"></div>
              <div>{tab.icon}</div>
              <p
                className={`whitespace-nowrap  ${
                  isSidebarOpen ? "md:flex" : "md:hidden"
                }`}
              >
                {tab.display_name}
              </p>
              <p className="absolute scale-0 lg:group-hover:scale-100 lg:group-hover:bg-gradient-to-r lg:group-hover:to-[#13B04B] lg:group-hover:from-[#0D9EDA] w-[200px] py-1 px-2 duration-300 lg:left-10 rounded-xl ">
                {tab.display_name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col">
        <Logout />
      </div>
    </aside>
  );
}

// function Lol() {
//   const [isOpen, setIsOpen] = useState(false);

//   const ww = "w-[10px]";
//   const www = "w-[200px]";
//   return (
//     <button
//       className={`${isOpen ? ww : www} duration-300`}
//       onClick={() => setIsOpen(!isOpen)}
//     >
//       Hey
//     </button>
//   );
// }

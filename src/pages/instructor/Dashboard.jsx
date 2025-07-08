import React from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import Courses from "./Courses";
import Login from "../Login";
import { icons } from "../../assets/Data";

const Dashboard = () => {
  return (
    <>
      <div className="bg-[#16161D] p-5 text-white lg:hidden block">
        <span className="text-2xl link block w-fit p-1 hover:bg-gray-700">
          {icons.menuIcon}
        </span>
      </div>
      <div className="flex relative items-stretch">
        <div className="w-[70px] hidden lg:block relative z-1 bg-amber-100 min-h-[500px]">
          <Sidebar />
        </div>
        <div className="flex relative flex-col w-full gap-4 m-6 lg:mx-15">
          <Topbar />
          <Courses />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

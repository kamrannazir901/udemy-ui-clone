import React from "react";
import { Outlet } from "react-router-dom";
import CourseSidebar from "./CourseSidebar";

const CourseLayout = () => {
  return (
    <div>
      <div className="bg-black p-4 static top-0 font-semibold text-white">
        This is first course (draft)
      </div>
      <div className="flex flex-wrap lg:flex-nowrap mt-8 gap-8 container !p-0">
        <div className="shrink-0">
          <CourseSidebar />
        </div>
        <div className="shadow-lg w-full p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CourseLayout;

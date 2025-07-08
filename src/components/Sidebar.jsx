import React, { useState } from "react";
import { icons, images } from "../assets/Data";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="group absolute h-full w-[60px] transition-all duration-500 hover:w-[300px] bg-[#16161D] text-white font-semibold text-sm">
      <div className="sticky overflow-hidden top-0 flex flex-col gap-5 py-4 link">
        <NavLink
          to="/"
          className="relative after:transition-all after:duration-500 ml-5 w-[90px] after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-[75px] after:bg-[#16161D] group-hover:after:opacity-0"
        >
          <img src={images.logoinverted} alt="Logo" className="" />
        </NavLink>

        {/* Menu Items */}
        <div className="flex flex-col">
          {[
            { icon: icons.ondemandvideoIcon, label: "Courses" },
            { icon: icons.chatLeft, label: "Communication" },
            { icon: icons.Bars, label: "Performance" },
            { icon: icons.wrench, label: "Tools" },
            { icon: icons.helpCircle, label: "Resources" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex border-l-4  border-transparent hover:border-[#a435f0] items-center gap-4 py-5 px-2.5 link hover:bg-[#595C73] transition-all"
            >
              <span className="text-xl min-w-6 flex justify-center">
                {item.icon}
              </span>
              <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

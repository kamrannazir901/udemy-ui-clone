import React from "react";
import { icons } from "../../../assets/Data";
import { NavLink } from "react-router-dom";

const courseSteps = [
  {
    group: "Plan your course",
    steps: [
      {
        name: "Intended learners",
        link: "/instructor/course/intended-learners",
      },
      { name: "Course structure", link: "/instructor/course/comingsoon" },
      { name: "Setup & test video", link: "/instructor/course/comingsoon" },
    ],
  },
  {
    group: "Create your content",
    steps: [
      { name: "Film & edit", link: "/instructor/course/comingsoon" },
      { name: "Curriculum", link: "/instructor/course/curriculum" },
      { name: "Captions (optional)", link: "/instructor/course/comingsoon" },
      {
        name: "Accessibility (optional)",
        link: "/instructor/course/comingsoon",
      },
    ],
  },
  {
    group: "Publish your course",
    steps: [
      { name: "Course landing page", link: "/instructor/course/basics" },
      { name: "Pricing", link: "/instructor/course/comingsoon" },
      { name: "Promotions", link: "/instructor/course/comingsoon" },
      { name: "Course messages", link: "/instructor/course/comingsoon" },
    ],
  },
];

const CourseSidebar = () => {
  return (
    <div className=" grid sm:grid-cols-2  lg:flex pt-10 lg:flex-col gap-5 lg:gap-10 font-udemy">
      {courseSteps.map((step, i) => {
        return (
          <div key={i} className="flex flex-col gap-4">
            <p className="font-semibold pl-[2rem]">{step.group}</p>
            <div className="flex flex-col">
              {step.steps.map((s, i) => {
                return (
                  <NavLink
                    to={s.link}
                    key={i}
                    className=" link flex items-center gap-2 p-2 pl-[1.5rem] border-l-4 border-white hover:border-[#000] hover:bg-gray-200"
                  >
                    <span className="w-[20px] h-[20px] border rounded-full p-[2px] text-lg flex items-center justify-center">
                      {icons.tickIcon}
                    </span>
                    <p>{s.name}</p>
                  </NavLink>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CourseSidebar;

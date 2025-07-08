import React, { useState } from "react";
import SecHead from "../../components/SecHead";
import SwiperSlider from "../../components/SwiperSlider";
import { courseData, icons } from "../../assets/Data";
import CourseCard from "../../components/CourseCard";

export const skillsData = [
  {
    skill: "Web Development",
    categories: [
      { category: "Frontend", stats: "4M+ learners" },
      { category: "Backend", stats: "3.2M+ learners" },
      { category: "Full Stack", stats: "2.5M+ learners" },
      { category: "HTML & CSS", stats: "5M+ learners" },
      { category: "JavaScript", stats: "4.8M+ learners" },
      { category: "React", stats: "3.9M+ learners" },
      { category: "Vue", stats: "2.1M+ learners" },
      { category: "Angular", stats: "1.7M+ learners" },
    ],
  },
  {
    skill: "Mobile Development",
    categories: [
      { category: "iOS", stats: "2.3M+ learners" },
      { category: "Android", stats: "2.9M+ learners" },
      { category: "React Native", stats: "1.8M+ learners" },
      { category: "Flutter", stats: "2.6M+ learners" },
      { category: "Swift", stats: "1.4M+ learners" },
      { category: "Kotlin", stats: "1.1M+ learners" },
      { category: "Objective-C", stats: "900k+ learners" },
      { category: "Cross-Platform", stats: "1.5M+ learners" },
    ],
  },
  {
    skill: "Data Science",
    categories: [
      { category: "Python for Data Science", stats: "4.5M+ learners" },
      { category: "Machine Learning", stats: "3.2M+ learners" },
      { category: "Deep Learning", stats: "2.8M+ learners" },
      { category: "Data Analysis", stats: "3.4M+ learners" },
      { category: "Pandas & NumPy", stats: "2.2M+ learners" },
      { category: "R Programming", stats: "1.9M+ learners" },
      { category: "Data Visualization", stats: "2.6M+ learners" },
      { category: "Statistics", stats: "2.1M+ learners" },
    ],
  },
  {
    skill: "Cloud Computing",
    categories: [
      { category: "AWS", stats: "2.7M+ learners" },
      { category: "Azure", stats: "1.8M+ learners" },
      { category: "Google Cloud", stats: "1.5M+ learners" },
      { category: "Cloud Security", stats: "1.3M+ learners" },
      { category: "Serverless", stats: "1M+ learners" },
      { category: "Cloud DevOps", stats: "1.2M+ learners" },
      { category: "Kubernetes", stats: "2.1M+ learners" },
      { category: "Terraform", stats: "900k+ learners" },
    ],
  },
  {
    skill: "Cybersecurity",
    categories: [
      { category: "Ethical Hacking", stats: "2M+ learners" },
      { category: "Network Security", stats: "1.5M+ learners" },
      { category: "Penetration Testing", stats: "1.8M+ learners" },
      { category: "Security Analyst", stats: "1.4M+ learners" },
      { category: "Malware Analysis", stats: "1M+ learners" },
      { category: "CompTIA Security+", stats: "1.6M+ learners" },
      { category: "Incident Response", stats: "800k+ learners" },
      { category: "Cryptography", stats: "900k+ learners" },
    ],
  },
  {
    skill: "UI/UX Design",
    categories: [
      { category: "UI Design", stats: "2.1M+ learners" },
      { category: "UX Design", stats: "2.4M+ learners" },
      { category: "Figma", stats: "1.9M+ learners" },
      { category: "Sketch", stats: "1.5M+ learners" },
      { category: "Adobe XD", stats: "1.3M+ learners" },
      { category: "Wireframing", stats: "1.1M+ learners" },
      { category: "Prototyping", stats: "1M+ learners" },
      { category: "Design Thinking", stats: "1.6M+ learners" },
    ],
  },
];

const AllSkills = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const initialActiveCat = Object.fromEntries(
    Array.from({ length: skillsData.length }, (_, i) => [i, 0])
  );

  const [activeCat, setActiveCat] = useState(initialActiveCat);
  const categories = skillsData[activeIndex || 0]?.categories;
  return (
    <div className="">
      <div className="container-pad spaceTop">
        <SecHead
          title="All the skills you need in one place"
          desc="From critical skills to technical topics, Udemy supports your professional development."
        />
      </div>

      {/* mobile */}
      <div className="container-pad flex md:hidden flex-col spaceTop border-[#ddd]">
        {skillsData.map((s, i) => {
          const isActive = activeIndex === i;

          return (
            <div key={i} className="border-t py-2">
              <button
                className={`py-2 ${
                  activeIndex === i ? " text-headBlack" : "text-lightBlack"
                } font-semibold flex items-center justify-between w-full`}
                onClick={() => {
                  setActiveIndex((p) => {
                    if (p === i) {
                      return -1;
                    }
                    return i;
                  });
                }}
              >
                <span>{s.skill}</span>
                <span>{icons.rightIcon}</span>
              </button>
              <div className={`${isActive ? "block py-4" : "hidden"}`}>
                <div className="container flex flex-col gap-10">
                  <SwiperSlider
                    activeIndex={activeIndex}
                    sliderId="hmcourses"
                    data={categories}
                    renderSlide={(c, i) => (
                      <div
                        onClick={() =>
                          setActiveCat((p) => ({ ...p, [activeIndex]: i }))
                        }
                        className={`bg-[#E9EAF2]  ${
                          activeCat[activeIndex] === i
                            ? "bg-headBlack hover:bg-[#656565]"
                            : "hover:bg-[#D1D2E0]"
                        } link px-8 py-3 rounded-full w-fit !min-w-0`}
                      >
                        <span
                          className={`text-headBlack  ${
                            activeCat[activeIndex] === i ? "text-white" : ""
                          } font-semibold text-nowrap`}
                        >
                          {c.category}
                        </span>{" "}
                        <br />
                        <span
                          className={`text-lightBlack text-[.7rem] ${
                            activeCat[activeIndex] === i ? "text-white" : ""
                          }`}
                        >
                          {c.stats}
                        </span>
                      </div>
                    )}
                  />

                  <SwiperSlider
                    data={courseData}
                    sliderId="hmcat"
                    top="30"
                    renderSlide={(course) => <CourseCard course={course} />}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* desktop */}
      <div className="container-pad hidden md:block mt-6 border-b border-[#ddd]">
        <SwiperSlider
          activeIndex={activeIndex}
          data={skillsData}
          sliderId="hdskill"
          renderSlide={(c, i) => (
            <button
              className={`py-4 ${
                activeIndex === i
                  ? " border-b text-headBlack"
                  : "text-lightBlack"
              } font-semibold`}
              onClick={() => {
                setActiveIndex(i);
              }}
            >
              <span>{c.skill}</span>
            </button>
          )}
        />
      </div>

      <div className={`bg-bgGray py-10 hidden md:block`}>
        <div className="container-pad flex flex-col gap-10">
          <SwiperSlider
            activeIndex={activeIndex}
            data={categories}
            sliderId="hdcat"
            renderSlide={(c, i) => (
              <div
                onClick={() =>
                  setActiveCat((p) => ({ ...p, [activeIndex]: i }))
                }
                className={`bg-[#E9EAF2]  ${
                  activeCat[activeIndex] === i
                    ? "bg-headBlack hover:bg-[#656565]"
                    : "hover:bg-[#D1D2E0]"
                } link px-8 py-3 rounded-full w-fit !min-w-0`}
              >
                <span
                  className={`text-headBlack  ${
                    activeCat[activeIndex] === i ? "text-white" : ""
                  } font-semibold text-nowrap`}
                >
                  {c.category}
                </span>{" "}
                <br />
                <span
                  className={`text-lightBlack text-[.7rem] ${
                    activeCat[activeIndex] === i ? "text-white" : ""
                  }`}
                >
                  {c.stats}
                </span>
              </div>
            )}
          />

          <SwiperSlider
            data={courseData}
            top="30"
            sliderId="hdcourses"
            renderSlide={(course) => <CourseCard course={course} />}
          />
        </div>
      </div>
    </div>
  );
};

export default AllSkills;

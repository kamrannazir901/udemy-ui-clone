import React, { useState } from "react";
import SecHead from "../../components/SecHead";
import { icons, images } from "../../assets/Data";
import SwiperSlider from "../../components/SwiperSlider";

export const featureData = [
  {
    title: "Hands-on training",
    desc: "Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.",
    tagText: "",
    linkText: "",
    icon: images.goal1icon,
    image: images.goal1,
  },
  {
    title: "Certification prep",
    desc: "Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.",
    tagText: "",
    linkText: "Explore courses",
    icon: images.goal2icon,
    image: images.goal2,
  },
  {
    title: "Insights and analytics",
    desc: "Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.",
    tagText: "Enterprise Plan",
    linkText: "Find out more",
    icon: images.goal3icon,
    image: images.goal3,
  },
  {
    title: "Customizable content",
    desc: "Create tailored learning paths for team and organization goals and even host your own content and resources.",
    tagText: "Enterprise Plan",
    linkText: "Find out more",
    icon: images.goal4icon,
    image: images.goal4,
  },
];

const Card = ({
  image,
  title,
  tagText,
  linkText,
  desc,
  icon,
  onclick,
  isActive,
}) => {
  return (
    <div
      onClick={onclick}
      className={`bg-white hover:bg-[#e9eaf2] link min-h-[150px] px-4 max-w-[80%] border border-[#ddd] ${
        isActive
          ? "border-purple border-l-10 hover:border-[#ddd] hover:border-l"
          : ""
      } rounded-lg flex items-center gap-2`}
    >
      <div className="hidden lg:block">
        <img src={icon} className="w-25" alt={title} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-lg">{title}</span>
          {tagText.length > 2 && (
            <span className="border px-1 text-sm font-semibold text-purple border-purple rounded">
              {tagText}
            </span>
          )}
        </div>
        <div className="text-lightBlack">{desc}</div>
        {linkText.length > 2 && (
          <div className="font-semibold text-purple flex items-center gap-2">
            <span> {linkText}</span>
            <span className="text-xl">{icons.goRightIcon}</span>
          </div>
        )}
      </div>
    </div>
  );
};

const Goals = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="bg-bgGray py-10 spaceTop">
        <div className="container-pad">
          <SecHead title="Learning focused on your goals" className="mb-8" />
          <div className="md:flex lg:items-end items-center justify-between hidden">
            <div className="flex flex-col gap-4">
              {featureData.map((f, i) => {
                return (
                  <Card
                    {...f}
                    key={i}
                    onclick={() => setActiveIndex(i)}
                    isActive={activeIndex === i}
                  />
                );
              })}
            </div>
            <div className=" lg:basis-[50%] flex justify-end">
              <img
                src={featureData[activeIndex].image}
                className="w-full lg:max-w-[600px] max-w-[800px]"
              />
            </div>
          </div>

          {/* mobile */}
          <div className="md:hidden block">
            <SwiperSlider
              data={featureData}
              slidesPerView={1}
              slidesPerGroup={1}
              sliderId="hdgoals"
              auto={true}
              renderSlide={(c, i) => {
                return (
                  <div className="flex flex-col gap-4">
                    <img src={c.image} alt={c.title} />
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-4">
                        <span className="font-semibold text-lg">{c.title}</span>
                        {c.tagText.length > 2 && (
                          <span className="border px-1 text-sm font-semibold text-purple border-purple rounded">
                            {c.tagText}
                          </span>
                        )}
                      </div>
                      <div className="text-lightBlack">{c.desc}</div>
                      {c.linkText.length > 2 && (
                        <div className="font-semibold text-purple flex items-center gap-2">
                          <span> {c.linkText}</span>
                          <span>{icons.rightIcon}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              }}
            />
          </div>
          <div className="md:hidden block custom-pagination-hdgoals mt-4 text-left"></div>
        </div>
      </div>
    </>
  );
};

export default Goals;

import React from "react";
import SecHead from "../../components/SecHead";
import SwiperSlider from "../../components/SwiperSlider";
import { icons, images } from "../../assets/Data";
import Button from "../../components/Button";

const testimonials = [
  {
    quote: `Udemy was rated the <strong>most popular</strong> online course or certification program for learning how to code according to <a href="https://survey.stackoverflow.co/2023/" target="_blank" rel="noopener noreferrer" class="text-purple underline">StackOverflow’s 2023 Developer survey</a>.`,
    meta: "37,076 responses collected",
    name: "",
    position: "",
    company: "",
    linkText: "Explore coding courses",
  },
  {
    quote: `Udemy was truly a <strong>game-changer</strong> and a great guide for me as we brought Dimensional to life.`,
    name: "Alvin Lim",
    position: "Technical Co-Founder, CTO",
    company: "Dimensional",
    linkText: "See Alvin’s favorite course",
  },
  {
    quote: `Udemy gives you the ability to be <strong>persistent</strong>. I learned exactly what I needed in the real world. It helped me <em>sell myself</em> to get a new role.`,
    name: "William A. Wachlin",
    position: "Partner Account Manager",
    company: "Amazon Web Services",
    linkText: "View this AWS course",
  },
  {
    quote: `With Udemy Business, employees were able to marry the two together — <strong>technology</strong> and <strong>consultant soft skills</strong> — to help drive their careers forward.`,
    name: "Ian Stevens",
    position: "Head of Capability Development, North America",
    company: "Publicis Sapient",
    linkText: "Learn about Udemy Business",
  },
];

const trendingMenu = [
  {
    heading: "ChatGPT is a top skill",
    menuList: [
      {
        title: "See ChatGPT courses",
        desc: "4,662,932 learners",
      },
    ],
  },
  {
    heading: "Development",
    menuList: [
      {
        title: "JavaScript Basics",
        desc: "48,521,598 learners",
      },
      {
        title: "Python Mastery",
        desc: "14,141,470 learners",
      },
      {
        title: "Web Bootcamp",
        desc: "7,935,921 learners",
      },
    ],
  },
  {
    heading: "Design",
    menuList: [
      {
        title: "Graphic Design",
        desc: "2,974,515 learners",
      },
      {
        title: "UX Design",
        desc: "4,557,403 learners",
      },
      {
        title: "Photoshop Pro",
        desc: "2,095,503 learners",
      },
    ],
  },
  {
    heading: "Business",
    menuList: [
      {
        title: "Entrepreneurship",
        desc: "2,649,750 learners",
      },
      {
        title: "Team Management",
        desc: "4,776,771 learners",
      },
      {
        title: "Strategic Thinking and Business Planning for Executives",
        desc: "437,889 learners",
      },
    ],
  },
];

const successStories = [
  {
    title:
      "Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling",
    firstCounter: {
      count: "93%",
      text: "retention rate among participating employees",
    },
    secondCounter: {
      count: "65%",
      text: "of learners noted a positive impact on their productivity",
    },
    logo: images.slide1logo,
    image: images.slide1,
    buttonText: "Read full story",
  },
  {
    title:
      "Capital One Accelerates Transformational Learning through Udemy Business",
    firstCounter: {
      count: "30%",
      text: "of learners rated Udemy as “very helpful” to their success",
    },
    secondCounter: {
      count: "80%",
      text: "increase in upskilling engagement within first 6 months",
    },
    logo: images.slide2logo,
    image: images.slide2,
    buttonText: "Read full story",
  },
  {
    title:
      "Eventbrite Navigates Change Through Skill-Building and Leadership Development",
    firstCounter: {
      count: "72%",
      text: "of managers improved cross-functional team performance",
    },
    secondCounter: {
      count: "61%",
      text: "of employees completed their personalized learning paths",
    },
    logo: images.slide3logo,
    image: images.slide3,
    buttonText: "Read full story",
  },
  {
    title:
      "Toyota Tsusho Enhances its L&D Program to Improve Employee Outcomes",
    firstCounter: {
      count: "88%",
      text: "of participants reported higher job confidence",
    },
    secondCounter: {
      count: "70%",
      text: "reduction in skill gaps across departments",
    },
    logo: images.slide4logo,
    image: images.slide4,
    buttonText: "Read full story",
  },
];

const Reviews = () => {
  return (
    <>
      {/* reviews */}
      <div className="bg-[#f6f7f9] p-8 spaceTop">
        <div className="container-pad">
          <div className="flex flex-col gap-6">
            <SecHead title="See what others are achieving through learning" />
            <SwiperSlider
              data={testimonials}
              top="30"
              renderSlide={(t, i) => (
                <div className="border rounded-lg w-[325px] border-[#ddd] p-4 flex flex-col gap-3">
                  <span>{icons.cartIcon}</span>
                  <div
                    className="text-sm h-25 text-headBlack"
                    dangerouslySetInnerHTML={{ __html: t.quote }}
                  ></div>
                  <div className="flex gap-2 h-15 text-sm">
                    {t.meta ? (
                      <>
                        <div>
                          <img
                            src={images.logo_stackoverflow}
                            alt=""
                            className="block"
                          />
                          <span className="text-lightBlack">{t.meta}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-12 shrink-0 h-12 rounded-full  overflow-hidden">
                          <img
                            src={images.career1}
                            className="object-cover w-12 h-12"
                            alt=""
                          />
                        </div>
                        <div>
                          <p className="text-headBlack text-[.8rem]">
                            {t.name}
                          </p>
                          <p className="text-lightBlack text-[.78rem] leading-tight">
                            {t.position + " at " + t.company}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="text-purple text-sm flex items-center gap-1 leading-none">
                    <a href="#" className="inline-block">
                      {t.linkText}
                    </a>
                    <span className="text-[0.70rem] flex items-center mt-[2px]">
                      {icons.rightIcon}
                    </span>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </div>
      {/* business leaders */}
      <div className="container-pad py-6 flex items-center flex-wrap md:flex-nowrap">
        <div className="flex flex-col gap-6 order-1 md:order-0">
          <h2 className="font-semibold text-2xl md:text-4xl text-headBlack font-suisse">
            AI for Business Leaders
          </h2>
          <p className="text-lg">
            Build an AI-habit for you and your team that builds hands-on skills
            to help you lead effectively.
          </p>
          <div className="md:w-35 text-sm">
            <Button
              text="Start Learning"
              icon={icons.goRightIcon}
              className="!py-2 "
            />
          </div>
        </div>
        <div>
          <img src={images.business_leaders} alt="" />
        </div>
      </div>
      {/* Trending */}
      <div className="bg-[#f6f7f9] p-8 spaceTop">
        <div className="container-pad">
          <SecHead title="Trending Now" />
          <div className="flex flex-wrap justify-between md:flex-nowrap gap-4 py-6 mt-4 border-t border-[#ddd]">
            {trendingMenu.map((t, i) => {
              return (
                <div key={i} className="flex flex-col gap-4">
                  <h2
                    className={`font-semibold text-2xl ${
                      i === 0 ? "text-3xl" : ""
                    }`}
                  >
                    {t.heading}
                  </h2>
                  <div className="flex flex-col gap-6">
                    {t.menuList.map((m, i) => {
                      return (
                        <div key={i} className="flex flex-col gap-3">
                          <div className="flex text-purple items-center gap-4">
                            <p className="text-lg font-semibold ">{m.title}</p>
                            <span className="text-[.6rem]">
                              {icons.rightIcon}
                            </span>
                          </div>
                          <p className="text-sm  text-lightBlack">{m.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* success stories slider */}
      <div className="bg-[#f6f7f9]">
        <div className="container-pad relative">
          <SwiperSlider
            data={successStories}
            slidesPerView={1}
            slidesPerGroup={1}
            sliderId="hslide"
            auto={true}
            btnhide={true}
            renderSlide={(c, i) => {
              return (
                <div className="flex flex-wrap lg:flex-nowrap lg:gap-30 gap-5 text-headBlack">
                  <div className="flex flex-col order-2 lg:order-0 lg:gap-10 gap-5 lg:basis-[50%]">
                    <div className="hidden lg:block">
                      <img src={c.logo} alt="" />
                    </div>
                    <h2 className="text-2xl lg:text-4xl font-semibold">
                      {c.title}
                    </h2>
                    <div className="flex gap-4 justify-between lg:gap-12">
                      <div className="flex flex-col gap-3 border-b pb-6 border-[#ddd]">
                        <span className="text-3xl lg:text-5xl font-semibold">
                          {c.firstCounter.count}
                        </span>
                        <span>{c.firstCounter.text}</span>
                      </div>
                      <div className="flex flex-col gap-3 border-b pb-6 border-[#ddd]">
                        <span className="text-3xl lg:text-5xl font-semibold">
                          {c.firstCounter.count}
                        </span>
                        <span>{c.firstCounter.text}</span>
                      </div>
                    </div>
                    <div className="lg:w-35">
                      <Button
                        text={c.buttonText}
                        type="dark"
                        icon={icons.rightIcon}
                        className="text-sm !py-2"
                      />
                    </div>
                  </div>
                  <div className="lg:basis-[50%]">
                    <div className="block mb-3 lg:mb-0 lg:hidden">
                      <img src={c.logo} alt="" />
                    </div>
                    <img
                      src={c.image}
                      className="aspect-square w-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              );
            }}
          />

          <div className="xl:absolute bottom-10 flex items-center gap-2 z-20">
            <div>
              <button
                className={`custom-prev-hslide z-20 invisible xl:visible bg-white p-2 text-2xl rounded-full shadow-lg`}
              >
                {icons.leftIcon}
              </button>
            </div>

            <div className="xl:w-20 w-full">
              <div className="custom-pagination-hslide flex justify-center"></div>
            </div>

            <div>
              <button
                className={`custom-next-hslide invisible xl:visible z-20 bg-white p-2 text-2xl rounded-full shadow-lg`}
              >
                {icons.rightIcon}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;

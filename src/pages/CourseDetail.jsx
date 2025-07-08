import React, { useEffect, useState } from "react";
import { courseData, icons, images } from "../assets/Data";
import Button from "../components/Button";
import SecHead from "../components/SecHead";
import HoverBox from "../components/HoverBox";
import FixedElement from "../components/FixedElement";

const learnPoints = [
  "Course Fully Updated: Dive into animated videos, 50 writing assignments and 60 interactive quizzes in our comprehensive, updated copywriting course.",
  "Mastering ChatGPT for Content Creation: Learn to use ChatGPT for generating creative content, effective SEO, social media, and complete blog concepts.",
  "Advanced Copywriting Skills: Develop the ability to convert website visitors into buyers using persuasive techniques and overcoming customer objections.",
  "Effective Influencer Outreach: Craft compelling outreach templates to engage influencers and bloggers for business promotion and support.",
  "ChatGPT for E-Commerce & Local SEO: Utilize ChatGPT for innovative e-commerce solutions and local SEO, including crafting Google My Business descriptions.",
  "Access Pro Content Creation Templates: Get customizable professional templates for creating high-converting emails, blogs, sales letters, ads, and more.",
  "Content Creation with Expert Guidance: Transform into a skilled content creator with input, templates, and walkthroughs from an experienced copywriter.",
  "Essential Copywriting for Beginners: Even as a complete beginner, learn everything about copywriting essentials and the psychology behind persuasion.",
];

const includes = {
  video: { text: "26.5 hours on-demand video", icon: icons.checkIcon },
  resource: { text: "200 downloadable resources", icon: icons.checkIcon },
  test: { text: "1 practice test", icon: icons.checkIcon },
  devices: { text: "Access on mobile and TV", icon: icons.checkIcon },
  assignment: { text: "Assignments", icon: icons.checkIcon },
  certification: { text: "Certificate of completion", icon: icons.checkIcon },
  article: { text: "1 article", icon: icons.checkIcon },
};

export const courseReviews = [
  {
    review:
      "This course gave me a solid foundation in Python. The instructor explains everything very clearly.",
    date: "2024-09-12",
    name: "Ayesha Noor",
    rating: 5,
    instructorReply: "Thanks Ayesha! I'm glad you found it helpful.",
  },
  {
    review: "Great pace and examples. Helped me land a job interview!",
    date: "2024-08-02",
    name: "Liam Smith",
    rating: 5,
  },
  {
    review: "Good content but a bit outdated in some sections.",
    date: "2024-07-19",
    name: "Chen Wei",
    rating: 3,
    instructorReply: "Thanks for the feedback! We’re planning an update soon.",
  },
  {
    review: "Loved the real-world projects. Learned a lot!",
    date: "2024-11-01",
    name: "Haroon Iqbal",
    rating: 4,
  },
  {
    review: "Too much theory, not enough practice.",
    date: "2024-06-30",
    name: "Sana Fatima",
    rating: 2,
  },
  {
    review: "This course is a must for any developer. Really comprehensive.",
    date: "2024-10-15",
    name: "Michael Reed",
    rating: 5,
    instructorReply: "Appreciate the kind words, Michael!",
  },
  {
    review: "Learned more here than in a semester at university.",
    date: "2024-05-22",
    name: "Sara Khan",
    rating: 5,
  },
  {
    review: "Very detailed and easy to follow. Would recommend.",
    date: "2024-08-29",
    name: "Daniel Cho",
    rating: 4,
  },
  {
    review: "The quizzes were helpful for reinforcing knowledge.",
    date: "2024-09-18",
    name: "Ahmed Raza",
    rating: 4,
  },
  {
    review: "Found a few errors in code examples.",
    date: "2024-07-07",
    name: "Emily Tran",
    rating: 3,
    instructorReply:
      "Thanks Emily, we've corrected them in the latest version!",
  },
  {
    review: "The course is very engaging. The instructor’s passion shows.",
    date: "2024-06-14",
    name: "Jake Hall",
    rating: 5,
  },
  {
    review: "Good value for the price. Learned a lot in a short time.",
    date: "2024-11-20",
    name: "Priya Patel",
    rating: 5,
  },
  {
    review: "Needs more challenges at the end of each module.",
    date: "2024-10-05",
    name: "Omar Farooq",
    rating: 3,
  },
  {
    review: "One of the best courses I’ve ever taken online.",
    date: "2024-08-11",
    name: "Junaid Malik",
    rating: 5,
    instructorReply: "That means a lot, Junaid. Thank you!",
  },
  {
    review: "Clear explanations and good pacing.",
    date: "2024-09-25",
    name: "Sophia Lee",
    rating: 4,
  },
  {
    review: "Too basic for intermediate learners.",
    date: "2024-07-01",
    name: "Noman Arif",
    rating: 2,
  },
  {
    review: "Nice introduction to the subject. Not too overwhelming.",
    date: "2024-10-10",
    name: "Isabel Romero",
    rating: 4,
  },
  {
    review: "Awesome projects that you can add to your portfolio.",
    date: "2024-12-01",
    name: "Zeeshan Ahmed",
    rating: 5,
  },
  {
    review: "Content is good, but captions have many errors.",
    date: "2024-06-03",
    name: "Fiona Zhang",
    rating: 3,
    instructorReply: "Thanks for reporting! We'll get the captions corrected.",
  },
  {
    review: "Really helped me understand hooks in React.",
    date: "2024-11-11",
    name: "Ali Jawad",
    rating: 4,
  },
  {
    review: "Perfect for beginners who want to build real apps.",
    date: "2024-10-27",
    name: "Tania Bhatti",
    rating: 5,
  },
  {
    review: "Instructor responds quickly in Q&A section.",
    date: "2024-07-30",
    name: "Jordan Wells",
    rating: 4,
  },
  {
    review: "A bit dry in the beginning but improves later.",
    date: "2024-08-08",
    name: "Khalid Mahmood",
    rating: 3,
  },
  {
    review: "Wish there were more backend examples.",
    date: "2024-09-02",
    name: "Jessica Brown",
    rating: 3,
  },
  {
    review: "Very practical and hands-on. Just what I needed.",
    date: "2024-10-03",
    name: "Bilal Siddiqui",
    rating: 5,
  },
  {
    review: "Course structure is well organized.",
    date: "2024-07-14",
    name: "Fatima Rizvi",
    rating: 4,
  },
  {
    review: "Some of the lessons are outdated.",
    date: "2024-06-21",
    name: "Rohan Mehta",
    rating: 3,
  },
  {
    review: "The examples helped me pass my job test!",
    date: "2024-11-05",
    name: "Natalie Cruz",
    rating: 5,
  },
  {
    review: "Videos are high quality and clear.",
    date: "2024-10-22",
    name: "Ethan Park",
    rating: 5,
  },
  {
    review: "Not beginner-friendly. Needs better pacing.",
    date: "2024-08-17",
    name: "Noor Sheikh",
    rating: 2,
  },
];

const courseSections = [
  {
    accordionTitle: "Section 1: Introduction to React",
    totalDuration: "32 min",
    totalLectures: 9,
    desc: [
      {
        type: "Video",
        icon: "🎥",
        duration: "8 min",
        title: "What is React?",
        overview:
          "Learn what React is and how it fits into modern web development.",
        preview: true,
      },
      {
        type: "Video",
        icon: "🎥",
        duration: "9 min",
        title: "Setting Up the Development Environment",
      },
      {
        type: "Video",
        icon: "🎥",
        duration: "8 min",
        title: "Understanding JSX",
        preview: true,
      },
      {
        type: "Quiz",
        icon: "❓",
        questions: 5,
        title: "React Basics Quiz",
      },
      {
        type: "Assignment",
        icon: "📝",
        questions: 1,
        title: "Setup React Project",
        overview:
          "Install necessary tools and create your first React project.",
      },
    ],
  },
  {
    accordionTitle: "Section 2: React Core Concepts",
    totalDuration: "41 min",
    totalLectures: 8,
    desc: [
      {
        type: "Video",
        icon: "🎥",
        duration: "10 min",
        title: "Components and Props",
        overview: "Learn how to reuse code through components.",
        preview: true,
      },
      {
        type: "Video",
        icon: "🎥",
        duration: "12 min",
        title: "Handling Events in React",
      },
      {
        type: "Video",
        icon: "🎥",
        duration: "9 min",
        title: "State Management Basics",
      },
      {
        type: "Quiz",
        icon: "❓",
        questions: 6,
        title: "Core Concepts Quiz",
      },
      {
        type: "Assignment",
        icon: "📝",
        questions: 4,
        title: "Build a Simple Counter App",
      },
    ],
  },
  {
    accordionTitle: "Section 3: Building a Mini Project",
    totalDuration: "54 min",
    totalLectures: 7,
    desc: [
      {
        type: "Video",
        icon: "🎥",
        duration: "15 min",
        title: "Project Overview and UI Setup",
        overview: "We’ll build a complete ToDo app with real functionality.",
        preview: true,
      },
      {
        type: "Video",
        icon: "🎥",
        duration: "20 min",
        title: "Adding Functionality with State",
      },
      {
        type: "Video",
        icon: "🎥",
        duration: "12 min",
        title: "Handling User Input and Updates",
      },
      {
        type: "Assignment",
        icon: "📝",
        questions: 7,
        title: "Add Delete Function to the App",
        overview: "Enhance the app by implementing a delete feature.",
      },
    ],
  },
];

const RequirementsPoints = [
  "Open to All: This course welcomes learners from all backgrounds and levels of experience, making it easy to get started with confidence.",
  "Real-World Applications: Gain hands-on skills that are directly applicable to modern digital marketing and content strategies.",
  "AI-Powered Learning: Discover how artificial intelligence tools can boost productivity and streamline your creative workflow.",
  "Flexible and Self-Paced: Learn at your own pace with structured modules that fit your schedule and learning style.",
  "Career-Driven Focus: Designed to equip you with relevant skills for immediate use in personal or professional projects.",
  "Supportive Learning Experience: Benefit from a well-organized curriculum and helpful guidance tailored for practical success.",
];

const Heading = ({ text, className }) => {
  return (
    <h2 className={`font-semibold text-2xl font-udemy mb-4 ${className}`}>
      {text}
    </h2>
  );
};

const Accordian = ({
  active,
  setActive,
  accordionTitle,
  totalDuration,
  totalLectures,
  desc,
}) => {
  return (
    <div className="border border-b-0 border-[#ddd] text-headBlack">
      <div
        onClick={() => {
          setActive(!active);
        }}
        className={`cursor-pointer flex gap-4 items-center justify-between ${
          active ? "border-b" : ""
        } border-[#ddd] bg-[#F6F7F9] py-4 px-6`}
      >
        <div className="flex items-center gap-2">
          <span
            className={`text-[.7rem] ${active ? "rotate-270" : "rotate-90"}`}
          >
            {icons.rightIcon}
          </span>
          <p className="font-semibold">{accordionTitle}</p>
        </div>
        <div className="md:flex hidden items-center text-sm">
          <span>
            {totalLectures} lectures . {totalDuration}
          </span>
          <span></span>
        </div>
      </div>
      <div className={`${active ? "flex" : "hidden"} flex-col gap-2 p-4`}>
        {desc.map((d, i) => {
          const [overviewActive, setOverviewActive] = useState(false);

          return (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-[.7rem]">{icons.rightIcon}</span>
                  <p className="">{d.title}</p>
                  {d?.overview ? (
                    <span
                      className={`text-[.7rem] ${
                        overviewActive ? "rotate-270" : "rotate-90"
                      } p-2 cursor-pointer rounded-full bg-[#F6F7F9]`}
                      onClick={() => setOverviewActive(!overviewActive)}
                    >
                      {icons.rightIcon}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="underline text-purple">
                    {d?.overview ? "Preview" : ""}
                  </span>

                  <span className="text-lightBlack">
                    {d.type !== "Video"
                      ? d?.questions +
                        `${d.questions === 1 ? " question" : " questions"}`
                      : d?.duration}
                  </span>
                </div>
              </div>
              <div className={`pl-5 text-sm ${overviewActive ? "" : "hidden"}`}>
                {d?.overview}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const LearnerReview = ({ review, date, name, instructorReply, rating }) => {
  const [like, setLike] = useState(-1);
  const [iconClickBox, seticonClickBox] = useState(false);
  return (
    <div className="flex flex-col gap-2 border-t border-[#ddd] py-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <div className="w-10 h-10 p-2 bg-headBlack rounded-full text-white font-semibold">
            GK
          </div>
          <div className="flex flex-col justify-between">
            <p className="font-semibold">{name}</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-[.7rem] text-[#C4710D]">
                <span>{icons.starIcon}</span>
                <span>{icons.starIcon}</span>
                <span>{icons.starIcon}</span>
                <span>{icons.starIcon}</span>
                <span>{icons.halfStar}</span>
              </div>
              <span className="text-lightBlack text-sm">{date}</span>
            </div>
          </div>
        </div>
        <div className="mr-2">
          <HoverBox
            className="right-0 !top-[90%] !p-2 shadow-lg !min-w-[100px]"
            content={
              <div>
                <Button
                  text="Report"
                  className="border-none !text-headBlack !p-2 m-auto !w-fit rounded-lg"
                />
              </div>
            }
          >
            <Button
              text={icons.threeDotVerticle}
              className="!px-1 border-none !text-lightBlack"
            />
          </HoverBox>
        </div>
      </div>
      <div className="leading-tight">{review}</div>
      <div className="flex items-center text-lg gap-2 mt-2">
        <span className="text-sm text-lightBlack">Helpful?</span>
        <span
          className="link"
          onClick={() =>
            setLike((p) => {
              if (like === 1) {
                return -1;
              }
              return 1;
            })
          }
        >
          {like === 1 ? icons.likeFillIcon : icons.likeIcon}
        </span>
        <span
          onClick={() =>
            setLike((p) => {
              if (like === 0) {
                return -1;
              }
              return 0;
            })
          }
          className="link"
        >
          {like === 0 ? icons.dislikeFillIcon : icons.dislikeIcon}
        </span>
      </div>
    </div>
  );
};

const CourseDetail = ({ setFixedData }) => {
  const [active, setActive] = useState(false);
  const [courseCount, setCourseCount] = useState(6);

  const [tab, setTab] = useState(true);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400); // change 200 to your threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="bg-[#16161D] text-white">
        <div className="container-pad !max-w-[1200px] pb-12 pt-8 flex gap-20 justify-between">
          <div className="flex flex-col gap-4 max-w-[700px]">
            <div className="flex gap-2 items-center text-sm">
              <p className="font-semibold text-lightPurpleText">Marketing</p>
              <span className="text-[.6rem]">{icons.rightIcon}</span>
              <p className="font-semibold text-lightPurpleText">
                Digital Marketing
              </p>
              <span className="text-[.6rem]">{icons.rightIcon}</span>
              <p className="font-semibold text-lightPurpleText">Copywriting</p>
            </div>
            <h2 className="font-bold text-3xl">
              The Complete AI-Powered Copywriting Course & ChatGPT Course
            </h2>
            <p className="text-lg">
              Become a Pro Copywriter with the Complete Copywriting and Content
              Marketing Course. Use ChatGPT. Get 70+ Pro Templates.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="text-[#F69C08] font-semibold">4.3</span>
              <div className="flex items-center text-[#F69C08] text-[.7rem]">
                <span>{icons.starIcon}</span>
                <span>{icons.starIcon}</span>
                <span>{icons.starIcon}</span>
                <span>{icons.starIcon}</span>
                <span>{icons.halfStar}</span>
              </div>
              <p className="text-lightPurpleText">(1,920 ratings)</p>
              <p>126,893 students</p>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <p>Created by</p>
              <a href="#" className="text-lightPurpleText underline">
                Cotl stele <span className="text-white">,</span>
              </a>

              <a href="#" className="text-lightPurpleText underline">
                Learn Web Development
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span>{icons.infoIcon}</span>
              <span>Last updated 5/2025</span>
              <span>{icons.globeIcon}</span>
              <span>English</span>
              <span className="flex items-center">
                {icons.subTitleIcon}English [Auto], Indonesian [Auto] , Korean
                [Auto]
              </span>
            </div>
          </div>
          <div className=" hidden xl:block"></div>
        </div>
      </div>
      <div className="container-pad mt-6 !max-w-[1200px] flex gap-20 justify-between">
        <div className="flex flex-col gap-10  max-w-[700px]">
          <div className="border border-[#ddd] p-6">
            <Heading text="What you'll learn" />
            <div className="grid md:grid-cols-2 gap-y-2 gap-x-8">
              {learnPoints.map((p, i) => {
                return (
                  <div key={i} className="flex gap-4 text-sm">
                    <span>{icons.tickIcon}</span>
                    <p>{p}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <Heading text="Explore related topics" />

            <div className="flex flex-wrap items-center gap-2 font-semibold text-sm">
              <div className="border py-1 px-3 rounded">Copywriting</div>
              <div className="border py-1 px-3 rounded">ChatGPT</div>
              <div className="border py-1 px-3 rounded">Digital Marketing</div>
              <div className="border py-1 px-3 rounded">Marketing</div>
            </div>
          </div>
          <div>
            <Heading text="This course includes:" />

            <div className="grid md:grid-cols-2 gap-y-2 gap-x-8">
              {Object.entries(includes).map(([key, value]) => (
                <div key={key} className="flex items-center gap-4">
                  <span className="text-lg">{value.icon}</span>
                  <p>{value.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Heading text="Course content" />
            <div className="flex flex-wrap items-center justify-between text-sm">
              <div>29 sections • 190 lectures • 26h 43m total length</div>
              <div>
                <Button
                  text={
                    active ? "Collapse all sections" : "Expand all sections"
                  }
                  onClick={() => {
                    setActive(!active);
                  }}
                  className="border-none"
                />
              </div>
            </div>
            <div>
              {courseSections.map((s, i) => {
                return (
                  <Accordian
                    {...s}
                    active={active}
                    setActive={setActive}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <Heading text="Requirements" />
            <div className="flex flex-col gap-3">
              {RequirementsPoints.map((d, i) => {
                return (
                  <div key={i} className="flex gap-4 items-start text-sm">
                    <span className="text-[.7rem] mt-1">{icons.dotIcon}</span>
                    <p>{d}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <Heading text="Description" />
            <div className="flex flex-col gap-3">
              {RequirementsPoints.map((d, i) => {
                return (
                  <div key={i} className="flex gap-4 items-start text-sm">
                    <span className="text-[.7rem] mt-1">{icons.dotIcon}</span>
                    <p>{d}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <Heading text="Students also bought" />
            <div className="flex flex-col gap-3">
              {courseData.slice(0, courseCount).map((c, i) => {
                return (
                  <div
                    key={i}
                    className="flex md:flex-nowrap cursor-pointer flex-wrap border-b border-[#ddd] pb-3 gap-5 lg:gap-10 items-start text-sm justify-between"
                  >
                    <div className="flex md:flex-nowrap flexwrap gap-2">
                      <div className="w-[70px] md:w-[100px] shrink-0 h-[70px] md:h-[80px] bg-amber-400">
                        <img
                          src={c.image}
                          className="object-cover w-full h-full"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-wrap flex-col justify-between">
                        <p className="font-semibold">{c.title}</p>
                        <div className="flex gap-2 items-center">
                          <div className="px-2 py-1 font-semibold text-[.8rem] bg-[#C2E9EB] rounded">
                            Bestseller
                          </div>
                          <p className="font-semibold hidden md:block text-green-800 text-nowrap">
                            {c.totalHours} total hours .{" "}
                            <span className="text-lightBlack font-normal">
                              {c.lastUpdatedDate}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 md:justify-between md:max-w-[50%] w-full">
                      <div className="flex gap-1 items-center font-semibold text-[#C4710D]">
                        <span>{c.rating}</span>
                        <span>{icons.starIcon}</span>
                      </div>
                      <div className="flex gap-1 items-center">
                        <span>{icons.twoUserIcon}</span>
                        <span>{c.reviews}</span>
                      </div>
                      <div className="flex gap-1">
                        <span className="font-semibold">${c.price}</span>
                        <span className="hidden lg:block border hover:bg-lightpurpleHover border-purple p-2 text-purple rounded-full">
                          {icons.heartIcon}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <Button
                text={`${
                  courseCount >= courseData.length ? "Show less" : "Show more"
                }`}
                onClick={() =>
                  setCourseCount((p) => {
                    if (courseCount >= courseData.length) {
                      return 3;
                    }
                    return p + 6;
                  })
                }
                className="!py-2 mt-2 text-sm"
              />
            </div>
          </div>
          <div className="py-4 px-6 border border-[#ddd]">
            <Heading text="Frequently Bought Together" />
            <div className="flex flex-col gap-4">
              {courseData.slice(0, 3).map((c, i) => {
                return (
                  <div key={i} className="flex gap-2">
                    <div className="md:w-[200px] w-[100px] shrink-0">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap md:gap-3 justify-between w-full">
                      <div className="basis-[100%]">
                        <h2 className="font-semibold leading-tight text-headBlack">
                          {c.title}
                        </h2>
                        <p className="text-sm text-nowrap truncate text-lightBlack pr-2">
                          {c.author}
                        </p>
                        <div className="flex items-center gap-2 ">
                          <span className="font-semibold text-[#8B4309]">
                            {c.rating}
                          </span>
                          <div className="flex items-center gap-1 text-[.7rem] text-[#C4710D]">
                            <span>{icons.starIcon}</span>
                            <span>{icons.starIcon}</span>
                            <span>{icons.starIcon}</span>
                            <span>{icons.starIcon}</span>
                            <span>{icons.halfStar}</span>
                          </div>
                          <span className="text-lightBlack text-[.7rem] ">
                            ({c.reviews})
                          </span>
                        </div>
                      </div>
                      <p className="font-semibold leading-tight text-headBlack">
                        ${c.price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between">
              <div className="flex gap-1 items-center text-lg">
                <span>Total:</span>
                <span className="font-semibold text-xl">
                  $
                  {courseData
                    .slice(0, 3)
                    .reduce((acc, course) => acc + course.price, 0)}
                </span>
              </div>
              <div>
                <Button text="Add all to cart" type="dark" />
              </div>
            </div>
          </div>
          <div>
            <Heading text="Instructors" />
            <div className="flex flex-col gap-2">
              <div>
                <h2 className="font-udemy text-xl font-semibold underline text-purple">
                  Ing. Tomáš Morávek
                </h2>
                <p className="text-lightBlack">
                  Digital Marketing Courses | SEO | Meta Advertising | ChatGPT
                </p>
              </div>
              <div className="flex gap-2">
                <div className="w-30 shrink-0 h-30 rounded-full border border-[#ddd] overflow-hidden">
                  <img
                    src="https://img-c.udemycdn.com/user/200_H/42603214_f6c9_5.jpg"
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col py-1 justify-around text-[.8rem]">
                  <div className="flex gap-3 items-center">
                    <span>{icons.starIcon}</span>
                    <span>4.4 Instructor Rating</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span>{icons.starIcon}</span>
                    <span>38,051 Reviews</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span>{icons.starIcon}</span>
                    <span>1,085,429 Students</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span>{icons.starIcon}</span>
                    <span>73 Courses</span>
                  </div>
                </div>
              </div>
              <p className="text-sm">
                Excellence in Every Detail: Where Over 1 Million Learners Grow
                With Confidence Welcome to a learning space where ambition meets
                action—and dreams turn into measurable success. Join over
                1,000,000 learners guided by Ing. Tomáš Morávek and his
                dedicated team, renowned for award-winning digital strategies
                and deeply human teaching. Every course we create is crafted
                with care, purpose, and real-world impact in mind. You’ll gain
                more than knowledge—you’ll gain confidence, clarity, and the
                practical skills to thrive in the digital economy. Here’s what
                you can expect inside each course: Real-World, Hands-On Learning
                Carefully structured lessons that equip you with skills you can
                apply immediately, from your first client to your next big
                career leap. Clear, Step-by-Step Support No fluff. No jargon.
                Just crystal-clear guidance you can follow with confidence—even
                if you’re starting from zero. Immersive, Engaging Tools From
                screen recordings and practical templates to smart checklists
                and creative quizzes—learning becomes active, inspiring, and
                enjoyable. Premium Personal Support
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <div>
                <h2 className="font-udemy text-xl font-semibold underline text-purple">
                  Learn Digital Advertising
                </h2>
                <p className="text-lightBlack">
                  ChatGPT, Gemini AI, Copywriting, Google Ads, Meta Ads, SEO
                </p>
              </div>
              <div className="flex gap-2">
                <div className="w-30 shrink-0 h-30 rounded-full border border-[#ddd] overflow-hidden">
                  <img
                    src="https://img-c.udemycdn.com/user/200_H/42603214_f6c9_5.jpg"
                    alt=""
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col py-1 justify-around text-[.8rem]">
                  <div className="flex gap-3 items-center">
                    <span>{icons.starIcon}</span>
                    <span>4.4 Instructor Rating</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span>{icons.starIcon}</span>
                    <span>38,051 Reviews</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span>{icons.starIcon}</span>
                    <span>1,085,429 Students</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span>{icons.starIcon}</span>
                    <span>73 Courses</span>
                  </div>
                </div>
              </div>
              <p className="text-sm">
                Excellence in Every Detail: Where Over 1 Million Learners Grow
                With Confidence Welcome to a learning space where ambition meets
                action—and dreams turn into measurable success. Join over
                1,000,000 learners guided by Ing. Tomáš Morávek and his
                dedicated team, renowned for award-winning digital strategies
                and deeply human teaching. Every course we create is crafted
                with care, purpose, and real-world impact in mind. You’ll gain
                more than knowledge—you’ll gain confidence, clarity, and the
                practical skills to thrive in the digital economy. Here’s what
                you can expect inside each course: Real-World, Hands-On Learning
                Carefully structured lessons that equip you with skills you can
                apply immediately, from your first client to your next big
                career leap. Clear, Step-by-Step Support No fluff. No jargon.
                Just crystal-clear guidance you can follow with confidence—even
                if you’re starting from zero. Immersive, Engaging Tools From
                screen recordings and practical templates to smart checklists
                and creative quizzes—learning becomes active, inspiring, and
                enjoyable. Premium Personal Support
              </p>
            </div>
          </div>

          <div>
            <Heading
              className="text-xl md:text-2xl"
              text={
                <div className="flex gap-3 items-center text-headBlack">
                  <span className="text-[#c4710d] text-lg">
                    {icons.starIcon}
                  </span>
                  <span>4.2 course rating</span>
                  <span className="text-sm text-lightBlack">
                    {icons.dotIcon}
                  </span>
                  <span>2K ratings</span>
                </div>
              }
            />

            <div className="grid md:grid-cols-2 gap-x-8">
              {courseReviews.slice(0, 4).map((r, i) => {
                return <LearnerReview {...r} key={i} />;
              })}
            </div>
            <div className="w-fit">
              <Button
                text="Show all reviews"
                onClick={() => {
                  setFixedData(
                    <div className="container-pad bg-white !max-w-[1000px] m-5 my-30 shadow-2xl rounded-3xl p-3">
                      <div className="flex gap-2 my-4 items-center justify-between">
                        <div>
                          <Heading
                            className="!mb-0 text-xl md:text-2xl"
                            text={
                              <div className="flex flex-wrap md:gap-3 items-center text-headBlack">
                                <span className="text-[#c4710d] text-lg">
                                  {icons.starIcon}
                                </span>
                                <span>4.2 course rating</span>
                                <span className="text-sm text-lightBlack">
                                  {icons.dotIcon}
                                </span>
                                <span>2K ratings</span>
                              </div>
                            }
                          />
                        </div>
                        <div className="text-xl w-10 h-10">
                          <Button
                            text="X"
                            onClick={() => setFixedData(null)}
                            className="border-0 !text-lg !text-lightBlack !font-normal !py-2 !px-2"
                          />
                        </div>
                      </div>

                      <div className="flex gap-8 lg:flex-nowrap flex-wrap">
                        <div className="min-w-[250px]">Overall Rate</div>
                        <div className="w-full">
                          <div className="grid gap-x-8">
                            {courseReviews.map((r, i) => {
                              return <LearnerReview {...r} key={i} />;
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }}
                className="!py-2 text-sm"
              />
            </div>
          </div>
        </div>
        <div className="w-full hidden xl:block">
          {/* sticky */}

          <div
            className={`transition-all max-w-[370px] duration-500 shadow-lg bg-white z-50
    ${
      isSticky
        ? "lg:sticky top-[10px] translate-y-0 opacity-100"
        : "lg:absolute top-[100px] -translte-y-[150px] opacit-0"
    }
  `}
          >
            {" "}
            <div>
              <img src={images.career1} className="max-w-full" alt="" />
            </div>
            <div className="flex top-0 flex-col gap-2">
              <div className="flex items-center text-center font-black border-b border-[#ddd]">
                <div
                  onClick={() => setTab(true)}
                  className={`${tab ? "border-b-2" : ""} flex-1 p-3 link`}
                >
                  Personal
                </div>
                <div
                  onClick={() => setTab(false)}
                  className={`${!tab ? "border-b-2" : ""} flex-1 p-3 link`}
                >
                  Teams
                </div>
              </div>
              {tab ? (
                <div className="flex flex-col gap-3 p-4">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-2xl">$12.99</span>
                    <span className="text-lightBlack line-through">$84.99</span>
                    <span className="text-lightBlack ">83% off</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <span>{icons.clock}</span>
                    <span className="font-black">8 hours</span>
                    <span>left at this price</span>
                  </div>
                  <div className="flex items-stretch gap-2">
                    <div className="flex-1">
                      <Button text="Add to cart" type="dark" />
                    </div>
                    <div>
                      <span
                        className="border-purple flex items-center justify-center text-purple border rounded h-full w-12 text-2xl
                "
                      >
                        {icons.heartIcon}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-stretch gap-2">
                    <div className="flex-1">
                      <Button text="Buy now" />
                    </div>
                  </div>
                  <div className="text-center text-lightBlack text-sm space-y-2 ">
                    <p>30-Day Money-Back Guarantee</p>
                    <p>Full Lifetime Access</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-2 p-4">
                  <div>
                    <img src={images.logo} className="max-w-[100px]" alt="" />
                  </div>
                  <div className="text-s pr-10 text-headBlack">
                    Subscribe to this course and 30,000+ top‑rated Udemy courses
                    for your organization.
                  </div>
                  <div className="flex items-stretch gap-2">
                    <div className="flex-1">
                      <Button text="Try udemy business" type="dark" />
                    </div>
                  </div>
                  <div className="flex items-stretch gap-2">
                    <ul className="space-y-2 text-headBlack">
                      <li className="flex items-center gap-4">
                        <span>{icons.tickIcon}</span>
                        For teams of 2 or more users
                      </li>
                      <li className="flex items-center gap-4">
                        <span>{icons.tickIcon}</span>
                        30,000+ fresh & in-demand courses
                      </li>
                      <li className="flex items-center gap-4">
                        <span>{icons.tickIcon}</span>
                        Learning Engagement tools
                      </li>
                      <li className="flex items-center gap-4">
                        <span>{icons.tickIcon}</span>
                        SSO and LMS Integrations
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;

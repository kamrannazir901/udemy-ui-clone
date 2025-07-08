import React, { use, useRef, useState } from "react";
import { icons, images } from "../assets/Data";
import Button from "../components/Button";
import CareerCard from "../components/CareerCard";

export const courseHighlights = [
  {
    title: "Digital Marketing Essentials",
    description:
      "Perform market research, build a website, optimize SEO, and launch effective social media ad campaigns.",
  },
  {
    title: "Interview Successfully",
    description:
      "Learn how to ace your digital marketing job interview to land your dream job.",
  },
  {
    title: "GenAI for Digital Marketers",
    description:
      "Use ChatGPT and the best AI tools to boost your sales and marketing results.",
  },
];
export const marketingSkills = [
  {
    title: "Digital Marketing",
    learners: "7.9M learners",
  },
  {
    title: "Social Media Marketing",
    learners: "4.3M learners",
  },
  {
    title: "Search Engine Optimization (SEO)",
    learners: "6.7M learners",
  },
  {
    title: "Google Ads (Adwords)",
    learners: "1.9M learners",
  },
  {
    title: "Content Marketing",
    learners: "1.3M learners",
  },
];

export const courseStats = [
  {
    icon: icons.trophyIcon,
    value: "3",
    text: "top-rated courses",
  },
  {
    icon: icons.starIcon,
    value: "4.6",
    text: "average course rating",
  },
  {
    icon: icons.codeIcon,
    value: "7",
    text: "hands-on practice exercises",
    nexticon: icons.infoCircleIcon,
  },
  {
    icon: icons.ondemandvideoIcon,
    value: "28.4",
    text: "hours of on-demand content",
  },
];

const testimonials = [
  {
    quote: `I come from a commerce background and wanted to transition into data science. Initially, I had doubts...but I ultimately decided to take the leap—and now, I’m incredibly grateful`,
    name: "Alvin Lim",
    position: "Technical Co-Founder, CTO",
    company: "Dimensional",
    linkText: "See Alvin’s favorite course",
  },
  {
    quote: `Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.`,
    name: "William A. Wachlin",
    position: "Partner Account Manager",
    company: "Amazon Web Services",
    linkText: "View this AWS course",
  },
  {
    quote: `Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.`,
    name: "Ian Stevens",
    position: "Head of Capability Development, North America",
    company: "Publicis Sapient",
    linkText: "Learn about Udemy Business",
  },
];

export const courseFAQs = [
  {
    question: "Who is this course suitable for?",
    answer: [
      "Beginners who want to start learning from scratch.",
      "Professionals looking to upgrade their skills.",
      "Entrepreneurs interested in applying digital strategies to grow their business.",
    ],
  },
  {
    question: "What tools or software do I need for this course?",
    answer: [
      "Only a computer with internet access is required.",
      "Some lessons may recommend free tools or trial versions of software.",
    ],
  },
  {
    question: "Is there a certificate upon completion?",
    answer: [
      "Yes, you will receive a certificate of completion.",
      "You can share it on LinkedIn or add it to your resume.",
    ],
  },
  {
    question: "How is the course content delivered?",
    answer: [
      "The course consists of on-demand video lectures.",
      "Some sections may include quizzes, assignments, and downloadable resources.",
    ],
  },
  {
    question: "How long will I have access to the course?",
    answer: [
      "You will have lifetime access to all course materials.",
      "You can revisit lessons anytime, even after completion.",
    ],
  },
  {
    question: "Are subtitles available?",
    answer: [
      "Yes, subtitles are available in multiple languages.",
      "They help improve understanding and accessibility for non-native speakers.",
    ],
  },
  {
    question: "Is this course up to date with current trends?",
    answer: [
      "Yes, the course is regularly updated with the latest industry practices.",
      "New content is added to reflect changes in tools and strategies.",
    ],
  },
  {
    question: "Can I get help if I’m stuck?",
    answer: [
      "Yes, you can ask questions in the Q&A section of the course.",
      "Instructors and other learners often provide helpful responses.",
    ],
  },
  {
    question: "Is there any hands-on practice included?",
    answer: [
      "Yes, the course includes practical projects and exercises.",
      "You’ll apply what you learn through real-world scenarios.",
    ],
  },
  {
    question: "How do I track my progress?",
    answer: [
      "The platform automatically marks completed lessons.",
      "You can easily see which modules you’ve finished and what’s left.",
    ],
  },
  {
    question: "What if I don’t like the course?",
    answer: [
      "You can request a full refund within 30 days of purchase.",
      "No questions asked — satisfaction is guaranteed.",
    ],
  },
  {
    question: "Can I download the videos?",
    answer: [
      "Yes, mobile app users can download videos for offline viewing.",
      "Downloading is not supported on desktop browsers.",
    ],
  },
  {
    question: "Will this course help me get a job?",
    answer: [
      "It provides job-ready skills recognized by employers.",
      "Many learners have used course knowledge to land new roles.",
    ],
  },
  {
    question: "Are there quizzes or exams?",
    answer: [
      "Yes, quizzes are included to test your knowledge.",
      "They are optional but helpful for revision.",
    ],
  },
  {
    question: "Can I access the course on my phone?",
    answer: [
      "Yes, you can watch the course on any device including mobile phones.",
      "A dedicated mobile app makes it easier to learn on the go.",
    ],
  },
  {
    question: "Do I need prior knowledge before starting?",
    answer: [
      "No, this course starts with the basics.",
      "Advanced topics are covered later as your understanding improves.",
    ],
  },
  {
    question: "Is group learning supported?",
    answer: [
      "You can learn with friends or colleagues by sharing accounts.",
      "Some institutions provide group access for teams.",
    ],
  },
  {
    question: "Will I be able to contact the instructor?",
    answer: [
      "You can reach out through the platform’s messaging or Q&A feature.",
      "Instructors often respond within a few days.",
    ],
  },
  {
    question: "Are there any additional resources?",
    answer: [
      "Downloadable templates, PDFs, and external links are often included.",
      "They support your learning and help you apply skills outside the course.",
    ],
  },
  {
    question: "What if I finish the course early?",
    answer: [
      "You can go back and review any section anytime.",
      "You’re encouraged to apply what you learn and continue practicing.",
    ],
  },
];

export const detailedCourses = [
  {
    id: 1,
    title: "Digital Marketing Essentials",
    subtitle: "The Ultimate Digital Marketing Course 2025: 11 Courses in 1",
    description:
      "Learn market research, website creation, copywriting, SEO, Google ads, Facebook ads, email marketing, Twitter ads + more",
    instructors: ["Joshua George", "ClickSlice Ltd"],
    isBestSeller: true,
    image: images.career1,
    courseMetaDisplay: [
      "Course",
      "Rating: 4.6 out of 5",
      "4.6",
      "2,216 ratings",
      "40 total hours",
      "233 lectures",
      "All Levels",
      "Updated 6/2025",
    ],
    faqstart: 0,
    faqend: 7,
  },
  {
    id: 2,
    title: "SEO Mastery 2025",
    subtitle: "Advanced Search Engine Optimization Techniques for Growth",
    description:
      "Master SEO with practical strategies for on-page and off-page optimization, keyword research, and site audits.",
    instructors: ["Sarah Miles"],
    isBestSeller: false,
    image: images.career2,
    courseMetaDisplay: [
      "Course",
      "Rating: 4.7 out of 5",
      "4.7",
      "1,843 ratings",
      "28 total hours",
      "145 lectures",
      "Intermediate",
      "Updated 5/2025",
    ],
    faqstart: 7,
    faqend: 12,
  },
  {
    id: 3,
    title: "Social Media Marketing Bootcamp",
    subtitle: "Run Effective Campaigns on Facebook, Instagram & More",
    description:
      "Learn how to build brand presence and generate leads through powerful social media marketing strategies.",
    instructors: ["Tom Bradley"],
    isBestSeller: true,
    image: images.career3,
    courseMetaDisplay: [
      "Course",
      "Rating: 4.5 out of 5",
      "4.5",
      "1,987 ratings",
      "32 total hours",
      "189 lectures",
      "All Levels",
      "Updated 4/2025",
    ],
    faqstart: 12,
    faqend: 17,
  },
];
export const articles = [
  {
    title: "What Does a Web Developer Do?",
    author: "Kevin Kurtz",
    meta: ["Article", "15 min read"],
  },
  {
    title: "Understanding Kubernetes Architecture",
    author: "Jilles Soeters",
    meta: ["Article", "15 min read"],
  },
  {
    title:
      "UX Design Process: A Step-by-Step Guide to Building Better User Experiences",
    author: "Megan Russell",
    meta: ["Article", "12 min read"],
  },
];

const careers = [
  {
    image: images.career1,
    title: "Full stack web developer",
    stars: "4.7",
    rating: "447K",
    totalhours: "86.6",
  },
  {
    image: images.career2,
    title: "Digital Marketing",
    stars: "4.5",
    rating: "3.4K",
    totalhours: "28.3",
  },
  {
    image: images.career3,
    title: "Data scientist",
    stars: "4.6",
    rating: "218K",
    totalhours: "46.8",
  },
];

const Card = ({
  title,
  subtitle,
  description,
  instructors,
  isBestSeller,
  image,
  courseMetaDisplay,
  faqstart,
  faqend,
  expand,
  setExpand,
  openStates,
  setOpenStates,
}) => {
  return (
    <div className="small-container">
      <div className="shadow-[0_2px_2px_3px_rgba(0,0,0,0.06)] rounded-xl flex flex-wrap md:flex-nowrap gap-4 items-start justify-between p-6">
        <div className="flex flex-col gap-2 md:max-w-[40%]">
          <p className="text-[#3B1B94] font-semibold">Course 1</p>
          <p className="text-headBlack font-semibold text-2xl">{title}</p>
          <div className="flex gap-2 flex-col border border-[#ddd] p-4 rounded-2xl">
            <div className=" rounded-xl overflow-hidden">
              <img src={image} className="w-full object-cover" alt="" />
            </div>
            <p className="leading-tight font-semibold text-xl">{subtitle}</p>
            <p className="leading-tight line-clamp-2">{description}</p>
            <p className="text-sm text-lightBlack">{instructors.join(",")}</p>
            <div className="flex mt-3 items-center flex-wrap gap-1">
              {courseMetaDisplay.map((c, i) => {
                return (
                  <div
                    key={i}
                    className="border border-[#d1d2e0] text-lightBlack rounded text-[.7rem] px-[2px]"
                  >
                    {c}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border border-[#ddd] rounded-2xl w-full md:w-[60%]">
          <div className="flex p-6 border-b border-[#ddd] items-center justify-between">
            <p className="font-semibold">Content Covered</p>
            <p
              onClick={() => {
                const newState = openStates.map(() => !expand);
                setOpenStates(newState);
                setExpand(!expand);
              }}
              className="link font-semibold text-purple text-sm"
            >
              {expand ? "Collapse all" : "Expand all"}
            </p>
          </div>
          {courseFAQs.slice(faqstart, faqend).map((f, i) => {
            return (
              <div key={i}>
                <div
                  onClick={() => {
                    const newState = [...openStates];
                    newState[i] = !newState[i];
                    setOpenStates(newState);
                    const areAllOpen = newState.every((item) => item === true);
                    setExpand(areAllOpen);
                  }}
                  className={`flex p-6 ${
                    i === openStates.length - 1 ? "" : "border-b"
                  } ${
                    openStates[i] ? "border-b-0" : ""
                  }  link border-[#ddd] items-center justify-between`}
                >
                  <div className="flex font-semibold text-lg text-headBlack  items-center gap-4">
                    <span className="text-[#3B1B94] text-2xl">
                      {faqstart + i < 9
                        ? `0${i + 1 + faqstart}`
                        : i + 1 + faqstart}
                    </span>
                    <span>{f.question}</span>
                  </div>
                  <div
                    className={` transition-all ${
                      openStates[i] ? "rotate-270" : "rotate-90"
                    }`}
                  >
                    {icons.rightIcon}
                  </div>
                </div>
                {openStates[i] && (
                  <div className="pb-6 px-12 flex flex-col gap-2 pt-0 border-b border-[#ddd]">
                    {f.answer.map((a, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <span>{icons.tickIcon}</span>
                        <span>{a}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Career = () => {
  const [expandArray, setExpandArray] = useState(
    Array(detailedCourses.length).fill(false)
  );

  const [openStatesArray, setOpenStatesArray] = useState(
    detailedCourses.map((c) => Array(c.faqend - c.faqstart).fill(false))
  );

  const [openFaq, setOpenFaq] = useState(Array(7).fill(false));
  const [visibleFaq, setVisibleFaq] = useState(4);

  return (
    <div className="flex flex-col gap-12">
      <div className="bg-[#591E9C] p-4 md:p-12 text-headBlack">
        <div className="container p-6 md:p-12 bg-white rounded-3xl flex gap-8 justify-between">
          <div className="flex flex-col gap-4 justify-between md:basis-[40%]">
            <h1 className="lg:text-5xl  text-2xl font-semibold">
              Digital Marketer <br /> Career Accelerator
            </h1>
            <p className="text-lg leading-tight">
              Your career in digital marketing starts here. Fast-track learning
              and interview prep. Grow skills at your own pace. Unlock your
              earnings potential.
            </p>
            <div className="flex gap-4 leading-tight text-sm md:text-[1rem] justify-between">
              <div className="flex flex-col">
                <div className="text-xl font-semibold flex items-center gap-1">
                  <span className="text-[#C4710D] ">{icons.starIcon}</span>
                  <span>4.6</span>
                </div>
                <p className="text-lightBlack">average course rating</p>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-xl">7</p>
                <div className=" flex flex-wrap items-center gap-1">
                  <span>practice exercises </span>
                  <span className="text-headBlack text-xl ">
                    {icons.infoCircleIcon}
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-xl font-semibold flex flex-wrap items-center gap-1">
                  <span>28.4</span>
                </div>
                <p className="text-lightBlack">hours of content</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                text="Get started for free"
                type="dark"
                className="!w-fit"
              />
              <p className="text-[.7rem] text-lightBlack">
                Starts at $11/mo after trial. Cancel anytime.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span>{icons.twoUserIcon}</span>
              <p>
                <b>17K </b>learners already enrolled
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="rounded-3xl h-[300px] lg:h-[400px] w-[300px] lg:w-[500px] overflow-hidden">
              <img
                src={images.career2}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-pad flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">What you'll learn</h2>
        <div className="flex flex-wrap items-stretch gap-4">
          {courseHighlights.map((c, i) => {
            return (
              <div
                key={i}
                className="relative shadow-2xl px-6 py-8 rounded-2xl md:flex-1 w-full"
              >
                <div className="absolute text-lightpurpleHover top-0 right-0 z-10 text-[100pt] font-extrabold max-h-fit">
                  {i + 1}
                </div>
                <div className="flex flex-col gap-4 relative z-20 ">
                  <h2 className="xl:text-2xl text-xl font-semibold">
                    {c.title}
                  </h2>
                  <p>{c.description}</p>
                  <div className="flex link w-fit items-center gap-2 text-purple">
                    <span className="font-semibold">Course content</span>
                    <span>{icons.rightIcon}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container-pad flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">
          Learn the skills that matter most
        </h2>
        <div className="flex flex-wrap gap-4">
          {marketingSkills.map((m, i) => {
            return (
              <div
                className="flex hover:bg-[#F6F7F9] link gap-4 w-full md:w-fit items-center border border-[#ddd] rounded-2xl py-4 px-8"
                key={i}
              >
                <div className="text-xl text-purple bg-lightpurpleHover rounded-lg p-3 roun">
                  {icons.speakerIcon}
                </div>
                <div className="flex flex-col justify-between">
                  <h2 className="font-semibold">{m.title}</h2>
                  <p className="text-sm text-lightBlack">{m.learners}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-[#16161D] py-8 md:py-15 text-white">
        <div className="small-container grid md:grid-cols-2 gap-8 md:place-items-center">
          <div className="flex gap-6 flex-col justify-between">
            <h2 className="text-3xl font-semibold">
              Break into a digital marketing career.
            </h2>
            <p className="text-lg">
              Get the skills, structure, and hands-on experience to launch your
              career.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                text="Get started for free"
                type="dark"
                className="!w-fit"
              />
              <p className="text-[.7rem]">
                Starts at $11/mo after trial. Cancel anytime.
              </p>
            </div>
          </div>
          <div className="flex md:min-w-[400px] flex-col gap-6 bg-white p-4 md:p-8 text-headBlack rounded-2xl">
            <h2 className="text-xl font-semibold">What's included</h2>
            <div className="flex flex-col gap-4">
              {courseStats.map((s, i) => {
                return (
                  <div key={i} className="flex md:items-center gap-4">
                    <div
                      className={`text-lg ${i === 1 ? "text-[#C4710D]" : ""}`}
                    >
                      {s.icon}
                    </div>
                    <div className="flex md:items-center gap-2">
                      <span className="font-semibold text-lg">{s.value}</span>
                      <span className="text-headBlack  leading-tight">
                        {s.text}
                      </span>
                      {s.nexticon && <span className="link">{s.nexticon}</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        {detailedCourses.map((c, index) => (
          <Card
            key={index}
            {...c}
            expand={expandArray[index]}
            setExpand={(val) => {
              const updated = [...expandArray];

              updated[index] = val;
              setExpandArray(updated);
            }}
            openStates={openStatesArray[index]}
            setOpenStates={(val) => {
              const updated = [...openStatesArray];
              updated[index] = val;
              setOpenStatesArray(updated);
            }}
          />
        ))}

        <div className="small-container flex flex-wrap md:flex-nowrap  gap-4 items-stretch justify-between">
          <div className="border border-[#ddd] rounded-2xl flex gap-6 p-6 md:basis-[60%]">
            <div>
              <div className="p-3 text-7xl text-white rounded-full bg-yellow-600">
                {icons.checkIcon}
              </div>
            </div>
            <div className="flex gap-4 flex-col">
              <h2 className="font-semibold text-xl text-headBlack">
                Showcase your new skills
              </h2>
              <p>
                Career Accelerators courses include certificates of completion
                you can add to your resume, portfolio, or LinkedIn profile.
              </p>
              <div className="flex items-center">
                <span>{icons.cartIcon}</span>
                <span>{icons.cartIcon}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-1 gap-2 md:gap-0 flex-col justify-around">
            <h2 className="font-semibold text-2xl">
              Ready to launch your new career?
            </h2>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                text="Get started for free"
                type="dark"
                className="!w-fit"
              />
              <p className="text-[.8rem] text-lightBlack">
                Starts at $11/mo after trial. Cancel anytime.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span>{icons.twoUserIcon}</span>
              <p>
                <b>17K </b>learners already enrolled
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2A2B3F] p-6 md:p-12 spaceTop">
        <div className="container-pad !px-0">
          <div className="text-white text-2xl md:text-4xl text-center mb-4 font-semibold">
            What other learners are saying
          </div>
          <div className="flex flex-wrap gap-6">
            {testimonials.map((t, i) => {
              return (
                <div
                  key={i}
                  className="bg-white min-w-[250px] flex-1 rounded-2xl p-6 flex flex-col justify-between gap-3"
                >
                  <span className="text-6xl">{icons.quoteIcon}</span>
                  <div
                    className="text-lg  text-headBlack"
                    dangerouslySetInnerHTML={{ __html: t.quote }}
                  ></div>
                  <div className="flex items-center gap-2 h-15 text-sm">
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
                        <div className="w-18 shrink-0 h-18 rounded-full  overflow-hidden">
                          <img
                            src={images.career1}
                            className="object-cover w-18 h-18"
                            alt=""
                          />
                        </div>
                        <div>
                          <p className="text-headBlack font-semibold text-[1rem]">
                            {t.name}
                          </p>
                          <p className="text-lightBlack text-sm leading-tight">
                            {t.position + " at " + t.company}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container-pad flex flex-col gap-4">
        <div className="text-2xl md:text-4xl mb-4 font-semibold">
          Learn more about becoming a Data Scientist
        </div>
        <div className="flex flex-wrap items-stretch gap-4">
          {articles.map((a, i) => {
            return (
              <div
                key={i}
                className="flex gap-4 w-full lg:flex-1 min-h-[150px] border border-[#ddd] hover:bg-[#F6F7F9] link p-4 rounded-2xl"
              >
                <div className="w-10 h-10 shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={images.career2}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="font-semibold">{a.title}</h2>
                    <p className="text-sm text-lightBlack">{a.author}</p>
                  </div>
                  <div className="flex gap-2">
                    {a.meta.map((m, i) => {
                      return (
                        <div
                          key={i}
                          className="w-fit px-[2px] rounded border text-[.8rem] text-lightBlack border-[#ddd]"
                        >
                          {m}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="small-container flex flex-col gap-4">
        <div className="text-2xl text-center md:text-4xl mb-4 font-semibold">
          Frequently asked questions
        </div>
        <div className="flex flex-col p-8 shadow-2xl">
          {courseFAQs.slice(0, visibleFaq).map((f, i) => {
            return (
              <div key={i} className="border-t border-[#ddd]">
                <div
                  onClick={() => {
                    const newState = [...openFaq];
                    newState[i] = !openFaq[i];
                    setOpenFaq(newState);
                  }}
                  className="py-4 link flex gap-2 items-center justify-between"
                >
                  <div className="font-semibold text-lg text-headBlack">
                    {f.question}
                  </div>
                  <div
                    className={` text-[.7rem] transition-all ${
                      openFaq[i] ? "rotate-270" : "rotate-90"
                    }`}
                  >
                    {icons.rightIcon}
                  </div>
                </div>
                {openFaq[i] && (
                  <div
                    className={`pb-4 text-sm ${
                      i === visibleFaq - 1
                        ? "border-b border-[#ddd]"
                        : "border-0"
                    }`}
                  >
                    {f.answer}
                  </div>
                )}
              </div>
            );
          })}

          <div
            onClick={() => {
              setVisibleFaq((p) => (p === 4 ? p + 3 : 4));
            }}
            className="flex items-center justify-center text-sm link gap-1 font-semibold text-purple mt-6"
          >
            <span>Show</span>
            {visibleFaq === 4 && <span>3</span>}
            <span>{visibleFaq === 4 ? "more" : "less"}</span>
            <span
              className={`text-[.7rem] ml-1 ${
                visibleFaq === 4 ? "rotate-90" : "rotate-270"
              }`}
            >
              {icons.rightIcon}
            </span>
          </div>
        </div>
      </div>

      <div className="container-pad flex flex-col gap-4">
        <div className="text-2xl md:text-3xl mb-4 font-semibold">
          Not the right fit for you?
        </div>
        <div className="text-xl md:text-2xl mb-4 font-semibold">
          Explore more in-demand careers
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-around gap-4 flex-wrap md:flex-nowrap">
            {careers.map((data, i) => {
              return <CareerCard key={i} {...data} />;
            })}
          </div>
          <div className="w-fit py-1">
            <Button text="All Career Accelerators" className="!py-2 text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

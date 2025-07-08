import React from "react";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";

const Courses = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between shadow p-15 border border-[#ddd]">
        <p>Lets start with us</p>
        <NavLink to="/instructor/course/basic-info">
          <Button text="Create course" type="dark" className="!py-2 text-sm" />
        </NavLink>
      </div>
      <div className="flex lg:px-30 flex-wrap items-center gap-10 justify-around shadow p-5 border border-[#ddd]">
        <div className="lg:basis-[30%]">
          <img
            src="https://s.udemycdn.com/instructor/dashboard/engaging-course.jpg"
            alt=""
            className="lg:max-w-[200px] m-auto"
          />
        </div>
        <div className="flex lg:basis-[50%] flex-col gap-6 justify-between items-b">
          <p className=" font-udemy text-xl">Create an Engaging Course</p>
          <p>
            Whether you've been teaching for years or are teaching for the first
            time, you can make an engaging course. We've compiled resources and
            best practices to help you get to the next level, no matter where
            you're starting.
          </p>
          <a href="#" className="text-purple underline">
            Get Started
          </a>
        </div>
      </div>

      <div className="flex gap-6 flex-wrap lg:flex-nowrap">
        <div className="flex lg:flex-1 flex-wrap items-center gap-10 lg:justify-center shadow p-5 border border-[#ddd]">
          <div className="lg:basis-[30%] w-full">
            <img
              src="https://s.udemycdn.com/instructor/dashboard/engaging-course.jpg"
              alt=""
              className=" m-auto"
            />
          </div>
          <div className="flex lg:basis-[50%] flex-col gap-6 justify-between items-b">
            <p className="text-lg font-udemy">Get Started with Video</p>
            <p>
              Quality video lectures can set your course apart. Use our
              resources to learn the basics.
            </p>
            <a href="#" className="text-purple underline">
              Get Started
            </a>
          </div>
        </div>
        <div className="flex w-full lg:flex-1 flex-wrap items-center gap-10 lg:justify-center shadow p-5 border border-[#ddd]">
          <div className="lg:basis-[30%] w-full">
            <img
              src="https://s.udemycdn.com/instructor/dashboard/engaging-course.jpg"
              alt=""
              className=" m-auto"
            />
          </div>
          <div className="flex lg:basis-[50%] flex-col gap-6 justify-between w-full">
            <p className="text-lg font-udemy">Build Your Audience</p>
            <p>Set your course up for success by building your audience</p>
            <a href="#" className="text-purple underline">
              Get Started
            </a>
          </div>
        </div>
      </div>

      <div className="flex lg:px-30 flex-wrap items-center gap-10 justify-around shadow p-5 border border-[#ddd]">
        <div className="lg:basis-[30%]">
          <img
            src="https://s.udemycdn.com/instructor/dashboard/engaging-course.jpg"
            alt=""
            className="lg:max-w-[200px] m-auto"
          />
        </div>
        <div className="flex lg:basis-[50%] flex-col gap-6 justify-between items-b">
          <p className=" font-udemy text-xl">
            Join the New Instructor Challenge!
          </p>
          <p>
            Get exclusive tips and resources designed to help you launch your
            first course faster! Eligible instructors who publish their first
            course on time will receive a special bonus to celebrate. Start
            today!
          </p>
          <a href="#" className="text-purple underline">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Courses;

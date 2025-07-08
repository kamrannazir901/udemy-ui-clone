import React, { useState } from "react";
import DynamicInputField from "../../../components/DynamicInputField";

const goalPlaceholders = [
  "Example: Define the roles and responsibilities of a project manager",
  "Example: Estimate project timelines and budgets",
  "Example: Identify and manage project risks",
  "Example: Complete a case study to manage a project from conception to completion",
];

const requirementsPlaceholders = [
  "Example: No programming experience needed. You will learn everything you need to know",
];

const whoIsCourseForPlaceholders = [
  "Example: Beginner Python developers curious about data science",
];

const Goals = () => {
  const [objectives, setObjectives] = useState(Array(4).fill(""));
  const [requirements, setRequirements] = useState(Array(1).fill(""));
  const [courseFor, setCourseFor] = useState(Array(1).fill(""));

  return (
    <div className="max-w-[800px]">
      <p>
        The following descriptions will be publicly visible on your{" "}
        <a href="#" className=" underline text-purple underline-offset-4">
          Course Landing Page
        </a>{" "}
        and will have a direct impact on your course performance. These
        descriptions will help learners decide if your course is right for them.
      </p>

      <div className="flex flex-col gap-2 mt-8">
        <div className="font-semibold">
          What will students learn in your course?
        </div>
        <p>
          You must enter at least 4{" "}
          <a href="#" className="underline text-purple underline-offset-4">
            learning objectives or outcomes
          </a>{" "}
          that learners can expect to achieve after completing your course.
        </p>
        <div>
          <DynamicInputField
            min={4}
            values={objectives}
            onChange={setObjectives}
            icon={160}
            placeHolders={goalPlaceholders}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-8">
        <div className="font-semibold">
          What are the requirements or prerequisites for taking your course?
        </div>
        <p>
          List the required skills, experience, tools or equipment learners
          should have prior to taking your course. If there are no requirements,
          use this space as an opportunity to lower the barrier for beginners.
        </p>
        <div>
          <DynamicInputField
            min={0}
            values={requirements}
            onChange={setRequirements}
            placeHolders={requirementsPlaceholders}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-8">
        <div className="font-semibold">Who is this course for?</div>
        <p>
          Write a clear description of the{" "}
          <a href="#" className=" underline text-purple underline-offset-4">
            intended learners
          </a>{" "}
          for your course who will find your course content valuable. This will
          help you attract the right learners to your course.
        </p>
        <div>
          <DynamicInputField
            min={0}
            values={courseFor}
            onChange={setCourseFor}
            placeHolders={whoIsCourseForPlaceholders}
          />
        </div>
      </div>
    </div>
  );
};

export default Goals;

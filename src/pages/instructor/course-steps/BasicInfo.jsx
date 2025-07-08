import React, { use, useEffect, useState } from "react";
import { icons, images } from "../../../assets/Data";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import SelectField from "../../../components/SelectField";
import { NavLink } from "react-router-dom";

const categories = [
  "Development",
  "Business",
  "Finance & Accounting",
  "IT & Software",
  "Office Productivity",
  "Personal Development",
  "Design",
  "Marketing",
  "Lifestyle",
  "Photography & Video",
  "Health & Fitness",
  "Music",
  "Teaching & Academics",
  "I don't know yet",
];

const availabilityOptions = [
  "I’m very busy right now (0-2 hours)",
  "I’ll work on this on the side (2-4 hours)",
  "I have lots of flexibility (5+ hours)",
  "I haven’t yet decided if I have time",
];

const BasicInfo = () => {
  const [step, setStep] = useState(1);
  const [validStep, setValidStep] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const [basicInfo, setBasicInfo] = useState({
    courseType: "",
    title: "",
    category: "",
    radiotime: "",
  });

  const isCurrentStepValid = () => {
    switch (step) {
      case 1:
        return basicInfo.courseType !== "";
      case 2:
        return basicInfo.title !== "";
      case 3:
        return basicInfo.category !== "";
      case 4:
        return basicInfo.radiotime !== "";
      default:
        return false;
    }
  };

  useEffect(() => {
    // isCurrentStepValid();
  }, [basicInfo]);

  return (
    <div className="flex flex-col text-headBlack h-screen">
      {/* header */}
      <div className="flex gap-4 items-center justify-between">
        <div className="flex gap-4 items-center">
          <NavLink to="/" className="p-5 border-r border-[#aaa] link">
            <img src={images.logo} className="w-full max-w-[100px]" alt="" />
          </NavLink>
          <div className="flex sm:gap-1 items-center text-lg">
            <span className="hidden sm:block">Steps</span>
            <span>{step}</span>
            <span className="sm:hidden block">/</span>
            <span className="hidden sm:block">of</span>
            <span>4</span>
          </div>
        </div>
        <NavLink
          to="/instructor/dashboard"
          className="mr-6 font-semibold text-purple link"
        >
          Exit
        </NavLink>
      </div>
      {/* progress bar */}
      <div
        className="relative h-1 bg-[#BDBED4] after:absolute after:left-0 after:top-0 after:h-full after:bg-purple after:content-['']"
        style={{
          // step is from 1 to 4
          ["--progress-width"]: `${(step / 4) * 100}%`,
          position: "relative",
        }}
      >
        <div
          className="absolute top-0 left-0 h-full bg-purple"
          style={{ width: `${(step / 4) * 100}%` }}
        />
      </div>

      {/* main */}
      <div className="grow px-6">
        {/* step 1 */}
        {step === 1 && (
          <div className="flex flex-col items-center gap-10 mt-15 text-center">
            <h2 className="font-suisse text-xl sm:text-[2rem]">
              First, let's find out what type of course you're making.
            </h2>
            <div className="flex flex-wrap mt-5 items-stretch gap-6">
              <label
                style={{
                  borderWidth: basicInfo.courseType === "course" ? "4px" : "",
                }}
                className="py-8 link hover:bg-purple-100 px-4 flex flex-col items-center text-center border gap-2 sm:max-w-[225px] w-full sm:min-h-[270px]"
              >
                <input
                  type="radio"
                  name="courseType"
                  value="course"
                  checked={basicInfo.courseType === "course"}
                  onChange={(e) =>
                    setBasicInfo((p) => ({ ...p, courseType: e.target.value }))
                  }
                  className="hidden"
                />
                <span className="text-4xl mb-2">{icons.ondemandvideoIcon}</span>
                <span className="font-semibold">Course</span>
                <p className="text-sm">
                  Create rich learning experiences with the help of video
                  lectures, quizzes, coding exercises, etc.
                </p>
              </label>
              <label
                style={{
                  borderWidth: basicInfo.courseType === "test" ? "4px" : "",
                }}
                className="py-8 link hover:bg-purple-100 px-4 flex flex-col items-center text-center border gap-2 sm:max-w-[225px] w-full sm:min-h-[270px]"
              >
                <input
                  type="radio"
                  name="courseType"
                  value="test"
                  checked={basicInfo.courseType === "test"}
                  onChange={(e) =>
                    setBasicInfo((p) => ({ ...p, courseType: e.target.value }))
                  }
                  className="hidden"
                />
                <span className="text-4xl mb-2">{icons.ondemandvideoIcon}</span>
                <span className="font-semibold">Practice Test</span>
                <p className=" text-sm">
                  Help students prepare for certification exams by providing
                  practice questions.
                </p>
              </label>
            </div>
          </div>
        )}
        {/* step 2 */}

        {step === 2 && (
          <div className="flex flex-col items-center gap-5 mt-15 text-center">
            <h2 className="font-suisse text-xl sm:text-[1.8rem]">
              How about a working title?
            </h2>
            <p>
              It's ok if you can't think of a good title now. You can change it
              later.
            </p>
            <div className="min-w-[200px] mt-10 max-w-[600px] w-full">
              <InputField
                type="text"
                id="title"
                value={basicInfo.title}
                onChange={(e) => {
                  const newValue = e.target.value;
                  if (newValue.length <= 60) {
                    setBasicInfo((p) => ({ ...p, title: newValue }));
                  }
                }}
                icon={60 - basicInfo.title.length}
                className="!py-2.5 pr-12 text-sm"
                placeholder="e.g. Learn Photoshop CS6 from Scratch"
              />
            </div>
          </div>
        )}

        {/* step 3 */}
        {step === 3 && (
          <div className="flex flex-col items-center gap-5 mt-15 text-center">
            <h2 className="font-suisse text-xl sm:text-[1.8rem]">
              What category best fits the knowledge you'll share?
            </h2>
            <p>
              If you're not sure about the right category, you can change it
              later.
            </p>
            <div className="min-w-[200px] mt-10 relative max-w-[600px] w-full">
              <SelectField
                options={categories}
                value={basicInfo.category}
                onChange={(e) =>
                  setBasicInfo((p) => ({ ...p, category: e.target.value }))
                }
                placeholder="Choose a category"
              />
            </div>
          </div>
        )}

        {/* step 4 */}
        {step === 4 && (
          <div className="flex flex-col items-center gap-5 mt-15 text-center">
            <h2 className="font-suisse text-xl sm:text-[2rem]">
              How much time can you spend creating your course per week?
            </h2>
            <p>
              There's no wrong answer. We can help you achieve your goals even
              if you don't have much time.
            </p>
            <div className="min-w-[200px] flex flex-col gap-2 mt-10 relative max-w-[600px] w-full">
              {availabilityOptions.map((a, i) => {
                return (
                  <label
                    key={i}
                    className="flex items-center p-3 link gap-3 border rounded"
                  >
                    <input
                      type="radio"
                      name="availability"
                      value="busy"
                      className="hidden"
                      checked={basicInfo.radiotime === a}
                      onChange={() =>
                        setBasicInfo((p) => ({ ...p, radiotime: a }))
                      }
                    />
                    <span className="w-5 relative h-5 flex items-center justify-center border-2 rounded-full">
                      {basicInfo.radiotime === a ? (
                        <span className="absolute inset-[3px] bg-purpleHover rounded-full"></span>
                      ) : (
                        ""
                      )}
                    </span>

                    <span className="font-semibold text-sm sm:text-base">
                      {a}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* footer */}
      <div
        style={{ boxShadow: "0 -2px 4px 1px rgba(0, 0, 0, 0.1)" }}
        className="p-6 flex items-center justify-between"
      >
        {step !== 1 && (
          <div>
            <Button
              text="Previous"
              className="!py-2 text-sm"
              type="dark"
              onClick={() => {
                setStep((p) => {
                  if (p > 1) {
                    return p - 1;
                  }
                  return p;
                });
              }}
            />
          </div>
        )}
        <NavLink
          to={step === 4 ? "/instructor/course" : "#"}
          style={
            isCurrentStepValid() ? {} : { pointerEvents: "none", opacity: 0.5 }
          }
        >
          <Button
            text={step === 4 ? "Create Course" : "Continue"}
            className="!py-2 text-sm"
            type="dark"
            onClick={() => {
              setStep((p) => (p < 4 ? p + 1 : p));
            }}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default BasicInfo;

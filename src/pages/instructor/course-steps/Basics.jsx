import React, { useRef, useState } from "react";
import InputField from "../../../components/InputField";
import SelectField from "../../../components/SelectField";
import FileInput from "../../../components/FileInput";

const courseTags = [
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "HTML",
  "CSS",
  "Python",
  "Django",
  "Flask",
  "Java",
  "Spring Boot",
  "Kotlin",
  "Swift",
  "C#",
  ".NET",
  "SQL",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "Bootstrap",
  "TypeScript",
  "Angular",
  "Vue.js",
  "Next.js",
  "PHP",
  "Laravel",
  "Ruby",
  "Rails",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "DevOps",
  "Agile",
  "Scrum",
  "Machine Learning",
  "Data Science",
  "AI",
  "Deep Learning",
  "TensorFlow",
  "Pandas",
  "NumPy",
  "Data Analysis",
  "Cybersecurity",
  "Ethical Hacking",
  "Blockchain",
  "Web3",
  "SEO",
  "Marketing",
  "Freelancing",
  "UI/UX Design",
  "Figma",
  "Adobe XD",
  "Video Editing",
  "After Effects",
  "Photoshop",
  "Illustrator",
  "Productivity",
  "Leadership",
  "Communication",
  "Excel",
  "Power BI",
  "Notion",
  "Public Speaking",
  "Resume Writing",
  "Interview Prep",
  "Business Strategy",
  "Entrepreneurship",
];

const levels = ["Beginner", "Intermediate", "Expert", "All Levels"];

const categories = [
  {
    category: "Development",
    subcategories: [
      "Web Development",
      "Mobile Development",
      "Game Development",
      "Data Science",
      "Programming Languages",
      "Software Testing",
    ],
  },
  {
    category: "Business",
    subcategories: [
      "Entrepreneurship",
      "Finance",
      "Communication",
      "Management",
      "Sales",
      "Project Management",
    ],
  },
  {
    category: "IT & Software",
    subcategories: [
      "IT Certifications",
      "Network & Security",
      "Hardware",
      "Operating Systems",
      "Tech Support",
    ],
  },
  {
    category: "Design",
    subcategories: [
      "Graphic Design",
      "Web Design",
      "UX Design",
      "Design Tools",
      "3D & Animation",
    ],
  },
  {
    category: "Marketing",
    subcategories: [
      "Digital Marketing",
      "Content Marketing",
      "SEO",
      "Social Media Marketing",
      "Branding",
    ],
  },
  {
    category: "Photography & Video",
    subcategories: [
      "Digital Photography",
      "Photography Tools",
      "Portrait Photography",
      "Commercial Photography",
    ],
  },
  {
    category: "Lifestyle",
    subcategories: [
      "Arts & Crafts",
      "Food & Beverage",
      "Beauty & Makeup",
      "Travel",
    ],
  },
];

const languages = [
  "English",
  "Urdu",
  "Hindi",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Portuguese",
  "Russian",
  "Arabic",
  "Turkish",
  "Chinese (Mandarin)",
  "Japanese",
  "Korean",
  "Dutch",
  "Polish",
  "Swedish",
  "Danish",
  "Norwegian",
  "Finnish",
  "Greek",
  "Hebrew",
  "Thai",
  "Vietnamese",
  "Indonesian",
  "Malay",
  "Filipino (Tagalog)",
  "Czech",
  "Hungarian",
  "Romanian",
  "Slovak",
  "Bulgarian",
  "Ukrainian",
  "Persian (Farsi)",
  "Pashto",
  "Bengali",
  "Tamil",
  "Telugu",
  "Gujarati",
  "Punjabi",
  "Marathi",
  "Swahili",
  "Amharic",
  "Zulu",
  "Serbian",
  "Croatian",
  "Lithuanian",
  "Latvian",
  "Estonian",
];

const Basics = () => {
  const [basicsData, setBasicsData] = useState({
    title: "",
    subTitle: "",
    description: "",
    language: "",
    level: "",
    category: "",
    subcategory: "",
    taught: "",
    primaryTopic: "",
    image: "",
    video: "",
  });

  const [tags, setTags] = useState([]);
  const [tagsDiv, setTagsDiv] = useState(true);

  return (
    <div>
      <p>
        Your course landing page is crucial to your success on Udemy. If it’s
        done right, it can also help you gain visibility in search engines like
        Google. As you complete this section, think about creating a compelling
        Course Landing Page that demonstrates why someone would want to enroll
        in your course. Learn more about{" "}
        <a href="#" className="underline text-purple underline-offset-4">
          creating your course landing page
        </a>{" "}
        and course title standards.{" "}
        <a href="#" className="underline text-purple underline-offset-4">
          course title standards.
        </a>{" "}
      </p>

      <div>
        <div className="flex flex-col gap-2 mt-8">
          <div className="font-semibold">Course title</div>

          <div>
            <InputField
              value={basicsData.title}
              onChange={(e) => {
                const newValue = e.target.value;
                if (newValue.length <= 40) {
                  setBasicsData((p) => ({ ...p, title: newValue }));
                }
              }}
              icon={40 - basicsData.title.length}
              placeholder="Insert your course title"
            />
          </div>
          <p className="text-[12px] text-lightBlack">
            Your title should be a mix of attention-grabbing, informative, and
            optimized for search
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-2 mt-8">
          <div className="font-semibold">Course subtitle</div>

          <div>
            <InputField
              value={basicsData.subTitle}
              onChange={(e) => {
                const newValue = e.target.value;
                if (newValue.length <= 120) {
                  setBasicsData((p) => ({ ...p, subTitle: newValue }));
                }
              }}
              icon={120 - basicsData.subTitle.length}
              placeholder="Insert your course subtitle."
            />
          </div>
          <p className="text-[12px] text-lightBlack">
            Use 1 or 2 related keywords, and mention 3-4 of the most important
            areas that you've covered during your course.
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-2 mt-8">
          <div className="font-semibold">Course description</div>

          <div>
            <InputField
              value={basicsData.subTitle}
              onChange={(e) => {
                const newValue = e.target.value;
                if (newValue.length <= 120) {
                  setBasicsData((p) => ({ ...p, subTitle: newValue }));
                }
              }}
              icon={120 - basicsData.subTitle.length}
              placeholder="Insert your course description."
            />
          </div>
          <p className="text-[12px] text-lightBlack">
            Description should have minimum 200 words.
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-2 mt-8">
          <div className="font-semibold">Basic info</div>

          <div className="grid lg:grid-cols-3  gap-4">
            <div>
              <SelectField
                value={basicsData.language}
                options={languages}
                onChange={(e) => {
                  setBasicsData((p) => ({ ...p, language: e.target.value }));
                }}
                placeholder="Course language"
              />
            </div>
            <div>
              <SelectField
                value={basicsData.level}
                options={levels}
                onChange={(e) => {
                  setBasicsData((p) => ({ ...p, level: e.target.value }));
                }}
                placeholder="--Select Level--"
              />
            </div>
            <div>
              <SelectField
                value={basicsData.category}
                options={categories.map((c) => c.category)}
                onChange={(e) => {
                  setBasicsData((p) => ({ ...p, category: e.target.value }));
                }}
                placeholder="--Select Category--"
              />
            </div>
            <div className="lg:col-start-3">
              <SelectField
                value={basicsData.subcategory}
                options={
                  categories.find((c) => c.category === basicsData.category)
                    ?.subcategories
                }
                onChange={(e) => {
                  setBasicsData((p) => ({ ...p, subcategory: e.target.value }));
                }}
                placeholder="--Select Subcategory--"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[400px]">
        <div className="flex flex-col gap-2 mt-8">
          <div className="font-semibold">
            What is primarily taught in your course?
          </div>
          <div className="flex flex-wrap gap-2">
            {tags?.map((t, i) => {
              return (
                <div
                  onClick={() =>
                    setTags((prev) => prev.filter((_, index) => index !== i))
                  }
                  className="bg-purple text-sm font-semibold link text-white rounded-full p-2 px-4 flex items-center gap-2"
                >
                  <span>{t}</span>
                  <span className="font-normal text-[.8rem]">X</span>
                </div>
              );
            })}
          </div>

          {tags.length < 4 ? (
            <div className="relative">
              {tagsDiv ? (
                <div>
                  <InputField
                    value={basicsData.taught}
                    onChange={(e) => {
                      const newValue = e.target.value;
                      setBasicsData((p) => ({ ...p, taught: newValue }));
                    }}
                    placeholder="e.g. Landscape Photography"
                  />
                </div>
              ) : (
                <div
                  onClick={() => setTagsDiv(true)}
                  className="text-sm link text-lightBlack underline"
                >
                  Propose another topic...
                </div>
              )}
              {basicsData.taught !== "" && (
                <div className="absolute bg-white z-1 w-full p-2 mt-1 rounded border flex flex-col gap-3 max-h-[280px] overflow-y-auto">
                  {courseTags
                    .filter((t) =>
                      t.toLowerCase().includes(basicsData.taught.toLowerCase())
                    )
                    .map((t, i) => {
                      return (
                        <div
                          key={i}
                          onClick={() => {
                            setTags((prev) => {
                              if (!prev.includes(t)) {
                                setBasicsData((p) => ({
                                  ...p,
                                  taught: "",
                                }));
                                setTagsDiv(false);
                                return [...prev, t];
                              }
                              return prev;
                            });
                          }}
                          className="border-purple border-2 link rounded-full p-1 px-4"
                        >
                          {t}
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          ) : (
            <div className="text-sm text-lightBlack">
              A maximum of 4 topics are allowed. To replace a topic, first
              remove one.
            </div>
          )}
        </div>
      </div>

      {tags.length > 1 && (
        <div>
          <div className="flex flex-col gap-2 mt-8">
            <div className="font-semibold">
              From the topics you have selected, which is the most
              representative topic?
            </div>

            <div>
              <SelectField
                value={basicsData.primaryTopic}
                options={tags}
                onChange={(e) => {
                  setBasicsData((p) => ({
                    ...p,
                    primaryTopic: e.target.value,
                  }));
                }}
                placeholder="Select a primary topic"
              />
            </div>
          </div>
        </div>
      )}

      <div>
        <div className="flex flex-col gap-2 mt-8">
          <div className="font-semibold">Course image</div>
        </div>
        <div>
          <FileInput type="image" />
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-2 mt-8">
          <div className="font-semibold">Promotional video</div>
        </div>
        <div>
          <FileInput type="video" />
        </div>
      </div>
    </div>
  );
};

export default Basics;

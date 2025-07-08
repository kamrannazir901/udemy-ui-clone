import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import { icons } from "../assets/Data";

const CourseSection = () => {
  const [curriculum, setCurriculum] = useState([
    {
      mainTitle: "Introduction",
      mainDesc: "",
      lessons: [{ title: "Lesson 1", type: "", content: "" }],
    },
    {
      mainTitle: "Introduction",
      mainDesc: "",
      lessons: [{ title: "Lesson 1", type: "", content: "" }],
    },
  ]);

  const [sectionFormIndex, setSectionFormIndex] = useState(null);
  const [lessonFormIndex, setLessonFormIndex] = useState({ s: null, l: null });
  const [contentFormIndex, setContentFormIndex] = useState({
    section: null,
    lesson: null,
  });

  const [activeContentPicker, setActiveContentPicker] = useState({
    section: null,
    lesson: null,
  });

  const [sectionFormData, setSectionFormData] = useState({
    title: "",
    desc: "",
  });

  const [newLessonTitle, setNewLessonTitle] = useState("");

  const [newContent, setContent] = useState("");

  const handleUpdateSection = (i) => {
    const updated = [...curriculum];
    updated[i].mainTitle = sectionFormData.title;
    updated[i].mainDesc = sectionFormData.desc;
    setCurriculum(updated);
    setSectionFormIndex(null);
  };

  const handleAddLesson = (i) => {
    const updated = [...curriculum];
    updated[i].lessons.push({ title: newLessonTitle, type: "", content: "" });
    setCurriculum(updated);
    setLessonFormIndex({ s: null, l: null });
    setNewLessonTitle("");
  };

  const handleAddLessonAt = (secId, LessonPosition) => {
    const updated = [...curriculum];
    updated[secId].lessons.splice(LessonPosition, 0, {
      title: newLessonTitle,
      type: "",
      content: "",
    });
    setCurriculum(updated);
    setLessonFormIndex({ s: null, l: null });
    setNewLessonTitle("");
  };

  const addNewSectionAt = (i) => {
    setSectionFormData({
      title: "",
      desc: "",
    });

    const updated = [...curriculum];

    updated.splice(i, 0, {
      mainTitle: "",
      mainDesc: "",
      lessons: [],
    });
    setCurriculum(updated);
  };

  const addNewSection = () => {
    setSectionFormData({
      title: "",
      desc: "",
    });

    const updated = [...curriculum];

    updated.push({
      mainTitle: "",
      mainDesc: "",
      lessons: [],
    });
    setCurriculum(updated);
  };

  const [dragInfo, setDragInfo] = useState({
    type: null, // "section" or "lesson"
    fromSection: null,
    fromLesson: null,
  });

  const dragStart = (e, type, sectionIndex, lessonIndex = null) => {
    setDragInfo({
      type,
      fromSection: sectionIndex,
      fromLesson: lessonIndex,
    });
    e.target.classList.add("is-dragging");
  };

  const dragOver = (e, type, toSection, toLesson = null) => {
    e.preventDefault();
    const { type: draggedType, fromSection, fromLesson } = dragInfo;

    const updated = [...curriculum];

    if (draggedType === "section" && type === "section") {
      if (fromSection === toSection) return;
      const [moved] = updated.splice(fromSection, 1);
      updated.splice(toSection, 0, moved);
      setDragInfo({ ...dragInfo, fromSection: toSection });
      setCurriculum(updated);
    }

    if (draggedType === "lesson" && type === "lesson") {
      if (fromSection === toSection && fromLesson === toLesson) return;

      const lesson = updated[fromSection].lessons[fromLesson];
      updated[fromSection].lessons.splice(fromLesson, 1);
      updated[toSection].lessons.splice(toLesson, 0, lesson);

      setDragInfo({
        ...dragInfo,
        fromSection: toSection,
        fromLesson: toLesson,
      });
      setCurriculum(updated);
    }
  };

  const dragEnd = (e) => {
    e.target.classList.remove("is-dragging");
    setDragInfo({ type: null, fromSection: null, fromLesson: null });
  };

  useEffect(() => {
    console.clear();
    console.log(curriculum);
  }, [curriculum]);

  return (
    <>
      {curriculum.map(({ mainTitle, mainDesc, lessons }, i) => (
        <div key={i}>
          {/* ADD NEW SECTION BUTTON */}
          <div className="group py-4">
            <div className="w-fit opacity-0 group-hover:opacity-100">
              <Button
                text="Section"
                icon="+"
                iconleft={true}
                onClick={() => {
                  addNewSectionAt(i);
                  setSectionFormIndex(i);
                }}
                className="!py-0"
              />
            </div>
          </div>

          <div className="flex flex-col border bg-[#F6F7F9]">
            {/* SECTION ITEM */}
            {sectionFormIndex !== i ? (
              <div
                draggable
                onDragStart={(e) => dragStart(e, "section", i)}
                onDragOver={(e) => dragOver(e, "section", i)}
                onDragEnd={dragEnd}
                className="flex p-4 cursor-move items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <span className="font-semibold">Section {i + 1}</span>
                  <div className="flex items-center gap-2 text-sm">
                    <span>{icons.document}</span>
                    <span className="text-lg">{mainTitle}</span>
                    <span
                      className="link"
                      onClick={() => {
                        setSectionFormIndex(i);
                        setSectionFormData({
                          title: mainTitle,
                          desc: mainDesc,
                        });
                      }}
                    >
                      {icons.edit}
                    </span>
                    <span
                      className="link"
                      onClick={() => {
                        const updated = [...curriculum];
                        updated.splice(i, 1);
                        setCurriculum(updated);
                      }}
                    >
                      {icons.trash}
                    </span>
                  </div>
                </div>
                <div className="text-lg">{icons.menuIcon}</div>
              </div>
            ) : (
              // SECTION FORM (Edit)
              <div className="flex p-4 flex-wrap gap-2 border">
                <div className="font-semibold mt-1">New Section:</div>
                <div className="flex-1 flex flex-col gap-4">
                  <InputField
                    placeholder="Enter a title"
                    className="!py-2"
                    value={sectionFormData.title}
                    onChange={(e) =>
                      setSectionFormData((p) => ({
                        ...p,
                        title: e.target.value,
                      }))
                    }
                  />
                  <div>
                    <div className="font-semibold text-sm mb-2">
                      What will students be able to do at the end of this
                      section?
                    </div>
                    <InputField
                      placeholder="Enter a Learning Objective"
                      className="!py-2"
                      value={sectionFormData.desc}
                      onChange={(e) =>
                        setSectionFormData((p) => ({
                          ...p,
                          desc: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="w-fit ml-auto flex items-center justify-end gap-4">
                    <Button
                      text="Cancel"
                      className="!text-headBlack border-0 !py-1"
                      onClick={() => {
                        console.log(sectionFormData.title);

                        if (
                          sectionFormData.title === "" &&
                          curriculum[i].lessons.length === 0
                        ) {
                          setCurriculum((p) => p.slice(0, -1));
                          setSectionFormIndex(null);
                        } else {
                          setSectionFormIndex(null);
                        }
                      }}
                    />
                    <Button
                      text="Save"
                      type="dark"
                      className="!py-1"
                      onClick={() => {
                        if (sectionFormData.title !== "") {
                          handleUpdateSection(i);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* LESSON LIST */}

            <div className="">
              {lessons.map(({ title, type, content }, index) => (
                <div key={index} className="">
                  <div className="group">
                    {/* CURRICULUM ITEM BUTTON and Form */}
                    <div className="w-fit group-hover:opacity-100 opacity-0">
                      <Button
                        text="Curriculum item"
                        icon="+"
                        iconleft={true}
                        className="!py-0 text-sm border-0"
                        onClick={() => {
                          setLessonFormIndex({ s: i, l: index });
                        }}
                      />
                    </div>

                    {/* LESSON FORM */}
                    {lessonFormIndex.s === i && lessonFormIndex.l === index && (
                      <div className="flex w-[90%] ml-auto mb-5 p-4 flex-wrap gap-2 border">
                        <div className="font-semibold mt-1">New Lesson:</div>
                        <div className="flex-1 flex flex-col gap-4">
                          <InputField
                            placeholder="Enter a title"
                            className="!py-2"
                            value={newLessonTitle}
                            onChange={(e) => setNewLessonTitle(e.target.value)}
                          />
                          <div className="w-fit ml-auto flex items-center justify-end gap-4">
                            <Button
                              text="Cancel"
                              className="!text-headBlack border-0 !py-1"
                              onClick={() =>
                                setLessonFormIndex({ s: null, l: null })
                              }
                            />
                            <Button
                              text="Add Lesson"
                              type="dark"
                              className="!py-1"
                              onClick={() => {
                                if (newLessonTitle !== "") {
                                  handleAddLessonAt(i, index);
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* lesson item */}
                  <div
                    draggable
                    onDragStart={(e) => dragStart(e, "lesson", i, index)}
                    onDragOver={(e) => dragOver(e, "lesson", i, index)}
                    onDragEnd={dragEnd}
                    key={index}
                    className="flex w-[90%] ml-auto relative bg-white border p-4 cursor-move items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-semibold">Lesson {index + 1}:</span>
                      <div className="flex items-center gap-2 text-sm">
                        <span>{icons.document}</span>
                        <span className="text-lg">{title}</span>
                        <span
                          className="link"
                          onClick={() => {
                            setNewLessonTitle(title);
                            setLessonFormIndex({ s: i, l: index });
                            const updated = [...curriculum];
                            updated[i].lessons.splice(index, 1);
                            setCurriculum(updated);
                          }}
                        >
                          {icons.edit}
                        </span>
                        <span
                          className="link"
                          onClick={() => {
                            const updated = [...curriculum];
                            updated[i].lessons.splice(index, 1);
                            setCurriculum(updated);
                          }}
                        >
                          {icons.trash}
                        </span>
                      </div>
                    </div>

                    <div className="text-lg flex items-center gap-4">
                      <div>
                        {!(
                          activeContentPicker.section === i &&
                          activeContentPicker.lesson === index
                        ) &&
                          !(
                            contentFormIndex.section === i &&
                            contentFormIndex.lesson === index
                          ) && (
                            <Button
                              text="Content"
                              icon="+"
                              iconleft={true}
                              className="!py-1 text-sm"
                              onClick={() => {
                                setActiveContentPicker({
                                  section: i,
                                  lesson: index,
                                });
                                setContentFormIndex({
                                  section: null,
                                  lesson: null,
                                });
                              }}
                            />
                          )}

                        {activeContentPicker.section === i &&
                          activeContentPicker.lesson === index && (
                            <div className="flex items-center gap-4">
                              <Button
                                text="Article"
                                onClick={() => {
                                  setCurriculum((p) => {
                                    const updated = [...p];
                                    updated[i].lessons[index].type = "Article";
                                    return updated;
                                  });

                                  setContent(
                                    curriculum[i].lessons[index].content
                                  );

                                  setContentFormIndex({
                                    section: i,
                                    lesson: index,
                                  });
                                  setActiveContentPicker({
                                    section: null,
                                    lesson: null,
                                  }); // hide picker
                                }}
                                className="!py-1 text-sm"
                              />
                              <Button
                                text="Video"
                                onClick={() => {
                                  setCurriculum((p) => {
                                    const updated = [...p];
                                    updated[i].lessons[index].type = "video";
                                    return updated;
                                  });

                                  setContent(
                                    curriculum[i].lessons[index].content
                                  );

                                  setContentFormIndex({
                                    section: i,
                                    lesson: index,
                                  });
                                  setActiveContentPicker({
                                    section: null,
                                    lesson: null,
                                  }); // hide picker
                                }}
                                className="!py-1 text-sm"
                              />
                            </div>
                          )}
                      </div>
                      <span>{icons.menuIcon}</span>
                    </div>
                  </div>

                  {/* content form */}
                  {contentFormIndex.section === i &&
                    contentFormIndex.lesson === index && (
                      <div className="w-[90%] ml-auto">
                        <div className="flex p-4 flex-wrap gap-2 border border-t-0">
                          <div className="font-semibold mt-1">
                            {type || "Content"}:
                          </div>
                          <div className="flex-1 flex flex-col gap-4">
                            <InputField
                              placeholder={
                                type === "video"
                                  ? "Video link"
                                  : "Article here..."
                              }
                              className="!py-2"
                              value={newContent}
                              onChange={(e) =>
                                setContent((p) => e.target.value)
                              }
                            />

                            <div className="w-fit ml-auto flex items-center justify-end gap-4">
                              <Button
                                text="Cancel"
                                className="!text-headBlack border-0 !py-1"
                                onClick={() => {
                                  setContent("");
                                  setContentFormIndex(index);
                                }}
                              />
                              <Button
                                text="Save"
                                type="dark"
                                className="!py-1"
                                onClick={() => {
                                  if (newContent !== "" || content !== "") {
                                    setCurriculum((p) => {
                                      const updated = [...p];
                                      updated[i].lessons[index].content =
                                        newContent;
                                      setContent("");
                                      setContentFormIndex({
                                        section: null,
                                        lesson: null,
                                      });
                                      return updated;
                                    });
                                  }
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              ))}

              {/* fake space for drop  */}
              {lessons.length === 0 && (
                <div
                  className="w-[90%] ml-auto border-dashed border-2 border-gray-300 mt-5 p-4 text-center text-gray-500 italic"
                  onDragOver={(e) => dragOver(e, "lesson", i, 0)}
                  onDragStart={(e) => e.preventDefault()}
                >
                  Drop lesson here
                </div>
              )}
              {/* Bahir wala CURRICULUM ITEM BUTTON and Form */}

              {mainTitle !== "" && (
                <div className="ml-auto w-[90%] mb-4">
                  <div className="mt-5">
                    <Button
                      text="Curriculum item"
                      icon="+"
                      iconleft={true}
                      className="!py-1 !w-fit"
                      onClick={() => {
                        setNewLessonTitle("");
                        setLessonFormIndex({
                          s: i,
                          l: curriculum[i].lessons.length,
                        });
                      }}
                    />
                  </div>
                  {/* LESSON FORM */}
                  {lessonFormIndex.l === curriculum[i].lessons.length &&
                    lessonFormIndex.s === i && (
                      <div className="flex p-4 flex-wrap gap-2 border">
                        <div className="font-semibold mt-1">New Lesson:</div>
                        <div className="flex-1 flex flex-col gap-4">
                          <InputField
                            placeholder="Enter a title"
                            className="!py-2"
                            value={newLessonTitle}
                            onChange={(e) => setNewLessonTitle(e.target.value)}
                          />
                          <div className="w-fit ml-auto flex items-center justify-end gap-4">
                            <Button
                              text="Cancel"
                              className="!text-headBlack border-0 !py-1"
                              onClick={() =>
                                setLessonFormIndex({ s: null, l: null })
                              }
                            />
                            <Button
                              text="Add Lesson"
                              type="dark"
                              className="!py-1"
                              onClick={() => handleAddLesson(i)}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              )}
            </div>
          </div>

          {/*Bahir wala ADD NEW SECTION BUTTON */}

          {i === curriculum.length - 1 && (
            <div className=" py-4">
              <div className="w-fit">
                <Button
                  text="Section"
                  icon="+"
                  iconleft={true}
                  onClick={() => {
                    addNewSection();
                    setSectionFormIndex(i + 1);
                  }}
                  className="!py-1"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default CourseSection;

import React, { useState } from "react";
import CourseSection from "../../../components/CourseSection";

const Curriculum = () => {
  const [curriculum, setCurriculum] = useState([
    {
      id: crypto.randomUUID(), // For drag-drop keying
      sectionTitle: "Section 1",
      sectionObjective: "Explain project basics",
      lectures: [
        {
          id: crypto.randomUUID(),
          lectureTitle: "Lecture 1",
          type: "video", // or "article", "assignment"
          content: {
            videoUrl: "", // If type === "video"
            articleText: "", // If type === "article"
            assignmentFile: "", // If type === "assignment"
          },
        },
        // More lectures
      ],
    },
    // More sections
  ]);

  return (
    <div>
      <p>
        Start putting together your course by creating sections, lectures and
        practice activities (
        <a href="#" className="underline text-purple underline-offset-4">
          quizzes, coding exercises and assignments{" "}
        </a>
        ). Use your{" "}
        <a href="#" className="underline text-purple underline-offset-4">
          course outline
        </a>{" "}
        to structure your content and label your sections and lectures clearly.
        If you’re intending to offer your course for free, the total length of
        video content must be less than 2 hours.
      </p>

      <div className="mt-8">
        <CourseSection />
      </div>
    </div>
  );
};

export default Curriculum;

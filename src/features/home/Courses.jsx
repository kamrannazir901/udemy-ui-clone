import React, { useRef, useState } from "react";
import CourseCard from "../../components/CourseCard";
import SecHead from "../../components/SecHead";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { courseData, icons, images } from "assets/Data";
import SwiperSlider from "../../components/SwiperSlider";

const Courses = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="container-pad spaceTop flex flex-col gap-6">
      <SecHead title="Learners are viewing" />
      <SwiperSlider
        data={courseData}
        top="30"
        renderSlide={(course) => <CourseCard course={course} />}
      />
    </div>
  );
};

export default Courses;

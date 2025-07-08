import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { icons } from "../assets/Data";

const SwiperSlider = ({
  data = [],
  slidesPerView,
  slidesPerGroup,
  renderSlide,
  top = 50,
  activeIndex,
  sliderId = "",
  auto = false,
  btnhide = false,
}) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateEdges = () => {
    if (!swiperRef.current) return;
    setIsBeginning(swiperRef.current.isBeginning);
    setIsEnd(swiperRef.current.isEnd);
  };

  useEffect(() => {
    // setIsEnd(false);
  }, [activeIndex]);

  useEffect(() => {
    const bullets = document.querySelectorAll(".custom-bullet");
    bullets.forEach((b) => {
      const i = parseInt(b.dataset.index);
      if (i < currentIndex) {
        b.classList.add("filled");
      } else {
        b.classList.remove("filled");
      }
    });
  }, [currentIndex]);

  return (
    <div className="relative">
      {!btnhide ? (
        <>
          <button
            style={{ top: `${top}%` }}
            className={`custom-prev-${sliderId} absolute left-0 z-20 bg-white p-2 text-2xl rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 ${
              isBeginning ? "invisible" : "visible"
            }`}
          >
            {icons.leftIcon}
          </button>
          <button
            style={{ top: `${top}%` }}
            className={`custom-next-${sliderId} absolute  right-0 z-20 bg-white p-2 text-2xl rounded-full shadow-lg transform translate-x-1/2 -translate-y-1/2 ${
              isEnd ? "invisible" : "visible"
            }`}
          >
            {icons.rightIcon}
          </button>
        </>
      ) : (
        ""
      )}

      <Swiper
        modules={[Navigation, Pagination, ...(auto ? [Autoplay] : [])]}
        autoplay={auto ? { delay: 4000, disableOnInteraction: false } : auto}
        pagination={{
          el: `.custom-pagination-${sliderId}`,
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} custom-bullet" data-index="${index}"></span>`,
        }}
        loop={!!auto}
        watchSlidesProgress={true}
        slidesPerView={slidesPerView || "auto"}
        slidesPerGroup={slidesPerGroup || 1}
        spaceBetween={16}
        navigation={{
          nextEl: `.custom-next-${sliderId}`,
          prevEl: `.custom-prev-${sliderId}`,
        }}
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.realIndex);
          if (swiper.realIndex < data.length - 1) {
            setIsEnd(false);
          }
        }}
        onInit={(swiper) => {
          swiperRef.current = swiper;
          updateEdges();

          swiper.on("slideChange", updateEdges);
          swiper.on("resize", updateEdges);
          swiper.on("reachEnd", updateEdges);
          swiper.on("reachBeginning", updateEdges);
          swiper.on("fromEdge", updateEdges);
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide
            className={`${slidesPerView < 2 ? "" : "!w-fit"}`}
            key={item.id || index}
          >
            {renderSlide(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Hero1 from "assets/images/hero1.jpg";
import Hero2 from "assets/images/hero2.jpg";
import Button from "../../components/Button";
import { icons } from "assets/Data";

const slides = [
  {
    title: "Learning that gets you",
    subtitle: "Skills for your present (and your future). Get started with us.",
    img: Hero2,
  },
  {
    title: "Skills that drive you forward",
    subtitle:
      "Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.",
    img: Hero1,
    button: true,
  },
];

export default function HeroSlider() {
  return (
    <div className="w-full relative container">
      <button className="custom-prev absolute top-[180px] left-4 z-20 bg-white  rounded-full p-2 text-2xl">
        {icons.leftIcon}
      </button>
      <button className="custom-next absolute top-[180px] right-4 z-20 bg-white hover:bg-gray-200 rounded-full p-2 text-2xl">
        {icons.rightIcon}
      </button>
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className=" h-fit w-full relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-fit">
              <img
                src={slide.img}
                alt={slide.title}
                className="object-cover w-full h-full min-h-[300px] lg:min-h-auto"
              />
              <div className="bg-white lg:absolute top-[10%] left-[80px] lg:max-w-[34%] px-6 py-8 flex flex-col gap-2">
                <h1 className="h1">{slide.title}</h1>
                <p>{slide.subtitle}</p>
                {slide.button && (
                  <div className="flex items-center gap-2 flex-wrap mt-4">
                    <div className=" flex-1">
                      <Button text="Plan for individuals" type="dark" />
                    </div>
                    <div className=" flex-1">
                      <Button text="Plan for organizations" type="light" />
                    </div>
                  </div>
                )}
                <div className="lg:hidden flex mt-6 px-2 py-3 items-center border hover:bg-lightpurpleHover cursor-pointer">
                  <input
                    type="text"
                    placeholder="What do you want to learn?"
                    className="outline-none w-full cursor-pointer"
                    disabled
                  />
                  <span className="flex text-2xl items-center justify-center">
                    {icons.searchIcon}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

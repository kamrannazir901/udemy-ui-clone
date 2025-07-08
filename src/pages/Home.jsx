import React from "react";
import HeroSlider from "../features/home/HeroSlider";
import Careers from "../features/home/Careers";
import Logos from "../features/home/Logos";
import Courses from "../features/home/Courses";
import AllSkills from "../features/home/AllSkills";
import Goals from "../features/home/Goals";
import PriceCards from "../features/home/PriceCards";
import Reviews from "../features/home/Reviews";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <Careers />
      <AllSkills />
      <Logos />
      <Courses />
      <Goals />
      <PriceCards />
      <Reviews />
    </div>
  );
};

export default Home;

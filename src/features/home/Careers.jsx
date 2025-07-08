import React from "react";
import SecHead from "../../components/SecHead";
import Button from "../../components/Button";
import CareerCard from "../../components/CareerCard";
import { images } from "../../assets/Data";

const data = [
  {
    image: images.career1,
    title: "Full stack web developer",
    stars: "4.7",
    rating: "447K",
    totalhours: "86.6",
  },
  {
    image: images.career2,
    title: "Digital Marketing",
    stars: "4.5",
    rating: "3.4K",
    totalhours: "28.3",
  },
  {
    image: images.career3,
    title: "Data scientist",
    stars: "4.6",
    rating: "218K",
    totalhours: "46.8",
  },
];

const Careers = () => {
  return (
    <div className="container-pad flex flex-col gap-6 spaceTop">
      <SecHead
        title="Ready to reimagine your career?"
        desc="Get the skills and real-world experience employers want with Career Accelerators."
      />
      <div className="flex items-center justify-around gap-4 flex-wrap md:flex-nowrap">
        {data.map((data, i) => {
          return <CareerCard {...data} key={i} />;
        })}
      </div>
      <div className="w-fit py-1">
        <Button text="All Career Accelerators" className="!py-2 text-sm" />
      </div>
    </div>
  );
};

export default Careers;

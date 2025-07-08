import React from "react";
import { icons, images } from "../assets/Data";
import SecHead from "./SecHead";
import { NavLink } from "react-router-dom";

const CareerCard = ({ image, title, stars, rating, totalhours }) => {
  return (
    <NavLink
      to="/career"
      className="flex flex-col gap-3 min-w-[200px] rounded-2xl border hover:bg-gray-100 link border-[#ddd] p-2 md:p-4"
    >
      <img src={image} alt="" className="w-full rounded-xl" />
      <SecHead title={title} className="md:text-lg" />
      <div className="flex items-center gap-3 flex-wrap text-lightBlack">
        <span className="flex rounded items-center gap-1 border border-[#ddd] text-sm py1 px-2">
          <span className="text-[.7rem] text-[#C4710D]">{icons.starIcon}</span>
          <span>{stars}</span>
        </span>
        <span className="flex rounded items-center gap-1 border border-[#ddd] text-sm py1 px-2">
          <span>{rating}</span>
          <span className="text-[.7rem]">ratings</span>
        </span>
        <span className="flex rounded items-center gap-1 border border-[#ddd] text-sm py1 px-2">
          <span>{totalhours}</span>
          <span className="text-[.7rem]">total hours</span>
        </span>
      </div>
    </NavLink>
  );
};

export default CareerCard;

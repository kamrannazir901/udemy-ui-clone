import React from "react";
import { icons } from "../assets/Data";
import SecHead from "./SecHead";
import { NavLink } from "react-router-dom";

const CourseCard = ({ course }) => {
  const {
    title,
    author,
    rating,
    reviews,
    price,
    isBestSeller,
    isPremium,
    image,
  } = course;

  return (
    <NavLink to="/course" className="flex flex-col w-[280px]">
      <img src={image} alt={title} className="h-[150px] object-cover" />
      <h2 className="font-semibold leading-tight text-headBlack">{title}</h2>
      <p className="text-sm text-nowrap truncate text-lightBlack pr-2">
        {author}
      </p>
      <div className="flex items-center gap-2 ">
        <span className="font-semibold text-[#8B4309]">{rating}</span>
        <div className="flex items-center gap-1 text-[.7rem] text-[#C4710D]">
          <span>{icons.starIcon}</span>
          <span>{icons.starIcon}</span>
          <span>{icons.starIcon}</span>
          <span>{icons.starIcon}</span>
          <span>{icons.halfStar}</span>
        </div>
        <span className="text-lightBlack text-[.7rem] ">({reviews})</span>
      </div>
      <p className="font-semibold leading-tight text-headBlack mt-1">
        ${price}
      </p>
      <div className="flex items-center gap-2 mt-2">
        {isBestSeller && (
          <div className="rounded bg-[#C2E9EB] py-1 font-semibold px-2 text-sm text-lightBlack">
            Best Seller
          </div>
        )}
        {isPremium && (
          <div className="rounded bg-[#5022C3] py-1 font-semibold px-2 text-sm text-white flex items-center gap-1">
            <span>{icons.checkIcon}</span>
            <span>Premium</span>
          </div>
        )}
      </div>
    </NavLink>
  );
};

export default CourseCard;

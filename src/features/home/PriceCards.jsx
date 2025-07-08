import React, { useState } from "react";
import SecHead from "../../components/SecHead";
import { icons } from "../../assets/Data";
import Button from "../../components/Button";

const pricingPlans = [
  {
    title: "Personal Plan",
    subTitle: "For you",
    audience: "Individual",
    price: "Starting at $11.00 per month",
    note: "Billed monthly or annually. Cancel anytime.",
    icon: icons.userIcon,

    features: [
      "Access to 26,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
    ],
    buttonText: "Try it free",
  },
  {
    title: "Team Plan",
    subTitle: "For your team",
    audience: "2 to 20 people",
    price: "$30.00 a month per user",
    note: "Billed annually. Cancel anytime.",
    icon: icons.twoUserIcon,

    features: [
      "Access to 13,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Analytics and adoption reports",
    ],
    buttonText: "Try it free",
  },
  {
    title: "Enterprise Plan",
    subTitle: "For your whole organization",
    audience: "More than 20 people",
    price: "Contact sales for pricing",
    note: "",
    icon: icons.twoUserIcon,
    features: [
      "Access to 30,000+ top courses",
      "Certification prep",
      "Goal-focused recommendations",
      "AI-powered coding exercises",
      "Advanced analytics and insights",
      "Dedicated customer success team",
      "International course collection featuring 15 languages",
      "Customizable content",
      "Hands-on tech training with add-on",
      "Strategic implementation services with add-on",
    ],
    buttonText: "Request a demo",
  },
];

const Card = ({
  title,
  subTitle,
  audience,
  price,
  note,
  features,
  buttonText,
  icon,
  onclick,
  isActive,
}) => {
  return (
    <div className="w-full rounded-lg  border-t-8 border-t-purple bg-white  border border-lightpurpleHover">
      <div
        onClick={onclick}
        className=" flex md:flex-row lg:flex-col flex-col tems-center gap-4 bg-[#F6F7F9] text-lightBlack p-4"
      >
        <div className="flex flex-col">
          <h2 className="font-suisse text-lg text-headBlack">{title}</h2>
          <span className="text-[.8rem] leading-tight">{subTitle}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[.8rem]">{icon}</span>
          <span className="text-sm">{audience}</span>
        </div>
      </div>
      {/* body */}
      <div
        className={`py-6 p-4 ${
          isActive ? "flex" : "hidden"
        } lg:flex flex-col gap-6 `}
      >
        <div className="flex flex-col">
          <h2 className="font-semibold text-headBlack">{price}</h2>
          <span
            className={`text-[.8rem] text-lightBlack leading-tight ${
              note ? "" : "invisible"
            }`}
          >
            {note || "placeholder"}
          </span>
        </div>
        <div>
          <Button text={buttonText} type="dark" icon={icons.goRightIcon} />
        </div>
        <div className="grid grid-cols-1 gap-1 text-headBlack">
          {features.map((f, i) => {
            return (
              <div key={i} className="flex items-center gap-4 text-[.9rem]">
                <span>{icons.checkIconCircle}</span>
                <span>{f}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const PriceCards = () => {
  const [active, setActive] = useState(-1);
  return (
    <div className="container-pad spaceTop">
      <div className="flex flex-col gap-6">
        <SecHead
          title="Accelerate growth — for you or your organization"
          desc="Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more."
        />
        <div className="flex lg:flex-row flex-col lg:gap-6 justify-between">
          {pricingPlans.map((p, i) => {
            return (
              <Card
                key={i}
                {...p}
                isActive={active === i}
                onclick={() => setActive(i)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PriceCards;

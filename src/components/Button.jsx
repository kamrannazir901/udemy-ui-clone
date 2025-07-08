import React from "react";
import { icons } from "../assets/Data";

const Button = ({
  onClick = () => {},
  text,
  type,
  icon = "",
  className = "",
  iconleft = false,
}) => {
  const baseStyles = `px-2 py-3 border-purple flex border justify-center gap-2 items-center block font-bold cursor-pointer whitespace-nowrap rounded text-purple hover:bg-[#EDE5FA] w-full`;
  const conditionStyles = `${
    type === "dark" ? "bg-purple hover:bg-purpleHover text-white " : ""
  }`;

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${conditionStyles} ${className}`}
    >
      {iconleft && icon && <span>{icon}</span>}

      <span>{text}</span>
      {!iconleft && icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;

import React from "react";
import { icons } from "../assets/Data"; // adjust if needed
const SelectField = ({
  options = [],
  value,
  onChange,
  placeholder = "Select...",
  className = "",
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <span className="absolute right-2 top-1/2 -translate-y-1/2 rotate-90 text-[.7rem] z-10">
        {icons.rightIcon}
      </span>
      <select
        value={value}
        onChange={onChange}
        className="w-full appearance-none border rounded p-2 text-sm"
      >
        <option value="">{placeholder}</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;

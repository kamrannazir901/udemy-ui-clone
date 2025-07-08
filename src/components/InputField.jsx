import React, { useState } from "react";

const InputField = ({
  id = "input",
  label = null,
  type = "text",
  value,
  onChange,
  className = "",
  icon = null,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const shouldFloatLabel = isFocused || value !== "";

  return (
    <div
      className={` hover:bg-gray-100 border-lightBlack ${
        isFocused ? "border-purple border-2" : "border-[1px]"
      } relative rounded overflow-hidden`}
    >
      {icon !== null && icon !== undefined && (
        <span className=" absolute right-2 top-1/2 -translate-y-1/2">
          {icon}
        </span>
      )}
      {label && (
        <label
          htmlFor={id}
          className={`absolute transition-all duration-300 text-sm px-4 font-semibold ${
            shouldFloatLabel ? "top-1 text-xs" : "top-1/2 -translate-y-1/2"
          }`}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        className={`block w-full h-full ${
          label ? "pt-6" : "pt-3"
        } pb-3 px-4 bg-transparent outline-none text-sm ${className}`}
        {...props}
      />
    </div>
  );
};

export default InputField;

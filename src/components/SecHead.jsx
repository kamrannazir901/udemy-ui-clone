import React from "react";

const SecHead = ({ title, desc, className }) => {
  return (
    <div className="flex flex-col gap-1">
      <h2
        className={`font-semibold font-suisse text-xl md:text-3xl text-headBlack ${className}`}
      >
        {title}
      </h2>
      {desc && <p className="md:text-lg text-lightBlack">{desc}</p>}
    </div>
  );
};

export default SecHead;

import React from "react";
import SecHead from "../../components/SecHead";
import { images } from "../../assets/Data";

const Logos = () => {
  return (
    <div className="container-pad flex flex-col gap-4 spaceTop">
      <div className="text-center">
        <SecHead desc="Trusted by over 16,000 companies and millions of learners around the world" />
      </div>
      <div className="grid grid-cols-2 justify-items-center md:grid-cols-4 gap-8 lg:grid-cols-8 ">
        {/* First 4 logos */}
        <img src={images.logo1} alt="Logo 1" />
        <img src={images.logo2} alt="Logo 2" />
        <img src={images.logo3} alt="Logo 3" />
        <img src={images.logo4} alt="Logo 4" />

        {/* Second 4 logos */}
        <img src={images.logo5} alt="Logo 5" />
        <img src={images.logo6} alt="Logo 6" />
        <img src={images.logo7} alt="Logo 7" />
        <img src={images.logo8} alt="Logo 8" />
      </div>
    </div>
  );
};

export default Logos;

import React from "react";
import { images } from "../constants";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className="flex flex-col md:px-6 lg:px-[100px] h-screen">
      <div className="flex flex-col justify-center items-center md:items-start pt-[127px] md:pt-[90px] font-gilmedium tracking-[1px]  text-[#5b5e5f] ">
        <img className="md:hidden h-8" src={images.logodark.src} alt="" />
        <h1 className="hidden md:block text-[#114455] font-gilextra text-[80px] lg:w-[60%] ">
          We build dreams, not just walls
        </h1>
        <span className="w-[50%] md:w-full text-center md:text-left  mt-7 md:text-2xl ">
          We fulfill international property developments
        </span>
        {/* Button on LG screens */}
        <div className="hidden lg:flex  mt-[72px] justify-center items-center space-x-2 px-6 py-2 text-white bg-[#114455]">
          <button>Let's Talk</button>
          <Icon icon="bytesize:arrow-right" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-[300px] md:mt-[80px]">
        <Icon
          className="text-white w-8 h-8 animate-bounce lg:hidden"
          icon="bi:chevron-double-down"
        />
      </div>
    </div>
  );
};

export default Header;

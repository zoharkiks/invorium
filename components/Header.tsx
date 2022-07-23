import React from "react";
import { images } from "../constants";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className="flex flex-col md:px-6 ">
      <div className="flex flex-col justify-center items-center md:items-start pt-[127px] font-gilmedium tracking-[1px]  text-[#5b5e5f] ">
        <img className="md:hidden h-8" src={images.logodark.src} alt="" />
        <h1 className="hidden md:block text-[#114455] font-gilextra text-[80px]  ">
          We build dreams, not just walls
        </h1>
        <span className="w-[50%] md:w-full text-center md:text-left  mt-7 md:text-2xl">
          We fulfill international property developments
        </span>
      </div>
      <div className="flex justify-center items-center mt-[300px] md:mt-[80px]">
        <Icon
          className="text-white w-8 h-8 animate-bounce"
          icon="bi:chevron-double-down"
        />
      </div>
    </div>
  );
};

export default Header;

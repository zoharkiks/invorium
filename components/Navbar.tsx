import React from "react";
import { images } from "../constants";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <div className="flex justify-between pb-5 px-6 ">
      <img className="h-[22px]" src={images.logo.src} alt="" />
      <div className="hidden md:flex justify-between items-center space-x-[40px] font-gilextra text-[#114455] rounded-sm ">
        <a className=" ">About Us</a>
        <div className="flex justify-center items-center space-x-2 border-2 px-6 py-2 border-[#114455]">
          <button>Let's Talk</button>
          <Icon icon="bytesize:arrow-right" />
        </div>
      </div>
      <Icon className="h-6 w-6 md:hidden" icon="heroicons-solid:menu-alt-4" />
    </div>
  );
};

export default Navbar;

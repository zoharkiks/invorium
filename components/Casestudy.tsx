import React from "react";
import { images } from "../constants";

const Casestudy = () => {
  return (
    <div className="flex flex-col px-6 py-20">
      <h1 className=" font-gilextra text-[32px] mb-2">Case Studies</h1>
      <p className="font-gilmedium tracking-[1px] leading-6 text-[#5b5e5f] mb-8">
        We deliver a unique and truly bespoke approach to delivering
        international developments to market, with over 10 years success around
        the world.
      </p>
      <div className="flex">
        <img className="w-[224px] h-[264px]" src={images.France.src} alt="" />
      </div>
    </div>
  );
};

export default Casestudy;

import React from "react";
import { images } from "../constants";
import { motion } from 'framer-motion';



const Casestudy = () => {
  return (
    <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.5 }}  className="flex flex-col px-6 py-20 lg:px-[100px] lg:py-[104px] ">
      <h1 className=" font-gilextra text-[32px] lg:text-[80px] mb-2">Case Studies</h1>
      <p className="lg:text-2xl font-gilmedium tracking-[1px] leading-6 text-[#5b5e5f] mb-8">
        We deliver a unique and truly bespoke approach to delivering
        international developments to market, with over 10 years success around
        the world.
      </p>
      <div className="flex">
        <img className="w-[224px] h-[264px] md:h-[520px] md:w-[450px]" src={images.France.src} alt="" />
      </div>
    </motion.div>
  );
};

export default Casestudy;

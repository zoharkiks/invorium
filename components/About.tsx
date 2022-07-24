import React from "react";
import { motion } from "framer-motion";


const About = () => {
  return (
    <motion.div
    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.5 }}
      className="flex flex-col px-6 pb-20 lg:px-[100px]"
    >
      <h1 className=" font-gilextra text-[32px] lg:text-[80px] mb-2">
        We are Invoriem
      </h1>
      <p className="font-gilmedium lg:text-2xl tracking-[1px] leading-6 text-[#5b5e5f] mb-8">
        We fulfill international property developments
      </p>
      <div className="flex justify-center items-center">
        <div className="h-[338px] lg:h-[500px] w-full bg-cover bg-no-repeat bg-center bg-[url('../assets/video.png')] "></div>
      </div>
    </motion.div>
  );
};

export default About;

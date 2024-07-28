"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex pt-32 pb-40 flex-col w-full h-full"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex justify-center flex-col items-center space-y-3"
        >
          {/* <Image src="/alvi.jpg" alt='logo' width={100} height={100} className='rounded-full'/> */}
          <h1 className="text-5xl underline font-bold text-white">WEB 3</h1>
          <h1 className="text-white w-[900px] text-center content-center pt-6">
            Certified Web 3.0 and Metaverse Developer. A One and Quarter Years
            Panaverse DAO Earn as you Learn Program Getting Ready for the Next
            Generation of the Internet.
          </h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="text-lg content-center text-justify flex flex-col pt-16 pl-32 pr-32 space-y-10 text-gray-400"
      >
        <h1 className="content-center">
          This curriculum is intended for beginners who want to learn software
          development from the ground up. The first two quarters are shared by
          all specialties and are dedicated to studying Object-Oriented
          Programming and cutting-edge Full-Stack Web 2.0 development. It is
          going to be a fifteen-month-long hybrid program that includes both
          onsite and online classes and is divided into five quarters of 13
          weeks each. The emphasis will be on hands-on learning by educating
          students to produce projects. To accommodate everyone, courses will be
          held primarily on weekends or after 6:00 p.m. (Pakistan Time) on
          weekdays. It employs a hybrid teaching format, with core onsite
          classes complemented by online Zoom laboratories and recorded videos.
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

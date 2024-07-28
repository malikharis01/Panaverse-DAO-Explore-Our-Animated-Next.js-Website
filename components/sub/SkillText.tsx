"use client";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { UserCheck } from "lucide-react";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Montserrat } from "next/font/google";
import { DM_Sans } from "next/font/google";
// import { ArrowUpRightSquare } from 'lucide-react';
import Link from "next/link";
const dm = DM_Sans({ subsets: ["latin"], weight: "400", style: "normal" });

const mont = Montserrat({
  weight: "900",
  subsets: ["latin"],
  style: "normal",
});
const SkillText = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 300,
    });
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="fade-right"
      className="w-full  flex flex-col  justify-center"
    >
      <motion.div
        variants={slideInFromLeft(0.5)}
        className={` ${mont.className} font-serif text-[60px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold mt-[6px] text-center `}
      >
        We Are Proud
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] tracking-widest text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className=" text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        You do not need to face challenges by yourself. we are here to offer our
        support and aid
      </motion.div>
      <div className=" flex justify-evenly pt-6  space-x-5 ">
        <div className="  border p-14 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-purple-800  text-white rounded-md w-max items-center text-center">
          <h1 className=" text-white justify-center flex"></h1>
          <h1 className=" font-extrabold text-3xl">5,000</h1>
          <h1 className=" font-light text-xl">Student Enrolled</h1>
        </div>
        <div className=" border p-14  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110  bg-cyan-800 space-y-2  text-white rounded-md w-max items-center text-center">
          <h1 className=" text-white justify-center flex"></h1>
          <h1 className=" font-extrabold text-3xl">1,000</h1>
          <h1 className=" font-light text-xl">Classes Completed</h1>
        </div>
        <div className=" transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 border p-14  bg-gray-800 space-y-2  text-white rounded-md w-max items-center text-center">
          <h1 className=" text-white justify-center flex"></h1>
          <h1 className=" font-extrabold text-3xl">1,000+</h1>
          <h1 className=" font-light text-xl">Skilled Instructors</h1>
        </div>
        <div className=" transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 border p-14  bg-green-800 space-y-2  text-white rounded-md w-max items-center text-center">
          <h1 className=" text-white justify-center flex"></h1>
          <h1 className=" font-extrabold text-3xl">5,000</h1>
          <h1 className=" font-light text-xl">Student Enrolled</h1>
        </div>
      </div>
    </div>
  );
};

export default SkillText;

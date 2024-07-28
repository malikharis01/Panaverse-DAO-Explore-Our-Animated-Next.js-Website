"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { Montserrat } from "next/font/google";
import { DM_Sans } from "next/font/google";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

// import { ArrowUpRightSquare } from 'lucide-react';
import Link from "next/link";
const dm = DM_Sans({ subsets: ["latin"], weight: "400", style: "normal" });

const mont = Montserrat({
  weight: "900",
  subsets: ["latin"],
  style: "normal",
});
const Projects = () => {
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
      className="flex  flex-col justify-center"
      id="projects"
    >
      <div className=" flex items-center flex-col py-6 ">
        <h1
          className={` ${mont.className} tracking-widest text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500`}
        >
          Core Courses
        </h1>
        <h1 className="text-[30px] tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Common In ALL Specialization
        </h1>

        <h1 className=" text-[20px] text-gray-200 mb-10 mt-[10px] text-center"></h1>
      </div>
      <div className="h-full w-full flex flex-col justify-evenly md:flex-row gap-10  px-10">
        <ProjectCard
          src="/Q1.png"
          title="Quater 1"
          description="Object-Oriented Programming using TypeScript"
          lnk="/Q1"
        />
        <ProjectCard
          src="/Q2.png"
          title="Quater 2"
          description="Developing Planet Scale Web 2.O Serverless Cloud Apps"
          lnk="/Q2"
        />
        <ProjectCard
          src="/Q3.png"
          title="Quater 3"
          description="Full-Stack Templates and API Product Development"
          lnk="/Q3"
        />
      </div>
    </div>
  );
};

export default Projects;

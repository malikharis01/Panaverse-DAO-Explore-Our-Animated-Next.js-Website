"use client";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCard from "../sub/ProjectCard";
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
const Special = () => {
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
      data-aos="fade-left"
      className="flex flex-col items-center justify-center py-20 gap-y-5"
      id="projects"
    >
      <div className=" flex items-center flex-col py-8 ">
        <h1
          className={` ${mont.className} tracking-widest text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500`}
        >
          Specialized Track
        </h1>
        <h1 className="text-[30px] tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Web 3.0 (Blockchain) and Metaverse Specialization
        </h1>
      </div>
      <div className="h-full w-full flex flex-col justify-evenly md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Q33.png"
          title="Quater 4"
          description=" W3:351 : Developing Smart Contracts and Planet-Scale Web 3.0 Dapps"
          lnk="/Q4"
        />
        <ProjectCard
          src="/Q4.png"
          title="Quater 5"
          description="MV-361: Developing Planet Scale Open Virtual  Experiences"
          lnk="/Q5"
        />
        <ProjectCard
          src="/Q5.png"
          title="Quater 5"
          description="MV-361: Developing Planet Scale Open Virtual and  Experiences"
          lnk="/Q5"
        />
      </div>
    </div>
  );
};

export default Special;

"use client";
import React from "react";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCard from "@/components/sub/ProjectCard";
import { Montserrat } from "next/font/google";
import { DM_Sans } from "next/font/google";

import Link from "next/link";
const dm = DM_Sans({ subsets: ["latin"], weight: "400", style: "normal" });

const mont = Montserrat({
  weight: "900",
  subsets: ["latin"],
  style: "normal",
});
const Cloud = () => {
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
          className={` ${mont.className} tracking-wider text-[30px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500`}
        >
          Cloud-Native Computing Specialization
        </h1>
        {/* <h1 className=" text-lg w-[900px] content-center tracking-widest font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
      The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.

      </h1> */}
      </div>
      <div className="h-full w-full flex flex-col justify-evenly md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Q4.png"
          title="Quater 4"
          description="CN-351 : Certified Kubernetes Application Developer (CKAD)"
          lnk="/Q4"
        />
        <ProjectCard
          src="/Q5.png"
          title="Quater 5"
          description="CN-361: Developing Multi-Cloud APIs using CDK for Terraform"
          lnk="/Q5"
        />
        <ProjectCard
          src="/Q33.png"
          title="Quater 5"
          description="CN-361: Developing Multi-Cloud APIs using CDK for Terraform"
          lnk="/Q5"
        />
      </div>
    </div>
  );
};

export default Cloud;

"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Public_Sans } from "next/font/google";
import { DM_Sans } from "next/font/google";

const mont = Public_Sans({
  subsets: ["latin"],
  weight: "900",
  style: "normal",
});
const dm = DM_Sans({ subsets: ["latin"], weight: "400", style: "normal" });
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
      className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start pl-10"
    >
      <div className="  animate-fade-down animate-once flex w-screen h-screen  items-center justify-center  ">
        <motion.div variants={slideInFromLeft(0.5)} className=" mt-16">
          <h1
            className={` text-3xl text-white font-semibold ${mont.className}`}
          >
            Primary Path
          </h1>
          <h1
            className={` animate-fade-down animate-once  text-5xl ${mont.className} font-extrabold text-cyan-600 `}
          >
            Common specializations
          </h1>

          <h1
            className={` w-[600px] ${dm.className} text-justify pt-6 text-gray-400 font-medium text-lg leading-8`}
          >
            Every single participant involved in the program is committed to
            undertaking an intensive educational journey spanning a
            comprehensive duration of three quarters, rigorously delving into
            the designated curriculum
          </h1>
          <button
            className={`${dm.className} mt-8  transition duration-500 ease-in-out bg-blue-900 border-blue-600 text-white  transform hover:-translate-y-1 hover:scale-110 py-3 px-4 rounded-md font-semibold `}
          >
            <Link href={"https://portal.piaic.org/signup"}>Enroll Now</Link>
          </button>
        </motion.div>
        <motion.div variants={slideInFromRight(0.5)}>
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={550}
            width={550}
          />
        </motion.div>
      </div>

      <div className="  text-lg text-justify flex flex-col pt-4 pl-4 pr-28 space-y-4 text-gray-300">
        <h1 className=" text-xl font-bold text-blue-500">
          $-101: Dollar Making Bootcamp - Full-Stack Template and API Product
          Development
        </h1>
        <h1
          className={`${mont.className} " text-5xl font-extrabold text-blue-700"`}
        >
          Course Description:
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          In this course, you will be tasked with building APIs and a template
          to be sold on the Panaverse DAO Marketplace and Theme Forest. The
          Panaverse DAO will receive 25% of the sale for platform management and
          an additional 15% for marketing purposes. 60% of the revenues will be
          distributed to the developer as Panaverse tokens.
        </h1>
        <h1
          className={`${mont.className} " text-5xl font-extrabold text-blue-700"`}
        >
          Earn While You Learn Projects:
        </h1>
        <h1 className=" text-xl font-bold">
          A. Build Full-Stack Next.js 13 Jamstack Templates
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          You will be assigned to build APIs for which you will sell
          subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will
          receive 25% share on the sale of the template which will be used to
          manage the platform. An additional 15% will be spent on marketing the
          template. 60% of the revenues will be distributed to the developer
          through the Panaverse DAO in the form of Panaverse tokens.
        </h1>
        <Link
          href="https://github.com/panaverse/panaverse-template-standard"
          className=" text-red-500 underline"
        >
          https://github.com/panaverse/panaverse-template-standard
        </Link>
        <h1 className=" text-xl font-bold">B. Build QraphQL APIs</h1>
        <h1 className={` font-normal text-md text-justify`}>
          You will be assigned to build APIs for which you will sell
          subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will
          receive 25% share on the sale of the template which will be used to
          manage the platform. An additional 15% will be spent on marketing the
          template. 60% of the revenues will be distributed to the developer
          through the Panaverse DAO in the form of Panaverse tokens.
        </h1>
      </div>
    </motion.div>
  );
};

export default HeroContent;

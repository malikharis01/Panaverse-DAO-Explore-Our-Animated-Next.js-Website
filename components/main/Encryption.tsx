"use client";
// import React from "react";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Diamond } from "lucide-react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

import { Public_Sans } from "next/font/google";
import { DM_Sans } from "next/font/google";

const mont = Public_Sans({
  subsets: ["latin"],
  weight: "900",
  style: "normal",
});
const dm = DM_Sans({ subsets: ["latin"], weight: "400", style: "normal" });

const Encryption = () => {
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
      data-aos="zoom-in-left"
      className="flex flex-row relative items-center justify-center min-h-screen w-full h-full"
    >
      <div className=" pt-24 pr-14">
        {/* <h1 className={` text-3xl text-purple-800 font-semibold ${mont.className} tracking-wider`}>The Outcome for Participants of the Program</h1> */}
        <h1
          className={` animate-fade-down animate-once  text-5xl ${mont.className} font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 `}
        >
          Web 3 And Metaverse
        </h1>

        <h1
          className={` w-[600px] ${dm.className} text-justify pt-6 text-gray-400 font-medium text-lg leading-8`}
        >
          As a graduate of this program, you will own valuable products such as
          Full-Stack App Templates, AR and VR Experiences, and APIs that are
          marketed globally by the Panaverse DAO. You will also have the
          opportunity to offer your services at a rate of $50 per hour,
          providing a path to financial stability while contributing to the
          growth of Pakistans software exports
        </h1>
        {/* <button  className={`${dm.className} mt-8  transition duration-500 ease-in-out bg-blue-900 border-blue-600 text-white  transform hover:-translate-y-1 hover:scale-110 py-3 px-4 rounded-md font-semibold `}>View Courses</button> */}
        <div className=" pt-8 flex flex-row space-x-7">
          <div className=" flex flex-row space-x-2 text-gray-300">
            <h1 className=" text-blue-800">
              <Diamond />
            </h1>
            <h1 className=" font-semibold text-lg">Product Ownership</h1>
          </div>
          <div className=" flex flex-row space-x-2 text-gray-300">
            <h1 className=" text-blue-800">
              <Diamond />
            </h1>
            <h1 className=" font-semibold text-lg">Freelacing</h1>
          </div>
        </div>
        <div className=" pt-8 flex flex-row space-x-7">
          <div className=" flex flex-row space-x-5 text-gray-300">
            <h1 className=" text-blue-800">
              <Diamond />
            </h1>
            <h1 className=" font-semibold text-lg">Global Marketing</h1>
          </div>
          <div className=" flex flex-row space-x-2 text-gray-300">
            <h1 className=" text-blue-800">
              <Diamond />
            </h1>
            <h1 className=" font-semibold text-lg">Boosting Economy</h1>
          </div>
        </div>
      </div>

      <div>
        <Image
          src={"/m.png"}
          alt="logo"
          width={500}
          height={500}
          className={"animate-fade-down animate-once rounded-full p-10  "}
        />
      </div>
    </div>
  );
};

export default Encryption;

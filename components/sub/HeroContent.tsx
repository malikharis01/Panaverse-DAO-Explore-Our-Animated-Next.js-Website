"use client";
import Link from "next/link";

import { motion } from "framer-motion";

import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { buttonVariants } from "../ui/button";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
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
    <motion.div
      data-aos="fade-left"
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-20 w-full z-[20]"
    >
      <div className="h-full pt-5 w-full flex flex-col gap-3 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className=" items-center flex p-2 w-[150px] rounded-3xl border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-gray-200 text-[13px]">
            Panaverse Dao
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="  font-serif tracking-normal flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Launch Your Dev Carrier With
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Web 3 And Metaverse{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Certified Web 3.0 and Metaverse Developer. A One and Quarter Years
          Panaverse DAO Earn as you Learn Program Getting Ready for the Next
          Generation of the Internet.
        </motion.p>
        <motion.button
          variants={slideInFromLeft(1)}
          className=" transition duration-500 ease-in-out   transform hover:-translate-y-1 hover:scale-110 py-2 border bg-primary p-3  text-center text-white cursor-pointer rounded-lg max-w-[150px]"
        >
          <Link href={"https://portal.piaic.org/signup"}>Enroll Now</Link>
        </motion.button>
      </div>
      {/* <buttonVariants/> */}

      <motion.div
        variants={slideInFromRight(0.8)}
        className=" rounded-full  flex justify-center items-center"
      >
        <Image
          src="/l.png"
          alt="work icons"
          height={1300}
          className=" rounded-full"
          width={1300}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

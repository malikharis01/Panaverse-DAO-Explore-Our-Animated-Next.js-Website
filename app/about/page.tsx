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
      className="flex  pt-32 pb-10 flex-col  w-full h-full"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="className=' flex justify-center flex-col items-center space-y-3"
        >
          <Image
            src="/alvi.jpg"
            alt="logo"
            width={100}
            height={100}
            className=" rounded-full"
          />
          <h1 className=" text-xl font-bold text-white">Dr. Arif Alvii</h1>
          <h1 className=" text-white">
            President of the Islamic Republic of Pakistan
          </h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="text-lg text-justify flex flex-col pt-16 pl-32 pr-32 space-y-10 text-gray-400"
      >
        <h1>
          Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic
          of Pakistan on 9th September 2018.
        </h1>
        <h1>
          {" "}
          Dr. Arif Alvi was born in 1949 and completed his early education in
          Karachi. He did his Bachelor of Dental Surgery (BDS) from De’
          Montmorency College of Dentistry, Lahore where he was declared the
          “Best Graduate”. He completed his Masters of Science in the field of
          Prosthodontics from University of Michigan (1975) and in Orthodontics
          from University of Pacific, San Francisco (1982). He was awarded
          fellowship ‘Diplomatic American Board of Orthodontists (1995)’.{" "}
        </h1>
        <h1>
          {" "}
          President Dr. Arif Alvi has been a renowned professional and has held
          many important positions in the field of Dentistry. He remained Dean
          of Orthodontics, College of Physicians and Surgeons of Pakistan,
          President, Pakistan Dental Association (1997-2001), Pakistan
          Association of Orthodontists (2005), Asia Pacific Dental Federation
          (2006-07) and Councilor of the World Dental Federation (2007-2013).
          Through his sheer hard work in the World Dental Federation, he was
          able to get the declaration of 20th March as World Oral Health Day. He
          is also an author of a book, theses, and many articles.{" "}
        </h1>
        <h1>
          Dr. Arif Alvi’s political career commenced with his pro-democracy
          struggle against the dictatorship of General Ayub Khan. He is a
          founding member of Pakistan Tehreek-e-Insaf (PTI) that came into being
          in 1996. He remained a member of the PTI’s Central Executive Committee
          since its inception and has held the offices of PTI President of Sindh
          (1997-2001), Central Vice President (2001-2006) and Secretary General
          (2006-2013). In line with Constitution of Pakistan, he resigned from
          all the positions of PTI before assuming the prestigious office of the
          President.
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

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
            Specialized Track
          </h1>
          <h1
            className={` animate-fade-down animate-once  text-5xl ${mont.className} font-extrabold text-cyan-600 `}
          >
            Metaverse Specialization
          </h1>

          <h1
            className={` w-[600px] ${dm.className} text-justify pt-6 text-gray-400 font-medium text-lg leading-8`}
          >
            This Web 3.0 and Metaverse specialization focuses on developing
            full-stack Web 3.0 and Metaverse experiences for the next generation
            of the internet by specializing in building worlds that merge the
            best of cutting-edge decentralized distributed blockchains with 3D
            metaverse client experiences
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

      <div className="  text-lg text-justify flex flex-col pt-8 pl-4 pr-28 space-y-4 text-gray-300">
        <h1 className=" text-xl font-bold text-blue-500">
          MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse
          Experiences
        </h1>
        <h1
          className={`${mont.className} " text-5xl font-extrabold text-blue-700"`}
        >
          Course Description:
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          The Web is the Metaverse. The metaverse requires an infrastructure
          that connects all of the metaverses so that we can travel between
          them. This is only achievable with open web-based metaverses. The
          internet and its browsers are magical. Federated but linked
          experiences connect pages, people, technology, businesses, standards,
          and nations. Its unlike anything else. The metaverse should replicate
          the best qualities of the web - it should just be the web. We just
          have to extend online responsive design from mobile to desktop to 3D,
          Augmented Reality, and Virtual Reality. This course will teach you how
          to build the Open Social Spatial Web with WebXR and WebGPU
          technologies.{" "}
        </h1>
        <h1
          className={`${mont.className} " text-5xl font-extrabold text-blue-700"`}
        >
          Course Outline
        </h1>
        <h1 className=" text-xl font-bold">Open Metaverse Web Development</h1>
        <Link
          href="https://github.com/panaverse/metaverse-web"
          className=" text-red-500 underline"
        >
          Open MEtaverse Learning Repo
        </Link>
        <h1 className=" text-xl font-bold">
          Blender 3D asset Creation for the Metaverse (Remote Zoom Class)
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          Blender development is being funded by heavyweights in the real-time
          3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS,
          Epic Games, Adobe, Microsoft, and Decentraland. It is expected to
          become the standard asset creation tool for metaverse.{" "}
        </h1>
        <h1 className={` font-normal text-md text-justify`}>Blender 3.3+</h1>
        <Link
          href="https://www.blender.org/download/"
          className=" text-red-500 underline"
        >
          Download
        </Link>
        <Link
          href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD"
          className=" text-red-500 underline"
        >
          Blender 3.0 Beginner Tutorial
        </Link>
        <Link
          href="https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit"
          className=" text-red-500 underline"
        >
          Blender 3.0 Hotkey
        </Link>
        <h1 className={` font-normal text-md text-justify`}>
          Blender Projects Textbook:
        </h1>
        <Link
          href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
          className=" text-red-500 underline"
        >
          Blender by Example 2nd Edition
        </Link>
        <h1 className={` font-normal text-md text-justify`}>
          Blender Textbook: The Complete Guide to Blender Graphics:
        </h1>
        <Link
          href="https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5"
          className=" text-red-500 underline"
        >
          {" "}
          Computer Modeling & Animation 7th Edition by John M. Blain
        </Link>
        <Link
          href="https://www.youtube.com/watch?v=H7T0SzdFHwg"
          className=" text-red-500 underline"
        >
          Best Hardware Performance for Blender Rendering
        </Link>

        <h1 className=" text-xl font-bold">Assignment 1:</h1>
        <h1 className={` font-normal text-md text-justify`}>
          Build a 3D Donut using Blender 3 as shown in these
        </h1>
        <Link
          href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD"
          className=" text-red-500 underline"
        >
          video tutorials
        </Link>

        <h1 className=" text-xl font-bold">Assignment 2:</h1>
        <h1 className={` font-normal text-md text-justify`}>
          Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book
        </h1>
        <Link
          href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
          className=" text-red-500 underline"
        >
          {" "}
          Blender by Example 2nd Edition
        </Link>

        <h1 className=" text-xl font-bold">Assignment 3:</h1>
        <h1 className={` font-normal text-md text-justify`}>
          Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4
          of the Book
        </h1>
        <Link
          href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
          className=" text-red-500 underline"
        >
          {" "}
          Blender by Example 2nd Edition
        </Link>

        <h1 className=" text-xl font-bold">Assignment 4:</h1>
        <h1 className={` font-normal text-md text-justify`}>
          Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6, and
          7 of the Book
        </h1>
        <Link
          href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
          className=" text-red-500 underline"
        >
          {" "}
          Blender by Example 2nd Edition
        </Link>

        <h1 className=" text-xl font-bold">Assignment 5:</h1>
        <h1 className={` font-normal text-md text-justify`}>
          Illustrating an Alien Hero with Grease Pencil as shown in chapter 8 of
          the Book
        </h1>
        <Link
          href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
          className=" text-red-500 underline"
        >
          {" "}
          Blender by Example 2nd Edition
        </Link>

        <h1 className=" text-xl font-bold">Assignment 6:</h1>
        <h1 className={` font-normal text-md text-justify`}>
          Build a 3D Sword in the Stone using Blender 3 as shown in these
        </h1>
        <Link
          href="https://www.youtube.com/watch?v=bpvh-9H8S1g"
          className=" text-red-500 underline"
        >
          {" "}
          video tutorials
        </Link>
      </div>
    </motion.div>
  );
};

export default HeroContent;

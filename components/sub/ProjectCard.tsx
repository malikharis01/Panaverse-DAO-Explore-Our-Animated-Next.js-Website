"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
interface Props {
  src: string;
  title: string;
  description: string;
  lnk: string;
}

const ProjectCard = ({ src, title, description, lnk }: Props) => {
  return (
    <div className="  hover:bg-gray-800 transition duration-500 ease-in-out   transform hover:-translate-y-1 hover:scale-110 relative w-[330px] h-[350px] overflow-hidden rounded-lg shadow-lg border bg-gray-900 border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      <div className=" pl-3 pb-2">
        <button className="  hover:bg-gray-700  py-1 border border-gray-400 bg-primary p-3  text-center text-white cursor-pointer rounded-md max-w-[140px]">
          <Link href={lnk}>View Course</Link>
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default ProjectCard;

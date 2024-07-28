import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { ArrowUpRightSquare } from "lucide-react";
// import { ArrowUpRightSquare } from 'lucide-react';
import Link from "next/link";

import { DropdownMenuCheckboxes } from "@/components/custom/Dropdown";

const dm = DM_Sans({ subsets: ["latin"], weight: "400", style: "normal" });

const mont = Montserrat({
  weight: "900",
  subsets: ["latin"],
  style: "normal",
});
const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="/home" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/pana.webp"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[5px] hidden md:block text-gray-300">
            Panaverse Dao
          </span>
        </Link>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="  flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link
              href="/home"
              className=" transition duration-500 ease-in-out   transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/about"
              className=" transition duration-500 ease-in-out   transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              About
            </Link>
            <Link
              href="#projects"
              className=" transition duration-500 ease-in-out   transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <DropdownMenuCheckboxes />
            </Link>
            <Link
              href="/web3"
              className=" transition duration-500 ease-in-out   transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              Web 3
            </Link>
            <Link
              href="#projects"
              className=" transition duration-500 ease-in-out   transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              More
            </Link>
          </div>
        </div>

        <div className=" flex space-x-4 items-center">
          <button
            className={`${dm.className} text-white   transition duration-500 ease-in-out   transform hover:-translate-y-1 hover:scale-110 py-2 px-3  font-semibold space-x-2 `}
          >
            <Link href={"https://github.com/panaverse"}>
              {" "}
              <h1 className=" flex">
                Github
                <ArrowUpRightSquare />{" "}
              </h1>
            </Link>
          </button>

          <button
            className={`${dm.className}  transition duration-500 ease-in-out bg-blue-900 border-blue-600 text-white  transform hover:-translate-y-1 hover:scale-110 py-2 px-3 rounded-md font-semibold `}
          >
            <Link href={"https://portal.piaic.org/signup"}>Register</Link>
          </button>
          {/* <button  className={`${dm.className} text-white transition duration-500 ease-in-out hover:bg-blue-900 hover:border-blue-600 hover:text-white  transform hover:-translate-y-1 hover:scale-110 py-2 px-3 rounded-md font-semibold `}>Signup</button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

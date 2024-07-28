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
      <div className="  text-lg text-justify flex flex-col pt-8 pl-4 pr-28 space-y-4 text-gray-300">
        <h1 className=" text-xl font-bold text-blue-500">
          W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps
          and APIs using Next.js 13 and Cloud Development Kit (CDK) for
          Terraform
        </h1>
        <h1
          className={`${mont.className} " text-5xl font-extrabold text-blue-700"`}
        >
          Course Description:
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          The objective of this course is to teach participants to develop
          customer-facing planet-scale Websites, Full-Stack Apps and templates,
          Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter,
          the participants will be able to develop and deploy web platforms like
          Facebook, Shopify, etc. The technologies covered in this course will
          include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL,
          Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless
          Technologies, and Cloud Development Kit for Terraform (CDKTF).
        </h1>
        <h1
          className={`${mont.className} " text-5xl font-extrabold text-blue-700"`}
        >
          Course Outline
        </h1>
        <h1 className=" text-xl font-bold">Next.js 13 Web Development</h1>
        <Link
          href="https://beta.nextjs.org/docs"
          className=" text-red-500 underline"
        >
          Next 13 Official Documentation
        </Link>
        <Link
          href="https://beta.reactjs.org/learn"
          className=" text-red-500 underline"
        >
          Latest Learn React Official Website
        </Link>
        <Link
          href="https://github.com/panaverse/learn-nextjs"
          className=" text-red-500 underline"
        >
          Learn Next.js 13 Learning Repo
        </Link>
        <h1 className=" text-xl font-bold">
          Next.js 13 using Chakra UI (Remote Zoom Class)
        </h1>
        <Link
          href="https://www.freecodecamp.org/news/css-flexbox-complete-guide/"
          className=" text-red-500 underline"
        >
          CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex
          ItemsChakra UI Docs
        </Link>
        <h1 className=" text-gray-400 flex flex-row ">
          Designing and Prototyping Interfaces with Figma: Learn essential UX/UI
          design principles by creating interactive prototypes for mobile,
          tablet, and desktop by Fabio Staiano
        </h1>
        <Link
          href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa"
          className=" text-red-500 underline"
        >
          https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-
        </Link>
        <Link
          href="interactive/dp/180056418X/ref=sr_1_1_sspa"
          className=" text-red-500 underline"
        >
          interactive/dp/180056418X/ref=sr_1_1_sspa
        </Link>
        <Link
          href="https://www.figma.com/community/file/768809027799962739"
          className=" text-red-500 underline"
        >
          Figma Design Kit for TailwindCSS
        </Link>
        <Link
          href="https://www.figma.com/community/file/971408767069651759"
          className=" text-red-500 underline"
        >
          Chakra UI Figma Kit
        </Link>
        <h1 className=" text-xl font-bold">
          API Routes with Next.js (Remote Zoom Class)
        </h1>
        <Link
          href="https://nextjs.org/docs/api-routes/introduction"
          className=" text-red-500 underline"
        >
          API Routes
        </Link>
        <h1 className=" text-xl font-bold">
          APIs with Next.js and tRPC (Remote Zoom Class)
        </h1>
        <Link
          href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/"
          className=" text-red-500 underline"
        >
          Build a tRPC CRUD API Example with Next.js
        </Link>
        <Link
          href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/"
          className=" text-red-500 underline"
        >
          Stop building REST APIs for your Next.js apps, use tRPC instead
        </Link>
        <h1 className=" text-xl font-bold">SQL and Prisma</h1>
        <Link
          href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres"
          className=" text-red-500 underline"
        >
          Start from scratch with relational databases
        </Link>
        <Link
          href="https://www.youtube.com/watch?v=5hzZtqCNQKk"
          className=" text-red-500 underline"
        >
          SQL For Beginners Video Tutorial
        </Link>
        <Link
          href="https://www.freecodecamp.org/news/dbms-and-sql-basics/"
          className=" text-red-500 underline"
        >
          Database Management Systems and SQL – Tutorial for Beginners
        </Link>
        <h1 className=" text-xl font-bold">
          Next.js 13 using TailwindCSS (Remote Zoom Class)
        </h1>
        <Link
          href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/"
          className=" text-red-500 underline"
        >
          Modern CSS with Tailwind, Second Edition by Noel Rappin
        </Link>
        <h1 className=" text-xl font-bold">
          AWS Application Composer (Remote Zoom Class)
        </h1>
        <Link
          href="https://www.youtube.com/watch?v=BujE_tik5r8"
          className=" text-red-500 underline"
        >
          What is AWS Application Composer?
        </Link>
        <Link
          href="https://www.youtube.com/watch?v=p411uh363jQ"
          className=" text-red-500 underline"
        >
          Event-driven apps with AWS Application Composer
        </Link>
        <Link
          href="https://aws.amazon.com/application-composer/"
          className=" text-red-500 underline"
        >
          Visually design and build serverless applications quickly
        </Link>
        <h1 className=" text-md font-bold underline">
          Must Have: Create Free AWS Account
        </h1>
        <Link
          href="https://aws.amazon.com/free/"
          className=" text-red-500 underline"
        >
          AWS Free Tier
        </Link>
        <h1 className=" text-md font-semibold ">
          Note: For AWS Free Tier you will need a credit or debit card. The
          easiest way for Pakistani students is to open a bank account with
          Meezan Bank. Open a Meezan Aasan Account if you have no earning proof.
          Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a
          requirement of Rs. 100 minimum deposit. The card will be delivered in
          a few weeks. Our students have reported that this Debit card works
          with AWS.
        </h1>
        <h1 className=" text-lg  font-normal ">
          Now you can create a virtual VISA Debit card through the NayaPay app
          which can be used to create AWS/GCP/Azure accounts. This is good news
          for those students who find it difficult to create physical debit and
          credit cards from banks.
        </h1>
        <h1 className=" text-md font-bold">You can also get a $300 credit</h1>
        <Link
          href="https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html"
          className=" text-red-500 underline"
        >
          https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html
        </Link>
        <h1 className=" text-xl font-bold">
          Multi-Cloud GraphQL Serverless API Development with Cloud Development
          Kit for Terraform (CDKTF) (Remote Zoom Class)
        </h1>
        <Link
          href="https://github.com/panaverse/learn-multicloud-api-development"
          className=" text-red-500 underline"
        >
          Learn Multicloud Serverless API Development using CDK Terraform in
          Baby Steps
        </Link>
        <h1 className=" text-xl font-bold">Web 2.0 Projects</h1>
        <div className="  text-md text-justify flex flex-col  pl-8 pr-28 space-y-4 text-gray-400">
          <Link
            href="https://github.com/panaverse/nextjs-projects"
            className=" text-red-500 underline"
          >
            Next.js Projects
          </Link>
          <Link
            href="https://github.com/panaverse/styling-nextjs-projects"
            className=" text-red-500 underline"
          >
            Styling Next.js Projects using TailwindCSS and Chakra UI
          </Link>
          <Link
            href="https://github.com/ogzhanolguncu/min-todo"
            className=" text-red-500 underline"
          >
            Todo Full-Stack App
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=nzJsYJPCc80"
            className=" text-red-500 underline"
          >
            Build a Twitter Clone
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroContent;

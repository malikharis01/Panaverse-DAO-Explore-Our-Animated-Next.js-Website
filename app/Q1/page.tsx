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
            <a href=" /" className=" cursor-pointer">
              <Link href={"https://portal.piaic.org/signup"}>Enroll Now</Link>
            </a>
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
      <div className="  text-lg text-justify flex flex-col pt-8 pl-4 pr-28 space-y-4 text-gray-400">
        <h1 className=" text-xl font-bold text-blue-500">
          CS-101: Object-Oriented Programming using TypeScript
        </h1>
        <h1
          className={`${mont.className} " text-5xl font-extrabold text-blue-700"`}
        >
          Course Description:
        </h1>
        <h1 className={` font-medium text-md text-justify`}>
          We will start the program by learning the fundamentals of
          Object-Oriented programming using JavaScript and TypeScript. We will
          also understand the latest Web trends i.e. Web 3.0 and Metaverse
          concepts and try to understand their working from the perspective of
          the users.
        </h1>
        <h1
          className={`${mont.className} " text-5xl font-extrabold text-blue-700"`}
        >
          Course Outline
        </h1>
        <h1 className=" text-xl font-bold">HTML & CSS (Homework)</h1>
        <Link
          href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
          className=" text-red-500 underline"
        >
          Learn CSS Intro by Hira Khan (Watch Recorded Videos)
        </Link>
        <Link
          href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
          className=" text-red-500 underline"
        >
          Learn HTML by Hira Khan (Watch Recorded Videos)
        </Link>
        <h1 className=" text-xl font-bold">Web 3.0 and Metaverse Theory</h1>
        <Link
          href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit#slide=id.p"
          className=" text-red-500 underline"
        >
          Introduction to Panaverse DAO
        </Link>
        <Link
          href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit#slide=id.p"
          className=" text-red-500 underline"
        >
          Web 3.0 User Guide
        </Link>
        <h1 className=" text-gray-400 text-md">
          Complete Web 3 Assignments included in the Web 3 User Guide
        </h1>
        <Link
          href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit#slide=id.p"
          className=" text-red-500 underline"
        >
          Virtual and Augmented Metaverse User Guide
        </Link>
        <h1 className=" text-xl font-bold">
          Fundamentals of JavaScript (ECMAScript 2022 Language Specification)
        </h1>
        <Link
          href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo"
          className=" text-red-500 underline"
        >
          Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)
        </Link>
        <Link
          href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4"
          className=" text-red-500 underline"
        >
          Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn
          JavaScript quickly by building fun,
        </Link>
        <Link
          href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4"
          className=" text-red-500 underline"
        >
          interactive, and dynamic web apps, games, and pages
        </Link>
        <Link
          href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional"
          className=" text-red-500 underline"
        >
          JavaScript Book Code
        </Link>
        <Link
          href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"
          className=" text-red-500 underline"
        >
          Getting Started Exercises with JavaScript and Node.js
        </Link>
        <h1 className=" text-xl font-bold">
          Fundamentals of JavaScript and Node.js Quiz
        </h1>
        <h1 className=" text-lg font-semibold">Topics Covered in the Quiz:</h1>
        <div className="  text-md text-justify flex flex-col  pl-8 pr-28 space-y-4 text-gray-400">
          <h1 className=" text-gray-400 flex flex-row ">
            <h1 className=" text-lg font-bold">1.</h1>Background of JavaScript
            and How to use JavaScript in Browser
          </h1>
          <h1 className=" text-gray-400 flex flex-row ">
            <h1 className=" text-lg font-bold">2.</h1>Variables, Primitive data
            types Analyzing and modifying data types, and Operators (Chapter 2
            of JavaScript from Beginner to Professional)
          </h1>
          <h1 className=" text-gray-400 flex flex-row ">
            <h1 className=" text-lg font-bold">3.</h1>
            <Link
              href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"
              className=" text-red-500 underline"
            >
              Intro to Node.js, .mjs files, Modules, NPM, import, export, and
              using external modules with npm
            </Link>
            .
          </h1>
          <h1 className=" text-gray-400 flex flex-row ">
            How to accept user input in your Node.js JavaScript programs, this
            will allow us to create interactive Node.js console programs using
            prompt-sync library
          </h1>
          <h1 className=" text-gray-400 flex flex-row ">
            <h1 className=" text-lg font-bold"></h1>
            <Link
              href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing"
              className=" text-red-500 underline"
            >
              The last example in this presentation shows you how to use
              prompt-sync library in your Node.js programs.
            </Link>
            .
          </h1>
          <h1 className=" text-gray-400 flex flex-row ">
            Note: After this point, we will do all our class work and exercises
            using Node.js in .mjs files. We will also be able to develop
            interactive Node.js console programs which will greatly help the
            students to learn. Using Arrays and Objects in Node.js Programs
            (chapter 3 of JavaScript from Beginner to
          </h1>
          <h1 className=" text-gray-400 flex flex-row ">
            <h1 className=" text-lg font-bold">4.</h1>Using Arrays and Objects
            in Node.js Programs (chapter 3 of JavaScript from Beginner to
            Professional)
          </h1>
          <h1 className=" text-gray-400 flex flex-row ">
            <h1 className=" text-lg font-bold">5.</h1>Using if and if else
            statements, else if statements, Conditional ternary operators, and
            switch statements in Node.js programs (chapter 4 of JavaScript from
            Beginner to Professional)
          </h1>
          <h1 className=" text-gray-400 flex flex-row ">
            <h1 className=" text-lg font-bold">6.</h1>Using while loop, do while
            loop, for loop, for in, and for of loop in Node.js (chapter 5 of
            JavaScript from Beginner to Professional)
          </h1>
          <h1 className=" text-gray-400 flex flex-row ">
            <h1 className=" text-lg font-bold">7.</h1>Using Basic functions,
            Function arguments, Return, Variable scope in functions, Recursive
            functions, Nested functions, Anonymous functions, and Function
            callbacks in Node.js (chapter 6 of JavaScript from Beginner to
            Professional)
          </h1>
          <h1 className=" text-gray-400 flex flex-row ">
            <h1 className=" text-lg font-bold">8.</h1>Using Concurrency,
            Callbacks, Promises, async / await, and Event loop (chapter 13 of
            JavaScript from Beginner to Professional)
          </h1>
          <h1 className=" text-gray-400 flex flex-row ">
            <h1 className=" text-lg font-bold">9.</h1>JavaScript promises,
            mastering the asynchronous
          </h1>
        </div>
        <Link
          href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript"
          className=" text-red-500 underline"
        >
          Javascript Promises by Codingame.
        </Link>
        <Link
          href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg"
          className=" text-red-500 underline"
        >
          New JavaScript Features in ECMAScript 2022 and 2021.
        </Link>
        <h1 className=" text-xl font-bold">
          Object-Oriented Programming with TypeScript
        </h1>
        <Link
          href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1"
          className=" text-red-500 underline"
        >
          Chapters 1-11 of Learning TypeScript: Enhance Your Web Development
          Skills Using Type-Safe JavaScript
        </Link>
        <Link
          href="https://github.com/panaverse/learn-typescript"
          className=" text-red-500 underline"
        >
          Learning Repository
        </Link>
        <Link
          href="https://www.learningtypescript.com/"
          className=" text-red-500 underline"
        >
          In Class Companion projects and articles for Learning TypeScript
        </Link>
        <h1 className=" text-lg font-semibold">Homework Project</h1>
        <Link
          href="https://github.com/panaverse/typescript-node-projects"
          className=" text-red-500 underline"
        >
          typescript-node-projects.
        </Link>
        <h1 className=" text-xl font-bold">TypeScript Quizzes</h1>
        <h1 className=" text-xg font-normal ">
          Fundamentals of TypeScript Quiz
        </h1>
        <h1 className=" text-xg font-normal ">
          TypeScript Professional Proficiency Quiz
        </h1>
        <h1 className=" text-xl font-bold">TypeScript for React</h1>
        <Link
          href="https://profy.dev/article/react-typescript"
          className=" text-red-500 underline"
        >
          Minimal TypeScript Crash Course For React
        </Link>
        <Link
          href="https://profy.dev/article/react-typescript"
          className=" text-red-500 underline"
        >
          With Interactive Code Exercises
        </Link>
        <h1 className=" text-lg font-semibold">
          Quarter Break Assignments and Quizzes
        </h1>
        <h1 className=" text-xg font-normal ">
          During the Quarter Break, we do the following Assignments:
        </h1>
        <div className="  text-md text-justify flex flex-col  pl-8 pr-28 space-y-4 text-gray-400">
          <h1 className=" text-gray-400 flex flex-row ">
            <h1 className=" text-lg font-bold">1.</h1>
            https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge
          </h1>
          <h1 className=" text-gray-400 flex flex-row ">
            <h1 className=" text-lg font-bold">2.</h1>
            https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app
          </h1>
          <h1 className=" text-gray-400 flex flex-row ">
            <h1 className=" text-lg font-bold">3.</h1>
            https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui
          </h1>
          <h1 className=" text-gray-400 flex flex-row ">
            <h1 className=" text-lg font-bold">4.</h1>
            https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui
          </h1>
          <Link
            href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing"
            className=" text-red-500 underline"
          >
            https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing
          </Link>
          <h1 className=" text-xg font-normal ">
            The best-developed Website will be hosted on www.panaverse.co
            domain.
          </h1>
          <h1 className=" text-gray-400 flex flex-row ">
            <h1 className=" text-lg font-bold">5.</h1>Build a new PIAIC Website
            using Next.js 13 given the content from the current PIAIC Website
            and from the following document:
          </h1>
          <Link
            href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing"
            className=" text-red-500 underline"
          >
            https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing
          </Link>
          <h1 className=" text-xg font-normal ">
            The best-developed Website will be hosted on www.piaic.org domain.
          </h1>
          <h1 className=" text-xg font-normal ">
            After completing the above Five Assignments everyone will appear in
            the following two Quizzes covering Github and TypeScript:
          </h1>
        </div>
        <h1 className=" text-xl font-bold">
          Fundamentals of Version Control with Git (Recorded Videos)
        </h1>
        <Link
          href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF"
          className=" text-red-500 underline"
        >
          Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch
          Recorded Videos)
        </Link>
        <h1 className=" text-xg font-normal ">
          Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step
          course for the complete beginner by Tobias Günther
        </h1>
        <h1 className=" text-lg font-semibold">
          We will also cover these readings:
        </h1>
        <Link
          href="https://help.github.com/articles/markdown-basics/"
          className=" text-red-500 underline"
        >
          Markdown Basics
        </Link>
        <Link
          href="http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github"
          className=" text-red-500 underline"
        >
          Difference between fork and branch on github
        </Link>
        <Link
          href="http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences"
          className=" text-red-500 underline"
        >
          Git branch, fork, fetch, merge, rebase and clone what are the
          differences
        </Link>
        <Link
          href="https://git-scm.com/book/en/v2/Git-Branching-Rebasing"
          className=" text-red-500 underline"
        >
          Git Branching Rebasing
        </Link>
        <Link
          href="http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches"
          className=" text-red-500 underline"
        >
          Git Branching Remote Branches
        </Link>
        <Link
          href="https://try.github.io/levels/1/challenges/1"
          className=" text-red-500 underline"
        >
          For practice.
        </Link>
        <h1 className=" text-lg font-semibold">Homework:</h1>
        <Link
          href="https://www.datacamp.com/courses/introduction-to-git-for-data-science"
          className=" text-red-500 underline"
        >
          introduction to git for data science
        </Link>
        <h1 className=" text-lg font-semibold">Git Cheatsheet</h1>
        <Link
          href="https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html"
          className=" text-red-500 underline"
        >
          Git data science cheatsheet.html
        </Link>
        <h1 className=" text-lg font-semibold">TypeScript Proficiency Quiz</h1>
        <h1 className=" text-xg font-normal ">Total Questions: 63</h1>
        <h1 className=" text-xg font-normal ">Duration: 120 minutes</h1>
        <h1 className=" text-lg font-semibold">Study Material:</h1>
        <Link
          href="https://github.com/panaverse/learn-typescript"
          className=" text-red-500 underline"
        >
          learn-typescript
        </Link>
      </div>
    </motion.div>
  );
};

export default HeroContent;

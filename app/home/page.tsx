import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Online from "@/components/main/Online";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Special from "@/components/main/Specialized";
import Image from "next/image";
import AI from "../AI/page";
import Cloud from "../cloud/page";
import IOT from "../IOT/page";
export default function Home() {
  return (
    <main className=" gap-10">
      <div className="flex flex-col">
        <Hero />
        <Skills />
        <Projects />
        <Special />
        <AI />
        <Cloud />
        <IOT />
        <Encryption />
        <Online />
      </div>
    </main>
  );
}

"use client";

import { Boxes } from "@/components/ui/background-boxes";
import HeroGlassPanel from "./components/ui/hero-glasspanel";
import { Navbar } from "./components/ui/navbar";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import SkillsMarquee from "./components/ui/skills-marquee";
import { NoiseBackground } from "@/components/ui/noise-background";

export default function Home() {
  return (
    <div className="relative w-screen min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-sky-100 via-white to-indigo-100 font-sans">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Boxes />
      </div>

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/3 left-1/4 w-[50vw] h-[50vw] bg-sky-300/40 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[40vw] h-[40vw] bg-indigo-300/30 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      {/* Navbar */}
      <div
        className="
          fixed top-8 left-1/2 -translate-x-1/2
          z-50
          rounded-full
          bg-white/60 backdrop-blur-2xl
          border border-white/50
          shadow-[0_25px_60px_rgba(0,0,0,0.08)]
        "
      >
        <Navbar />
      </div>

      {/* HERO SECTION */}
      <div className="relative z-40 mt-40 w-full flex items-center justify-center overflow-visible">

        {/* LEFT FLOATING IMAGE */}
        <Image
          src="/background/aish-painting-canvas.png"
          alt="A painting of Aishwarya"
          width={300}
          height={300}
          className="
            absolute
            left-[2rem]                 /* closer to panel */
            top-1/2 -translate-y-1/2
            w-[300px]                   /* BIGGER */
            opacity-100
            hidden xl:block
            pointer-events-none
            z-50                        /* ABOVE hero panel */
            drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]
          "
        />

        {/* HERO GLASS PANEL */}
        <div className="relative z-20">
          <HeroGlassPanel />
        </div>

        {/* RIGHT FLOATING IMAGE */}
        <Image
          src="/background/aish-holograms.png"
          alt="Holograms of Aishwarya"
          width={300}
          height={300}
          className="
            absolute
            right-[1rem]                /* closer to panel */
            top-1/2 -translate-y-1/2
            w-[300px]                   /* BIGGER */
            opacity-100
            hidden xl:block
            pointer-events-none
            z-50                        /* ABOVE hero panel */
            drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]
          "
        />
      </div>


      {/* Interactions */}
      <div className="relative z-40 mt-16 flex gap-6 items-center justify-center">

        {/* LinkedIn */}
        <NoiseBackground
          containerClassName="w-fit p-2 rounded-full"
          gradientColors={[
            "rgb(255, 100, 150)",
            "rgb(100, 150, 255)",
            "rgb(255, 200, 100)",
          ]}
        >
          <a
            href="https://www.linkedin.com/in/aishwarya-h-iyer/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-700 hover:text-white-500"
            aria-label="LinkedIn"
          >
        <FaLinkedin size={40} />
          </a>
        </NoiseBackground>

        {/* Resume */}
        <NoiseBackground
          containerClassName="w-fit p-2 rounded-full"
          gradientColors={[
            "rgb(255, 100, 150)",
            "rgb(100, 150, 255)",
            "rgb(255, 200, 100)",
          ]}
        >
          <a
            href="https://drive.google.com/file/d/1r2z7rPxBgsbH5dezewxF3_Lv6EKSIi8j/view?usp=sharing"
            target="_blank"
            className="flex items-center gap-2 h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-5 py-2 text-black font-medium shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 hover:scale-105 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white"
          >
            Resume
          </a>
        </NoiseBackground>

        {/* GitHub */}
        <NoiseBackground
          containerClassName="w-fit p-2 rounded-full"
          gradientColors={[
            "rgb(255, 100, 150)",
            "rgb(100, 150, 255)",
            "rgb(255, 200, 100)",
          ]}
        >
        <a
          href="https://github.com/Aishwarya-Hariharan-Iyer" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white-800 hover:text-white-500 font-3xl"
          aria-label="GitHub"
        >
        <FaGithub size={40} />
        </a>
        </NoiseBackground>

      </div>


      {/* Skills */}
      <div className="relative z-40 w-full mt-10">
        <SkillsMarquee />
      </div>

    </div>
  );
}

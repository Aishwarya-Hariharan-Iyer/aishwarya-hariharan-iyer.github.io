"use client";

import { useState } from "react";
import { Boxes } from "@/components/ui/background-boxes";
import HeroGlassPanel from "./components/ui/hero-glasspanel";
import { Navbar } from "./components/ui/navbar";
import JigsawMe from "./components/games/jigsawme";
import { GlassModal } from "./components/ui/glassmodal";
import TarotSpread from "./components/games/tarotdraw";
import { About } from "./components/ui/about-me";
import SkillsMarquee from "./components/ui/skills-marquee";

export default function Home() {
  const [jigsawOpen, setJigsawOpen] = useState(false);
  const [tarotOpen, setTarotOpen] = useState(false);
  const [aboutMeOpen, setAboutMeOpen] = useState(false);

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
        <img
          src="/aish-painting.png"
          aria-hidden
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
        <img
          src="/aish-holograms.png"
          aria-hidden
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
      <div className="relative z-40 mt-16 flex gap-6">
        <GlassModal
          title="About Me"
          open={aboutMeOpen}
          onOpenChange={setAboutMeOpen}
          trigger={
            <button className="px-6 py-3 rounded-full bg-white/60 backdrop-blur-md border border-white/50 shadow-md hover:scale-105 transition">
              👋 About Me
            </button>
          }
        >
          <About />
        </GlassModal>

        <GlassModal
          title="Reconstruct Me Puzzle"
          open={jigsawOpen}
          onOpenChange={setJigsawOpen}
          trigger={
            <button className="px-6 py-3 rounded-full bg-white/60 backdrop-blur-md border border-white/50 shadow-md hover:scale-105 transition">
              🧩 Reconstruct Me
            </button>
          }
        >
          <JigsawMe onDone={() => setJigsawOpen(false)} />
        </GlassModal>

        <GlassModal
          title="Tarot Spread"
          open={tarotOpen}
          onOpenChange={setTarotOpen}
          trigger={
            <button className="px-6 py-3 rounded-full bg-white/60 backdrop-blur-md border border-white/50 shadow-md hover:scale-105 transition">
              🔮 Draw the Cards
            </button>
          }
        >
          <TarotSpread onDone={() => setTarotOpen(false)} />
        </GlassModal>
      </div>

      {/* Skills */}
      <div className="relative z-40 w-full mt-10">
        <SkillsMarquee />
      </div>

    </div>
  );
}

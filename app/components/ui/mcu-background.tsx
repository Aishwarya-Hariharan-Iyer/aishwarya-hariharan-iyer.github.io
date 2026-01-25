"use client";

import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export function MCUBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden
      bg-gradient-to-b from-[#fdfefe] via-[#f7fbff] to-[#eef4ff]"
    >
      {/* === ARC REACTOR CORE (CENTER PULSE) === */}
      <div className="pointer-events-none absolute left-1/2 top-[-20%]
        h-[900px] w-[900px] -translate-x-1/2 rounded-full
        bg-cyan-400/20 blur-[180px] animate-reactor-pulse" />

      {/* Inner reactor ring */}
      <div className="pointer-events-none absolute left-1/2 top-[-18%]
        h-[520px] w-[520px] -translate-x-1/2 rounded-full
        border border-cyan-300/30 blur-[2px] animate-reactor-ring" />

      {/* === GLASSY LIGHT REFRACTION === */}
      <div className="pointer-events-none absolute inset-0
        bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.55),transparent_60%)]" />

      <div className="pointer-events-none absolute inset-0
        bg-[linear-gradient(180deg,rgba(255,255,255,0.35),transparent_40%)]" />

      {/* === METEORS (SUBTLE, BACKGROUND FUN) === */}
      <div
        className="pointer-events-none absolute inset-0 z-[3]"
        style={{
          WebkitMaskImage:
            "radial-gradient(circle at center, black 50%, transparent 80%)",
          maskImage:
            "radial-gradient(circle at center, black 50%, transparent 80%)",
        }}
      >
        <Meteors number={18} />
      </div>

      {/* === ENERGY VEIL === */}
      <div className="pointer-events-none absolute inset-0
        bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.18),transparent_65%)]" />

      {/* === FILM GRAIN (VERY LIGHT) === */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.7\" numOctaves=\"4\"/></filter><rect width=\"200\" height=\"200\" filter=\"url(%23n)\"/></svg>')",
        }}
      />

      {/* === CONTENT === */}
      <div className="relative z-10 w-full">
          {children}
      </div>
    </div>
  );
}

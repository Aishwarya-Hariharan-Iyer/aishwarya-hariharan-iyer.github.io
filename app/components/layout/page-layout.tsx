"use client";

import { ReactNode } from "react";
import { MCUBackground } from "../ui/mcu-background";
import { Navbar } from "../ui/navbar";
interface PageLayoutProps {
  children: ReactNode;
  padded?: boolean;
}

export function PageLayout({ children, padded = true }: PageLayoutProps) {
  return (
    <MCUBackground>
      {/* FIXED, TRUE CENTER */}
      <div className="fixed top-8 inset-x-0 z-50 flex justify-center">
        <div className="rounded-full bg-white/60 backdrop-blur-2xl border border-white/50 shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
          <Navbar />
        </div>
      </div>

      {/* PAGE CONTENT */}
      <main
        className={[
          "relative z-10 min-h-screen",
          padded ? "pt-40 pb-24 px-6" : "pt-40",
        ].join(" ")}
      >
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
    </MCUBackground>
  );
}

"use client";

import { ReactNode } from "react";
import { MCUBackground } from "../ui/mcu-background";
import { Navbar } from "../ui/navbar";
import Image from "next/image";

interface PageLayoutProps {
  children: ReactNode;
  padded?: boolean;
  imageLeft?: string;
  imageRight?: string;
}

export function PageLayout({ children, padded = true, imageLeft, imageRight }: PageLayoutProps) {
  return (
    <MCUBackground>
      {/* NAVBAR */}
      <div className="fixed top-8 inset-x-0 z-50 flex justify-center">
        <div className="rounded-full bg-white/60 backdrop-blur-2xl border border-white/50 shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
          <Navbar />
        </div>
      </div>

    {/* LEFT IMAGE */}
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[5] pointer-events-none">
      <Image
        src={imageLeft || "/img1.png"}
        alt=""
        width={450}
        height={450}
        className="opacity-100"
        priority
      />
    </div>

    {/* RIGHT IMAGE */}
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[5] pointer-events-none">
      <Image
        src={imageRight || "/img2.png"}
        alt=""
        width={450}
        height={450}
        className="opacity-100"
        priority
      />
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

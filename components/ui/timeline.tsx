"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TimelineItem } from "./timeline-item";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  skills?: string[];
  category?: string;
}

export function Timeline({ data }: { data: TimelineEntry[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null); // ✅ NEW
  const [railHeight, setRailHeight] = useState(0);

  useEffect(() => {
    if (!itemsRef.current) return;

    const resize = () => {
      setRailHeight(itemsRef.current!.offsetHeight);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 70%"], // slightly tighter = smoother
  });

  const energyHeight = useTransform(
    scrollYProgress,
    [0, 1],
    [0, railHeight]
  );

  return (
    <section ref={containerRef} className="relative w-full overflow-visible">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="relative">
          {/* Vertical Rail */}
          <div className="absolute left-[52px] top-0 h-full w-[2px] bg-neutral-200">
            <motion.div
              style={{ height: energyHeight }}
              className="
                absolute top-0 w-full
                bg-gradient-to-b from-cyan-400 via-violet-500 to-indigo-400
                shadow-[0_0_28px_rgba(56,189,248,0.6)]
              "
            />
          </div>

          {/* Items */}
          <div
            ref={itemsRef} // ✅ THIS is what we measure
            className="flex flex-col gap-32"
          >
            {data.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

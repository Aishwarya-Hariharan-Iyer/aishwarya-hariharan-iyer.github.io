"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { EducationTimelineItem } from "./education-timeline-item";

/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */

export interface EducationTimelineEntry {
  title: string;
  period: string;
  location: string;
  academics: React.ReactNode;
  extracurriculars: React.ReactNode;
}

/* ------------------------------------------------------------------ */
/* Timeline (content-only component)                                  */
/* ------------------------------------------------------------------ */

export function Timeline({
  data,
}: {
  data: EducationTimelineEntry[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [railHeight, setRailHeight] = useState(0);

  useEffect(() => {
    if (!railRef.current) return;

    const resize = () => {
      setRailHeight(railRef.current!.getBoundingClientRect().height);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 25%", "end 75%"],
  });

  const energyHeight = useTransform(scrollYProgress, [0, 1], [0, railHeight]);

  return (
    <section ref={containerRef} className="relative w-full">
      <div className="relative mx-auto max-w-6xl px-6">
        <div ref={railRef} className="relative">
          {/* Center Aura */}
          <div
            className="
              pointer-events-none absolute left-1/2 top-0 h-full w-[260px]
              -translate-x-1/2
              bg-gradient-to-b from-cyan-400/5 via-transparent to-violet-400/5
              blur-2xl
            "
          />

          {/* Vertical Rail */}
          <div
            className="
              absolute left-1/2 top-0 h-full w-[3px]
              -translate-x-1/2
              bg-neutral-300/60 rounded-full
            "
          >
            <motion.div
              style={{ height: energyHeight }}
              className="
                absolute top-0 w-full rounded-full
                bg-gradient-to-b from-cyan-400 via-violet-500 to-indigo-400
                shadow-[0_0_32px_rgba(56,189,248,0.6)]
              "
            />
          </div>

          {/* Items */}
          <div className="flex flex-col gap-32">
            {data.map((item, index) => (
              <EducationTimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

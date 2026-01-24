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
/* Timeline                                                           */
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
    if (railRef.current) {
      setRailHeight(railRef.current.getBoundingClientRect().height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const energyHeight = useTransform(scrollYProgress, [0, 1], [0, railHeight]);

  return (
    <section
      ref={containerRef}
      className="
        relative w-full py-32 overflow-hidden
        bg-gradient-to-b from-[#f7f8fc] via-[#f4f6fb] to-[#eef1f8]
      "
    >
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <header className="mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-neutral-900">
            Education
          </h2>
          <p className="mt-4 max-w-md text-neutral-600">
            A timeline of academic achievements and extracurricular involvement.
          </p>
        </header>

        {/* Timeline */}
        <div ref={railRef} className="relative">
          {/* Center Aura (grounding) */}
          <div
            className="
              pointer-events-none absolute left-1/2 top-0 h-full w-[280px]
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
              bg-neutral-300/70 rounded-full
            "
          >
            <motion.div
              style={{ height: energyHeight }}
              className="
                absolute top-0 w-full rounded-full
                bg-gradient-to-b from-cyan-400 via-violet-500 to-indigo-400
                shadow-[0_0_35px_rgba(56,189,248,0.8)]
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

"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

/* ------------------------------------------------------------------ */
/* Timeline (content-only)                                             */
/* ------------------------------------------------------------------ */

export function Timeline({ data }: { data: TimelineEntry[] }) {
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
          {/* Vertical Rail */}
          <div className="absolute left-[52px] top-0 h-full w-[2px] bg-neutral-200">
            <motion.div
              style={{ height: energyHeight }}
              className="
                absolute top-0 w-full
                bg-gradient-to-b from-cyan-400 via-violet-500 to-indigo-400
                shadow-[0_0_28px_rgba(56,189,248,0.7)]
              "
            />
          </div>

          {/* Items */}
          <div className="flex flex-col gap-32">
            {data.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Timeline Item                                                       */
/* ------------------------------------------------------------------ */

function TimelineItem({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-x-14 items-start">
      {/* Node + Title */}
      <div className="relative flex flex-col items-center">
        <div
          className="
            relative h-11 w-11 rounded-full
            bg-white border border-cyan-300
            flex items-center justify-center
            shadow-[0_0_32px_rgba(56,189,248,0.6)]
          "
        >
          <motion.div
            className="h-3 w-3 rounded-full bg-cyan-400"
            animate={{ scale: [1, 1.7, 1] }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <h3 className="mt-6 text-center text-lg font-semibold text-neutral-700">
          {title}
        </h3>
      </div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{
          y: -6,
          boxShadow: "0 35px 90px rgba(56,189,248,0.25)",
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          relative rounded-2xl
          bg-white/70 backdrop-blur-xl
          border border-white/60
          p-8
          text-neutral-800
          shadow-[0_25px_50px_rgba(0,0,0,0.08)]
        "
      >
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-cyan-300/20" />
        {content}
      </motion.div>
    </div>
  );
}

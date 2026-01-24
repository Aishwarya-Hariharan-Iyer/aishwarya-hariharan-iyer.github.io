import { motion } from "framer-motion";
import { EducationTimelineEntry } from "./education-timeline";
import { GlassCard } from "./glass-card";

export function EducationTimelineItem({
  title,
  period,
  location,
  academics,
  extracurriculars,
}: EducationTimelineEntry) {
  return (
    <div className="grid grid-cols-[1fr_140px_1fr] gap-x-8 items-start">
      {/* Academics (LEFT) */}
      <GlassCard align="right" accent="cyan" label="Academics">
        {academics}
      </GlassCard>

      {/* Center Spine */}
      <div className="relative flex flex-col items-center text-center">
        {/* Node */}
        <div
          className="
            relative z-10 h-12 w-12 rounded-full
            bg-white border-2 border-cyan-400
            flex items-center justify-center
            shadow-[0_0_40px_rgba(56,189,248,0.9)]
          "
        >
          <motion.div
            className="h-3.5 w-3.5 rounded-full bg-cyan-400"
            animate={{ scale: [1, 1.6, 1] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          />
        </div>

        {/* Institution */}
        <h3 className="mt-6 text-base font-semibold text-neutral-800 leading-snug">
          {title}
        </h3>

        {/* Meta (Period + Location) */}
        <div className="mt-2 text-xs text-neutral-500 tracking-wide space-y-0.5">
          <div>{period}</div>
          <div>{location}</div>
        </div>
      </div>

      {/* Extracurriculars (RIGHT) */}
      <GlassCard align="left" accent="violet" label="Extracurriculars">
        {extracurriculars}
      </GlassCard>
    </div>
  );
}

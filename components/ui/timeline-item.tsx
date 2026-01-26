import { motion } from "framer-motion";
import { Highlight } from "../ui/hero-highlight";
import React, { useRef } from "react";

interface TimelineItemProps {
  title: string;
  content: React.ReactNode;
  skills?: string[];
  category?: string;
}

export function TimelineItem({
  title,
  content,
  skills = [],
  category = "General",
}: TimelineItemProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <div className="grid grid-cols-[120px_1fr] gap-x-12 items-start">
      {/* Node + Title */}
      <div className="relative flex flex-col items-center">
        {/* Node */}
        <div className="relative h-10 w-10 rounded-full bg-white border border-cyan-400 flex items-center justify-center">
          <motion.div
            className="h-3 w-3 rounded-full bg-cyan-400"
            animate={{ scale: [1, 1.6, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Node halo */}
          <div className="pointer-events-none absolute inset-[-14px] rounded-full bg-cyan-400/20 blur-xl opacity-60" />
        </div>

        {/* Title */}
        <Highlight
          className="
            mt-6
            inline-block
            rounded-md
            bg-cyan-100/80 dark:bg-cyan-800/60
            px-3 py-1
            text-sm font-semibold
            text-neutral-900 dark:text-white
            ring-1 ring-cyan-300/40
            backdrop-blur
          "
        >
          {title}
        </Highlight>

        <span
        className={[
          "mt-2 inline-block rounded-full px-3 py-0.5 text-[11px] font-semibold tracking-wide",
        category === "Professional"
          ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white"
          : "bg-gradient-to-r from-emerald-500 to-teal-600 text-white"
        ].join(" ")}
      >
        {category.toUpperCase()}
      </span>


      </div>

      {/* Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{
          y: -10,
          boxShadow: "0 40px 90px rgba(56,189,248,0.35)",
        }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="
          relative
          overflow-hidden
          rounded-2xl
          border border-white/60
          bg-white/80
          p-8
          text-neutral-800
          backdrop-blur-xl
          shadow-[0_30px_80px_rgba(0,0,0,0.12)]
        "
      >
        {/* Directional glow (node → card) */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            opacity-0
            transition-opacity duration-300
            group-hover:opacity-100
          "
          style={{
            background:
              "radial-gradient(260px circle at var(--x) var(--y), rgba(56,189,248,0.35), transparent 60%)",
          }}
        />

        {/* Glass edge */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-cyan-300/20" />

        {/* Content */}
        <div className="relative z-10 prose prose-neutral max-w-none">
          {content}
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="relative z-10 mt-8 pt-5 border-t border-neutral-200">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan-600">
              <span className="h-px w-6 bg-cyan-400/60" />
              SKILLS
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    bg-cyan-50
                    px-4 py-1.5
                    text-xs font-semibold
                    text-cyan-800
                    ring-1 ring-cyan-300/60
                    shadow-[0_4px_12px_rgba(56,189,248,0.25)]
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

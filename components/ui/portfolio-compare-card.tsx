"use client";

import { PortfolioItem } from "@/app/data/projects";
import { motion } from "motion/react";
import { Compare } from "./compare";

interface Props {
  item: PortfolioItem;
  index: number;
}

export function PortfolioCompareCard({ item, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.03 }}
      className="relative group"
    >
      {/* Arc-reactor glow */}
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4 + (index % 3),
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -inset-1 rounded-2xl 
          bg-gradient-to-r from-indigo-500/40 via-cyan-400/40 to-indigo-500/40 
          blur-xl"
      />

      {/* Compare Slider Card */}
      <div className="relative z-10">
        <Compare
          image={item.imgSrc}
          slideMode="hover"
          autoplay
          autoplayDuration={6000}
          className="w-full h-[380px]"
          description={
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-cyan-300">
                {item.type}
              </span>

              <h3 className="text-lg font-semibold text-white">
                {item.name}
              </h3>

              <p className="text-sm text-white/80">
                {item.details}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {item.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-md 
                      bg-white/5 text-white/70 border border-white/10"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {item.citation && (
                <p className="text-xs text-white/50 pt-2">
                  {item.citation}
                </p>
              )}
            </div>
          }
        />
      </div>
    </motion.div>
  );
}

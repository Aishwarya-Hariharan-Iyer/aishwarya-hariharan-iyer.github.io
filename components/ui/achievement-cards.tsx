"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Achievement } from "@/app/data/achievements";

export function AchievementCard({
  achievement,
  index,
  hovered,
  setHovered,
}: {
  achievement: Achievement;
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const router = useRouter();
  const isFocused = hovered === index;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => achievement.href && router.push(achievement.href)}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative h-64 md:h-80 rounded-xl overflow-hidden transition-all duration-500",
        "cursor-pointer bg-black/40 backdrop-blur-md",
        "border border-white/20",
        "hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]",
        hovered !== null && !isFocused && "scale-[0.96] opacity-60"
      )}
    >
      {/* Image */}
      {achievement.image && (
        <img
          src={achievement.image}
          alt={achievement.title}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-transform duration-700",
            isFocused && "scale-105"
          )}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/90" />

      {/* HUD ring */}
      <div
        className={cn(
          "absolute inset-0 rounded-xl pointer-events-none",
          isFocused &&
            "ring-1 ring-cyan-400/40 shadow-[inset_0_0_40px_rgba(34,211,238,0.15)]"
        )}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6">
        <span className="text-xs uppercase tracking-widest text-cyan-400 mb-2">
          {achievement.category}
        </span>

        <h3 className="text-lg md:text-xl font-semibold text-white">
          {achievement.title}
        </h3>

        {/* Description on focus */}
        <p
          className={cn(
            "mt-3 text-sm text-neutral-300 transition-all duration-500",
            isFocused
              ? "opacity-100 max-h-40"
              : "opacity-0 max-h-0 overflow-hidden"
          )}
        >
          {achievement.description}
        </p>

        {achievement.year && (
          <span className="mt-3 text-xs text-neutral-400">
            {achievement.year}
          </span>
        )}
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
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
        "relative h-64 md:h-80 rounded-xl overflow-hidden",
        "transition-all duration-500 ease-out",
        "cursor-pointer bg-black/40 backdrop-blur-md",
        "border border-white/15",
        "hover:border-cyan-400/60",
        isFocused
          ? "scale-[1.04] z-10 shadow-[0_0_60px_rgba(34,211,238,0.45)]"
          : hovered !== null
          ? "scale-[0.92] opacity-35 blur-[0.3px]"
          : "opacity-90"
      )}
    >
      {/* IMAGE — base layer */}
      <Image
        src={achievement.image || "/achievements/placeholder-achievement.png"}
        alt={achievement.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className={cn(
          "object-cover transition-transform duration-700 z-0",
          isFocused && "scale-110"
        )}
        priority={index < 3}
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          target.src = "/achievements/placeholder-achievement.png";
        }}
      />

      {/* GRADIENT GLASS — above image */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/80 via-black/55 to-black/90" />

      {/* TEXT SAFE ZONE */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/3 z-10
        bg-gradient-to-t from-black/85 via-black/55 to-transparent
        pointer-events-none"
      />

      {/* SCANLINES / HUD NOISE */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 2px, transparent 4px)",
          mixBlendMode: "overlay",
        }}
      />

      {/* HUD RING */}
      <div
        className={cn(
          "absolute inset-0 z-20 rounded-xl pointer-events-none transition-all",
          isFocused &&
            "ring-1 ring-cyan-400/40 shadow-[inset_0_0_50px_rgba(34,211,238,0.18)]"
        )}
      />

      {/* CONTENT — top layer */}
      <div
        className={cn(
          "relative z-30 h-full flex flex-col justify-end p-6",
          "bg-black/30 backdrop-blur-sm rounded-b-xl"
        )}
      >
        {/* Category */}
        <span className="text-xs uppercase tracking-widest text-cyan-300 drop-shadow-[0_0_6px_rgba(34,211,238,0.35)] mb-2">
          {achievement.category}
        </span>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
          {achievement.title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            "mt-3 text-sm text-neutral-200 leading-relaxed transition-all duration-500",
            isFocused
              ? "opacity-100 max-h-40"
              : "opacity-0 max-h-0 overflow-hidden"
          )}
        >
          {achievement.description}
        </p>

        {/* Year */}
        {achievement.year && (
          <span className="mt-3 text-xs uppercase tracking-widest text-cyan-300/90">
            {achievement.year}
          </span>
        )}
      </div>
    </div>
  );
}

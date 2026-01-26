"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Achievement } from "@/app/data/achievements";
import { NoiseBackground } from "./noise-background";

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

    <NoiseBackground
      containerClassName="
        w-fit p-2 mx-auto
        rounded-xl
        relative overflow-hidden
        bg-black/85
        [filter:saturate(140%)_brightness(105%)]
      "
      gradientColors={[
        "rgb(20, 90, 160)",   // Stark blue
        "rgb(0, 160, 220)",   // arc-reactor cyan
        "rgb(67, 252, 255)",    // deep Stark navy
      ]}
    >
    <div
      role="button"
      tabIndex={0}
      onClick={() => achievement.href && router.push(achievement.href)}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative h-64 md:h-80 rounded-xl overflow-hidden",
        "transition-all duration-500 ease-out cursor-pointer",
        "border border-white/20",
        isFocused
          ? "scale-[1.04] z-10 shadow-[0_0_40px_rgba(34,211,238,0.35)]"
          : hovered !== null
          ? "scale-[0.94] opacity-60"
          : "opacity-95"
      )}
    >
      {/* IMAGE (true background) */}
      <Image
        src={achievement.image || "/achievements/placeholder-achievement.png"}
        alt={achievement.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover"
        priority={index < 3}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src =
            "/achievements/placeholder-achievement.png";
        }}
      />

      {/* SINGLE GLASS OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />

      {/* TEXT SAFE GRADIENT */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* CONTENT */}
      <div className="relative h-full flex flex-col justify-end p-6">
        {/* Category */}
        <span className="text-xs uppercase tracking-widest text-cyan-300 mb-2">
          {achievement.category}
        </span>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-white">
          {achievement.title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            "mt-3 text-sm text-neutral-200 transition-all duration-500",
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
    </NoiseBackground>
  );
}

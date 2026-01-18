"use client";

import { skills } from "@/app/data/skills";

export default function SkillsMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* fade edges */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      />

      {/* moving strip */}
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{
          animation: "marquee 30s linear infinite",
          willChange: "transform",
        }}
      >
        {[...skills, ...skills].map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-slate-600 opacity-80 hover:opacity-100 transition"
          >
            <div className="text-4xl shrink-0">{skill.icon}</div>
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

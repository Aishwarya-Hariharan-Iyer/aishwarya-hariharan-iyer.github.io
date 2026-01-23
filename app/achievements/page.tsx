"use client";

import { AchievementCard } from "@/components/ui/achievement-cards";
import { useState } from "react";
import { MCUBackground } from "../components/ui/mcu-background";
import { achievements } from "../data/achievements";

export default function AchievementsPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <MCUBackground>
      <main className="py-24">
        <h1 className="text-5xl font-bold text-center mb-16 text-neutral-900">
          Achievements & Recognition
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))}
        </div>
      </main>
    </MCUBackground>
  );
}

"use client";

import { useState } from "react";
import { AchievementCard } from "@/components/ui/achievement-cards";
import { achievements } from "../data/achievements";
import { PageHeader } from "../components/layout/page-header";
import { PageLayout } from "../components/layout/page-layout";

export default function AchievementsPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <PageLayout padded={false} imageLeft="/aish-publish.png" imageRight="/aish-medals.png">
      <PageHeader
        title="Achievements & Recognition"
        subtitle="Awards, honors, and milestones across academics and research."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
    </PageLayout>
  );
}

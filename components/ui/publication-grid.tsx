"use client";

import { motion } from "motion/react";
import { PublicationCard } from "@/components/ui/publication-card";
import type { PublicationItem } from "@/app/data/publications";

interface Props {
  items: PublicationItem[];
}

export function PublicationGrid({ items }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4">
      {items.map((item, i) => (
        <motion.div
          key={item.name}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 10 + (i % 3), // subtle variation
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <PublicationCard item={item} />
        </motion.div>
      ))}
    </div>
  );
}

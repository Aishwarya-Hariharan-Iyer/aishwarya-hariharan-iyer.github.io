"use client";
import { PortfolioItem } from "@/app/data/projects";
import { motion } from "motion/react";
import { PortfolioCompareCard } from "./portfolio-compare-card";

interface Props {
  items: PortfolioItem[];
}

export function PortfolioGrid({ items }: Props) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      {items.map((item, idx) => (
        <PortfolioCompareCard
          key={item.name}
          item={item}
          index={idx}
        />
      ))}
    </motion.div>
  );
}

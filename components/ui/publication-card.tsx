"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";
import type { PublicationItem } from "@/app/data/publications";

export function PublicationCard({
  item,
  className,
}: {
  item: PublicationItem;
  className?: string;
}) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className={cn(
        "group relative rounded-3xl overflow-hidden cursor-pointer",
        "bg-blue-800/10 backdrop-blur-md",
        "aspect-[3/4] min-h-[620px] w-full",
        "shadow-[0_20px_50px_rgba(0,0,0,0.25)]",
        className
      )}
    >
      {/* 🔵 Blue glow */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-3xl
          shadow-[0_0_0_1px_rgba(56,189,248,0.45)]
          group-hover:shadow-[0_0_40px_6px_rgba(56,189,248,0.55)]
          transition duration-500
        "
      />

      {/* 💠 Light blue glass hover */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-3xl
          opacity-0 group-hover:opacity-100
          bg-cyan-800/20
          backdrop-blur-[10px]
          transition duration-500
        "
      />

      {/* 🖼 Image frame */}
      <div className="relative h-[55%] w-full bg-navy-100 overflow-hidden">
        <img
          src={item.imgSrc}
          alt={item.name}
          className="
            absolute inset-0
            w-full h-full
            object-contain
            p-4
            transition-transform duration-500
            group-hover:scale-[1.03]
          "
        />
      </div>

      {/* 📄 Content panel */}
      <div className="relative h-[45%] p-6 flex flex-col text-neutral-900">
        {/* Type */}
        <span className="text-[10px] tracking-widest uppercase text-cyan-600 mb-2">
          {item.type}
        </span>

        {/* Title */}
        <h3 className="text-lg font-semibold leading-snug">
          {item.name}
        </h3>

        {/* Venue / subtitle */}
        <p className="mt-1 text-sm italic font-serif text-cyan-700/80">
          {item.desc}
        </p>

        {/* Details */}
        <p className="text-sm text-black-700 mt-3 line-clamp-4">
          {item.details}
        </p>
      </div>
    </motion.article>
    </a>
  );
}

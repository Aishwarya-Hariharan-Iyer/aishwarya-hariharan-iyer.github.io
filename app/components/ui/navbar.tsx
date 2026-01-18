"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MenuItem, Menu } from "@/components/ui/navbar-menu";
import { motion, AnimatePresence } from "motion/react";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-8 inset-x-0 z-50 mx-auto max-w-fit",
        className
      )}
    >
      {/* Single Glass Capsule */}
      <div
        className="
          relative flex items-center gap-8
          rounded-full px-10 py-4
          bg-white/60 backdrop-blur-2xl
          border border-white/50
          shadow-[0_25px_60px_rgba(0,0,0,0.08)]
        "
      >
        {/* Soft Plasma Edge */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-full
            ring-1 ring-cyan-300/20
          "
        />

        <Menu setActive={setActive}>
          <NavItem
            href="/"
            label="Home"
            emoji="🏠"
            tooltip="Main overview"
            active={active}
            setActive={setActive}
            hovered={hovered}
            setHovered={setHovered}
          />
          <NavItem
            href="/education"
            label="Education"
            emoji="🎓"
            tooltip="Academic background"
            active={active}
            setActive={setActive}
            hovered={hovered}
            setHovered={setHovered}
          />
          <NavItem
            href="/projects"
            label="Projects"
            emoji="🧪"
            tooltip="Things I’ve built"
            active={active}
            setActive={setActive}
            hovered={hovered}
            setHovered={setHovered}
          />
          <NavItem
            href="/experience"
            label="Experience"
            emoji="🧠"
            tooltip="Roles & responsibilities"
            active={active}
            setActive={setActive}
            hovered={hovered}
            setHovered={setHovered}
          />
          <NavItem
            href="/achievements"
            label="Achievements"
            emoji="🏆"
            tooltip="Awards & recognition"
            active={active}
            setActive={setActive}
            hovered={hovered}
            setHovered={setHovered}
          />
        </Menu>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Nav Item with Emoji + Tooltip                                       */
/* ------------------------------------------------------------------ */

function NavItem({
  href,
  label,
  emoji,
  tooltip,
  active,
  setActive,
  hovered,
  setHovered,
}: {
  href: string;
  label: string;
  emoji: string;
  tooltip: string;
  active: string | null;
  setActive: (v: string | null) => void;
  hovered: string | null;
  setHovered: (v: string | null) => void;
}) {
  const isActive = active === label;

  return (
    <Link href={href}>
      <motion.div
        className="relative"
        onMouseEnter={() => {
          setActive(label);
          setHovered(label);
        }}
        onMouseLeave={() => {
          setActive(null);
          setHovered(null);
        }}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* Label */}
        <div className="flex items-center gap-2">
          <span className="text-lg">{emoji}</span>
          <MenuItem setActive={setActive} active={active} item={label} />
        </div>

        {/* Active Plasma Indicator */}
        <motion.div
          initial={false}
          animate={{
            opacity: isActive ? 1 : 0,
            scaleX: isActive ? 1 : 0.5,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="
            absolute -bottom-2 left-1/2 h-[2px] w-6 -translate-x-1/2
            bg-gradient-to-r from-cyan-400 to-violet-500
            rounded-full
          "
        />

        {/* Tooltip */}
        <AnimatePresence>
          {hovered === label && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
              className="
                absolute top-full left-1/2 mt-3 -translate-x-1/2
                whitespace-nowrap rounded-md
                bg-white/80 backdrop-blur-md
                border border-white/60
                px-3 py-1.5
                text-xs text-neutral-700
                shadow-lg
              "
            >
              {tooltip}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
}

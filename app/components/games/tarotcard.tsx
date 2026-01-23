"use client";

import { motion } from "framer-motion";

export default function TarotCard({
  card,
  selected,
  inactive,
  onSelect,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  card: any;
  selected: boolean;
  inactive: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.div
      onClick={!selected ? onSelect : undefined}
      whileHover={!selected ? { y: -8 } : {}}
      animate={{
        rotateY: selected ? 180 : 0,
        scale: selected ? 1.08 : 1,
        opacity: inactive ? 0.25 : 1,
        boxShadow: selected
          ? "0 0 70px rgba(56,189,248,0.65)"
          : "0 20px 50px rgba(0,0,0,0.35)",
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ transformStyle: "preserve-3d" }}
      className="
        relative cursor-pointer
        w-[130px] h-[200px]
        rounded-2xl
        flex-shrink-0
      "
    >
      {/* BACK — Asgardian vision */}
      <div
        className="
          absolute inset-0 rounded-2xl
          border border-white/20
          overflow-hidden
        "
        style={{
          backfaceVisibility: "hidden",
          backgroundImage: `
            radial-gradient(circle at top, rgba(56,189,248,0.25), transparent 60%),
            url(${card.backImage})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Rune overlay */}
        <div className="absolute inset-0 bg-[url('/runes.svg')] opacity-20 mix-blend-overlay" />

        {/* Inner frame */}
        <div className="absolute inset-2 rounded-xl border border-cyan-300/30" />
      </div>

      {/* FRONT — Uru glass */}
      <div
        className="
          absolute inset-0 rounded-2xl
          bg-gradient-to-br from-white/90 via-white/80 to-cyan-50/80
          backdrop-blur-xl
          border border-white/60
          flex flex-col items-center justify-center
          text-center p-4
        "
        style={{
          transform: "rotateY(180deg)",
          backfaceVisibility: "hidden",
        }}
      >
        <h3 className="text-lg font-semibold tracking-wide text-neutral-900">
          {card.title}
        </h3>
        <p className="mt-1 text-xs italic text-cyan-700/80">
          {card.subtitle}
        </p>
      </div>
    </motion.div>
  );
}

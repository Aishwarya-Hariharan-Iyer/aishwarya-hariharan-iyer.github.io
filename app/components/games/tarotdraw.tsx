"use client";

import { useState } from "react";
import { tarotDeck } from "@/app/data/tarot";
import TarotCard from "./tarotcard";
import { AnimatePresence, motion } from "framer-motion";

export default function TarotSpread({ onDone }: { onDone: () => void }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = tarotDeck.find(c => c.id === selectedId);

  return (
    <div
      className="flex flex-col items-center gap-12 max-w-xl"
      style={{ perspective: "1200px" }}
    >
      {!selectedId && (
        <p className="text-sm italic text-neutral-600">
          Attend to the card that calls you.
        </p>
      )}

      {/* Cards */}
      <div className="flex gap-8 justify-center">
        {tarotDeck.map(card => (
          <TarotCard
            key={card.id}
            card={card}
            selected={selectedId === card.id}
            inactive={!!selectedId && selectedId !== card.id}
            onSelect={() => setSelectedId(card.id)}
          />
        ))}
      </div>

      {/* Oracle Reading */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="
              relative w-full
              rounded-3xl
              bg-gradient-to-br from-white/85 via-white/80 to-cyan-50/70
              backdrop-blur-2xl
              border border-white/60
              p-8 text-center
              shadow-[0_40px_100px_rgba(0,0,0,0.35)]
            "
          >
            {/* Rune watermark */}
            <div className="absolute inset-0 bg-[url('/runes.svg')] opacity-10 pointer-events-none" />

            <h3 className="text-xl font-semibold tracking-wide text-neutral-900">
              {selected.title}
            </h3>
            <p className="mt-1 italic text-cyan-700/80">
              {selected.subtitle}
            </p>
            <p className="mt-5 text-neutral-700 leading-relaxed">
              {selected.meaning}
            </p>

            <button
              onClick={onDone}
              className="
                mt-8 px-6 py-2 rounded-full
                bg-neutral-900 text-white
                hover:bg-neutral-800 transition
              "
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

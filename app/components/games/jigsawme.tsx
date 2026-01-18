"use client";

import { useEffect, useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import Confetti from "react-confetti";

export default function JigsawMe({ onDone }: { onDone: () => void }) {
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    if (!solved) return;

    const timer = setTimeout(() => {
      onDone(); // close modal
    }, 1800);

    return () => clearTimeout(timer);
  }, [solved, onDone]);

  return (
    <div className="relative w-[320px] sm:w-[380px] mx-auto">
      {solved && <Confetti numberOfPieces={220} recycle={false} />}

      <JigsawPuzzle
        imageSrc="/profile_aish_hero.png"
        rows={3}
        columns={3}
        onSolved={() => {
          // defer state update — avoids render-phase update
          setTimeout(() => setSolved(true), 0);
        }}
      />

      {solved && (
        <div className="mt-6 text-center text-neutral-800 font-medium">
          You’ve pieced me together.
        </div>
      )}
    </div>
  );
}

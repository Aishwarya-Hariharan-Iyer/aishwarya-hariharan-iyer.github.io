"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(100).fill(1);
  const cols = new Array(60).fill(1);

  // Softer pastel-neon palette for futuristic glass look
  const colors = [
    "#a5f3fc", // light cyan
    "#bae6fd", // sky
    "#c7d2fe", // indigo
    "#f0abfc", // violet-pink
    "#bbf7d0", // mint
    "#fef9c3", // soft yellow
  ];

  // eslint-disable-next-line react-hooks/purity
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      style={{
        transform:
          "translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)",
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden p-4 bg-transparent",
        className
      )}
      {...rest}
    >
      {/* 🌫️ Soft glassy fog and glow layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-cyan-100/10 to-transparent blur-3xl opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-200/30 via-transparent to-transparent blur-2xl opacity-40 animate-[fogMove_45s_ease-in-out_infinite]"></div>
      <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent blur-3xl opacity-30 animate-[fogPulse_10s_ease-in-out_infinite]"></div>

      {/* 🧊 Grid of “glass” boxes */}
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="relative h-8 w-16 border-l border-cyan-100/30"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                opacity: 0.7,
                transition: { duration: 0.3 },
              }}
              animate={{
                opacity: [0.15, 0.35, 0.15],
                boxShadow: [
                  "0 0 2px rgba(173,216,230,0.1)",
                  "0 0 6px rgba(173,216,230,0.4)",
                  "0 0 2px rgba(173,216,230,0.1)",
                ],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  delay: (i + j) * 0.03,
                },
              }}
              key={`col` + j}
              className="relative h-8 w-16 border-t border-r border-cyan-100/25 bg-white/5 backdrop-blur-[1px]"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="rgba(200,255,255,0.3)"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

// 🌬️ Add keyframes for fog and glow
if (typeof document !== "undefined" && !document.getElementById("fogMove")) {
  const style = document.createElement("style");
  style.id = "fogMove";
  style.innerHTML = `
  @keyframes fogMove {
    0% { transform: translateY(0px) translateX(0px); opacity: 0.35; }
    50% { transform: translateY(60px) translateX(-40px); opacity: 0.55; }
    100% { transform: translateY(0px) translateX(0px); opacity: 0.35; }
  }

  @keyframes fogPulse {
    0%, 100% { opacity: 0.2; transform: scale(1); }
    50% { opacity: 0.45; transform: scale(1.2); }
  }
  `;
  document.head.appendChild(style);
}

export const Boxes = React.memo(BoxesCore);

"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function MCUBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Soft arc-reactor glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-20%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[140px]" />

      {/* Secondary glow */}
      <div className="pointer-events-none absolute right-[-10%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-[120px]" />

      {/* Stark grid (very subtle) */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          "bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)]",
          "bg-[size:48px_48px]"
        )}
      />

      {/* Diagonal HUD sweep */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-cyan-200/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

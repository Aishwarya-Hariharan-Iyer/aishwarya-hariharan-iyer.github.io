"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { IconDotsVertical } from "@tabler/icons-react";

interface CompareProps {
  image?: string;
  description?: React.ReactNode;
  className?: string;
  imageClassName?: string;
  descriptionClassName?: string;
  initialSliderPercentage?: number;
  slideMode?: "hover" | "drag";
  showHandlebar?: boolean;
  autoplay?: boolean;
  autoplayDuration?: number;
}

export const Compare = ({
  image = "",
  description,
  className,
  imageClassName,
  descriptionClassName,
  initialSliderPercentage = 50,
  slideMode = "hover",
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 5000,
}: CompareProps) => {
  const [sliderXPercent, setSliderXPercent] = useState(
    initialSliderPercentage
  );
  const [isDragging, setIsDragging] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  /* ---------------- Autoplay ---------------- */

  const startAutoplay = useCallback(() => {
    if (!autoplay) return;

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress =
        (elapsed % (autoplayDuration * 2)) / autoplayDuration;

      const percentage =
        progress <= 1 ? progress * 100 : (2 - progress) * 100;

      setSliderXPercent(percentage);
      autoplayRef.current = setTimeout(animate, 16);
    };

    animate();
  }, [autoplay, autoplayDuration]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  /* ---------------- Interaction ---------------- */

  const handleStart = useCallback(() => {
    if (slideMode === "drag") setIsDragging(true);
  }, [slideMode]);

  const handleEnd = useCallback(() => {
    if (slideMode === "drag") setIsDragging(false);
  }, [slideMode]);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!sliderRef.current) return;

      if (slideMode === "hover" || isDragging) {
        const rect = sliderRef.current.getBoundingClientRect();
        const percent =
          ((clientX - rect.left) / rect.width) * 100;

        requestAnimationFrame(() => {
          setSliderXPercent(Math.max(0, Math.min(100, percent)));
        });
      }
    },
    [slideMode, isDragging]
  );

  /* ---------------- Render ---------------- */

  return (
    <div
      ref={sliderRef}
      className={cn(
        "relative w-[400px] h-[400px] overflow-hidden rounded-2xl",
        className
      )}
      style={{
        cursor: slideMode === "drag" ? "grab" : "col-resize",
      }}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onMouseLeave={() => {
        handleEnd();
        startAutoplay();
      }}
      onMouseEnter={stopAutoplay}
      onTouchStart={(e) => handleMove(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      {/* Description Side (RIGHT / BASE) */}
      {description && (
        <div
          className={cn(
            "absolute inset-0 z-10 bg-black/80 backdrop-blur-md flex items-center justify-center p-6 text-white",
            descriptionClassName
          )}
        >
          <div className="max-w-sm text-sm leading-relaxed">
            {description}
          </div>
        </div>
      )}

      {/* Image Side (LEFT / CLIPPED) */}
      {image && (
        <motion.div
          className="absolute inset-0 z-20 overflow-hidden"
          style={{
            clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
          }}
          transition={{ duration: 0 }}
        >
          <img
            src={image}
            alt="comparison image"
            draggable={false}
            className={cn(
              "w-full h-full object-cover select-none",
              imageClassName
            )}
          />
        </motion.div>
      )}

      {/* Slider Line */}
      <AnimatePresence initial={false}>
        <motion.div
          className="absolute top-0 h-full w-px z-40 bg-gradient-to-b from-transparent via-indigo-500 to-transparent"
          style={{ left: `${sliderXPercent}%` }}
          transition={{ duration: 0 }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -right-10 w-10 h-3/4">
            <MemoizedSparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>

          {showHandlebar && (
            <div className="absolute top-1/2 -translate-y-1/2 -right-2.5 h-5 w-5 rounded-md bg-white flex items-center justify-center shadow">
              <IconDotsVertical className="h-4 w-4 text-black" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const MemoizedSparklesCore = React.memo(SparklesCore);

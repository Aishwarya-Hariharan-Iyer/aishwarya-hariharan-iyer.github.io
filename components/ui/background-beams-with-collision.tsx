"use client";
import { cn } from "@/lib/utils";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  type MotionValue,
} from "motion/react";
import React, { useRef, useState, useEffect } from "react";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);

  // Cursor influence (Stark targeting)
  const mouseX = useMotionValue(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX]);

  const beams = [
    { initialX: 80, duration: 6 },
    { initialX: 320, duration: 4, delay: 2 },
    { initialX: 520, duration: 8, className: "h-6" },
    { initialX: 760, duration: 5 },
    { initialX: 1000, duration: 9, className: "h-20" },
    { initialX: 1200, duration: 6, className: "h-10" },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center overflow-hidden",
        "bg-gradient-to-b from-[#fdfefe] via-[#f6f9ff] to-[#eef3ff]",
        className
      )}
    >
      {beams.map((beam, i) => (
        <CollisionMechanism
          key={i}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
          mouseX={mouseX}
        />
      ))}

      {children}

      {/* Energy ground plane */}
      <div
        ref={containerRef}
        className="pointer-events-none absolute bottom-0 inset-x-0 h-24
          bg-gradient-to-t from-cyan-200/30 via-amber-200/10 to-transparent
          shadow-[0_-10px_40px_rgba(56,189,248,0.25)]"
      />
    </div>
  );
};

const CollisionMechanism = ({
  containerRef,
  parentRef,
  mouseX,
  beamOptions = {},
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  parentRef: React.RefObject<HTMLDivElement | null>;
  mouseX: MotionValue<number>;
  beamOptions?: {
    initialX?: number;
    duration?: number;
    delay?: number;
    className?: string;
  };
}) => {
  const beamRef = useRef<HTMLDivElement | null>(null);

  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({ detected: false, coordinates: null });

  const [cycleLock, setCycleLock] = useState(false);
  const [beamKey, setBeamKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleLock
      ) {
        const beam = beamRef.current.getBoundingClientRect();
        const floor = containerRef.current.getBoundingClientRect();
        const parent = parentRef.current.getBoundingClientRect();

        if (beam.bottom >= floor.top) {
          setCollision({
            detected: true,
            coordinates: {
              x: beam.left - parent.left + beam.width / 2,
              y: beam.bottom - parent.top,
            },
          });
          setCycleLock(true);
        }
      }
    }, 40);

    return () => clearInterval(interval);
  }, [cycleLock, containerRef, parentRef]);

  useEffect(() => {
    if (collision.detected) {
      const timeout = setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleLock(false);
        setBeamKey((k) => k + 1);
      }, 1800);

      return () => clearTimeout(timeout);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        style={{ x: mouseX }}
        initial={{
          translateY: "-200px",
          translateX: beamOptions.initialX ?? 0,
        }}
        animate={{ translateY: "1600px" }}
        transition={{
          duration: beamOptions.duration ?? 7,
          ease: "linear",
          repeat: Infinity,
          delay: beamOptions.delay ?? 0,
        }}
        className={cn(
          "absolute top-20 left-0 w-px rounded-full",
          "bg-gradient-to-t from-cyan-400 via-indigo-400 to-transparent",
          "shadow-[0_0_12px_rgba(56,189,248,0.6)]",
          beamOptions.className
        )}
      />

      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            style={{
              left: collision.coordinates.x,
              top: collision.coordinates.y,
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const Explosion = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <motion.div
      {...props}
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute z-50 h-6 w-6 -translate-x-1/2 -translate-y-1/2"
    >
      {/* Arc-reactor flash */}
      <div className="absolute inset-0 rounded-full bg-cyan-400/40 blur-md" />
      <div className="absolute inset-1 rounded-full bg-amber-300/40 blur-sm" />

      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{
            // eslint-disable-next-line react-hooks/purity
            x: Math.random() * 120 - 60,
            // eslint-disable-next-line react-hooks/purity
            y: Math.random() * -80,
            opacity: 0,
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-amber-300"
        />
      ))}
    </motion.div>
  );
};

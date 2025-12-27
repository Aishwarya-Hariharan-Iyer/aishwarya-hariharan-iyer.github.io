"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

export default function HeroGlassPanel() {
    const [isHovering, setIsHovering] = useState(false);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="relative w-full flex justify-center">
            {/* Confetti */}
            <AnimatePresence>
                {isHovering && (
                    <Confetti
                        width={windowSize.width}
                        height={windowSize.height}
                        numberOfPieces={200}
                        gravity={0.2}
                        recycle={false}
                    />
                )}
            </AnimatePresence>

            {/* Glass Panel */}
            <motion.div
                className="relative z-10 px-8 py-10 rounded-3xl bg-white backdrop-blur-2xl border border-white/60 shadow-2xl text-center text-slate-700 cursor-pointer overflow-hidden"
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                    Aishwarya Hariharan Iyer
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-lg mx-auto font-handwriting">
                    NUS ’25 Computer Science graduate. A coder with a poet’s heart, I
                    create AI/ML solutions that matter, bridging technology and human
                    experience. Always exploring, building, and innovating for a better
                    future.
                </p>
            </motion.div>
        </div>
    );
}

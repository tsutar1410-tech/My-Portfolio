"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const WORDS = ["Design", "Create", "Develop", "Inspire"];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Counter using requestAnimationFrame over ~2700ms
  useEffect(() => {
    const duration = 2700;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      // Subtle ease-out curve
      const easedProgress = Math.floor(rawProgress * 100);
      setProgress(easedProgress);

      if (rawProgress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setProgress(100);
        // Wait 400ms before exit animation
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            onComplete();
          }, 800);
        }, 400);
      }
    };

    const animId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  // Cycle through center words
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 650);

    return () => clearInterval(interval);
  }, []);

  // Format counter to 3 digits (000, 042, 100)
  const formattedCount = String(progress).padStart(3, "0");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={isExiting ? { y: "-100%", opacity: 0.95 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col justify-between bg-bg p-6 md:p-12 overflow-hidden select-none pointer-events-auto"
    >
      {/* Top Bar */}
      <div className="w-full flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xs uppercase tracking-[0.3em] text-muted font-mono"
        >
          PORTFOLIO
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs text-muted/60 tracking-widest hidden sm:block"
        >
          TUSHAR / 2026
        </motion.div>
      </div>

      {/* Center Cycling Word */}
      <div className="flex items-center justify-center h-48 my-auto relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={WORDS[wordIndex]}
            initial={{ y: 25, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -25, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary tracking-tight text-center"
          >
            {WORDS[wordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Area: Counter & Progress */}
      <div className="w-full space-y-6">
        <div className="flex items-end justify-between">
          <div className="text-xs tracking-widest text-muted/50 hidden md:block uppercase font-mono">
            EXPERIENCE LOADING
          </div>
          <div className="text-6xl md:text-8xl lg:text-9xl font-display tabular-nums tracking-tighter text-text-primary ml-auto">
            {formattedCount}
          </div>
        </div>

        {/* Progress Bar with blue glow */}
        <div className="relative w-full h-[3px] bg-stroke overflow-hidden rounded-full">
          <motion.div
            className="absolute top-0 left-0 bottom-0 accent-gradient rounded-full"
            style={{
              width: `${progress}%`,
              boxShadow: "0 0 16px rgba(78, 133, 191, 0.75), 0 0 4px #89AACC",
            }}
            transition={{ ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};


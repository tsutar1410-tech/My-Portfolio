"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, X, Maximize2 } from "lucide-react";
import { EXPLORATIONS, PERSONAL_INFO, ExplorationItem } from "@/lib/projects";

export const Explorations: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const centerContentRef = useRef<HTMLDivElement>(null);

  const [activeImage, setActiveImage] = useState<ExplorationItem | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;

    if (!container || !leftCol || !rightCol) return;

    // GSAP parallax scroll effect
    const ctx = gsap.context(() => {
      // Parallax for left column (moves slower/upwards)
      gsap.fromTo(
        leftCol,
        { y: "15%" },
        {
          y: "-20%",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      // Parallax for right column (moves faster or counter)
      gsap.fromTo(
        rightCol,
        { y: "-10%" },
        {
          y: "25%",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const leftItems = EXPLORATIONS.slice(0, 3);
  const rightItems = EXPLORATIONS.slice(3, 6);

  return (
    <section
      id="explorations"
      ref={containerRef}
      className="relative w-full min-h-[160vh] lg:min-h-[220vh] bg-bg py-24 overflow-hidden border-t border-stroke/40"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4E85BF]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative max-w-[1300px] mx-auto px-6 md:px-10 h-full flex flex-col justify-between">
        {/* Sticky Center Content Box */}
        <div className="lg:sticky lg:top-28 z-20 text-center max-w-xl mx-auto my-12 pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/90 border border-stroke text-[11px] font-mono uppercase tracking-[0.25em] text-muted mb-4 backdrop-blur-md">
            <span>EXPLORATIONS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl text-text-primary tracking-tight leading-[1.08] font-light mb-4">
            An experimental{" "}
            <span className="font-display italic text-text-primary font-normal">
              visual playground.
            </span>
          </h2>

          <p className="text-muted text-sm md:text-base leading-relaxed mb-8">
            A space for visual experiments, interface explorations, creative
            concepts, and design inspiration.
          </p>

          <a
            href={PERSONAL_INFO.socials.dribbble}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3 bg-surface border border-stroke text-xs font-medium text-text-primary transition-all duration-300 hover:scale-105 hover:border-transparent hover:bg-white hover:text-bg"
          >
            <span>Explore on Dribbble</span>
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Parallax Gallery Columns */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24 w-full mt-12 lg:-mt-24 pointer-events-auto">
          {/* Left Column */}
          <div ref={leftColRef} className="flex flex-col gap-10 md:gap-14 items-center md:items-start">
            {leftItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveImage(item)}
                className={`group relative cursor-pointer w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden bg-surface border border-stroke transition-all duration-500 hover:scale-105 hover:border-muted/60 hover:shadow-2xl hover:shadow-black/70 ${item.rotation}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.8] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-xs font-mono text-sky-400">0{idx + 1}</span>
                  <h4 className="text-sm font-medium text-white">{item.title}</h4>
                  <p className="text-[11px] text-muted">{item.subtitle}</p>
                </div>
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <Maximize2 size={13} />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div ref={rightColRef} className="flex flex-col gap-10 md:gap-14 items-center md:items-end">
            {rightItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveImage(item)}
                className={`group relative cursor-pointer w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden bg-surface border border-stroke transition-all duration-500 hover:scale-105 hover:border-muted/60 hover:shadow-2xl hover:shadow-black/70 ${item.rotation}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.8] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-xs font-mono text-sky-400">0{idx + 4}</span>
                  <h4 className="text-sm font-medium text-white">{item.title}</h4>
                  <p className="text-[11px] text-muted">{item.subtitle}</p>
                </div>
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <Maximize2 size={13} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
            onClick={() => setActiveImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-surface/80 border border-stroke text-white/80 hover:text-white hover:bg-surface transition-all"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            {/* Lightbox Content Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-3xl w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-square max-h-[70vh] rounded-2xl overflow-hidden border border-stroke/70 shadow-2xl bg-surface">
                <Image
                  src={activeImage.image}
                  alt={activeImage.title}
                  fill
                  sizes="1000px"
                  className="object-contain"
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="font-display italic text-2xl text-text-primary">
                  {activeImage.title}
                </h3>
                <p className="text-xs font-mono text-muted mt-1 uppercase tracking-wider">
                  {activeImage.subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};


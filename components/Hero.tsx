"use client";

import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { PERSONAL_INFO } from "@/lib/projects";

interface HeroProps {
  ready?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ ready = true }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [roleIndex, setRoleIndex] = useState(0);

  // Role Cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // HLS Video Stream Setup
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoSrc =
      "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {
          // Autoplay policy fallback
        });
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  // GSAP Entrance Animations
  useEffect(() => {
    if (!ready) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.2 }
        );
      }

      if (contentRef.current) {
        const elements = contentRef.current.querySelectorAll(".gsap-reveal");
        tl.fromTo(
          elements,
          { opacity: 0, y: 20, filter: "blur(10px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            stagger: 0.1,
          },
          "-=0.7"
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, [ready]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative w-full h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden bg-bg"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-70 filter brightness-[0.8] contrast-[1.1]"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/35 backdrop-brightness-75" />
        {/* Subtle radial ambient vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-bg/40 to-bg" />
        {/* Bottom gradient fade to bg-bg */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg via-bg/70 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center mt-12 md:mt-6"
      >
        {/* Eyebrow */}
        <div className="gsap-reveal text-xs md:text-sm uppercase tracking-[0.3em] text-muted mb-8 font-mono select-none">
          {PERSONAL_INFO.eyebrow}
        </div>

        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-display italic leading-[0.88] tracking-tight text-text-primary mb-6 select-none"
        >
          {PERSONAL_INFO.name}
        </h1>

        {/* Role Animation */}
        <div className="gsap-reveal h-10 flex items-center justify-center gap-1.5 text-base sm:text-lg md:text-xl text-text-primary/90 mb-4 font-normal">
          <span>A</span>
          <div className="relative inline-block w-48 sm:w-56 md:w-64 text-center overflow-hidden h-9">
            <AnimatePresence mode="wait">
              <motion.span
                key={PERSONAL_INFO.roles[roleIndex]}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute inset-x-0 font-display italic text-lg sm:text-xl md:text-2xl text-white font-medium drop-shadow-sm"
              >
                {PERSONAL_INFO.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="hidden sm:inline">based in Mumbai, India.</span>
        </div>

        {/* Location subtitle on mobile if truncated */}
        <div className="gsap-reveal text-xs text-muted font-mono tracking-wider sm:hidden mb-4">
          based in Mumbai, India
        </div>

        {/* Description */}
        <p className="gsap-reveal text-sm md:text-base text-muted max-w-md mx-auto text-center mb-10 leading-relaxed font-normal">
          {PERSONAL_INFO.heroDescription}
        </p>

        {/* CTA Buttons */}
        <div className="gsap-reveal flex flex-wrap items-center justify-center gap-4">
          {/* Explore My Work: Solid white button with scale on hover */}
          <button
            onClick={() => scrollTo("work")}
            className="group relative px-7 py-3.5 rounded-full bg-white text-bg font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_28px_rgba(255,255,255,0.4)] active:scale-95"
          >
            <span>Explore My Work</span>
          </button>

          {/* Let's Connect: Transparent button with accent gradient hover border */}
          <button
            onClick={() => scrollTo("contact")}
            className="group relative px-7 py-3.5 rounded-full bg-transparent border border-stroke text-white font-medium text-sm transition-all duration-300 hover:scale-105 hover:border-transparent active:scale-95 overflow-hidden"
          >
            <span className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <span className="relative z-10 group-hover:text-white transition-colors">
              Let&apos;s Connect
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 select-none pointer-events-none">
        <span className="text-[10px] tracking-[0.25em] text-muted/70 uppercase font-mono">
          SCROLL
        </span>
        <div className="w-[1.5px] h-9 bg-stroke/60 relative overflow-hidden rounded-full">
          <div className="w-full h-1/2 accent-gradient animate-scroll-down rounded-full shadow-[0_0_8px_#4E85BF]" />
        </div>
      </div>
    </section>
  );
};


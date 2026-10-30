"use client";

import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import gsap from "gsap";
import { ArrowUpRight, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/projects";
import { Footer } from "./Footer";

export const Contact: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Background Video Flipped Vertically
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
        video.play().catch(() => {});
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

  // GSAP Infinite Linear Marquee
  useEffect(() => {
    const marqueeTrack = marqueeRef.current;
    if (!marqueeTrack) return;

    const anim = gsap.to(marqueeTrack, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    return () => {
      anim.kill();
    };
  }, []);

  const marqueeText = Array(10).fill("LET'S BUILD SOMETHING GREAT • ").join("");

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-bg pt-20"
    >
      {/* Background Flipped Video */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          style={{ transform: "scaleY(-1)" }}
          className="w-full h-full object-cover opacity-60 filter brightness-[0.7] contrast-[1.1]"
        />
        {/* Dark overlay black/60 */}
        <div className="absolute inset-0 bg-black/60 backdrop-brightness-75" />
        {/* Top gradient transition */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-bg to-transparent" />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-bg via-bg/80 to-transparent" />
      </div>

      {/* GSAP Marquee Bar */}
      <div className="relative z-10 w-full overflow-hidden py-6 border-y border-white/10 bg-black/20 backdrop-blur-xs select-none">
        <div
          ref={marqueeRef}
          className="whitespace-nowrap flex text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display italic text-text-primary/70 tracking-wider"
          style={{ willChange: "transform" }}
        >
          <span className="inline-block">{marqueeText}</span>
          <span className="inline-block">{marqueeText}</span>
        </div>
      </div>

      {/* Main Contact Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center flex flex-col items-center justify-center my-auto">
        <div className="text-xs uppercase tracking-[0.3em] text-muted font-mono mb-4">
          HAVE A PROJECT IN MIND?
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-text-primary tracking-tight leading-[1.05] font-light mb-6">
          Let&apos;s create something{" "}
          <span className="font-display italic text-text-primary font-normal">
            meaningful
          </span>{" "}
          together.
        </h2>

        <p className="text-muted text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed font-normal">
          Have an idea, a project, or simply want to connect? I&apos;d love to hear
          from you.
        </p>

        {/* CTA: Say Hello (Configurable mailto) */}
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-bg font-medium text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] active:scale-95"
        >
          <Mail size={18} className="text-bg" />
          <span>Say Hello</span>
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>

        {/* Display configurable email address gently below button */}
        <div className="mt-4 font-mono text-xs text-muted/70 tracking-wider">
          {PERSONAL_INFO.email}
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </section>
  );
};


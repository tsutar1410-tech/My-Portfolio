"use client";

import React, { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SelectedWorks } from "@/components/SelectedWorks";
import { Journal } from "@/components/Journal";
import { Explorations } from "@/components/Explorations";
import { Stats } from "@/components/Stats";
import { Contact } from "@/components/Contact";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <main className="relative min-h-screen bg-bg text-text-primary selection:bg-[#4E85BF]/30 selection:text-white">
      {/* Full-screen Loading Screen */}
      {!loadingComplete && (
        <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Floating Pill Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero ready={loadingComplete} />

      {/* Section 3: Selected Works (Bento Grid) */}
      <SelectedWorks />

      {/* Section 4: Behind The Screens / Journal */}
      <Journal />

      {/* Section 5: Explorations / Creative Playground Parallax */}
      <Explorations />

      {/* Section 6: About Me & Realistic Stats */}
      <Stats />

      {/* Section 7: Contact & Marquee & Footer */}
      <Contact />
    </main>
  );
}


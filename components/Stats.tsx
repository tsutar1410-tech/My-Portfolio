"use client";

import React from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/projects";
import { Sparkles, Terminal } from "lucide-react";

export const Stats: React.FC = () => {
  return (
    <section id="about" className="relative w-full bg-bg py-24 md:py-32 border-t border-stroke/40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* About Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-24">
          {/* Left Column: Eyebrow and Heading */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-[0.3em] text-muted font-mono mb-3"
            >
              A LITTLE ABOUT ME
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl text-text-primary tracking-tight leading-[1.08] font-light"
            >
              Curiosity drives{" "}
              <span className="font-display italic text-text-primary font-normal">
                everything I create.
              </span>
            </motion.h2>

            <div className="mt-8 flex items-center gap-2.5 text-xs font-mono text-muted">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Based in {PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Right Column: Bio & Skills */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-lg text-muted/90 font-normal leading-relaxed mb-8"
            >
              {PERSONAL_INFO.aboutDescription}
            </motion.p>

            {/* Skills & Technologies Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-4 pt-6 border-t border-stroke/60"
            >
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted">
                <Terminal size={14} className="text-sky-400" />
                <span>Core Technologies & Design Stack</span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {PERSONAL_INFO.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-surface border border-stroke text-xs md:text-sm text-text-primary/90 font-medium transition-all duration-300 hover:border-sky-500/50 hover:bg-surface/80 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3-Column Responsive Statistics Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-stroke/50">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <motion.div
              key={stat.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative rounded-3xl bg-surface border border-stroke p-8 flex flex-col justify-between overflow-hidden group hover:border-muted/50 transition-colors"
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-muted/60 tracking-wider">
                  {stat.num}
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-sky-400/80">
                  {stat.label}
                </span>
              </div>

              {/* Number Value */}
              <div className="mb-4">
                <span className="text-5xl sm:text-6xl md:text-7xl font-display tabular-nums italic text-text-primary tracking-tight group-hover:text-white transition-colors">
                  {stat.value}
                </span>
                <h4 className="text-base font-medium text-text-primary mt-2">
                  {stat.metric}
                </h4>
              </div>

              {/* Description */}
              <p className="text-xs text-muted/80 leading-relaxed font-normal">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


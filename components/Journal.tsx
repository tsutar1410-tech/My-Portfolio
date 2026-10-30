"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BookOpen, Clock, X } from "lucide-react";
import { JOURNAL_ITEMS, JournalItem } from "@/lib/projects";

export const Journal: React.FC = () => {
  const [selectedNote, setSelectedNote] = useState<JournalItem | null>(null);

  return (
    <section id="journal" className="relative w-full bg-bg py-20 md:py-28 border-t border-stroke/40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mb-14 md:mb-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] text-muted font-mono mb-3"
          >
            BEHIND THE SCREENS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl text-text-primary tracking-tight leading-[1.1] font-light"
          >
            Notes from the{" "}
            <span className="font-display italic text-text-primary font-normal">
              creative process.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-muted text-sm md:text-base leading-relaxed"
          >
            Thoughts, experiments, and lessons from my journey in development,
            design, and technology.
          </motion.p>
        </div>

        {/* 4 Horizontal Cards (rounded-full on desktop, rounded-3xl on mobile) */}
        <div className="flex flex-col gap-4 md:gap-5">
          {JOURNAL_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => setSelectedNote(item)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl md:rounded-full bg-surface border border-stroke p-3 sm:p-4 md:px-7 md:py-4 transition-all duration-300 hover:border-muted/50 hover:bg-surface/80 hover:shadow-xl hover:shadow-black/40"
            >
              {/* Subtle hover accent glow indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-1 accent-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Left: Thumbnail & Title Info */}
                <div className="flex items-center gap-4 md:gap-6 min-w-0">
                  {/* Thumbnail */}
                  <div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl md:rounded-full overflow-hidden border border-stroke/60 bg-bg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="80px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Title & Category */}
                  <div className="min-w-0 pr-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[11px] text-muted uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="text-muted/40">•</span>
                      <span className="text-[11px] text-sky-400/90 font-mono">
                        {item.noteType}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-medium text-text-primary tracking-tight truncate group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Right: Reading time & Open pill */}
                <div className="flex items-center justify-between md:justify-end gap-5 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-stroke/40">
                  <div className="flex items-center gap-1.5 text-xs text-muted font-mono">
                    <Clock size={13} className="text-muted/70" />
                    <span>{item.readTime}</span>
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-stroke/50 group-hover:bg-white group-hover:text-bg text-text-primary text-xs font-medium px-4 py-1.5 transition-all duration-300">
                    <span>Read Note</span>
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Note Preview Lightbox / Modal */}
      <AnimatePresence>
        {selectedNote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedNote(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-xl w-full bg-surface border border-stroke rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-5 border-b border-stroke/60 pb-4">
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-sky-400" />
                  <span className="font-mono text-xs uppercase tracking-wider text-muted">
                    {selectedNote.category} — {selectedNote.noteType}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedNote(null)}
                  className="p-1.5 rounded-full hover:bg-stroke text-muted hover:text-white transition-colors"
                  aria-label="Close note preview"
                >
                  <X size={18} />
                </button>
              </div>

              <h3 className="font-display italic text-2xl md:text-3xl text-text-primary mb-3 leading-snug">
                {selectedNote.title}
              </h3>

              <div className="flex items-center gap-2 text-xs text-muted font-mono mb-6">
                <Clock size={13} />
                <span>{selectedNote.readTime}</span>
                <span>•</span>
                <span>Exploration concept</span>
              </div>

              <p className="text-muted text-sm md:text-base leading-relaxed mb-6 font-normal">
                {selectedNote.excerpt}
              </p>

              <div className="p-4 rounded-2xl bg-bg/60 border border-stroke/50 text-xs text-muted leading-relaxed">
                <span className="font-semibold text-text-primary block mb-1">
                  Topic Exploration Note
                </span>
                This note represents an ongoing research thread in modern web
                development, interaction design patterns, and engineering
                aesthetics.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};


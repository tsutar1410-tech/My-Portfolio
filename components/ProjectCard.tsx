"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-surface border border-stroke transition-all duration-500 hover:border-transparent ${project.desktopCols} w-full min-h-[460px] md:min-h-[520px]`}
    >
      {/* Animated gradient border on hover */}
      <div
        className={`pointer-events-none absolute -inset-[1px] rounded-3xl accent-gradient opacity-0 transition-opacity duration-500 z-30 ${
          isHovered ? "opacity-100" : ""
        }`}
        style={{
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.75] group-hover:brightness-[0.85]"
        />

        {/* Halftone texture overlay */}
        <div className="absolute inset-0 halftone-overlay opacity-60 pointer-events-none" />

        {/* Dark Vignette & Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-surface/20" />

        {/* Hover Overlay with backdrop-blur */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-[3px] transition-opacity duration-400 z-10 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Card Header Content */}
      <div className="relative z-20 flex items-start justify-between p-6 md:p-8">
        <div>
          <span className="font-mono text-xs text-muted/80 tracking-widest uppercase">
            {project.number} — {project.category}
          </span>
          <div className="mt-1 flex items-center gap-2">
            <span
              className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] uppercase font-mono tracking-wider border ${
                project.isConcept
                  ? "border-sky-500/30 bg-sky-950/40 text-sky-300"
                  : "border-emerald-500/30 bg-emerald-950/40 text-emerald-300"
              }`}
            >
              {project.isConcept ? "Concept Design" : "Implementation"}
            </span>
          </div>
        </div>

        {/* Floating View Project Pill */}
        <div
          className={`flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1.5 text-xs text-text-primary border border-white/20 transition-all duration-300 ${
            isHovered ? "scale-105 bg-white text-bg font-medium" : "opacity-90"
          }`}
        >
          <span>View Project</span>
          <ArrowUpRight
            size={13}
            className={`transition-transform duration-300 ${
              isHovered ? "translate-x-0.5 -translate-y-0.5" : ""
            }`}
          />
        </div>
      </div>

      {/* Card Footer Content */}
      <div className="relative z-20 p-6 md:p-8 mt-auto flex flex-col justify-end">
        {/* Project Title */}
        <h3 className="font-display italic text-3xl md:text-4xl text-text-primary mb-2.5 tracking-tight group-hover:text-white transition-colors">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-sm text-muted/90 line-clamp-2 md:line-clamp-3 mb-5 max-w-xl font-normal leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-stroke/40">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-surface/80 backdrop-blur-sm border border-stroke/60 text-[11px] font-mono text-muted group-hover:text-text-primary group-hover:border-stroke transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};


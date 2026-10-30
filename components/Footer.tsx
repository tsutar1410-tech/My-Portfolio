"use client";

import React from "react";
import { PERSONAL_INFO } from "@/lib/projects";

export const Footer: React.FC = () => {
  const currentYear = 2026;

  const socialLinks = [
    { name: "GitHub", href: PERSONAL_INFO.socials.github },
    { name: "LinkedIn", href: PERSONAL_INFO.socials.linkedin },
    { name: "Instagram", href: PERSONAL_INFO.socials.instagram },
    { name: "Dribbble", href: PERSONAL_INFO.socials.dribbble },
  ];

  return (
    <footer className="relative z-10 w-full border-t border-stroke/50 bg-bg/90 backdrop-blur-md py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col gap-10">
        {/* Top Tier: Logo & Social Links */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-stroke/40">
          <div>
            <span className="font-display italic text-3xl md:text-4xl text-text-primary tracking-wide">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-xs text-muted mt-1 font-normal tracking-wide">
              Designed with curiosity. Built with creativity.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase tracking-widest text-muted transition-colors hover:text-white"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Tier: Copyright & Availability status */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted/70">
          <div>
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          {/* Green Pulsing Availability Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full bg-surface border border-stroke px-3.5 py-1.5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10B981]" />
            </span>
            <span className="text-xs font-medium text-text-primary">
              {PERSONAL_INFO.availability}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};


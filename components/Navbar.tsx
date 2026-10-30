"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection?: string;
}

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sections = ["contact", "about", "work", "home"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) {
            setActiveTab(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none">
      <nav
        className={`pointer-events-auto inline-flex items-center gap-1 sm:gap-2 rounded-full border border-white/10 bg-surface/85 backdrop-blur-md px-3 sm:px-4 py-2 transition-all duration-300 ${
          scrolled ? "shadow-2xl shadow-black/80 bg-surface/95 border-stroke" : ""
        }`}
      >
        {/* Text Logo: Tushar (Instrument Serif italic) */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="group relative px-2.5 py-1 text-xl font-display italic text-text-primary transition-colors focus:outline-none"
        >
          <span className="relative z-10 tracking-wide">Tushar</span>
          <span className="absolute left-2.5 right-2.5 -bottom-0.5 h-[1.5px] accent-gradient scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 mx-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wider transition-all duration-200 rounded-full ${
                  isActive
                    ? "text-text-primary bg-stroke/60 font-semibold"
                    : "text-muted hover:text-text-primary hover:bg-stroke/30"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-muted hover:text-text-primary rounded-full hover:bg-stroke/30 ml-1 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-16 left-4 right-4 max-w-sm mx-auto rounded-2xl border border-stroke bg-surface/95 backdrop-blur-xl p-4 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeTab === link.name
                      ? "text-text-primary bg-stroke/60"
                      : "text-muted hover:text-text-primary hover:bg-stroke/20"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};


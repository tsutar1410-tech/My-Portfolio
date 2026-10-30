import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initGSAP = () => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
};

export const TRANSITION_EASE = [0.25, 0.1, 0.25, 1.0];

export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};


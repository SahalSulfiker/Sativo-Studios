import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * SectionTransition — softer, satiostudio.com-style enter/exit:
 * - Subtle scale + fade (no harsh blur on text)
 * - Sections feel like they "rise" into view
 */
export const SectionTransition = ({ children, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0.35, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.96, 1, 1, 0.97]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -30]);

  return (
    <motion.div ref={ref} style={{ opacity, scale, y }} className={`will-change-transform ${className}`}>
      {children}
    </motion.div>
  );
};

/**
 * FloatingSection — wraps a section in a large rounded card container with
 * shadow, giving the satiostudio-like "site hovers above the canvas" effect.
 */
export const FloatingSection = ({ children, className = "" }) => {
  return (
    <div className={`px-3 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-[1400px] rounded-[2rem] sm:rounded-[2.5rem] bg-white/85 backdrop-blur-xl border border-white/60 shadow-[0_30px_80px_-20px_rgba(26,107,255,0.18),0_8px_24px_-8px_rgba(0,0,0,0.06)] overflow-hidden">
        {children}
      </div>
    </div>
  );
};

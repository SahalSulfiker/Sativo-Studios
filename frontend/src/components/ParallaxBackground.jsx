import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * Soft, premium light-blue canvas — gentler than before.
 * Layers: gradient → grid → orbital spirals → blurred orbs → grain.
 * Content scrolls OVER this; sections feel like they hover above the canvas.
 */
export const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();

  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.5 });

  const y1 = useTransform(smooth, [0, 1], [0, -180]);
  const y2 = useTransform(smooth, [0, 1], [0, 220]);
  const y3 = useTransform(smooth, [0, 1], [0, -120]);
  const x1 = useTransform(smooth, [0, 1], [0, 80]);
  const x2 = useTransform(smooth, [0, 1], [0, -100]);
  const spiralRot = useTransform(smooth, [0, 1], [0, 60]);

  return (
    <div aria-hidden="true">
      {/* Base canvas — softer gradient (less saturated) */}
      <div
        className="fixed inset-0 -z-30"
        style={{
          background:
            "radial-gradient(ellipse at 25% 15%, #DDE7FA 0%, #E9EFF9 35%, #F2F5FB 65%, #F7F9FC 100%)",
        }}
      />

      {/* Faint grid */}
      <div
        className="fixed inset-0 -z-20 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(26,107,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,107,255,0.07) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, transparent 80%)",
        }}
      />

      {/* Slow-rotating orbital spirals — desktop only (centered via wrapper below) */}
      <SpiralCenter rotate={spiralRot} />

      {/* Floating blurred orbs — softer */}
      <motion.div
        style={{ y: y1, x: x1 }}
        className="fixed -z-10 top-[10%] -left-32 h-[480px] w-[480px] rounded-full pointer-events-none will-change-transform"
      >
        <div className="absolute inset-0 rounded-full bg-[#1A6BFF]/30 blur-[130px]" />
      </motion.div>

      <motion.div
        style={{ y: y2, x: x2 }}
        className="fixed -z-10 top-[40%] -right-40 h-[600px] w-[600px] rounded-full pointer-events-none will-change-transform"
      >
        <div className="absolute inset-0 rounded-full bg-[#7DA8FF]/35 blur-[150px]" />
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="fixed -z-10 bottom-[8%] left-[30%] h-[380px] w-[380px] rounded-full pointer-events-none will-change-transform"
      >
        <div className="absolute inset-0 rounded-full bg-[#B5CCF7]/45 blur-[120px]" />
      </motion.div>

      {/* Soft top-light wash */}
      <div
        className="fixed inset-x-0 top-0 -z-10 h-[40vh] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, transparent 100%)",
        }}
      />

      {/* Soft bottom wash */}
      <div
        className="fixed inset-x-0 bottom-0 -z-10 h-[30vh] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(255,255,255,0.4) 0%, transparent 100%)",
        }}
      />

      {/* Premium grain */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
};

// Centers the orbital spiral over the viewport (works at any size).
const SpiralCenter = ({ rotate }) => (
  <motion.div
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      width: "120vmax",
      height: "120vmax",
      x: "-50%",
      y: "-50%",
      rotate,
      zIndex: -19,
      pointerEvents: "none",
      willChange: "transform",
    }}
    className="hidden sm:block"
  >
    <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet" className="h-full w-full">
      <g transform="translate(500 500)" stroke="#1A6BFF" fill="none" strokeWidth="0.8">
        <circle r="180" opacity="0.15" />
        <circle r="280" opacity="0.12" strokeDasharray="2 6" />
        <circle r="380" opacity="0.10" />
        <circle r="470" opacity="0.08" strokeDasharray="1 8" />
      </g>
      <g transform="translate(500 500)" fill="none" stroke="#1A6BFF" strokeWidth="1.2" opacity="0.18">
        <path d="M 0 -250 A 250 250 0 0 1 220 120" strokeLinecap="round" />
        <path d="M -360 100 A 380 380 0 0 1 -100 -360" strokeLinecap="round" />
      </g>
      <g fill="#1A6BFF">
        <circle cx="500" cy="220" r="3" opacity="0.6" />
        <circle cx="780" cy="600" r="2.5" opacity="0.5" />
        <circle cx="160" cy="430" r="2" opacity="0.4" />
      </g>
    </svg>
  </motion.div>
);

/**
 * Top scroll progress bar — premium touch.
 */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 25, mass: 0.3 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#1A6BFF] origin-left z-[60]"
      style={{ scaleX }}
      data-testid="scroll-progress"
    />
  );
};

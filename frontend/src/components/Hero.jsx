import React from "react";
import { motion } from "framer-motion";
import { LogoLarge } from "./Logo";
import { ArrowDown, Sparkles } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const SERVICES_PARAGRAPH =
  "We help ambitious brands take their digital presence to the next level. From bespoke web development and conversion-driven e-commerce solutions to refined UI/UX design, results-focused digital marketing, and dedicated long-term support and maintenance — every Sativo experience is engineered with craft, performance, and intention. We blend cinematic design with airtight engineering to ship products that feel premium on every screen and scale gracefully with your business.";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
      data-testid="hero-section"
    >
      {/* Decorative dots top-left */}
      <div className="absolute top-28 left-6 sm:left-12 hidden sm:grid grid-cols-3 gap-2 opacity-60" aria-hidden>
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#1A6BFF]" />
        ))}
      </div>
      {/* Decorative quarter circle top-right */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#1A6BFF]/10 blur-3xl" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          custom={0}
          variants={fade}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm text-zinc-700 mb-10"
          data-testid="hero-eyebrow"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#1A6BFF]" />
          <span className="uppercase tracking-[0.25em] font-medium">Complete Web & Digital Solutions</span>
        </motion.div>

        <motion.div initial="hidden" animate="show" custom={1} variants={fade} className="mb-10">
          <LogoLarge />
        </motion.div>

        <motion.h2
          initial="hidden"
          animate="show"
          custom={2}
          variants={fade}
          className="font-heading text-3xl sm:text-5xl lg:text-6xl tracking-tighter text-black leading-[1.05] mb-10"
          data-testid="hero-headline"
        >
          We take your brand to the
          <span className="text-[#1A6BFF] italic font-light"> next level.</span>
        </motion.h2>

        <motion.p
          initial="hidden"
          animate="show"
          custom={3}
          variants={fade}
          className="font-body max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-600"
          data-testid="hero-services-paragraph"
        >
          {SERVICES_PARAGRAPH}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={4}
          variants={fade}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton>
            <a
              href="#work"
              data-testid="hero-view-work-button"
              className="group inline-flex items-center gap-2 rounded-full bg-black text-white px-7 py-3.5 text-sm font-medium hover:bg-[#1A6BFF] transition-all duration-300"
            >
              View Our Work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#contact"
              data-testid="hero-start-project-button"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/70 backdrop-blur px-7 py-3.5 text-sm font-medium text-black hover:border-[#1A6BFF] hover:text-[#1A6BFF] transition-all"
            >
              Start a Project
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-gradient-to-b from-zinc-400 to-transparent"
        />
      </motion.div>
    </section>
  );
};

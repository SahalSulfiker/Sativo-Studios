import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, Globe, Sparkles, Zap, ExternalLink } from "lucide-react";

// Real client work — bataatas.in is featured first as the flagship project.
const WORKS = [
  {
    id: "bataatas",
    name: "Bataatas",
    category: "Restaurant / F&B Brand",
    year: "2026",
    tagline: "A bold, appetite-first brand experience.",
    liveUrl: "https://bataatas.in/",
    previewUrl: "https://bataatas.in/",
    description:
      "A flavour-packed digital home for Bataatas — designed to make visitors hungry from the very first scroll. Cinematic typography, mouth-watering imagery, smooth menu navigation, and a frictionless ordering journey that turns curious browsers into repeat customers.",
    features: [
      "Cinematic Brand Storytelling",
      "Mobile-First Menu Flow",
      "Direct Order Integration",
      "Lightning-Fast Performance",
    ],
  },
  {
    id: "easytravels",
    name: "Easy Travels Online",
    category: "Travel / Booking Platform",
    year: "2026",
    tagline: "Plan, book, and wander — all in one place.",
    liveUrl: "https://easytravelsonline.netlify.app/",
    previewUrl: "https://easytravelsonline.netlify.app/",
    description:
      "A modern travel discovery platform that makes booking trips feel as exciting as taking them. Curated destinations, intuitive search, and a refined booking interface engineered for trust and conversion across every device.",
    features: [
      "Destination Discovery UI",
      "Seamless Booking Flow",
      "Responsive on Every Device",
      "Conversion-Optimised CTAs",
    ],
  },
];

const WorkCard = ({ work, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered((h) => !h)}
      className="group relative overflow-hidden rounded-3xl border border-black/5 bg-[#F9F9FB] cursor-pointer"
      data-testid={`portfolio-card-${work.id}`}
    >
      {/* Top meta strip */}
      <div className="flex items-center justify-between px-6 sm:px-8 pt-6 sm:pt-8 pb-3 relative z-20">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-2 w-2 rounded-full bg-[#1A6BFF] animate-pulse" />
          <span className="font-body text-xs uppercase tracking-[0.25em] text-zinc-500">
            {work.category}
          </span>
        </div>
        <span className="font-body text-xs text-zinc-400">{work.year}</span>
      </div>

      {/* Title */}
      <div className="px-6 sm:px-8 pb-6 relative z-20">
        <h3 className="font-heading text-3xl sm:text-4xl tracking-tight text-black">
          {work.name}
        </h3>
        <p className="font-body text-sm sm:text-base text-zinc-500 mt-1">{work.tagline}</p>
      </div>

      {/* Preview frame */}
      <div className="relative mx-3 sm:mx-5 mb-3 sm:mb-5 aspect-[16/10] overflow-hidden rounded-2xl bg-white border border-black/5">
        {/* Browser chrome */}
        <div className="absolute top-0 left-0 right-0 h-7 bg-white/90 backdrop-blur-md border-b border-black/5 flex items-center px-3 gap-1.5 z-30">
          <span className="h-2 w-2 rounded-full bg-red-300/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-300/70" />
          <span className="h-2 w-2 rounded-full bg-green-300/70" />
          <div className="ml-3 h-3 flex-1 max-w-xs rounded-full bg-black/5 flex items-center px-2">
            <span className="font-body text-[9px] text-zinc-400 truncate">{work.liveUrl}</span>
          </div>
        </div>

        {/* Live iframe preview — scaled down so the hero fits, pointer-events disabled */}
        <motion.div
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 pt-7"
        >
          <div className="relative h-full w-full overflow-hidden bg-white">
            <iframe
              src={work.previewUrl}
              title={work.name}
              loading="lazy"
              sandbox="allow-same-origin allow-scripts"
              className="absolute top-0 left-0 pointer-events-none origin-top-left"
              style={{
                width: "200%",
                height: "200%",
                transform: "scale(0.5)",
                transformOrigin: "top left",
                border: "0",
              }}
            />
          </div>
        </motion.div>

        {/* Hover glass overlay with description */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 z-40 flex flex-col justify-end p-5 sm:p-7 glass-strong"
              data-testid={`portfolio-overlay-${work.id}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-[#1A6BFF]" />
                <span className="font-body text-[11px] uppercase tracking-[0.3em] text-[#1A6BFF] font-semibold">
                  Project Highlights
                </span>
              </div>
              <p className="font-body text-sm sm:text-base text-zinc-800 leading-relaxed mb-4">
                {work.description}
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                {work.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 font-body text-xs sm:text-sm text-zinc-700"
                  >
                    <Zap className="h-3.5 w-3.5 text-[#1A6BFF]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={work.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                data-testid={`portfolio-visit-${work.id}`}
                className="inline-flex items-center gap-2 self-start rounded-full bg-black text-white px-4 py-2 text-xs font-medium hover:bg-[#1A6BFF] transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Visit Live Site
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom gradient ribbon */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/5 to-transparent pointer-events-none z-20" />
      </div>

      {/* Corner CTA */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-30">
        <motion.div
          animate={{ rotate: hovered ? 45 : 0 }}
          transition={{ duration: 0.4 }}
          className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center"
        >
          <ArrowUpRight className="h-4 w-4" />
        </motion.div>
      </div>
    </motion.article>
  );
};

export const Portfolio = () => {
  return (
    <section
      id="work"
      className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8"
      data-testid="portfolio-section"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 sm:mb-20 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Globe className="h-4 w-4 text-[#1A6BFF]" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-[#1A6BFF] font-semibold">
              Selected Work
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-black leading-[1.05]">
            Crafted with
            <span className="text-[#1A6BFF] italic font-light"> obsession.</span>
          </h2>
          <p className="font-body mt-5 text-base sm:text-lg text-zinc-600 max-w-xl">
            Hover or tap any project to see it live and read the story behind it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {WORKS.map((w, i) => (
            <WorkCard key={w.id} work={w} index={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            disabled
            data-testid="portfolio-show-more-button"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-6 py-3 text-sm font-medium text-zinc-500 cursor-not-allowed"
            title="More works coming soon"
          >
            <span>More works coming soon</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

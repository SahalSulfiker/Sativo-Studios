import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { ArrowUpRight } from "lucide-react";

const NAV = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
      data-testid="site-header"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-[0_8px_30px_rgba(0,0,0,0.06)]" : "bg-transparent"
          }`}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-testid="header-logo-button"
            aria-label="Sativo Studios"
          >
            <Logo />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                data-testid={`nav-${item.id}-link`}
                className="relative font-body text-sm text-zinc-700 hover:text-black transition-colors group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[#1A6BFF] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo("contact")}
            data-testid="header-cta-button"
            className="group inline-flex items-center gap-1.5 rounded-full bg-black text-white px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-medium hover:bg-[#1A6BFF] transition-all duration-300"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

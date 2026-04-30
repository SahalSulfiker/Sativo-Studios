import React from "react";
import { Logo } from "./Logo";
import { Mail, Phone, ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-black/5 bg-white/60 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <Logo />
            <p className="font-body text-sm text-zinc-500 mt-3 max-w-xs">
              Complete web & digital solutions, made with obsession.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 font-body text-sm text-zinc-600">
            <a
              href="mailto:sativostudios@gmail.com"
              className="inline-flex items-center gap-2 hover:text-[#1A6BFF] transition-colors"
              data-testid="footer-email-link"
            >
              <Mail className="h-4 w-4" />
              sativostudios@gmail.com
            </a>
            <a
              href="tel:+919061673057"
              className="inline-flex items-center gap-2 hover:text-[#1A6BFF] transition-colors"
              data-testid="footer-phone-link"
            >
              <Phone className="h-4 w-4" />
              +91 90616 73057
            </a>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-testid="footer-back-to-top"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium text-zinc-700 hover:border-[#1A6BFF] hover:text-[#1A6BFF] transition-all"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            Back to top
          </button>
        </div>

        <div className="mt-10 pt-6 border-t border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-body text-xs text-zinc-400">
            © {new Date().getFullYear()} Sativo Studios. All rights reserved.
          </p>
          <p className="font-body text-xs text-zinc-400 uppercase tracking-[0.25em]">
            Crafted with care · India
          </p>
        </div>
      </div>
    </footer>
  );
};

import React from "react";

// Custom SATIVO logo: letter "A" replaced by a right-pointing triangle (#1A6BFF)
export const Logo = ({ size = "default", showSubtitle = false, className = "" }) => {
  const heightClass = size === "lg" ? "h-12 sm:h-16" : "h-7 sm:h-8";
  const subClass = size === "lg" ? "text-xs sm:text-sm tracking-[0.5em]" : "text-[10px] tracking-[0.4em]";

  return (
    <div className={`flex flex-col items-start ${className}`} data-testid="brand-logo">
      <div className={`flex items-center gap-[2px] font-heading font-medium text-black ${heightClass}`}>
        <span className="leading-none" style={{ fontSize: "inherit" }}>S</span>
        {/* "A" as triangle play icon */}
        <svg
          viewBox="0 0 24 28"
          className="inline-block"
          style={{ height: "0.85em", width: "0.75em" }}
          aria-label="A"
        >
          <polygon points="12,2 24,26 0,26" fill="#1A6BFF" />
          <rect x="6" y="20" width="12" height="2.5" fill="#FFFFFF" />
        </svg>
        <span className="leading-none">TIVO</span>
      </div>
      {showSubtitle && (
        <span className={`mt-2 font-body uppercase text-[#1A6BFF] font-medium ${subClass}`}>
          Studios
        </span>
      )}
    </div>
  );
};

export const LogoLarge = () => (
  <div className="flex flex-col items-center" data-testid="brand-logo-large">
    <div
      className="flex items-center font-heading font-medium text-black leading-none"
      style={{ fontSize: "clamp(3.5rem, 12vw, 9rem)", letterSpacing: "0.02em" }}
    >
      <span>S</span>
      <svg
        viewBox="0 0 24 28"
        className="inline-block mx-[0.04em]"
        style={{ height: "0.85em", width: "0.75em" }}
        aria-label="A"
      >
        <polygon points="12,2 24,26 0,26" fill="#1A6BFF" />
        <rect x="6" y="20" width="12" height="3" fill="#FFFFFF" />
      </svg>
      <span>TIVO</span>
    </div>
    <div
      className="mt-2 sm:mt-3 font-body font-medium text-[#1A6BFF] uppercase"
      style={{ letterSpacing: "0.6em", fontSize: "clamp(0.7rem, 1.6vw, 1.25rem)", paddingLeft: "0.6em" }}
    >
      Studios
    </div>
  </div>
);

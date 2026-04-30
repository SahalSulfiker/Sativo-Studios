import React from "react";

const ITEMS = [
  "Web Development",
  "E-Commerce Solutions",
  "UI / UX Design",
  "Digital Marketing",
  "Support & Maintenance",
  "Brand Identity",
  "Performance Engineering",
];

export const MarqueeStrip = () => {
  const all = [...ITEMS, ...ITEMS]; // duplicate for seamless loop
  return (
    <div
      className="relative overflow-hidden border-y border-black/5 bg-black text-white py-5"
      data-testid="services-marquee"
      aria-hidden="true"
    >
      <div className="flex gap-12 whitespace-nowrap animate-marquee w-max">
        {all.map((item, i) => (
          <div key={i} className="flex items-center gap-12 font-heading">
            <span className="text-2xl sm:text-3xl tracking-tight">{item}</span>
            <span className="h-2 w-2 rounded-full bg-[#1A6BFF]" />
          </div>
        ))}
      </div>
    </div>
  );
};

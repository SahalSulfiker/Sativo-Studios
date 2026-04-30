import React from "react";
import { motion } from "framer-motion";
import { Rocket, Heart, Compass } from "lucide-react";

const PILLARS = [
  {
    icon: Rocket,
    title: "Built to launch.",
    body:
      "We move fast without breaking craft — shipping production-grade work in weeks, not months.",
  },
  {
    icon: Heart,
    title: "Made with care.",
    body:
      "Every pixel, every interaction, every line of code is treated like it's our own brand on the line.",
  },
  {
    icon: Compass,
    title: "Always your partner.",
    body:
      "We don't disappear after launch — we stay close, iterate fast, and grow with your business.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8"
      data-testid="about-section"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <span className="inline-block font-body text-xs uppercase tracking-[0.3em] text-[#1A6BFF] font-semibold mb-6">
              — About Sativo
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-black leading-[1.05]">
              A new studio.
              <br />
              <span className="text-[#1A6BFF] italic font-light">Wildly enthusiastic.</span>
            </h2>
            <p className="font-body mt-8 text-base sm:text-lg text-zinc-600 leading-relaxed">
              Sativo Studios is a young, hungry team obsessed with shipping web experiences
              that feel alive. We blend the precision of Apple-grade design with the
              ambition of an early-stage startup — the kind of place where every project
              gets a founder's attention, every brief becomes a personal challenge, and
              every client gets answers, fast.
            </p>
            <p className="font-body mt-5 text-base sm:text-lg text-zinc-600 leading-relaxed">
              We're small on purpose. It means we care more, iterate faster, and treat
              your launch like our launch — because, frankly, it kind of is.
            </p>
          </motion.div>

          {/* Right column - pillars */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl border border-black/5 bg-white/70 backdrop-blur-md p-7 sm:p-9 hover:border-[#1A6BFF]/40 hover:bg-white transition-all duration-500"
                data-testid={`about-pillar-${i}`}
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#1A6BFF]/10 text-[#1A6BFF] group-hover:bg-[#1A6BFF] group-hover:text-white transition-colors duration-500">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl tracking-tight text-black">
                      {p.title}
                    </h3>
                    <p className="font-body mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-3 gap-3 sm:gap-6 pt-4"
            >
              {[
                { k: "100%", v: "Founder-led" },
                { k: "<2wk", v: "Avg. launch" },
                { k: "24/7", v: "Support" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-2xl border border-black/5 bg-[#F9F9FB] p-4 sm:p-6 text-center"
                >
                  <div className="font-heading text-2xl sm:text-3xl text-black">{s.k}</div>
                  <div className="font-body text-[11px] sm:text-xs uppercase tracking-[0.2em] text-zinc-500 mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

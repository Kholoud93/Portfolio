import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-32 pb-20 px-6 md:px-10 overflow-hidden gradient-noir"
    >
      {/* Side meta */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 font-mono text-[10px] uppercase tracking-[0.4em] text-bone/40 [writing-mode:vertical-rl] rotate-180">
        <span>Alexandria · Egypt</span>
        <span className="h-16 w-px bg-bone/20" />
        <span>Available 2026</span>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 font-mono text-[10px] uppercase tracking-[0.4em] text-bone/40 [writing-mode:vertical-rl]">
        <span>Portfolio · MMXXVI</span>
        <span className="h-16 w-px bg-bone/20" />
        <span>v.01</span>
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        {/* Top meta strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-12 md:mb-20 font-mono text-[11px] uppercase tracking-[0.25em] text-bone/50"
        >
          <span>—— A monograph of frontend craft</span>
          <span>Index № 001 / Kholoud Ayman</span>
        </motion.div>

        {/* Hero grid */}
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Headline */}
          <div className="col-span-12 lg:col-span-8 order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="font-display text-[clamp(3.5rem,11vw,11rem)] leading-[0.85] tracking-[-0.02em]"
            >
              <motion.span
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Pixels with
              </motion.span>
              <motion.span
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="block italic text-ember"
              >
                purpose,
              </motion.span>
              <motion.span
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                code with
              </motion.span>
              <motion.span
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.85, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="block text-stroke italic"
              >
                conviction.
              </motion.span>
            </motion.h1>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-4 order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] max-w-[360px] mx-auto lg:ml-auto overflow-hidden rounded-sm shadow-deep">
              <img
                src={portrait}
                alt="Kholoud Ayman portrait"
                width={896}
                height={1152}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 font-mono text-[10px] uppercase tracking-[0.25em] text-bone/80 flex items-center justify-between">
                <span>Plate I.</span>
                <span>2026</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom intro row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="grid grid-cols-12 gap-6 mt-16 md:mt-24 pt-10 border-t border-border"
        >
          <div className="col-span-12 md:col-span-3 font-mono text-[11px] uppercase tracking-[0.25em] text-bone/50">
            <p>§ 01 — Introduction</p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="text-lg md:text-xl text-bone/85 leading-relaxed">
              I'm <span className="text-ember">Kholoud Ayman</span> — a frontend
              engineer building scalable, performant interfaces with React,
              Next.js, Vue & Nuxt. I ship production-ready products for startups
              and international teams from <em className="font-display">Alexandria.</em>
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 flex md:justify-end items-end">
            <a
              href="#work"
              className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-bone hover:text-ember transition-colors group"
            >
              <span>See selected work</span>
              <span className="h-px w-8 bg-current group-hover:w-12 transition-all" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
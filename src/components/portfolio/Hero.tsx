import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="section-shell relative min-h-screen pt-34 md:pt-42 overflow-hidden gradient-noir"
    >
      <div className="absolute inset-0 gradient-mesh opacity-70 pointer-events-none" />
      <motion.div
        animate={{ y: [0, -16, 0], x: [0, 12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-16 left-[10%] h-56 w-56 rounded-full bg-ember/20 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 12, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[8%] h-52 w-52 rounded-full bg-violet/25 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, -8, 0], x: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-14 left-[36%] h-40 w-40 rounded-full bg-sage/20 blur-3xl pointer-events-none"
      />

      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 font-mono text-[10px] uppercase tracking-[0.4em] text-bone/40 [writing-mode:vertical-rl] rotate-180">
        <span>Alexandria · Egypt</span>
        <span className="h-16 w-px bg-bone/20" />
        <span>Open for remote roles</span>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 font-mono text-[10px] uppercase tracking-[0.4em] text-bone/40 [writing-mode:vertical-rl]">
        <span>CraftFolio</span>
        <span className="h-16 w-px bg-bone/20" />
        <span>v.02</span>
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-12 md:mb-24 font-mono text-[11px] uppercase tracking-[0.25em] text-bone/55"
        >
          <span>Building interfaces that drive product growth</span>
          <span>Index № 002 / Kholoud Ayman</span>
        </motion.div>

        <div className="grid grid-cols-12 gap-7 md:gap-8 items-center">
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="font-display text-[clamp(3.1rem,10.8vw,10.4rem)] leading-[0.86] tracking-[-0.02em]"
            >
              <motion.span
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Frontend systems
              </motion.span>
              <motion.span
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="block italic text-ember"
              >
                engineered
              </motion.span>
              <motion.span
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                for scale,
              </motion.span>
              <motion.span
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.85, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="block text-gradient italic"
              >
                speed, and impact.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-10 max-w-2xl text-base md:text-xl text-bone/80 leading-relaxed"
            >
              Mid-level frontend engineer specialized in React, Next.js, Vue, and Nuxt, shipping dashboards,
              CRM platforms, booking systems, and conversion-focused landing pages for international teams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-ember text-ink font-mono text-xs uppercase tracking-[0.2em] hover:scale-[1.03] transition-transform shadow-ember"
              >
                View projects
                <span aria-hidden>↗</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full surface-card ring-premium text-bone font-mono text-xs uppercase tracking-[0.2em] hover:border-ember hover:text-ember transition-colors"
              >
                Book interview
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-5 order-1 lg:order-2 relative"
          >
            <div className="relative aspect-3/4 max-w-[440px] xl:max-w-[480px] mx-auto lg:ml-auto overflow-hidden rounded-2xl shadow-deep ring-premium">
              <img
                src={portrait}
                alt="Kholoud Ayman portrait"
                width={896}
                height={1152}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 font-mono text-[10px] uppercase tracking-[0.25em] text-bone/80 flex items-center justify-between">
                <span>Plate I.</span>
                <span>2026</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="surface-card rounded-2xl ring-premium grid grid-cols-12 gap-6 mt-16 md:mt-24 p-6 md:p-9"
        >
          <div className="col-span-12 md:col-span-3 font-mono text-[11px] uppercase tracking-[0.25em] text-bone/50">
            <p>§ 01 — Executive Profile</p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="text-lg md:text-xl text-bone/85 leading-relaxed">
              I am <span className="text-ember">Kholoud Ayman</span>, a frontend engineer building reliable web products
              with strong performance, accessibility, and maintainable architecture for fast-moving teams.
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
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

type Repo = {
  name: string;
  desc: string;
  stack: string;
  live?: string;
  repo: string;
  year: string;
};

const repos: Repo[] = [
  {
    name: "Depth Wave",
    desc: "Interactive depth-based visual experience built with TypeScript & modern web APIs.",
    stack: "TypeScript · React",
    live: "https://depth-wave.vercel.app",
    repo: "https://github.com/Kholoud93/Depth-Wave",
    year: "2026",
  },
  {
    name: "Frontend Takaful",
    desc: "Insurance-style frontend interface — clean layouts, responsive flows, and considered typography.",
    stack: "React · Tailwind",
    live: "https://frontend-takaful.vercel.app",
    repo: "https://github.com/Kholoud93/frontend-takaful",
    year: "2025",
  },
  {
    name: "DataOrbit",
    desc: "Internal data platform — dashboards, dynamic tables, filters and forms with Redux Toolkit.",
    stack: "React · Redux Toolkit",
    live: "https://data-orbit.vercel.app",
    repo: "https://github.com/Kholoud93/dataOrbit",
    year: "2025",
  },
  {
    name: "Nuxt 3 Users CRUD",
    desc: "End-to-end CRUD application built with Nuxt 3 — composables, server routes, and reactive state.",
    stack: "Nuxt 3 · Vue",
    live: "https://nuxt3-users-crud.vercel.app",
    repo: "https://github.com/Kholoud93/nuxt3-users-crud",
    year: "2025",
  },
  {
    name: "Quiz App",
    desc: "A Next.js quiz experience with timed questions, scoring logic and a polished result screen.",
    stack: "Next.js · React",
    live: "https://quiz-app-next-js-five.vercel.app",
    repo: "https://github.com/Kholoud93/Quiz-app-Next.js",
    year: "2025",
  },
  {
    name: "Movie App",
    desc: "Movie discovery interface consuming a REST API — search, browse and detail views.",
    stack: "JavaScript · API",
    live: "https://movie-app-zeta-mauve.vercel.app",
    repo: "https://github.com/Kholoud93/Movie-app",
    year: "2025",
  },
  {
    name: "Prayer Timing",
    desc: "Daily prayer schedule app with location-aware data and a calm, focused UI.",
    stack: "JavaScript · API",
    live: "https://prayer-timing-one.vercel.app",
    repo: "https://github.com/Kholoud93/Prayer-Timing",
    year: "2025",
  },
  {
    name: "ToDo Redux",
    desc: "Task manager built around Redux state patterns — add, filter, persist, and complete.",
    stack: "React · Redux",
    live: "https://to-do-redux-eight-nu.vercel.app",
    repo: "https://github.com/Kholoud93/ToDo-Redux",
    year: "2025",
  },
  {
    name: "Multi-step Form",
    desc: "Type-safe multi-step form with validation, progress and a refined component API.",
    stack: "TypeScript · React",
    repo: "https://github.com/Kholoud93/Multi-step-form",
    year: "2025",
  },
  {
    name: "Mini E-commerce CRUD",
    desc: "Lightweight commerce CRUD — products, cart logic, and a clean admin flow.",
    stack: "JavaScript",
    repo: "https://github.com/Kholoud93/mini-Ecommerce-Crud",
    year: "2025",
  },
  {
    name: "Currency Converter",
    desc: "Real-time currency conversion with a typed API client and a minimal interface.",
    stack: "TypeScript",
    repo: "https://github.com/Kholoud93/currency-converter",
    year: "2025",
  },
  {
    name: "Orphan Vue",
    desc: "Vue-based interface exploring component composition and state patterns.",
    stack: "Vue",
    repo: "https://github.com/Kholoud93/orphan-vue",
    year: "2025",
  },
];

export function Lab() {
  return (
    <section id="lab" className="relative py-24 md:py-40 px-6 md:px-10 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24 items-end">
          <div className="col-span-12 md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone/50 mb-4">
              § 03 — The Lab
            </p>
            <h2 className="font-display text-6xl md:text-8xl leading-[0.9] tracking-tight">
              Open
              <br />
              <span className="italic text-ember">source</span>
              <br />
              <span className="text-stroke italic">notebook.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="text-lg text-bone/70 leading-relaxed mb-6">
              A working archive of experiments, side projects and shipped demos
              from my <span className="text-ember">GitHub</span> — React, Vue,
              Nuxt, Next.js and TypeScript.
            </p>
            <a
              href="https://github.com/Kholoud93"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-3 group"
            >
              <Github className="w-4 h-4 text-bone/70 group-hover:text-ember transition-colors" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-bone/70 group-hover:text-ember transition-colors">
                github.com/Kholoud93
              </span>
              <span className="h-px w-8 bg-border group-hover:w-12 group-hover:bg-ember transition-all" />
            </a>
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {repos.map((r, i) => (
            <motion.li
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background p-7 md:p-9 group relative hover:bg-card transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/40">
                  № {String(i + 1).padStart(2, "0")} · {r.year}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-ember/60 group-hover:bg-ember group-hover:scale-150 transition-all" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl leading-[1] tracking-tight mb-3 group-hover:text-ember transition-colors">
                {r.name}
              </h3>
              <p className="text-sm text-bone/65 leading-relaxed mb-6 min-h-[3.5rem]">
                {r.desc}
              </p>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50 mb-8">
                {r.stack}
              </div>
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                {r.live && (
                  <a
                    href={r.live}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-bone hover:text-ember transition-colors"
                  >
                    <span>Live</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
                <a
                  href={r.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/60 hover:text-ember transition-colors ml-auto"
                >
                  <Github className="w-3 h-3" />
                  <span>Source</span>
                </a>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

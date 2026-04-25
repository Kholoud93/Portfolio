import { motion } from "framer-motion";

const experience = [
  {
    role: "Frontend Developer",
    company: "Quanizon",
    type: "Remote",
    period: "10 / 2025 — Present",
    notes: ["Nuxt 3 · Composition API", "Production-level projects", "Reusable component architecture"],
  },
  {
    role: "Frontend Developer",
    company: "DataOrbit",
    type: "Hybrid",
    period: "05 / 2025 — 03 / 2026",
    notes: ["React.js · Tailwind CSS", "Dashboards & internal systems", "Code reviews · clean Git workflows"],
  },
  {
    role: "React Native Developer",
    company: "International Startup",
    type: "Remote · Contract",
    period: "2025 — Present",
    notes: ["Cross-platform mobile apps", "Auth · notifications · APIs", "Remote async collaboration"],
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    type: "Remote",
    period: "03 / 2024 — Present",
    notes: ["Production sites & dashboards", "Direct client delivery", "End-to-end ownership"],
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-40 px-6 md:px-10 bg-card">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone/50 mb-4">
              § 03 — Curriculum
            </p>
            <h2 className="font-display text-6xl md:text-8xl leading-[0.9] tracking-tight">
              The
              <br />
              <span className="italic text-ember">record.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <p className="font-display text-2xl md:text-3xl leading-snug text-bone/90">
              <span className="text-ember">"</span>I enjoy working in collaborative
              environments, solving real business problems, and turning
              requirements into reliable production-ready solutions.<span className="text-ember">"</span>
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-bone/50 mt-6">
              — From the cover letter
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="border-t border-border">
          {experience.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="grid grid-cols-12 gap-6 py-10 border-b border-border group hover:bg-background/40 transition-colors -mx-6 px-6 md:-mx-10 md:px-10"
            >
              <div className="col-span-12 md:col-span-2 font-mono text-xs uppercase tracking-[0.2em] text-bone/50 pt-2">
                {e.period}
              </div>
              <div className="col-span-12 md:col-span-4">
                <h3 className="font-display text-3xl md:text-4xl leading-tight">
                  {e.role}
                </h3>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember mt-2">
                  {e.company} <span className="text-bone/40">/ {e.type}</span>
                </p>
              </div>
              <ul className="col-span-12 md:col-span-5 md:col-start-8 space-y-2">
                {e.notes.map((n) => (
                  <li key={n} className="text-bone/70 flex items-start gap-3">
                    <span className="text-ember mt-2">—</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education + languages */}
        <div className="grid grid-cols-12 gap-6 mt-20">
          <div className="col-span-12 md:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone/50 mb-6">
              Education
            </p>
            <ul className="space-y-4">
              <li>
                <p className="font-display text-2xl">Frontend Development Diploma</p>
                <p className="text-bone/60 text-sm">Route Academy · 500+ practical hours</p>
              </li>
              <li>
                <p className="font-display text-2xl">B.Sc. Pharmacy</p>
                <p className="text-bone/60 text-sm">Alexandria University · 2011 — 2017</p>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone/50 mb-6">
              Languages
            </p>
            <ul className="space-y-3 font-display text-2xl">
              <li className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
                <span>Arabic</span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-bone/50">Native</span>
              </li>
              <li className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
                <span>English</span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-bone/50">Professional</span>
              </li>
              <li className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
                <span>German</span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-bone/50">Basic</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
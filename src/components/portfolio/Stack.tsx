import { motion } from "framer-motion";
import { Braces, Palette, Database, Rocket } from "lucide-react";

const groups = [
  {
    title: "Frontend",
    items: ["React", "Next", "Vue", "Nuxt", "JavaScript", "TypeScript"],
    level: 95,
    icon: Braces,
  },
  {
    title: "Styling",
    items: ["Tailwind", "CSS", "Responsive Design"],
    level: 92,
    icon: Palette,
  },
  {
    title: "State",
    items: ["Redux", "Zustand", "Pinia"],
    level: 90,
    icon: Database,
  },
  {
    title: "Other",
    items: ["Git", "REST APIs", "Performance", "SEO"],
    level: 91,
    icon: Rocket,
  },
];

export function Stack() {
  return (
    <section id="stack" className="section-shell">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone/50 mb-4">
              § 05 — Toolkit
            </p>
            <h2 className="font-display text-6xl md:text-8xl leading-[0.9] tracking-tight">
              Stack &<br />
              <span className="italic text-ember">discipline.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 self-end">
            <p className="text-lg text-bone/70 leading-relaxed">
              The technologies I use to deliver maintainable, performant products that stay consistent across devices and grow with business needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="surface-card ring-premium rounded-2xl p-8 md:p-10 group"
            >
              <div className="flex items-center justify-between mb-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-bone/60">
                  {g.title}
                </p>
                <div className="h-8 w-8 rounded-full bg-background/60 border border-border flex items-center justify-center">
                  <g.icon className="w-4 h-4 text-ember" />
                </div>
              </div>
              <ul className="flex flex-wrap gap-2 mb-7">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-border bg-background/55 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-bone/85"
                  >
                    {it}
                  </li>
                ))}
              </ul>
              <div className="space-y-2">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em]">
                  <span className="text-bone/60">Proficiency</span>
                  <span className="text-ember">{g.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-background/65 border border-border overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${g.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.08 }}
                    className="h-full rounded-full bg-gradient-to-r from-ember to-violet-400"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";

const groups = [
  {
    title: "Frameworks",
    items: ["React.js", "Next.js", "Vue.js", "Nuxt 3", "React Native"],
  },
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript ES6+", "HTML5", "CSS3"],
  },
  {
    title: "State & Data",
    items: ["Redux Toolkit", "Zustand", "Pinia", "React Query", "Axios"],
  },
  {
    title: "Styling",
    items: ["Tailwind CSS", "Sass", "Material UI", "Bootstrap"],
  },
  {
    title: "Engineering",
    items: ["Git · GitHub", "Docker", "Linux", "CI/CD", "Jest"],
  },
  {
    title: "Practice",
    items: ["Performance", "Accessibility", "SEO", "Responsive · Mobile-first", "Agile / Scrum"],
  },
];

export function Stack() {
  return (
    <section id="stack" className="relative py-24 md:py-40 px-6 md:px-10">
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
              The instruments I reach for daily — chosen for clarity,
              maintainability, and the kind of performance users actually feel.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="bg-background p-8 md:p-10 group hover:bg-card transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone/50">
                  {g.title}
                </p>
                <span className="font-mono text-[11px] text-ember">
                  0{i + 1}
                </span>
              </div>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="font-display text-2xl md:text-3xl leading-tight text-bone/90 group-hover:text-bone transition-colors"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
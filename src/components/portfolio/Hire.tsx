import { motion } from "framer-motion";

const whyWorkWithMe = [
  "Product-focused frontend decisions that support measurable business outcomes",
  "Reliable delivery with clean architecture, reusable UI, and maintainable code",
  "Strong async collaboration with product, design, and backend teams",
];

const processSteps = [
  { step: "01", title: "Discover", text: "Align on goals, users, metrics, and constraints before implementation." },
  { step: "02", title: "Design Systematically", text: "Plan reusable UI patterns and information hierarchy to reduce rework." },
  { step: "03", title: "Build and Validate", text: "Ship accessible, responsive features with clear QA checkpoints and performance checks." },
  { step: "04", title: "Optimize and Scale", text: "Refine UX details, remove bottlenecks, and prepare the codebase for long-term growth." },
];

const buildTypes = [
  "Dashboards and analytics interfaces",
  "CRM and operations systems",
  "Booking and scheduling products",
  "High-conversion landing pages",
  "Reusable design-system-driven UI layers",
];

export function Hire() {
  return (
    <section id="hire" className="section-shell bg-card border-y border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone/50 mb-4">
              § 06 — Hiring Readiness
            </p>
            <h2 className="font-display text-5xl md:text-8xl leading-[0.9] tracking-tight">
              Why teams
              <br />
              <span className="italic text-ember">hire me.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 self-end">
            <p className="text-lg text-bone/75 leading-relaxed">
              I build frontend products that are easy to ship, easy to maintain, and ready to support business growth.
            </p>
          </div>
        </div>

        <div className="surface-card ring-premium rounded-2xl grid grid-cols-12 gap-6 mb-16 p-6 md:p-8">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone/50">Why Work With Me</p>
          </div>
          <ul className="col-span-12 md:col-span-8 space-y-3">
            {whyWorkWithMe.map((item) => (
              <li key={item} className="text-bone/80 text-base md:text-lg leading-relaxed flex items-start gap-3">
                <span className="text-ember mt-2">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {processSteps.map((step, i) => (
            <motion.article
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="surface-card ring-premium rounded-2xl p-8 md:p-10"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember mb-4">{step.step}</p>
              <h3 className="font-display text-3xl leading-tight mb-3">{step.title}</h3>
              <p className="text-bone/70 leading-relaxed">{step.text}</p>
            </motion.article>
          ))}
        </div>

        <div className="surface-card ring-premium rounded-2xl grid grid-cols-12 gap-6 items-end p-6 md:p-8">
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone/50 mb-5">What I Build</p>
            <ul className="space-y-2">
              {buildTypes.map((type) => (
                <li key={type} className="font-display text-2xl md:text-3xl text-bone/90">
                  {type}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-5 md:justify-self-end">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-ember text-ink font-mono text-xs uppercase tracking-[0.2em] hover:scale-[1.03] transition-transform"
            >
              Contact for remote role
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

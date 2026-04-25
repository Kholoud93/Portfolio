import { motion } from "framer-motion";
import megabox from "@/assets/project-megabox.jpg";
import qebaa from "@/assets/project-qebaa.jpg";
import dashboard from "@/assets/project-dashboard.jpg";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    name: "Megabox",
    tag: "Freelance · E-commerce",
    year: "2024",
    role: "Design + Build",
    stack: ["React.js", "Tailwind CSS", "Vite"],
    desc: "A modern, fully responsive storefront built around reusable components and a tight performance budget. Built end-to-end and shipped to production.",
    href: "https://megabox-eight.vercel.app/",
    img: megabox,
    accent: "ember",
  },
  {
    n: "02",
    name: "Qebaa Clinic",
    tag: "Saudi Arabia · Healthcare",
    year: "2024",
    role: "Frontend Engineering",
    stack: ["React.js", "Tailwind CSS", "REST APIs"],
    desc: "A bilingual medical clinic platform for a Saudi-based company — services, doctor profiles, contact flows, FAQs. Mobile-first, accessibility-aware.",
    href: "https://qebaa-clinic.vercel.app/",
    img: qebaa,
    accent: "sage",
  },
  {
    n: "03",
    name: "DataOrbit Dashboards",
    tag: "Production · Internal Systems",
    year: "2025",
    role: "Frontend Developer",
    stack: ["React.js", "Tailwind CSS", "Redux Toolkit"],
    desc: "Dashboards, dynamic data tables, filters and forms for an internal business platform. Focus on maintainability, performance and consistent UX.",
    href: "#contact",
    img: dashboard,
    accent: "ember",
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-24 md:py-40 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24 items-end">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone/50 mb-4">
              § 02 — Selected Work
            </p>
            <h2 className="font-display text-6xl md:text-8xl leading-[0.9] tracking-tight">
              A short
              <br />
              <span className="italic text-ember">monograph</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="text-lg text-bone/70 leading-relaxed">
              Three pieces from the past two years — production websites and
              internal systems built with the React & Vue ecosystems. Each
              shipped, used, and maintained.
            </p>
          </div>
        </div>

        {/* Project rows */}
        <ul className="space-y-32 md:space-y-48">
          {projects.map((p, i) => (
            <motion.li
              key={p.n}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div
                className={`grid grid-cols-12 gap-6 items-center ${
                  i % 2 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <a
                  href={p.href}
                  target={p.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="col-span-12 md:col-span-7 relative block overflow-hidden rounded-sm shadow-deep"
                >
                  <div className="absolute top-4 left-4 z-10 font-mono text-[10px] uppercase tracking-[0.25em] bg-background/80 backdrop-blur px-3 py-1.5 rounded-full text-bone/80">
                    {p.tag}
                  </div>
                  <motion.img
                    src={p.img}
                    alt={p.name}
                    width={1280}
                    height={960}
                    loading="lazy"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-auto aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
                </a>

                {/* Meta */}
                <div className="col-span-12 md:col-span-5 md:px-6">
                  <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.25em] text-bone/50 mb-6">
                    <span>№ {p.n}</span>
                    <span className="h-px flex-1 bg-border" />
                    <span>{p.year}</span>
                  </div>
                  <h3 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight mb-4">
                    {p.name}
                  </h3>
                  <p className="text-bone/70 leading-relaxed mb-6">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 border border-border rounded-full text-bone/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.href}
                    target={p.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-3 group/link"
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-bone group-hover/link:text-ember transition-colors">
                      {p.href.startsWith("http") ? "Visit live site" : "Inquire"}
                    </span>
                    <span className="h-9 w-9 rounded-full border border-border flex items-center justify-center group-hover/link:bg-ember group-hover/link:border-ember group-hover/link:text-ink transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </a>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
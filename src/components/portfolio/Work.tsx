import { motion } from "framer-motion";
import megabox from "@/assets/project-megabox.jpg";
import qebaa from "@/assets/project-qebaa.jpg";
import dashboard from "@/assets/project-dashboard.jpg";
import applyFlowImage from "@/assets/applyFlow.jfif";
import pulseTrainingImage from "@/assets/pulse-trainig.png";
import orphanyImage from "@/assets/orphany.jfif";
import { ArrowUpRight, Github } from "lucide-react";

const cardReveal = {
  hidden: { opacity: 0, y: 70, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], when: "beforeChildren", staggerChildren: 0.12 },
  },
};

const cardChild = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const projects = [
  {
    n: "01",
    name: "Novaa CRM Dashboard",
    tag: "SaaS · CRM",
    year: "2025",
    role: "Frontend Engineering",
    stack: ["React", "TypeScript", "Redux", "Tailwind"],
    problem: "Sales teams needed a single workspace to track leads, pipeline status, and conversion blockers.",
    built: "A modular CRM dashboard with reusable widgets, KPI cards, data tables, and role-ready views.",
    features: ["Live filtering and pipeline drill-down", "Reusable form and table system", "Clean responsive dashboard layout"],
    value: "Reduced manual reporting effort and improved pipeline visibility for faster sales decisions.",
    github: "https://github.com/Kholoud93/Novaa-CRM-Dashboard",
    live: "https://novaa-crm-dashboard.vercel.app/login",
    img: dashboard,
  },
  {
    n: "02",
    name: "Ease Book",
    tag: "Booking Platform",
    year: "2026",
    role: "Frontend Engineering",
    stack: ["Vue", "Nuxt", "Tailwind", "SEO"],
    problem: "Service teams needed a smoother online booking flow with fewer drop-offs and clearer time-slot availability.",
    built: "An end-to-end booking interface with searchable services, slot selection, and confirmation flows.",
    features: ["Multi-step booking journey", "Validation-first forms", "Mobile-optimized scheduling screens"],
    value: "Improved booking completion rates and reduced customer support requests during reservations.",
    github: "https://github.com/Kholoud93/Ease-Book",
    live: "https://ease-book-omega.vercel.app/",
    img: qebaa,
  },
  {
    n: "03",
    name: "ApplyFlow",
    tag: "SaaS · Productivity",
    year: "2026",
    role: "Frontend Engineering",
    stack: ["Next.js", "React", "TypeScript", "Tailwind"],
    problem: "Job seekers lacked a structured way to track applications, deadlines, and interview stages across multiple companies.",
    built: "A Kanban-style job tracker with dashboard analytics, calendar view, and drag-and-drop board for managing application stages.",
    features: ["Drag-and-drop status board with stage columns", "Dashboard with application analytics", "Calendar view for deadline tracking"],
    value: "Streamlined the job search workflow, helping users stay organized and never miss follow-ups or deadlines.",
    github: "https://github.com/Kholoud93/ApplyFlow",
    live: "https://apply-flow-delta.vercel.app/board",
    img: applyFlowImage,
  },
  {
    n: "04",
    name: "PulseForge Training",
    tag: "Training Platform",
    year: "2026",
    role: "Frontend Engineering",
    stack: ["React Native", "React", "Zustand", "REST APIs"],
    problem: "Teams required a unified training product for web and mobile users with consistent UX and progress tracking.",
    built: "A training platform experience with reusable UI patterns, structured state, and scalable feature modules.",
    features: ["Cross-platform UI consistency", "Progress and completion flows", "Performance-focused component design"],
    value: "Enabled faster onboarding and better learner retention through clearer training journeys.",
    github: "https://github.com/Kholoud93/PulseForge-Training",
    live: "",
    img: pulseTrainingImage,
  },
  {
    n: "05",
    name: "Orphany – Smart Charity & Orphan Sponsorship Platform",
    tag: "Non-profit · Social Impact",
    year: "2026",
    role: "Frontend Engineering",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    problem: "Donors and sponsors lacked a transparent, easy-to-use platform to discover orphans in need and manage ongoing sponsorships.",
    built: "A charity platform with orphan profiles, sponsorship flows, donation tracking, and an admin-ready content structure.",
    features: ["Orphan discovery and sponsorship matching", "Donation and sponsorship management flows", "Responsive, accessible interface for all devices"],
    value: "Increased donor trust and engagement by making the sponsorship journey clear, trackable, and emotionally compelling.",
    github: "https://github.com/Kholoud93/Orphany",
    live: "https://orphany.vercel.app/",
    img: orphanyImage,
  },
];

const additionalProjects = [
  {
    n: "06",
    name: "Megabox",
    type: "E-commerce Platform",
    summary:
      "A storefront-focused web application built to improve browsing speed, product discovery, and checkout clarity for online shoppers.",
    built: [
      "Responsive shopping flows for home, listing, and product details",
      "Reusable UI components for product cards, filters, and cart behavior",
      "Optimized client-side performance and smooth user interactions",
    ],
    github: "https://github.com/Kholoud93/megabox",
    live: "https://megabox-eight.vercel.app/",
  },
  {
    n: "07",
    name: "Qebaa Clinic",
    type: "Healthcare Website",
    summary:
      "A clinic experience that helps visitors explore services, understand doctor profiles, and complete contact actions in a clear bilingual flow.",
    built: [
      "Service-first information architecture for healthcare content",
      "Doctor and clinic presentation sections with clear visual hierarchy",
      "Mobile-first layout for reliable access across all devices",
    ],
    github: "https://github.com/Kholoud93/Qebaa-Clinic",
    live: "https://qebaa-clinic.vercel.app/",
  },
  {
    n: "08",
    name: "Depth-wave",
    type: "Interactive Frontend Experiment",
    summary:
      "An interaction-driven visual web experience focused on animation quality, motion depth, and immersive UI behavior.",
    built: [
      "Animated interface layers with modern interaction patterns",
      "Component structure tuned for maintainability and iteration speed",
      "Performance-aware rendering for smooth transitions and effects",
    ],
    github: "https://github.com/Kholoud93/Depth-Wave",
    live: "https://depth-wave.vercel.app/",
  },
];

export function Work() {
  return (
    <section id="work" className="section-shell">
      <div className="max-w-[1400px] mx-auto">
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
              Four production-focused projects that demonstrate business thinking, reusable frontend architecture, and delivery quality from concept to release.
            </p>
          </div>
        </div>

        <ul className="space-y-12 md:space-y-14">
          {projects.map((p, i) => (
            <motion.li
              key={p.n}
              variants={cardReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              className="group surface-card ring-premium rounded-2xl p-4 sm:p-5 md:p-7 lg:p-8"
            >
              <div className="grid grid-cols-12 gap-5 md:gap-6 items-center">
                <motion.a
                  variants={cardChild}
                  href={p.live}
                  target={p.live.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className={`col-span-12 md:col-span-7 relative block overflow-hidden rounded-xl shadow-card ${
                    i % 2 ? "md:order-2" : "md:order-1"
                  }`}
                  aria-label={`${p.name} live project`}
                >
                  <div className="absolute top-4 left-4 z-10 font-mono text-[10px] uppercase tracking-[0.2em] bg-background/75 backdrop-blur-lg px-3 py-1.5 rounded-full text-bone/90 border border-border">
                    {p.tag}
                  </div>
                  <motion.img
                    src={p.img}
                    alt={p.name}
                    width={1280}
                    height={960}
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-auto aspect-4/3 object-cover saturate-[1.05]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/45 via-transparent to-transparent pointer-events-none" />
                </motion.a>

                <motion.div
                  variants={cardChild}
                  className={`col-span-12 md:col-span-5 md:px-2 lg:px-6 ${
                    i % 2 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.25em] text-bone/50 mb-6">
                    <span>№ {p.n}</span>
                    <span className="h-px flex-1 bg-border" />
                    <span>{p.year}</span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-4">
                    {p.name}
                  </h3>
                  <p className="text-bone/80 text-sm md:text-base leading-relaxed mb-4">
                    <span className="text-ember">Problem:</span> {p.problem}
                  </p>
                  <p className="text-bone/70 text-sm md:text-base leading-relaxed mb-4">
                    <span className="text-ember">Built:</span> {p.built}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full text-bone/85 bg-background/55 border border-border"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {p.features.map((feature) => (
                      <li key={feature} className="text-bone/70 text-sm flex items-start gap-3">
                        <span className="text-ember mt-1">—</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-bone/80 text-sm leading-relaxed mb-8">
                    <span className="text-ember">Business value:</span> {p.value}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-border bg-background/45 font-mono text-[11px] uppercase tracking-[0.18em] text-bone/85 hover:text-ember hover:border-ember transition-colors"
                      aria-label={`${p.name} GitHub link`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target={p.live.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-3 rounded-full px-4 py-2 bg-ember text-ink font-mono text-[11px] uppercase tracking-[0.18em] hover:scale-[1.03] transition-transform"
                        aria-label={`${p.name} live link`}
                      >
                        <span>Live demo</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="mt-20 md:mt-24">
          <div className="grid grid-cols-12 gap-6 mb-10 md:mb-14 items-end">
            <div className="col-span-12 md:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone/50 mb-4">
                § 03 — Additional Projects
              </p>
              <h3 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight">
                Detailed
                <br />
                <span className="italic text-ember">project cards</span>
              </h3>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <p className="text-base md:text-lg text-bone/70 leading-relaxed">
                A second project block focused on practical product outcomes with no screenshots, designed for quick recruiter review.
              </p>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
            {additionalProjects.map((project, index) => (
              <motion.li
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="surface-card ring-premium rounded-2xl p-5 md:p-6"
              >
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ember">
                    № {project.n}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone/55">
                    {project.type}
                  </span>
                </div>
                <h4 className="font-display text-3xl leading-[0.98] tracking-tight mb-3">
                  {project.name}
                </h4>
                <p className="text-bone/75 text-sm leading-relaxed mb-5">
                  {project.summary}
                </p>
                <ul className="space-y-2 mb-6">
                  {project.built.map((item) => (
                    <li key={item} className="text-bone/70 text-sm flex items-start gap-3">
                      <span className="text-ember mt-1">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-border bg-background/45 font-mono text-[11px] uppercase tracking-[0.18em] text-bone/85 hover:text-ember hover:border-ember transition-colors"
                    aria-label={`${project.name} GitHub link`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-3 rounded-full px-4 py-2 bg-ember text-ink font-mono text-[11px] uppercase tracking-[0.18em] hover:scale-[1.03] transition-transform"
                    aria-label={`${project.name} live link`}
                  >
                    <span>Live demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
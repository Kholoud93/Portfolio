import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";

const links = [
  { icon: Mail, label: "khloudayman97@gmail.com", href: "mailto:khloudayman97@gmail.com" },
  { icon: Phone, label: "+20 1555586173", href: "tel:+201555586173" },
  { icon: Linkedin, label: "linkedin.com/in/kholod-ayman", href: "https://linkedin.com/in/kholod-ayman-a331427b" },
  { icon: Github, label: "github.com/Kholoud93", href: "https://github.com/Kholoud93" },
  { icon: MapPin, label: "Alexandria, Egypt", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="section-shell overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="surface-card ring-premium rounded-2xl grid grid-cols-12 gap-6 p-6 md:p-10">
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone/50 mb-6">
              § 07 — Contact CTA
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.9rem,10vw,8.2rem)] leading-[0.85] tracking-[-0.02em]"
            >
              Let’s
              <br />
              <span className="italic text-ember">build your</span>
              <br />
              <span className="text-stroke-ember italic">next product.</span>
            </motion.h2>
            <a
              href="https://wa.me/201555586173"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-4 mt-10 group"
              aria-label="Start conversation on WhatsApp"
            >
              <span className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-ember flex items-center justify-center group-hover:scale-110 transition-transform shadow-ember">
                <ArrowUpRight className="w-7 h-7 text-ink" />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-bone group-hover:text-ember transition-colors">
                Start a conversation
              </span>
            </a>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
            <ul className="space-y-4 border-t border-border pt-8">
              {links.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer noopener"
                    className="flex items-center gap-4 group py-3 border-b border-border hover:border-ember transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4 text-bone/50 group-hover:text-ember transition-colors shrink-0" />
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-bone/80 group-hover:text-bone transition-colors break-all">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-border flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.25em] text-bone/40">
          <span>© Kholoud Ayman · MMXXVI</span>
          <span>CraftFolio · React + TanStack</span>
          <span>Open to remote frontend opportunities</span>
        </div>
      </div>
    </section>
  );
}
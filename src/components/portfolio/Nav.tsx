import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Nav() {
  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Hire", href: "#hire" },
    { label: "Contact", href: "#contact" },
  ];
  const [active, setActive] = useState("work");

  useEffect(() => {
    const ids = links.map((item) => item.href.replace("#", ""));
    const onScroll = () => {
      const midpoint = window.scrollY + window.innerHeight * 0.35;
      const current =
        ids.findLast((id) => {
          const el = document.getElementById(id);
          return el && midpoint >= el.offsetTop;
        }) ?? ids[0];
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    } else if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 border-b border-border/70 bg-background/55 backdrop-blur-xl"
    >
      <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-3.5 md:py-4">
        <div className="flex items-center justify-between gap-6">
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="flex items-center gap-3 group"
          aria-label="Back to top"
        >
          <span className="h-2 w-2 rounded-full bg-ember animate-pulse-ember" />
          <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-[0.2em] text-bone/80 group-hover:text-ember transition-colors">
            Kholoud Ayman / Frontend Engineer
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-2 p-1 rounded-full surface-card ring-premium">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className={`font-mono text-[11px] uppercase tracking-[0.16em] rounded-full px-4 py-2 transition-all ${
                  active === l.href.replace("#", "")
                    ? "bg-ember text-ink shadow-ember"
                    : "text-bone/70 hover:text-ember hover:bg-background/40"
                }`}
                aria-label={`Go to ${l.label}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/201555586173"
          target="_blank"
          rel="noreferrer noopener"
          className="hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink bg-ember px-5 py-2.5 rounded-full hover:scale-105 transition-transform shadow-ember"
          aria-label="Start hiring conversation on WhatsApp"
        >
          Hire me
          <span aria-hidden>→</span>
        </a>
        </div>

        <ul className="mt-4 flex md:hidden items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className={`whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.16em] rounded-full px-3.5 py-2 border transition-colors ${
                  active === l.href.replace("#", "")
                    ? "border-ember bg-ember text-ink"
                    : "border-border text-bone/75"
                }`}
                aria-label={`Go to ${l.label}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
import { motion } from "framer-motion";

export function Nav() {
  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Contact", href: "#contact" },
  ];

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
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/40 border-b border-border"
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="flex items-center gap-3 group"
        >
          <span className="h-2 w-2 rounded-full bg-ember animate-pulse-ember" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-bone/80 group-hover:text-ember transition-colors">
            Kholoud / Frontend Engineer
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="font-mono text-xs uppercase tracking-[0.2em] text-bone/70 hover:text-ember transition-colors"
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
          className="hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink bg-ember px-4 py-2 rounded-full hover:scale-105 transition-transform"
        >
          Hire me
          <span aria-hidden>→</span>
        </a>
      </nav>
    </motion.header>
  );
}
const items = [
  "React.js",
  "Next.js",
  "Vue.js",
  "Nuxt 3",
  "React Native",
  "TypeScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "Zustand",
  "Pinia",
  "React Query",
  "REST APIs",
  "Performance",
  "Accessibility",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <section
      aria-hidden
      className="relative py-10 border-y border-border bg-card overflow-hidden"
    >
      <div className="flex gap-12 whitespace-nowrap animate-marquee will-change-transform">
        {loop.map((it, i) => (
          <span
            key={i}
            className="font-display text-4xl md:text-6xl italic text-bone/80 flex items-center gap-12"
          >
            {it}
            <span className="text-ember not-italic font-sans text-2xl">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
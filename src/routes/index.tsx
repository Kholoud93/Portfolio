import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { Work } from "@/components/portfolio/Work";
import { About } from "@/components/portfolio/About";
import { Stack } from "@/components/portfolio/Stack";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kholoud Ayman — Frontend Engineer · React, Next, Vue, Nuxt" },
      {
        name: "description",
        content:
          "Frontend engineer based in Alexandria, Egypt. Building scalable React, Next.js, Vue and Nuxt products for startups and international teams.",
      },
      { property: "og:title", content: "Kholoud Ayman — Frontend Engineer" },
      {
        property: "og:description",
        content:
          "Selected work, stack, and résumé of Kholoud Ayman — a frontend engineer crafting production-ready interfaces.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <About />
      <Stack />
      <Contact />
    </main>
  );
}

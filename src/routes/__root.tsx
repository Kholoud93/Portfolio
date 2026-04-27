import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CraftFolio — Kholoud Ayman" },
      { name: "description", content: "CraftFolio by Kholoud Ayman, showcasing production-ready React, Next, Vue, and Nuxt solutions." },
      { name: "author", content: "Kholoud Ayman" },
      { property: "og:title", content: "CraftFolio — Kholoud Ayman" },
      { property: "og:description", content: "Production-focused frontend portfolio with dashboards, CRM systems, booking products, and landing pages." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "CraftFolio — Kholoud Ayman" },
      { name: "twitter:description", content: "Frontend engineer portfolio with measurable product-focused work and scalable UI systems." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ae053896-9a74-47e9-aead-912055ce4d42/id-preview-63cdf2ec--a30f5392-78f2-48a7-8ada-333c4267d750.lovable.app-1777122326458.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ae053896-9a74-47e9-aead-912055ce4d42/id-preview-63cdf2ec--a30f5392-78f2-48a7-8ada-333c4267d750.lovable.app-1777122326458.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}

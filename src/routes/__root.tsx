import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { BRAND } from "@/content/site-copy";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: `${BRAND.product} — Commit boundary for agent action`,
      },
      {
        name: "description",
        content:
          "Proof-carrying transactional execution infrastructure for AI agents. Stage changes, constrain authority, validate before commitment, emit inspectable evidence.",
      },
      { name: "theme-color", content: "#07090B" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Serif:wght@500;600&display=swap",
      },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="surface-runtime flex min-h-dvh flex-col antialiased">
        <AuthProvider>
          <SiteHeader />
          <div className="flex min-h-0 flex-1 flex-col">
            <Outlet />
          </div>
          <SiteFooter />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ExternalLink } from "lucide-react";
import { BRAND, NAV } from "@/content/site-copy";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-void/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[72rem] items-center gap-4 px-4 sm:px-6">
        <Link
          to="/"
          className="flex shrink-0 items-baseline gap-2 font-serif text-base font-medium tracking-tight text-porcelain"
          onClick={() => setOpen(false)}
        >
          {BRAND.product}
          <span className="hidden font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-porcelain-subtle sm:inline">
            Architecture v1
          </span>
        </Link>

        <nav
          className="ml-auto hidden items-center gap-1 md:flex"
          aria-label="Primary"
        >
          {NAV.primary.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "rounded-md px-2.5 py-1.5 text-sm transition-colors",
                  active
                    ? "bg-slate text-porcelain"
                    : "text-porcelain-muted hover:bg-carbon hover:text-porcelain",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/maturity"
            className="text-sm text-porcelain-muted transition-colors hover:text-porcelain"
          >
            Maturity
          </Link>
          <a
            href={BRAND.githubOrg}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-porcelain-muted transition-colors hover:text-porcelain"
          >
            GitHub
            <ExternalLink className="size-3.5 opacity-60" aria-hidden />
          </a>
          <Button asChild size="sm" variant="primary">
            <a href="#evaluation">Request Evaluation</a>
          </Button>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="ml-auto md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-carbon md:hidden"
        >
          <nav className="mx-auto flex max-w-[72rem] flex-col gap-1 px-4 py-3" aria-label="Mobile">
            {NAV.primary.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-md px-3 py-3 text-base text-porcelain hover:bg-slate"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/maturity"
              className="rounded-md px-3 py-3 text-base text-porcelain hover:bg-slate"
              onClick={() => setOpen(false)}
            >
              Maturity
            </Link>
            <a
              href={BRAND.githubOrg}
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-3 py-3 text-base text-porcelain hover:bg-slate"
            >
              GitHub
            </a>
            <a
              href="#evaluation"
              className="mt-1 rounded-md bg-institution px-3 py-3 text-center text-base text-institution-fg"
              onClick={() => setOpen(false)}
            >
              Request Evaluation
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

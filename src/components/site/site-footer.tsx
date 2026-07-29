import { Link } from "@tanstack/react-router";
import { BRAND, NAV } from "@/content/site-copy";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-carbon">
      <div className="mx-auto grid max-w-[72rem] gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="font-serif text-lg text-porcelain">{BRAND.product}</p>
          <p className="max-w-sm text-sm leading-relaxed text-porcelain-muted">
            {BRAND.parentBlurb}
          </p>
          <p className="text-xs text-porcelain-subtle">
            Part of{" "}
            <span className="text-porcelain-muted">{BRAND.parent}</span>
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.1em] text-porcelain-subtle">
            Product
          </p>
          <ul className="space-y-2 text-sm text-porcelain-muted">
            {NAV.primary.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="transition-colors hover:text-porcelain"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/maturity"
                className="transition-colors hover:text-porcelain"
              >
                Maturity
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.1em] text-porcelain-subtle">
            Evidence
          </p>
          <ul className="space-y-2 text-sm text-porcelain-muted">
            <li>
              <Link
                to="/evidence/proof-capsules"
                className="transition-colors hover:text-porcelain"
              >
                Proof Capsules
              </Link>
            </li>
            <li>
              <Link
                to="/evidence/claims"
                className="transition-colors hover:text-porcelain"
              >
                Claims registry
              </Link>
            </li>
            <li>
              <a
                href={BRAND.benchmarks}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-porcelain"
              >
                Live benchmarks
              </a>
            </li>
            <li>
              <a
                href={BRAND.githubOrg}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-porcelain"
              >
                GitHub organization
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Separator />

      <div className="mx-auto flex max-w-[72rem] flex-col gap-2 px-4 py-4 text-xs text-porcelain-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          Architecture shown in full · maturity and limitations always explicit
        </p>
        <p className="font-mono tabular-nums">as of 2026-07-28</p>
      </div>
    </footer>
  );
}

import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/evidence")({
  component: EvidenceLayout,
});

const TABS: Array<{ href: string; label: string; exact?: boolean }> = [
  { href: "/evidence", label: "Overview", exact: true },
  { href: "/evidence/proof-capsules", label: "Proof Capsules" },
  { href: "/evidence/claims", label: "Claims" },
  { href: "/evidence/benchmarks", label: "Benchmarks" },
];

function EvidenceLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isOverview = pathname === "/evidence" || pathname === "/evidence/";

  return (
    <div>
      <div className="border-b border-border bg-carbon">
        <div className="mx-auto max-w-[72rem] px-4 sm:px-6">
          <div className="py-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-porcelain-subtle">
              Evidence
            </p>
            <h1 className="mt-2 font-serif text-2xl text-porcelain sm:text-3xl">
              Proof, claims, and verification
            </h1>
          </div>
          <nav
            className="-mb-px flex gap-1 overflow-x-auto pb-px"
            aria-label="Evidence sections"
          >
            {TABS.map((tab) => {
              const active = tab.exact
                ? isOverview
                : pathname.startsWith(tab.href);
              return (
                <Link
                  key={tab.href}
                  to={tab.href}
                  className={cn(
                    "shrink-0 border-b-2 px-3 py-2.5 text-sm transition-colors",
                    active
                      ? "border-institution text-porcelain"
                      : "border-transparent text-porcelain-muted hover:text-porcelain",
                  )}
                >
                  {tab.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

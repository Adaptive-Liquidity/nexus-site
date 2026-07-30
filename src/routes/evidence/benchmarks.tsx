import { createFileRoute, Link } from "@tanstack/react-router";
import { ForensicFrame } from "@/components/home/forensic-frame";
import { BRAND } from "@/content/site-copy";
import { Button } from "@/components/ui/button";
import { MaturityBadge } from "@/components/site/maturity-badge";
import { BenchmarkWorkbench } from "@/components/evidence/benchmark-workbench";
import {
  benchmarksSearchFromRaw,
  resolveBenchmarksSearch,
} from "@/lib/evaluator-search";

export const Route = createFileRoute("/evidence/benchmarks")({
  validateSearch: (raw: Record<string, unknown>) =>
    benchmarksSearchFromRaw(raw),
  component: BenchmarksPage,
});

function BenchmarksPage() {
  const search = resolveBenchmarksSearch(Route.useSearch());
  const navigate = Route.useNavigate();
  return (
    <main className="mx-auto min-w-0 max-w-[72rem] space-y-8 overflow-x-hidden px-4 py-10 sm:px-6">
      <header className="max-w-2xl space-y-3">
        <div className="flex flex-wrap gap-2">
          <MaturityBadge status="CURRENT" />
        </div>
        <h2 className="font-serif text-2xl text-porcelain sm:text-3xl">
          Benchmarks & methodology
        </h2>
        <p className="text-sm leading-relaxed text-porcelain-muted">
          Methodology before headline numbers. Live measurement surfaces are
          published from the Nexus repository CI pipeline. This site never
          invents performance claims.
        </p>
      </header>

      <BenchmarkWorkbench
          metricId={search.benchmark}
          showRaw={search.samples}
          onMetricChange={(id) =>
            navigate({
              search: (prev) => ({ ...prev, benchmark: id }),
              replace: true,
            })
          }
          onShowRawChange={(samples) =>
            navigate({
              search: (prev) => ({
                ...prev,
                samples,
                view: samples ? "samples" : "distribution",
              }),
              replace: true,
            })
          }
        />

      <ForensicFrame
        title="Live measurement surface"
        refId="BENCH-01 · Nexus CI"
        classification="METHODOLOGY FIRST"
        footer="Wall-clock, snapshot/rollback, and related measurements on CI runners with cited methodology."
      >
        <div className="space-y-4">
          <p className="text-sm leading-relaxed text-porcelain-muted">
            Open the public dashboard for current figures. Treat any number
            without methodology and runner context as non-citable.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="primary">
              <a href={BRAND.benchmarks} target="_blank" rel="noreferrer">
                Open live Nexus benchmarks
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={BRAND.githubNexus} target="_blank" rel="noreferrer">
                Benchmark source repo
              </a>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/evidence/claims">Related claims</Link>
            </Button>
          </div>
        </div>
      </ForensicFrame>

      <ul className="grid gap-3 sm:grid-cols-3">
        {[
          {
            t: "What we publish",
            b: "CI-backed measurements with methodology notes on the Nexus dashboard.",
          },
          {
            t: "What we refuse",
            b: "First/only claims, unverified latency figures, and marketing-only charts.",
          },
          {
            t: "How to evaluate",
            b: "Pair numbers with maturity status and residual limitations on the claims matrix.",
          },
        ].map((c) => (
          <li
            key={c.t}
            className="rounded-xl border border-border bg-carbon p-4"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle">
              {c.t}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-porcelain-muted">
              {c.b}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}

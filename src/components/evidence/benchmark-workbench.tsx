import { useMemo, useState } from "react";
import {
  BENCHMARK_FIXTURE_DISCLAIMER,
  BENCHMARK_METRICS,
  evaluateFixturePublicationGate,
  median,
  percentile,
  type BenchmarkMetricFixture,
} from "@/content/benchmark-fixture";
import { BRAND } from "@/content/site-copy";
import { buildFigureProvenance, provenanceSummary } from "@/lib/visual-provenance";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BenchmarkWorkbench({
  className,
  metricId: metricIdProp,
  showRaw: showRawProp,
  onMetricChange,
  onShowRawChange,
}: {
  className?: string;
  metricId?: string;
  showRaw?: boolean;
  onMetricChange?: (id: string) => void;
  onShowRawChange?: (show: boolean) => void;
}) {
  const [internalMetricId, setInternalMetricId] = useState(BENCHMARK_METRICS[0]!.id);
  const [internalShowRaw, setInternalShowRaw] = useState(false);
  const [showBaseline, setShowBaseline] = useState(true);
  const metricId = metricIdProp ?? internalMetricId;
  const showRaw = showRawProp ?? internalShowRaw;
  const setMetricId = (id: string) => {
    setInternalMetricId(id);
    onMetricChange?.(id);
  };
  const setShowRaw = (v: boolean | ((p: boolean) => boolean)) => {
    const next = typeof v === "function" ? v(showRaw) : v;
    setInternalShowRaw(next);
    onShowRawChange?.(next);
  };

  const metric =
    BENCHMARK_METRICS.find((m) => m.id === metricId) ?? BENCHMARK_METRICS[0]!;
  const gate = evaluateFixturePublicationGate();
  const prov = buildFigureProvenance("FIG-BEN-08", "fixture", {
    filters: `metric=${metricId}`,
    sourceRefs: ["src/content/benchmark-fixture.ts"],
  });

  const stats = useMemo(() => summarize(metric), [metric]);

  return (
    <figure
      className={cn("overflow-hidden rounded-xl border border-border bg-carbon", className)}
      data-testid="benchmark-workbench"
      data-figure="FIG-BEN-08"
      data-citable="false"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-2.5 sm:px-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle">
            FIG-BEN-08 · Benchmark reproducibility workbench
          </p>
          <p className="mt-0.5 text-xs text-porcelain-muted">
            Methodology before headlines · publication gate derived
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {BENCHMARK_METRICS.map((m) => (
            <button
              key={m.id}
              type="button"
              aria-pressed={metricId === m.id}
              onClick={() => setMetricId(m.id)}
              className={cn(
                "rounded-md border px-2 py-1.5 font-mono text-[10px] uppercase",
                metricId === m.id
                  ? "border-institution/55 bg-institution/20 text-porcelain"
                  : "border-border text-porcelain-subtle",
              )}
            >
              {m.name}
            </button>
          ))}
        </div>
      </div>

      <div
        className="border-b border-controlled-red/40 bg-controlled-red/15 px-3 py-2 text-sm font-medium text-controlled-red-fg sm:px-4"
        role="status"
      >
        {BENCHMARK_FIXTURE_DISCLAIMER}
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="border-b border-border p-4 lg:border-b-0 lg:border-r">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <p className="font-mono text-[10px] uppercase text-porcelain-subtle">
              {metric.name} · {metric.unit}
            </p>
            <span className="rounded border border-controlled-red/40 bg-controlled-red/10 px-2 py-0.5 font-mono text-[10px] text-controlled-red-fg">
              CITABLE: NO
            </span>
          </div>

          <DistributionChart
            metric={metric}
            showBaseline={showBaseline}
          />

          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              aria-pressed={showBaseline}
              onClick={() => setShowBaseline((v) => !v)}
              className="rounded border border-border px-2 py-1 font-mono text-[10px] text-porcelain-muted"
            >
              {showBaseline ? "Hide baseline" : "Show baseline"}
            </button>
            <button
              type="button"
              aria-pressed={showRaw}
              onClick={() => setShowRaw((v) => !v)}
              className="rounded border border-border px-2 py-1 font-mono text-[10px] text-porcelain-muted"
            >
              {showRaw ? "Hide raw samples" : "Raw samples"}
            </button>
          </div>

          {showRaw ? (
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[20rem] text-left text-xs">
                <thead>
                  <tr className="border-b border-border text-porcelain-subtle">
                    <th className="py-1 pr-2">#</th>
                    <th className="py-1 pr-2">Candidate</th>
                    <th className="py-1">Baseline</th>
                  </tr>
                </thead>
                <tbody>
                  {metric.candidate.map((v, i) => (
                    <tr key={i} className="border-b border-border/50 font-mono">
                      <td className="py-0.5 pr-2 text-porcelain-subtle">{i + 1}</td>
                      <td className="py-0.5 pr-2 text-porcelain">{v.toFixed(3)}</td>
                      <td className="py-0.5 text-porcelain-muted">
                        {metric.baseline[i]?.toFixed(3)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}

          <p className="mt-3 text-xs leading-relaxed text-porcelain-muted">
            <span className="font-mono text-porcelain-subtle">Guardrail · </span>
            {metric.interpretationGuardrail}
          </p>
        </div>

        <div className="space-y-3 p-4">
          <div className="rounded-lg border border-border bg-void p-3">
            <p className="font-mono text-[10px] uppercase text-porcelain-subtle">
              Publication gate
            </p>
            <p className="mt-1 text-sm text-controlled-red-fg">
              Not citable — fixture mode
            </p>
            <ul className="mt-2 space-y-0.5 text-xs text-porcelain-muted">
              {gate.missingOrInvalid.map((m) => (
                <li key={m}>· missing: {m}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-void p-3">
            <p className="font-mono text-[10px] uppercase text-porcelain-subtle">
              Fixture statistics (normalized)
            </p>
            <dl className="mt-2 grid grid-cols-2 gap-2 text-xs">
              <div>
                <dt className="text-porcelain-subtle">Candidate median</dt>
                <dd className="font-mono text-porcelain">{stats.candMed.toFixed(3)}</dd>
              </div>
              <div>
                <dt className="text-porcelain-subtle">Baseline median</dt>
                <dd className="font-mono text-porcelain-muted">
                  {stats.baseMed.toFixed(3)}
                </dd>
              </div>
              <div>
                <dt className="text-porcelain-subtle">p10–p90</dt>
                <dd className="font-mono text-porcelain-muted">
                  {stats.candP10.toFixed(3)}–{stats.candP90.toFixed(3)}
                </dd>
              </div>
              <div>
                <dt className="text-porcelain-subtle">n samples</dt>
                <dd className="font-mono text-porcelain-muted">
                  {metric.candidate.length}
                </dd>
              </div>
            </dl>
            <p className="mt-2 text-[11px] text-porcelain-subtle">
              Comparison verdict:{" "}
              <strong className="text-porcelain-muted">Incomparable</strong> —
              fixture baseline is not a verified CI parity pair.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-void p-3">
            <p className="font-mono text-[10px] uppercase text-porcelain-subtle">
              Environment / provenance (required for citation)
            </p>
            <ul className="mt-2 space-y-1 text-xs text-porcelain-muted">
              <li>· Repository / commit: unavailable in fixture</li>
              <li>· Workflow run: unavailable</li>
              <li>· Raw artifact + SHA-256: unavailable</li>
              <li>· Runner / OS / compiler: unavailable</li>
              <li>· Workload command + input shape: unavailable</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button asChild size="sm" variant="primary">
              <a href={BRAND.benchmarks} target="_blank" rel="noreferrer">
                Open live Nexus benchmarks
              </a>
            </Button>
            <Button asChild size="sm" variant="outline">
              <a href={BRAND.githubNexus} target="_blank" rel="noreferrer">
                Benchmark source
              </a>
            </Button>
          </div>
        </div>
      </div>

      <figcaption className="border-t border-border px-3 py-2.5 sm:px-4">
        <p className="text-xs text-porcelain-muted">
          Production workbench must ingest validated CI manifests. This route never
          invents performance claims. Primitive init is never compared with
          integrated request latency as a regression verdict.
        </p>
        <p className="mt-1 font-mono text-[10px] text-porcelain-subtle">
          {provenanceSummary(prov)}
        </p>
      </figcaption>
    </figure>
  );
}

function summarize(metric: BenchmarkMetricFixture) {
  return {
    candMed: median(metric.candidate),
    baseMed: median(metric.baseline),
    candP10: percentile(metric.candidate, 10),
    candP90: percentile(metric.candidate, 90),
  };
}

function DistributionChart({
  metric,
  showBaseline,
}: {
  metric: BenchmarkMetricFixture;
  showBaseline: boolean;
}) {
  const w = 520;
  const h = 180;
  const pad = 28;
  const all = showBaseline
    ? [...metric.candidate, ...metric.baseline]
    : metric.candidate;
  const min = Math.min(...all) * 0.92;
  const max = Math.max(...all) * 1.08;
  const scaleX = (i: number, n: number) =>
    pad + (i / Math.max(1, n - 1)) * (w - pad * 2);
  const scaleY = (v: number) =>
    h - pad - ((v - min) / (max - min || 1)) * (h - pad * 2);

  const path = (xs: number[]) =>
    xs
      .map(
        (v, i) =>
          `${i === 0 ? "M" : "L"}${scaleX(i, xs.length).toFixed(1)},${scaleY(v).toFixed(1)}`,
      )
      .join(" ");

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="w-full max-w-full"
      role="img"
      aria-label={`${metric.name} distribution fixture chart`}
    >
      <rect width={w} height={h} fill="#07090b" rx="8" />
      {[0.25, 0.5, 0.75].map((t) => (
        <line
          key={t}
          x1={pad}
          x2={w - pad}
          y1={pad + t * (h - pad * 2)}
          y2={pad + t * (h - pad * 2)}
          stroke="#f6f1e7"
          strokeOpacity="0.08"
        />
      ))}
      {showBaseline ? (
        <path
          d={path(metric.baseline)}
          fill="none"
          stroke="#7a7670"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
      ) : null}
      <path
        d={path(metric.candidate)}
        fill="none"
        stroke="#5f93a8"
        strokeWidth="2"
      />
      {metric.candidate.map((v, i) => (
        <circle
          key={i}
          cx={scaleX(i, metric.candidate.length)}
          cy={scaleY(v)}
          r="2.5"
          fill="#5f93a8"
        />
      ))}
      <text x={pad} y={16} fill="#7a7670" fontSize="10" fontFamily="monospace">
        normalized · lower {metric.lowerBetter ? "better" : "not better"} · fixture
      </text>
    </svg>
  );
}

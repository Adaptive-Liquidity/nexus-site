import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { claimsRegistry } from "@/content";
import { MaturityBadge } from "@/components/site/maturity-badge";
import {
  PUBLIC_STATUS_META,
  toPublicStatus,
  type InternalStatus,
} from "@/content/maturity";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ForensicFrame } from "@/components/home/forensic-frame";

export const Route = createFileRoute("/evidence/claims")({
  component: ClaimsPage,
});

type Filter = "ALL" | InternalStatus;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "ALL", label: "All" },
  { id: "CURRENT", label: "Implemented" },
  { id: "IN_DEVELOPMENT", label: "In Integration" },
  { id: "TARGET", label: "Target" },
  { id: "LIMITATION", label: "Limitations" },
];

function ClaimsPage() {
  const [filter, setFilter] = useState<Filter>("ALL");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(
    claimsRegistry.capabilities[0]?.id ?? null,
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return claimsRegistry.capabilities.filter((cap) => {
      if (filter !== "ALL" && cap.status !== filter) return false;
      if (!q) return true;
      const hay = `${cap.name} ${cap.summary} ${cap.id}`.toLowerCase();
      return hay.includes(q);
    });
  }, [filter, query]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { ALL: claimsRegistry.capabilities.length };
    for (const cap of claimsRegistry.capabilities) {
      c[cap.status] = (c[cap.status] ?? 0) + 1;
    }
    return c;
  }, []);

  return (
    <main className="mx-auto min-w-0 max-w-[72rem] space-y-8 overflow-x-hidden px-4 py-10 sm:px-6">
      <div className="max-w-2xl space-y-3">
        <p className="font-mono text-xs text-porcelain-subtle">
          Claims registry · as of {claimsRegistry.asOf} · v{claimsRegistry.version}
        </p>
        <h2 className="font-serif text-2xl text-porcelain sm:text-3xl">
          Machine-readable maturity matrix
        </h2>
        <p className="text-sm leading-relaxed text-porcelain-muted">
          Every public claim inherits status, evidence, limitations, and Stage 0
          gating. This registry is a product surface — not a footer disclaimer.
        </p>
        <div className="rounded-lg border border-signal/30 bg-signal/10 px-4 py-3 text-sm text-porcelain-muted">
          <span className="font-medium text-signal">Stage 0</span>
          <span className="mx-2 text-porcelain-subtle">·</span>
          {claimsRegistry.stage0.blocking ? "blocking — " : ""}
          {claimsRegistry.stage0.summary}
        </div>
      </div>

      <ForensicFrame
        title="Status legend"
        refId="REG-CLAIM-LEGEND"
        classification="LAYER TWO"
        footer="Status never upgrades by implication. Implemented Foundations may not complete the full product workflow."
      >
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {(
            Object.entries(claimsRegistry.statusLegend) as Array<
              [InternalStatus, string]
            >
          ).map(([key, desc]) => (
            <div
              key={key}
              className="rounded-md border border-border bg-void/50 px-3 py-2.5"
            >
              <MaturityBadge status={key} />
              <p className="mt-2 text-xs leading-relaxed text-porcelain-subtle">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </ForensicFrame>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div
          className="flex flex-wrap gap-1 rounded-lg border border-border p-0.5"
          role="tablist"
          aria-label="Filter by status"
        >
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "min-h-9 rounded-md px-2.5 py-1.5 text-xs transition-colors sm:text-sm",
                filter === f.id
                  ? "bg-slate text-porcelain"
                  : "text-porcelain-muted hover:text-porcelain",
              )}
            >
              {f.label}
              <span className="ml-1.5 font-mono text-[10px] text-porcelain-subtle">
                {counts[f.id] ?? 0}
              </span>
            </button>
          ))}
        </div>
        <label className="block min-w-0 sm:w-64">
          <span className="sr-only">Search claims</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search capabilities…"
            className="h-10 w-full rounded-md border border-border bg-carbon px-3 text-sm text-porcelain placeholder:text-porcelain-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </label>
      </div>

      <ul className="space-y-3">
        {filtered.map((cap) => {
          const open = openId === cap.id;
          const pub = toPublicStatus(cap.status as InternalStatus);
          return (
            <li
              key={cap.id}
              className="overflow-hidden rounded-xl border border-border bg-carbon"
            >
              <button
                type="button"
                onClick={() => setOpenId(open ? null : cap.id)}
                aria-expanded={open}
                className="flex w-full items-start justify-between gap-3 p-5 text-left transition-colors hover:bg-slate/30"
              >
                <div className="min-w-0 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-serif text-lg text-porcelain">
                      {cap.name}
                    </h3>
                    <MaturityBadge status={cap.status as InternalStatus} compact />
                  </div>
                  <p className="text-sm leading-relaxed text-porcelain-muted">
                    {cap.summary}
                  </p>
                  <p className="font-mono text-[10px] text-porcelain-subtle">
                    {cap.id} · public: {PUBLIC_STATUS_META[pub].label}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle">
                  {open ? "Collapse" : "Expand"}
                </span>
              </button>

              {open ? (
                <div className="space-y-4 border-t border-border bg-void/40 px-5 py-4">
                  {cap.limitations && cap.limitations.length > 0 ? (
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-wide text-porcelain-subtle">
                        Limitations
                      </p>
                      <ul className="mt-2 space-y-1 font-mono text-xs text-porcelain-muted">
                        {cap.limitations.map((lim) => (
                          <li key={lim} className="flex gap-2">
                            <span className="text-controlled-red" aria-hidden>
                              !
                            </span>
                            {lim}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {"inDevelopment" in cap &&
                  Array.isArray(cap.inDevelopment) &&
                  cap.inDevelopment.length > 0 ? (
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-wide text-porcelain-subtle">
                        In integration
                      </p>
                      <ul className="mt-2 space-y-1 text-sm text-porcelain-muted">
                        {cap.inDevelopment.map((item: string) => (
                          <li key={item}>→ {item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {"target" in cap && cap.target ? (
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-wide text-porcelain-subtle">
                        Target architecture
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-porcelain-muted">
                        {String(cap.target)}
                      </p>
                    </div>
                  ) : null}

                  {cap.evidence && cap.evidence.length > 0 ? (
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-wide text-porcelain-subtle">
                        Evidence
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {cap.evidence.map((ev) =>
                          "url" in ev && ev.url ? (
                            <a
                              key={ev.label}
                              href={String(ev.url)}
                              target={
                                String(ev.url).startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                String(ev.url).startsWith("http")
                                  ? "noreferrer"
                                  : undefined
                              }
                              className="rounded-md border border-border px-2.5 py-1.5 text-xs text-porcelain-muted transition-colors hover:text-porcelain"
                            >
                              {ev.label}
                            </a>
                          ) : (
                            <span
                              key={ev.label}
                              className="rounded-md border border-border px-2.5 py-1.5 text-xs text-porcelain-subtle"
                            >
                              {ev.label}
                              {"path" in ev && ev.path
                                ? ` · ${String(ev.path)}`
                                : ""}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs text-porcelain-subtle">
                      No public evidence links yet for this row.
                    </p>
                  )}
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>

      {filtered.length === 0 ? (
        <p className="text-sm text-porcelain-muted">No claims match this filter.</p>
      ) : null}

      <div className="flex flex-wrap gap-3 border-t border-border pt-6">
        <Button asChild variant="secondary" size="sm">
          <Link to="/maturity">Maturity table</Link>
        </Button>
        <Button asChild variant="outline" size="sm">
          <Link to="/evidence/proof-capsules">Proof Capsule Explorer</Link>
        </Button>
      </div>
    </main>
  );
}

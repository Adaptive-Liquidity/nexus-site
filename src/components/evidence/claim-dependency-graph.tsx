import { useMemo, useState } from "react";
import { MaturityBadge } from "@/components/site/maturity-badge";
import {
  claimRelationsData,
  getNode,
  isTargetStatus,
  registryCap,
  relationsFor,
  type ClaimGraphNode,
  type ClaimRelation,
} from "@/lib/claim-relations";
import { buildFigureProvenance, provenanceSummary } from "@/lib/visual-provenance";
import { toPublicStatus } from "@/content/maturity";
import { cn } from "@/lib/utils";

type Lens = "all" | "support" | "blocker";

const COL_X: Record<string, number> = {
  evidence: 90,
  foundation: 340,
  claim: 620,
  boundary: 920,
};


function publicStatusLabel(status: ClaimGraphNode["status"]): string {
  if (status === "CURRENT") return "CURRENT";
  if (status === "IN_DEVELOPMENT") return "IN INTEGRATION";
  if (status === "TARGET") return "TARGET";
  if (status === "LIMITATION") return "LIMITATION";
  if (status === "EXPERIMENTAL") return "EXPERIMENTAL";
  return status;
}

function nodeStroke(n: ClaimGraphNode, sel: boolean): string {
  if (sel) return "#5f93a8";
  if (n.kind === "blocking_gate") return "#b96464";
  if (n.status === "CURRENT") return "#75a184";
  if (n.status === "IN_DEVELOPMENT") return "#d4a55f";
  if (n.status === "LIMITATION") return "#b96464";
  if (n.status === "TARGET") return "#5f93a8";
  return "#7a7670";
}

function nodeY(nodes: ClaimGraphNode[], col: string, id: string): number {
  const inCol = nodes
    .filter((n) => n.column === col)
    .sort((a, b) => a.order - b.order);
  const i = inCol.findIndex((n) => n.id === id);
  return 70 + i * 72;
}

export function ClaimDependencyGraph({
  selectedId: controlledId,
  onSelect,
  className,
  lens: lensProp,
  currentOnly: currentOnlyProp,
  onLensChange,
  onCurrentOnlyChange,
}: {
  selectedId?: string;
  onSelect?: (id: string) => void;
  className?: string;
  lens?: Lens;
  currentOnly?: boolean;
  onLensChange?: (lens: Lens) => void;
  onCurrentOnlyChange?: (currentOnly: boolean) => void;
}) {
  const [internalId, setInternalId] = useState(
    "transactional-change-gate",
  );
  const [internalLens, setInternalLens] = useState<Lens>("all");
  const [internalCurrentOnly, setInternalCurrentOnly] = useState(true);

  const selectedId = controlledId ?? internalId;
  const lens = lensProp ?? internalLens;
  const currentOnly = currentOnlyProp ?? internalCurrentOnly;

  const select = (id: string) => {
    setInternalId(id);
    onSelect?.(id);
  };
  const setLens = (l: Lens) => {
    setInternalLens(l);
    onLensChange?.(l);
  };
  const setCurrentOnly = (v: boolean | ((prev: boolean) => boolean)) => {
    const next = typeof v === "function" ? v(currentOnly) : v;
    setInternalCurrentOnly(next);
    onCurrentOnlyChange?.(next);
  };

  const nodes = useMemo(() => {
    return claimRelationsData.nodes.filter((n) => {
      if (currentOnly && isTargetStatus(n.status)) return false;
      return true;
    });
  }, [currentOnly]);

  const edges = useMemo(() => {
    const ids = new Set(nodes.map((n) => n.id));
    let rels = claimRelationsData.relations.filter(
      (r) => ids.has(r.from) && ids.has(r.to),
    );
    if (lens === "support") {
      rels = rels.filter((r) =>
        ["supports", "evidences", "binds_context", "requires"].includes(r.kind),
      );
    }
    if (lens === "blocker") {
      rels = rels.filter((r) =>
        ["blocks", "bounds", "trusts"].includes(r.kind),
      );
    }
    // emphasize paths touching selection
    return rels;
  }, [nodes, lens]);

  const selected = getNode(selectedId) ?? nodes[0];
  const selectedRels = selected ? relationsFor(selected.id) : [];
  const cap = selected?.registryId ? registryCap(selected.registryId) : undefined;

  const prov = buildFigureProvenance("FIG-CLM-06", "fixture", {
    filters: `lens=${lens};currentOnly=${currentOnly};sel=${selectedId}`,
    sourceRefs: [
      "src/content/claims-registry.json",
      "src/content/claim-relations.json",
    ],
  });

  const mobileTrace = useMemo(() => {
    if (!selected) return [];
    const supports = selectedRels.filter(
      (r) => r.to === selected.id && (r.kind === "supports" || r.kind === "evidences"),
    );
    const blocks = selectedRels.filter(
      (r) => r.to === selected.id && (r.kind === "blocks" || r.kind === "bounds"),
    );
    return [
      ...supports.map((r) => ({ label: r.kind, node: getNode(r.from) })),
      { label: "selected", node: selected },
      ...blocks.map((r) => ({ label: r.kind, node: getNode(r.from) })),
    ];
  }, [selected, selectedRels]);

  return (
    <figure
      className={cn("overflow-hidden rounded-xl border border-border bg-carbon", className)}
      data-testid="claim-dependency-graph"
      data-figure="FIG-CLM-06"
      data-current-only={currentOnly}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-2.5 sm:px-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle">
            FIG-CLM-06 · Claim dependency & provenance
          </p>
          <p className="mt-0.5 text-xs text-porcelain-muted">
            Fixed layered DAG · typed edges · registry-driven
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              ["all", "All relations"],
              ["support", "Support path"],
              ["blocker", "Blocker path"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              aria-pressed={lens === id}
              onClick={() => setLens(id)}
              className={cn(
                "rounded-md border px-2 py-1.5 font-mono text-[10px] uppercase",
                lens === id
                  ? "border-institution/55 bg-institution/20 text-porcelain"
                  : "border-border text-porcelain-subtle",
              )}
            >
              {label}
            </button>
          ))}
          <button
            type="button"
            aria-pressed={currentOnly}
            onClick={() => setCurrentOnly(!currentOnly)}
            className={cn(
              "rounded-md border px-2 py-1.5 font-mono text-[10px] uppercase",
              currentOnly
                ? "border-institution/55 bg-institution/20 text-porcelain"
                : "border-border text-porcelain-subtle",
            )}
          >
            {currentOnly ? "Current only" : "Reveal targets"}
          </button>
        </div>
      </div>

      {currentOnly ? (
        <p className="border-b border-border bg-void px-3 py-1.5 font-mono text-[10px] text-porcelain-subtle sm:px-4">
          Target Architecture hidden by default — not current. Reveal targets
          explicitly.
        </p>
      ) : (
        <p className="border-b border-border bg-signal/10 px-3 py-1.5 font-mono text-[10px] text-signal sm:px-4">
          Target Architecture visible — dashed / patterned · not current
        </p>
      )}

      {/* Desktop graph */}
      <div className="relative hidden aspect-[16/9] w-full bg-void md:block">
        <svg
          viewBox="0 0 1100 560"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label="Claim dependency layered graph"
        >
          <title>Claim dependency graph</title>
          {(["evidence", "foundation", "claim", "boundary"] as const).map(
            (col, i) => (
              <text
                key={col}
                x={COL_X[col]}
                y={28}
                textAnchor="middle"
                fill="#7a7670"
                fontFamily="ui-monospace,monospace"
                fontSize="10"
                letterSpacing="1.5"
              >
                {["EVIDENCE", "FOUNDATIONS", "CLAIMS", "BOUNDARIES"][i]}
              </text>
            ),
          )}
          {edges.map((e) => {
            const a = getNode(e.from);
            const b = getNode(e.to);
            if (!a || !b) return null;
            if (currentOnly && (isTargetStatus(a.status) || isTargetStatus(b.status)))
              return null;
            const x1 = COL_X[a.column]!;
            const y1 = nodeY(nodes, a.column, a.id);
            const x2 = COL_X[b.column]!;
            const y2 = nodeY(nodes, b.column, b.id);
            const touch =
              e.from === selectedId || e.to === selectedId;
            const isBlock = e.kind === "blocks" || e.kind === "bounds";
            const isTarget = isTargetStatus(e.maturity);
            return (
              <line
                key={e.id}
                x1={x1 + 70}
                y1={y1}
                x2={x2 - 70}
                y2={y2}
                stroke={
                  isBlock ? "#b96464" : isTarget ? "#5f93a8" : "#5f93a8"
                }
                strokeOpacity={touch ? 0.85 : 0.22}
                strokeWidth={touch ? 2 : 1}
                strokeDasharray={
                  isTarget || e.kind === "extends_to" || e.kind === "strengthens"
                    ? "5 4"
                    : isBlock
                      ? "2 3"
                      : undefined
                }
              />
            );
          })}
          {nodes.map((n) => {
            const x = COL_X[n.column]!;
            const y = nodeY(nodes, n.column, n.id);
            const sel = n.id === selectedId;
            const target = isTargetStatus(n.status);
            return (
              <g
                key={n.id}
                transform={`translate(${x} ${y})`}
                className="cursor-pointer"
                onClick={() => select(n.id)}
                tabIndex={target && currentOnly ? -1 : 0}
                role="button"
                aria-pressed={sel}
                aria-label={`${n.title}, ${n.status}`}
                onKeyDown={(ev) => {
                  if (ev.key === "Enter" || ev.key === " ") {
                    ev.preventDefault();
                    select(n.id);
                  }
                }}
              >
                <rect
                  x={-70}
                  y={-22}
                  width={140}
                  height={44}
                  rx={8}
                  fill={sel ? "#151a20" : "#111820"}
                  stroke={nodeStroke(n, sel)}
                  strokeOpacity={sel ? 1 : 0.55}
                  strokeWidth={sel ? 2 : 1}
                  strokeDasharray={target ? "4 3" : undefined}
                />
                <text
                  textAnchor="middle"
                  y={-4}
                  fill="#f6f1e7"
                  fontSize="10"
                  fontFamily="ui-monospace,monospace"
                >
                  {n.title.length > 22 ? n.title.slice(0, 20) + "…" : n.title}
                </text>
                <text
                  textAnchor="middle"
                  y={12}
                  fill={
                    n.kind === "blocking_gate"
                      ? "#b96464"
                      : n.status === "CURRENT"
                        ? "#75a184"
                        : n.status === "IN_DEVELOPMENT"
                          ? "#d4a55f"
                          : "#7a7670"
                  }
                  fontSize="8"
                  fontFamily="ui-monospace,monospace"
                >
                  {n.kind === "blocking_gate"
                    ? "BLOCKING · IN INT."
                    : publicStatusLabel(n.status)}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Mobile ordered trace */}
      <div className="space-y-2 p-3 md:hidden" data-testid="claim-graph-mobile-trace">
        <p className="font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle">
          Selected path trace
        </p>
        <ol className="space-y-2">
          {mobileTrace.map((t, i) =>
            t.node ? (
              <li key={`${t.label}-${t.node.id}-${i}`}>
                <button
                  type="button"
                  onClick={() => select(t.node!.id)}
                  className={cn(
                    "w-full rounded-lg border px-3 py-2 text-left",
                    t.node.id === selectedId
                      ? "border-institution/50 bg-institution/15"
                      : "border-border bg-void",
                  )}
                >
                  <p className="font-mono text-[10px] uppercase text-porcelain-subtle">
                    {t.label}
                  </p>
                  <p className="text-sm text-porcelain">{t.node.title}</p>
                  <MaturityBadge
                    status={toPublicStatus(t.node.status)}
                    compact
                    showLabel
                  />
                </button>
              </li>
            ) : null,
          )}
        </ol>
        <div className="flex flex-wrap gap-1 pt-1">
          {nodes.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => select(n.id)}
              className="rounded border border-border px-2 py-1 font-mono text-[9px] text-porcelain-muted"
            >
              {n.id}
            </button>
          ))}
        </div>
      </div>

      <figcaption className="space-y-3 border-t border-border px-3 py-3 sm:px-4">
        <div
          className="space-y-2"
          aria-live="polite"
          data-testid="claim-graph-inspector"
        >
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-serif text-base text-porcelain">
              {selected?.title}
            </p>
            {selected ? (
              <MaturityBadge
                status={toPublicStatus(selected.status)}
                compact
                showLabel
              />
            ) : null}
            <code className="font-mono text-[10px] text-porcelain-subtle">
              {selected?.id}
            </code>
          </div>
          <p className="text-sm text-porcelain-muted">
            {cap?.summary ?? selected?.summary}
          </p>
          {cap?.limitations?.length ? (
            <div className="rounded-md border border-controlled-red/30 bg-controlled-red/10 p-2">
              <p className="font-mono text-[10px] uppercase text-controlled-red-fg">
                Limitations (always visible)
              </p>
              <ul className="mt-1 space-y-0.5 text-xs text-porcelain-muted">
                {cap.limitations.map((l) => (
                  <li key={l}>! {l}</li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="grid gap-2 sm:grid-cols-2">
            <RelationList
              title="Incoming / supporting"
              rels={selectedRels.filter((r) => r.to === selectedId)}
              dir="from"
            />
            <RelationList
              title="Outgoing"
              rels={selectedRels.filter((r) => r.from === selectedId)}
              dir="to"
            />
          </div>
        </div>
        <p className="font-mono text-[10px] text-porcelain-subtle">
          {provenanceSummary(prov)}
        </p>
        {/* Textual table equivalent */}
        <details className="text-xs text-porcelain-muted">
          <summary className="cursor-pointer font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle">
            Textual relation table
          </summary>
          <div className="mt-2 overflow-x-auto">
            <table className="w-full min-w-[32rem] text-left">
              <thead>
                <tr className="border-b border-border text-porcelain-subtle">
                  <th className="py-1 pr-2">From</th>
                  <th className="py-1 pr-2">Kind</th>
                  <th className="py-1 pr-2">To</th>
                  <th className="py-1">Rationale</th>
                </tr>
              </thead>
              <tbody>
                {claimRelationsData.relations
                  .filter((r) => {
                    if (!currentOnly) return true;
                    const a = getNode(r.from);
                    const b = getNode(r.to);
                    return (
                      a &&
                      b &&
                      !isTargetStatus(a.status) &&
                      !isTargetStatus(b.status)
                    );
                  })
                  .map((r) => (
                    <tr key={r.id} className="border-b border-border/60">
                      <td className="py-1 pr-2 font-mono text-[10px]">{r.from}</td>
                      <td className="py-1 pr-2 font-mono text-[10px]">{r.kind}</td>
                      <td className="py-1 pr-2 font-mono text-[10px]">{r.to}</td>
                      <td className="py-1 text-[11px]">{r.rationale}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </details>
      </figcaption>
    </figure>
  );
}

function RelationList({
  title,
  rels,
  dir,
}: {
  title: string;
  rels: ClaimRelation[];
  dir: "from" | "to";
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle">
        {title}
      </p>
      {rels.length === 0 ? (
        <p className="mt-1 text-xs text-porcelain-subtle">None in current filter</p>
      ) : (
        <ul className="mt-1 space-y-1 text-xs text-porcelain-muted">
          {rels.map((r) => (
            <li key={r.id}>
              <span className="font-mono text-porcelain-subtle">{r.kind}</span>{" "}
              {dir === "from" ? r.from : r.to}
              <span className="block text-[10px] text-porcelain-subtle">
                {r.rationale}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import { useMemo, useState } from "react";
import { claimsRegistry } from "@/content";
import { MaturityBadge } from "@/components/site/maturity-badge";
import {
  claimRelationsData,
  getNode,
  isTargetStatus,
  relationsFor,
} from "@/lib/claim-relations";
import { buildFigureProvenance, provenanceSummary } from "@/lib/visual-provenance";
import type { InternalStatus } from "@/content/maturity";
import { cn } from "@/lib/utils";

type Mode = "current" | "critical" | "full" | "trust";

const LAYERS: {
  id: string;
  title: string;
  statuses: InternalStatus[] | "trust" | "stage0";
}[] = [
  {
    id: "destination",
    title: "Assurance destination",
    statuses: ["TARGET"],
  },
  {
    id: "integration",
    title: "Stage 0 · integration plane",
    statuses: ["IN_DEVELOPMENT"],
  },
  {
    id: "foundations",
    title: "Implemented substrates",
    statuses: ["CURRENT"],
  },
  {
    id: "trust",
    title: "Disclosed trust surface",
    statuses: "trust",
  },
];

export function CapabilityMaturityTopology({
  className,
  onSelectRegistryId,
  mode: modeProp,
  selectedId: selectedIdProp,
  onModeChange,
}: {
  className?: string;
  onSelectRegistryId?: (id: string) => void;
  mode?: Mode;
  selectedId?: string;
  onModeChange?: (mode: Mode) => void;
}) {
  const [internalMode, setInternalMode] = useState<Mode>("current");
  const [internalSelectedId, setInternalSelectedId] = useState(
    "transactional-change-gate",
  );
  const mode = modeProp ?? internalMode;
  const selectedId = selectedIdProp ?? internalSelectedId;
  const setMode = (m: Mode) => {
    setInternalMode(m);
    onModeChange?.(m);
  };
  const setSelectedId = (id: string) => {
    setInternalSelectedId(id);
    onSelectRegistryId?.(id);
  };

  const showTargets = mode === "full";
  const currentOnly = mode === "current" || mode === "critical" || mode === "trust";

  const selected = getNode(selectedId);
  const cap = claimsRegistry.capabilities.find(
    (c) => c.id === (selected?.registryId ?? selectedId),
  );
  const rels = relationsFor(selectedId);

  const visibleCaps = useMemo(() => {
    return claimsRegistry.capabilities.filter((c) => {
      if (mode === "current") return c.status === "CURRENT";
      if (mode === "critical")
        return (
          c.status === "CURRENT" ||
          c.status === "IN_DEVELOPMENT" ||
          c.id === "wasm-boundary-scope"
        );
      if (mode === "trust")
        return c.status === "LIMITATION" || c.id === "wasm-boundary-scope";
      return true;
    });
  }, [mode]);

  const prov = buildFigureProvenance("FIG-MAT-07", "fixture", {
    filters: `mode=${mode};sel=${selectedId}`,
  });

  const blockers = rels.filter((r) => r.to === selectedId && r.kind === "blocks");
  const prereqs = rels.filter(
    (r) =>
      r.to === selectedId &&
      (r.kind === "supports" || r.kind === "requires" || r.kind === "binds_context"),
  );
  const unlocks = rels.filter((r) => r.from === selectedId && r.kind === "supports");

  return (
    <figure
      className={cn(
        "min-w-0 max-w-full overflow-hidden rounded-xl border border-border bg-carbon",
        className,
      )}
      data-testid="maturity-topology"
      data-figure="FIG-MAT-07"
      data-mode={mode}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-2.5 sm:px-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle">
            FIG-MAT-07 · Capability maturity topology
          </p>
          <p className="mt-0.5 text-xs text-porcelain-muted">
            No completion percentage · dependency closure only
          </p>
        </div>
        <div className="flex max-w-full min-w-0 flex-wrap gap-1.5" role="toolbar" aria-label="Topology mode">
          {(
            [
              ["current", "Current"],
              ["critical", "Critical path"],
              ["full", "Full arch."],
              ["trust", "Trust"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              aria-pressed={mode === id}
              onClick={() => setMode(id)}
              className={cn(
                "rounded-md border px-2 py-1.5 font-mono text-[10px] uppercase",
                mode === id
                  ? "border-institution/55 bg-institution/20 text-porcelain"
                  : "border-border text-porcelain-subtle",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="border-b border-signal/30 bg-signal/10 px-3 py-2 text-sm text-porcelain-muted sm:px-4">
        <strong className="text-signal">Stage 0</strong>
        <span className="mx-2 text-porcelain-subtle">·</span>
        {claimsRegistry.stage0.summary}
      </div>

      <div className="border-b border-border bg-void px-3 py-2 font-mono text-[10px] text-porcelain-subtle sm:px-4">
        Current enforcement perimeter: WASM guest ↔ host calls
        {currentOnly && !showTargets
          ? " · Target Architecture hidden"
          : " · Target Architecture shown (not current)"}
      </div>

      <div className="grid gap-3 p-3 sm:p-4 lg:grid-cols-2">
        {LAYERS.map((layer) => {
          if (layer.id === "destination" && mode !== "full") return null;
          if (layer.id === "trust" && mode !== "trust" && mode !== "full") {
            if (mode === "critical") {
              return (
                <div
                  key={layer.id}
                  className="rounded-lg border border-controlled-red/30 bg-controlled-red/5 p-3 lg:col-span-2"
                >
                  <p className="font-mono text-[10px] uppercase text-controlled-red-fg">
                    Residual trust always disclosed
                  </p>
                  <p className="mt-1 text-xs text-porcelain-muted">
                    Host OS · operators · key custody · runtime integrity · WASM
                    boundary scope
                  </p>
                </div>
              );
            }
            if (mode === "current") return null;
          }

          const items =
            layer.statuses === "trust"
              ? claimRelationsData.nodes.filter(
                  (n) =>
                    n.kind === "scope_limitation" ||
                    n.kind === "negative_guarantee" ||
                    n.status === "LIMITATION",
                )
              : claimsRegistry.capabilities.filter((c) =>
                  (layer.statuses as InternalStatus[]).includes(
                    c.status as InternalStatus,
                  ),
                );

          if (mode === "current" && layer.id !== "foundations") return null;
          if (mode === "trust" && layer.id !== "trust") return null;
          if (
            mode === "critical" &&
            layer.id !== "foundations" &&
            layer.id !== "integration" &&
            layer.id !== "trust"
          )
            return null;

          return (
            <div
              key={layer.id}
              className={cn(
                "rounded-lg border border-border bg-void p-3",
                layer.id === "integration" && "border-signal/40",
                layer.id === "trust" && "border-controlled-red/35",
              )}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle">
                {layer.title}
              </p>
              <ul className="mt-2 space-y-1.5">
                {layer.statuses === "trust"
                  ? (items as ReturnType<typeof getNode>[]).map((n) =>
                      n ? (
                        <li key={n.id}>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedId(n.registryId ?? n.id);
                            }}
                            className={cn(
                              "flex min-h-9 w-full items-start justify-between gap-2 rounded-md border px-2 py-2 text-left",

                              selectedId === n.id
                                ? "border-institution/50 bg-institution/15"
                                : "border-border/60 hover:bg-slate/30",
                            )}
                          >
                            <span className="text-sm text-porcelain">{n.title}</span>
                            <MaturityBadge status={n.status} compact showLabel={false} />
                          </button>
                        </li>
                      ) : null,
                    )
                  : (items as typeof claimsRegistry.capabilities).map((c) => (
                      <li key={c.id}>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedId(c.id);
                          }}
                          tabIndex={
                            isTargetStatus(c.status as InternalStatus) && !showTargets
                              ? -1
                              : 0
                          }
                          className={cn(
                            "flex w-full items-start justify-between gap-2 rounded-md border px-2 py-2 text-left",
                            selectedId === c.id
                              ? "border-institution/50 bg-institution/15"
                              : "border-border/60 hover:bg-slate/30",
                            isTargetStatus(c.status as InternalStatus) &&
                              "border-dashed",
                          )}
                        >
                          <span className="text-sm text-porcelain">{c.name}</span>
                          <MaturityBadge
                            status={c.status as InternalStatus}
                            compact
                            showLabel={false}
                          />
                        </button>
                      </li>
                    ))}
              </ul>
            </div>
          );
        })}
      </div>

      <figcaption
        className="space-y-3 border-t border-border px-3 py-3 sm:px-4"
        aria-live="polite"
      >
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-serif text-base text-porcelain">
            {cap?.name ?? selected?.title}
          </p>
          {(cap || selected) && (
            <MaturityBadge
              status={(cap?.status ?? selected!.status) as InternalStatus}
              compact
              showLabel
            />
          )}
        </div>
        <p className="text-sm text-porcelain-muted">
          {cap?.summary ?? selected?.summary}
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <p className="font-mono text-[10px] uppercase text-porcelain-subtle">
              Prerequisites / supports
            </p>
            {prereqs.length ? (
              <ul className="mt-1 text-xs text-porcelain-muted">
                {prereqs.map((r) => (
                  <li key={r.id}>
                    · {r.from} ({r.kind})
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-1 text-xs text-porcelain-muted">· —</p>
            )}
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase text-controlled-red-fg/80">
              Why blocked
            </p>
            {blockers.length ? (
              <ul className="mt-1 text-xs text-porcelain-muted">
                {blockers.map((r) => (
                  <li key={r.id}>
                    · {r.from}: {r.rationale}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-1 text-xs text-porcelain-muted">
                · No Stage 0 block on this node
              </p>
            )}
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase text-porcelain-subtle">
              Unlocks
            </p>
            {unlocks.length ? (
              <ul className="mt-1 text-xs text-porcelain-muted">
                {unlocks.map((r) => (
                  <li key={r.id}>· {r.to}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-1 text-xs text-porcelain-muted">· —</p>
            )}
          </div>
        </div>
        {cap?.limitations?.length ? (
          <div className="rounded-md border border-controlled-red/30 bg-controlled-red/10 p-2">
            <p className="font-mono text-[10px] uppercase text-controlled-red-fg">
              Residual limitations
            </p>
            <ul className="mt-1 text-xs text-porcelain-muted">
              {cap.limitations.map((l) => (
                <li key={l}>! {l}</li>
              ))}
            </ul>
          </div>
        ) : null}
        <p className="text-xs text-porcelain-subtle">
          Completing foundations does not imply a finished product percentage.
          Stronger guarantees require Stage 0 convergence.
        </p>
        <p className="font-mono text-[10px] text-porcelain-subtle">
          {provenanceSummary(prov)} · visible rows: {visibleCaps.length}
        </p>
      </figcaption>
    </figure>
  );
}

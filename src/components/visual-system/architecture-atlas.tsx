import { useId, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ATLAS_CONTRACTS,
  contractsForPlane,
  type AtlasPlane,
} from "@/content/atlas-contracts";
import { cn } from "@/lib/utils";

export type AtlasLayer = "all" | "nexusiq" | "aeon" | "nexus" | "evidence";

const LAYERS: { id: AtlasLayer; label: string }[] = [
  { id: "all", label: "All planes" },
  { id: "nexusiq", label: "Nexus-IQ" },
  { id: "aeon", label: "AEON-IQ" },
  { id: "nexus", label: "Nexus" },
  { id: "evidence", label: "Evidence" },
];

const LAYER_DETAIL: Record<
  Exclude<AtlasLayer, "all">,
  {
    title: string;
    role: string;
    invariant: string;
    maturity: string;
    links: { to: string; label: string }[];
  }
> = {
  nexusiq: {
    title: "Nexus-IQ · transactional control plane",
    role: "Stage, bind authority, validate, decide Commit/Abort, and coordinate emission of portable receipts.",
    invariant:
      "Composition owns the decision boundary. It does not replace WASM isolation or claim completed Stage 0 end-to-end.",
    maturity:
      "Foundations for composition narrative and DemoPlayer exist. Full Transactional Change Gate commit barrier remains In Integration under Stage 0.",
    links: [
      { to: "/change-gate", label: "Change Gate model" },
      { to: "/#live-demo", label: "Live demo" },
    ],
  },
  aeon: {
    title: "AEON-IQ · governed memory plane",
    role: "Retrieval evidence, lifecycle integrity, and memory-context modes that inform reasoning without becoming authority.",
    invariant:
      "Memory may inform reasoning context. It cannot silently widen capability or cross the authority plane.",
    maturity:
      "Memory evidence modes and disclosure exist. Full memory-state binding remains Stage 0 integration work.",
    links: [
      { to: "/research", label: "Research" },
      { to: "/maturity", label: "Maturity map" },
    ],
  },
  nexus: {
    title: "Nexus · execution + evidence substrate",
    role: "WASM isolation, capability-gated WASI, snapshots, rollback of guest state, and runtime observation for capsules.",
    invariant:
      "Isolation and capability attenuation are enforced on foundation paths. Host OS and key custody remain residual trust.",
    maturity:
      "Capability-gated execution, snap-rollback, and capsule emission are Implemented Foundations on documented paths.",
    links: [
      { to: "/security", label: "Security boundaries" },
      { to: "/developers", label: "Developers" },
    ],
  },
  evidence: {
    title: "Evidence plane · Proof Capsules",
    role: "Structured records binding observed execution, authority context, recovery, limitations, and optional integrity metadata.",
    invariant:
      "A capsule is runtime evidence—not mathematical proof of correct program execution. Limitations stay attached to interpretation.",
    maturity:
      "Schema, fixtures, and browser Explorer (structural checks) are Implemented Foundations. Production trust anchors remain Target / In Integration.",
    links: [
      { to: "/evidence/proof-capsules", label: "Proof Capsules" },
      { to: "/evidence/claims", label: "Claims registry" },
    ],
  },
};

function layerOpacity(
  group: string,
  active: AtlasLayer,
): number {
  if (active === "all") return 1;
  if (group === "agent") return 0.45;
  if (group === active) return 1;
  // Subdued structural context — not removed (ghost contracts rely on this)
  return 0.28;
}

export function ArchitectureAtlas({
  className,
  compact = false,
}: {
  className?: string;
  /** Homepage embed: slightly tighter chrome */
  compact?: boolean;
}) {
  const [layer, setLayer] = useState<AtlasLayer>("all");
  const uid = useId().replace(/:/g, "");
  const microId = `${uid}-micro`;
  const shadowId = `${uid}-shadow`;
  const arrowId = `${uid}-arrow`;
  const detail =
    layer === "all" ? null : LAYER_DETAIL[layer as Exclude<AtlasLayer, "all">];

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-carbon",
        className,
      )}
      data-testid="architecture-atlas"
      data-figure="FIG-ARC-03"
      data-layer={layer}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-2.5 sm:px-4">
        <div>
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-porcelain-subtle">
            FIG-ARC-03 · Three-system composition
          </p>
          <p className="mt-0.5 text-xs text-porcelain-muted">
            Memory may inform · never silently authorize
          </p>
        </div>
        <div
          className="flex flex-wrap gap-1.5"
          role="toolbar"
          aria-label="Architecture plane filter"
        >
          {LAYERS.map((l) => (
            <button
              key={l.id}
              type="button"
              data-layer={l.id}
              aria-pressed={layer === l.id}
              onClick={() => setLayer(l.id)}
              className={cn(
                "rounded-md border px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.06em]",
                layer === l.id
                  ? "border-institution/55 bg-institution/20 text-porcelain"
                  : "border-border text-porcelain-subtle hover:text-porcelain-muted",
              )}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>


      {layer !== "all" ? (
        <p
          className="border-b border-border bg-institution/10 px-3 py-1.5 font-mono text-[10px] text-porcelain-muted sm:px-4"
          role="status"
          data-testid="atlas-isolation-banner"
        >
          Inspecting {layer} plane · other planes remain as ghosted structural
          context · contracts retained · not standalone operation
        </p>
      ) : null}

      <div
        className={cn(
          "relative w-full bg-void",
          compact ? "aspect-[16/11]" : "aspect-[16/10] sm:aspect-video",
        )}
      >
        <svg
          viewBox="0 0 1200 675"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-labelledby={`${uid}-title`}
        >
          <title id={`${uid}-title`}>
            Nexus-IQ, AEON-IQ, and Nexus architecture atlas
          </title>
          <defs>
            <filter id={shadowId}>
              <feDropShadow
                dx="0"
                dy="16"
                stdDeviation="12"
                floodOpacity=".35"
              />
            </filter>
            <pattern
              id={microId}
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M24 0H0V24"
                fill="none"
                stroke="#f6f1e7"
                strokeOpacity=".045"
              />
            </pattern>
            <marker
              id={arrowId}
              markerWidth="8"
              markerHeight="8"
              refX="7"
              refY="4"
              orient="auto"
            >
              <path d="M0 0L8 4L0 8Z" fill="#b8b3a8" />
            </marker>
          </defs>
          <rect width="1200" height="675" fill={`url(#${microId})`} />

          <g
            data-layer-group="agent"
            style={{ opacity: layerOpacity("agent", layer) }}
            className="transition-opacity duration-300"
          >
            <text
              x="80"
              y="115"
              fill="#7a7670"
              fontFamily="ui-monospace, monospace"
              fontSize="11"
              letterSpacing="2"
            >
              AUTONOMOUS SYSTEM
            </text>
            <rect
              x="70"
              y="145"
              width="180"
              height="125"
              rx="14"
              fill="#111820"
              stroke="#f6f1e7"
              strokeOpacity=".25"
              filter={`url(#${shadowId})`}
            />
            <path
              d="M100 185h120M100 210h90M100 235h105"
              stroke="#b8b3a8"
              strokeOpacity=".45"
            />
            <text x="84" y="300" fill="#b8b3a8" fontSize="12">
              declared intent + scope
            </text>
          </g>

          <g
            data-layer-group="aeon"
            style={{ opacity: layerOpacity("aeon", layer) }}
            className="transition-opacity duration-300"
          >
            <rect
              x="310"
              y="80"
              width="520"
              height="150"
              rx="18"
              fill="#102028"
              stroke="#5f93a8"
              strokeOpacity=".55"
            />
            <text
              x="338"
              y="115"
              fill="#5f93a8"
              fontFamily="ui-monospace, monospace"
              fontSize="12"
              letterSpacing="2"
            >
              AEON-IQ · GOVERNED MEMORY PLANE
            </text>
            <g fill="#111820" stroke="#5f93a8" strokeOpacity=".45">
              <circle cx="395" cy="170" r="29" />
              <circle cx="510" cy="150" r="25" />
              <circle cx="620" cy="180" r="31" />
              <circle cx="745" cy="148" r="23" />
            </g>
            <path
              d="M395 170L510 150L620 180L745 148M395 170L620 180"
              fill="none"
              stroke="#5f93a8"
              strokeOpacity=".4"
            />
            <text x="338" y="214" fill="#b8b3a8" fontSize="11">
              retrieval evidence · lifecycle · memory modes
            </text>
          </g>

          <g
            data-layer-group="nexusiq"
            style={{ opacity: layerOpacity("nexusiq", layer) }}
            className="transition-opacity duration-300"
          >
            <rect
              x="310"
              y="265"
              width="520"
              height="150"
              rx="18"
              fill="#151a20"
              stroke="#d4a55f"
              strokeOpacity=".5"
            />
            <text
              x="338"
              y="300"
              fill="#d4a55f"
              fontFamily="ui-monospace, monospace"
              fontSize="12"
              letterSpacing="2"
            >
              NEXUS-IQ · TRANSACTIONAL CONTROL PLANE
            </text>
            <g transform="translate(350 335)" fill="#111820">
              <rect width="75" height="42" rx="8" stroke="#5f93a8" />
              <rect x="92" width="75" height="42" rx="8" stroke="#5f93a8" />
              <rect x="184" width="75" height="42" rx="8" stroke="#d4a55f" />
              <rect x="276" width="75" height="42" rx="8" stroke="#75a184" />
              <rect
                x="368"
                width="75"
                height="42"
                rx="8"
                stroke="#f6f1e7"
                strokeOpacity=".38"
              />
            </g>
            <g
              transform="translate(350 361)"
              fill="#b8b3a8"
              fontFamily="ui-monospace, monospace"
              fontSize="9"
              textAnchor="middle"
            >
              <text x="37">stage</text>
              <text x="129">authority</text>
              <text x="221">validate</text>
              <text x="313">decide</text>
              <text x="405">emit</text>
            </g>
          </g>

          <g
            data-layer-group="nexus"
            style={{ opacity: layerOpacity("nexus", layer) }}
            className="transition-opacity duration-300"
          >
            <rect
              x="310"
              y="450"
              width="520"
              height="150"
              rx="18"
              fill="#111820"
              stroke="#75a184"
              strokeOpacity=".52"
            />
            <text
              x="338"
              y="485"
              fill="#75a184"
              fontFamily="ui-monospace, monospace"
              fontSize="12"
              letterSpacing="2"
            >
              NEXUS · EXECUTION + EVIDENCE SUBSTRATE
            </text>
            <g transform="translate(350 520)">
              <rect
                width="135"
                height="48"
                rx="9"
                fill="#0b1014"
                stroke="#5f93a8"
              />
              <rect
                x="155"
                width="135"
                height="48"
                rx="9"
                fill="#0b1014"
                stroke="#75a184"
              />
              <rect
                x="310"
                width="135"
                height="48"
                rx="9"
                fill="#0b1014"
                stroke="#d4a55f"
              />
            </g>
            <g
              transform="translate(350 548)"
              fill="#b8b3a8"
              fontFamily="ui-monospace, monospace"
              fontSize="9"
              textAnchor="middle"
            >
              <text x="67">WASM isolation</text>
              <text x="222">snapshot / rollback</text>
              <text x="377">Proof Capsule</text>
            </g>
          </g>

          {/* Ghost contracts: always present; emphasis when plane isolated */}
          <g
            data-testid="atlas-contract-edges"
            className="transition-opacity duration-300"
            style={{
              opacity:
                layer === "all"
                  ? 1
                  : 0.85,
            }}
          >
            <path
              d="M250 210H290V340H310"
              fill="none"
              stroke="#f6f1e7"
              strokeOpacity=".5"
              strokeWidth="2"
              markerEnd={`url(#${arrowId})`}
            />
            <text
              x="260"
              y="326"
              fill="#b8b3a8"
              fontFamily="ui-monospace, monospace"
              fontSize="9"
              transform="rotate(-90 260 326)"
            >
              proposed action
            </text>
            <path
              data-contract="c-aeon-nexusiq-advisory"
              d="M430 230V264"
              stroke="#5f93a8"
              strokeWidth="2"
              strokeDasharray="5 6"
              strokeOpacity={layer === "all" || layer === "aeon" || layer === "nexusiq" ? 0.9 : 0.35}
            />
            <text
              x="442"
              y="250"
              fill="#5f93a8"
              fontFamily="ui-monospace, monospace"
              fontSize="9"
            >
              advisory context
            </text>
            <path
              data-contract="c-aeon-nexusiq-barrier"
              d="M590 230V265"
              stroke="#b96464"
              strokeOpacity={layer === "all" || layer === "aeon" || layer === "nexusiq" ? 0.85 : 0.4}
              strokeWidth="3"
            />
            <path
              data-contract="c-aeon-nexusiq-barrier"
              d="M575 245l30 0"
              stroke="#b96464"
              strokeOpacity={layer === "all" || layer === "aeon" || layer === "nexusiq" ? 0.85 : 0.4}
              strokeWidth="3"
            />
            <text
              x="615"
              y="250"
              fill="#b96464"
              fontFamily="ui-monospace, monospace"
              fontSize="9"
            >
              cannot widen authority
            </text>
            <path
              data-contract="c-nexusiq-nexus-exec"
              d="M570 415V450"
              stroke="#d4a55f"
              strokeWidth="2"
              strokeOpacity={layer === "all" || layer === "nexusiq" || layer === "nexus" ? 0.95 : 0.35}
              markerEnd={`url(#${arrowId})`}
            />
            <text
              x="582"
              y="440"
              fill="#d4a55f"
              fontFamily="ui-monospace, monospace"
              fontSize="9"
            >
              authorized execution
            </text>
            <path
              d="M830 340H915"
              stroke="#75a184"
              strokeWidth="2"
              markerEnd={`url(#${arrowId})`}
            />
            <rect
              x="925"
              y="278"
              width="205"
              height="128"
              rx="12"
              fill="#13201a"
              stroke="#75a184"
            />
            <text
              x="948"
              y="310"
              fill="#e8f0eb"
              fontFamily="ui-monospace, monospace"
              fontSize="11"
            >
              CONTROLLED EFFECT
            </text>
            <path
              d="M948 333h140M948 351h112M948 369h150"
              stroke="#75a184"
              strokeOpacity=".6"
            />
            <text
              x="948"
              y="391"
              fill="#75a184"
              fontFamily="ui-monospace, monospace"
              fontSize="8"
            >
              or abort + restore
            </text>
            <path
              d="M925 342H875V170H830"
              fill="none"
              stroke="#5f93a8"
              strokeOpacity=".28"
              strokeDasharray="4 7"
            />
            <text
              x="865"
              y="235"
              fill="#5f93a8"
              fontFamily="ui-monospace, monospace"
              fontSize="9"
              transform="rotate(-90 865 235)"
            >
              new memory only after policy
            </text>
          </g>

          <g
            data-layer-group="evidence"
            style={{ opacity: layerOpacity("evidence", layer) }}
            className="transition-opacity duration-300"
          >
            <path
              d="M830 538H915"
              stroke="#d4a55f"
              strokeWidth="2"
              markerEnd={`url(#${arrowId})`}
            />
            <rect
              x="925"
              y="475"
              width="205"
              height="128"
              rx="12"
              fill="#eee7d8"
              stroke="#fff"
              strokeOpacity=".5"
            />
            <text
              x="947"
              y="507"
              fill="#1a1f24"
              fontFamily="ui-monospace, monospace"
              fontSize="11"
            >
              PROOF CAPSULE
            </text>
            <path
              d="M947 530h145M947 548h120M947 566h155"
              stroke="#4a5560"
              strokeOpacity=".5"
            />
            <text
              x="947"
              y="588"
              fill="#4a5560"
              fontFamily="ui-monospace, monospace"
              fontSize="8"
            >
              observed facts + limitations
            </text>
          </g>
        </svg>
      </div>

      <figcaption className="space-y-3 border-t border-border px-3 py-3 sm:px-4">
        {detail ? (
          <div className="space-y-2">
            <p className="font-serif text-base text-porcelain">{detail.title}</p>
            <p className="text-sm leading-relaxed text-porcelain-muted">
              {detail.role}
            </p>
            <p className="border-l-2 border-institution/50 pl-3 text-xs leading-relaxed text-porcelain-subtle">
              <span className="font-mono uppercase tracking-wider text-institution">
                Invariant ·{" "}
              </span>
              {detail.invariant}
            </p>
            <p className="text-xs leading-relaxed text-porcelain-subtle">
              <span className="font-mono uppercase tracking-wider">
                Maturity ·{" "}
              </span>
              {detail.maturity}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {detail.links.map((l) =>
                l.to.startsWith("/#") || l.to.startsWith("#") ? (
                  <a
                    key={l.to}
                    href={l.to}
                    className="rounded-md border border-border px-2 py-1 font-mono text-[10px] text-porcelain-muted hover:border-porcelain/25 hover:text-porcelain"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="rounded-md border border-border px-2 py-1 font-mono text-[10px] text-porcelain-muted hover:border-porcelain/25 hover:text-porcelain"
                  >
                    {l.label}
                  </Link>
                ),
              )}
            </div>
          </div>
        ) : (
          <p className="text-xs leading-relaxed text-porcelain-muted">
            AEON-IQ contributes governed context; Nexus-IQ owns transactional
            composition; Nexus enforces the sandbox boundary and emits runtime
            evidence. The hard red bar is the non-escalation rule: memory cannot
            widen authority.
          </p>
        )}
      </figcaption>

      {/* Accessible contract summary — inbound/outbound for isolation */}
      <div
        className="border-t border-border bg-void/40 px-3 py-3 sm:px-4"
        data-testid="atlas-contract-summary"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle">
          Interface contracts ·{" "}
          {layer === "all" ? "all planes" : `isolated: ${layer}`}
        </p>
        <p className="mt-1 text-[11px] text-porcelain-muted">
          Isolation emphasizes a plane for inspection. Ghosted neighbors and
          contracts remain so the plane is not claimed to operate alone.
        </p>
        {layer === "all" ? (
          <ul className="mt-2 space-y-1 text-xs text-porcelain-muted">
            {ATLAS_CONTRACTS.map((c) => (
              <li key={c.id}>
                <span className="font-mono text-porcelain-subtle">
                  {c.from} → {c.to}
                </span>{" "}
                · {c.label} · {c.summary}
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] uppercase text-institution">
                Inbound
              </p>
              <ul className="mt-1 space-y-1 text-xs text-porcelain-muted">
                {contractsForPlane(layer as AtlasPlane).inbound.length ? (
                  contractsForPlane(layer as AtlasPlane).inbound.map((c) => (
                    <li key={c.id}>
                      · {c.from} → {c.label}: {c.summary}
                    </li>
                  ))
                ) : (
                  <li>· none</li>
                )}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase text-institution">
                Outbound
              </p>
              <ul className="mt-1 space-y-1 text-xs text-porcelain-muted">
                {contractsForPlane(layer as AtlasPlane).outbound.length ? (
                  contractsForPlane(layer as AtlasPlane).outbound.map((c) => (
                    <li key={c.id}>
                      · → {c.to} · {c.label}: {c.summary}
                    </li>
                  ))
                ) : (
                  <li>· none</li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>

    </figure>
  );
}

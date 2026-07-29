import { useState } from "react";
import { ForensicFrame } from "@/components/home/forensic-frame";
import { cn } from "@/lib/utils";

type LayerId = "agent" | "nexus-iq" | "nexus" | "aeon" | "host";

const LAYERS: {
  id: LayerId;
  name: string;
  role: string;
  y: number;
  height: number;
  fill: string;
  stroke: string;
  emphasis?: boolean;
}[] = [
  {
    id: "agent",
    name: "Agent / Operator",
    role: "Intent · tool proposals · not authority",
    y: 16,
    height: 44,
    fill: "color-mix(in oklab, var(--color-slate) 80%, transparent)",
    stroke: "color-mix(in oklab, var(--color-porcelain) 18%, transparent)",
  },
  {
    id: "nexus-iq",
    name: "Nexus-IQ · composition",
    role: "Stage · validate · approve · commit/abort · receipts",
    y: 72,
    height: 56,
    fill: "color-mix(in oklab, var(--color-institution) 28%, transparent)",
    stroke: "color-mix(in oklab, var(--color-institution) 70%, transparent)",
    emphasis: true,
  },
  {
    id: "nexus",
    name: "Nexus · execution",
    role: "WASM isolation · capabilities · snapshot · rollback · capsule emit",
    y: 144,
    height: 52,
    fill: "color-mix(in oklab, var(--color-oxide) 18%, transparent)",
    stroke: "color-mix(in oklab, var(--color-oxide) 55%, transparent)",
  },
  {
    id: "aeon",
    name: "AEON-IQ · memory plane",
    role: "Governed recall · memory evidence modes · lifecycle integrity",
    y: 208,
    height: 52,
    fill: "color-mix(in oklab, var(--color-signal) 14%, transparent)",
    stroke: "color-mix(in oklab, var(--color-signal) 50%, transparent)",
  },
  {
    id: "host",
    name: "Host boundary (trusted)",
    role: "OS · keys · operators · residual trust surface",
    y: 272,
    height: 40,
    fill: "color-mix(in oklab, var(--color-controlled-red) 12%, transparent)",
    stroke: "color-mix(in oklab, var(--color-controlled-red) 40%, transparent)",
  },
];

const FLOW = [
  { from: "agent", to: "nexus-iq", label: "propose" },
  { from: "nexus-iq", to: "nexus", label: "isolate · bind" },
  { from: "nexus", to: "aeon", label: "memory ctx" },
  { from: "nexus", to: "nexus-iq", label: "runtime facts" },
  { from: "nexus-iq", to: "agent", label: "capsule / receipt" },
] as const;

/**
 * Forensic system architecture — authority & evidence stack.
 */
export function SystemArchitectureDiagram({
  className,
}: {
  className?: string;
}) {
  const [active, setActive] = useState<LayerId>("nexus-iq");
  const layer = LAYERS.find((l) => l.id === active) ?? LAYERS[1]!;

  return (
    <ForensicFrame
      title="System architecture"
      refId="FIG-SYS-01 · v2026.07"
      classification="DESTINATION + FOUNDATIONS"
      className={className}
      footer={
        <span>
          <span className="text-porcelain-muted">{layer.name}</span>
          {" — "}
          {layer.role}. Select a layer. Host remains a disclosed trust surface.
        </span>
      }
    >
      <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="overflow-x-auto">
          <svg
            viewBox="0 0 560 330"
            className="h-auto w-full min-w-[300px]"
            role="img"
            aria-label="Layered architecture: agent, Nexus-IQ, Nexus, AEON-IQ, host"
          >
            {/* vertical bus */}
            <line
              x1="280"
              y1="28"
              x2="280"
              y2="300"
              stroke="color-mix(in oklab, var(--color-porcelain) 14%, transparent)"
              strokeWidth="1"
              strokeDasharray="3 4"
            />

            {LAYERS.map((l) => {
              const selected = l.id === active;
              return (
                <g key={l.id}>
                  <rect
                    x="48"
                    y={l.y}
                    width="464"
                    height={l.height}
                    rx="8"
                    fill={l.fill}
                    stroke={
                      selected
                        ? "var(--color-porcelain)"
                        : l.stroke
                    }
                    strokeWidth={selected ? 1.5 : 1}
                    className="cursor-pointer transition-[stroke] duration-200"
                    onClick={() => setActive(l.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActive(l.id);
                      }
                    }}
                    aria-label={`${l.name}: ${l.role}`}
                  />
                  <text
                    x="64"
                    y={l.y + 22}
                    fill="var(--color-porcelain)"
                    fontSize="13"
                    fontFamily="var(--font-serif)"
                    className="pointer-events-none"
                  >
                    {l.name}
                  </text>
                  <text
                    x="64"
                    y={l.y + 40}
                    fill="var(--color-porcelain-muted)"
                    fontSize="10"
                    fontFamily="var(--font-mono)"
                    className="pointer-events-none"
                  >
                    {l.role.length > 62 ? `${l.role.slice(0, 60)}…` : l.role}
                  </text>
                  {l.emphasis ? (
                    <text
                      x="488"
                      y={l.y + 22}
                      textAnchor="end"
                      fill="var(--color-porcelain)"
                      fontSize="9"
                      fontFamily="var(--font-mono)"
                      className="pointer-events-none"
                    >
                      PRODUCT
                    </text>
                  ) : null}
                </g>
              );
            })}

            {/* flow markers on bus */}
            {[
              { y: 60, label: "intent" },
              { y: 128, label: "control" },
              { y: 196, label: "exec" },
              { y: 258, label: "memory" },
            ].map((m) => (
              <g key={m.label}>
                <circle
                  cx="280"
                  cy={m.y}
                  r="3.5"
                  fill="var(--color-institution)"
                />
                <text
                  x="292"
                  y={m.y + 3}
                  fill="var(--color-porcelain-subtle)"
                  fontSize="8"
                  fontFamily="var(--font-mono)"
                >
                  {m.label}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle">
            Control sequence
          </p>
          <ol className="space-y-1.5">
            {FLOW.map((f, i) => (
              <li
                key={`${f.from}-${f.to}-${i}`}
                className={cn(
                  "rounded-md border px-2.5 py-2 font-mono text-[11px] leading-snug transition-colors",
                  active === f.from || active === f.to
                    ? "border-institution/40 bg-institution/15 text-porcelain"
                    : "border-border bg-void/40 text-porcelain-muted",
                )}
              >
                <span className="text-porcelain-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>{" "}
                {f.from} → {f.to}
                <span className="mt-0.5 block text-[10px] text-porcelain-subtle">
                  {f.label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </ForensicFrame>
  );
}

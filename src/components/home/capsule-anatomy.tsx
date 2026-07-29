import { useState } from "react";
import { ForensicFrame } from "@/components/home/forensic-frame";
import { CAPSULE_FIELD_EXPLAINERS } from "@/content/capsules/field-explainers";
import { cn } from "@/lib/utils";

const ANATOMY = [
  {
    path: "subject",
    zone: "A",
    x: 8,
    y: 12,
    w: 42,
    h: 22,
  },
  {
    path: "tool.module_digest",
    zone: "B",
    x: 54,
    y: 12,
    w: 38,
    h: 22,
  },
  {
    path: "capabilities",
    zone: "C",
    x: 8,
    y: 38,
    w: 28,
    h: 24,
  },
  {
    path: "snapshot",
    zone: "D",
    x: 40,
    y: 38,
    w: 28,
    h: 24,
  },
  {
    path: "failure",
    zone: "E",
    x: 72,
    y: 38,
    w: 20,
    h: 24,
  },
  {
    path: "limitations",
    zone: "F",
    x: 8,
    y: 66,
    w: 50,
    h: 26,
  },
  {
    path: "signature",
    zone: "G",
    x: 62,
    y: 66,
    w: 30,
    h: 26,
  },
] as const;

/**
 * Paper-surface Proof Capsule anatomy — field zones with explainers.
 */
export function CapsuleAnatomy({ className }: { className?: string }) {
  const [active, setActive] = useState<string>("limitations");
  const field =
    CAPSULE_FIELD_EXPLAINERS.find((f) => f.path === active) ??
    CAPSULE_FIELD_EXPLAINERS.find((f) => f.path === "limitations");
  const zone = ANATOMY.find((a) => a.path === active);

  return (
    <ForensicFrame
      title="Proof Capsule anatomy"
      refId="FIG-CAP-03 · schema zones"
      classification="EVIDENCE DOSSIER"
      surface="paper"
      className={className}
      footer="limitations[] is mandatory and non-dismissible. Signatures on demo fixtures are not production trust anchors."
    >
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div
          className="relative aspect-[16/11] w-full overflow-hidden rounded-lg border border-archive-ink/15 bg-archive/80"
          role="img"
          aria-label="Proof Capsule field layout diagram"
        >
          {/* Dossier header strip */}
          <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-archive-ink/10 px-3 py-1.5">
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-archive-ink-muted">
              proof_capsule · v1
            </span>
            <span className="font-mono text-[9px] text-archive-ink-muted">
              runtime attestation
            </span>
          </div>

          {ANATOMY.map((a) => {
            const selected = a.path === active;
            return (
              <button
                key={a.path}
                type="button"
                onClick={() => setActive(a.path)}
                className={cn(
                  "absolute rounded border text-left transition-[background-color,box-shadow,border-color] duration-200",
                  selected
                    ? "border-institution/60 bg-institution/15 shadow-sm"
                    : "border-archive-ink/15 bg-white/40 hover:border-archive-ink/30",
                )}
                style={{
                  left: `${a.x}%`,
                  top: `${a.y}%`,
                  width: `${a.w}%`,
                  height: `${a.h}%`,
                }}
                aria-pressed={selected}
              >
                <span className="block px-1.5 pt-1 font-mono text-[9px] text-archive-ink-muted">
                  {a.zone}
                </span>
                <span className="block truncate px-1.5 font-mono text-[10px] text-archive-ink sm:text-[11px]">
                  {a.path.split(".").pop()}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col rounded-lg border border-archive-ink/15 bg-white/50 p-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-serif text-lg text-archive-ink">
              {field?.title ?? active}
            </p>
            <code className="font-mono text-[10px] text-archive-ink-muted">
              zone {zone?.zone ?? "—"} · {active}
            </code>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-archive-ink-muted">
            {field?.whyItExists}
          </p>
          {field?.doesNotMean ? (
            <p className="mt-3 border-l-2 border-controlled-red/40 pl-3 text-xs leading-relaxed text-archive-ink-muted">
              Does not mean: {field.doesNotMean}
            </p>
          ) : null}

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {ANATOMY.map((a) => (
              <li key={a.path}>
                <button
                  type="button"
                  onClick={() => setActive(a.path)}
                  className={cn(
                    "rounded border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wide",
                    a.path === active
                      ? "border-institution/50 bg-institution/10 text-archive-ink"
                      : "border-archive-ink/15 text-archive-ink-muted hover:border-archive-ink/30",
                  )}
                >
                  {a.zone}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ForensicFrame>
  );
}

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

type FieldId =
  | "subject"
  | "authority"
  | "state"
  | "failure"
  | "limits"
  | "signature";

const FIELDS: { id: FieldId; label: string }[] = [
  { id: "subject", label: "Subject" },
  { id: "authority", label: "Authority" },
  { id: "state", label: "Snapshot" },
  { id: "failure", label: "Failure / rollback" },
  { id: "limits", label: "Limitations" },
  { id: "signature", label: "Signature" },
];

const COPY: Record<FieldId, { title: string; body: string }> = {
  subject: {
    title: "Subject: bind the record to the observed execution.",
    body: "This establishes which tool/module and input digest the runtime says it observed—not that the program’s result was correct.",
  },
  authority: {
    title: "Authority: record what was required, granted, or denied.",
    body: "This supports an authorization claim only within the disclosed runtime, token, key, and policy trust boundaries.",
  },
  state: {
    title: "State: connect the decision to a recoverable execution context.",
    body: "A snapshot identifier supports rollback provenance; it does not contain or prove the full external world state.",
  },
  failure: {
    title: "Failure and rollback: preserve the negative path as evidence.",
    body: "Abort, denial, and recovery remain first-class outcomes rather than disappearing as an error message.",
  },
  limits: {
    title: "Limitations: bind interpretation to what is not established.",
    body: "The non-empty limitations array is part of the artifact’s meaning, not dismissible legal copy.",
  },
  signature: {
    title: "Signature: optional integrity binding — not a production trust anchor by default.",
    body: "Portable evidence record, optionally Ed25519-signed. Inspect signer identity, key source/custody, verification status, covered fields, and whether durable production anchors exist (Target). Demo/fixture signatures must never be read as production trust.",
  },
};
export function EvidenceLattice({ className }: { className?: string }) {
  const [field, setField] = useState<FieldId>("subject");
  const uid = useId().replace(/:/g, "");
  const copy = COPY[field];

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-archive text-archive-ink",
        className,
      )}
      data-testid="evidence-lattice"
      data-figure="FIG-EVD-04"
      data-field={field}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-archive-ink/15 bg-archive-muted/40 px-3 py-2.5 sm:px-4">
        <div>
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-archive-ink-muted">
            FIG-EVD-04 · Proof Capsule lattice
          </p>
          <p className="mt-0.5 text-xs text-archive-ink-muted">
            Field-level binding · not a pill-shaped object
          </p>
        </div>
        <div
          className="flex flex-wrap gap-1.5"
          role="toolbar"
          aria-label="Capsule field"
        >
          {FIELDS.map((f) => (
            <button
              key={f.id}
              type="button"
              data-field={f.id}
              aria-pressed={field === f.id}
              onClick={() => setField(f.id)}
              className={cn(
                "rounded-md border px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.05em]",
                field === f.id
                  ? "border-institution/50 bg-institution/15 text-archive-ink"
                  : "border-archive-ink/15 text-archive-ink-muted hover:border-archive-ink/30",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative aspect-[16/11] w-full bg-archive sm:aspect-video">
        <svg
          viewBox="0 0 1200 675"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-labelledby={`${uid}-title`}
        >
          <title id={`${uid}-title`}>
            Proof Capsule field binding lattice
          </title>
          <rect width="1200" height="675" fill="#eee7d8" />
          <g opacity=".16">
            {[80, 160, 240, 320, 400, 480, 560].map((y) => (
              <path key={y} d={`M0 ${y}H1200`} stroke="#1a1f24" />
            ))}
            {[100, 300, 500, 700, 900, 1100].map((x) => (
              <path key={x} d={`M${x} 0V675`} stroke="#1a1f24" />
            ))}
          </g>

          <g>
            <rect
              x="390"
              y="90"
              width="420"
              height="495"
              rx="18"
              fill="#f8f3e8"
              stroke="#1a1f24"
              strokeOpacity=".22"
            />
            <rect x="390" y="90" width="420" height="62" rx="18" fill="#e2d8c6" />
            <path d="M390 152H810" stroke="#1a1f24" strokeOpacity=".18" />
            <text
              x="425"
              y="126"
              fill="#1a1f24"
              fontFamily="ui-monospace, monospace"
              fontSize="13"
              letterSpacing="2"
            >
              PROOF CAPSULE · V1
            </text>
            <text
              x="748"
              y="126"
              fill="#4a5560"
              fontFamily="ui-monospace, monospace"
              fontSize="9"
            >
              STRUCTURED RECORD
            </text>

            {(
              [
                ["subject", 180],
                ["authority", 250],
                ["state", 320],
                ["failure", 390],
              ] as const
            ).map(([id, y]) => {
              const on = field === id;
              return (
                <rect
                  key={id}
                  x="425"
                  y={y}
                  width="350"
                  height="56"
                  rx="8"
                  fill={on ? "#e3edf1" : "#fff"}
                  fillOpacity={on ? 0.85 : 0.45}
                  stroke={on ? "#2f5e73" : "#1a1f24"}
                  strokeOpacity={on ? 1 : 0.2}
                />
              );
            })}
            <rect
              x="425"
              y="460"
              width="215"
              height="88"
              rx="8"
              fill={field === "limits" ? "#e3edf1" : "#fff"}
              fillOpacity={field === "limits" ? 0.85 : 0.45}
              stroke={field === "limits" ? "#2f5e73" : "#1a1f24"}
              strokeOpacity={field === "limits" ? 1 : 0.2}
            />
            <rect
              x="652"
              y="460"
              width="123"
              height="88"
              rx="8"
              fill={field === "signature" ? "#e3edf1" : "#fff"}
              fillOpacity={field === "signature" ? 0.85 : 0.45}
              stroke={field === "signature" ? "#2f5e73" : "#1a1f24"}
              strokeOpacity={field === "signature" ? 1 : 0.2}
            />

            <g fill="#1a1f24" fontFamily="ui-monospace, monospace" fontSize="10">
              <text x="445" y="203">
                subject + tool + input digest
              </text>
              <text x="445" y="222" fill="#4a5560">
                what ran · against what input
              </text>
              <text x="445" y="273">
                capabilities + policy mode
              </text>
              <text x="445" y="292" fill="#4a5560">
                required · granted · mismatch
              </text>
              <text x="445" y="343">
                snapshot + execution state
              </text>
              <text x="445" y="362" fill="#4a5560">
                pre-state identifier · recovery source
              </text>
              <text x="445" y="413">
                failure + rollback
              </text>
              <text x="445" y="432" fill="#4a5560">
                classification · occurred · restored
              </text>
              <text x="445" y="485">
                limitations[]
              </text>
              <text x="445" y="505" fill="#4a5560">
                mandatory
              </text>
              <text x="445" y="525" fill="#4a5560">
                non-dismissible
              </text>
              <text x="670" y="485">
                signature
              </text>
              <text x="670" y="505" fill="#4a5560">
                optional
              </text>
              <text x="670" y="525" fill="#4a5560">
                trust-bound
              </text>
            </g>
          </g>

          {/* Source nodes */}
          {(
            [
              {
                id: "subject" as const,
                x: 70,
                y: 145,
                t1: "OBSERVED EXECUTION",
                t2: "module · tool · duration · digests",
                path: "M290 180H425",
                stroke: "#2f5e73",
              },
              {
                id: "authority" as const,
                x: 70,
                y: 260,
                t1: "AUTHORITY CONTEXT",
                t2: "tokens · attenuation · denial",
                path: "M290 295H425",
                stroke: "#1a1f24",
              },
              {
                id: "state" as const,
                x: 70,
                y: 375,
                t1: "STATE CONTEXT",
                t2: "snapshot · branch · memory mode",
                path: "M290 410H425",
                stroke: "#1a1f24",
              },
              {
                id: "failure" as const,
                x: 910,
                y: 165,
                t1: "RECOVERY EVIDENCE",
                t2: "failure class · rollback source",
                path: "M810 418H865V200H910",
                stroke: "#1a1f24",
              },
              {
                id: "limits" as const,
                x: 910,
                y: 300,
                t1: "NEGATIVE CLAIM BOUNDARY",
                t2: "what the record does not establish",
                path: "M640 504H860V345H910",
                stroke: "#7a3e3e",
              },
              {
                id: "signature" as const,
                x: 910,
                y: 465,
                t1: "INTEGRITY BINDING",
                t2: "signer · algorithm · trust anchor",
                path: "M775 504H910",
                stroke: "#496f59",
              },
            ] as const
          ).map((n) => {
            const on = field === n.id;
            return (
              <g key={n.id} opacity={on ? 1 : 0.32} className="transition-opacity">
                <rect
                  x={n.x}
                  y={n.y}
                  width="220"
                  height={n.id === "limits" ? 90 : 70}
                  rx="10"
                  fill={
                    n.id === "limits"
                      ? "#f0ded8"
                      : n.id === "subject"
                        ? "#e3edf1"
                        : "#ece5d8"
                  }
                  stroke={n.stroke}
                  strokeOpacity={on ? 0.9 : 0.35}
                />
                <text
                  x={n.x + 20}
                  y={n.y + 29}
                  fill="#1a1f24"
                  fontFamily="ui-monospace, monospace"
                  fontSize="10"
                >
                  {n.t1}
                </text>
                <text
                  x={n.x + 20}
                  y={n.y + 49}
                  fill={n.id === "limits" ? "#7a3e3e" : "#4a5560"}
                  fontSize="10"
                  fontFamily="ui-monospace, monospace"
                >
                  {n.t2}
                </text>
                <path
                  d={n.path}
                  fill="none"
                  stroke={n.stroke}
                  strokeOpacity={on ? 0.85 : 0.35}
                  strokeWidth={on ? 2 : 1}
                />
              </g>
            );
          })}

          <text
            x="70"
            y="595"
            fill="#1a1f24"
            fontFamily="Georgia, serif"
            fontSize="22"
          >
            {copy.title}
          </text>
          <text x="70" y="624" fill="#4a5560" fontSize="13">
            {copy.body}
          </text>
        </svg>
      </div>

      <figcaption className="space-y-2 border-t border-archive-ink/15 bg-archive-muted/30 px-3 py-2.5 sm:px-4">
        <p className="text-xs leading-relaxed text-archive-ink-muted">
          A Proof Capsule is runtime evidence—not mathematical proof of correct
          execution. Limitations remain attached to every interpretation.
        </p>
        <div className="rounded border border-archive-ink/15 bg-archive/80 p-2">
          <p className="font-mono text-[10px] uppercase tracking-wider text-archive-ink-muted">
            limitations[] · pinned
          </p>
          <ul className="mt-1 space-y-0.5 text-[11px] text-archive-ink-muted">
            <li>! runtime_attestation_only</li>
            <li>! does_not_prove_correct_execution</li>
            <li>! does_not_prove_absence_of_external_side_effects</li>
            <li>! trusts_nexus_runtime_and_host_boundary</li>
            {field === "signature" ? (
              <li>! production-grade signing identity remains Target Architecture</li>
            ) : null}
          </ul>
        </div>
        {field === "signature" ? (
          <dl className="grid gap-1 text-[11px] text-archive-ink-muted sm:grid-cols-2">
            <div>
              <dt className="font-mono uppercase tracking-wider">Signer</dt>
              <dd>demo fixture signer (non-production)</dd>
            </div>
            <div>
              <dt className="font-mono uppercase tracking-wider">Key custody</dt>
              <dd>not a durable trust anchor</dd>
            </div>
            <div>
              <dt className="font-mono uppercase tracking-wider">Algorithm</dt>
              <dd>Ed25519 when present · optional</dd>
            </div>
            <div>
              <dt className="font-mono uppercase tracking-wider">Does not prove</dt>
              <dd>correctness · external-effect absence · production identity</dd>
            </div>
          </dl>
        ) : null}
      </figcaption>
    </figure>
  );
}

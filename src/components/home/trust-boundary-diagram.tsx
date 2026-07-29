import { ForensicFrame } from "@/components/home/forensic-frame";

const ZONES = [
  {
    id: "enforced",
    title: "Enforced today",
    tone: "oxide" as const,
    items: [
      "Capability-gated WASM paths",
      "Snap-rollback isolation",
      "Denial on missing authority",
      "Proof Capsule generation",
    ],
  },
  {
    id: "bound",
    title: "Cryptographically bound",
    tone: "institution" as const,
    items: [
      "Module / input digests",
      "Capability tokens (Ed25519)",
      "Optional payload signatures",
      "Memory evidence when Attested",
    ],
  },
  {
    id: "trusted",
    title: "Still trusted",
    tone: "signal" as const,
    items: [
      "Host OS & operators",
      "Key material custody",
      "Nexus runtime boundary",
      "Demo signing anchors",
    ],
  },
  {
    id: "not",
    title: "Not established",
    tone: "red" as const,
    items: [
      "Correctness of agent intent",
      "Absence of all external effects",
      "Production trust anchors (Target)",
      "Full Change Gate commit barrier",
    ],
  },
];

const TONE_CLASS = {
  oxide: {
    border: "border-oxide/35",
    bg: "bg-oxide/10",
    label: "text-oxide-fg",
    dot: "bg-oxide",
  },
  institution: {
    border: "border-institution/40",
    bg: "bg-institution/10",
    label: "text-porcelain",
    dot: "bg-institution",
  },
  signal: {
    border: "border-signal/35",
    bg: "bg-signal/10",
    label: "text-signal",
    dot: "bg-signal",
  },
  red: {
    border: "border-controlled-red/35",
    bg: "bg-controlled-red/10",
    label: "text-controlled-red-fg",
    dot: "bg-controlled-red",
  },
};

/**
 * Four-quadrant trust boundary map for evaluators.
 */
export function TrustBoundaryDiagram({ className }: { className?: string }) {
  return (
    <ForensicFrame
      title="Trust boundary map"
      refId="FIG-TRU-04 · evaluator frame"
      classification="STAGE 0 HONEST"
      className={className}
      footer="Advisory memory modes and demo signatures never upgrade into cryptographic guarantees on this map."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {ZONES.map((z) => {
          const t = TONE_CLASS[z.tone];
          return (
            <div
              key={z.id}
              className={`rounded-lg border ${t.border} ${t.bg} p-3.5`}
            >
              <div className="mb-2.5 flex items-center gap-2">
                <span className={`size-2 rounded-full ${t.dot}`} aria-hidden />
                <p
                  className={`font-mono text-[10px] uppercase tracking-[0.12em] ${t.label}`}
                >
                  {z.title}
                </p>
              </div>
              <ul className="space-y-1.5">
                {z.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-snug text-porcelain-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </ForensicFrame>
  );
}

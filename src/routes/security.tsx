import { createFileRoute, Link } from "@tanstack/react-router";
import { TrustBoundaryDiagram } from "@/components/home/trust-boundary-diagram";
import { ForensicFrame } from "@/components/home/forensic-frame";
import { Button } from "@/components/ui/button";
import { STAGE_0_NOTE, BRAND } from "@/content/site-copy";

export const Route = createFileRoute("/security")({
  component: SecurityPage,
});

const ANSWERS = [
  {
    q: "What does Nexus-IQ enforce?",
    a: "On Implemented Foundation paths: capability-gated WASM execution, snap-rollback isolation, policy structures, and signed runtime evidence (Proof Capsules). The full Transactional Change Gate commit barrier remains In Integration under Stage 0.",
  },
  {
    q: "What remains trusted?",
    a: "Host OS, operators, key material custody, and the Nexus runtime boundary. Capsules explicitly list trust of the Nexus runtime and host — they do not eliminate residual trust.",
  },
  {
    q: "What is cryptographically bound?",
    a: "Module and input digests, Ed25519 capability tokens, optional payload signatures, and memory evidence when attestation modes permit. Demo fixtures use non-production signing anchors.",
  },
  {
    q: "What is advisory?",
    a: "Memory context under Advisory, Degraded, or Absent modes. Incomplete binding must never be read as full cryptographic memory attestation.",
  },
  {
    q: "What can be rolled back?",
    a: "WASM guest execution state captured in snapshots (linear memory, globals, tables metadata). Capability denial paths can restore pre-execution snapshots when requires_rollback is set.",
  },
  {
    q: "What external effects remain outside direct rollback?",
    a: "Effects that escaped the isolation boundary before abort (network side effects, external commits). Compensation is Target Architecture for irreversible external actions.",
  },
  {
    q: "Which keys establish identity versus payload integrity?",
    a: "Capability tokens authorize attenuated actions. Capsule signatures bind payload digests. Production identity, rotation, and external anchoring are Target / In Integration — not claimed as complete.",
  },
  {
    q: "What changes when Stage 0 closes?",
    a: "End-to-end transactional guarantees and full memory-state binding become defensible as a completed product path. Until then, foundations ship with explicit maturity and residual-risk disclosure.",
  },
];

function SecurityPage() {
  return (
    <main className="mx-auto min-w-0 max-w-[72rem] space-y-10 overflow-x-hidden px-4 py-10 sm:px-6 sm:py-14">
      <header className="max-w-2xl space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-porcelain-subtle">
          Security
        </p>
        <h1 className="font-serif text-3xl text-porcelain sm:text-4xl">
          Trust boundaries for evaluators
        </h1>
        <p className="text-base leading-relaxed text-porcelain-muted">
          Security is organized around evaluation questions—not a compliance logo
          wall. Every answer separates what is enforced, what is still trusted,
          and what Stage 0 still blocks.
        </p>
        <div className="rounded-lg border border-signal/30 bg-signal/10 px-4 py-3 text-sm text-porcelain-muted">
          <span className="font-medium text-signal">Stage 0</span>
          <span className="mx-2 text-porcelain-subtle">·</span>
          {STAGE_0_NOTE}
        </div>
      </header>

      <TrustBoundaryDiagram />

      <ForensicFrame
        title="Evaluation questions"
        refId="SEC-Q-01 · residual risk"
        classification="ADVERSARIAL READ"
        footer="If a claim cannot answer these questions, it is not ready for enterprise evaluation."
      >
        <ul className="space-y-3">
          {ANSWERS.map((item, i) => (
            <li
              key={item.q}
              className="rounded-lg border border-border bg-void/50 p-4"
            >
              <p className="font-mono text-[10px] tabular-nums text-porcelain-subtle">
                Q{String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 text-sm font-medium text-porcelain">{item.q}</p>
              <p className="mt-2 text-sm leading-relaxed text-porcelain-muted">
                {item.a}
              </p>
            </li>
          ))}
        </ul>
      </ForensicFrame>

      <div className="flex flex-wrap gap-3">
        <Button asChild variant="secondary">
          <Link to="/evidence/claims">Claims with limitations</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/evidence/proof-capsules">Inspect Proof Capsules</Link>
        </Button>
        <Button asChild variant="outline">
          <a href={BRAND.githubNexus} target="_blank" rel="noreferrer">
            Nexus source
          </a>
        </Button>
      </div>
    </main>
  );
}

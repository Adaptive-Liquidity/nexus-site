import { createFileRoute, Link } from "@tanstack/react-router";
import { ForensicFrame } from "@/components/home/forensic-frame";
import { MaturityBadge } from "@/components/site/maturity-badge";
import { Button } from "@/components/ui/button";
import { BRAND, LAUNCH_THESIS } from "@/content/site-copy";
import type { InternalStatus } from "@/content/maturity";

export const Route = createFileRoute("/research")({
  component: ResearchPage,
});

const DOSSIER: {
  title: string;
  kind: string;
  status: InternalStatus;
  body: string;
  href?: string;
  external?: boolean;
}[] = [
  {
    title: "Claims registry",
    kind: "Machine-readable matrix",
    status: "CURRENT",
    body: "Status, evidence links, limitations, and Stage 0 gate for every public capability claim.",
    href: "/evidence/claims",
  },
  {
    title: "Proof Capsule schema & fixtures",
    kind: "Runtime evidence",
    status: "CURRENT",
    body: "Structure-identical capsules with mandatory limitations[]. Explorer for field-level inspection.",
    href: "/evidence/proof-capsules",
  },
  {
    title: "Live Nexus benchmarks",
    kind: "Measurement surface",
    status: "CURRENT",
    body: "CI-published wall-clock, snapshot, and rollback methodology. No unverified headline numbers on this site.",
    href: BRAND.benchmarks,
    external: true,
  },
  {
    title: "Stage 0 evidence model",
    kind: "Integration gate",
    status: "IN_DEVELOPMENT",
    body: "Blocking work for end-to-end transactional guarantees and full memory-state binding.",
    href: "/maturity",
  },
  {
    title: "Threat model & residual trust",
    kind: "Security brief",
    status: "IN_DEVELOPMENT",
    body: "Evaluator questions: enforced vs trusted vs advisory vs not established. Host and keys remain disclosed trust surfaces.",
    href: "/security",
  },
  {
    title: "Transactional Change Gate architecture",
    kind: "Operating model",
    status: "TARGET",
    body: "Destination workflow: propose → stage → constrain → validate → approve → commit/abort → emit → compensate.",
    href: "/change-gate",
  },
  {
    title: "AEON-IQ memory research",
    kind: "Memory plane",
    status: "IN_DEVELOPMENT",
    body: "Governed recall, evidence modes, lifecycle integrity. Advisory modes must not be over-read as attestation.",
    href: BRAND.githubAeon,
    external: true,
  },
  {
    title: "Architecture paper (public draft track)",
    kind: "Citation object",
    status: "EXPERIMENTAL",
    body: "Long-form technical brief packaging is progressive. Use claims + capsules + benchmarks as the current citation core.",
    href: BRAND.githubNexusIq,
    external: true,
  },
];

function ResearchPage() {
  return (
    <main className="mx-auto min-w-0 max-w-[72rem] space-y-10 overflow-x-hidden px-4 py-10 sm:px-6 sm:py-14">
      <header className="max-w-2xl space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-porcelain-subtle">
          Research
        </p>
        <h1 className="font-serif text-3xl text-porcelain sm:text-4xl">
          Citation-first technical dossier
        </h1>
        <p className="text-base leading-relaxed text-porcelain-muted">
          Methodology and evidence before promotional language. Publish
          inspectable artifacts progressively; the finished operating model is
          the narrative, maturity stays explicit.
        </p>
        <p className="border-l-2 border-institution/50 pl-3 text-sm leading-relaxed text-porcelain-subtle">
          {LAUNCH_THESIS}
        </p>
      </header>

      <ForensicFrame
        title="Research index"
        refId="RSH-IDX-01 · progressive publication"
        classification="TECHNICAL DOSSIER"
        footer="Entries marked Experimental or In Integration are not production commitments."
      >
        <ul className="space-y-3">
          {DOSSIER.map((item) => {
            const inner = (
              <>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle">
                      {item.kind}
                    </p>
                    <h2 className="mt-1 font-serif text-lg text-porcelain">
                      {item.title}
                    </h2>
                  </div>
                  <MaturityBadge status={item.status} compact />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-porcelain-muted">
                  {item.body}
                </p>
              </>
            );

            const className =
              "block rounded-lg border border-border bg-void/50 p-4 transition-colors hover:border-porcelain/20 hover:bg-slate/30";

            if (!item.href) {
              return (
                <li key={item.title} className={className}>
                  {inner}
                </li>
              );
            }

            if (item.external) {
              return (
                <li key={item.title}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={className}
                  >
                    {inner}
                  </a>
                </li>
              );
            }

            return (
              <li key={item.title}>
                <Link to={item.href} className={className}>
                  {inner}
                </Link>
              </li>
            );
          })}
        </ul>
      </ForensicFrame>

      <div className="rounded-xl border border-border bg-carbon p-5 sm:p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle">
          Source repositories
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button asChild variant="default" size="sm">
            <a href={BRAND.githubNexus} target="_blank" rel="noreferrer">
              Nexus
            </a>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <a href={BRAND.githubAeon} target="_blank" rel="noreferrer">
              AEON-IQ
            </a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href={BRAND.githubNexusIq} target="_blank" rel="noreferrer">
              Nexus-IQ
            </a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/evidence">Evidence hub</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

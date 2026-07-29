import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/evidence/")({
  component: EvidenceOverview,
});

function EvidenceOverview() {
  return (
    <main className="mx-auto max-w-[72rem] space-y-6 px-4 py-10 sm:px-6">
      <p className="max-w-2xl text-base text-porcelain-muted">
        Evidence surfaces use archive-paper styling for records. Proof Capsules
        are runtime-observed, signed artifacts with mandatory limitations — not
        mathematical proof of correct execution.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          {
            to: "/evidence/proof-capsules" as const,
            title: "Proof Capsules",
            body: "Open the Explorer: field inspection, limitations[], structural checks, and downloadable structure-identical fixtures. Production trust anchors remain Target / In Integration.",
          },
          {
            to: "/evidence/claims" as const,
            title: "Claims registry",
            body: "Machine-readable maturity matrix: status, evidence links, limitations, Stage 0 gate.",
          },
          {
            to: "/evidence/benchmarks" as const,
            title: "Benchmarks",
            body: "Methodology-first links to live Nexus measurement surfaces.",
          },
        ].map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className="rounded-xl border border-border bg-carbon p-5 transition-colors hover:bg-slate"
          >
            <h2 className="font-serif text-lg text-porcelain">{card.title}</h2>
            <p className="mt-2 text-sm text-porcelain-muted">{card.body}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

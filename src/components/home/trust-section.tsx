import { Link } from "@tanstack/react-router";
import { claimsRegistry } from "@/content";
import { SectionHeading } from "@/components/home/section-heading";
import { MaturityBadge } from "@/components/site/maturity-badge";
import { Button } from "@/components/ui/button";
import type { InternalStatus } from "@/content/maturity";
import { BRAND } from "@/content/site-copy";
import { TrustBoundaryDiagram } from "@/components/home/trust-boundary-diagram";
import { Reveal } from "@/components/home/reveal";

const TRUST_QUESTIONS = [
  {
    q: "What does Nexus-IQ enforce?",
    a: "Capability-gated WASM execution, snap-rollback isolation, policy structures, and signed runtime evidence on implemented paths.",
  },
  {
    q: "What remains trusted?",
    a: "Host boundary, key material, and operators. Capsules explicitly list trust of the Nexus runtime and host.",
  },
  {
    q: "What is cryptographically bound?",
    a: "Module/input digests, optional Ed25519 payload signatures, capability tokens, and memory evidence when attestation modes permit.",
  },
  {
    q: "What is advisory?",
    a: "Memory context under Advisory / Degraded / Absent modes; incomplete binding never pretends to be attested.",
  },
];

export function TrustSection() {
  const topClaims = claimsRegistry.capabilities.slice(0, 4);

  return (
    <section
      id="trust"
      className="border-b border-border bg-void"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-[72rem] px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <div className="mb-10">
            <TrustBoundaryDiagram />
          </div>
        </Reveal>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Claims & maturity"
              title="Every guarantee has an evidence boundary"
              description="The claims registry is a product feature: status, evidence, limitations, and verification date — not a footer disclaimer."
            />
            <h3 id="trust-heading" className="sr-only">
              Claims and security trust questions
            </h3>

            <ul className="mt-8 space-y-3">
              {topClaims.map((cap) => (
                <li
                  key={cap.id}
                  className="rounded-lg border border-border bg-carbon p-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <p className="font-medium text-porcelain">{cap.name}</p>
                    <MaturityBadge
                      status={cap.status as InternalStatus}
                      compact
                    />
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-porcelain-muted">
                    {cap.summary}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="secondary">
                <Link to="/maturity">Open maturity registry</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/evidence/claims">Full claims matrix</Link>
              </Button>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Security framing"
              title="Trust questions, not logo walls"
              description="Evaluators should leave knowing what is enforced, what is trusted, and what Stage 0 still blocks."
            />
            <ul className="mt-8 space-y-3">
              {TRUST_QUESTIONS.map((item) => (
                <li
                  key={item.q}
                  className="rounded-lg border border-border bg-carbon p-4"
                >
                  <p className="text-sm font-medium text-porcelain">{item.q}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-porcelain-muted">
                    {item.a}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-porcelain-subtle">
              <Link
                to="/security"
                className="underline-offset-4 hover:text-porcelain hover:underline"
              >
                Full trust-boundary page →
              </Link>
              {" · "}
              <a
                href={BRAND.benchmarks}
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:text-porcelain hover:underline"
              >
                Live benchmarks →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

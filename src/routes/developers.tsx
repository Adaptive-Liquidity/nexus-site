import { createFileRoute, Link } from "@tanstack/react-router";
import { ForensicFrame } from "@/components/home/forensic-frame";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/content/site-copy";
import { MaturityBadge } from "@/components/site/maturity-badge";
import { IntegrationSimulator } from "@/components/developers/integration-simulator";
import {
  developersSearchFromRaw,
  resolveDevelopersSearch,
} from "@/lib/evaluator-search";

export const Route = createFileRoute("/developers")({
  validateSearch: (raw: Record<string, unknown>) =>
    developersSearchFromRaw(raw),
  component: DevelopersPage,
});

const PATHS = [
  {
    title: "Nexus execution substrate",
    body: "WASM isolation, snap-rollback, capability-gated WASI, Proof Capsule generation paths.",
    href: BRAND.githubNexus,
    external: true,
  },
  {
    title: "AEON-IQ memory plane",
    body: "Governed memory, retrieval evidence modes, lifecycle integrity foundations.",
    href: BRAND.githubAeon,
    external: true,
  },
  {
    title: "Nexus-IQ composition kit",
    body: "Transactional composition layer destination. Stage 0 integration is the honest scope today.",
    href: BRAND.githubNexusIq,
    external: true,
  },
  {
    title: "Proof Capsule Explorer",
    body: "Inspect structure-identical fixtures in-browser before wiring a host verifier.",
    href: "/evidence/proof-capsules",
    external: false,
  },
];

function DevelopersPage() {
  const search = resolveDevelopersSearch(Route.useSearch());
  const navigate = Route.useNavigate();
  return (
    <main className="mx-auto min-w-0 max-w-[72rem] space-y-10 overflow-x-hidden px-4 py-10 sm:px-6 sm:py-14">
      <header className="max-w-2xl space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-porcelain-subtle">
          Developers
        </p>
        <h1 className="font-serif text-3xl text-porcelain sm:text-4xl">
          Build with the foundations
        </h1>
        <p className="text-base leading-relaxed text-porcelain-muted">
          Self-host the execution and memory substrates. Honest scope: Nexus
          governs the WASM guest↔host boundary today—not full LLM tool-choice
          interception. The Change Gate is the product composition destination.
        </p>
        <div className="flex flex-wrap gap-2">
          <MaturityBadge status="CURRENT" />
          <MaturityBadge status="IN_DEVELOPMENT" />
          <MaturityBadge status="TARGET" />
        </div>
      </header>

      <IntegrationSimulator
          scenarioId={search.scenario}
          stepIndex={search.step}
          architecture={search.architecture}
          onScenarioChange={(scenario) =>
            navigate({
              search: (prev) => ({ ...prev, scenario, step: 0 }),
              replace: true,
            })
          }
          onStepChange={(step) =>
            navigate({
              search: (prev) => ({ ...prev, step }),
              replace: true,
            })
          }
          onArchitectureChange={(architecture) =>
            navigate({
              search: (prev) => ({ ...prev, architecture }),
              replace: true,
            })
          }
        />

      <ForensicFrame
        title="Integration paths"
        refId="DEV-PATH-01"
        classification="ENGINEERING"
        footer="Prefer evidence artifacts and maturity rows over slogans when evaluating adoption."
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {PATHS.map((p) => {
            const className =
              "flex h-full flex-col rounded-lg border border-border bg-void/50 p-4 transition-colors hover:border-porcelain/20 hover:bg-slate/30";
            const body = (
              <>
                <h2 className="font-serif text-lg text-porcelain">{p.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-porcelain-muted">
                  {p.body}
                </p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle">
                  {p.external ? "External repository" : "On this site"}
                </p>
              </>
            );
            return (
              <li key={p.title}>
                {p.external ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className={className}
                  >
                    {body}
                  </a>
                ) : (
                  <Link to={p.href} className={className}>
                    {body}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </ForensicFrame>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button asChild variant="default">
          <a href={BRAND.githubNexus} target="_blank" rel="noreferrer">
            Nexus repository
          </a>
        </Button>
        <Button asChild variant="secondary">
          <a href={BRAND.benchmarks} target="_blank" rel="noreferrer">
            Live benchmarks
          </a>
        </Button>
        <Button asChild variant="outline">
          <Link to="/maturity">Maturity registry</Link>
        </Button>
        <Button asChild variant="outline">
          <a href="/#evaluation">Request evaluation</a>
        </Button>
      </div>
    </main>
  );
}

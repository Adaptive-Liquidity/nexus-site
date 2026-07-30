import { createFileRoute, Link } from "@tanstack/react-router";
import { COMPOSITION } from "@/content/site-copy";
import { ArchitectureAtlas } from "@/components/visual-system/architecture-atlas";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/home/reveal";

export const Route = createFileRoute("/system")({
  component: SystemPage,
});

function SystemPage() {
  return (
    <main className="mx-auto min-w-0 max-w-[72rem] space-y-10 overflow-x-hidden px-4 py-10 sm:px-6 sm:py-14">
      <header className="max-w-2xl space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-porcelain-subtle">
          System
        </p>
        <h1 className="font-serif text-3xl text-porcelain sm:text-4xl">
          Operating model
        </h1>
        <p className="text-base leading-relaxed text-porcelain-muted">
          Nexus-IQ is the transactional control plane. Nexus supplies isolated
          execution and runtime evidence. AEON-IQ supplies governed memory that
          may inform reasoning but never silently widens authority.
        </p>
        <p className="text-sm leading-relaxed text-porcelain-subtle">
          Isolate planes with the atlas controls. Maturity is disclosed per
          plane—not flattened into a single “complete architecture” claim.
        </p>
      </header>

      <Reveal>
        <ArchitectureAtlas />
      </Reveal>

      <section aria-labelledby="layers-heading" className="space-y-4">
        <h2
          id="layers-heading"
          className="font-serif text-xl text-porcelain sm:text-2xl"
        >
          Layer contracts
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {COMPOSITION.map((layer) => (
            <article
              key={layer.id}
              className="rounded-xl border border-border bg-carbon p-5"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle">
                {layer.id === "nexus-iq"
                  ? "Composition"
                  : layer.id === "aeon-iq"
                    ? "Memory"
                    : "Execution"}
              </p>
              <h3 className="mt-2 font-serif text-lg text-porcelain">
                {layer.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-porcelain-muted">
                {layer.role}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="rounded-xl border border-border bg-void p-5 sm:p-6"
        aria-labelledby="next-sys"
      >
        <h2 id="next-sys" className="font-serif text-lg text-porcelain">
          Continue evaluation
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-porcelain-muted">
          Follow a single request path through decision, evidence, and residual
          trust—or inspect maturity blockers directly.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button asChild variant="secondary" size="sm">
            <Link to="/change-gate">Change Gate</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/evidence/proof-capsules">Proof Capsules</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/security">Security boundaries</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/maturity">Maturity map</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a href="/#live-demo">Live demo</a>
          </Button>
        </div>
      </section>
    </main>
  );
}

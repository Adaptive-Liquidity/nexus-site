import { createFileRoute, Link } from "@tanstack/react-router";
import { ProofCapsuleExplorer } from "@/components/explorer/proof-capsule-explorer";
import { CapsuleAnatomy } from "@/components/home/capsule-anatomy";
import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/evidence/proof-capsules")({
  component: ProofCapsulesPage,
});

function ProofCapsulesPage() {
  return (
    <main className="mx-auto min-w-0 max-w-[72rem] space-y-12 overflow-x-hidden px-4 py-10 sm:px-6">
      <ProofCapsuleExplorer />

      <section aria-labelledby="anatomy-heading" className="space-y-4">
        <div>
          <h3
            id="anatomy-heading"
            className="font-serif text-xl text-porcelain sm:text-2xl"
          >
            Capsule anatomy
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-porcelain-muted">
            Spatial map of schema zones. Select a zone to read why the field
            exists and what it must not be over-read to mean.
          </p>
        </div>
        <Reveal>
          <CapsuleAnatomy />
        </Reveal>
      </section>

      <section
        className="rounded-xl border border-border bg-carbon p-5 sm:p-6"
        aria-labelledby="next-heading"
      >
        <h3
          id="next-heading"
          className="font-serif text-lg text-porcelain sm:text-xl"
        >
          Related evidence surfaces
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-porcelain-muted">
          Capsules are one artifact class. Pair inspection with the claims
          matrix and benchmarks before treating any path as generally available.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button asChild variant="secondary" size="sm">
            <Link to="/evidence/claims">Claims registry</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/evidence/benchmarks">Benchmarks</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/maturity">Maturity map</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a href="/#live-demo">Watch commit boundary demo</a>
          </Button>
        </div>
      </section>
    </main>
  );
}

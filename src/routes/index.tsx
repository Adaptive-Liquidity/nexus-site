import { createFileRoute, Link } from "@tanstack/react-router";
import { HERO, BELIEF, claimsRegistry, POSITIONING, BRAND } from "@/content";
import { HeroSchematic } from "@/components/site/hero-schematic";
import { MaturityBadge } from "@/components/site/maturity-badge";
import { Button } from "@/components/ui/button";
import { countByPublicStatus, toPublicStatus } from "@/content/maturity";
import { ProblemSection } from "@/components/home/problem-section";
import { ChangeGateSection } from "@/components/home/change-gate-section";
import { EvidenceSection } from "@/components/home/evidence-section";
import { CompositionSection } from "@/components/home/composition-section";
import { OutcomesSection } from "@/components/home/outcomes-section";
import { TrustSection } from "@/components/home/trust-section";
import { EvaluationSection } from "@/components/home/evaluation-section";
import { DemoPlayer } from "@/components/home/demo-player";
import { Reveal } from "@/components/home/reveal";
import { TransactionRail } from "@/components/home/transaction-rail";
import {
  TransactionBeatChrome,
  TransactionConnector,
} from "@/components/home/transaction-beat";
import { CinematicSequence, useCinematicProgress } from "@/components/home/cinematic-sequence";
import { CommitBoundaryStage } from "@/components/home/commit-boundary-stage";
import { CinematicHandoff } from "@/components/home/cinematic-handoff";

export const Route = createFileRoute("/")({
  component: HomePage,
});

/**
 * Phase C — homepage as one controlled transaction:
 * Intent → Gap → Execute → Model → Evidence → Compose → Outcomes → Trust → Evaluate
 */
function HomePage() {
  const counts = countByPublicStatus(
    claimsRegistry.capabilities.map((c) => ({
      status: toPublicStatus(
        c.status as
          | "CURRENT"
          | "IN_DEVELOPMENT"
          | "TARGET"
          | "EXPERIMENTAL"
          | "LIMITATION",
      ),
    })),
  );

  return (
    <main className="relative">
      <TransactionRail />

      <CinematicSequence>
      {/* ── TXN 01 · Intent (hero) ───────────────────────────── */}
      <section
        id="intent"
        className="relative overflow-hidden border-b border-border"
        aria-labelledby="hero-headline"
      >
        <TransactionBeatChrome beatId="intent">
          <div
            className="pointer-events-none absolute inset-0 top-10 opacity-[0.45]"
            aria-hidden
            style={{
              backgroundImage: `
                radial-gradient(ellipse 70% 55% at 75% 0%, color-mix(in oklab, var(--color-institution) 28%, transparent), transparent 70%),
                radial-gradient(ellipse 40% 40% at 10% 80%, color-mix(in oklab, var(--color-oxide) 12%, transparent), transparent 70%),
                linear-gradient(color-mix(in oklab, var(--color-porcelain) 3%, transparent) 1px, transparent 1px),
                linear-gradient(90deg, color-mix(in oklab, var(--color-porcelain) 3%, transparent) 1px, transparent 1px)
              `,
              backgroundSize: "auto, auto, 40px 40px, 40px 40px",
            }}
          />

          <div className="relative mx-auto max-w-[72rem] px-4 pb-4 pt-10 sm:px-6 sm:pt-14 lg:pt-16">
            <div className="grid gap-8 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-10">
              <div className="flex flex-col justify-center space-y-5">
                <div className="space-y-2 hero-enter">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-porcelain-subtle">
                    {HERO.categoryLabel}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="font-serif text-sm text-porcelain">
                      {BRAND.product}
                    </span>
                    <span className="text-porcelain-subtle/50" aria-hidden>
                      ·
                    </span>
                    <span className="text-sm text-porcelain-muted">
                      {POSITIONING.category}
                    </span>
                  </div>
                </div>

                <h1
                  id="hero-headline"
                  className="text-hero font-medium text-porcelain hero-enter hero-enter-delay-1"
                >
                  {HERO.headline}
                </h1>

                <p className="max-w-prose text-base leading-relaxed text-porcelain-muted sm:text-[1.05rem] hero-enter hero-enter-delay-2">
                  {HERO.supportingDefinition}
                </p>

                <p className="max-w-prose border-l-2 border-signal/50 pl-3 text-sm leading-relaxed text-porcelain-subtle hero-enter hero-enter-delay-2">
                  {HERO.lossLine}
                </p>

                <div className="flex flex-wrap gap-2 hero-enter hero-enter-delay-3">
                  <span className="inline-flex items-center gap-2 rounded-md border border-border bg-carbon/80 px-2.5 py-1.5 text-xs">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle">
                      Product
                    </span>
                    <span className="text-porcelain">{HERO.productObject}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-md border border-archive/25 bg-archive/5 px-2.5 py-1.5 text-xs">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-porcelain-subtle">
                      Evidence
                    </span>
                    <span className="text-porcelain">
                      {HERO.credibilityObject}
                    </span>
                  </span>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap hero-enter hero-enter-delay-3">
                  <Button asChild variant="default" size="lg">
                    <a href="#problem">See the control gap</a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href={HERO.primaryCta.href}>{HERO.primaryCta.label}</a>
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm hero-enter hero-enter-delay-4">
                  <a
                    href={HERO.modelCta.href}
                    className="text-porcelain-subtle underline-offset-4 transition-colors hover:text-porcelain-muted hover:underline"
                  >
                    {HERO.modelCta.label}
                  </a>
                  <span className="text-porcelain-subtle/40" aria-hidden>
                    ·
                  </span>
                  <Link
                    to="/maturity"
                    className="text-porcelain-subtle underline-offset-4 transition-colors hover:text-porcelain-muted hover:underline"
                  >
                    {HERO.tertiaryCta.label}
                  </Link>
                </div>
              </div>

              <div className="min-w-0 space-y-3 hero-enter hero-enter-delay-2">
                <HeroCinematicStage />
                <HeroSchematic />
              </div>
            </div>
          </div>

          <div className="relative mt-8 border-t border-border bg-carbon/95 backdrop-blur-sm">
            <div className="mx-auto flex max-w-[72rem] flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
              <p className="max-w-xl text-sm leading-snug text-porcelain-muted">
                {HERO.maturityStrip}
              </p>
              <div className="flex flex-wrap gap-2 shrink-0">
                <MaturityCount
                  status="implemented_foundation"
                  count={counts.implemented_foundation}
                />
                <MaturityCount
                  status="in_integration"
                  count={counts.in_integration}
                />
                <MaturityCount
                  status="target_architecture"
                  count={counts.target_architecture}
                />
                <MaturityCount
                  status="known_limitation"
                  count={counts.known_limitation}
                />
              </div>
            </div>
          </div>
        </TransactionBeatChrome>
      </section>

      <TransactionConnector from="Intent declared" to="Control gap" />

      {/* ── TXN 02 · Gap (problem) ──────────────────────────── */}
      <TransactionBeatChrome beatId="gap">
        <ProblemSection />
      </TransactionBeatChrome>
      </CinematicSequence>

      <CinematicHandoff />

      <TransactionConnector from="Gap identified" to="Execute at boundary" />

      {/* ── TXN 03 · Execute (product film) ─────────────────── */}
      <section
        id="live-demo"
        className="border-b border-border bg-void"
        aria-labelledby="demo-heading"
      >
        <TransactionBeatChrome beatId="execute">
          <div className="mx-auto max-w-[72rem] px-4 py-14 sm:px-6 sm:py-20">
            <Reveal>
              <div className="mb-8 max-w-2xl space-y-3">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-porcelain-subtle">
                  Product demonstration
                </p>
                <h2
                  id="demo-heading"
                  className="font-serif text-2xl text-porcelain sm:text-3xl"
                >
                  Watch a consequential action cross the commit boundary
                </h2>
                <p className="text-base leading-relaxed text-porcelain-muted">
                  A live product film of the Change Gate — not a marketing
                  video. Scrub any phase, toggle Commit vs Abort, compare both
                  paths, and walk Proof Capsule fields on Emit. Download
                  structure-identical fixtures. Maturity stays on every step.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <DemoPlayer />
            </Reveal>
          </div>
        </TransactionBeatChrome>
      </section>

      {/* Belief bridge — why the model exists */}
      <section className="border-b border-border bg-carbon">
        <div className="mx-auto max-w-[72rem] px-4 py-10 sm:px-6 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle">
                  Why this exists
                </p>
                <p className="mt-3 text-base leading-relaxed text-porcelain-muted sm:text-[1.05rem]">
                  {BELIEF.current}
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-xl border border-border bg-void p-5 sm:p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle">
                  Destination architecture
                </p>
                <p className="mt-3 text-sm leading-relaxed text-porcelain-muted">
                  {BELIEF.targetArchitecture}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <TransactionConnector from="Demo complete" to="Full operating model" />

      {/* ── TXN 04 · Model (Change Gate) ────────────────────── */}
      <TransactionBeatChrome beatId="model">
        <ChangeGateSection />
      </TransactionBeatChrome>

      <TransactionConnector from="Model inspected" to="Emit evidence" />

      {/* ── TXN 05 · Evidence ───────────────────────────────── */}
      <TransactionBeatChrome beatId="evidence" surface="paper">
        <EvidenceSection />
      </TransactionBeatChrome>

      <TransactionConnector from="Evidence reviewed" to="System composition" />

      {/* ── TXN 06 · Compose ────────────────────────────────── */}
      <TransactionBeatChrome beatId="compose">
        <CompositionSection />
      </TransactionBeatChrome>

      <TransactionConnector from="Layers composed" to="Finished outcomes" />

      {/* ── TXN 07 · Outcomes ───────────────────────────────── */}
      <TransactionBeatChrome beatId="outcomes">
        <OutcomesSection />
      </TransactionBeatChrome>

      <TransactionConnector from="Outcomes stated" to="Adversarial trust" />

      {/* ── TXN 08 · Trust ──────────────────────────────────── */}
      <TransactionBeatChrome beatId="trust">
        <TrustSection />
      </TransactionBeatChrome>

      <TransactionConnector from="Limits disclosed" to="Evaluation paths" />

      {/* ── TXN 09 · Evaluate ───────────────────────────────── */}
      <TransactionBeatChrome beatId="evaluate">
        <EvaluationSection />
      </TransactionBeatChrome>
    </main>
  );
}


function HeroCinematicStage() {
  const progress = useCinematicProgress();
  return <CommitBoundaryStage progress={progress} />;
}

function MaturityCount({
  status,
  count,
}: {
  status:
    | "implemented_foundation"
    | "in_integration"
    | "target_architecture"
    | "known_limitation";
  count: number;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-border bg-void/60 px-2.5 py-1">
      <MaturityBadge status={status} compact showLabel />
      <span className="font-mono text-xs tabular-nums text-porcelain">
        {count}
      </span>
    </div>
  );
}

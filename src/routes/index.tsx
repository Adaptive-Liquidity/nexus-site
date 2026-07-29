import { createFileRoute } from "@tanstack/react-router";
import { BELIEF } from "@/content";
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
import {
  PinnedCinematic,
  buildMaturityCounts,
} from "@/components/home/pinned-cinematic";
import { SceneHandoff } from "@/components/home/scene-handoff";

export const Route = createFileRoute("/")({
  component: HomePage,
});

/**
 * Homepage as one controlled transaction:
 * Intent → Gap (pinned cinematic) → Execute → Model → Evidence → …
 */
function HomePage() {
  const counts = buildMaturityCounts();

  return (
    <main className="relative">
      <TransactionRail />

      {/* ── TXN 01–02 · Intent → Gap (one pinned scene) ───── */}
      <PinnedCinematic maturityCounts={counts} />

      {/* Dense gap detail (scroll after pin) — no second diagram stack */}
      <TransactionBeatChrome beatId="gap">
        <ProblemSection />
      </TransactionBeatChrome>

      {/* Visual handoff: plane light continues into DemoPlayer */}
      <SceneHandoff>
        <section
          id="live-demo"
          className="relative"
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
      </SceneHandoff>

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

      <TransactionBeatChrome beatId="model">
        <ChangeGateSection />
      </TransactionBeatChrome>

      <TransactionConnector from="Model inspected" to="Emit evidence" />

      <TransactionBeatChrome beatId="evidence" surface="paper">
        <EvidenceSection />
      </TransactionBeatChrome>

      <TransactionConnector from="Evidence reviewed" to="System composition" />

      <TransactionBeatChrome beatId="compose">
        <CompositionSection />
      </TransactionBeatChrome>

      <TransactionConnector from="Layers composed" to="Finished outcomes" />

      <TransactionBeatChrome beatId="outcomes">
        <OutcomesSection />
      </TransactionBeatChrome>

      <TransactionConnector from="Outcomes stated" to="Adversarial trust" />

      <TransactionBeatChrome beatId="trust">
        <TrustSection />
      </TransactionBeatChrome>

      <TransactionConnector from="Limits disclosed" to="Evaluation paths" />

      <TransactionBeatChrome beatId="evaluate">
        <EvaluationSection />
      </TransactionBeatChrome>
    </main>
  );
}

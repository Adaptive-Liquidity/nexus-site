import { createFileRoute } from "@tanstack/react-router";
import { PageStub } from "@/components/site/page-stub";
import { HeroSchematic } from "@/components/site/hero-schematic";
import { CHANGE_GATE_PHASES } from "@/content/change-gate";
import { MaturityBadge } from "@/components/site/maturity-badge";
import { STAGE_0_NOTE } from "@/content/site-copy";

export const Route = createFileRoute("/change-gate")({
  component: ChangeGatePage,
});

function ChangeGatePage() {
  return (
    <PageStub
      eyebrow="Change Gate"
      title="Transactional Change Gate"
      description="First product: stage consequential changes, constrain authority, validate before commitment, commit or abort, emit portable evidence. Full interactive timeline with inspectors in Phase 1."
      phaseNote={STAGE_0_NOTE}
    >
      <HeroSchematic className="mb-8" />
      <ul className="space-y-2">
        {CHANGE_GATE_PHASES.map((phase) => (
          <li
            key={phase.id}
            className="flex flex-col gap-2 rounded-lg border border-border bg-carbon px-4 py-3 sm:flex-row sm:items-start sm:justify-between"
          >
            <div className="min-w-0 space-y-1">
              <p className="font-medium text-porcelain">{phase.label}</p>
              <p className="text-sm text-porcelain-muted">
                {phase.finishedCapability}
              </p>
              <p className="text-xs text-porcelain-subtle">
                Today: {phase.currentReality}
              </p>
            </div>
            <MaturityBadge status={phase.status} className="shrink-0 self-start" />
          </li>
        ))}
      </ul>
    </PageStub>
  );
}

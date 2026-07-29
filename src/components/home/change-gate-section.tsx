import { useState } from "react";
import { CHANGE_GATE_PHASES } from "@/content/change-gate";
import { STAGE_0_NOTE } from "@/content/site-copy";
import { MaturityBadge } from "@/components/site/maturity-badge";
import { SectionHeading } from "@/components/home/section-heading";
import { Reveal } from "@/components/home/reveal";
import { ChangeGateMap } from "@/components/home/change-gate-map";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export function ChangeGateSection() {
  const [openId, setOpenId] = useState<string>("stage");

  return (
    <section
      id="change-gate"
      className="border-b border-border bg-carbon"
      aria-labelledby="change-gate-heading"
    >
      <div className="mx-auto max-w-[72rem] px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="First product"
            title="Transactional Change Gate"
            description="The finished operating model for consequential agent action: stage the change, constrain authority, validate before commitment, require approval where policy demands it, commit or abort, emit signed evidence, compensate when rollback cannot reverse external effects."
          />
        </Reveal>
        <h3 id="change-gate-heading" className="sr-only">
          Detailed Change Gate workflow
        </h3>

        <Reveal delay={40}>
          <div className="mt-4 rounded-lg border border-signal/30 bg-signal/10 px-4 py-3 text-sm text-porcelain-muted">
            <span className="font-medium text-signal">Stage 0</span>
            <span className="mx-2 text-porcelain-subtle">·</span>
            {STAGE_0_NOTE}
          </div>
        </Reveal>

        <Reveal delay={70}>
          <div className="mt-8">
            <ChangeGateMap activeId={openId} onSelect={setOpenId} />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <Reveal delay={80}>
            <ol className="relative space-y-0 border-l border-border pl-0">
              {CHANGE_GATE_PHASES.map((phase, index) => {
                const open = openId === phase.id;
                return (
                  <li key={phase.id} className="relative">
                    <button
                      type="button"
                      onClick={() => setOpenId(phase.id)}
                      aria-expanded={open}
                      className={cn(
                        "group flex w-full items-start gap-3 border-b border-border/80 py-3.5 pl-6 pr-2 text-left transition-colors duration-200",
                        open ? "bg-void/40" : "hover:bg-void/25",
                      )}
                    >
                      <span
                        className={cn(
                          "absolute left-0 top-5 size-2.5 -translate-x-1/2 rounded-full border-2 border-carbon transition-transform duration-200",
                          open && "scale-125",
                          phase.status === "CURRENT" && "bg-oxide",
                          phase.status === "IN_DEVELOPMENT" && "bg-signal",
                          phase.status === "TARGET" && "bg-target-outline",
                        )}
                        aria-hidden
                      />
                      <span className="mt-0.5 font-mono text-[11px] tabular-nums text-porcelain-subtle">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-medium text-porcelain">
                            {phase.label}
                          </span>
                          <MaturityBadge
                            status={phase.status}
                            compact
                            showLabel
                          />
                        </div>
                        <div
                          className={cn(
                            "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                            open
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0",
                          )}
                        >
                          <div className="overflow-hidden">
                            <p className="mt-2 text-sm leading-relaxed text-porcelain-muted">
                              {phase.finishedCapability}
                            </p>
                          </div>
                        </div>
                      </div>
                      <ChevronRight
                        className={cn(
                          "mt-1 size-4 shrink-0 text-porcelain-subtle transition-transform duration-200",
                          open && "rotate-90",
                        )}
                        aria-hidden
                      />
                    </button>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-xl border border-border bg-void p-5 sm:p-6 lg:sticky lg:top-20 lg:self-start">
              {(() => {
                const phase =
                  CHANGE_GATE_PHASES.find((p) => p.id === openId) ??
                  CHANGE_GATE_PHASES[0]!;
                return (
                  <div className="space-y-5" key={phase.id}>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle">
                          Phase detail · forensic record
                        </p>
                        <h4 className="mt-1 font-serif text-xl text-porcelain">
                          {phase.label}
                        </h4>
                      </div>
                      <MaturityBadge status={phase.status} />
                    </div>

                    <div className="space-y-4">
                      <Block
                        label="Destination architecture"
                        body={phase.finishedCapability}
                      />
                      <Block
                        label="What exists today"
                        body={phase.currentReality}
                      />
                      {phase.limitations?.length ? (
                        <div className="rounded-md border border-controlled-red/30 bg-controlled-red/10 p-3">
                          <p className="text-[11px] font-medium uppercase tracking-wide text-controlled-red-fg">
                            Limitations
                          </p>
                          <ul className="mt-2 space-y-1 text-sm text-porcelain-muted">
                            {phase.limitations.map((l) => (
                              <li key={l}>! {l}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>

                    <p className="border-t border-border pt-4 text-xs leading-relaxed text-porcelain-subtle">
                      Status markers never imply general availability. Target
                      phases are destination architecture; Implemented
                      Foundations link to real evidence under Stage 0.
                    </p>
                  </div>
                );
              })()}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-wide text-porcelain-subtle">
        {label}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-porcelain-muted">
        {body}
      </p>
    </div>
  );
}

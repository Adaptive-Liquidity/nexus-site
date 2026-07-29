import { PROBLEM } from "@/content/site-copy";
import { SectionHeading } from "@/components/home/section-heading";
import { ProblemDemo } from "@/components/home/problem-demo";
import { Reveal } from "@/components/home/reveal";
import { ShieldAlert, GitCommitHorizontal, FileSearch } from "lucide-react";

const ICONS = [ShieldAlert, GitCommitHorizontal, FileSearch] as const;

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="border-b border-border bg-void"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto max-w-[72rem] px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="The control gap"
            title="Intent is not authority"
            description={PROBLEM.core}
          />
        </Reveal>
        <h3 id="problem-heading" className="sr-only">
          Uncontrolled transitions missing from agent stacks
        </h3>

        <Reveal delay={60}>
          <div className="mt-10">
            <ProblemDemo />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PROBLEM.transitions.map((t, i) => {
            const Icon = ICONS[i] ?? ShieldAlert;
            return (
              <Reveal key={t.missing} delay={80 + i * 70}>
                <article className="group relative h-full overflow-hidden rounded-xl border border-border bg-carbon p-5 transition-colors hover:border-porcelain/20">
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-controlled-red/50 to-transparent opacity-70"
                    aria-hidden
                  />
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-mono text-[10px] tabular-nums text-porcelain-subtle">
                      0{i + 1}
                    </span>
                    <Icon
                      className="size-4 text-controlled-red/80"
                      aria-hidden
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="mt-4 font-mono text-xs leading-relaxed text-porcelain-muted">
                    {t.from}
                  </p>
                  <div className="mt-4 rounded-md border border-controlled-red/25 bg-controlled-red/10 px-3 py-2">
                    <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-controlled-red-fg/90">
                      Missing control
                    </p>
                    <p className="mt-1 font-serif text-base text-porcelain">
                      {t.missing}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-porcelain-subtle">
            Model-level guardrails address prompts. They do not stage side
            effects, bind capability authority, or produce an independently
            inspectable execution record. That is the commit boundary.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

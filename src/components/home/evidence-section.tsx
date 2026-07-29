import { Link } from "@tanstack/react-router";
import { CAPSULE_HONESTY, sampleCapsules } from "@/content";
import { MaturityBadge } from "@/components/site/maturity-badge";
import { SectionHeading } from "@/components/home/section-heading";
import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { CapsuleAnatomy } from "@/components/home/capsule-anatomy";
import { ArrowDownRight, Download, Shield } from "lucide-react";

export function EvidenceSection() {
  const success = sampleCapsules.success;
  const failure = sampleCapsules.failureRollback;

  return (
    <section
      id="evidence"
      className="border-b border-border"
      aria-labelledby="evidence-heading"
    >
      <div className="bg-void">
        <div className="mx-auto flex max-w-[72rem] flex-col items-start gap-3 px-4 py-10 sm:px-6 sm:flex-row sm:items-center sm:justify-between sm:py-12">
          <Reveal>
            <div className="max-w-xl space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-porcelain-subtle">
                Credibility transition
              </p>
              <p className="font-serif text-xl text-porcelain sm:text-2xl">
                When an Implemented Foundation path executes, the runtime emits
                a permanent record.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex items-center gap-2 text-sm text-porcelain-muted">
              <span className="rounded-md border border-border bg-carbon px-3 py-1.5 font-mono text-xs">
                Emit Evidence
              </span>
              <ArrowDownRight
                className="size-4 text-signal animate-pulse-soft"
                aria-hidden
              />
              <span className="rounded-md border border-archive/30 bg-archive/10 px-3 py-1.5 font-mono text-xs text-archive">
                Proof Capsule
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      <div
        data-surface="paper"
        className="surface-paper border-t border-[color:var(--color-border-paper)]"
      >
        <div className="mx-auto max-w-[72rem] px-4 py-14 sm:px-6 sm:py-16">
          <Reveal>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <SectionHeading
                light
                eyebrow="The evidence behind the decision"
                title="Inspect a real Proof Capsule"
                description="Structure-identical fixtures from the Nexus ProofCapsule schema. Runtime-observed facts, capability evidence, snapshot/rollback, redaction, and mandatory limitations[] — never presented as mathematical proof of correctness."
              />
              <div className="flex flex-wrap gap-2">
                <MaturityBadge status="CURRENT" />
                <MaturityBadge status="IN_DEVELOPMENT" />
              </div>
            </div>
          </Reveal>
          <h3 id="evidence-heading" className="sr-only">
            Proof Capsule evidence preview
          </h3>

          <Reveal delay={40}>
            <p className="mt-4 max-w-2xl text-sm text-archive-ink-muted">
              {CAPSULE_HONESTY.explorerUiStatus}
            </p>
          </Reveal>

          <Reveal delay={50}>
            <div className="mt-8">
              <CapsuleAnatomy />
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Reveal delay={60}>
              <CapsuleCard
                title="Successful execution"
                scenario="success"
                tool={String(success.subject.tool_name)}
                duration={Number(success.subject.duration_ms)}
                capsuleId={String(success.capsule_id)}
                limitations={success.limitations as string[]}
                capabilities={{
                  required: success.capabilities.required as string[],
                  granted: success.capabilities.granted as string[],
                }}
                rollback={false}
                data={success}
                fileName="success.capsule.json"
              />
            </Reveal>
            <Reveal delay={120}>
              <CapsuleCard
                title="Capability denied → rollback"
                scenario="failure_rollback"
                tool={String(failure.subject.tool_name)}
                duration={Number(failure.subject.duration_ms)}
                capsuleId={String(failure.capsule_id)}
                limitations={failure.limitations as string[]}
                capabilities={{
                  required: failure.capabilities.required as string[],
                  granted: failure.capabilities.granted as string[],
                  mismatch: (failure.capabilities.mismatch as string[]) ?? [],
                }}
                rollback
                failureSummary={
                  failure.failure
                    ? String(
                        (failure.failure as { error_summary?: string })
                          .error_summary,
                      )
                    : undefined
                }
                data={failure}
                fileName="failure-rollback.capsule.json"
              />
            </Reveal>
          </div>

          <Reveal delay={80}>
            <div className="mt-8 grid gap-4 border-t border-[color:var(--color-border-paper)] pt-8 md:grid-cols-2">
              <div>
                <p className="flex items-center gap-2 text-sm font-medium text-archive-ink">
                  <Shield className="size-4" aria-hidden strokeWidth={1.5} />
                  What this evidence establishes
                </p>
                <p className="mt-2 text-sm leading-relaxed text-archive-ink-muted">
                  {CAPSULE_HONESTY.proves}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-archive-ink">
                  What it does not establish
                </p>
                <ul className="mt-2 space-y-1 text-sm text-archive-ink-muted">
                  {CAPSULE_HONESTY.doesNotProve.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-controlled-red" aria-hidden>
                        !
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="primary" size="lg">
                <Link to="/evidence/proof-capsules">
                  Open Proof Capsule Explorer
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-archive-ink/20 text-archive-ink hover:bg-archive-muted"
              >
                <Link to="/evidence/claims">View claims registry</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CapsuleCard({
  title,
  scenario,
  tool,
  duration,
  capsuleId,
  limitations,
  capabilities,
  rollback,
  failureSummary,
  data,
  fileName,
}: {
  title: string;
  scenario: string;
  tool: string;
  duration: number;
  capsuleId: string;
  limitations: string[];
  capabilities: {
    required: string[];
    granted: string[];
    mismatch?: string[];
  };
  rollback: boolean;
  failureSummary?: string;
  data: unknown;
  fileName: string;
}) {
  function download() {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <article
      className={`flex h-full flex-col rounded-xl border bg-white/40 p-5 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 ${
        rollback
          ? "border-controlled-red/25"
          : "border-[color:var(--color-border-paper)]"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h4 className="font-serif text-lg text-archive-ink">{title}</h4>
        <span className="font-mono text-[10px] uppercase tracking-wider text-archive-ink-muted">
          {scenario}
        </span>
      </div>

      <dl className="mt-4 space-y-1.5 font-mono text-[11px] text-archive-ink-muted">
        <Row k="capsule_id" v={capsuleId.slice(0, 18) + "…"} />
        <Row k="tool" v={tool} />
        <Row k="duration_ms" v={String(duration)} />
        <Row
          k="capabilities"
          v={`${capabilities.granted.length} granted / ${capabilities.required.length} required`}
        />
        {capabilities.mismatch?.length ? (
          <Row k="mismatch" v={capabilities.mismatch.join(", ")} />
        ) : null}
        <Row k="rollback" v={rollback ? "occurred" : "none"} />
      </dl>

      {failureSummary ? (
        <p className="mt-3 rounded-md border border-controlled-red/20 bg-controlled-red/5 px-3 py-2 text-xs leading-relaxed text-archive-ink-muted">
          {failureSummary}
        </p>
      ) : null}

      <div className="mt-4 flex-1">
        <p className="text-[11px] font-medium uppercase tracking-wide text-archive-ink">
          limitations[] · always present
        </p>
        <ul className="mt-2 max-h-28 space-y-1 overflow-y-auto font-mono text-[10px] leading-relaxed text-archive-ink-muted">
          {limitations.map((l) => (
            <li key={l}>! {l}</li>
          ))}
        </ul>
      </div>

      <Button
        type="button"
        size="sm"
        variant="outline"
        className="mt-4 w-full border-archive-ink/20 text-archive-ink hover:bg-archive"
        onClick={download}
      >
        <Download className="size-3.5" aria-hidden />
        Download JSON artifact
      </Button>
    </article>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3">
      <dt>{k}</dt>
      <dd className="truncate text-right text-archive-ink">{v}</dd>
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { OUTCOMES, WORKFLOWS, claimsRegistry } from "@/content";
import { SectionHeading } from "@/components/home/section-heading";
import { MaturityBadge } from "@/components/site/maturity-badge";
import { PUBLIC_STATUS_META } from "@/content/maturity";

type Hint = {
  implemented_foundation?: number;
  in_integration?: number;
  target_architecture?: number;
};

export function OutcomesSection() {
  const hints = claimsRegistry.homepageOutcomesMaturityHint as Record<
    string,
    Hint
  >;

  return (
    <section
      id="outcomes"
      className="border-b border-border bg-carbon"
      aria-labelledby="outcomes-heading"
    >
      <div className="mx-auto max-w-[72rem] px-4 py-14 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Completed platform"
          title="What the finished system enables"
          description="Outcomes of the destination architecture — not a feature laundry list. Every card leads with maturity composition so architecture is never mistaken for general availability."
        />
        <h3 id="outcomes-heading" className="sr-only">
          Platform outcomes with maturity composition
        </h3>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OUTCOMES.map((outcome) => {
            const hint = hints[outcome.id] ?? {};
            return (
              <article
                key={outcome.id}
                className="flex flex-col rounded-xl border border-border bg-void p-5"
              >
                <h4 className="font-serif text-lg text-porcelain">
                  {outcome.title}
                </h4>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {hint.implemented_foundation ? (
                    <CountChip
                      status="implemented_foundation"
                      n={hint.implemented_foundation}
                    />
                  ) : null}
                  {hint.in_integration ? (
                    <CountChip
                      status="in_integration"
                      n={hint.in_integration}
                    />
                  ) : null}
                  {hint.target_architecture ? (
                    <CountChip
                      status="target_architecture"
                      n={hint.target_architecture}
                    />
                  ) : null}
                </div>
                <ul className="mt-4 flex-1 space-y-1.5 text-sm text-porcelain-muted">
                  {outcome.capabilities.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="text-porcelain-subtle" aria-hidden>
                        ·
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-14">
          <SectionHeading
            eyebrow="Initial wedge"
            title="First supported workflows"
            description="The completed platform may be broad; the public product wedge stays concrete. Consequential software and repository change first — not universal control over arbitrary physical systems."
          />
          <ol className="mt-8 space-y-2">
            {WORKFLOWS.map((w, i) => (
              <li
                key={w}
                className="flex items-center gap-4 rounded-lg border border-border bg-void/60 px-4 py-3"
              >
                <span className="font-mono text-xs tabular-nums text-porcelain-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={
                    i === 0
                      ? "font-medium text-porcelain"
                      : "text-porcelain-muted"
                  }
                >
                  {w}
                </span>
                {i === 0 ? (
                  <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-oxide">
                    Primary wedge
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-porcelain-subtle">
            <Link
              to="/developers"
              className="text-porcelain-muted underline-offset-4 hover:text-porcelain hover:underline"
            >
              Developer entry points and repositories →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

function CountChip({
  status,
  n,
}: {
  status: keyof typeof PUBLIC_STATUS_META;
  n: number;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-carbon px-2 py-0.5">
      <MaturityBadge status={status} compact showLabel={false} />
      <span className="font-mono text-[11px] tabular-nums text-porcelain">
        {n}
      </span>
      <span className="text-[10px] text-porcelain-subtle">
        {PUBLIC_STATUS_META[status].shortLabel}
      </span>
    </span>
  );
}

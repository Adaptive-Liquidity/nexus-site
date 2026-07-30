import { MaturityBadge } from "@/components/site/maturity-badge";
import { KarStrip } from "@/components/visual-system/kar-strip";
import {
  type ObservatoryScenarioId,
  projectObservatory,
} from "@/content/observatory-scenarios";
import { TRUST_CLASS_META } from "@/content/trust-taxonomy";
import { cn } from "@/lib/utils";

function Chip({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "ok" | "deny" | "pending";
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded border px-1.5 py-0.5 font-mono text-[10px]",
        tone === "ok" && "border-oxide/40 bg-oxide/15 text-oxide-fg",
        tone === "deny" &&
          "border-controlled-red/40 bg-controlled-red/15 text-controlled-red-fg",
        tone === "pending" && "border-border text-porcelain-subtle",
        tone === "default" && "border-border bg-slate/40 text-porcelain-muted",
      )}
    >
      {children}
    </span>
  );
}

/**
 * Four synchronized lenses + KAR — pure projections of the immutable event stream.
 */
export function ExecutionObservatoryLenses({
  scenarioId,
  stepIndex,
  className,
}: {
  scenarioId: ObservatoryScenarioId;
  stepIndex: number;
  className?: string;
}) {
  const model = projectObservatory(scenarioId, stepIndex);
  const trust = TRUST_CLASS_META[model.trust];

  const fieldPreviews: Record<string, string> = {
    subject:
      scenarioId === "denial"
        ? "network_fetch"
        : scenarioId === "rollback"
          ? "risky-refactor"
          : "repo_patch",
    capabilities: model.authority.denied.length
      ? `mismatch · ${model.authority.denied.join(", ")}`
      : `${model.authority.granted.length} granted`,
    snapshot: model.unlocked.has("snapshot") ? "S₀ bound" : "—",
    failure: model.unlocked.has("failure")
      ? scenarioId === "denial"
        ? "capability_denied"
        : scenarioId === "rollback"
          ? "validator_failed"
          : "null"
      : "—",
    rollback: model.unlocked.has("rollback")
      ? model.rollbackOccurred
        ? "occurred · restored S₀"
        : "not asserted"
      : "—",
    "limitations[]": model.unlocked.has("limitations")
      ? "mandatory · non-empty"
      : "pending emit",
    signature: model.unlocked.has("signature")
      ? "optional · demo key · not production anchor"
      : "—",
  };

  return (
    <div
      className={cn("border-t border-border bg-carbon/40", className)}
      data-testid="execution-observatory-lenses"
      data-step={model.event.stage}
      data-scenario={scenarioId}
      data-trust={model.trust}
      data-rollback-occurred={String(model.rollbackOccurred)}
    >
      <KarStrip kar={model.kar} />

      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-2">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle">
          Execution Observatory · event-causal lenses
        </p>
        <p className="font-mono text-[10px] text-porcelain-muted">
          {trust.symbol} {trust.short} · step {stepIndex + 1}/
          {model.scenario.events.length}
        </p>
      </div>

      <div className="grid gap-px bg-border sm:grid-cols-2 xl:grid-cols-4">
        <section className="bg-void p-3" aria-label="State diff lens">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.12em] text-institution">
            01 · State Diff
          </h4>
          <dl className="mt-2 space-y-2 text-xs">
            <div>
              <dt className="text-porcelain-subtle">Baseline</dt>
              <dd className="mt-0.5 font-mono text-[11px] text-porcelain-muted">
                {model.state.baseline}
              </dd>
            </div>
            <div>
              <dt className="text-porcelain-subtle">Working state</dt>
              <dd className="mt-0.5 font-mono text-[11px] text-porcelain-muted">
                {model.state.working}
              </dd>
            </div>
            <div>
              <dt className="text-porcelain-subtle">Result</dt>
              <dd
                className={cn(
                  "mt-0.5 font-mono text-[11px]",
                  model.state.resultTone === "commit" && "text-oxide",
                  (model.state.resultTone === "abort" ||
                    model.state.resultTone === "deny") &&
                    "text-controlled-red-fg",
                  model.state.resultTone === "pending" && "text-porcelain-muted",
                )}
              >
                {model.state.result}
              </dd>
            </div>
          </dl>
        </section>

        <section className="bg-void p-3" aria-label="Authority lens">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.12em] text-institution">
            02 · Authority
          </h4>
          <div className="mt-2 space-y-2">
            <div>
              <p className="text-[10px] text-porcelain-subtle">Requested</p>
              <div className="mt-1 flex flex-wrap gap-1">
                {model.authority.requested.map((c) => (
                  <Chip key={c}>{c}</Chip>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] text-porcelain-subtle">Granted</p>
              <div className="mt-1 flex flex-wrap gap-1">
                {model.authority.granted.length ? (
                  model.authority.granted.map((c) => (
                    <Chip key={c} tone="ok">
                      {c}
                    </Chip>
                  ))
                ) : (
                  <Chip tone="pending">none yet</Chip>
                )}
              </div>
            </div>
            <div>
              <p className="text-[10px] text-porcelain-subtle">Denied</p>
              <div className="mt-1 flex flex-wrap gap-1">
                {model.authority.denied.length ? (
                  model.authority.denied.map((c) => (
                    <Chip key={c} tone="deny">
                      {c}
                    </Chip>
                  ))
                ) : (
                  <Chip tone="pending">—</Chip>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-void p-3" aria-label="Validator matrix">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.12em] text-institution">
            03 · Validator Matrix
          </h4>
          <ul className="mt-2 space-y-1.5">
            {model.validators.map((v) => (
              <li
                key={v.id}
                className="flex items-start justify-between gap-2 rounded border border-border/60 px-2 py-1.5"
              >
                <p className="truncate font-mono text-[11px] text-porcelain">
                  {v.id}
                </p>
                <div className="flex shrink-0 flex-col items-end gap-1">
                  <span
                    className={cn(
                      "font-mono text-[10px] uppercase",
                      v.outcome === "pass" && "text-oxide",
                      v.outcome === "fail" && "text-controlled-red-fg",
                      v.outcome === "skip" && "text-porcelain-subtle",
                      v.outcome === "pending" && "text-signal",
                    )}
                  >
                    {v.outcome}
                  </span>
                  <MaturityBadge status={v.maturity} compact showLabel={false} />
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-void p-3" aria-label="Evidence assembly">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.12em] text-institution">
            04 · Evidence Assembly
          </h4>
          <ul className="mt-2 space-y-1">
            {Object.entries(fieldPreviews).map(([name, preview]) => {
              const ready =
                model.unlocked.has(name.replace("[]", "")) ||
                model.unlocked.has(name);
              return (
                <li
                  key={name}
                  className={cn(
                    "flex items-center justify-between gap-2 rounded px-1.5 py-1 font-mono text-[11px]",
                    ready ? "bg-archive/10 text-porcelain" : "text-porcelain-subtle",
                  )}
                >
                  <span className="flex items-center gap-1.5">
                    <span
                      className={cn(
                        "size-1.5 rounded-full",
                        ready ? "bg-oxide" : "bg-porcelain-subtle/40",
                      )}
                      aria-hidden
                    />
                    {name}
                  </span>
                  <span className="truncate text-[10px] text-porcelain-muted">
                    {preview}
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="mt-2 text-[11px] leading-relaxed text-porcelain-muted">
            Fields unlock only after supporting events. Signature presence ≠
            production trust anchor.
          </p>
        </section>
      </div>
    </div>
  );
}

import { useMemo, useState } from "react";
import {
  CAPSULE_FIELD_EXPLAINERS,
  CAPSULE_HONESTY,
  sampleCapsules,
} from "@/content";
import { MaturityBadge } from "@/components/site/maturity-badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  type CapsuleRecord,
  copyText,
  downloadJson,
  formatCapsuleValue,
  getByPath,
  runStructuralChecks,
} from "@/lib/capsule-utils";
import {
  Check,
  Copy,
  Download,
  FileJson,
  ShieldAlert,
  X,
} from "lucide-react";

type ScenarioId = "success" | "failure";
type ViewMode = "inspect" | "json";

const SCENARIOS: {
  id: ScenarioId;
  label: string;
  fileName: string;
  capsule: CapsuleRecord;
}[] = [
  {
    id: "success",
    label: "Successful execution",
    fileName: "success.capsule.json",
    capsule: sampleCapsules.success as CapsuleRecord,
  },
  {
    id: "failure",
    label: "Capability denied → rollback",
    fileName: "failure-rollback.capsule.json",
    capsule: sampleCapsules.failureRollback as CapsuleRecord,
  },
];

const NAV_FIELDS = CAPSULE_FIELD_EXPLAINERS.map((f) => f.path);

/**
 * Full Proof Capsule Explorer — institutional evidence product surface.
 * Inspect fields, mandatory limitations, structural checks, download fixtures.
 */
export function ProofCapsuleExplorer({ className }: { className?: string }) {
  const [scenarioId, setScenarioId] = useState<ScenarioId>("success");
  const [fieldPath, setFieldPath] = useState("limitations");
  const [view, setView] = useState<ViewMode>("inspect");
  const [copied, setCopied] = useState<string | null>(null);

  const scenario = SCENARIOS.find((s) => s.id === scenarioId) ?? SCENARIOS[0]!;
  const capsule = scenario.capsule;

  const explainer =
    CAPSULE_FIELD_EXPLAINERS.find((e) => e.path === fieldPath) ??
    CAPSULE_FIELD_EXPLAINERS.find((e) => e.path === "limitations")!;

  const fieldValue = getByPath(capsule, fieldPath);
  const checks = useMemo(() => runStructuralChecks(capsule), [capsule]);
  const checksPass = checks.filter((c) => c.pass).length;

  const limitations = (capsule.limitations as string[]) ?? [];
  const subject = capsule.subject as {
    tool_name?: string;
    duration_ms?: number;
    run_id?: string;
  };
  const failure = capsule.failure as {
    failure_category?: string;
    error_summary?: string;
  } | null;
  const rollback = capsule.rollback as { occurred?: boolean } | null;
  const meta = capsule._meta as {
    honesty?: string;
    asOf?: string;
    scenario?: string;
  } | null;

  async function onCopy(text: string, key: string) {
    const ok = await copyText(text);
    if (ok) {
      setCopied(key);
      window.setTimeout(() => setCopied(null), 1600);
    }
  }

  return (
    <div className={cn("min-w-0 space-y-6", className)}>
      {/* Product header */}
      <header className="flex flex-col gap-4 border-b border-border pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-3">
          <div className="flex flex-wrap gap-2">
            <MaturityBadge status="CURRENT" />
            <MaturityBadge status="IN_DEVELOPMENT" />
          </div>
          <h2 className="font-serif text-2xl text-porcelain sm:text-3xl">
            Proof Capsule Explorer
          </h2>
          <p className="text-sm leading-relaxed text-porcelain-muted">
            Inspect structure-identical runtime receipts: field-by-field
            meaning, mandatory limitations[], and structural integrity checks.
            Production cryptographic verification and durable trust anchors
            remain separate maturity claims.
          </p>
          <p className="text-xs leading-relaxed text-porcelain-subtle">
            {CAPSULE_HONESTY.explorerUiStatus}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => downloadJson(capsule, scenario.fileName)}
          >
            <Download className="size-3.5" aria-hidden />
            Download capsule
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() =>
              onCopy(JSON.stringify(capsule, null, 2), "full-json")
            }
          >
            <Copy className="size-3.5" aria-hidden />
            {copied === "full-json" ? "Copied" : "Copy JSON"}
          </Button>
        </div>
      </header>

      {/* Scenario + view controls */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div
          className="flex flex-wrap rounded-lg border border-border p-0.5"
          role="tablist"
          aria-label="Capsule scenario"
        >
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={scenarioId === s.id}
              onClick={() => {
                setScenarioId(s.id);
                setFieldPath(
                  s.id === "failure" ? "failure" : "limitations",
                );
              }}
              className={cn(
                "min-h-9 rounded-md px-3 py-1.5 text-sm transition-colors",
                scenarioId === s.id
                  ? "bg-slate text-porcelain"
                  : "text-porcelain-muted hover:text-porcelain",
              )}
            >
              {s.label}
            </button>
          ))}
        </div>
        <div
          className="flex rounded-lg border border-border p-0.5"
          role="tablist"
          aria-label="Explorer view"
        >
          <button
            type="button"
            role="tab"
            aria-selected={view === "inspect"}
            onClick={() => setView("inspect")}
            className={cn(
              "min-h-9 rounded-md px-3 py-1.5 text-sm transition-colors",
              view === "inspect"
                ? "bg-slate text-porcelain"
                : "text-porcelain-muted hover:text-porcelain",
            )}
          >
            Inspect
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={view === "json"}
            onClick={() => setView("json")}
            className={cn(
              "min-h-9 rounded-md px-3 py-1.5 text-sm transition-colors",
              view === "json"
                ? "bg-slate text-porcelain"
                : "text-porcelain-muted hover:text-porcelain",
            )}
          >
            <FileJson className="mr-1.5 inline size-3.5" aria-hidden />
            Raw JSON
          </button>
        </div>
      </div>

      {/* Status strip */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <MetaChip
          label="capsule_id"
          value={String(capsule.capsule_id).slice(0, 13) + "…"}
        />
        <MetaChip label="tool" value={String(subject.tool_name ?? "—")} />
        <MetaChip
          label="duration_ms"
          value={String(subject.duration_ms ?? "—")}
        />
        <MetaChip
          label="outcome"
          value={
            failure
              ? `${failure.failure_category ?? "failure"}${rollback?.occurred ? " + rollback" : ""}`
              : "success"
          }
          tone={failure ? "abort" : "commit"}
        />
      </div>

      {view === "json" ? (
        <div
          data-surface="paper"
          className="surface-paper min-w-0 max-w-full overflow-hidden rounded-xl border border-[color:var(--color-border-paper)]"
        >
          <div className="flex items-center justify-between border-b border-[color:var(--color-border-paper)] px-4 py-2.5">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-archive-ink-muted">
              {scenario.fileName}
            </p>
            <button
              type="button"
              onClick={() =>
                onCopy(JSON.stringify(capsule, null, 2), "raw-json")
              }
              className="font-mono text-[10px] text-archive-ink-muted underline-offset-2 hover:underline"
            >
              {copied === "raw-json" ? "Copied" : "Copy"}
            </button>
          </div>
          <pre className="max-h-[36rem] overflow-auto p-4 font-mono text-[11px] leading-relaxed text-archive-ink break-all whitespace-pre-wrap">
            {JSON.stringify(capsule, null, 2)}
          </pre>
        </div>
      ) : (
        <div className="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)_minmax(0,0.95fr)]">
          {/* Field nav */}
          <nav
            className="min-w-0 max-w-full overflow-hidden rounded-xl border border-border bg-carbon"
            aria-label="Capsule fields"
          >
            <div className="border-b border-border px-3 py-2.5">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle">
                Schema fields
              </p>
            </div>
            <ul className="max-h-[32rem] space-y-0.5 overflow-y-auto p-2">
              {NAV_FIELDS.map((path) => {
                const exp = CAPSULE_FIELD_EXPLAINERS.find(
                  (e) => e.path === path,
                );
                const active = path === fieldPath;
                const val = getByPath(capsule, path);
                const empty =
                  val === null ||
                  val === undefined ||
                  (Array.isArray(val) && val.length === 0);
                return (
                  <li key={path}>
                    <button
                      type="button"
                      onClick={() => setFieldPath(path)}
                      className={cn(
                        "flex w-full items-start gap-2 rounded-md px-2.5 py-2 text-left transition-colors",
                        active
                          ? "bg-institution/20 text-porcelain"
                          : "text-porcelain-muted hover:bg-slate/50 hover:text-porcelain",
                      )}
                      aria-current={active ? "true" : undefined}
                    >
                      <span
                        className={cn(
                          "mt-1 size-1.5 shrink-0 rounded-full",
                          empty ? "bg-porcelain-subtle" : "bg-oxide",
                          path === "limitations" && "bg-signal",
                        )}
                        aria-hidden
                      />
                      <span className="min-w-0">
                        <span className="block text-sm font-medium">
                          {exp?.title ?? path}
                        </span>
                        <span className="block truncate font-mono text-[10px] text-porcelain-subtle">
                          {path}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Field inspector — paper surface */}
          <div
            data-surface="paper"
            className="surface-paper flex min-h-[28rem] min-w-0 max-w-full flex-col overflow-hidden rounded-xl border border-[color:var(--color-border-paper)]"
          >
            <div className="flex flex-wrap items-start justify-between gap-2 border-b border-[color:var(--color-border-paper)] px-4 py-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-archive-ink-muted">
                  Field record
                </p>
                <h3 className="mt-1 font-serif text-xl text-archive-ink">
                  {explainer.title}
                </h3>
                <code className="mt-1 block font-mono text-[11px] text-archive-ink-muted">
                  {fieldPath}
                </code>
              </div>
              <button
                type="button"
                onClick={() => onCopy(fieldPath, "path")}
                className="inline-flex min-h-9 items-center gap-1.5 rounded-md border border-archive-ink/15 px-2.5 text-xs text-archive-ink-muted hover:bg-archive-muted"
              >
                <Copy className="size-3.5" aria-hidden />
                {copied === "path" ? "Copied" : "Copy path"}
              </button>
            </div>

            <div className="flex-1 space-y-4 p-4">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wide text-archive-ink">
                  Why it exists
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-archive-ink-muted">
                  {explainer.whyItExists}
                </p>
              </div>

              {explainer.doesNotMean ? (
                <div className="rounded-md border border-controlled-red/25 bg-controlled-red/5 px-3 py-2.5">
                  <p className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-archive-ink">
                    <ShieldAlert className="size-3.5" aria-hidden />
                    Does not mean
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-archive-ink-muted">
                    {explainer.doesNotMean}
                  </p>
                </div>
              ) : null}

              <div>
                <p className="text-[11px] font-medium uppercase tracking-wide text-archive-ink">
                  Value in this capsule
                </p>
                <pre className="mt-1.5 max-h-48 overflow-auto rounded-md border border-archive-ink/10 bg-white/50 p-3 font-mono text-[11px] leading-relaxed text-archive-ink">
                  {formatCapsuleValue(fieldValue)}
                </pre>
              </div>

              {/* Always-visible limitations when not on that field */}
              {fieldPath !== "limitations" ? (
                <div className="rounded-md border border-signal/30 bg-signal/5 px-3 py-2.5">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-archive-ink">
                    limitations[] · always in scope
                  </p>
                  <p className="mt-1 text-xs text-archive-ink-muted">
                    {limitations.length} mandatory entries — open Limitations
                    field for full list (never dismissible).
                  </p>
                  <button
                    type="button"
                    onClick={() => setFieldPath("limitations")}
                    className="mt-2 font-mono text-[11px] text-archive-ink underline-offset-2 hover:underline"
                  >
                    Jump to limitations[]
                  </button>
                </div>
              ) : (
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-archive-ink">
                    Full limitations[] · expanded
                  </p>
                  <ul className="mt-2 max-h-56 space-y-1 overflow-y-auto rounded-md border border-archive-ink/10 bg-white/40 p-3 font-mono text-[11px] text-archive-ink-muted">
                    {limitations.map((l) => (
                      <li key={l} className="flex gap-2">
                        <span className="text-controlled-red" aria-hidden>
                          !
                        </span>
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {meta?.honesty ? (
              <div className="border-t border-[color:var(--color-border-paper)] px-4 py-2.5 text-xs leading-relaxed text-archive-ink-muted">
                Fixture honesty · as of {meta.asOf ?? "—"}: {meta.honesty}
              </div>
            ) : null}
          </div>

          {/* Structural checks + honesty */}
          <aside className="min-w-0 max-w-full space-y-4">
            <div className="rounded-xl border border-border bg-carbon">
              <div className="flex items-center justify-between border-b border-border px-3 py-2.5">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle">
                  Structural checks
                </p>
                <span className="font-mono text-[10px] tabular-nums text-porcelain-muted">
                  {checksPass}/{checks.length}
                </span>
              </div>
              <ul className="space-y-2 p-3">
                {checks.map((c) => (
                  <li
                    key={c.id}
                    className="rounded-md border border-border bg-void/40 px-2.5 py-2"
                  >
                    <div className="flex items-start gap-2">
                      {c.pass ? (
                        <Check
                          className="mt-0.5 size-3.5 shrink-0 text-oxide"
                          aria-hidden
                        />
                      ) : (
                        <X
                          className="mt-0.5 size-3.5 shrink-0 text-controlled-red"
                          aria-hidden
                        />
                      )}
                      <div className="min-w-0">
                        <p className="text-sm text-porcelain">{c.label}</p>
                        <p className="mt-0.5 text-[11px] leading-relaxed text-porcelain-subtle">
                          {c.detail}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="border-t border-border px-3 py-2 text-[11px] leading-relaxed text-porcelain-subtle">
                These checks validate fixture structure in the browser. They do
                not perform production signature verification or external
                anchoring.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-void p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-subtle">
                Evidence boundary
              </p>
              <p className="mt-2 text-sm leading-relaxed text-porcelain-muted">
                <span className="text-porcelain">Proves: </span>
                {CAPSULE_HONESTY.proves}
              </p>
              <ul className="mt-3 space-y-1.5">
                {CAPSULE_HONESTY.doesNotProve.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-xs leading-relaxed text-porcelain-subtle"
                  >
                    <span className="text-controlled-red" aria-hidden>
                      !
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {failure ? (
              <div className="rounded-xl border border-controlled-red/35 bg-controlled-red/10 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-controlled-red-fg">
                  Failure path
                </p>
                <p className="mt-2 text-sm text-porcelain">
                  {failure.failure_category}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-porcelain-muted">
                  {failure.error_summary}
                </p>
              </div>
            ) : null}
          </aside>
        </div>
      )}
    </div>
  );
}

function MetaChip({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "commit" | "abort";
}) {
  return (
    <div className="rounded-lg border border-border bg-carbon px-3 py-2.5">
      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle">
        {label}
      </p>
      <p
        className={cn(
          "mt-1 truncate font-mono text-sm",
          tone === "abort" && "text-controlled-red-fg",
          tone === "commit" && "text-oxide-fg",
          !tone && "text-porcelain",
        )}
      >
        {value}
      </p>
    </div>
  );
}

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { CommitBoundaryCanvas } from "@/components/home/commit-boundary-canvas";
import { Button } from "@/components/ui/button";
import { MaturityBadge } from "@/components/site/maturity-badge";
import { HERO, BRAND, POSITIONING, PROBLEM, claimsRegistry } from "@/content";
import { countByPublicStatus, toPublicStatus } from "@/content/maturity";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

function phaseOf(p: number) {
  if (p < 0.18) return { id: "intent", label: "Intent" };
  if (p < 0.35) return { id: "stage", label: "Stage" };
  if (p < 0.5) return { id: "constrain", label: "Constrain" };
  if (p < 0.62) return { id: "validate", label: "Validate" };
  if (p < 0.8) return { id: "decide", label: "Commit · Abort" };
  return { id: "emit", label: "Emit" };
}

/**
 * Sticky full-viewport cinematic continuum for Intent → Gap.
 * One scene. No stacked dashboard diagrams.
 */
export function PinnedCinematic({
  maturityCounts,
}: {
  maturityCounts: ReturnType<typeof countByPublicStatus>;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(reduced ? 0.88 : 0.04);
  const [phase, setPhase] = useState(phaseOf(reduced ? 0.88 : 0.04));

  useEffect(() => {
    if (reduced) {
      setProgress(0.88);
      setPhase(phaseOf(0.88));
      return;
    }
    const el = trackRef.current;
    if (!el) return;
    let frame = 0;
    const measure = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const total = Math.max(1, el.offsetHeight - window.innerHeight);
      const p = clamp01(-rect.top / total);
      setProgress(p);
      setPhase(phaseOf(p));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced]);

  // Overlay opacities
  const intentOpacity = reduced
    ? 1
    : progress < 0.12
      ? 1
      : progress < 0.28
        ? 1 - (progress - 0.12) / 0.16
        : 0;
  const gapOpacity = reduced
    ? 0
    : progress < 0.22
      ? 0
      : progress < 0.36
        ? (progress - 0.22) / 0.14
        : progress < 0.72
          ? 1
          : progress < 0.88
            ? 1 - (progress - 0.72) / 0.16
            : 0;
  const exitOpacity = reduced ? 0 : clamp01((progress - 0.82) / 0.12);

  return (
    <div
      ref={trackRef}
      id="intent"
      className="relative"
      style={{ height: reduced ? "100dvh" : "320vh" }}
    >
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden bg-void">
        {/* Scene */}
        <CommitBoundaryCanvas
          progress={progress}
          className="absolute inset-0 h-full w-full"
        />

        {/* Soft read scrim — left only, not a full dark sheet */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-full max-w-2xl bg-gradient-to-r from-void/90 via-void/55 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void via-void/50 to-transparent"
          aria-hidden
        />

        {/* Intent copy */}
        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-center px-4 pb-24 pt-20 sm:px-8 lg:px-12",
            "transition-opacity duration-300",
            intentOpacity < 0.05 && "pointer-events-none",
          )}
          style={{ opacity: intentOpacity }}
          aria-hidden={intentOpacity < 0.1}
        >
          <div className="max-w-xl space-y-5">
            <div className="space-y-2">
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
              className="text-hero font-medium tracking-tight text-porcelain drop-shadow-[0_2px_24px_rgba(7,9,11,0.8)]"
            >
              {HERO.headline}
            </h1>

            <p className="max-w-prose text-base leading-relaxed text-porcelain-muted sm:text-[1.05rem]">
              {HERO.supportingDefinition}
            </p>

            <p className="max-w-prose border-l-2 border-signal/50 pl-3 text-sm leading-relaxed text-porcelain-subtle">
              {HERO.lossLine}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="default" size="lg">
                <a href="#problem">See the control gap</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={HERO.primaryCta.href}>{HERO.primaryCta.label}</a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
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
        </div>

        {/* Gap copy — appears mid-scroll while scene stays pinned */}
        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-center px-4 pb-28 pt-20 sm:px-8 lg:px-12",
            "transition-opacity duration-300",
            gapOpacity < 0.05 && "pointer-events-none",
          )}
          style={{ opacity: gapOpacity }}
          aria-hidden={gapOpacity < 0.1}
        >
          <div className="max-w-lg space-y-4">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-porcelain-subtle">
              The control gap
            </p>
            <h2 className="font-serif text-3xl text-porcelain sm:text-4xl">
              Intent is not authority
            </h2>
            <p className="text-base leading-relaxed text-porcelain-muted">
              {PROBLEM.core}
            </p>
            <ul className="space-y-2 pt-2">
              {PROBLEM.transitions.slice(0, 3).map((t) => (
                <li
                  key={t.missing}
                  className="flex gap-3 text-sm text-porcelain-muted"
                >
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-controlled-red"
                    aria-hidden
                  />
                  <span>
                    <span className="text-porcelain">{t.missing}</span>
                    <span className="text-porcelain-subtle"> — missing</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom chrome: phase + maturity (minimal, not a diagram card) */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="mx-auto flex max-w-[72rem] flex-col gap-3 px-4 pb-5 pt-8 sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-12">
            <div className="space-y-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-porcelain-subtle">
                Operating model
              </p>
              <p className="font-serif text-lg text-porcelain sm:text-xl">
                {phase.label}
              </p>
              {phase.id === "decide" || progress > 0.65 ? (
                <p className="text-xs text-porcelain-muted">
                  <span className="text-controlled-red-fg">Abort</span>
                  <span className="mx-2 text-porcelain-subtle">·</span>
                  <span className="text-oxide-fg">Commit</span>
                  <span className="text-porcelain-subtle"> — both first-class</span>
                </p>
              ) : null}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] tabular-nums text-porcelain-subtle">
                {maturityCounts.implemented_foundation} foundation
                <span className="mx-1.5 text-porcelain-subtle/40">·</span>
                {maturityCounts.in_integration} integrating
              </span>
              <MaturityBadge status="TARGET" compact showLabel />
              <span className="font-mono text-[9px] uppercase tracking-wider text-porcelain-subtle">
                Atmospheric · not evidence
              </span>
            </div>
          </div>
          {/* Progress spine */}
          <div className="h-0.5 w-full bg-carbon">
            <div
              className="h-full bg-institution transition-[width] duration-100 ease-out"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        </div>

        {/* Exit cue into demo */}
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-16 flex justify-center transition-opacity",
            exitOpacity < 0.05 && "opacity-0",
          )}
          style={{ opacity: exitOpacity }}
          aria-hidden
        >
          <p className="rounded-full bg-void/70 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-muted backdrop-blur-sm">
            Entering live demonstration
          </p>
        </div>
      </div>
    </div>
  );
}

export function buildMaturityCounts() {
  return countByPublicStatus(
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
}

import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { CognitiveHypervisor } from "@/components/visual-system/cognitive-hypervisor";
import {
  hypervisorPhaseFromProgress,
  type HypervisorPhase,
} from "@/components/visual-system/phase-copy";
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
  if (p < 0.58) return { id: "validate", label: "Validate" };
  if (p < 0.8) return { id: "decide", label: "Commit · Abort" };
  return { id: "emit", label: "Emit" };
}

const CONTENT_GUTTER =
  "px-4 pb-24 pt-20 sm:px-8 lg:px-12 xl:pl-[var(--txn-content-gutter)] xl:pr-10";

const LAYER_ACTIVE = 0.1;

/** Atmospheric media underlays — Atmospheric · not evidence */
const HERO_PLATE = "/media/cinematic/hero/hero-plate-21x9.webp";
const HYPERVISOR_LOOP = "/media/cinematic/hypervisor/hypervisor-loop.mp4";
const HYPERVISOR_POSTER =
  "/media/cinematic/hypervisor/hypervisor-poster.webp";

/**
 * Sticky continuum Intent → Gap.
 * Primary instrument: Cognitive Hypervisor (product-native SVG cutaway).
 * Forensic Canvas demoted — not rendered as prestige hero.
 */
export function PinnedCinematic({
  maturityCounts,
}: {
  maturityCounts: ReturnType<typeof countByPublicStatus>;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const intentLayerRef = useRef<HTMLDivElement>(null);
  const gapLayerRef = useRef<HTMLDivElement>(null);
  const typeSafeRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(reduced ? 0.94 : 0.04);
  const [phase, setPhase] = useState(phaseOf(reduced ? 0.94 : 0.04));
  const [manualPhase, setManualPhase] = useState<HypervisorPhase | null>(null);
  const [inspectionMode, setInspectionMode] = useState(false);
  const lastScrollProgress = useRef(progress);

  useEffect(() => {
    if (reduced) {
      setProgress(0.94);
      setPhase(phaseOf(0.94));
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
      // Resume scroll drive when user scrolls after manual inspection
      if (inspectionMode && Math.abs(p - lastScrollProgress.current) > 0.02) {
        setInspectionMode(false);
        setManualPhase(null);
      }
      lastScrollProgress.current = p;
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
  }, [reduced, inspectionMode]);

  useEffect(() => {
    const publish = () => {
      const plane = typeSafeRef.current;
      const sticky = trackRef.current?.querySelector(
        "[data-type-safe-host]",
      ) as HTMLElement | null;
      if (!plane || !sticky) return;
      const pr = plane.getBoundingClientRect();
      const sr = sticky.getBoundingClientRect();
      const portrait = window.innerHeight > window.innerWidth * 0.95;
      const right = portrait ? 0 : Math.max(0, pr.right - sr.left + 12);
      sticky.style.setProperty("--type-safe-right", `${right}px`);
      document.documentElement.style.setProperty(
        "--type-safe-right",
        `${right}px`,
      );
    };
    publish();
    window.addEventListener("resize", publish);
    window.addEventListener("scroll", publish, { passive: true });
    const ro = new ResizeObserver(publish);
    if (typeSafeRef.current) ro.observe(typeSafeRef.current);
    return () => {
      window.removeEventListener("resize", publish);
      window.removeEventListener("scroll", publish);
      ro.disconnect();
    };
  }, [progress, reduced]);

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
        : progress < 0.55
          ? 1
          : progress < 0.64
            ? 1 - (progress - 0.55) / 0.09
            : 0;
  const exitOpacity = reduced ? 0 : clamp01((progress - 0.82) / 0.12);
  const showDualExits = reduced || progress >= 0.58;

  const intentActive = intentOpacity >= LAYER_ACTIVE;
  const gapActive = gapOpacity >= LAYER_ACTIVE;

  const scrollPhase = hypervisorPhaseFromProgress(
    reduced ? 0.94 : progress,
    false,
  );
  const activeHypervisorPhase = manualPhase ?? scrollPhase;

  useEffect(() => {
    const active = document.activeElement;
    if (!(active instanceof HTMLElement)) return;
    if (intentLayerRef.current?.contains(active) && !intentActive) active.blur();
    if (gapLayerRef.current?.contains(active) && !gapActive) active.blur();
  }, [intentActive, gapActive]);

  return (
    <div
      ref={trackRef}
      id="intent"
      className="relative"
      style={{ height: reduced ? "100dvh" : "320vh" }}
      data-testid="forensic-instrument"
      data-instrument="cognitive-hypervisor"
      data-pin-progress={progress.toFixed(3)}
      data-pin-phase={phase.id}
      data-control-mode={inspectionMode ? "manual" : "scroll"}
      data-reduced-motion={reduced ? "true" : "false"}
      aria-label="Cognitive Hypervisor controlled-transaction continuum"
    >
      <div
        className="sticky top-0 h-[100dvh] w-full overflow-hidden bg-void"
        data-type-safe-host
      >
        {/* Atmospheric underlay — Atmospheric · not evidence */}
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          aria-hidden
          data-atmospheric="hero-plate"
        >
          <img
            src={HERO_PLATE}
            alt=""
            className="h-full w-full scale-105 object-cover opacity-[0.16] saturate-[0.85]"
            decoding="async"
            fetchPriority="high"
          />
          {!reduced ? (
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-[0.2] mix-blend-screen"
              src={HYPERVISOR_LOOP}
              poster={HYPERVISOR_POSTER}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : null}
          <div className="absolute inset-0 bg-void/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-void via-void/35 to-transparent sm:via-void/15" />
        </div>

        <div className="absolute inset-0 z-[1]">
          <CognitiveHypervisor
            progress={progress}
            phase={activeHypervisorPhase}
            reducedMotion={reduced}
            interactive
            onPhaseChange={(p) => {
              setManualPhase(p);
              setInspectionMode(true);
              lastScrollProgress.current = progress;
            }}
            className="h-full w-full bg-transparent"
          />
        </div>
        {inspectionMode ? (
          <p
            className="pointer-events-none absolute bottom-3 left-1/2 z-[35] -translate-x-1/2 rounded-md border border-institution/40 bg-void/90 px-2 py-1 font-mono text-[10px] text-porcelain-muted"
            role="status"
            aria-live="polite"
          >
            Manual inspection · scroll to resume
          </p>
        ) : null}

        <div
          ref={typeSafeRef}
          data-testid="type-safe-plane"
          className={cn(
            "pointer-events-none absolute z-[1]",
            "inset-x-0 bottom-0 top-[48%] sm:top-0 sm:bottom-0 sm:left-0 sm:right-auto",
            "w-full sm:max-w-[min(100%,34rem)] xl:max-w-[min(38%,30rem)]",
            "xl:pl-[var(--txn-content-gutter)]",
          )}
          aria-hidden
        >
          <div
            className="h-full w-full sm:hidden"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--color-void) 70%, transparent) 12%, var(--color-void) 28%, var(--color-void) 100%)",
            }}
          />
          <div
            className="hidden h-full w-full sm:block"
            style={{
              background:
                "linear-gradient(90deg, var(--color-void) 0%, var(--color-void) 72%, color-mix(in oklab, var(--color-void) 80%, transparent) 90%, transparent 100%)",
            }}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-36 bg-gradient-to-t from-void via-void/80 to-transparent md:h-32"
          aria-hidden
        />

        {/* Intent */}
        <div
          ref={intentLayerRef}
          data-narrative-layer="intent"
          data-narrative-active={intentActive ? "true" : "false"}
          className={cn(
            "absolute inset-x-0 bottom-0 top-12 z-[2] flex flex-col justify-end sm:justify-center sm:top-12",
            CONTENT_GUTTER,
            "pb-32 transition-opacity duration-300 sm:pb-28",
            !intentActive && "pointer-events-none",
          )}
          style={{ opacity: intentOpacity }}
          aria-hidden={!intentActive}
          {...(!intentActive ? ({ inert: true } as { inert: boolean }) : {})}
        >
          <div className="max-w-xl space-y-5 px-1 py-2 sm:px-0">
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
              className="text-hero text-balance font-medium tracking-tight text-porcelain"
            >
              {HERO.headline}
            </h1>
            <p className="max-w-prose text-pretty text-base leading-relaxed text-porcelain-muted sm:text-[1.05rem]">
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

        {/* Gap */}
        <div
          ref={gapLayerRef}
          data-narrative-layer="gap"
          data-narrative-active={gapActive ? "true" : "false"}
          className={cn(
            "absolute inset-x-0 bottom-0 top-12 z-[2] flex flex-col justify-end sm:justify-center sm:top-12",
            CONTENT_GUTTER,
            "pb-32 transition-opacity duration-300 sm:pb-28",
            !gapActive && "pointer-events-none",
          )}
          style={{ opacity: gapOpacity }}
          aria-hidden={!gapActive}
          {...(!gapActive ? ({ inert: true } as { inert: boolean }) : {})}
        >
          <div className="max-w-lg space-y-4 px-1 py-2 sm:px-0">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-porcelain-subtle">
              The control gap
            </p>
            <h2 className="text-balance font-serif text-3xl text-porcelain sm:text-4xl">
              Intent is not authority
            </h2>
            <p className="text-pretty text-base leading-relaxed text-porcelain-muted">
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

        {(reduced || progress > 0.82) && (
          <div
            data-testid="proof-capsule-silhouette"
            data-instrument-node="capsule"
            className={cn(
              "pointer-events-none absolute z-[5] rounded-md border border-archive-ink/25 bg-archive px-3 py-2 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)]",
              "right-4 bottom-32 sm:right-10 md:right-[10%] lg:right-[8%]",
            )}
            aria-hidden
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-archive-ink/75">
              Proof Capsule
            </p>
            <div className="mt-1.5 space-y-1">
              <div className="h-0.5 w-16 bg-archive-ink/30" />
              <div className="h-0.5 w-12 bg-archive-ink/22" />
              <div className="h-0.5 w-14 bg-archive-ink/18" />
            </div>
          </div>
        )}

        {/* Bottom chrome */}
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 z-10",
            "xl:pl-[var(--txn-content-gutter)]",
          )}
        >
          <div className="mx-auto flex max-w-[72rem] flex-col gap-3 px-4 pb-5 pt-8 sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-12 xl:pl-0 xl:pr-10">
            <div className="space-y-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-porcelain-subtle">
                Operating model · FIG-HYP-01
              </p>
              <p
                className="font-serif text-lg text-porcelain sm:text-xl"
                data-testid="operating-model-phase"
                data-phase-id={phase.id}
              >
                {phase.label}
              </p>
              {showDualExits ? (
                <p
                  className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-porcelain-muted"
                  data-testid="dual-exit-chrome"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      className="inline-block size-2.5 rotate-45 bg-controlled-red ring-1 ring-controlled-red-fg/40"
                      aria-hidden
                    />
                    <span className="font-medium text-controlled-red-fg">
                      Abort
                    </span>
                  </span>
                  <span className="text-porcelain-subtle">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      className="inline-block size-2.5 bg-oxide ring-1 ring-oxide-fg/40"
                      aria-hidden
                    />
                    <span className="font-medium text-oxide-fg">Commit</span>
                  </span>
                  <span className="text-porcelain-subtle">
                    — both first-class
                  </span>
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
                Mechanism · not scenery
              </span>
            </div>
          </div>
          <div
            className="h-0.5 w-full bg-carbon"
            data-testid="hero-progress-spine"
          >
            <div
              className="h-full bg-institution transition-[width] duration-100 ease-out"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        </div>

        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-16 z-[6] flex justify-center transition-opacity",
            exitOpacity < 0.05 && "opacity-0",
          )}
          style={{ opacity: exitOpacity }}
          aria-hidden
        >
          <p className="rounded-full bg-void/80 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-porcelain-muted">
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

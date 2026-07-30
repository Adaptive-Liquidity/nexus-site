import { useEffect, useState } from "react";
import { TRANSACTION_BEATS } from "@/content/transaction-beats";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Sticky scroll progress for the homepage "controlled transaction".
 * Spine (collapsed) from page top through the complete DemoPlayer section —
 * never expand full labels over DemoPlayer left chrome.
 * Full labeled form only after #live-demo has fully scrolled past.
 * Mobile: top compact progress.
 */
export function TransactionRail() {
  const reduced = useReducedMotion();
  const [activeId, setActiveId] = useState(TRANSACTION_BEATS[0]!.id);
  const [progress, setProgress] = useState(0);
  /** Spine through pin + demo; full after demo releases */
  const [spineMode, setSpineMode] = useState(true);

  useEffect(() => {
    const sections = TRANSACTION_BEATS.map((b) => {
      const el = document.querySelector(b.href);
      return { id: b.id, el };
    }).filter((s) => s.el);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        if (!top?.target?.id) return;
        const beat = TRANSACTION_BEATS.find(
          (b) => b.href === `#${top.target.id}`,
        );
        if (beat) setActiveId(beat.id);
      },
      {
        rootMargin: "-20% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    for (const s of sections) {
      if (s.el) observer.observe(s.el);
    }

    function onScroll() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max <= 0) {
        setProgress(0);
        return;
      }
      setProgress(Math.min(1, Math.max(0, window.scrollY / max)));
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Spine until DemoPlayer section fully clears the viewport top.
  // Covers #intent pin + gap detail + entire #live-demo — prevents full-rail
  // collision with Demo controls (was only testing against #hero-headline).
  useEffect(() => {
    const update = () => {
      const demo = document.getElementById("live-demo");
      if (!demo) {
        // Fallback: spine while pin visible
        const pin = document.getElementById("intent");
        if (!pin) {
          setSpineMode(false);
          document.documentElement.dataset.txnRail = "full";
          return;
        }
        const rect = pin.getBoundingClientRect();
        const on = rect.bottom > 48 && rect.top < window.innerHeight;
        setSpineMode(on);
        document.documentElement.dataset.txnRail = on ? "spine" : "full";
        return;
      }
      const demoRect = demo.getBoundingClientRect();
      // Keep spine while any part of demo (or content above it) still needs clearance:
      // expand only after the demo section has scrolled fully above the header band.
      const pastDemo = demoRect.bottom < 56;
      setSpineMode(!pastDemo);
      document.documentElement.dataset.txnRail = pastDemo ? "full" : "spine";
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const demo = document.getElementById("live-demo");
    const pin = document.getElementById("intent");
    const io = new IntersectionObserver(update, {
      threshold: [0, 0.01, 0.1, 0.5, 1],
    });
    if (demo) io.observe(demo);
    if (pin) io.observe(pin);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      delete document.documentElement.dataset.txnRail;
    };
  }, []);

  const activeIndex = Math.max(
    0,
    TRANSACTION_BEATS.findIndex((b) => b.id === activeId),
  );
  const active = TRANSACTION_BEATS[activeIndex]!;

  return (
    <>
      <div className="sticky top-14 z-40 border-b border-border bg-void/90 backdrop-blur-md xl:hidden">
        <div className="mx-auto flex max-w-[72rem] items-center gap-3 px-4 py-2 sm:px-6">
          <span className="font-mono text-[10px] tabular-nums text-porcelain-subtle">
            {String(active.step).padStart(2, "0")}/
            {String(TRANSACTION_BEATS.length).padStart(2, "0")}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs text-porcelain">
              <span className="text-porcelain-muted">{active.gateMetaphor}</span>
              <span className="mx-1.5 text-porcelain-subtle/50">·</span>
              {active.connector}
            </p>
            <div className="mt-1 h-0.5 overflow-hidden rounded-full bg-slate">
              <div
                className={cn(
                  "h-full bg-institution",
                  !reduced && "transition-[width] duration-200 ease-out",
                )}
                style={{
                  width: `${((activeIndex + 1) / TRANSACTION_BEATS.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <nav
        className="pointer-events-none fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 pl-2 xl:block xl:pl-3"
        aria-label="Transaction progress"
        data-rail-mode={spineMode ? "spine" : "full"}
        data-testid="transaction-rail"
      >
        <div
          className={cn(
            "pointer-events-auto border border-border/80 bg-carbon/95 shadow-[0_16px_48px_-24px_rgba(0,0,0,0.9)] backdrop-blur-md",
            !reduced && "transition-[width,padding] duration-200 ease-out",
            // Softer chrome: less card-panel emphasis
            spineMode
              ? "w-11 rounded-lg p-1.5"
              : "w-[9.5rem] rounded-lg p-2.5",
          )}
        >
          {!spineMode ? (
            <p className="mb-2 px-1 font-mono text-[9px] uppercase tracking-[0.14em] text-porcelain-subtle">
              Controlled txn
            </p>
          ) : (
            <p className="sr-only">Controlled transaction progress</p>
          )}
          <ol className="relative space-y-0.5">
            {!spineMode ? (
              <div
                className="absolute bottom-2 left-[15px] top-2 w-px bg-border"
                aria-hidden
              />
            ) : (
              <div
                className="absolute bottom-1 left-1/2 top-1 w-px -translate-x-1/2 bg-border"
                aria-hidden
              />
            )}
            {TRANSACTION_BEATS.map((beat, i) => {
              const isActive = beat.id === activeId;
              const isDone = i < activeIndex;
              return (
                <li key={beat.id} className="relative">
                  <a
                    href={beat.href}
                    title={`${beat.label} — ${beat.gateMetaphor}`}
                    className={cn(
                      "flex items-start rounded-md transition-colors",
                      spineMode
                        ? "justify-center px-0 py-1.5"
                        : "gap-2 px-1.5 py-1.5",
                      isActive
                        ? "bg-institution/15 text-porcelain"
                        : "text-porcelain-subtle hover:bg-slate/50 hover:text-porcelain-muted",
                    )}
                    aria-current={isActive ? "step" : undefined}
                    aria-label={`${beat.label}: ${beat.gateMetaphor}`}
                  >
                    <span
                      className={cn(
                        "relative z-[1] flex shrink-0 items-center justify-center rounded-full border font-mono",
                        spineMode
                          ? "size-4 text-[8px]"
                          : "mt-0.5 size-3.5 text-[8px]",
                        isActive &&
                          "border-institution bg-institution text-porcelain",
                        isDone &&
                          !isActive &&
                          "border-oxide/50 bg-oxide/30 text-oxide-fg",
                        !isActive &&
                          !isDone &&
                          "border-border bg-void text-porcelain-subtle",
                      )}
                      aria-hidden
                    >
                      {isDone && !isActive ? "✓" : ""}
                    </span>
                    {!spineMode ? (
                      <span className="min-w-0">
                        <span className="block truncate text-[11px] font-medium leading-tight">
                          {beat.label}
                        </span>
                        <span className="block truncate font-mono text-[9px] text-porcelain-subtle">
                          {beat.gateMetaphor}
                        </span>
                      </span>
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ol>
          {!spineMode ? (
            <div className="mt-2 border-t border-border pt-2">
              <div className="h-0.5 overflow-hidden rounded-full bg-slate">
                <div
                  className={cn(
                    "h-full bg-institution",
                    !reduced && "transition-[width] duration-150 ease-out",
                  )}
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
              <p className="mt-1.5 px-0.5 font-mono text-[9px] tabular-nums text-porcelain-subtle">
                {Math.round(progress * 100)}% page
              </p>
            </div>
          ) : (
            <div className="mt-1.5 px-0.5">
              <div className="mx-auto h-8 w-0.5 overflow-hidden rounded-full bg-slate">
                <div
                  className="w-full bg-institution"
                  style={{ height: `${progress * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

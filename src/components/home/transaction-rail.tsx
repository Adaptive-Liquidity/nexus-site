import { useEffect, useState } from "react";
import { TRANSACTION_BEATS } from "@/content/transaction-beats";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Sticky scroll progress for the homepage "controlled transaction".
 * Desktop XL: left rail. Mobile: top compact progress.
 */
export function TransactionRail() {
  const reduced = useReducedMotion();
  const [activeId, setActiveId] = useState(TRANSACTION_BEATS[0]!.id);
  const [progress, setProgress] = useState(0);

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

  const activeIndex = Math.max(
    0,
    TRANSACTION_BEATS.findIndex((b) => b.id === activeId),
  );
  const active = TRANSACTION_BEATS[activeIndex]!;

  return (
    <>
      {/* Mobile / tablet top progress */}
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

      {/* Desktop left rail (xl+) */}
      <nav
        className="pointer-events-none fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 pl-3 xl:block xl:pl-5"
        aria-label="Transaction progress"
      >
        <div className="pointer-events-auto w-[9.5rem] rounded-xl border border-border bg-carbon/90 p-2.5 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md">
          <p className="mb-2 px-1 font-mono text-[9px] uppercase tracking-[0.14em] text-porcelain-subtle">
            Controlled txn
          </p>
          <ol className="relative space-y-0.5">
            <div
              className="absolute bottom-2 left-[15px] top-2 w-px bg-border"
              aria-hidden
            />
            {TRANSACTION_BEATS.map((beat, i) => {
              const isActive = beat.id === activeId;
              const isDone = i < activeIndex;
              return (
                <li key={beat.id} className="relative">
                  <a
                    href={beat.href}
                    className={cn(
                      "flex items-start gap-2 rounded-md px-1.5 py-1.5 transition-colors",
                      isActive
                        ? "bg-institution/15 text-porcelain"
                        : "text-porcelain-subtle hover:bg-slate/50 hover:text-porcelain-muted",
                    )}
                    aria-current={isActive ? "step" : undefined}
                  >
                    <span
                      className={cn(
                        "relative z-[1] mt-0.5 flex size-3.5 shrink-0 items-center justify-center rounded-full border text-[8px] font-mono",
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
                    <span className="min-w-0">
                      <span className="block truncate text-[11px] font-medium leading-tight">
                        {beat.label}
                      </span>
                      <span className="block truncate font-mono text-[9px] text-porcelain-subtle">
                        {beat.gateMetaphor}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
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
        </div>
      </nav>
    </>
  );
}

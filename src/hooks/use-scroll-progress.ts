import { useEffect, useState, type RefObject } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

/**
 * Maps scroll of `ref` element through the viewport to 0…1.
 * rAF-scheduled, reverse-scroll safe, cleans up listeners.
 * Reduced motion → fixed progress (default 1 = complete static state).
 */
export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  options?: { reducedProgress?: number },
) {
  const reduced = useReducedMotion();
  const reducedProgress = options?.reducedProgress ?? 1;
  const [progress, setProgress] = useState(reduced ? reducedProgress : 0);

  useEffect(() => {
    if (reduced) {
      setProgress(reducedProgress);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let frame = 0;

    const measure = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // Start when top enters lower third; complete when bottom leaves upper third
      const start = vh * 0.75;
      const end = vh * 0.2;
      const travel = Math.max(1, rect.height + (start - end));
      const raw = (start - rect.top) / travel;
      setProgress(clamp01(raw));
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
  }, [ref, reduced, reducedProgress]);

  return progress;
}

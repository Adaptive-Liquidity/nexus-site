import { createContext, useContext, useRef, type ReactNode } from "react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export const CinematicProgressContext = createContext(0.15);

/**
 * Intent → Gap continuum. Provides scroll-linked progress 0…1 to children.
 */
export function CinematicSequence({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(ref, { reducedProgress: 0.85 });

  return (
    <div ref={ref} className="relative">
      <CinematicProgressContext.Provider value={progress}>
        {children}
      </CinematicProgressContext.Provider>
    </div>
  );
}

export function useCinematicProgress() {
  return useContext(CinematicProgressContext);
}

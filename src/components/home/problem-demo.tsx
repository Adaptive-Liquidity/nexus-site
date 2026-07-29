import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { X, Check } from "lucide-react";
import { ForensicFrame } from "@/components/home/forensic-frame";

/**
 * Animated before/after: uncontrolled agent stack vs commit boundary.
 */
export function ProblemDemo({ className }: { className?: string }) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView({ once: true, threshold: 0.2 });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!inView || reduced) return;
    const id = window.setInterval(() => setTick((t) => (t + 1) % 6), 900);
    return () => window.clearInterval(id);
  }, [inView, reduced]);

  const badActive = reduced ? 3 : Math.min(tick, 3);
  const goodActive = reduced ? 4 : Math.min(tick, 4);

  return (
    <div ref={ref} className={className}>
    <ForensicFrame
      title="Control gap comparison"
      refId="FIG-GAP-00 · before / after"
      classification="PROBLEM STATEMENT"
      footer="Model-level guardrails do not create a commit boundary. The right path stages, binds authority, validates, then emits evidence."
    >
    <div className={cn("grid gap-4 lg:grid-cols-2")}>
      {/* Uncontrolled */}
      <div className="overflow-hidden rounded-xl border border-controlled-red/30 bg-carbon">
        <div className="flex items-center gap-2 border-b border-controlled-red/20 px-4 py-2.5">
          <X className="size-3.5 text-controlled-red" aria-hidden />
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle">
            Without a commit boundary
          </p>
        </div>
        <div className="space-y-2 p-4">
          {[
            "Model emits tool call",
            "Tool executes immediately",
            "Side effect lands (prod / repo)",
            "Report accepted as truth",
          ].map((label, i) => (
            <FlowNode
              key={label}
              label={label}
              active={i <= badActive}
              current={i === badActive && !reduced}
              tone="bad"
              index={i}
            />
          ))}
          <p className="pt-2 text-xs leading-relaxed text-porcelain-subtle">
            Missing: authority boundary · transaction boundary · independent
            evidence
          </p>
        </div>
      </div>

      {/* Controlled */}
      <div className="overflow-hidden rounded-xl border border-oxide/35 bg-carbon">
        <div className="flex items-center gap-2 border-b border-oxide/20 px-4 py-2.5">
          <Check className="size-3.5 text-oxide" aria-hidden />
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-porcelain-subtle">
            With Nexus-IQ commit boundary
          </p>
        </div>
        <div className="space-y-2 p-4">
          {[
            "Model proposes action",
            "Stage + bind authority",
            "Validate before commit",
            "Commit or abort",
            "Emit Proof Capsule",
          ].map((label, i) => (
            <FlowNode
              key={label}
              label={label}
              active={i <= goodActive}
              current={i === goodActive && !reduced}
              tone="good"
              index={i}
            />
          ))}
          <p className="pt-2 text-xs leading-relaxed text-porcelain-subtle">
            Intent never becomes irreversible effect without surviving the gate.
          </p>
        </div>
      </div>
    </div>
    </ForensicFrame>
    </div>
  );
}

function FlowNode({
  label,
  active,
  current,
  tone,
  index,
}: {
  label: string;
  active: boolean;
  current: boolean;
  tone: "bad" | "good";
  index: number;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-md border px-3 py-2.5 transition-[opacity,border-color,background-color,transform] duration-500 ease-out",
        active ? "opacity-100" : "opacity-30",
        current && "scale-[1.01]",
        tone === "bad" && active && "border-controlled-red/30 bg-controlled-red/10",
        tone === "good" && active && "border-oxide/30 bg-oxide/10",
        !active && "border-border bg-void/40",
      )}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <span
        className={cn(
          "size-2 shrink-0 rounded-full",
          !active && "bg-porcelain-subtle",
          active && tone === "bad" && "bg-controlled-red",
          active && tone === "good" && "bg-oxide",
          current && "animate-pulse-soft",
        )}
        aria-hidden
      />
      <span className="text-sm text-porcelain">{label}</span>
    </div>
  );
}

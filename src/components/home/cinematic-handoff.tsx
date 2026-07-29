/**
 * Transparent → void/carbon gradient bridge after cinematic sequence.
 * Isolates media/blend layers so headings remain unaffected.
 */
export function CinematicHandoff({
  label = "From operating model to live demonstration",
}: {
  label?: string;
}) {
  return (
    <div
      className="relative isolate border-b border-border"
      aria-hidden={false}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-void"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-carbon via-void/80 to-void"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[72rem] px-4 py-8 sm:px-6">
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.16em] text-porcelain-subtle">
          {label}
        </p>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm leading-relaxed text-porcelain-muted">
          Atmospheric model ends here. The DemoPlayer is product proof —
          interactive commit and abort with structure-identical capsule emission.
        </p>
      </div>
    </div>
  );
}

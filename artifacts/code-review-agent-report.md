# Code Review — Nexus-IQ Hero Recovery Direction 2 (Forensic Cross-Section)

**Agent ID:** `ac63878d-49cf-42ff-a779-37e4b364fe10`  
**Reviewer:** Independent read-only code-review agent  
**Baseline HEAD:** `21d88a5` (`fix/cinematic-hero-scene`)  
**Constraint:** read-only; no product edits; no commit/push

## Scope (product, uncommitted)

- `src/components/home/commit-boundary-canvas.tsx`
- `src/components/home/pinned-cinematic.tsx`
- `src/components/home/scene-handoff.tsx`
- `src/components/home/transaction-rail.tsx`
- `src/content/design-tokens.css`

**Harness (non-product):** `scripts/hero-recovery-qa.mjs`

## Summary

Direction 2 correctly replaces soft-glow / card-grid hero treatment with a single continuous forensic cross-section instrument, collapses the desktop transaction rail to a spine while `#intent` occupies the viewport, and clears hero copy from the rail by ≥8px at xl+ (measured gap ≈12px at 1280/1440/1920). Canvas rAF lifecycle pauses when offscreen/hidden and resumes on return; cleanup disconnects observers and listeners. Locked marketing copy (`site-copy` / `HERO`) is consumed unchanged; `DemoPlayer` is untouched. Reduced-motion lands a complete composed state (dual exits + capsule silhouette). Scope stays inside A1 hero recovery.

No product **blocking** defects found against the A1 contracts. Harness DemoPlayer activation assertions are **weak** (false-positive risk against static copy) but canvas pause, collision geometry, viewport matrix, overflow, and reduced-motion-before-load are sound.

**Recommendation: APPROVE** product Direction 2; tighten DemoPlayer assertions as a non-blocking follow-up.

## Blocking issues

**None** in product source for the stated Direction 2 / A1 contracts.

## Non-blocking issues

### N1. Continuous rAF while sticky pin is in view (performance)
While the canvas is visible and motion is allowed, the loop schedules `requestAnimationFrame` every frame and fully redraws. Sustained GPU/CPU cost during the entire 320vh pin.

### N2. Focusable controls inside opacity-gated `aria-hidden` layers
Intent layer sets `aria-hidden` when faded; links can remain in tab order. Prefer `inert` on faded layers.

### N3. `useReducedMotion` first paint is always motion-on
Hook initializes `false` and only reads `matchMedia` in `useEffect`. Brief motion flash possible.

### N4. Landmark semantics incomplete on pin track
`#intent` is a `div` with `aria-label` but no `role="region"`.

### N5. Dead progress `useEffect` (no-op)

### N6. Window debug API always published (`__nexusCanvasDebug`)

### N7. Dual pause controllers (IO + scroll geometry) — intentional

### N8. Harness: DemoPlayer activation assertions can false-pass on static “commit/abort” copy

### N9. Harness: unused `dualExit` locator; fragile readability helper

## Test validity assessment

| Criterion | Verdict | Notes |
| --- | --- | --- |
| Collision uses real DOM geometry (`getBoundingClientRect`) | **PASS** | `measure()` rects rail + target; gap = `left - rail.right`. Green: gap=12.0, left=68, railR=56 |
| Each viewport explicitly exercised | **PASS** | Desktop 1280, 1440, 1920; mobile 390, 430 |
| Overflow measurement real | **PASS** | `scrollWidth > innerWidth + 1` |
| Reduced motion before page load | **PASS** | `newPage({ reducedMotion: "reduce" })` then `goto` |
| Commit and Abort actually activated (click) | **PARTIAL** | Clicks execute; post-conditions can false-pass on static copy (N8) |
| Canvas pause via scroll offscreen + `isPaused() === true` | **PASS** | Not mere API presence; resume asserted |

## Diff risk notes

- Rail spine/full + collision: token gutter 4.25rem (68px) − railRight 56 = gap 12 ≥ 8. Matches green QA.
- Canvas rAF lifecycle correct for sticky pin; continuous paint is N1 only.
- Locked copy / DemoPlayer internals: not modified.
- Scope limited to A1 hero instrument, rail spine, tokens gutter, handoff motif.

## Recommendation

### **APPROVE**

Product Direction 2 meets A1 hero recovery goals. Ship product source as-is. Treat harness N8 and a11y N2 as fast follow-ups, not merge blockers.

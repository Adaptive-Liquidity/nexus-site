# Visual Acceptance Review — fix/cinematic-hero-scene

Branch: `fix/cinematic-hero-scene` (from `afcd2f0`)  
Not pushed / not merged.

## Composition

| Beat | Visual |
|---|---|
| Intent | Luminous action core drifts in void; distant commit plane; full-viewport canvas |
| Stage | Chamber forms around core |
| Constrain | Walls close; path narrows toward plane |
| Validate | Plane intensifies; amber check pulses |
| Decide | Dual beams: ABORT (red↑) · COMMIT (oxide↓) with labels |
| Emit | Archive-toned capsule detaches from plane |
| Handoff | Plane light column + dual-path SVG echo into DemoPlayer |

## Gate evidence

| Gate | How demonstrated | Shot |
|---|---|---|
| Thumbnail-different from afcd2f0 dashboard panel | Full-bleed void + light vs bordered SVG card stack | `final-d-intent` vs baseline |
| Cinematic scene, not SaaS dashboard | No schematic/card stack in hero; canvas scene only | `final-d-intent` |
| Visible through Gap | Sticky `100dvh` pin for `320vh` track; gap copy overlays mid-scroll | `final-d-constrain`, `final-d-decide` |
| Commit & Abort distinguishable before exit | Labeled dual beams + phase "Commit · Abort" | `final-d-decide` |
| Mobile above first fold | Canvas full viewport; hero copy on scene | `final-m-intent` |
| No stacked bordered viz cards | HeroSchematic + CommitBoundaryStage removed from hero | structure |
| No copy compensating for weak visuals | Locked headline only; phase word at bottom | — |
| Reduced motion composed keyframe | progress fixed ~0.88 (decide/emit static) | `final-d-reduced` |
| DemoPlayer handoff visual | Plane column + dual-path echo, not text-only | `final-d-demo` |

## Implementation

- Runtime: Canvas 2D + sticky pin + rAF scroll progress (no external media)
- Removed: `commit-boundary-stage.tsx`, dashboard-style sequence shell, text-only handoff
- Preserved: locked copy, maturity labels, DemoPlayer, claims

## Commands

- `npx tsc --noEmit` — pass
- Browser QA — pass (no console errors, no mobile overflow)
- Branch only — no push/merge/deploy

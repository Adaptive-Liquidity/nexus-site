# Cinematic Integration Plan — Nexus-IQ

**Ledger status:** live execution record  
**Started:** 2026-07-29  
**Baseline commit:** `b8fe91c` (main)  
**Branch:** main  
**Untracked:** `attachments/` package only (preserved)

## Phase status

| Phase | Status | Notes |
|---|---|---|
| 0 Preflight | passed | Preview healthy; DATABASE_URL unset → migrate skips; safe build = `npm run build` OR `vite build` |
| 1 Baseline audit | passed | Screenshots in `screenshots/cinematic-baseline/`; DemoPlayer exercised; no console errors |
| 2 Design contract | passed | Primary path: **DOM/CSS + SVG + rAF** — no GSAP/Three/video services |
| 3 Prototype | passed | Procedural commit-boundary stage |
| 4 Intent hero | passed | |
| 5 Gap narrative | passed | |
| 6 Execute handoff | passed | |
| 7 Harmonization | passed | Non-structural only |
| 8 A11y/responsive | passed | |
| 9 Claims/build | passed | |
| 10 Final report | passed | |

## Skills loaded

- `.grok/skills/design-ui/SKILL.md` + animations reference
- Imagine / threejs **not** loaded (no gen tools / no WebGL path)

## Technology decision

| Choice | Decision |
|---|---|
| Primary path | DOM/CSS + semantic SVG + `requestAnimationFrame` scroll progress |
| Rejected | Video (no authorized external gen; no licensed MP4); GSAP (native sufficient); Three/R3F (prior GPU audit + product diagrams better in SVG); Lenis (native scroll fine) |
| New deps | **None** |
| Asset strategy | **A+B** evolve HeroSchematic + procedural commit-boundary visual |

## Visual premise

Consequential action packet approaches a precision **commit plane**; path narrows (constrain), pauses (validate), forks **Commit | Abort**, emits **Proof Capsule**. Atmosphere only — not product evidence.

## Message spine (Intent→Gap→Execute)

1. Category tension: agents act without transaction-grade boundaries  
2. Consequence: intent ≠ authority; report ≠ evidence  
3. Mechanism: stage → constrain → validate → commit/abort → emit  
4. Proof: live DemoPlayer + structure-identical capsules  
5. Maturity: badges + Stage 0 remain  
6. Decision: inspect capsule / request evaluation  

## Files to change

- `src/hooks/use-scroll-progress.ts` (new)
- `src/components/home/commit-boundary-stage.tsx` (new)
- `src/components/home/cinematic-handoff.tsx` (new)
- `src/routes/index.tsx` (integrate)
- `src/styles.css` (cinematic utilities only)
- `docs/build/CINEMATIC_ASSET_MANIFEST.md` (procedural — no binary media)
- `docs/build/CINEMATIC_INTEGRATION_REPORT.md` (final)

## Claim safety

- Locked copy in `site-copy.ts` unchanged  
- Claims registry unchanged except already-shipped Explorer CURRENT  
- No fabricated benchmarks/customers  
- Generated/procedural visuals labeled atmospheric  

## Safe build command

- `DATABASE_URL` absent → `npm run build` is local-safe (migrate exits 0)  
- Prefer also recording `npm exec -- vite build` if needed  

## Ownership

Sequential lead integrator (no parallel workers).

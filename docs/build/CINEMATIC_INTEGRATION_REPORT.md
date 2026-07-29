# Cinematic Integration Report — Nexus-IQ

**Completed:** 2026-07-29  
**Baseline:** `b8fe91c` main  
**Preview:** healthy via `startup.sh` → `0.0.0.0:8080`

## Outcome

The homepage Intent → Gap → Execute sequence now carries a **Nexus-specific procedural cinematic**: a transaction packet approaches a commit plane, constrains, validates, forks Commit/Abort, and emits a Proof Capsule silhouette. The live **DemoPlayer** remains the product proof. Atmospheric visuals are labeled **Not evidence** and maturity-tagged Target Architecture for the full operating-model animation.

## Before → After

| Area | Before | After |
|---|---|---|
| Intent hero | Copy + interactive schematic only | + scroll-linked Commit Boundary Stage (SVG) above schematic |
| Gap | Problem cards only | Shares continuum progress; stage advances as reader scrolls |
| Execute handoff | Hard section cut | Gradient handoff + explicit “atmospheric ends / demo begins” |
| Motion stack | CSS reveals | + native rAF scroll progress (no GSAP/Three/video) |
| Claims | Intact | Intact; no maturity promotion |

## Architecture decisions

- **Primary runtime:** DOM/CSS + SVG + `requestAnimationFrame` scroll mapping  
- **Rejected:** external video gen (unauthorized), GSAP (unnecessary), Three/R3F (product diagrams better as SVG; prior WebGL performance limits), Lenis, Motion library  
- **Dependencies added:** **none**  
- **Asset strategy:** A+B (evolve schematic + procedural visual)

## Skills

- `design-ui` (+ animations reference)  
- Imagine / threejs not required

## Files changed

- `src/hooks/use-scroll-progress.ts` (new)
- `src/components/home/commit-boundary-stage.tsx` (new)
- `src/components/home/cinematic-sequence.tsx` (new)
- `src/components/home/cinematic-handoff.tsx` (new)
- `src/routes/index.tsx` (integrate continuum + stage + handoff)
- `docs/build/CINEMATIC_INTEGRATION_PLAN.md`
- `docs/build/CINEMATIC_ASSET_MANIFEST.md`
- `docs/build/CINEMATIC_INTEGRATION_REPORT.md`
- `.grok/project_memory.md`

## Media

No binary media. Procedural SVG only. See asset manifest.

## Verification

| Gate | Result |
|---|---|
| Typecheck `npm run typecheck` | **Pass** |
| Lint `npm run lint` | **Pass** (0 errors; pre-existing react-refresh warnings on ui/* + our hook export pattern acceptable) |
| Safe build `npm exec -- vite build` | **Pass** (Vercel nitro output) |
| `DATABASE_URL` | Unset → full `npm run build` migrate would skip; compile-only used as primary gate |
| Desktop 1440×900 | Pass — stage, hero, handoff visible |
| Tablet 768×1024 | Pass |
| Mobile 390×844 | Pass — no horizontal overflow |
| Reduced motion | Pass — stage at progress 0.85, content visible |
| Forward/reverse scroll | Progress remeasures via scroll+rAF (clamped) |
| DemoPlayer commit/abort | Pass (exercised) |
| Public routes | Pass load |
| Console errors | None on homepage walkthrough |
| Claim safety | Locked copy preserved; stage marked atmospheric / not evidence |
| Dark patterns | None introduced |
| Live preview | **Healthy** |

## Screenshots inspected

**Baseline:** `screenshots/cinematic-baseline/home-{mobile,tablet,desktop}.png`  
**Final:** `screenshots/cinematic-final/home-desktop.png`, `home-desktop-scroll.png`, `home-mobile.png`, `home-mobile-scroll.png`, `home-tablet.png`, `reduced-motion.png`, `demo.png`

## Claim-safety confirmation

- Hero headline and loss line unchanged  
- Stage 0 / maturity badges unchanged  
- Capsule honesty and DemoPlayer maturity context unchanged  
- Cinematic figure explicitly: “Operating model · atmospheric”, “Not evidence”, Target badge for destination animation  

## Deferred (optional next milestones)

- Authorized short MP4 if generation is separately approved  
- Second cinematic bridge into evaluation/footer  
- CSS scroll-driven animation progressive enhancement where supported  
- Route-specific art for `/system` or `/change-gate`  

## Limitations

- Procedural SVG is not a filmed product UI  
- Scroll mapping is section-based, not a multi-second pinned video timeline  
- `vite preview` against `dist/server` path remains mismatched with nitro `.vercel/output` (deploy path is Vercel)  

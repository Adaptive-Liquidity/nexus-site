# Phase 0 Preflight Checklist

Run through this when starting the scaffold (next session).

## Content ready (done in prep)

- [x] Locked strategy snapshot (`LOCKED_STRATEGY.md`)
- [x] Phased plan (`PHASED_BUILD_PLAN.md`)
- [x] Site copy (`src/content/site-copy.ts`)
- [x] Claims registry JSON (`src/content/claims-registry.json`)
- [x] Change Gate phases + hero branches (`src/content/change-gate.ts`)
- [x] Maturity vocabulary helpers (`src/content/maturity.ts`)
- [x] Design tokens CSS (`src/content/design-tokens.css`)
- [x] Sample capsules: success + failure/rollback
- [x] Field explainers for Explorer
- [x] `resolveJsonModule` enabled in tsconfig
- [x] Project instructions (`AGENTS.project.md`)

## Phase 0 must create

- [ ] `src/styles.css` importing tokens + Tailwind
- [ ] `src/router.tsx` + `src/routes/__root.tsx` + route files
- [ ] Site header/footer from `NAV` + `BRAND`
- [ ] Route stubs for all IA paths
- [ ] Minimal shadcn: button, badge, card, separator, tabs, dialog/sheet
- [ ] `startup.sh` idempotent preview start
- [ ] Browser smoke: visible content, clean console
- [ ] Mobile 390px no overflow
- [ ] `npm run typecheck` + later `npm run build`

## Import smoke (after shell exists)

```ts
import { HERO, claimsRegistry, sampleCapsules, heroPhases } from "@/content";
```

## Honesty smoke

- Hero maturity strip visible without scrolling on desktop target
- No Target phase animated as live success
- Capsule limitations always shown when Explorer is open

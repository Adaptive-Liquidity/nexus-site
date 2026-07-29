# Cinematic Asset Manifest

## Policy

No binary video or external generative assets shipped in this integration.
All cinematic visuals are **code-produced procedural SVG** (atmospheric only).

| ID | Filename / component | Purpose | Origin | License | Size | Fallback | Review |
|---|---|---|---|---|---|---|---|
| CIN-STAGE-01 | `src/components/home/commit-boundary-stage.tsx` | Commit-boundary narrative (Intent→Emit) | Code/SVG | Repo | N/A (vector) | Static progress 0.85 under reduced motion | Approved 2026-07-29 |
| CIN-HAND-01 | `src/components/home/cinematic-handoff.tsx` | Media-to-demo gradient bridge | Code/CSS | Repo | N/A | Text-only handoff | Approved 2026-07-29 |
| CIN-PROG-01 | `src/hooks/use-scroll-progress.ts` | Clamped rAF scroll progress | Code | Repo | N/A | reducedProgress fixed | Approved 2026-07-29 |

## Explicit non-assets

- No Pinterest references shipped
- No FLUX/Kling/Luma outputs
- No MP4 under `public/media/cinematic/` (directory reserved; empty of binaries)
- Procedural stage is **not** product evidence, benchmark, or security proof

## Directory

`public/media/cinematic/` — reserved for future authorized media only.

# Phase 0 — Recoverable baseline (Wow sprint)

**Controlling contract:** `attachments/NEXUS_IQ_WOW_PRODUCTION_PLAN.md`  
**Approval gate (active):** `APPROVE_REFERENCE_BOARD` only  
**This document updated:** 2026-07-29 (post-push repository correction)

---

## Current remote state (authoritative) — 2026-07-29 post-push

| Field | Value |
|-------|--------|
| Remote | `https://github.com/Adaptive-Liquidity/nexus-site.git` |
| Branch | `fix/cinematic-hero-scene` (tracks `origin/fix/cinematic-hero-scene`) |
| **Remote HEAD** | **`2ae7cf198f26449f71b4a916268dd32c40739ed3`** (`2ae7cf1`) |
| **Parent** | **`aad6785b131ded8deba9bc4d90db119c4c4e74ac`** (`aad6785`) |
| Subject (HEAD) | `Export from Grok` |
| Subject (parent) | `docs(artifacts): visual fix review Direction 2 — APPROVE_VISUAL` |
| Sync | Local branch matches origin after rebase + push (`aad6785..2ae7cf1`) |
| Preview | `npm run dev` → bind `0.0.0.0:8080` when needed (not required for reference-board docs) |

### Lineage (newest first)

```text
2ae7cf1  Export from Grok                          ← current remote HEAD
  └── aad6785  docs(artifacts): visual fix review…  ← parent
        └── 55ba605  Export from Grok              ← historical snapshot (below)
```

### What HEAD contains (high level)

- Wow-sprint art-direction package (`artifacts/wow-sprint/*`)
- Concept still studies + matrices (`artifacts/cinematic-hero-stills/*`)
- Intermediate Imagine outputs (`artifacts/imagine_images/*`) — **studies only; see MANIFEST**
- Production plan attachments; prior Direction 2 visual-fix QA artifacts
- Prior uncommitted product visual-recovery work **was committed** in `2ae7cf1` (canvas, rail, pin, demo handoff, QA script)

### Active scope (do not advance without token)

- Remain in **REFERENCE_BOARD** approval state.
- No generation, animation, product-code changes, dependency changes, credit spend, or deployment from this correction turn.
- Concept stills are **not** production heroes; old `APPROVE_HERO_STILL_*` tokens are **retired**.

---

## Historical snapshot — pre–wow-sprint baseline (`55ba6050…`)

> **Labeled historical only.** Do not treat as current HEAD.

| Field | Value |
|-------|--------|
| Full SHA | `55ba605068255fef2b12b81a16c393afd02098dc` |
| Short | `55ba605` |
| Role at wow-sprint open | Branch tip when Phase A/B briefs were drafted; product recovery work and wow artifacts were then dirty/untracked |
| Superseded by | `aad6785` (remote visual-fix review) then rebase of local export → `2ae7cf1` |
| Note | Early REPO_STATE / ACCEPTANCE_REPORT text that claimed “remains at 55ba6050” is obsolete; corrected 2026-07-29 |

---

## Concept stills (studies only — not approved)

| File | SHA-256 | Disposition |
|------|---------|-------------|
| `artifacts/cinematic-hero-stills/01-commit-monolith.jpg` | `5c237414457a2c4cdadf8d02d4fa717c1659a65782cdbbe241e612e399a55b49` | Journey seed; **study only** |
| `artifacts/cinematic-hero-stills/02-evidence-forge.jpg` | `1ddbbf95b6d408f78f75e6f03b292efb09206be063b2e2e37b4b5248306f6a02` | Material seed; **study only** |
| `artifacts/cinematic-hero-stills/03-controlled-threshold.jpg` | `de44f2c6819903accf60eac18a7e8c91c901f9a915049a7ccb17b8c05d4b453c` | Shape-grammar seed; **study only** |

Plan (`NEXUS_IQ_WOW_PRODUCTION_PLAN.md`) supersedes any prior `APPROVE_HERO_STILL_1|2|3` request. None is production hero.

Provenance of intermediate Imagine files: `artifacts/imagine_images/MANIFEST.md`.

---

## Recoverable posture

- Forensic Canvas remains secondary explainer / reduced-motion / Demo proof — not prestige hero.
- Claims registry, maturity vocabulary, DemoPlayer, and transaction rail are control-plane; art does not replace them.
- Reference board + evidence-vessel brief remain the active art-direction deliverables awaiting `APPROVE_REFERENCE_BOARD`.

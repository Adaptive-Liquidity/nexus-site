# Nexus-IQ Institutional Website — Phased Build Plan

**As of:** 2026-07-28  
**Status:** Phase 0 complete · Ready for Phase 1 homepage  
**Stack:** TanStack Start + React 19 + Tailwind v4 + shadcn/Radix (workspace default)  
**Product surface:** Institutional product system (marketing site + evidence dossier) for Nexus-IQ

---

## Governing strategy (locked — do not rewrite)

| Layer | Rule |
| --- | --- |
| **Layer One** | Present the **completed** operating model (proof-carrying transactional execution, Change Gate, governed memory/authority, staged validation, commit/abort, portable evidence). Architecture is permanent. |
| **Layer Two** | Every capability carries maturity, evidence, limitations, residual risks, and an “as of” date. Status never disappears. |
| **Operating rule** | Every page answers: (1) what completed system enables → (2) how model works → (3) maturity today → (4) evidence → (5) what evidence does not establish. |
| **Honesty** | Stage 0 evidence integrity is blocking. No “first/only”, no unverified perf, no “production-grade” pre-audit. Proof Capsules = runtime-observed evidence, **not** proof of program correctness. |
| **Brand** | Primary: **Nexus-IQ**. Parent: Adaptive Liquidity Labs (footer/about only). |

Canonical sources in repo:

- [`src/content/site-copy.ts`](../../src/content/site-copy.ts) — locked headlines, definitions, CTAs  
- [`src/content/claims-registry.json`](../../src/content/claims-registry.json) — machine-readable maturity matrix  
- [`src/content/change-gate.ts`](../../src/content/change-gate.ts) — timeline phases + maturity  
- [`src/content/capsules/`](../../src/content/capsules/) — structure-identical Proof Capsule fixtures  
- [`src/content/design-tokens.css`](../../src/content/design-tokens.css) — forensic systems modernism tokens  

---

## Phase 0 — Scaffold + design system ✅ COMPLETE

**Goal:** App boots in preview with tokens, fonts, shell nav, empty routed pages.

| Deliverable | Status |
| --- | --- |
| TanStack Start app shell | Done |
| Design tokens + IBM Plex | Done |
| Site chrome (header/footer) | Done |
| Routes stubs (all IA paths) | Done |
| `startup.sh` | Done |
| shadcn primitives (button, badge, card, separator) | Done |
| Hero shell + schematic + maturity strip | Done (Phase 0 quality) |
| Capsule fixtures downloadable on /evidence/proof-capsules | Done (Explorer Phase 2) |

**Exit criteria met:** Preview renders institutional chrome; no blank page; mobile 390px no overflow; typecheck clean; production build verified.

---

## Phase 1 — Homepage Commit Boundary Arc (NEXT)

**Goal:** Full homepage narrative (Decision Sprint 2 optimized).

| Section | Surface |
| --- | --- |
| Hero | 5/7 grid · thesis · schematic (Commit **and** Abort) · permanent maturity badges · maturity strip — *partially done in Phase 0* |
| Intent Is Not Authority | Three-card missing-control triad |
| Transactional Change Gate | Detailed interactive timeline (data from `change-gate.ts`) |
| Evidence transition | Dark runtime → archive-paper · real capsule fixture |
| One Operating Model | Nexus + AEON-IQ + Nexus-IQ composition |
| Outcomes + first workflows | Maturity composition on every outcome card |
| Claims / Security / Research teasers | Links into deeper routes |
| Evaluation CTAs | Inspect evidence · Run foundations · Request evaluation |

**Exit criteria:** 10s/30s comprehension targets; maturity never ambiguous; reduced-motion safe.

---

## Phase 2 — Proof Capsule Explorer (highest credibility)

**Goal:** Inspect structure-identical CURRENT artifacts.

| Feature | Status note |
| --- | --- |
| Load success + failure+rollback fixtures | CURRENT artifacts — fixtures exist |
| Field tree + plain-language explainers | — |
| Limitations always expanded | From schema defaults |
| Signature / identity vs trust-anchor distinction | UI labels only; no fake verification of production anchors |
| Download JSON | Partial (Phase 0) |
| Public Explorer **UI** | Marked **In Integration** until built and validated |

Route: `/evidence/proof-capsules` · embedded preview on homepage Section 4.

---

## Phase 3 — Maturity registry + claims UI

**Goal:** Richer registry UX (Architecture vs Implementation Status overlay).

---

## Phase 4 — System, Change Gate detail, Security, Research

---

## Phase 5 — Polish, a11y, production verify

---

## Explicit non-goals (this build)

- Live Nexus/AEON daemon integration (marketing site only; fixtures + static evidence)  
- Auth-gated product control plane  
- Claiming full Transactional Change Gate as shipped  

## Recommended agent session order

1. Prep ✅  
2. Phase 0 ✅  
3. Phase 1 homepage  
4. Phase 2 Explorer  
5. Phase 3–5  

# Brand & claim constraints for Consequence Chamber art direction

**Reviewer agent:** `b35da550-6abb-4f84-8b70-378e711756ad` (explore, read-only)  
**Lead synthesis:** Grok Build · 2026-07-29  
**Sources of truth:** live `src/content/*`, design tokens, claims registry, site-copy.

---

## Product identity (locked)

**Nexus-IQ** is Adaptive Liquidity Labs’ proof-carrying transactional execution layer for autonomous systems: a **commit boundary** between agent intent and irreversible effect. It stages consequential changes, constrains authority, validates before commitment, **commits or aborts**, and **emits** portable inspectable **Proof Capsules**.

- Category: `PROOF-CARRYING TRANSACTIONAL EXECUTION`
- Thesis: *Consequential agent action belongs behind a commit boundary.*
- Loss line: *Intent is not authority. A tool call is not a transaction. A runtime report is not evidence.*
- Not: AI copilot SaaS, model-level guardrails alone, finished deployable Change Gate, or autonomous free will as the product.

---

## Visual tokens (must map)

| Family | Tokens | Role in hero art |
|--------|--------|------------------|
| Void / carbon / slate | `#07090b` / `#111820` / `#1a252d` | Chamber darkness, runtime |
| Porcelain | `#f6f1e7` (+ muted) | Evidence material / editorial type on dark |
| Archive paper | `#eee7d8` | Proof surfaces (DOM), not fake paper in stills as “evidence” |
| Institution blue | `#2f5e73` | Seam light / rim response — **not neon** |
| Oxide | `#496f59` | Commit path reinforcement + Foundation maturity |
| Controlled red | `#7a3e3e` | Abort path reinforcement + Limitation |
| Signal / target | amber / outline | Maturity chrome only — avoid as hero neon |

**Type system (DOM):** IBM Plex Serif / Sans / Mono — never rasterized into media.

**Geometry doctrine:** Commit = **square** route/aperture; Abort = **diamond** route/aperture. Color only reinforces shape and position. Dual exits must not read as floating UI buttons.

---

## Lifecycle language (prefer product labels)

**Change Gate (destination model):** Propose → Stage → Constrain → Validate → (Approve) → Decide (**Commit** \| **Abort**) → Emit → (Compensate)

**Pinned cinematic simplified labels:** Intent → Stage → Constrain → Validate → Commit · Abort → Emit

**Hero emotional beats (plan):** Curiosity → Tension → Comprehension → Consequence → Trust (DemoPlayer)

Art may compress to journey metaphor; DOM must use product phase language. Both Commit and Abort are first-class; both may emit a Proof Capsule.

---

## Hard claim prohibitions

1. No first/only / unverified performance / production-grade pre-audit language.
2. Stage 0 evidence integrity is **blocking** — no present-tense end-to-end transactional guarantees.
3. Transactional Change Gate = **In Development** — not “currently deployable end-to-end.”
4. Commit path maturity ≠ Abort foundations maturity — dual exits must not imply finished Commit product.
5. Nexus today: WASM guest↔host / WASI — **does not** intercept LLM tool choice.
6. Proof Capsule proves observation/enforcement under present modes — **not** mathematical correctness or absence of all external side effects.
7. Generated stills/video = **atmospheric only** — never implementation, benchmark, crypto, customer, or maturity evidence.
8. No fake scarcity, testimonials, logos, invented metrics, or social proof.
9. Demo fixtures = demo keys / placeholders — not production trust anchors.

---

## Accessibility & media

- Honor `prefers-reduced-motion` on first paint; static poster must complete the experience.
- Critical meaning lives in semantic DOM, never only in pixels.
- Scroll-scrubbed video must not fight autoplay.
- Cinematic media must hand off to interactive DemoPlayer — never replace it.

---

## Art-direction must / must-not

| Must | Must not |
|------|----------|
| Ownable evidence vessel (not pill/egg/dispenser) | Pharmaceutical capsule silhouettes |
| Monumental layered boundary with depth | Flat glowing ring / UI wall |
| Commit/Abort as physical route geometry | Floating square/diamond buttons |
| Left 38–44% copy-safe field for locked DOM headline | Generated text, fake UI, fake code, claims in media |
| Physical light, haze, machining, scale cues | Neon, purple luxury, planets, holograms, generic particles |
| Dual exits shape-distinct without color alone | Abort as error toast / Commit-only fantasy |
| Label cinematic art as atmospheric | Present art as Proof Capsule evidence |

---

## Files inspected (agent + lead)

`src/content/design-tokens.css`, `site-copy.ts`, `maturity.ts`, `claims-registry.json`, `change-gate.ts`, `transaction-beats.ts`, `index.ts`; components: `pinned-cinematic.tsx`, `commit-boundary-canvas.tsx`, `demo-player.tsx`, `transaction-rail.tsx`, `hero-schematic.tsx`, `proof-capsule-explorer.tsx`; docs/handoff under `docs/build/`, `attachments/`, `artifacts/cinematic-hero-stills/`.

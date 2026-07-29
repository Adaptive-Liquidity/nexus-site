# Visual Fix Review — Nexus-IQ Direction 2 (narrow IMPLEMENTATION)

**Role:** Independent visual/code reviewer (read-only; no product edits)
**Date:** 2026-07-29
**Scope:** Prior visual blockers after Direction 2 forensic-instrument corrections
**Harness:** `artifacts/visual-fix-qa.log` — **73/73 passed**
**Evidence:** `screenshots/hero-recovery-after/{d1280-demo-handoff,m390-decide,d1280-intent,d1280-decide}.png` (+ emit/constrain for residual risk)

---

## Recommendation

# **APPROVE_VISUAL**

Overall verdict: **PASS** on all five prior blockers. Residual risks are non-blocking polish/ops notes only.

---

## Prior blockers — verdict matrix

| # | Blocker | Verdict | Primary evidence |
|---|---------|---------|------------------|
| 1 | Demo rail no longer covers DemoPlayer | **PASS** | Code + QA + `d1280-demo-handoff.png` |
| 2 | Type-safe channel (no instrument through copy) | **PASS** | Code + QA + `d1280-intent.png` / `d1280-decide.png` |
| 3 | Mobile Decide shows Commit·Abort with dual paths | **PASS** | Code + QA + `m390-decide.png` |
| 4 | Capsule motif enters DemoPlayer boundary in same viewport | **PASS** | Code + QA + `d1280-demo-handoff.png` |
| 5 | Premium composition (not soft-glow, not cards) | **PASS** | Screenshots vs soft-glow baseline; single canvas instrument |

---

## 1. Demo rail no longer covers DemoPlayer — **PASS**

### Code (`src/components/home/transaction-rail.tsx`)

- Spine mode is held until `#live-demo` fully clears the header band:
  - `pastDemo = demoRect.bottom < 56` → expand to full only after demo exits top.
  - Comment documents the prior defect: spine previously only keyed off pin/hero, so full labels collided with Demo chrome.
- Publishes `document.documentElement.dataset.txnRail = "spine" | "full"` for content gutters.
- Spine chrome is compact (`w-11`, dots only, no beat labels).

### Route gutter (`src/routes/index.tsx`)

- Demo section uses `xl:pl-[var(--txn-content-gutter)]` (spine gutter `4.25rem` while `data-txn-rail="spine"` per `design-tokens.css`).

### Visual / harness

- `d1280-demo-handoff.png`: left edge shows **collapsed spine only** (dot column + thin progress); DemoPlayer Commit/Abort/phase controls are fully clear of the rail.
- QA (lines 25–45):
  - `Demo handoff: rail spine (not full) @ 1280/1440/1920` — `mode: spine`, `railRight: 56`
  - Heading / Commit / Abort / phase clear rail ≥8px
  - `no pointer target under rail`, `focusCovered=false`

**Residual:** Clearance margin is thin (~12px headline gap in pin; demo heading gap 20px at 1280). Meets ≥8px contract; not fragile-looking in the handoff frame.

---

## 2. Type-safe channel (no instrument through copy) — **PASS**

### Code

**`pinned-cinematic.tsx`**
- Opaque type-safe plane (`data-testid="type-safe-plane"`): left column max-width with void→transparent gradient; `z-[1]` under copy `z-[2]`.
- Publishes `--type-safe-right` from plane geometry to sticky host + `documentElement` (ResizeObserver + scroll/resize).

**`commit-boundary-canvas.tsx`**
- Reads `--type-safe-right`; landscape shell origin is `Math.max(typeSafe + 8, w * 0.38)` so the apparatus sits **right of copy**.
- Portrait: instrument occupies upper band (`shellH = h * 0.42`); copy is bottom-justified — vertical separation, not overprint.

### Visual

- `d1280-intent.png`: locked headline / CTAs on left void; forensic shell fully on the right; no bay lines or packet geometry cutting through type.
- `d1280-decide.png`: Gap copy (“Intent is not authority”) remains legible on left; ABORT/COMMIT geometry confined to right shell.
- QA: `headline clears rail ≥8px`, `gap h2 clears rail`, `single canvas instrument in pin`, `no bento/card grid inside sticky pin`.

**Residual:** If `--type-safe-right` is 0 or <80px, canvas falls back to `w * 0.4`. Safe default, but a failed publish race could briefly tighten the channel. Not observed in harness screenshots.

---

## 3. Mobile Decide shows Commit·Abort with dual paths — **PASS**

### Code (`pinned-cinematic.tsx`)

- `phaseOf`: progress `[0.58, 0.8)` → `{ id: "decide", label: "Commit · Abort" }`.
- `showDualExits = reduced || progress >= 0.58` — dual-exit chrome for entire Decide window.
- Bottom chrome: Abort diamond + Commit square + “both first-class” (`data-testid="dual-exit-chrome"`).
- Canvas portrait Decide bay draws labeled ABORT diamond and COMMIT square with branching strokes.

### Visual / harness

- `m390-decide.png`:
  - Operating model phase: **Commit · Abort**
  - Dual chrome: **Abort · Commit — both first-class** with red diamond / oxide square markers
  - Upper instrument shows geometric **ABORT** / **COMMIT** dual paths
- QA (lines 46–53):
  - `@ 390` and `@ 430`: `phaseId: decide`, `phaseLabel: Commit · Abort`, `dualPresent: true`, `abortVisible/commitVisible: true`
  - No horizontal overflow mid-decide

---

## 4. Capsule motif enters DemoPlayer boundary in same viewport — **PASS**

### Code (`scene-handoff.tsx` + route)

- Motif-first handoff: apparatus mouth (shell continuation, spine drop, dual-exit SVG residual paths).
- Tangible **Proof Capsule** (`data-testid="handoff-capsule"`) with `translate-y-1/2` half-overlap into children.
- Children (including `#live-demo` / DemoPlayer) sit under capsule via `pt-8 sm:pt-10` so capsule and proof surface share one scroll frame.
- Pin emit also mounts `proof-capsule-silhouette` for reduced-motion / late progress.

### Visual / harness

- `d1280-demo-handoff.png`: Proof Capsule + “→ live surface” visible above demo heading; dual residual paths; DemoPlayer top (film surface + Commit/Abort) in the same frame.
- QA (lines 54–56):
  - `capsuleInView: true`, `headingInView: true`, `headingFullyVisible: true`, `playerTopInView: true`
  - Measured: `capsuleTop≈74`, `headingTop≈254`, `playerTop≈572` @ scrollY 3782 (800px viewport)

**Residual:** Capsule is a DOM motif + apparatus mouth, not a continuous canvas stroke into DemoPlayer pixels. Meets Direction 2 “motif enters boundary / same viewport” bar; not a single continuous paint surface. At short viewports, DemoPlayer is only partially visible at the handoff scroll lock (player top mid-frame) — still “enters same viewport” per contract.

---

## 5. Premium composition (not soft-glow, not cards) — **PASS**

### What the frames show

| Frame | Composition read |
|-------|------------------|
| `d1280-intent` | Single carbon forensic shell; intake funnel + diamond packet; material void under type — **not** soft-glow orbs |
| `d1280-decide` | Continuous bay apparatus; dual geometric exits; gap copy as overlay plate — **not** bento cards |
| `d1280-emit` | Emit tray + archive capsule inside same shell; silhouette DOM capsule at exit |
| `d1280-demo-handoff` | Apparatus mouth → live DemoPlayer; institutional mono/serif hierarchy |
| `m390-decide` | Portrait instrument band + chrome; dual paths readable without card stack |

### Code contracts

- `data-testid="forensic-instrument"` / single `CommitBoundaryCanvas` full-bleed under sticky pin.
- Type plates use solid void material gradients, not glass-card chrome (comments in source).
- Rail comment: “Softer chrome: less card-panel emphasis” in spine mode.
- QA: `no bento/card grid inside sticky pin`, `single canvas instrument in pin — count=1`.

**Residual:** Handoff capsule and rail still use light border + shadow (necessary chrome). Not soft-glow marketing cards; acceptable for institutional apparatus language. Belief section below demo still has one bordered destination panel — outside the pin/handoff contract surface.

---

## Source map (reviewed)

| Path | Role in fix |
|------|-------------|
| `/workspace/src/components/home/transaction-rail.tsx` | Spine through entire DemoPlayer section |
| `/workspace/src/components/home/pinned-cinematic.tsx` | Type-safe plane, mobile Decide phase, dual-exit chrome, capsule silhouette |
| `/workspace/src/components/home/commit-boundary-canvas.tsx` | Instrument right of type; dual-path Decide geometry |
| `/workspace/src/components/home/scene-handoff.tsx` | Capsule motif handoff into demo boundary |
| `/workspace/src/routes/index.tsx` | Demo gutter + SceneHandoff wrap |
| `/workspace/src/content/design-tokens.css` | `--txn-content-gutter` spine/full |

---

## Harness summary

```
artifacts/visual-fix-qa.log → 73/73 passed
```

Covers: rail collision geometry @ 1280/1440/1920, mobile Decide dual paths @ 390/430, handoff co-visibility, reduced-motion composed state, canvas pause/resume, DemoPlayer Commit/Abort scenario toggles, overflow matrix.

---

## Residual risks (non-blocking)

1. **Type-safe CSS-var dependency** — brief race if `--type-safe-right` unset; fallback `0.4w` is conservative but not geometry-perfect.
2. **Portrait typeSafe = 0** — relies on vertical band split; if copy layout shifts upward, overprint risk returns.
3. **Handoff is hybrid** (canvas emit + DOM capsule/SVG) — premium enough for D2; not one continuous instrument stroke across the pin→demo seam.
4. **DemoPlayer only partially in view** at the measured handoff scroll lock on 800px-tall desktop — contract is co-visibility of capsule + player top, which holds.
5. **Spine clearance headroom** is modest (≈12–20px) — meets ≥8px; avoid tightening gutter further.

None of the above re-open the five prior blockers.

---

## Final gate

| Gate | Result |
|------|--------|
| All 5 prior blockers fixed | **YES** |
| Premium forensic D2 composition | **YES** |
| Automated visual-fix harness | **73/73 PASS** |
| Product edits by this reviewer | **None** |

### **APPROVE_VISUAL**

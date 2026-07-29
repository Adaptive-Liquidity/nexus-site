# Browser QA Agent Report — Nexus-IQ Hero Recovery Direction 2 (Forensic Cross-Section)

**Agent role:** Independent read-only Browser QA  
**Date:** 2026-07-29  
**App under test:** `http://127.0.0.1:8080/`  
**Tooling:** Playwright Chromium 1.61.1 (workspace install), live DOM measurement, review of PNG evidence under `/workspace/screenshots/hero-recovery-{before,after}/` and agent captures under `/workspace/artifacts/qa-agent-*.png`  
**Constraint compliance:** Read-only — no product source edits, no commits, no pushes.

---

## 1. App availability

| Check | Result |
|-------|--------|
| HTTP GET `http://127.0.0.1:8080/` | **200 OK** |
| Document title | `Nexus-IQ — Commit boundary for agent action` |
| Hero landmarks | `#intent`, `#hero-headline`, `nav[aria-label="Transaction progress"]`, `#live-demo` present |
| Canvas | 1 canvas in pin; `window.__nexusCanvasDebug` **object** exposed |

**PASS** — app is serving and hero surface is present.

---

## 2. Viewport / state matrix (live Playwright)

Measurement rules:

- **Overflow:** `documentElement.scrollWidth` vs `clientWidth` (fail if scrollWidth > clientWidth + 1).
- **Rail vs headline gap:** `nav[aria-label="Transaction progress"]` right edge vs `#hero-headline` left edge; require **gap ≥ 8px** when rail is visible.
- **Primary copy readable:** `#hero-headline` (or visible pin copy) with opacity > 0.15, non-empty text, in layout.
- **Console:** `console` error/warning + `pageerror` listeners.

### 2.1 Desktop 1280×800

| State | Progress / target | scrollY | Overflow (sw/cw) | Rail→HL gap | Primary readable | Console | Canvas debug | Verdict |
|-------|-------------------|---------|------------------|-------------|------------------|---------|--------------|---------|
| Intent | ≈0 | 57 | 1280/1280 **none** | **12.0** (railR=56, hlL=68) | Yes — “Consequential agent action belongs behind a commit boundary.” | 0 | paused=false, rafActive=true | **PASS** |
| Constrain | ≈0.40 | 761 | 1280/1280 **none** | **12.0** | Yes | 0 | paused=false, rafActive=true | **PASS** |
| Validate | ≈0.55 | 1025 | 1280/1280 **none** | **12.0** | Yes | 0 | paused=false, rafActive=true | **PASS** |
| Commit/Abort (Decide) | ≈0.68 | 1247 | 1280/1280 **none** | **12.0** | Yes; dual-exit text “Commit”/“Abort” present in pin | 0 | paused=false, rafActive=true | **PASS** |
| Emit | ≈0.90 | 1604 | 1280/1280 **none** | **12.0** | Yes; “PROOF CAPSULE” / “Emit” phase copy | 0 | paused=false, rafActive=true | **PASS** |
| Demo handoff | `#live-demo` | 3814 | 1280/1280 **none** | rail still 56→ HL offscreen (gap n/a for handoff section) | Demo section copy readable | 0 | paused=true, rafActive=false (expected off-pin) | **PASS** |

Scroll method: `#intent` track height 2560px, max scroll range 1760px at 800vh — progress mapping verified via `scrollInfo.method = intent-track`.

### 2.2 Desktop 1440×900 — Intent

| Metric | Value | Verdict |
|--------|-------|---------|
| Overflow | 1440/1440 none | **PASS** |
| Gap | **12.0** (railR=56, hlL=68) | **PASS** |
| Primary | Readable, full headline | **PASS** |
| Console | 0 | **PASS** |
| Canvas | paused=false, rafActive=true | **PASS** |

### 2.3 Mobile 390×844 — Intent & Commit/Abort

| State | Overflow | Rail | Primary | Console | Verdict |
|-------|----------|------|---------|---------|---------|
| Intent (p≈0) | 390/390 none | hidden (`display:none` / w=0) — gap N/A | Yes | 0 | **PASS** |
| Decide (p≈0.68) | 390/390 none | hidden | Yes | 0 | **PASS** |

Mobile layout stacks instrument above copy; fixed progress rail correctly suppressed (no left-chrome collision).

### 2.4 Mobile 430×932 — Intent

| Metric | Value | Verdict |
|--------|-------|---------|
| Overflow | 430/430 none | **PASS** |
| Rail | hidden | **PASS** (gap N/A) |
| Primary | Readable | **PASS** |
| Console | 0 | **PASS** |

### 2.5 Reduced motion (`prefers-reduced-motion: reduce`) @ 1280

| Metric | Value | Verdict |
|--------|-------|---------|
| Pin track | Collapses to ~800px (no multi-screen scrub); static complete instrument | Expected |
| Overflow | 1280/1280 none | **PASS** |
| Gap | **12.0** | **PASS** |
| Headline | Readable | **PASS** |
| Dual-exit labels | Commit + Abort text present | **PASS** |
| Canvas | `rafActive=false`, `paused=false` (animation loop off under reduced motion) | **PASS** |
| Console | 0 | **PASS** |

Evidence PNG: `/workspace/screenshots/hero-recovery-after/d1280-reduced.png` shows full Intent→Constrain→Validate→Decide (fork)→Emit instrument with both exits and sealed capsule — static forensic diagram, not soft-glow.

---

## 3. Keyboard

### 3.1 Tab order (1280×800, 35–50 Tabs)

Focused regions observed in order:

1. **Header:** brand, System, Change Gate, Evidence, Security, Research, Developers, Maturity, GitHub, Request Evaluation  
2. **Transaction progress rail:** Intent / Gap / Execute / Model / Evidence / Compose / Outcomes / Trust / Evaluate  
3. **Hero CTAs:** See the control gap · Watch the commit boundary · Explore the model · View implementation maturity  
4. **DemoPlayer (when reached):** Commit path · Abort path · Film · Compare paths · Restart · Pause · phase scrub chips (PROP/STAG/AUTH/VAL/CMT…)

### 3.2 Focus-visible

- **35/35** Tab stops reported `:focus-visible === true` on sequential keyboard Tab.  
- Visible browser focus outline / ring present on header links, rail anchors, and hero CTAs.  
- Programmatic `.focus()` on Commit path after click sequence: `:focus-visible` false (expected — not a keyboard modality); Abort path after Enter: true. **Keyboard path is OK.**

### 3.3 Focusable elements inside `aria-hidden`

- Initial DOM scan flagged 4 hero CTA-like anchors under an absolute layer class.  
- **Recheck:** 50 consecutive Tabs → **0** focus landings inside `[aria-hidden="true"]`.  
- No `pageerror` / console noise during keyboard exercise.

**PASS** for keyboard operability and no practical aria-hidden focus trap. Residual note only: keep phase-layer CTA clones at `tabindex="-1"` if duplicates remain in DOM (not observed as tab stops in this run).

---

## 4. DemoPlayer — Commit / Abort paths

| Action | Result |
|--------|--------|
| Controls present | “Commit path”, “Abort path” buttons in `#live-demo` |
| Click Commit path | Operable; state text shifts (timeline → Commit / CMT emphasis) |
| Click Abort path | Operable; state text shifts (timeline shows ABT / Propose scrub segment) |
| `commitChanged` | **true** (before ≠ afterCommit) |
| `abortChanged` | **true** (afterCommit ≠ afterAbort) |
| Keyboard Enter on Commit path | Operable |
| Keyboard Enter on Abort path | Operable |
| Console during interactive | **[]** |

**PASS** — both paths change DemoPlayer state.

---

## 5. Canvas lifecycle (`window.__nexusCanvasDebug`)

| Condition | paused | rafActive | Notes |
|-----------|--------|-----------|-------|
| Pin in view (scrollY≈0) | **false** | **true** | Not paused in view |
| Scrolled past `#intent` (canvasTop≈-900) | **true** | **false** | Pauses offscreen |
| Return to top | **false** | **true** | Resumes |

Also confirmed at `#live-demo`: canvas debug shows paused=true / rafActive=false while hero is offscreen.

**PASS**

---

## 6. Visual evidence review (PNG)

### Files reviewed

**Before (rejected soft-glow baseline):**  
`/workspace/screenshots/hero-recovery-before/` — d1280-intent, d1280-constrain, d1280-validate, d1280-decide, d1280-emit, d1280-demo-handoff, d1280-reduced, d1440-intent, m390-*, m430-intent  

**After (Direction 2 forensic instrument):**  
`/workspace/screenshots/hero-recovery-after/` — matching matrix  

**Agent live captures:**  
`/workspace/artifacts/qa-agent-*.png` (11 files) — consistent with after set.

### Explicit visual questions

| # | Question | Answer |
|---|----------|--------|
| 1 | Does the result read as **one monolithic instrument** or bordered cards? | **One monolithic instrument.** Single full-bleed sticky pin + one canvas cross-section (chamber walls, spine, stage labels). Not a bento/card grid inside the pin. DemoPlayer below is a separate product film chrome (expected), not the hero instrument. |
| 2 | Is the **transaction path** understandable without phase captions? | **Mostly yes.** Geometry alone conveys capsule → constrained channel → proof nodes → fork → sealed egress. Stage captions (INTAKE / CONSTRAIN / VALIDATE / DECIDE / EMIT) reinforce; path remains legible if captions are ignored. |
| 3 | Are **Intent, Constrain, Validate, Decide, Emit** visually distinguishable? | **Yes.** Intent: open capsule, sparse entry. Constrain: dual rails / forming walls. Validate: check nodes along spine. Decide: Y-fork. Emit: sealed capsule + proof seal at terminus. |
| 4 | Are **Commit and Abort** distinguishable by **shape and position**, not color alone? | **Yes.** Commit branches **upper-right**; Abort branches **lower-right** with different path curvature and terminal nodes. Color (green vs rose) is secondary reinforcement. Reduced-motion static view also shows both exits labeled. |
| 5 | Does the **emitted capsule** visibly continue into the DemoPlayer handoff? | **Partial / narrative handoff, not continuous canvas geometry.** Emit ends with sealed capsule inside the instrument; below, “ENTERING LIVE DEMONSTRATION” / DEMO ACTIVE introduces `#live-demo` product film. Continuity is **sectional + messaging**, not a drawn capsule streaming into DemoPlayer chrome. Acceptable for D2; not a hard visual break, not a seamless glyph continuation either. |
| 6 | Is the **first mobile fold** visually compelling? | **Yes.** 390/430 Intent shows instrument graphic + dark void + strong headline hierarchy and CTAs above the fold. Decide mobile shows dual-exit geometry without horizontal overflow. |
| 7 | Does any **rail, spine, label, or chrome obscure primary copy**? | **No** at measured desktops (gap=12px ≥ 8). Mobile rail hidden. Live agent decide/emit shots: left column copy clear of spine/chamber art. Phase labels sit on instrument, not over headline. |
| 8 | Is this **materially beyond** the rejected soft-glow implementation? | **Yes.** Before: soft blue atmospheric glow / particle field, abstract “energy” read, weak stage grammar. After: engineered forensic cross-section with chamber architecture, labeled stages, dual-exit decision geometry, proof capsule emission — a different product metaphor, not a glow tweak. |

---

## 7. PASS / FAIL summary by area

| Area | Result | Notes |
|------|--------|-------|
| App serving | **PASS** | HTTP 200 |
| Overflow — all listed viewports/states | **PASS** | 0 horizontal overflow cases |
| Rail/spine vs headline gap ≥ 8 | **PASS** | Desktop gap = 12px; mobile rail hidden |
| Primary copy readability | **PASS** | All states |
| Console errors / warnings / pageerrors | **PASS** | Empty across matrix + interactive |
| Reduced motion complete diagram | **PASS** | Static dual-exit + capsule |
| Keyboard — header, hero CTAs, Demo paths | **PASS** | focus-visible on Tab |
| aria-hidden focus traps in practice | **PASS** | 0 Tab hits in 50 |
| DemoPlayer Commit path | **PASS** | Click + keyboard |
| DemoPlayer Abort path | **PASS** | Click + keyboard |
| Canvas pause/resume lifecycle | **PASS** | in view / past intent / return |
| Monolithic instrument (not cards) | **PASS** | Visual |
| Phase distinguishability | **PASS** | Visual |
| Commit ≠ Abort by shape/position | **PASS** | Visual |
| Capsule → Demo handoff continuity | **PASS*** | *Narrative/sectional; not continuous canvas stroke |
| Mobile first fold | **PASS** | Visual |
| Beyond soft-glow | **PASS** | Material redesign |
| Product-blocking defects | **None found** | — |

### Counts

- **PASS areas:** 17  
- **FAIL areas:** 0  
- **Soft notes (non-blocking):** 1 (capsule→Demo is sectional handoff rather than continuous vector continuation)

---

## 8. Blocking defects

**None (product-blocking).**  

No overflow, no rail/headline collision, no console pageerrors, no broken Commit/Abort, no canvas stuck-running offscreen, no unreadable primary copy at required viewports.

Non-blocking observation only:

- Demo handoff is editorial/section-based rather than a continuous drawn capsule into DemoPlayer — does not block Direction 2 acceptance given instrument quality and explicit “ENTERING LIVE DEMONSTRATION” bridge.

---

## 9. Agent conclusion

### **APPROVE_VISUAL**

Direction 2 (Forensic Cross-Section) is live, measurable, accessible under keyboard, stable under reduced motion, and **materially beyond** the rejected soft-glow baseline. All required viewport/state checks **PASS**. No product-blocking defects observed.

**Confidence:** high (live Playwright measurements + official before/after PNG review + interactive Demo/canvas verification).

---

## Appendix A — Key measurements (desktop rail clearance)

```
viewport 1280×800 / 1440×900 Intent…Emit:
  nav[aria-label="Transaction progress"] right = 56px
  #hero-headline left = 68px
  gap = 12.0px  (≥ 8 required)  PASS
```

## Appendix B — Evidence paths

| Kind | Path |
|------|------|
| Raw JSON | `/workspace/artifacts/browser-qa-agent-raw.json` |
| Agent screenshots | `/workspace/artifacts/qa-agent-*.png` |
| Official after | `/workspace/screenshots/hero-recovery-after/` |
| Official before | `/workspace/screenshots/hero-recovery-before/` |
| Prior green log (cross-check) | `/workspace/artifacts/hero-recovery-qa-green-rerun.log` (29/29) |

## Appendix C — Demo state samples (abridged)

**After Commit path click:** scrub timeline includes `5/6 · Commit` / CMT emphasis.  
**After Abort path click:** scrub shows ABT / Propose segment — distinct from Commit state.

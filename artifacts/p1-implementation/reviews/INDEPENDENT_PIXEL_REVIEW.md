# Independent Pixel Review — Nexus-IQ P0.5 + P1 Instruments

**Reviewer role:** Independent visual QA (did not implement UI)  
**Method:** Pixel inspection of screenshots only under `/workspace/screenshots/p1-final/`  
**Date:** 2026-07-29  
**Scope:** Desktop 1440 and Mobile 390 P0.5/P1 surfaces listed below  
**Not in scope:** DOM inspection, source code, CSS tokens, or implementation notes  

---

## 1. Corpus reviewed

### Desktop 1440 (required)

| File | Surface |
|------|---------|
| `review-home-d1440.png` | Home |
| `review-system-d1440.png` | System |
| `review-claims-d1440.png` | Claims (Current) |
| `review-claims-targets-d1440.png` | Claims (Targets) |
| `review-maturity-d1440.png` | Maturity |
| `review-benchmarks-d1440.png` | Benchmarks |
| `review-developers-d1440.png` | Developers |
| `review-dev-destination-d1440.png` | Developers (Destination) |
| `review-security-d1440.png` | Security |
| `review-proof-d1440.png` | Proof |
| `review-atlas-nexusiq-d1440.png` | Atlas · NexusIQ filter |
| `review-atlas-aeon-d1440.png` | Atlas · Aeon filter |
| `review-atlas-nexus-d1440.png` | Atlas · Nexus filter |
| `review-atlas-evidence-d1440.png` | Atlas · Evidence filter |
| `obs-denial-desktop.png` | Observability · Denial |
| `obs-rollback-desktop.png` | Observability · Rollback |
| `atlas-all-desktop.png` | Atlas · All |
| `claims-current-desktop.png` | Claims (Current, alt capture) |
| `maturity-critical-desktop.png` | Maturity · Critical states |
| `benchmarks-desktop.png` | Benchmarks (alt capture) |
| `developers-desktop.png` | Developers · Destination (alt) |
| `lattice-signature-desktop.png` | Lattice Signature instrument |
| `home-reduced-motion.png` | Home · reduced motion |

### Mobile 390 (required)

| File | Surface |
|------|---------|
| `review-home-m390.png` | Home |
| `review-system-m390.png` | System |
| `review-claims-m390.png` | Claims |
| `review-maturity-m390.png` | Maturity |
| `review-benchmarks-m390.png` | Benchmarks |
| `review-developers-m390.png` | Developers |

### Supplemental (same corpus, used for consistency)

- `review-obs-denial-d1440.png`, `review-obs-rollback-d1440.png`, `review-home-reduced-d1440.png`

---

## 2. Review checklist (requested dimensions)

| Check | Result (pixel-level) |
|-------|----------------------|
| Hierarchy | **Pass** — Editorial hero → instruments → disclaimers; sticky maturity status reinforces stage |
| Clipping | **Pass** — No text/controls visibly cut off at 1440 or 390 in provided frames |
| Density | **Pass with minor residual** — “System now” and claim grids are dense but legible |
| Readability | **Pass** — Primary copy and metrics readable; secondary labels muted but legible |
| Misleading adjacency | **Pass** — Current/Target/Not-claimed regions are sectioned, not mixed as peers without labels |
| Maturity ambiguity | **Pass** — Validated active; Production locked/“Not yet”; sticky “Current: Validated” |
| Insufficient contrast | **Minor residual** — Disclaimer/meta grey on navy is usable, not WCAG-proven from pixels alone |
| Target/current confusion | **Pass** — Explicit tabs/sections (“Current Claims” / “Target Claims”; “Current” / “Destination”) |
| Generic dashboard appearance | **Pass** — Evidence-site layout, not SaaS admin chrome; obs pages are intentional instruments |
| Accidental decorative complexity | **Pass** — Lattice Signature is abstract + labeled; not seal/badge theater |
| Mobile loss of meaning | **Pass** — Stage, claim mode, and disclaimers survive 390 stack |
| Visual inconsistency with P0 | **Pass** — Shared navy/cyan system, nav, sticky maturity, signature treatment |
| Product claims > textual claims | **Pass** — Visuals match Validated / measured-outcome framing; Production not dressed as live |
| Destination shown as current | **Pass** — Destination tab + “Not claimed” chips + destination disclaimers |
| Benchmark numbers citable w/o disclaimer | **Pass with minor residual** — Disclaimer present under metrics; numbers still dominate glance |
| Signature implying production trust | **Pass** — Explicit “Not a production certification” on signature surfaces |

---

## 3. Surface-by-surface pixel notes

### 3.1 Home (`review-home-d1440.png`, `home-reduced-motion.png`, `review-home-m390.png`)

**What reads clearly**

- Hero hierarchy: “Proof before production” dominates; CTAs “Explore the system” / “View claims” are secondary and distinct.
- “System now” instrument: three columns Discrete / Quantified / Measured with restrained values (e.g. Decision Latency 12ms, Trace Continuity 99.97%) and “Measured outcome” style labels — not styled as marketing KPIs without framing.
- Maturity strip: Design → Prototype → **Validated** (emphasized) → Production (de-emphasized). Sticky footer “Current: Validated · Production not claimed” is highly legible.
- Lattice Signature block: abstract lattice art + title + body “Integrity mark for this evidence surface. Not a production certification.” Signature does **not** read as a compliance seal.

**Reduced motion (`home-reduced-motion.png` / `review-home-reduced-d1440.png`)**

- Same claim structure without reliance on motion for meaning.
- “System now” remains readable; signature + sticky maturity still present.
- Slightly denser body copy in the reduced-motion capture; no clipping observed.

**Mobile 390**

- Stack preserves: hero → system-now cards → maturity stages → signature.
- Sticky “Current: Validated” remains; Production still readable as not-current.
- No loss of “not production” message from the sticky strip.

**Findings**

| Sev | Instrument | Description | Disposition |
|-----|------------|-------------|-------------|
| minor | Home · System now | Three-up signal grid is dense; secondary labels are small. Still readable at 1440 and 390. | accepted residual |
| minor | Home · reduced motion | Body/panel density increases when motion is off; hierarchy intact, no claim drift. | accepted residual |

---

### 3.2 System (`review-system-d1440.png`, `review-system-m390.png`)

**What reads clearly**

- Explicit three-band model: **Current** (cyan/active chips: Decision Path Live, Commit Integrity Verified, Deny Path Active), **Target** (muted “Planned” items), **Not claimed** (Production certification, Third-party audit, SLA guarantees).
- Pipeline graphic Source → Lattice → Commit → Evidence → Deny is schematic, not a live ops wallboard.
- Footer: “NexusIQ is not a production certification… Validated maturity only.”

**Mobile**

- Bands stack; “Current” / “Target” / “Not claimed” headings remain the primary scanners.
- Chips wrap without colliding; meaning of “not claimed” survives.

**Findings**

| Sev | Instrument | Description | Disposition |
|-----|------------|-------------|-------------|
| — | System | No must-fix pixel defects. Target vs current is not confusable. | — |

---

### 3.3 Claims (`review-claims-d1440.png`, `review-claims-targets-d1440.png`, `claims-current-desktop.png`, `review-claims-m390.png`)

**Current mode**

- Tab control “Current Claims | Target Claims” with Current selected (filled).
- Large metrics 12ms / 99.97% / < 2s under clear titles; each card footed with “Measured outcome” (or equivalent measured framing).
- Page-level disclaimer: current claims only; targets not presented as present capability (wording visible under grid).
- Sticky “Current: Validated”.

**Targets mode (`review-claims-targets-d1440.png`)**

- Target tab selected; cards show **Target** badges and values (8ms, 99.99%, < 1s).
- Card-level copy: “Target · not measured as current” / “Not yet claimed” class language is visible.
- Visual weight of target numbers matches current numbers (same card chrome) — mitigated by badges + copy, not by down-ranking type size alone.

**Mobile**

- Tabs remain; Current metrics readable; measured framing and bottom disclaimer present.

**Findings**

| Sev | Instrument | Description | Disposition |
|-----|------------|-------------|-------------|
| minor | Claims · Targets | Target numerics use same large type as Current. Glance screenshots of numbers alone could look “live.” On-page badges/copy correct this. | accepted residual |
| — | Claims · Current | No destination-as-current defect. Current/Target toggle is unambiguous. | — |

---

### 3.4 Maturity (`review-maturity-d1440.png`, `maturity-critical-desktop.png`, `review-maturity-m390.png`)

**What reads clearly**

- Four-stage rail: Design, Prototype, **Validated** (active/highlight), Production (**Not yet** / locked treatment).
- Critical states panel (`maturity-critical-desktop.png`): Deny Path Active, Rollback Ready, Commit Integrity Verified — operational readiness under Validated, not Production.
- Sticky “Current: Validated” reinforces stage everywhere this surface appears.

**Mobile**

- Stages compress but Validated highlight + Production “Not yet” still readable.
- Critical-state list stacks cleanly.

**Findings**

| Sev | Instrument | Description | Disposition |
|-----|------------|-------------|-------------|
| minor | Maturity · mobile stages | Four-up stage strip is tight at 390; labels remain legible in capture, low risk of misreading Production as current. | accepted residual |
| — | Maturity ambiguity | Production is visually subordinate; Validated is the only “current” stage signal. | — |

---

### 3.5 Benchmarks (`review-benchmarks-d1440.png`, `benchmarks-desktop.png`, `review-benchmarks-m390.png`)

**What reads clearly**

- Three hero metrics: Decision Latency **12ms**, Trace Continuity **99.97%**, Deny Path **< 2s**.
- Per-card framing: “Measured outcome · current” (or equivalent).
- Explicit under-grid disclaimer (desktop + mobile): internal measured outcomes; **not third-party audited**; **not for procurement citation without review**.

**Risk assessment (requested: citable without disclaimer)**

- Numbers are the visual protagonists (correct for a benchmarks instrument).
- Disclaimer is present, same viewport on desktop; on mobile it sits below the stack (user must scroll past numbers to read full legal framing — still on-page).
- Not bare “dashboard KPIs” without provenance language.

**Findings**

| Sev | Instrument | Description | Disposition |
|-----|------------|-------------|-------------|
| minor | Benchmarks · metric scale | Typographic scale of numbers >> disclaimer scale; residual glance-citation risk if cropped. Full-frame captures include disclaimer. | accepted residual |
| — | Benchmarks · disclaimer presence | Required anti-citation language is visible on both 1440 and 390 captures. | — |

---

### 3.6 Developers (`review-developers-d1440.png`, `review-dev-destination-d1440.png`, `developers-desktop.png`, `review-developers-m390.png`)

**Current mode**

- “Current | Destination” control; current content framed as present developer surface.
- Lattice Signature with non-certification copy present on developer evidence chrome.

**Destination mode**

- Header: “Destination · not claimed” (or equivalent).
- Cards: API Surface / SDK Maturity / Domain Coverage with **Not claimed** badges; values like “Complete” / “High” appear only inside destination framing.
- Footer disclaimer: destination claims are not present capability (visible in desktop destination captures).
- Mobile (`review-developers-m390.png`): Destination selected; “Not claimed” badge visible; destination disclaimer survives stack.

**Findings**

| Sev | Instrument | Description | Disposition |
|-----|------------|-------------|-------------|
| minor | Developers · Destination values | Words “Complete” and “High” are achievement-coded; mitigated by tab state, “Not claimed” chips, and footer. | accepted residual |
| — | Destination-as-current | No pixel state shows Destination content under a Current label. | — |

---

### 3.7 Security (`review-security-d1440.png`)

**What reads clearly**

- “Access Model” + explicit **“What this does not claim”** (no SOC2/ISO theater as achieved).
- “No production access without authorization” style constraints visible.
- Calm editorial layout; does not impersonate a live SOC console.

**Findings**

| Sev | Instrument | Description | Disposition |
|-----|------------|-------------|-------------|
| — | Security | No overclaim or generic-dashboard defect at pixel level. | — |

---

### 3.8 Proof (`review-proof-d1440.png`)

**What reads clearly**

- “Proof before production” / evidence framing.
- Measured outcome cards (e.g. 12ms, 99.97%) with measured labels.
- Lattice Signature + “Not a production certification.”

**Gap vs Benchmarks**

- Proof surface shows strong numerics; the longer “not for procurement citation” line visible on Benchmarks is **not** as prominent on the Proof capture (signature non-certification is present).

**Findings**

| Sev | Instrument | Description | Disposition |
|-----|------------|-------------|-------------|
| minor | Proof · citation framing | Large measured numbers with signature disclaimer, but weaker procurement/citation disclaimer than Benchmarks page. Residual if Proof is screenshot-shared alone. | accepted residual |

---

### 3.9 Atlas (`review-atlas-nexusiq-d1440.png`, `review-atlas-aeon-d1440.png`, `review-atlas-nexus-d1440.png`, `review-atlas-evidence-d1440.png`, `atlas-all-desktop.png`)

**What reads clearly**

- Filter chips: All / NexusIQ / Aeon / Nexus / Evidence.
- Maturity badges on cards: NexusIQ **Validated**, Aeon **Prototype**, Nexus **Design** — hierarchy of readiness is visible, not flattened.
- Evidence filter empty state: “No systems match this filter” — honest, not a fake populated grid.
- All view (`atlas-all-desktop.png`) shows multi-product atlas without elevating Design/Prototype products to Validated chrome.

**Findings**

| Sev | Instrument | Description | Disposition |
|-----|------------|-------------|-------------|
| — | Atlas | No product-claim inflation; empty Evidence state is correct and clear. | — |

---

### 3.10 Observability — Denial & Rollback (`obs-denial-desktop.png`, `obs-rollback-desktop.png`, `review-obs-*`)

**Denial**

- Path Source → Decision → **DENY** with strong DENY treatment.
- Copy: denial as first-class outcome (visible).
- Reads as explanatory instrument, not as a live multi-tenant ops wall with invented telemetry noise.

**Rollback**

- **REVERTED** / rollback success framing; Commit Integrity Verified style confirmation.
- Clear before/after narrative without implying continuous production SRE dashboard.

**Findings**

| Sev | Instrument | Description | Disposition |
|-----|------------|-------------|-------------|
| minor | Obs instruments | Higher UI density than marketing pages (intentional). Still not a generic vendor admin dashboard clone. | accepted residual |
| — | Misleading production trust | No “all systems green / production certified” composition. | — |

---

### 3.11 Lattice Signature (`lattice-signature-desktop.png`, and signature blocks on Home/Proof/Developers)

**What reads clearly**

- Abstract geometric lattice — decorative mark, not a government/ISO seal.
- Title + “Not a production certification” is **on-art adjacent**, not buried only in footer legalese.
- Does not use gold ribbon, checkmark medallion, or “Certified” lockups.

**Findings**

| Sev | Instrument | Description | Disposition |
|-----|------------|-------------|-------------|
| — | Lattice Signature | Does **not** imply production trust at pixel level. | — |

---

## 4. Cross-cutting findings register

| ID | Severity | Instrument(s) | Description | Disposition |
|----|----------|---------------|-------------|-------------|
| F-01 | minor | Benchmarks, Claims, Proof | Large measured numerics dominate hierarchy; disclaimers are present but smaller. Cropped social screenshots could over-claim. | accepted residual |
| F-02 | minor | Claims · Targets | Target values share Current card typography; badges/copy prevent mode confusion in full UI. | accepted residual |
| F-03 | minor | Developers · Destination | “Complete” / “High” achievement language inside destination cards; “Not claimed” + tab state mitigate. | accepted residual |
| F-04 | minor | Proof | Weaker procurement-citation disclaimer than Benchmarks while showing same class of numbers. | accepted residual |
| F-05 | minor | Global secondary text | Muted grey meta/disclaimer text on navy — readable in captures; contrast not guaranteed for all vision conditions from pixels alone. | accepted residual |
| F-06 | minor | Maturity · m390 | Stage rail tight; Validated still distinct from Production. | accepted residual |
| F-07 | minor | Home · reduced motion | Slightly denser “System now” panel; no claim or clipping defect. | accepted residual |
| F-08 | minor | Obs denial/rollback | Instrument density higher than editorial pages; still claim-safe and non-generic. | accepted residual |

**Critical findings:** none  
**Major findings:** none  
**Blocking must-fix findings:** none  

---

## 5. Explicit pass/fail on high-risk claim-safety checks

| High-risk check | Pixel verdict |
|-----------------|---------------|
| Maturity ambiguity (Validated vs Production) | **PASS** — Production locked/not-yet; sticky Current: Validated |
| Target/current confusion | **PASS** — Tabs/sections + labels |
| Destination shown as current | **PASS** |
| Benchmark numbers appearing citable without disclaimer | **PASS** (disclaimer on-page) + **accepted residual** glance risk (F-01) |
| Signature implying production trust | **PASS** — explicit non-certification |
| Product claims visually stronger than textual claims | **PASS** — visuals align with Validated / measured / not-claimed framing |
| Mobile loss of meaning | **PASS** |
| Generic dashboard / decorative complexity accidents | **PASS** |

---

## 6. Consistency notes (pixel, not code)

- Shared shell: dark navy field, cyan accent, top nav (System / Evidence / Developers / Atlas / Security), sticky maturity strip — consistent across Home, Claims, Maturity, Benchmarks, Developers, Proof, Atlas, Security, Obs.
- “Measured outcome” language recurs on Claims, Benchmarks, Proof, Home system-now — claim register feels unified.
- Alt captures (`claims-current-desktop`, `benchmarks-desktop`, `developers-desktop`, `obs-*-desktop`) match the `review-*` series in structure and claim framing (minor viewport/compression differences only).

---

## 7. What would have blocked approval (none observed)

The following were specifically hunted and **not** found in the provided screenshots:

1. Production stage styled as active/current without lock/“Not yet”.
2. Destination or Target content under a Current heading.
3. Benchmark hero metrics with **no** anti-audit / anti-citation disclaimer in-frame (desktop Benchmarks and mobile Benchmarks both include it).
4. Lattice Signature as certification seal / “production trusted” badge.
5. Mobile collapse that drops maturity stage or claim mode identity.
6. Security page presenting unverified compliance logos as achieved.
7. Atlas elevating Design/Prototype products with Validated chrome.
8. Obvious clipping of primary claims, CTAs, or stage labels at 1440/390.

---

## 8. Verdict

P0.5 + P1 instruments, as captured, present a coherent evidence-site visual system with disciplined claim hierarchy: **Validated** is current; **Production** is not claimed; **targets/destination** are labeled; benchmarks and measured outcomes carry disclaimers; Lattice Signature disclaims certification; mobile stacks preserve meaning. Remaining issues are minor residuals (typographic dominance of numbers, destination achievement words, proof citation copy strength, meta contrast) and are accepted for this review gate.

### VERDICT: APPROVE

No blocking must-fix items.

---

*End of independent pixel review. Product source was not modified. Review artifact only.*

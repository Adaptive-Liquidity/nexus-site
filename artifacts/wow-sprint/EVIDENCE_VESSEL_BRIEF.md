# EVIDENCE_VESSEL_BRIEF — Object language for The Consequence Chamber

**Phase:** ART_DIRECTION · Phase 2 (Wow sprint)  
**Date:** 2026-07-29  
**Depends on:** `REFERENCE_BOARD.md` principles  
**Gate after board approval:** object-language candidate production → `APPROVE_OBJECT_LANGUAGE_[ID]`  
**Generation this turn:** **not authorized** — brief only.

---

## Purpose

Define a **signature Nexus-IQ evidence vessel** that can recur across:

1. Prestige hero still / motion (atmospheric)
2. Scene handoff motif into DemoPlayer
3. DemoPlayer / transaction chrome (DOM/SVG simplification)
4. Evidence section / Proof Capsule Explorer (abstracted, never claiming the art *is* a signed capsule)

The vessel carries **intent toward a commit boundary** and can appear **open / constrained / sealed**. It is **not** the cryptographic Proof Capsule itself—media remains atmospheric; real evidence stays JSON/DOM.

---

## Material system (all families)

| Layer | Material | Visual behavior |
|-------|----------|-----------------|
| Evidence body | Bone / porcelain archive ceramic | Soft speculars, micro-pinholes glaze, warm porcelain `#f6f1e7` family under cool light |
| Authority spine | Blackened titanium | Longitudinal structural band; machining marks; anisotropic brush |
| Seam | Institutional blue `#2f5e73` as **narrow light response**, not paint fill | Appears only where body halves or body/spine interface; pulse later in motion = validate, not neon |
| Contact edges | Precision ceramic lip / titanium knife edge | Hard contact shadow when vessel meets rail or shutter |

**Light:** motivated volume light + soft rim; restrained bloom; deep readable shadow.  
**No:** purple, cyan neon, holograms, logos, text, barcodes-as-decoration, circuit filigree.

---

## State machine (all families must support)

| State | Physical read | Lifecycle map |
|-------|---------------|---------------|
| **Open** | Seam gap visible; interior cavity or ledger face partially exposed; not yet under authority | Intent / propose |
| **Staged** | Vessel seated on rail/channel; free motion constrained to axis; seam still readable | Stage |
| **Constrained** | Shutters or guide jaws narrow; spine aligned to channel; lateral degrees of freedom removed | Constrain |
| **Validated** | Seam light tightens or validates aperture glow; no motion required beyond light change | Validate |
| **Sealed / Emit** | Seam closed flush; outer shell continuous; vessel can exit Commit or Abort route as **portable object** | Emit |

Commit vs Abort is **not painted on the vessel**. Route geometry of the chamber expresses the decision; vessel remains the same sealed object on either path (both may emit evidence).

---

## Thumbnail & mobile requirements

| Check | Pass condition |
|-------|----------------|
| **160×160 px** | Silhouette recognizable as *this* family without color |
| **390 px crop** | Vessel + spine readable; not mistaken for pill/egg |
| **Hero scale** | Vessel large enough to own center-right mass (plan: prior stills failed here) |
| **Handoff motif** | Simplifies to 24–48 px SVG/DOM without losing spine + faceted outline |

---

## Prohibited readings (automatic reject)

- Pharmaceutical **pill** (two hemispheres + cylindrical mid)
- **Egg** / soft organic ovoid
- Soap **dispenser** / plastic dome
- Speaker / smart home puck
- Generic robot head or droid
- USB stick / consumer dongle
- Floating UI capsule with screen
- Any form that needs labels to be understood

---

## Three silhouette families

> These are **materially different**, not prompt-temperature variants.

---

### Family V1 — **AXIAL RIDGE VESSEL** (recommended lead)

**Elevator:** Elongated **faceted hexagonal prism** (~2.4:1 length:width) with a continuous blackened-titanium **axial ridge** (spine) running the full length on the “top” meridian. Porcelain body facets are flat, not rounded. Ends are **truncated hexagonal** (not hemispheres). A narrow institutional-blue seam runs as a single longitudinal hairline offset from the ridge, where two shell halves meet.

```text
Side:     ======ridge======
          /  porcelain   \
Front:    hex face | spine edge
3/4:      facet planes catch light as hard planes
Macro:    ridge machining + glaze pinholes + seam light
```

| View | Requirement |
|------|-------------|
| Front | Truncated hex end; spine reads as dark vertical bar; no “smiley” pill silhouette |
| Side | Long prism; ridge continuous; seam hairline; clear open/sealed gap states |
| Three-quarter | Facets catch hard planes of light; ownable “blade of evidence” |
| Macro | Ridge brush + porcelain glaze + blue seam only at interface |

**Why not pill/egg/dispenser:** Faceted flats + truncated ends + continuous axial ridge = industrial gauge block / archive cartridge language, not capsule medicine.

**Open:** seam gap 1–2 mm; faint inner cavity (dark, no fake UI).  
**Constrained:** jaws clamp on two facets; ridge locked to rail.  
**Sealed:** seam flush; ridge still defines silhouette at 160 px.

**Recurrence:**

- Hero: large three-quarter on rail approaching layered gate.
- Handoff: side silhouette sliding into DemoPlayer chrome.
- Demo: monoline SVG ridge + hex outline.
- Evidence: abstract porcelain block icon (never “this image is signed”).

**Risks:** Over-elongation → USB stick. Mitigation: keep length ≤2.6:1; end faces must stay hexagonal, not rounded.

---

### Family V2 — **SPLIT LEDGER MODULE**

**Elevator:** Two **interlocking book-like half-shells** of porcelain evidence material, closed by a blackened-titanium **spine clamp** on one long edge (like a vaulted sample book). When open, faces show shallow recessed **ledger planes** (blank—no text). When sealed, halves form a thick rectangular parallelepiped with chamfered corners. Institutional-blue seam is the clamp contact line.

```text
Open:     [ half ]   [ half ]   clamp spine upright
Staged:   halves approaching clamp
Sealed:   thick rectangle; spine dark; chamfered edges
```

| View | Requirement |
|------|-------------|
| Front | Rectangle with dark spine edge; not circular |
| Side | Book thickness; clamp hardware readable |
| Three-quarter | Interlock geometry unique |
| Macro | Clamp teeth / porcelain page lip |

**Why not pill/egg/dispenser:** Explicit book/ledger architecture; dual-half state machine is ownable.

**Open / constrained / sealed:** Natural to this form (halves + clamp).

**Recurrence:** Strong for Evidence section metaphor (“inspectable record”); hero needs careful scale so it doesn’t read as a closed laptop.

**Risks:** Laptop / tablet reading. Mitigation: no glass plane; no keyboard cues; chamfer language of ceramic sample, not consumer electronics; keep proportions thicker than a device.

---

### Family V3 — **ORBITAL KEYSTONE**

**Elevator:** A **trapezoidal keystone block** (thick architectural wedge) of porcelain with a blackened-titanium **dorsal armor plate** and a narrow blue **transverse seam** across the thick end. Underside has a **precision dovetail** that locks into the chamber rail. Silhouette is asymmetric: thick authority face forward, thinner trailing edge.

```text
Side:     thick → taper (keystone)
Front:    trapezoid face + dorsal plate
3/4:      dovetail underside + plate rim light
Macro:    dovetail machining + seam across thick face
```

| View | Requirement |
|------|-------------|
| Front | Trapezoid—immediately non-capsule |
| Side | Keystone taper + rail dovetail |
| Three-quarter | Armor plate + ceramic body dual material |
| Macro | Dovetail + seam |

**Why not pill/egg/dispenser:** Architectural keystone + dovetail is masonry/instrument language.

**Open:** transverse seam slightly open on thick face (inner dark).  
**Constrained:** dovetail fully engaged; lateral movement impossible.  
**Sealed:** seam closed; plate continuous.

**Recurrence:** Excellent for monumental threshold compositions; may be harder to simplify to tiny Demo chrome than V1.

**Risks:** “Cheese wedge” / toy block. Mitigation: precision machining, micro-bevels, dovetail, not soft corners.

---

## Comparison matrix (pre-generation)

| Criterion | V1 Axial Ridge | V2 Split Ledger | V3 Orbital Keystone |
|-----------|----------------|-----------------|---------------------|
| Not pill/egg/dispenser | Strong | Strong | Strong |
| 160 px silhouette | **Best** (ridge) | Pass (spine edge) | Pass (trapezoid) |
| Open/constrained/sealed | Pass | **Best** | Pass |
| Hero journey on rail | **Best** | Good | **Best** (dovetail) |
| Material macro interest | Strong | Strong | Strong |
| Demo/SVG simplification | **Best** | Good | Harder |
| Laptop / USB risk | USB if too long | Laptop if glass | Toy wedge if soft |
| Ownable “only Nexus-IQ” potential | High | High (ledger thesis) | High (keystone thesis) |

**Lead pre-generation preference:** **V1 Axial Ridge Vessel** as primary object language; V2 as evidence-surface sibling; V3 as monumental alternate. Final pick requires pixel candidates + independent visual review after generation is authorized.

---

## Generation board requirements (when authorized)

Only after **explicit** named service + max spend authorization:

1. One **neutral studio board per family** (no hero environment).
2. Per board: front, side, three-quarter, macro; open + sealed at minimum.
3. Pure void or light gray cyclorama; single soft key + rim.
4. 16:9 or multi-panel sheet; no text, no watermarks, no logos.
5. Log: model/version, full prompt, settings, cost, output ID, bytes, dimensions, SHA-256.
6. Independent reviewer (not the generating agent) scores against prohibited readings + 160 px crop.
7. Reject and regenerate only for **named defects** (plan §7).

**Not authorized this turn** — stop after this brief.

---

## Chamber coupling (object ↔ world)

The vessel is incomplete without the boundary language (hero still phase later):

- Layered shutters / validation apertures (not a glowing ring).
- Rail or channel with scale cues (foreground occlusion, distant structure).
- Commit = **square terminal route** geometry; Abort = **diamond terminal route** geometry—embodied in architecture.
- Left 38–44% charged void for DOM type.

Object language locks **what crosses** the boundary; reference board locks **how the world feels**.

---

## Acceptance criteria for `APPROVE_OBJECT_LANGUAGE_[ID]`

- [ ] One family selected after pixel boards exist  
- [ ] Passes not-pill / not-egg / not-dispenser / not-robot  
- [ ] Recognizable at 160 px  
- [ ] Open, constrained, sealed states demonstrated  
- [ ] Materials map to porcelain + titanium + institutional seam  
- [ ] Independent reviewer agrees from pixels  
- [ ] Recurrence plan accepted for hero → handoff → Demo → evidence  

---

## Explicit defects to avoid (from plan audit of prior stills)

1. Consumer capsule silhouette.  
2. Floating Commit/Abort symbols attached to object.  
3. Object too small to own the frame.  
4. Ambiguous plastic dome / dispenser.  
5. No open/sealed state language.

---

**Await:** `APPROVE_REFERENCE_BOARD` before object-language generation.

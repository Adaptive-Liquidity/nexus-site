# EVIDENCE_VESSEL_BRIEF — Object language for The Consequence Chamber

**Phase:** ART_DIRECTION · Phase 2 (Wow sprint)  
**Date:** 2026-07-29  
**Depends on:** `REFERENCE_BOARD.md` principles  
**Gate after board approval:** object-language candidate production → `APPROVE_OBJECT_LANGUAGE_[ID]`  
**Generation status:** **Boards delivered** under `APPROVE_REFERENCE_BOARD` — see `object-language/OBJECT_LANGUAGE_REVIEW.md`

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

### Family V1 — **AXIAL RIDGE VESSEL**

**Board:** `object-language/V1_fvx51_board.jpg` · **160px:** `V1_160px.jpg`  
Elongated faceted hexagonal prism; continuous titanium axial ridge; blue hairline seam; open hollow halves.

### Family V2 — **SPLIT LEDGER MODULE**

**Board:** `object-language/V2_DiOjw_board.jpg` · **160px:** `V2_160px.jpg`  
Rectangular porcelain half-shells; metal spine; open blank ledger trays. WEAK ownability (book/clamshell).

### Family V3 — **ORBITAL KEYSTONE** (lead + independent preference)

**Board:** `object-language/V3_EuOmK_board.jpg` · **160px:** `V3_160px.jpg`  
Asymmetric keystone; dorsal titanium plate; blue transverse seam; underside rail channel; open cavity.

---

## Acceptance criteria for `APPROVE_OBJECT_LANGUAGE_[ID]`

- [x] Pixel boards exist for three families  
- [ ] One family selected by user token  
- [x] Independent reviewer scored from pixels  
- [x] Lead recommendation recorded (`OBJECT_LANGUAGE_REVIEW.md`)  

**Await user token before hero still sprint.**

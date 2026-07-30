# Object-language candidate review

**Gate parent:** `APPROVE_REFERENCE_BOARD` (user, 2026-07-29)  
**This phase:** Evidence-vessel object language only — **not** hero stills, motion, or product integration  
**Service:** Grok Imagine (`generate_image` / `image_edit`) · model version & cost **unlogged**  
**Independent reviewer:** `bd1e783c-a8b1-4093-90bd-18bd15d4c10a`  
**Lead:** pixel re-read of the six delivery files below  

---

## Delivery files

| Family | Board | 160px | Board SHA-256 | Bytes | Dims |
|--------|-------|-------|---------------|------:|------|
| **V1** Axial Ridge | `V1_fvx51_board.jpg` | `V1_160px.jpg` | `54981944dd13e0d6ce20a4cb9188224882d1a208a97a3db69a995e5fe9f17c78` | 191259 | 1248×832 |
| **V2** Split Ledger | `V2_DiOjw_board.jpg` | `V2_160px.jpg` | `1e38b7ea719f75e8bceb93fb72179a964dc4f1c8123f1a85ada6d86b04cf97b5` | 152681 | 1248×832 |
| **V3** Orbital Keystone | `V3_EuOmK_board.jpg` | `V3_160px.jpg` | `e572d60eb002c5f2e4ed9a71b5c0b318471bc2af8d2b7944cc1ae37c5f50627e` | 213299 | 1248×832 |

Thumb SHA-256: V1 `7522698d…c609ef` · V2 `6198a058…26317f` · V3 `a0879c15…b44863`  
Machine log: `records.json` · prompts: `PROMPTS.md`  
Mirrored: `screenshots/wow-object-language/`

---

## Lead pixel scores

| Criterion | V1 | V2 | V3 |
|-----------|----|----|-----|
| not pill | **PASS** | **PASS** | **PASS** |
| not egg | **PASS** | **PASS** | **PASS** |
| not dispenser | **PASS** | **PASS** | **PASS** |
| not robot/USB/laptop | **PASS** | **WEAK** (clamshell/book) | **PASS** |
| 160px recognizable | **PASS** | **WEAK** | **PASS** |
| open vs sealed on board | **PASS** | **PASS** | **PASS** |
| materials (porcelain / Ti / blue seam) | **PASS** | **PASS** | **PASS** |
| ownable silhouette | **PASS** | **WEAK** | **PASS (best)** |
| multi-view board usefulness | **PASS** | **PASS** | **PASS** |
| prohibited text/neon/UI | None | None | None |

### V1 — Axial Ridge (`fvx51`)

Horizontal faceted hexagonal prism; continuous blackened-titanium axial ridge; blue hairline seams; open hollow halves. 160px shows hex body + ridge clearly. Best SVG/rail simplification path.

### V2 — Split Ledger (`DiOjw`)

Warm porcelain rectilinear clamshell with metal spine; open blank trays. Clear open/sealed. Reads as archive book **or** glasses/jewelry case — ownability and 160px weaker.

### V3 — Orbital Keystone (`EuOmK`)

Asymmetric keystone wedge; dorsal brushed titanium plate; institutional blue seam; underside rail/dovetail channel; open cavity. Strongest unique silhouette; 160px holds plate + wedge.

---

## Independent agent disposition

| Agent | Token |
|-------|-------|
| `bd1e783c-…` | **`APPROVE_OBJECT_LANGUAGE_V3`** |

Agent ranking: V3 > V1 ≫ V2. File-grounded descriptions match lead pixel read.

---

## Lead recommendation

### Prefer **`APPROVE_OBJECT_LANGUAGE_V3`** — Orbital Keystone

Aligned with independent review: highest ownable silhouette, clear materials, clear open/sealed, no prohibited signals, strong 160px.

**Strong alternate:** `APPROVE_OBJECT_LANGUAGE_V1` if priority is monoline Demo/SVG ridge + long-rail journey metaphor.

**Do not approve V2** as sole object language without another redesign pass (device/book WEAK marks).

---

## Rejected intermediates (this turn)

| Output ID | Note |
|-----------|------|
| `4eEb6` | V1 first gen — gem/cross straps |
| `UckAi` | V2 first gen — cool gray / glasses-case open |
| `T5ayB` | V2 hinge plastic case |
| `PtoH1` | V3 first gen — symmetric hex bar |

---

## Explicit non-advances

| Action | Status |
|--------|--------|
| Hero still sprint (12 candidates) | **Not started** — requires object-language approval first |
| Motion / animation | **None** |
| Product code integration | **None** |
| Commit / push / PR / deploy | **None** this turn |

---

## STOP

Await exactly one of:

```text
APPROVE_OBJECT_LANGUAGE_V1
APPROVE_OBJECT_LANGUAGE_V2
APPROVE_OBJECT_LANGUAGE_V3
```

Or request a named redesign defect before approval.

# Imagine intermediate images — MANIFEST

**Date:** 2026-07-29  
**Scope:** Every image committed under `artifacts/imagine_images/` at remote HEAD `2ae7cf1`  
**Purpose:** Provenance map for audit. **Not** a production asset catalog.  
**Related delivery stills:** `artifacts/cinematic-hero-stills/` (also studies only; see SUPERSEDED banners there)

---

## Rights & production rule

| Rule | Status |
|------|--------|
| Production hero / motion / site integration | **PROHIBITED** for all rows below until a later authorized generation pass with complete provenance and plan gates |
| Old `APPROVE_HERO_STILL_*` | **RETIRED** |
| Copyrighted reference thumbnails | **Must not** be added to this public tree as production assets |
| Incomplete provenance | Labeled **UNVERIFIED STUDY** → production use prohibited |

**Service (where known):** Grok Imagine image generation / edit tools inside Grok Build (SuperGrok Pro session).  
**Exact model version string, full prompt text, seed, cost, and billing ID:** **not persisted** in repository logs for these files → most fields are incomplete.

Output ID = 5-character filename stem as returned by the Imagine tool at generation time.

---

## Summary table

| File | Output ID | Dims | Bytes | SHA-256 | Service / model | Prompt & settings | Rights | Disposition |
|------|-----------|------|------:|---------|-----------------|-------------------|--------|-------------|
| `0FDHn.jpg` | `0FDHn` | 1280×720 | 103236 | `1f4f8417a7a7e3381d19065513171643b29786d7df04c78ae2f7fa97a7df1ce2` | Grok Imagine (gen) / version **unlogged** | **Incomplete** — early Evidence Forge study (true 16:9); full prompt not recovered | UNVERIFIED STUDY | **Rejected** as final; early package still-2 seed |
| `5MElz.jpg` | `5MElz` | 1168×784 | 130210 | `34c61bd44eb17b233ebc4e5ba0c195a01cf001935f525c79dbdfec91fbdfe55b` | Grok Imagine / **unlogged** | **Incomplete** | UNVERIFIED STUDY | **Rejected** intermediate |
| `Beq6z.jpg` | `Beq6z` | 1248×832 | 124915 | `81e90bed80604eeeb65eef1559e94dd265d5673dbe5b79c3ef05bc65d0911f5d` | Grok Imagine (gen) / **unlogged** | **Incomplete** — early Commit Monolith (3:2-ish, not true 16:9) | UNVERIFIED STUDY | **Rejected** as delivery; first-package still-1 seed |
| `Dooyx.jpg` | `Dooyx` | 1168×784 | 95187 | `67512f4ecc2443d1684f75a343f6873018b91c81b25ecbb915cbac27fc2e748a` | Grok Imagine (edit) / **unlogged** | **Incomplete** — threshold attempt; **embedded Commit/Abort text** observed in session | UNVERIFIED STUDY | **Rejected** (generated text prohibited) |
| `Hw5GC.jpg` | `Hw5GC` | 1248×832 | 132284 | `e49f1c247577ecea76c60f60db811071a644e354c7931a4d57bb3e139f85ea16` | Grok Imagine (edit) / **unlogged** | Partial: dual-exit forge refinement; full prompt/settings **not recovered** | UNVERIFIED STUDY | Study parent for resized `02-evidence-forge.jpg` — **not production** |
| `QUeXr.jpg` | `QUeXr` | 1248×832 | 91297 | `1b0e6bbe321fb22c1d761d32c3ef78963f8ec6a537b79ece2fe2c7e5d8247c94` | Grok Imagine (edit) / **unlogged** | Partial: Commit Monolith + institutional blue rim; full prompt **not recovered** | UNVERIFIED STUDY | Study parent for resized `01-commit-monolith.jpg` — **not production** |
| `afpjV.jpg` | `afpjV` | 1248×832 | 126457 | `39d752adcf4641596e9bf4bdb43224990141d136cb88cd4b1f3d184e587ca19c` | Grok Imagine (edit) / **unlogged** | Partial: text-free Controlled Threshold (brushed metal); full prompt **not recovered** | UNVERIFIED STUDY | **Rejected** as delivery pick (alternate threshold) |
| `e5Z4U.jpg` | `e5Z4U` | 1168×784 | 86877 | `2f20f40561a4ddb10aeb8c459f92ccc5dc17103237bb5e50e682990ed8f898a9` | Grok Imagine / **unlogged** | **Incomplete** | UNVERIFIED STUDY | **Rejected** intermediate |
| `jR7hQ.jpg` | `jR7hQ` | 1248×832 | 105330 | `1b6ad0f09cad91c4047ee364d06a50d921b30afcb7e924015632f6f498f814fb` | Grok Imagine (gen) / **unlogged** | **Incomplete** — early Controlled Threshold (pre-true-16:9 package) | UNVERIFIED STUDY | **Rejected** as delivery; first-package still-3 seed |
| `kYJDP.jpg` | `kYJDP` | 1168×784 | 95661 | `3d1b00f7b0710ad4df7d778f6927336aba6cfed5311a3f70a6642426a804394f` | Grok Imagine (gen/edit) / **unlogged** | Partial: text-free threshold, dark titanium; full prompt **not recovered** | UNVERIFIED STUDY | Study parent for resized `03-controlled-threshold.jpg` — **not production** |
| `nvVAW.jpg` | `nvVAW` | 1168×784 | 112082 | `932bfe258c2c16f963a6d928bebb0658e3d3baa10c91141a00bbd8a57ae24a44` | Grok Imagine / **unlogged** | **Incomplete** | UNVERIFIED STUDY | **Rejected** intermediate |
| `sSCzC.jpg` | `sSCzC` | 1248×832 | 108168 | `8f59f87e4d604a06fbeb9cd4ff8ba57c0c963fd8ed4e693e88949f6ed6034be2` | Grok Imagine (edit) / **unlogged** | Partial: threshold with **embedded text labels** in session review | UNVERIFIED STUDY | **Rejected** (text in media) |
| `ySxqV.jpg` | `ySxqV` | 1168×784 | 143964 | `c01398e029f1c955f8e008f7e9fc358660da5c73e20fa5a1c45955f3ac627ea0` | Grok Imagine / **unlogged** | **Incomplete** | UNVERIFIED STUDY | **Rejected** intermediate |
| `yU1UP.jpg` | `yU1UP` | 1168×784 | 90766 | `bb0fd0c93a120c3083430225d7c2414789ae53e39a7b1d6650b61598000612b6` | Grok Imagine (gen) / **unlogged** | Partial: first landscape Commit Monolith pass; full prompt **not recovered** | UNVERIFIED STUDY | Superseded by `QUeXr` edit chain — **not production** |

---

## Related delivery stills (not under this directory)

Resized/normalized **study** outputs committed under `artifacts/cinematic-hero-stills/` and mirrored in `screenshots/cinematic-hero-stills/`. Same production prohibition.

| File | Dims | Bytes | SHA-256 | Source intermediate (session claim) | Disposition |
|------|------|------:|---------|-------------------------------------|-------------|
| `01-commit-monolith.jpg` | 1920×1080 | 107421 | `5c237414457a2c4cdadf8d02d4fa717c1659a65782cdbbe241e612e399a55b49` | Derived from `QUeXr.jpg` via local resize (bytes differ) | **Study only** — journey seed; not approved |
| `02-evidence-forge.jpg` | 1920×1080 | 153891 | `1ddbbf95b6d408f78f75e6f03b292efb09206be063b2e2e37b4b5248306f6a02` | Derived from `Hw5GC.jpg` via local resize | **Study only** — material seed; not approved |
| `03-controlled-threshold.jpg` | 1920×1080 | 119914 | `de44f2c6819903accf60eac18a7e8c91c901f9a915049a7ccb17b8c05d4b453c` | Derived from `kYJDP.jpg` via local resize | **Study only** — shape-grammar seed; not approved |

Derivation chain is **session-reconstructed**, not cryptographically logged. Treat delivery stills as **UNVERIFIED STUDY** for production rights purposes until a fully logged regeneration.

---

## Per-asset detail blocks

### `0FDHn.jpg`

- **Path:** `artifacts/imagine_images/0FDHn.jpg`
- **Output ID:** `0FDHn`
- **Model/service:** Grok Imagine · version unlogged
- **Prompt/settings:** Incomplete — early Evidence Forge concept; landscape ~16:9
- **Cost / billing ID:** Not recorded
- **Dimensions / bytes / SHA-256:** 1280×720 · 103236 · `1f4f8417…df1ce2`
- **Rights:** UNVERIFIED STUDY — production prohibited
- **Disposition:** Rejected as final hero; first-package still-2 hash match to historical study notes

### `5MElz.jpg`

- **Path:** `artifacts/imagine_images/5MElz.jpg`
- **Output ID:** `5MElz`
- **Model/service:** Grok Imagine · version unlogged
- **Prompt/settings:** Incomplete
- **Cost / billing ID:** Not recorded
- **Dimensions / bytes / SHA-256:** 1168×784 · 130210 · `34c61bd4…bdfe55b`
- **Rights:** UNVERIFIED STUDY — production prohibited
- **Disposition:** Rejected intermediate

### `Beq6z.jpg`

- **Path:** `artifacts/imagine_images/Beq6z.jpg`
- **Output ID:** `Beq6z`
- **Model/service:** Grok Imagine · version unlogged
- **Prompt/settings:** Incomplete — early Commit Monolith (1248×832)
- **Cost / billing ID:** Not recorded
- **Dimensions / bytes / SHA-256:** 1248×832 · 124915 · `81e90bed…911f5d`
- **Rights:** UNVERIFIED STUDY — production prohibited
- **Disposition:** Rejected for true-16:9 delivery; first-package still-1 seed

### `Dooyx.jpg`

- **Path:** `artifacts/imagine_images/Dooyx.jpg`
- **Output ID:** `Dooyx`
- **Model/service:** Grok Imagine (edit) · version unlogged
- **Prompt/settings:** Incomplete; session noted **embedded Commit/Abort labels**
- **Cost / billing ID:** Not recorded
- **Dimensions / bytes / SHA-256:** 1168×784 · 95187 · `67512f4e…2e748a`
- **Rights:** UNVERIFIED STUDY — production prohibited
- **Disposition:** **Rejected** (text in generated media)

### `Hw5GC.jpg`

- **Path:** `artifacts/imagine_images/Hw5GC.jpg`
- **Output ID:** `Hw5GC`
- **Model/service:** Grok Imagine (edit) · version unlogged
- **Prompt/settings:** Partial recovery only (forge dual-exit refinement)
- **Cost / billing ID:** Not recorded
- **Dimensions / bytes / SHA-256:** 1248×832 · 132284 · `e49f1c24…f85ea16`
- **Rights:** UNVERIFIED STUDY — production prohibited
- **Disposition:** Selected as **study** resize source for `02-evidence-forge.jpg` only; not production

### `QUeXr.jpg`

- **Path:** `artifacts/imagine_images/QUeXr.jpg`
- **Output ID:** `QUeXr`
- **Model/service:** Grok Imagine (edit) · version unlogged
- **Prompt/settings:** Partial recovery only (monolith + blue rim)
- **Cost / billing ID:** Not recorded
- **Dimensions / bytes / SHA-256:** 1248×832 · 91297 · `1b0e6bbe…247c94`
- **Rights:** UNVERIFIED STUDY — production prohibited
- **Disposition:** Selected as **study** resize source for `01-commit-monolith.jpg` only; not production

### `afpjV.jpg`

- **Path:** `artifacts/imagine_images/afpjV.jpg`
- **Output ID:** `afpjV`
- **Model/service:** Grok Imagine (edit) · version unlogged
- **Prompt/settings:** Partial (text-free threshold, brushed metal)
- **Cost / billing ID:** Not recorded
- **Dimensions / bytes / SHA-256:** 1248×832 · 126457 · `39d752ad…7ca19c`
- **Rights:** UNVERIFIED STUDY — production prohibited
- **Disposition:** Rejected as delivery still (alternate to `kYJDP`)

### `e5Z4U.jpg`

- **Path:** `artifacts/imagine_images/e5Z4U.jpg`
- **Output ID:** `e5Z4U`
- **Model/service:** Grok Imagine · version unlogged
- **Prompt/settings:** Incomplete
- **Cost / billing ID:** Not recorded
- **Dimensions / bytes / SHA-256:** 1168×784 · 86877 · `2f20f405…f898a9`
- **Rights:** UNVERIFIED STUDY — production prohibited
- **Disposition:** Rejected intermediate

### `jR7hQ.jpg`

- **Path:** `artifacts/imagine_images/jR7hQ.jpg`
- **Output ID:** `jR7hQ`
- **Model/service:** Grok Imagine · version unlogged
- **Prompt/settings:** Incomplete — early Controlled Threshold
- **Cost / billing ID:** Not recorded
- **Dimensions / bytes / SHA-256:** 1248×832 · 105330 · `1b6ad0f0…f814fb`
- **Rights:** UNVERIFIED STUDY — production prohibited
- **Disposition:** Rejected as delivery; first-package still-3 seed

### `kYJDP.jpg`

- **Path:** `artifacts/imagine_images/kYJDP.jpg`
- **Output ID:** `kYJDP`
- **Model/service:** Grok Imagine · version unlogged
- **Prompt/settings:** Partial (text-free dark threshold)
- **Cost / billing ID:** Not recorded
- **Dimensions / bytes / SHA-256:** 1168×784 · 95661 · `3d1b00f7…04394f`
- **Rights:** UNVERIFIED STUDY — production prohibited
- **Disposition:** Selected as **study** resize source for `03-controlled-threshold.jpg` only; not production

### `nvVAW.jpg`

- **Path:** `artifacts/imagine_images/nvVAW.jpg`
- **Output ID:** `nvVAW`
- **Model/service:** Grok Imagine · version unlogged
- **Prompt/settings:** Incomplete
- **Cost / billing ID:** Not recorded
- **Dimensions / bytes / SHA-256:** 1168×784 · 112082 · `932bfe25…e24a44`
- **Rights:** UNVERIFIED STUDY — production prohibited
- **Disposition:** Rejected intermediate

### `sSCzC.jpg`

- **Path:** `artifacts/imagine_images/sSCzC.jpg`
- **Output ID:** `sSCzC`
- **Model/service:** Grok Imagine (edit) · version unlogged
- **Prompt/settings:** Partial; session rejected for **embedded text**
- **Cost / billing ID:** Not recorded
- **Dimensions / bytes / SHA-256:** 1248×832 · 108168 · `8f59f87e…034be2`
- **Rights:** UNVERIFIED STUDY — production prohibited
- **Disposition:** **Rejected** (text in media)

### `ySxqV.jpg`

- **Path:** `artifacts/imagine_images/ySxqV.jpg`
- **Output ID:** `ySxqV`
- **Model/service:** Grok Imagine · version unlogged
- **Prompt/settings:** Incomplete
- **Cost / billing ID:** Not recorded
- **Dimensions / bytes / SHA-256:** 1168×784 · 143964 · `c01398e0…627ea0`
- **Rights:** UNVERIFIED STUDY — production prohibited
- **Disposition:** Rejected intermediate

### `yU1UP.jpg`

- **Path:** `artifacts/imagine_images/yU1UP.jpg`
- **Output ID:** `yU1UP`
- **Model/service:** Grok Imagine (gen) · version unlogged
- **Prompt/settings:** Partial — first landscape Commit Monolith pass
- **Cost / billing ID:** Not recorded
- **Dimensions / bytes / SHA-256:** 1168×784 · 90766 · `bb0fd0c9…0612b6`
- **Rights:** UNVERIFIED STUDY — production prohibited
- **Disposition:** Superseded by `QUeXr` edit; not production

---

## Counts

| Category | Count |
|----------|------:|
| Files under `artifacts/imagine_images/` (images) | 14 |
| Full prompt + model version + cost recovered | 0 |
| Labeled UNVERIFIED STUDY | 14 |
| Approved for production | 0 |
| Rejected / intermediate | 14 (all) |

---

## Contact sheet policy

If a visual contact sheet is needed for human review, produce it as a **private attributed review attachment** outside the public production tree. **Do not** commit copyrighted third-party reference thumbnails or a public “moodboard of masters” into this repository.

---

## STOP alignment

Active approval token remains:

```text
APPROVE_REFERENCE_BOARD
```

No generation, animation, product integration, or production use of these images from this manifest.

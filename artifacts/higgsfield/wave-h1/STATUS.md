# Wave H1 Status — 2026-07-30

## Delivered

| Asset | Source | Path | Status |
|---|---|---|---|
| Hero plate 21:9 | Higgsfield Nano Banana 2 | `public/media/cinematic/hero/hero-plate-21x9.webp` (+ full PNG) | Wired as atmospheric underlay |
| OG 16:9 | Higgsfield Nano Banana 2 | `public/og-image.png` + `public/media/cinematic/hero/og-16x9.webp` | Wired in `__root.tsx` meta |
| Hypervisor loop | Grok Imagine I2V (fallback) | `public/media/cinematic/hypervisor/hypervisor-loop.mp4` | Wired under PinnedCinematic |
| Hypervisor poster | ffmpeg frame | `…/hypervisor-poster.webp` | Poster + reduced-motion fallback |
| Favicon | local SVG | `public/favicon.svg` | Linked in root head |

**Job IDs (Higgsfield stills):**
- Hero: `334b071d-a243-469a-a78c-b8df4b7a240d`
- OG: `b604471c-e256-4207-b435-8e94964c22b1`
- Hypervisor start still upload: `03c57392-6cad-451f-b0bd-5de3917b98fa`

## Blocked — Higgsfield video

Account reports Plus + “unlimited” on Kling 3.0 / Seedance 2.0 / Gemini Omni Flash, but **MCP still rejects video**:

- `use_unlim: true` → `Unlimited generations aren't supported for {model}`
- Without unlim → `free_trial_model_requires_plan` (403)
- Balance observed: **4.15 credits**, plan type `plus`, `unlim.available: false`
- Seedance cost preflight: **17.5 credits** for 5s/720p/fast (above balance)

So unlimited access is **not active on this MCP workspace** for those models yet (web promo may not bind to MCP, or checkout incomplete).

### What to do on your side

1. Confirm Plus/Ultra is fully activated for the **same** Higgsfield workspace MCP is using.
2. Top up credits **or** wait until unlim shows `available: true` for `kling3_0` / `seedance_2_0` / `gemini_omni`.
3. Reply **“retry video”** — we re-run Hypervisor I2V on Seedance 2.0 (preferred) or Kling 3.0 silent 5–6s, then replace the Grok Imagine loop.

## Claim safety

All generated media is **Atmospheric · not evidence**. Underlays sit behind the live SVG Hypervisor instrument; they do not replace claim-safe product chrome.

# Nexus-IQ “Wow” Cinematic Website Production Plan

**Status:** Art-direction and production reset  
**Scope:** Plan, research, asset development, local integration, and verification  
**Not authorized by this document:** paid generation, external uploads, commits, pushes, PRs, deployment, publishing, credentials, or claim changes  
**Supersedes for the prestige hero:** the current `APPROVE_HERO_STILL_1/2/3` request

## Executive decision

Do **not** approve any of the three current stills as the final hero.

They are useful concept studies and materially better than the earlier schematic, but they do not yet meet the requested “one image stops the room” standard. The next step is not animation. It is a focused art-direction sprint that produces a distinctive Nexus-IQ object, a world-scale composition, and several stronger still candidates before any motion credits or integration time are spent.

The recommended production model is:

1. **Codex:** research, creative brief, factual/claim constraints, prompt architecture, independent visual review, acceptance gates, and cross-checking Grok’s evidence.
2. **Grok:** repository inspection, generation-service execution when authorized, asset handling, application integration, automated tests, and browser evidence.
3. **User:** approves only four high-value gates: direction board, hero still, motion master, and final staging experience.
4. **Separation of duties:** the agent/model that generates a candidate cannot be the sole final reviewer of that candidate.

## 1. Audit of Grok’s three stills

### Still 1 — Commit Monolith

**What works**

- Strongest left-side copy void.
- Clearest journey from capsule to threshold.
- Wide composition can support a locked-camera motion test.
- Dark industrial material system is compatible with Nexus-IQ.

**Why it is not final**

- The capsule is too small and passive to carry the hero.
- The empty black field reads as unused space rather than charged negative space.
- The square and diamond feel attached as literal status symbols rather than embodied in the architecture.
- The scene lacks scale cues, atmospheric depth, occlusion, surface complexity, and tension.
- It resembles an early industrial visualization, not a signature brand world.

**Disposition:** retain the rail-to-boundary journey, reject the current object scale and gate design.

### Still 2 — Controlled Threshold

**What works**

- Clean shape grammar.
- Very legible square-versus-diamond distinction.
- Strong poster simplicity.

**Why it is not final**

- The object reads as a pharmaceutical capsule.
- The square and diamond read like oversized control buttons.
- There is no spatial journey, environmental scale, or narrative tension.
- It is visually clean but not category-defining.

**Disposition:** retain the shape grammar as a secondary graphic motif, not the prestige hero composition.

### Still 3 — Evidence Forge

**What works**

- Best material detail, lighting, depth, and photographic presence.
- The machinery creates more tension and physical consequence.
- It has the strongest seed for a genuinely cinematic world.

**Why it is not final**

- The white object reads ambiguously as a dispenser, plastic dome, or pill.
- The machine is generic rather than unmistakably Nexus-IQ.
- The scene does not yet explain the transaction lifecycle or controlled decision.
- The focal silhouette is not ownable enough to become a recurring brand asset.

**Disposition:** retain the macro industrial photography, physical light, and mechanical tension; redesign the evidence object and architecture.

### Correct ranking

| Use | Best current seed |
|---|---|
| Journey and copy composition | Still 1 |
| Material richness and cinema | Still 3 |
| Secondary Commit/Abort motif | Still 2 |

The new direction should combine Still 1’s journey, Still 3’s material realism, and Still 2’s geometric decision language—without copying any of their weak literal forms.

## 2. Audit of the pasted “$50k+” guide

### Keep

- Lock art direction before building the full page.
- Begin with one dominant hero asset.
- Generate and approve a still before generating motion.
- Use a constrained camera and simple subject motion.
- Design the page around the media rather than hiding it with a blanket overlay.
- Use scroll-linked narrative states where they improve comprehension.
- Inspect real screenshots repeatedly.
- Treat mobile, reduced motion, loading, and performance as first-class work.
- Create section transitions and a coherent visual grammar instead of unrelated effects.

### Correct or reject

| Guide claim | Audit |
|---|---|
| The tutorial globe was a procedural Three.js scene | **Incorrect for the supplied tutorial.** The source workflow used a generated still, generated video, and pinned/scroll-linked media. |
| Vite + React + Tailwind + GSAP + Lenis + Three/R3F + Framer Motion are mandatory | **Unsupported.** These tools solve different problems and should be adopted only when the approved direction needs them. |
| More animation libraries produce a more premium result | **False.** Overlapping animation ownership increases lifecycle, synchronization, and accessibility risk. |
| Use GSAP SplitText on every heading | **Reject.** Reserve kinetic type for one or two editorial moments and preserve semantic/readable text. |
| Use a custom cursor everywhere | **Reject as a default.** It does not benefit touch users and can impair clarity or accessibility. |
| Add glassmorphism, purple glows, and generic grain for luxury | **Reject for Nexus-IQ.** These are common AI-template signals and conflict with the brand’s forensic institutional direction. |
| Keep all animations on mobile, only lighter | **Reject.** Mobile needs recomposed scenes and fewer effects, not a scaled-down desktop timeline. |
| The workflow reliably turns 6–8 weeks into 1–3 days or guarantees $8k–$25k pricing | **Unsupported commercial claims.** Do not repeat them. |
| Claude Fable 5 exists and can support long-running agentic coding/vision work | **Verified**, but model capability does not replace art direction or independent acceptance. |
| Higgsfield exposes image/video generation through MCP/CLI | **Verified**, but generation consumes account credits and requires explicit authorization. |

## 3. North-star creative direction

### Working title: The Consequence Chamber

**Purpose:** make the commit-boundary idea emotionally immediate, then resolve it with technical proof.

**Audience:** technical evaluators, institutional partners, researchers, developers, and decision makers evaluating autonomous-system infrastructure.

**Tone:** monumental, precise, calm, consequential, physical, research-grade. Not cyberpunk, fantasy, SaaS glass, luxury purple, or abstract “AI magic.”

**Memorable detail:** a unique evidence vessel crosses a monumental authority boundary, physically divides into Commit and Abort possibilities, then emerges sealed as an inspectable Proof Capsule.

**Emotional progression**

1. Curiosity — what is this object approaching?
2. Tension — why can it not simply pass?
3. Comprehension — the boundary stages, constrains, and validates it.
4. Consequence — Commit and Abort become materially distinct paths.
5. Trust — an evidence object emerges and hands off into the real DemoPlayer.

### Hero composition

- **Camera:** locked or nearly locked; low, architectural, 28–40 mm equivalent.
- **Copy field:** left 38–44%, genuinely quiet but not empty; controlled falloff and subtle depth.
- **Focal world:** center/right; long rail or channel receding into a monumental cross-section.
- **Focal object:** larger and visually ownable—faceted ceramic/evidence material with a dark titanium spine and a narrow institutional-blue seam. It must not look like a pill, egg, soap dispenser, or generic capsule.
- **Boundary:** layered architectural plane with shutters, validation apertures, and a deep interior—not a glowing ring or flat UI wall.
- **Commit/Abort:** expressed as physical route geometry and terminal shape, with color only as reinforcement.
- **Scale cues:** volumetric light, calibrated haze, machining marks, micro-surface roughness, foreground occlusion, distant structure, and one human-scale or instrument-scale cue where appropriate.
- **Lighting:** real motivated light sources, restrained bloom, deep but readable shadow detail.
- **No text inside generated media.** All labels, evidence, and claims remain real DOM/SVG content.

### Visual prohibition list

- Pharmaceutical pills or consumer capsules.
- Soap-dispenser or egg silhouettes.
- Floating square/diamond “buttons.”
- Neon rings, holograms, purple gradients, planets, generic particles, circuit-board filler.
- Border-heavy dashboard cards inside the hero.
- Fake UI, generated text, fake code, fake evidence, logos, watermarks, or signatures.
- Blanket black overlays used to rescue a bad composition.
- Unmotivated camera or object motion.

## 4. Production state machine

```text
AUDIT
→ REFERENCE_BOARD
→ OBJECT_LANGUAGE
→ HERO_STILL_CANDIDATES
→ HERO_STILL_APPROVAL
→ MOTION_TESTS
→ MOTION_MASTER_APPROVAL
→ HERO_INTEGRATION
→ NARRATIVE_INTEGRATION
→ SITE_SYSTEM
→ VISUAL_ACCEPTANCE
→ RELEASE_APPROVAL
```

An approval advances only one state. It never implies paid generation, Git operations, or deployment unless the approval explicitly names that action.

## 5. Phase plan

### Phase 0 — Recoverable baseline

**Owner:** Grok lead  
**Codex role:** independent scope check

- Confirm repository URL, branch, HEAD, dirty state, preview command, and current visual baseline.
- Preserve the recoverable `21d88a5...` state and all existing uncommitted work.
- Create no commit, push, PR, deploy, or external upload.
- Record current screenshots and current asset hashes.
- Preserve the forensic Canvas instrument as a secondary explainer, reduced-motion option, and Demo proof surface.

**Exit:** exact state is documented and recoverable without destructive Git operations.

### Phase 1 — Reference board

**Owner:** Codex art direction  
**Grok role:** repository/brand constraint extraction

Create a board with 12–18 individually sourced references:

- 4–6 monumental industrial/architectural compositions.
- 4–6 high-end material and macro-lighting references.
- 3–4 restrained mechanical motion references.
- 2–3 editorial typography/copy-field references.

For every reference record:

- source URL or local provenance;
- what is being borrowed;
- what must not be copied;
- license/use status;
- relevance to Nexus-IQ’s mechanism.

**Gate:** `APPROVE_REFERENCE_BOARD`

### Phase 2 — Evidence-vessel object language

**Owner:** Codex brief, Grok generation when authorized

Generate an object style sheet before another hero frame:

- front, side, three-quarter, and macro detail;
- silhouette at 160 px;
- open/staged/sealed states;
- porcelain/evidence layer, titanium authority spine, institutional-blue seam;
- no environment and no Commit/Abort symbols yet.

Produce at least three **different silhouettes**, not minor prompt variations.

**Acceptance**

- unmistakable at thumbnail size;
- cannot reasonably be mistaken for a pill, egg, robot, speaker, or dispenser;
- supports open, constrained, and sealed states;
- plausible material behavior;
- repeatable across stills and video.

**Gate:** `APPROVE_OBJECT_LANGUAGE_[ID]`

### Phase 3 — Hero still candidate sprint

**Owner:** Grok generation, Codex independent review

Generate 12 candidates:

- 4 × **Monumental Threshold** — long journey and large architecture.
- 4 × **Forensic Forge** — material intimacy and mechanical consequence.
- 4 × **Impossible Cross-Section** — a cutaway showing paths and evidence transfer.

Use the approved object as a reference input. Do not ask a model to redesign it from prose in every frame.

Each candidate must be:

- 16:9 at the highest economical still resolution;
- created with a left copy field;
- free of generated typography;
- logged with model, prompt, seed/reference, settings, cost, and hash;
- previewed at desktop, mobile crop, and 160 px thumbnail.

### Hero still scoring

Score 0–5. Every category must score at least 4; the first five must average 4.5 or higher.

| Criterion | Question |
|---|---|
| Immediate impact | Does the frame stop attention in under one second? |
| Ownable silhouette | Could this belong only to Nexus-IQ? |
| Depth and scale | Does it feel like a world, not a product render on black? |
| Mechanism truth | Does the scene imply controlled transactional passage? |
| Material credibility | Do light, roughness, contact, and reflections feel physical? |
| Copy-safe composition | Does the real headline remain dominant without a blanket overlay? |
| Motion potential | Can one simple action create an 8–10 second shot? |
| Mobile crop | Does a 390 px composition preserve object, tension, and copy? |
| Anti-slop | Are AI tells, generic prestige signals, and literal UI motifs absent? |
| Reduced-motion poster | Is the still itself a complete experience? |

**Automatic rejection**

- pill/dispenser/egg reading;
- flat floating symbols;
- no perceptible scale;
- text or fake UI in the image;
- broken geometry or material artifacts;
- copy requires >35% blanket darkness to survive;
- generator’s self-review is the only approval evidence.

**Gate:** `APPROVE_HERO_STILL_[ID]`

### Phase 4 — Motion tests before the master

**Owner:** Grok generation, Codex review

Produce three low-cost 4–6 second tests from the approved still:

1. **Approach:** vessel advances; architecture remains fixed.
2. **Constraint:** shutters narrow; seam light changes; minimal particulate response.
3. **Decision/emit:** physical fork or gate state changes; vessel exits sealed.

Keep camera motion absent or extremely subtle. Preserve exact object identity and architecture. A “cinematic camera move” is not a substitute for meaningful state change.

Evaluate:

- first/last-frame fidelity;
- geometry and material consistency;
- focal stability;
- loop or scroll-scrub suitability;
- artifact count;
- mobile crop;
- whether the mechanism remains understandable without labels.

Select the motion model from the tests rather than from marketing rankings.

**Gate:** `APPROVE_MOTION_TEST_[ID]`

### Phase 5 — Motion master and post-production

Produce one 8–10 second master plus a static poster:

- 16:9 master; preserve a mobile-safe focal channel.
- Slow physical action with a locked camera.
- No embedded labels, claims, evidence, or UI.
- Grade to Nexus tokens after generation rather than over-prompting every color.
- Remove or regenerate identity drift, crawling surfaces, warped rails, and impossible reflections.
- Export a visually lossless archival master and delivery variants.

Delivery package:

- poster AVIF/WebP;
- MP4 H.264 fallback;
- WebM/modern codec only if measured benefit justifies it;
- dimensions, duration, frame rate, bitrate, bytes, hash, provenance, crop notes;
- first-frame and reduced-motion stills.

**Gate:** `APPROVE_MOTION_MASTER`

### Phase 6 — Hero integration

**Owner:** Grok implementation  
**Codex role:** design/acceptance review

- Integrate into the existing application; do not scaffold or replace the router.
- Use semantic DOM for all copy and controls.
- Use the poster as a first-class visual, not merely an error fallback.
- Keep the media fill unobstructed; solve contrast through composition and a local text plane/scrim only where needed.
- Preserve the locked hero premise and qualifiers.
- Reserve layout space before media loads to prevent shift.
- Provide a complete reduced-motion composition with the approved still.
- Do not autoplay a video that is simultaneously controlled by scroll position.

### Phase 7 — Scroll narrative

Use the smallest sufficient runtime:

1. Start with native scroll, sticky positioning, and measured media-time mapping.
2. Adopt GSAP ScrollTrigger only if multi-state pin/scrub/reverse behavior is materially more reliable than the native implementation.
3. Add Lenis only after a browser feel test proves native scrolling fails. Test anchors, keyboard, touch, history restoration, nested scroll, sticky behavior, teardown, and reduced motion.
4. Use Motion only for component/layout state choreography that does not overlap GSAP’s timeline.
5. Do not use Three.js/R3F for a pre-rendered hero. Reserve it for a later interactive proof object that truly needs spatial interaction.

Map one continuous shot to:

```text
Intent: vessel approaches
Gap: boundary closes and reveals missing controls
Stage: vessel enters the chamber
Constrain: authority narrows
Validate: measured checks resolve
Decide: Commit and Abort routes become physically distinct
Emit: sealed evidence vessel exits
```

### Phase 8 — Demo handoff

- The cinematic media ends before the DemoPlayer becomes the proof surface.
- Carry the vessel silhouette, seam, and route geometry into real DOM/SVG chrome.
- Keep the DemoPlayer interactive; never replace it with generated video.
- Explicitly label cinematic imagery as atmospheric, not evidence.
- Resolve the hero’s curiosity loop by showing the real Commit/Abort behavior and evidence object.

### Phase 9 — Full-site visual system

Only after the hero and handoff pass:

- derive reusable transition grammar, object crops, material surfaces, and motion timing;
- apply it to selected routes, not every component;
- use the Canvas cross-section as a technical explainer;
- preserve dense institutional research, evidence links, limitations, and maturity;
- avoid repeating the same giant media block or reveal animation down the page;
- create one or two additional assets only where they advance a distinct concept.

### Phase 10 — Functional and visual acceptance

**Browser matrix**

- Desktop: 1280×800, 1440×900, 1920×1080.
- Mobile: 390×844, 430×932.
- At least one mid-range mobile/desktop performance profile.
- Reduced motion, reduced data where practical, keyboard-only, and no-video fallback.

**Required gates**

- Hero reads in one second and remains legible at 160 px.
- No rail, navigation, copy, CTA, or Demo collision.
- Mobile receives a recomposed crop/timeline, not a scaled desktop scene.
- Commit and Abort are distinguishable by geometry and position, not color alone.
- Inactive narrative content is inert and hidden from assistive technology.
- No continuous offscreen animation loop.
- No console errors, failed media requests, horizontal overflow, or layout shift from media.
- Demo Commit and Abort controls change real state.
- Claims, maturity, qualifiers, and limitations remain intact.
- Core Web Vitals field targets: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1 at the 75th percentile; lab evidence is provisional until field data exists.
- Typecheck, lint, safe production build, and deterministic visual QA pass.

**Gate:** `APPROVE_VISUAL_ACCEPTANCE`

### Phase 11 — Release

Only after a separate authorization naming repository, branch, and allowed action:

- commit;
- push;
- open PR;
- review checks;
- merge;
- deploy;
- run post-deploy route, media, interaction, performance, and console verification.

**Gate:** `APPROVE_RELEASE_[EXACT_ACTION]`

## 6. Codex/Grok operating contract

### Codex

- Maintains this plan and the objective rubric.
- Produces the reference and object-language briefs.
- May generate independent still studies using an available image-generation tool when the user authorizes generation.
- Reviews the actual image/video pixels, not filenames or agent prose.
- Audits every acceptance report against attached evidence.
- Reviews claims, provenance, accessibility, performance, and final browser evidence.
- Does not approve a Grok-generated asset solely from Grok’s self-assessment.

### Grok

- Owns the live repository state and exact integration map.
- Uses an authorized generation service only within the named spend/data boundary.
- Preserves prompts, settings, costs, model/version, output IDs, hashes, and transformations.
- Implements against the existing architecture.
- Runs automated QA and supplies exact screenshots/logs.
- Stops at the current state gate and never treats visual approval as Git/deploy approval.

### User

The user is asked to intervene only at:

1. `APPROVE_REFERENCE_BOARD`
2. `APPROVE_HERO_STILL_[ID]`
3. `APPROVE_MOTION_MASTER`
4. `APPROVE_VISUAL_ACCEPTANCE`

Paid generation and external release always require their own explicit authorization.

## 7. Asset economy

To prevent credit burn:

1. Generate object silhouettes before environments.
2. Generate 12 stills, not dozens of untracked variants.
3. Shortlist three using the objective rubric.
4. Generate only three short motion tests.
5. Produce one master after a motion test passes.
6. Regenerate only for named defects.

Every regeneration request must state:

- defect observed;
- evidence frame;
- what remains locked;
- exact requested change;
- acceptance test.

“Make it more premium/cinematic” is not an actionable regeneration instruction.

## 8. Research and verification record

The following current primary sources support the technical corrections in this plan:

- [Anthropic — Claude Fable 5](https://www.anthropic.com/claude/fable): confirms current availability, agentic/coding/vision positioning, and pricing; it does not guarantee visual quality.
- [Higgsfield MCP](https://higgsfield.ai/mcp): confirms MCP/CLI image and video generation, supported model access, output limits, and credit-based billing.
- [Luma video generation documentation](https://docs.lumalabs.ai/docs/video-generation): confirms keyframe, aspect-ratio, loop, and camera-motion controls for authorized tests.
- [GSAP ScrollTrigger documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger/): supports pin, scrub, responsive matching, and scroll-timeline behavior.
- [Lenis documentation](https://github.com/darkroomengineering/lenis): confirms native-scroll integration and the additional ticker/synchronization work required with ScrollTrigger.
- [React Three Fiber performance guidance](https://r3f.docs.pmnd.rs/advanced/scaling-performance): supports demand rendering and measured performance adaptation when real-time 3D is genuinely required.
- [web.dev video performance](https://web.dev/learn/performance/video-performance): supports poster/preload choices and treating video as a potential LCP surface.
- [web.dev Core Web Vitals](https://web.dev/articles/vitals): current LCP, INP, and CLS targets.
- [W3C technique C39](https://www.w3.org/WAI/WCAG22/Techniques/css/C39): supports suppressing nonessential motion for `prefers-reduced-motion`.

## 9. Immediate next action

Do not send any of the old `APPROVE_HERO_STILL_1/2/3` tokens.

Send Grok the companion `GROK_WOW_PRODUCTION_SPRINT_PROMPT.md`. Its first task is a reference board and evidence-vessel object-language sprint. It must not animate, integrate, commit, or spend credits until the relevant authorization is explicit.


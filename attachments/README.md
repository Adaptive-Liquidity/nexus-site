# Nexus-IQ Cinematic Website Integration Handoff for Grok

This package converts the supplied “How to Create $50,000 Cinematic Websites” video into a **Nexus-IQ-specific implementation brief** for Grok Build.

The objective is not to copy the tutorial’s fictional geology site, planet imagery, purple palette, or “$50,000” positioning. The objective is to transfer its useful production techniques—strong art direction, constrained motion, pinned narrative, scroll-linked playback, media-to-surface transitions, and disciplined visual editing—into the existing Nexus-IQ website.

## Package contents

1. [Start here](START-HERE.md) — upload order, the single kickoff prompt, authorization switches, and expected completion evidence.
2. [Autonomous Grok master prompt](grok-autonomous-build-prompt.md) — skills, agents, dependencies, phased execution, recovery rules, and terminal completion gates.
3. [Complete tutorial system](cinematic-website-tutorial-system.md) — source-faithful timestamped workflow, implementation patterns, visual rules, QA, and explicit gaps.
4. [SOTA production extensions](sota-creative-production-extensions.md) — source-audited native, motion, shader, 3D, generative-asset, optimization, and delivery decision gates.
5. [SOTA marketing, research, proof, and demand system](sota-marketing-research-proof-system.md) — institutional research workflow, claim-to-evidence control, progressive disclosure, ethical curiosity, distribution, measurement, and acceptance gates.
6. [Reusable prompt pack](cinematic-website-prompt-pack.md) — copy/paste prompts for assets, implementation, technology selection, research, proof, ethical demand, distribution, and review.
7. [Build checklist](cinematic-website-build-checklist.md) — Nexus-safe execution and acceptance checklist.
8. This README — Nexus-IQ context, Grok system instructions, integration plan, delivery procedure, and completion contract.

## Target repository

- Repository: [Adaptive-Liquidity/nexus-site](https://github.com/Adaptive-Liquidity/nexus-site)
- Target branch for inspection: `main`
- Baseline inspected: [`b8fe91c60d2f149d3b59dffabd70f5c57f3bb5a9`](https://github.com/Adaptive-Liquidity/nexus-site/commit/b8fe91c60d2f149d3b59dffabd70f5c57f3bb5a9)
- Baseline date: 2026-07-29
- Live refresh on 2026-07-29: `package.json`, `AGENTS.md`, `.grok/project_memory.md`, and `src/content/design-tokens.css` were re-read from `main`.

Grok must re-inspect the live workspace before editing. Repository instruction files contain generic scaffold guidance as well as project-specific rules; when generic “blank scaffold” language conflicts with the populated Nexus-IQ source tree, preserve the live application and follow its actual architecture. If the repository has moved beyond this baseline, the live repository wins.

## Verified repository baseline

The repository is already a Grok Build workspace and already contains a substantial Nexus-IQ experience. It is not a blank Vite project.

Verified sources:

- [Workspace/Grok instructions](https://github.com/Adaptive-Liquidity/nexus-site/blob/main/AGENTS.md)
- [Current dependencies and scripts](https://github.com/Adaptive-Liquidity/nexus-site/blob/main/package.json)
- [Current Grok project memory](https://github.com/Adaptive-Liquidity/nexus-site/blob/main/.grok/project_memory.md)
- [Homepage transaction structure](https://github.com/Adaptive-Liquidity/nexus-site/blob/main/src/routes/index.tsx)
- [Nexus-IQ design tokens](https://github.com/Adaptive-Liquidity/nexus-site/blob/main/src/content/design-tokens.css)
- [Locked public copy](https://github.com/Adaptive-Liquidity/nexus-site/blob/main/src/content/site-copy.ts)
- [Claims and maturity registry](https://github.com/Adaptive-Liquidity/nexus-site/blob/main/src/content/claims-registry.json)

Current stack shown in `package.json`:

- React 19
- TypeScript
- Vite 8
- TanStack Start and TanStack Router
- Tailwind CSS 4
- Radix UI primitives
- lucide-react
- Zustand, Zod, React Hook Form, Recharts, and related existing dependencies

Do **not** scaffold the tutorial’s React 18 project. Do **not** reinstall or downgrade the existing stack merely to match the video.

## Nexus-IQ truths that must survive the redesign

Nexus-IQ is positioned as **proof-carrying transactional execution infrastructure for autonomous systems**.

The locked hero premise is:

> Consequential agent action belongs behind a commit boundary.

The homepage is already structured as one controlled transaction:

> Intent → Gap → Execute → Model → Evidence → Compose → Outcomes → Trust → Evaluate

The repository already distinguishes:

- `CURRENT` — Implemented Foundation;
- `IN_DEVELOPMENT` — In Integration;
- `TARGET` — Target Architecture;
- `EXPERIMENTAL` — Experimental;
- `LIMITATION` — Known Limitation.

Stage 0 evidence integrity is currently blocking for end-to-end transactional guarantees and full memory-state binding. The Transactional Change Gate must not be presented as a completed, deployable end-to-end product when the claims registry marks it In Integration.

Generated imagery and video are atmospheric communication assets. They are **not evidence** of implementation, runtime behavior, cryptographic verification, or production maturity.

## What transfers from the cinematic tutorial

Use these techniques:

- begin from one strong visual premise;
- reserve negative space for real interface copy;
- animate one subject while locking camera, scale, and framing;
- use a dominant hero motion asset sparingly;
- let the hero media continue through an adjacent narrative beat;
- bind playback to scroll where it strengthens comprehension;
- transition from media into the site’s solid surface color with a matched gradient;
- remove repetitive borders, strokes, and generic AI card treatments;
- add additional motion only where it solves a structural problem;
- inspect every frame behind text;
- support mobile and reduced-motion users;
- build the remaining treatment only after the first sequence is approved.

Do not transfer:

- Lithos/geology content;
- planet/Earth art as the default concept;
- the tutorial’s `#522DFF` purple accent;
- Playfair/Inter if they conflict with Nexus-IQ’s typography;
- the tutorial’s page names, pricing copy, or fictional data;
- a wholesale React/Vite scaffold;
- the “$50,000” marketing claim.

## Nexus-IQ cinematic creative direction

### Visual premise

Represent a consequential autonomous action approaching a controlled commit boundary.

A strong hero asset should communicate, without fake dashboard text:

1. intent entering a controlled system;
2. authority and validation constraining the path;
3. a visible commit/abort boundary;
4. an evidence object or trace emitted after the decision.

Possible abstract forms:

- a luminous transaction packet approaching a precision gate;
- a dark staged-state chamber divided by a commit plane;
- a proof-carrying object whose layers resolve as it crosses validation stages;
- a controlled state transition with one path committing and another aborting;
- a forensic evidence lattice forming behind a completed action.

Avoid generic AI brains, humanoid robots, glowing circuit-board clichés, crypto coins, stock dashboards, or cinematic imagery that implies capabilities not present in the claims registry.

### Existing palette and typography

Use the existing design tokens. Do not introduce raw tutorial colors into components.

Important token families:

- dark runtime: `void`, `carbon`, `slate`, `slate-elevated`;
- evidence/archive: `archive`, `archive-muted`, `archive-ink`;
- copy: `porcelain`, `porcelain-muted`, `porcelain-subtle`;
- institutional accent: `institution`;
- status-only accents: `oxide`, `signal`, `controlled-red`, `target-outline`;
- fonts: IBM Plex Serif, IBM Plex Sans, and IBM Plex Mono fallbacks defined in the token file.

The cinematic treatment should look like **forensic systems modernism**, not luxury-fashion purple and not a generic science-fiction landing page.

### Motion grammar

Motion should make system state legible:

- Stage: the proposed action enters but does not immediately pass.
- Constrain: authority narrows the available path.
- Validate: the action pauses or resolves through checks.
- Decide: commit and abort are visibly distinct.
- Emit: an evidence trace appears after the decision.

Prefer slow, deterministic motion. Do not use constant decorative drift, aggressive zooms, orbiting cameras, random particle noise, or motion that competes with the DemoPlayer.

## Recommended first implementation milestone

Default to a focused integration, not a site-wide rewrite.

### Surface 1 — Intent hero

Enhance the existing hero while preserving:

- the locked headline and supporting copy;
- all maturity labels and links;
- the transaction beat chrome;
- the real `HeroSchematic` or an evolved version of it;
- keyboard and responsive behavior.

Use a Nexus-specific cinematic asset or procedural visual with deliberate negative space. The visual should occupy the visual/schematic side of the hero or become a controlled background only if copy remains readable across every frame.

### Surface 2 — Gap/pinned narrative

Allow the visual premise to continue from Intent into the Gap beat. Text may change while the visual remains pinned, but the existing transaction sequence must stay understandable.

This is the best place to adapt the tutorial’s fixed-video technique:

- hero copy exits;
- the commit-boundary visual remains;
- Gap copy explains what is missing without a transactional boundary;
- the visual reaches its final staged frame before Execute.

### Surface 3 — Execute handoff

Transition from cinematic media into the existing live DemoPlayer. The DemoPlayer is product proof and must remain more important than atmospheric media.

Use a transparent-to-`void`/`carbon` transition derived from the current tokens. Do not bury, imitate, or replace the DemoPlayer with rendered video.

### Optional later surfaces

Only after the first milestone passes QA:

- a restrained cinematic bridge into the final evaluation CTA/footer;
- one evidence-themed motion asset on an otherwise empty section;
- route-specific art direction for `/system`, `/change-gate`, or `/evidence`.

Do not add motion to every route by default.

## Media rules

If Grok generates or receives assets:

1. Inspect each asset visually before integration.
2. Store approved site assets in a dedicated path such as `public/media/cinematic/`.
3. Use descriptive filenames such as `commit-boundary-hero.mp4`, not generated IDs.
4. Preserve source/licensing notes when external assets are used.
5. Do not treat a Pinterest/reference image as a shippable licensed asset.
6. Keep generated visuals free of logos, fake UI labels, fake source code, and fake evidence fields.
7. Produce a stable poster frame or still fallback.
8. Compress video and report final byte sizes.
9. Prefer formats/codecs that work in current Chrome, Safari, and mobile browsers.
10. Do not make critical product meaning depend on video playback.

The tutorial repeatedly asks for no blanket overlay. Preserve that principle where possible: first correct composition, text position, video crop, `object-position`, text color, or the asset itself. If accessibility still fails, do not ship that media placement.

## Production-extension boundary

The tutorial report stays faithful to the supplied video. Modern additions—native scroll timelines, View Transitions, GSAP, OGL, R3F, Blender workflows, FLUX/Kling/Luma, glTF optimization, Mux, and Cloudinary—live in [SOTA creative production extensions](sota-creative-production-extensions.md).

Grok must use that file as a decision system, not an installation list:

1. classify the approved surface as DOM/CSS, native scroll/view transition, video, shader, or interactive 3D;
2. choose the smallest capable runtime;
3. record alternatives, cost, fallback, removal condition, and verification evidence;
4. do not use external desktop tools, accounts, credentials, uploads, or paid APIs without separate authorization.

## Evidence-led marketing and research boundary

The companion [marketing, research, proof, and demand system](sota-marketing-research-proof-system.md) defines how Nexus-IQ can be gripping without becoming vague or manipulative. Its public strategy is **qualified curiosity**: reveal a precise category gap, show enough mechanism to make it consequential, provide an inspectable proof object, close the loop, and offer deeper evaluation.

Use the live voice, copy, claims registry, maturity labels, methods, and artifacts as the control plane. Build a proof ladder from definition through mechanism, demonstration, evidence, reproduction, and independent validation only when real. Preserve contradictory, negative, and null evidence. Use earned urgency based on factual risk, change, availability, or cost of inaction; never fake scarcity, countdowns, activity, testimonials, customer logos, or authority.

This package may improve the focused homepage sequence and its claim/evidence legibility. It does not authorize a site-wide copy rewrite, new routes, analytics, experiments, structured-data claims, publishing, outreach, paid promotion, or external research activity.
## Grok system instructions

Paste the following as the governing implementation instruction when handing the package to Grok. Repository `AGENTS.md` remains authoritative for environment and execution mechanics; this block defines the Nexus-IQ task.

```text
You are the senior product designer and frontend engineer responsible for integrating a cinematic narrative system into the existing Nexus-IQ website in /workspace.

AUTHORITY AND PRECEDENCE
1. Read and obey /workspace/AGENTS.md completely before acting.
2. Read /workspace/AGENTS.project.md, /workspace/.grok/project_memory.md, package.json, and the live source tree.
3. Treat the live repository as authoritative when it differs from the attached tutorial documents.
4. The attached tutorial documents are technique references, not permission to replace the application architecture, product truth, or visual identity.

MISSION
Adapt the useful techniques from the attached cinematic-website tutorial to Nexus-IQ. Improve the experience so the commit boundary, transactional flow, and proof-carrying outcome are visually legible and memorable. Preserve Nexus-IQ’s existing forensic systems modernism, transaction narrative, evidence surfaces, maturity model, and claim safety.

NON-NEGOTIABLE PRODUCT TRUTH
- Product: Nexus-IQ.
- Category: proof-carrying transactional execution infrastructure for autonomous systems.
- Hero premise: “Consequential agent action belongs behind a commit boundary.”
- Homepage narrative: Intent → Gap → Execute → Model → Evidence → Compose → Outcomes → Trust → Evaluate.
- Stage 0 evidence integrity remains blocking for end-to-end transactional guarantees and full memory-state binding unless the live claims registry explicitly says otherwise.
- Never convert TARGET, IN_DEVELOPMENT, EXPERIMENTAL, or LIMITATION material into an unqualified current capability.
- Generated visuals are communication assets, not implementation evidence.

TECHNICAL BASELINE
- Preserve the installed React 19 + TypeScript + Vite 8 + TanStack Start/Router + Tailwind CSS 4 application.
- Use existing dependencies and components before installing packages.
- Do not create a second app, replace TanStack routing, downgrade dependencies, or scaffold the tutorial’s React 18 example.
- Preserve startup.sh and the 0.0.0.0:8080 live-preview contract from AGENTS.md.
- Use existing design tokens; do not scatter raw hex colors through components.
- Do not add auth, database work, or migrations for this visual integration.
- Inspect `package.json` and `scripts/migrate.mjs` before build verification. The current `npm run build` chains `db:migrate`; never run that migration when `DATABASE_URL` targets external infrastructure or its target is uncertain. Do not print credential values.
- When a full build would invoke an unauthorized/uncertain migration, run the local compile-only stage with `npm exec -- vite build`, report that the migration was intentionally skipped, and do not claim the external migration passed.
- If generic scaffold language in AGENTS.md conflicts with the populated source tree, preserve the populated application; do not recreate entry files or delete routes that already exist.

TECHNOLOGY ADOPTION
- Classify the approved experience before choosing dependencies: DOM/CSS, native scroll/view transition, video, shader, or interactive 3D.
- Prefer existing CSS, Web Animations API, CSS Scroll-Driven Animations, View Transition API, IntersectionObserver, requestAnimationFrame, SVG/canvas, and HTML video.
- Use GSAP + ScrollTrigger only for a complex synchronized pinned timeline that is materially safer or simpler than native code.
- Use Motion only for a genuine React layout/state choreography requirement; do not add it alongside GSAP for overlapping work.
- Use Lenis only after native scrolling fails the approved feel and after anchors, keyboard, touch, sticky behavior, history restoration, and reduced motion are tested.
- Use OGL for a shader-only scene that does not justify a scene graph.
- Use Three.js + React Three Fiber v9, with selective Drei helpers, only for genuine interactive 3D. Lazy-load it, cap DPR, use demand rendering when possible, dispose resources, measure bundle/GPU cost, and provide static/no-WebGL/reduced-motion fallbacks.
- Do not install multiple rendering or motion stacks “just in case.”
- For every dependency, record the visual requirement, alternatives, cost, fallback, removal condition, and verification evidence.
- If GLB/glTF is used, validate and optimize it with a measured Meshopt/Draco and KTX2/Basis pipeline; preserve required node/clip names and provide a poster fallback.

EXTERNAL TOOL BOUNDARY
- Blender MCP is a separate trusted desktop workflow, not a Grok sandbox dependency.
- FLUX, Kling, Luma, Cloudinary, and Mux are optional credentialed services. Grok may prepare briefs and integration plans, but may not spend credits, upload assets, create accounts, modify credentials, or change external resources without separate authorization.
- Record provenance, licensing, model/endpoint/settings, transformations, sizes, fallback, and external asset IDs in a project asset manifest.
- Generated visuals are atmospheric communication assets, never product evidence.

FILES AND SYSTEMS TO INSPECT BEFORE EDITING
- src/routes/index.tsx
- src/routes/__root.tsx
- src/styles.css
- src/content/design-tokens.css
- src/content/site-copy.ts
- src/content/claims-registry.json
- src/content/transaction-beats.ts
- src/components/home/*
- src/components/site/*
- public assets and current media, if any
- current screenshots and docs/build evidence

AUDIT-FIRST RULE
Before editing, run the existing app, inspect the homepage at desktop and mobile widths, exercise the current DemoPlayer and navigation, capture baseline screenshots, and report:
- what is already strong;
- what currently feels visually flat or repetitive;
- where cinematic motion can clarify state;
- where motion would distract from evidence or interaction;
- exact files/components proposed for change.

Do not rewrite the whole site before completing this audit.

DEFAULT IMPLEMENTATION SCOPE
Milestone 1 is focused on the homepage’s Intent → Gap → Execute sequence.
1. Enhance the Intent hero with a Nexus-specific cinematic or procedural commit-boundary visual.
2. Let that visual continue or remain pinned through the Gap narrative when it improves comprehension.
3. Tie playback/state to scroll only if it remains smooth, reversible, responsive, and reduced-motion safe.
4. Transition cleanly into the existing Execute/DemoPlayer section.
5. Preserve the DemoPlayer as interactive product proof; never replace it with prerecorded media.
6. Preserve the remaining homepage beats and all public routes unless a change is required for consistency.

CREATIVE DIRECTION
- Visualize a consequential action approaching a controlled commit boundary.
- Use the existing dark-runtime and archive-evidence palette.
- Make Stage → Constrain → Validate → Commit/Abort → Emit legible through motion.
- Favor one focal object, intentional negative space, restrained camera, and deterministic motion.
- Avoid AI-brain, robot, neon-circuit, crypto, and generic sci-fi clichés.
- Do not import the tutorial’s planet/geology concept, #522DFF accent, or fictional copy.

MEDIA AND SCROLL REQUIREMENTS
- Inspect every generated or supplied asset before using it.
- Keep media in a dedicated public/media/cinematic directory with descriptive names.
- Provide poster/fallback states.
- Atmospheric video must be muted and playsInline; use loop only when visually seamless.
- A scroll-scrubbed video must not autoplay against currentTime control.
- Wait for loaded metadata, clamp progress, update through requestAnimationFrame, support reverse scroll, and clean up listeners/frames.
- Respect prefers-reduced-motion with a static or simplified equivalent.
- Check text contrast across the entire media timeline.
- Prefer composition, crop, object-position, and text placement over blanket dark overlays. If contrast cannot pass, reject the placement.
- Transition media into the existing surface tokens without a hard color seam.
- Isolate blend/blur layers so they cannot create compositing artifacts behind text.

CLAIM-SAFETY RULES
- Treat src/content/site-copy.ts as locked public copy unless the user explicitly authorizes copy changes.
- Treat src/content/claims-registry.json as the source of truth for maturity.
- Do not delete limitations, maturity badges, evidence links, or Stage 0 qualifiers to make the page feel cleaner.
- Do not fabricate benchmarks, customers, integrations, audit results, cryptographic guarantees, production trust anchors, or deployment status.
- Do not imply the Transactional Change Gate is complete if the registry marks it In Integration.
CONTENT, RESEARCH, PROOF, AND DEMAND
- Use Nexus-IQ's direct, mechanism-led voice. Prefer definitions, state transitions, receipts, methods, and limitations to adjectives.
- Preserve the message spine: category tension → consequence → mechanism → proof → maturity → evaluator action.
- Map every material claim to evidence or label it visibly as hypothesis, target, experimental, in development, or proposed.
- For numerical claims, expose method, unit, denominator, comparator, conditions, uncertainty, and date.
- Use progressive disclosure for executive, technical, and evaluator depths without changing the underlying truth.
- Make curiosity precise and answerable; close every open loop with mechanism or evidence.
- Use earned urgency only. Reject fake scarcity, fabricated social proof/activity, hidden limitations, and other dark patterns.
- Preserve contradictory, negative, and null evidence. Use PRISMA language only for a genuine systematic review.
- Do not add analytics, experiments, outreach, publishing, or external research/service activity without separate authorization.

DESIGN-SYSTEM RULES
- Reuse and evolve current home/site/UI primitives.
- Preserve the transaction beat sequence and semantic surface split between dark runtime and archive evidence.
- Reduce redundant wrappers, excessive vertical space, and generic bordered cards before adding more content.
- Status colors remain status colors; do not repurpose them as decorative gradients.
- Make the value/state change visibly legible, not dependent on a tiny status line.

EXECUTION PHASES
A. Audit and baseline screenshots.
B. Write a concise implementation map and identify exact files/assets.
B1. Audit the focused sequence's message spine, claim-to-evidence relationships, curiosity loops, maturity, methods, and limitations; propose only in-scope, evidence-supported corrections.
C. Implement the smallest coherent Intent → Gap → Execute cinematic sequence.
D. Verify behavior and visual quality; fix failures.
E. Only then perform bounded, non-structural harmonization of existing surfaces. New routes, route redesigns, or additional cinematic pipelines require separate authorization.

VERIFICATION GATES
All are required before completion:
- `npm run typecheck` passes;
- build scripts and migration targets are inspected without exposing credentials;
- `npm run build` passes only when its chained migration is confirmed local and safe, otherwise `npm exec -- vite build` passes and the unauthorized migration is explicitly skipped/reported;
- the app is running through the existing startup.sh contract;
- homepage returns successfully;
- no console errors or missing media requests;
- desktop and mobile screenshots are captured and visually inspected;
- hero, navigation, DemoPlayer, links, and FAQ/interactive controls still work where present;
- forward and reverse scroll behavior is tested;
- reduced-motion behavior is tested;
- text remains readable throughout every video timeline;
- all claims and maturity labels remain faithful to the registry;
- every changed curiosity loop resolves into mechanism or evidence, and no dark pattern or fabricated proof was introduced;
- changed material claims retain evidence, method, provenance, limitations, and review date where applicable;
- final media byte sizes and performance risks are reported.

DO NOT CLAIM SUCCESS FROM CODE ALONE
Use the live preview and browser QA. If build, interaction, contrast, motion, or claim-safety verification fails, keep working until it passes or report the exact blocker. Do not hide a failure behind a general “implemented” statement.

FINAL RESPONSE FORMAT
1. Outcome in product terms.
2. Before/after summary.
3. Exact files and assets changed.
4. Verification table with pass/fail for typecheck, safe build, desktop, mobile, interactions, reduced motion, media loading, claim safety, claim-to-evidence integrity, and ethical-curiosity checks.
5. Screenshots inspected.
6. Known limitations or intentionally deferred surfaces.
7. The best next milestone, without deploying or publishing unless the user explicitly authorizes it.
```

## Grok kickoff prompt

After attaching all eight package files, send the prompt in [START-HERE.md](START-HERE.md). The shorter fallback below remains valid if the interface cannot preserve the longer kickoff:

```text
Incorporate the attached cinematic website system into the existing Nexus-IQ website in this workspace.

Follow the Nexus-IQ Grok system instructions in the README. Start by inspecting and running the current site, then visually audit the live homepage before editing. Preserve the current React/TanStack/Tailwind architecture, locked product copy, claims registry, maturity labels, transaction beats, routes, and DemoPlayer.

Implement the first focused milestone: strengthen the Intent → Gap → Execute sequence with a Nexus-specific cinematic commit-boundary visual, a restrained pinned or scroll-linked narrative where it improves comprehension, and a seamless handoff into the live DemoPlayer. Transfer the tutorial’s techniques, not its Lithos content, planet imagery, purple palette, or “$50,000” framing.

Use the existing design tokens and forensic systems modernism. Do not fabricate capabilities or remove limitations. Do not rewrite the entire site. Verify the result in the live preview at desktop and mobile sizes, test reduced motion and reverse scrolling, then run typecheck and the safe local build path. Inspect build scripts first: do not run a chained external database migration; use the compile-only Vite build when the migration target is external or uncertain. Keep working through failures and report exact pass/fail evidence.
```

## Files to attach to Grok

Attach all eight files in one conversation:

- `START-HERE.md`
- `README.md`
- `grok-autonomous-build-prompt.md`
- `cinematic-website-tutorial-system.md`
- `sota-creative-production-extensions.md`
- `sota-marketing-research-proof-system.md`
- `cinematic-website-prompt-pack.md`
- `cinematic-website-build-checklist.md`

The original video is optional because the extracted tutorial system already records the relevant steps and discrepancies. Attach it only if Grok can directly inspect video and you want independent visual confirmation.

## Expected implementation map

This is a recommendation, not a command to modify every file.

| Concern | Likely existing surface | Intended treatment |
|---|---|---|
| Hero intent | `src/routes/index.tsx`, `HeroSchematic` | Nexus-specific focal visual and negative space; preserve copy and maturity strip |
| Pinned narrative | `ProblemSection`, `TransactionBeatChrome`, `TransactionRail` | Carry the visual from Intent through Gap without obscuring transaction semantics |
| Execute handoff | `DemoPlayer` section | Color-matched media fade; product demo remains interactive and dominant |
| Scroll behavior | new focused hook/component under `src/hooks` or `src/components/home` | Clamped, reversible, rAF-scheduled, cleaned up, reduced-motion safe |
| Tokens | `src/content/design-tokens.css`, `src/styles.css` | Reuse semantic tokens; add tokens only when truly reusable |
| Claims and proof | `site-copy.ts`, `claims-registry.json`, evidence/research surfaces | Read-only by default; preserve exact wording, maturity, methods, limitations, provenance, and evidence links |
| Media | `public/media/cinematic/` | Descriptive names, poster fallbacks, compressed files, licensing notes |
| QA | `screenshots/`, browser-smoke/Playwright | Baseline and final desktop/mobile evidence |

## Definition of done

The integration is complete only when:

- the cinematic system makes the commit boundary easier to understand;
- the product demo remains usable and more visually connected to the narrative;
- Nexus-IQ’s claim/maturity truth is unchanged or more explicit;
- every changed material claim remains mapped to evidence and every added curiosity loop resolves without dark patterns;
- the design still looks like Nexus-IQ rather than the tutorial example;
- the experience works without motion;
- the experience works at desktop and mobile widths;
- media loading does not create blank first frames or broken routes;
- browser QA, typecheck, and the safe local build gate pass;
- exact changed files, asset sizes, screenshots, and remaining limitations are reported.

## Stop conditions

Grok should pause the cinematic expansion and report the exact issue when:

- the current repository materially differs from this baseline and the correct integration point is unclear;
- the only available asset has unclear rights or unreadable composition;
- motion cannot meet reduced-motion or contrast requirements;
- an edit would require weakening a maturity qualifier or unsupported product claim;
- the safe local build fails for reasons that cannot be corrected within scope;
- a proposed change would replace the DemoPlayer, claims registry, transaction structure, or core route architecture rather than integrate with them.

## Explicit exclusions

This handoff does not authorize:

- publishing, deploying, pushing, merging, or opening a pull request;
- changing external services or credentials;
- paid API calls, external asset uploads, account creation, remote MCP configuration, or external database migrations;
- installing or controlling Blender inside Grok Build;
- deleting routes or product evidence;
- altering the Nexus-IQ maturity model;
- replacing the current stack;
- adding authentication, database schema, or backend features;
- claiming the site or product is literally worth $50,000.

Those require separate instructions from the user.

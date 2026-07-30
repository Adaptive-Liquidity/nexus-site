# Nexus-IQ Product-Native Visual Systems Blueprint

**Decision:** Treat Nexus-IQ as an interactive scientific instrument and evidence system—not as a cinematic world, a humanoid intelligence, or an ornamental 3D product render. The product itself is the spectacle.

Prepared from a route-by-route review of the public `Adaptive-Liquidity/nexus-site` repository at remote commit `2ae7cf198f26449f71b4a916268dd32c40739ed3` on branch `fix/cinematic-hero-scene`, plus the public copy, claims registry, components, and current application structure available on July 29, 2026.

> Audit limitation: the supplied Grok sandbox preview redirected to an authenticated preview gateway, so its rendered pages could not be inspected directly. The source repository, current route definitions, section components, design tokens, claims registry, screenshots available through the repository workflow, and existing test/QA surfaces were reviewed instead. A browser-baseline pass against the authenticated preview remains a final verification step—not a blocker to the visual-system design.

---

## 1. What the website should visually become

Nexus-IQ should look like a **living control substrate for consequential autonomy**:

- **Cognitive** because memory, intent, policy, state, validation, and evidence are coordinated as one coherent mechanism.
- **Hypervisor-like** because the system interposes between autonomous intent and real effects, isolates execution, attenuates authority, and controls commitment.
- **Sovereign** because no model output, tool request, recalled memory, or runtime assertion can silently grant itself authority.
- **Sentient-seeming** as an artistic metaphor because the interface continuously observes, remembers, evaluates, branches, and explains—but never claims the software is literally conscious or sentient.
- **Academically credible** because every visualization identifies what is enforced, observed, advisory, in development, targeted, or not established.

The site’s visual thesis should be:

> **A coordinated intelligence is visible in the relationships between intent, state, authority, validation, decision, effect, memory, and evidence.**

This is much stronger and more product-specific than a robot head, artificial brain, glowing orb, science-fiction chamber, random particle field, or generic “AI network.”

---

## 2. Site-wide visual grammar

### 2.1 The eight product primitives

Every major visual should be composed from the same eight semantic primitives.

| Product primitive | Visual form | Motion behavior | Truth constraint |
|---|---|---|---|
| Intent | Porcelain-white vector, packet, or structured envelope | Enters but cannot pass directly to effect | Never implies authority |
| Staged state | Optical-glass state chamber with current/working-state lamination | Creates a reversible branch or ghost state | Show the present maturity of isolation accurately |
| Authority | Institutional-blue capability lattice or narrowing plane | Attenuates, blocks, or permits; never expands silently | Distinguish runtime enforcement from target architecture |
| Validation | Ordered predicate array with amber/signal instrumentation | Checks resolve sequentially or in parallel | Do not imply validators exist where they are only planned |
| Commit | Oxide-green controlled passage | Effects cross the boundary only after surviving gates | Commit is one valid decision—not a celebratory “success” animation |
| Abort | Controlled-red return/restore loop | Effects remain uncommitted; staged state is restored/discarded | Abort is a first-class correct outcome, not an error screen |
| Evidence | Archive-paper or optical-record lattice | Assembles after observation; limitations remain attached | A Proof Capsule is inspectable evidence, not proof of correctness |
| Memory | Blue/teal temporal weave feeding context into reasoning | Informs the process without crossing the authority plane | Recalled memory never silently increases authority |

### 2.2 Material language

Use a **metallic/roughness PBR workflow** for the few surfaces that benefit from realistic depth. Do not turn every card into 3D chrome.

| Material | Product meaning | Starting PBR direction |
|---|---|---|
| Blackened titanium | Runtime substrate, host boundary, durable control structure | Base color near `#0a0d10`; metallic 0.9–1.0; roughness 0.28–0.42 |
| Dark technical ceramic | Isolation, non-reflective containment, stable visual mass | Base color near `#15191d`; metallic 0; roughness 0.55–0.72 |
| Optical glass | Staged state, inspectable boundaries, lensing/verification | Transmission 0.9+; IOR ~1.45; roughness 0.04–0.12; restrained thickness |
| Porcelain emission | Intent and neutral machine-readable artifacts | Base color `#eee9dd`; metallic 0; roughness 0.36–0.52 |
| Archive paper | Evidence, claims, limitations, research record | Base color `#e9e0cf`; metallic 0; roughness 0.75–0.9; subtle fiber normal |
| Oxide green | Commit route and verified positive state | Use as restrained emissive/edge signal, never a full neon flood |
| Controlled red | Abort, denied passage, limitation boundary | Use as controlled line/plane, not error-page alarm lighting |
| Institutional blue | Authority, governance, system relationships | Low-saturation reflection/edge light; not “cyber blue” glow |

Supplemental maps should be used only where they materially improve the visual:

- **Normal maps:** micro-machining, paper fiber, ceramic grain.
- **Ambient occlusion:** boundary seams, layered evidence sheets, capability lattice joints.
- **Height/displacement:** only for close-up surfaces where silhouette or real parallax matters.
- **Emissive maps:** semantic paths and validator signals, kept physically restrained.

### 2.3 Typography and diagram conventions

- Human explanation: the existing institutional grotesk/sans language.
- Machine state, field names, hashes, status, and figure IDs: monospaced.
- Every serious diagram receives a figure identifier, descriptive title, maturity key, and one-sentence interpretation.
- Maturity cannot be encoded by color alone. Use text, line treatment, hatch/pattern, and state labels.
- Dashed edges mean proposed/target or non-binding relationships—not merely decoration.
- Solid edges mean currently implemented or directly asserted relationships only when the source supports them.
- Evidence objects always carry visible limitations or a path to them.

### 2.4 What to avoid

Do not use:

- humanoid AI faces, robot heads, literal artificial brains, eyes, or “consciousness cores”;
- giant product-like capsules, USB forms, pills, speakers, or consumer-device silhouettes;
- unrelated cathedrals, factories, spacecraft, planets, cityscapes, or cinematic environments;
- random particle clouds, circuit-board filler, purple neon, holographic HUDs, or crypto aesthetics;
- fake dashboards, fake code, fabricated telemetry, or generated labels baked into images;
- endless bordered cards that flatten every idea into the same visual weight;
- animation that exists only to signal budget rather than explain control.

---

## 3. Homepage: section-by-section visual redesign

The current homepage already has the correct conceptual sequence. The redesign should preserve that order while replacing repeated framed-card patterns with distinct, product-native instruments.

### Section 1 — Hero / Pinned Cinematic

**Current role:** Introduces Intent → Gap and the thesis that consequential agent action belongs behind a commit boundary.

**Best visual:** **The Cognitive Hypervisor Cutaway**

A responsive, layered product diagram showing an intent packet entering from the left, then moving through:

1. staged state;
2. authority plane;
3. validation array;
4. Commit/Abort bifurcation;
5. evidence emission.

AEON-IQ memory appears as a temporal weave feeding the reasoning side of the mechanism but physically unable to cross the authority plane. Nexus provides the isolated runtime substrate. Nexus-IQ is the governing transaction plane coordinating the sequence.

**Interaction:**

- Scroll progresses deterministically across the six semantic stages.
- A persistent phase rail makes the stage readable without motion.
- Hover/focus reveals a one-sentence technical interpretation and maturity status.
- At decision, Commit and Abort remain equally available and visually balanced.
- Reduced-motion mode shows the complete cutaway with numbered callouts.

**Visual depth:** Use 2.5D SVG/Rive first. Add one selectively rendered PBR boundary plane or optical state volume only if it clearly improves spatial comprehension.

**Do not:** Make the hero a room, machine shrine, glowing orb, or cinematic fly-through.

**Implementation:** Semantic DOM copy + SVG/Rive state machine; optional R3F progressive enhancement on capable desktop devices; native sticky scroll first, GSAP ScrollTrigger only if the stage choreography cannot be made reliable otherwise.

**Priority:** P0.

---

### Section 2 — The control gap / Problem

**Current role:** Contrasts direct tool execution with a staged, controlled path and identifies missing transitions.

**Best visual:** **Causal Control Trace + Irreversibility Cone**

Two synchronized traces:

- **Uncontrolled path:** intent immediately becomes effect; an expanding red “irreversibility cone” shows downstream consequences and uncertainty.
- **Nexus-IQ path:** intent reaches staged state, authority, validators, and a decision boundary before any committed effect.

**Interaction:** Toggle Commit/Abort; scrub through time; select a node to read “what is known here,” “what is authorized here,” and “what remains reversible here.”

**Academic value:** The diagram explains the causal distinction between a tool invocation and a transaction without relying on metaphor or sales copy.

**Implementation:** Deterministic SVG + CSS; no 3D required.

**Priority:** P0.

---

### Section 3 — DemoPlayer

**Current role:** Provides the strongest existing product explanation: Commit/Abort scenarios, six-stage playback, runtime console, Proof Capsule fields, and maturity labels.

**Best visual evolution:** **Execution Observatory**

Keep the existing DemoPlayer mechanics and add four synchronized lenses rather than replacing it:

1. **State Diff Lens** — baseline snapshot, staged working state, and committed/restored result.
2. **Authority Lens** — requested capabilities, effective attenuated capabilities, denied capabilities.
3. **Validator Matrix** — each validator, input digest, outcome, duration, and maturity.
4. **Evidence Assembly Lens** — Proof Capsule fields become populated as the timeline reaches the events that justify them.

**Interaction:** The current stage rail remains the master clock. Every lens responds to the same scrub position. Commit and Abort produce different state and evidence outcomes but the same level of explanatory completeness.

**Visual character:** Dark runtime instrument transitioning into archive-paper evidence—not a fake terminal wall.

**Implementation:** Existing React/Zustand state can become the single source of truth. Use semantic HTML/SVG and CSS transitions. Rive is unnecessary unless a repeated micro-interaction benefits from an authored state machine.

**Priority:** P0; this is more valuable than a second 3D scene.

---

### Section 4 — Why this exists / Destination architecture

**Current role:** Frames the product as destination architecture rather than claiming completion.

**Best visual:** **The Commit-Boundary Theorem Figure**

A formal two-part figure:

- Left: “Without a commit boundary,” showing a tool call collapsing proposal, authority, execution, and report into one ambiguous event.
- Right: “With a commit boundary,” separating proposal, staged execution, validation, authorization, decision, effect, and evidence.

Add a visible maturity layer beneath each block: Current, In Development, Target, or Not Established.

**Interaction:** A “show only current” switch collapses target layers; “destination architecture” restores the full model. This prevents the visual from overstating maturity while showing the product direction.

**Implementation:** SVG/DOM.

**Priority:** P0.

---

### Section 5 — Change Gate

**Current role:** Presents propose → stage → constrain → validate → approve → decide → emit → compensate, with mixed current/in-development/target status.

**Best visual:** **Transactional State-Space Map**

Replace the simple linear pipeline with a state-transition model:

- Proposal state;
- staged workspace state;
- constrained authority state;
- validation state;
- approval state;
- Commit terminal;
- Abort terminal;
- compensation target for effects that cannot be rolled back directly;
- evidence emission attached to both terminal outcomes.

**Interaction:** Selecting any transition opens:

- preconditions;
- state invariant;
- evidence produced;
- failure route;
- maturity;
- what is explicitly not guaranteed.

**Important:** Compensation must not be drawn as if currently equivalent to snapshot rollback. External effects and compensation remain visibly distinct.

**Implementation:** SVG graph with accessible list mirror. Optional Rive for state transitions; no WebGPU.

**Priority:** P0.

---

### Section 6 — Evidence

**Current role:** Introduces Proof Capsules, their anatomy, success/rollback examples, and the boundary between what they establish and do not establish.

**Best visual:** **Proof Capsule Evidence Lattice**

Show the Proof Capsule as a structured record connected to the runtime observations that populate it:

- subject/tool/input digests;
- policy and authority context;
- snapshot/branch state;
- failure and rollback evidence;
- redaction;
- mandatory limitations;
- integrity/signature metadata.

The “capsule” should be a **record topology**, not a pill-shaped 3D object.

**Interaction:** Selecting a field highlights:

1. its source event;
2. the trust boundary that produced it;
3. what interpretation it supports;
4. what it cannot establish;
5. current versus target integrity binding.

Add a side-by-side **Commit capsule / Abort capsule** comparison so Abort visibly emits first-class evidence.

**Visual transition:** Runtime dark → archive-paper evidence should feel like a physical phase change from execution to inspectable record.

**Implementation:** SVG/DOM for topology; optional subtle PBR paper/glass material in a nonessential background layer.

**Priority:** P0.

---

### Section 7 — Composition: Nexus + AEON-IQ + Nexus-IQ

**Current role:** Explains the three systems and their responsibilities.

**Best visual:** **Explorable Architecture Atlas**

Use four selectable planes:

- **AEON-IQ / Memory plane:** temporal memory, provenance, recall mode, attestation status.
- **Nexus / Execution plane:** WASM isolation, capability governance, snapshot/rollback, runtime observation.
- **Nexus-IQ / Transaction plane:** proposal, policy, validators, approval, Commit/Abort, coordination.
- **Evidence plane:** Proof Capsule assembly, limitations, integrity binding, external verification.

The critical relationship should be physically obvious:

> Memory can enter reasoning context; it cannot cross into authority without an explicit governed transition.

**Interaction:** Layer isolate, request-path trace, threat-path trace, and “current only / destination” modes.

**Implementation:** SVG/Canvas atlas; WebGPU adds little value here. Optional R3F only for a close-up exploded-layer transition, not as the primary information carrier.

**Priority:** P0 for `/system`, P1 for additional traces.

---

### Section 8 — Outcomes / Use cases

**Current role:** Communicates the operational outcomes the product is intended to enable.

**Best visual:** **Scenario Lenses**, not generic industry cards.

Create four compact, inspectable simulations using the same underlying product primitives:

1. **Repository remediation:** proposed patch → isolated worktree → tests/policy → Commit PR or Abort.
2. **Sensitive infrastructure change:** requested configuration → constrained authority → validators/approval → controlled effect.
3. **Governed research workflow:** memory-informed plan → staged artifacts → reproducibility checks → evidence package.
4. **Agent tool orchestration:** multiple proposed calls → capability attenuation → ordered decision → signed observations.

Each lens must distinguish actual Stage 0 capabilities from destination behavior. Use representative data marked as illustrative; do not fabricate customer telemetry.

**Interaction:** Switch scenarios while preserving the same six-stage skeleton. This demonstrates product generality without changing the mental model.

**Implementation:** Shared React component fed by typed scenario data; SVG/DOM.

**Priority:** P1.

---

### Section 9 — Trust / Security

**Current role:** Explains enforcement, trust, cryptographic binding, rollback limits, host/key assumptions, and Stage 0 caveats.

**Best visual:** **Adversarial Trust-Boundary Playback**

A nested boundary map with selectable attacks:

- expired/revoked capability;
- forged or untrusted memory context;
- validator failure;
- attempt to bypass the commit boundary;
- effect escaping before abort;
- compromised host or signer custody;
- stale/replayed evidence;
- unavailable external trust anchor.

Each path ends in one of four explicit classifications:

- **Enforced/denied**;
- **Observed/recorded**;
- **Still trusted**;
- **Not established**.

This is more rigorous than a compliance shield or lock illustration.

**Interaction:** Attack path animation, boundary definitions, residual-risk panel, and link to the exact claim or research source.

**Implementation:** SVG/DOM. Use slow, deliberate path tracing; no particles.

**Priority:** P0 for `/security`.

---

### Section 10 — Evaluation

**Current role:** Gives evaluators a route into the system, evidence, claims, benchmarks, security, research, and maturity surfaces.

**Best visual:** **Evaluation Workbench**

A role-selectable verification map:

- Platform engineer;
- security architect;
- researcher;
- CTO/CISO;
- open-source evaluator.

For each role, show:

1. the claim to inspect;
2. the live artifact or repository surface;
3. the verification method;
4. the limitation;
5. the current maturity.

**Interaction:** Build an evaluation path, mark checks complete locally, export a non-authoritative checklist, and deep-link to the relevant route.

**Implementation:** Semantic React UI; no 3D.

**Priority:** P1.

---

## 4. Route-by-route visual plan

| Route | Evaluator question | Primary visual instrument | Supporting visual(s) | Avoid |
|---|---|---|---|---|
| `/` | Why does consequential autonomy need a commit boundary? | Cognitive Hypervisor + Execution Observatory | Causal trace, evidence lattice, scenario lenses | Cinematic scenery; duplicate card grids |
| `/system` | How do Nexus, AEON-IQ, and Nexus-IQ compose? | Explorable Architecture Atlas | Request path, memory/authority invariant, deployment boundary map | Three generic product cards |
| `/change-gate` | What is the transactional operating model? | Transactional State-Space Map | Invariant table, failure/compensation routes, current-vs-target switch | A single unqualified linear pipeline |
| `/evidence` | What evidence exists and how should it be interpreted? | Evidence Provenance Map | Evidence-class taxonomy, interpretation boundary | Generic “three benefits” cards |
| `/evidence/proof-capsules` | What is inside a Proof Capsule? | Evidence Lattice + synchronized Explorer | Commit/Abort capsule diff, offline verification sequence | Pill/capsule object render |
| `/evidence/claims` | Which statements are current, in development, target, or limited? | Claim Dependency Graph | Filterable matrix, source/evidence drawer, change history | Treating all claims as equal cards |
| `/evidence/benchmarks` | What was measured, under which methodology? | Reproducibility Workbench | Distribution/CI plots, environment fingerprint, run lineage | Big vanity numbers without context |
| `/security` | Where are the actual trust boundaries and residual risks? | Adversarial Boundary Playback | Key custody map, capability attenuation trace, external-effect boundary | Shield/lock graphics |
| `/research` | What evidence and arguments support the architecture? | Research Evidence Graph | Claim→paper→artifact links, experiment lineage, open questions | Citation cards with no relationships |
| `/maturity` | What exists today versus the destination? | Capability Topology / Build-State Map | Change timeline, “show current only,” dependency gates | A status table as the only visualization |
| `/developers` | How does an evaluator integrate and inspect it? | Integration Path Simulator | Protocol sequence, local stack topology, sample request/evidence pair | Fake IDE screenshots or untested snippets |

---

## 5. Detailed route concepts

### `/system` — System architecture

The current route is structurally underpowered relative to the product. Replace the three-card overview with a full atlas containing:

- agent/application boundary;
- Nexus-IQ transaction coordinator;
- policy/approval/validator surfaces;
- Nexus isolated execution boundary;
- AEON-IQ memory retrieval and attestation modes;
- state store and snapshot relationships;
- evidence assembly and verifier boundary;
- external-effect boundary;
- current/in-development/target legend.

Add three traces:

1. **Normal Commit trace**;
2. **Abort/restore trace**;
3. **Memory-recall trace**, explicitly terminating at reasoning context rather than authority.

### `/change-gate` — Operating model

Add a formal transition table below the interactive graph:

| Transition | Preconditions | Invariant | Evidence | Failure route | Maturity |
|---|---|---|---|---|---|
| Propose → Stage | scoped intent | no external effect | proposal digest | reject malformed intent | current/target as sourced |
| Stage → Constrain | isolated state exists | effective authority ≤ granted authority | capability context | deny/abort | current/target as sourced |
| Constrain → Validate | declared validators | no commit before required checks | validator results | abort | in development where applicable |
| Validate → Approve | policy requires approval | approval is explicit and scoped | approval record | deny/abort | target where applicable |
| Approve → Commit | all gates satisfied | one terminal decision | decision record | abort | in development |
| Any staged state → Abort | policy/failure/user decision | baseline remains authoritative | rollback/abort evidence | compensation only for escaped effects | current/in development as sourced |

The final implementation must derive labels from the canonical claims/maturity registry rather than hard-coding marketing status.

### `/evidence` — Evidence system overview

Introduce an evidence taxonomy:

- **Observation evidence:** what the runtime reports it observed.
- **Integrity evidence:** what digests/signatures bind.
- **Authority evidence:** what capabilities/policy context were in force.
- **State evidence:** snapshot, branch, rollback relationships.
- **Limitation evidence:** explicit negative claims.
- **External corroboration:** tests, CI, research artifacts, third-party verification.

The visual should show that these evidence classes have different epistemic strength. Do not collapse them into one “verified” badge.

### `/evidence/proof-capsules` — Explorer

Preserve the existing Explorer and anatomy. Add:

- hover/click synchronization between raw JSON, visual lattice, and timeline event;
- digest-chain inspection;
- redaction-before-sign illustration;
- limitations pinned beside any interpretation panel;
- verifier mode showing which fields can be checked offline;
- “not proof of correct execution” always visible in the relevant interpretation context.

### `/evidence/claims` — Claims registry

Upgrade the current searchable matrix with a **Claim Dependency Graph**:

- node = claim;
- upstream nodes = implementation, test, benchmark, research source, or limitation;
- edge = supports, constrains, supersedes, or contradicts;
- node state = Current / In Development / Target / Limitation;
- date and revision visible.

A claim should never appear stronger because it has more visual prominence. Importance and evidence strength are separate dimensions.

### `/evidence/benchmarks` — Benchmark laboratory

Keep the methodology-first posture. Add:

- run selector;
- commit/environment fingerprint;
- workload and sample-count panel;
- distribution plot, not only aggregate values;
- confidence interval/error representation when valid;
- baseline comparison and regression threshold;
- artifact download and reproduction command;
- “what this benchmark does not measure.”

Use Recharts or lightweight SVG for conventional plots. WebGPU is unjustified unless a benchmark truly contains millions of points.

### `/security` — Trust model

Pair the adversarial playback with a **Key and Authority Custody Map**:

- issuer;
- holder;
- verifier;
- rotation/revocation path;
- trust anchor status;
- host compromise boundary;
- replay protection status;
- external-effect limitations.

Every security visual must distinguish cryptographically bound, runtime enforced, policy advisory, and operator-trusted properties.

### `/research` — Research dossier

Build a **Research Evidence Graph**:

- research question;
- hypothesis/claim;
- method;
- artifact/dataset;
- result;
- limitation/open question;
- product implication.

The graph should deep-link to the actual paper or repository artifact. Use archive-paper sections and restrained diagram overlays rather than a decorative “academic” texture.

### `/maturity` — Build-state topology

Convert the status table into a topology:

- capability nodes grouped by memory, execution, transaction, evidence, security, and deployment;
- dependency edges;
- state labels;
- blockers/gates;
- last verified source or commit;
- “show current only” and “show destination architecture.”

Retain the table as the accessible, sortable source of truth beneath the topology.

### `/developers` — Integration simulator

Add a small deterministic simulator with selectable integration paths:

- Nexus runtime;
- AEON-IQ memory plane;
- Nexus-IQ transactional gate;
- Proof Capsule Explorer.

For each path, animate a real protocol sequence using representative, clearly labeled sample data. Show request, authority context, response/evidence, and failure mode. Never present a target endpoint as currently available.

---

## 6. Still-image and background system

Still visuals should be derived from real product relationships, not generated scenery.

### Recommended still families

1. **Causal-field macro** — an abstract but mathematically ordered close-up of intent paths bending around an authority plane; derived from the actual hero geometry.
2. **State-diff lamination** — layered current/staged/restored state surfaces with explicit snapshot identifiers.
3. **Capability lattice** — scoped tokens, attenuation, and denied edges shown as a precise geometric field.
4. **Evidence laminate** — archive-paper record, optical integrity layer, digest paths, and attached limitations.
5. **Temporal memory weave** — memory events arranged along time with provenance and attestation status, terminating at reasoning context.
6. **Validator optics** — an ordered array of checks represented as scientific instrumentation, each tied to a real validator class or clearly labeled target state.
7. **Trust-boundary sectional** — nested enforcement/trust zones with one adversarial path highlighted.

### Usage rules

- A still must explain at least one real relationship even without animation.
- No generated text is baked into images; labels stay in semantic DOM/SVG.
- Still images can serve as OG/social cards, route headers, reduced-motion states, and report figures.
- Mobile variants should be intentionally composed—not center-cropped desktop images.
- Abstract images should originate from canonical geometry/data so the brand remains ownable.

---

## 7. Motion and video system

### 7.1 Product mechanism film

Create one 20–30 second deterministic product film assembled from the same visual system:

1. Intent enters;
2. state is staged;
3. authority narrows;
4. validators resolve;
5. Commit or Abort branches;
6. evidence assembles;
7. memory feeds the next reasoning cycle without altering authority.

This is not a cinematic scene. It is a high-production-value motion diagram using physically credible light, depth, material response, and timing.

### 7.2 Demo capture

Create a second film from the real DemoPlayer/UI:

- synchronize the stage rail, state diff, authority lens, validator matrix, and evidence assembly;
- show one Commit and one Abort run;
- use real or explicitly representative fixtures;
- display maturity and limitations throughout;
- do not replace the live demo with video.

### 7.3 Motion principles

- Camera is fixed or moves only enough to reveal a relationship.
- Motion has semantic causality: something moves because state changes.
- No idle particles, perpetual orbit, texture crawling, or decorative object drift.
- Scroll-controlled sections map position to a deterministic timeline.
- Reduced-motion mode exposes the complete sequence as adjacent states or a static annotated figure.
- Pause rendering and video when offscreen.

---

## 8. Technology assignment: use the least complex tool that preserves the idea

| Need | Preferred technology | Why | Fallback |
|---|---|---|---|
| Formal diagrams, architecture, trust maps | Semantic SVG + DOM | Inspectable, accessible, sharp, lightweight | Static SVG/PNG |
| Branching micro-interactions and reusable state machines | Rive | Authored states, compact runtime, deterministic interaction | SVG/CSS |
| Complex pinned scroll choreography | Native sticky + `requestAnimationFrame`; GSAP ScrollTrigger only when needed | Reliability without blanket dependency | Static sequence |
| One premium spatial cutaway | Three.js / React Three Fiber | PBR, controlled depth, camera, GLTF pipeline | SVG/Rive poster |
| Experimental high-density field or simulation | WebGPU/WGSL only as progressive enhancement | GPU compute can support genuinely dense interactive data | WebGL/SVG/Canvas |
| Conventional charts | Recharts or bespoke SVG | Existing dependency, accessible conventional data display | HTML table |
| Shared playback state | Existing Zustand | Synchronizes DemoPlayer lenses without React render churn | Component-local state |
| Physics | Usually none | Product logic is governed state transition, not bouncing bodies | Deterministic interpolation |
| Fast 3D concept layout | Spline only for exploration | Useful for prototyping, not canonical production output | Blender/R3F |
| Final deterministic 3D assets | Blender + glTF | Reproducible geometry, UVs, camera, bake, animation | Authored SVG/Rive |
| Material authoring | Substance 3D or Blender nodes | Custom PBR maps and repeatable surfaces | Procedural Blender materials |

### Important stack decisions

- Do **not** rebuild the site in vanilla Vite solely for visual prestige; the existing React/TanStack/Vite stack is capable.
- Do **not** introduce Babylon.js beside Three/R3F unless a specific production requirement clearly favors it.
- Do **not** add Rapier/Cannon unless a real interaction requires collision or rigid-body behavior.
- WebGPU should never be the only rendering path. It remains progressive enhancement with a complete WebGL/SVG/static fallback.
- Three/R3F should be code-split and loaded only for the surface that needs it.

---

## 9. 3D/PBR asset pipeline

### Canonical pipeline

1. **Model in Blender** with real-world scale and intentionally limited geometry.
2. **UV unwrap** only visible hero/cutaway surfaces.
3. Author **metallic/roughness** textures: base color, metallic, roughness, normal, AO; optional emissive/transmission.
4. Bake details; avoid geometry that exists only to make the model “busy.”
5. Export **glTF/GLB** with stable object names and animation clips.
6. Compress geometry with **Meshopt or Draco** after testing decode cost and visual quality.
7. Encode textures as **KTX2/Basis Universal** with appropriate color-space handling.
8. Load progressively: poster → low-detail asset → full-detail asset.
9. Cap device pixel ratio and select mobile/desktop LODs.
10. Record source, software version, licenses, hashes, texture dimensions, triangle count, and compression settings in a provenance manifest.

### Proposed production budgets

These are design targets, not claims about the current repository:

- Critical static hero/SVG/poster: **≤ 200–250 KB compressed**.
- Additional hero JavaScript chunk: **≤ 250 KB gzip** where feasible.
- Desktop 3D package: **≤ 1.5 MB compressed** initial LOD.
- Mobile 3D package: **≤ 600 KB compressed**, or use the deterministic SVG/Rive fallback.
- Limit DPR to roughly **1.5–2.0** based on device class.
- No continuous offscreen rendering.
- Target visually stable **60 fps** on representative desktop hardware, with adaptive quality and a complete static fallback.
- Avoid blocking the largest-contentful paint on 3D initialization.

---

## 10. Accessibility, truth, and academic acceptance

Every visual must satisfy all of the following:

- Complete semantic explanation exists outside the visual.
- Keyboard focus can reach every selectable state.
- Focus is visible.
- Color is never the sole carrier of meaning.
- Reduced-motion mode communicates the entire mechanism.
- Screen-reader title/description explains the figure and its active state.
- Mobile retains the causal path rather than showing a decorative crop.
- Current/In Development/Target/Limitation statuses are visible where relevant.
- Illustrative sample data is labeled as illustrative.
- No visual implies customers, deployments, audits, guarantees, production readiness, or benchmark results not supported by source evidence.
- Proof Capsule visuals state that the record is not, by itself, proof of correct execution.
- Memory visuals preserve the invariant that recall may inform reasoning but may not silently increase authority.
- Commit and Abort receive equal explanatory and visual treatment.

---

## 11. Independent visual acceptance rubric

Score each candidate from 0–2 on every criterion. A production candidate should score at least 18/22 with no zero in truth, comprehension, mobile, or accessibility.

| Criterion | 0 | 1 | 2 |
|---|---|---|---|
| One-second comprehension | Decorative/unclear | Requires copy | Core relationship immediately visible |
| Product specificity | Generic AI/tech | Partially ownable | Could only plausibly represent Nexus-IQ |
| Causal accuracy | Misleading | Simplified but safe | Correct relationship and limits |
| Maturity honesty | Hidden/overstated | Present but peripheral | Integrated into the model |
| Commit/Abort parity | Abort is failure | Both present | Both first-class and fully explained |
| Evidence interpretation | “Verified” aesthetic | Fields shown | Sources, limits, and trust visible |
| Mobile integrity | Mechanism lost | Reduced but readable | Purpose-built mobile composition |
| Reduced motion | Missing | Static fallback | Complete alternative explanation |
| Accessibility | Inaccessible | Partially operable | Semantic, keyboard, focus, contrast |
| Performance | Blocks/overheats | Adaptive with issues | Progressive, paused offscreen, budgeted |
| Visual craft | Template/AI slop | Polished | Distinctive, disciplined, publication-grade |

---

## 12. Production sequence

### Phase 0 — Canonical semantic model

- Map all visual labels to the canonical claims and maturity registry.
- Define typed objects for phases, capabilities, validators, claims, limitations, and evidence fields.
- Lock the eight visual primitives and the material/motion tokens.

**Exit criterion:** no visual needs hand-written maturity claims or duplicate product terminology.

### Phase 1 — Deterministic 2D prototypes

- Build Hero Cutaway, Causal Trace, Architecture Atlas, Evidence Lattice, and Trust Playback in SVG/DOM.
- Test desktop, mobile, keyboard, reduced motion, and copy density.
- Conduct independent pixel review before adding 3D.

**Exit criterion:** product comprehension succeeds without PBR or video.

### Phase 2 — Homepage integration

- Integrate the hero and causal trace.
- Upgrade DemoPlayer into the Execution Observatory.
- Replace repetitive card treatment selectively, not wholesale.
- Preserve existing claims, routes, semantic content, and QA behavior.

**Exit criterion:** homepage tells the full Intent → Stage → Constrain → Validate → Commit/Abort → Emit story with current maturity visible.

### Phase 3 — Core route instruments

- `/system` Architecture Atlas;
- `/change-gate` State-Space Map;
- `/evidence/proof-capsules` Evidence Lattice;
- `/security` Adversarial Playback.

**Exit criterion:** each route answers a different evaluator question and does not repeat the hero treatment.

### Phase 4 — Selective PBR and motion

- Add physically credible depth to one hero cutaway and selected evidence/material transitions.
- Produce the deterministic product mechanism film.
- Retain complete SVG/Rive/static fallbacks.

**Exit criterion:** PBR materially improves comprehension and brand memory without harming performance or truth.

### Phase 5 — Evaluation surfaces

- Claim Dependency Graph;
- Benchmark Reproducibility Workbench;
- Maturity Topology;
- Developer Integration Simulator;
- Research Evidence Graph.

**Exit criterion:** technical evaluators can move from a statement to its evidence, limitation, maturity, and reproduction path.

### Phase 6 — QA and evidence package

- Browser screenshots at required widths;
- keyboard/focus/reduced-motion passes;
- route-by-route mobile capture;
- performance traces and adaptive-quality checks;
- media dimensions, duration, format, bytes, hashes, licenses, and provenance;
- source-to-visual claim audit;
- independent visual review.

---

## 13. Immediate build priorities

### P0 — Highest value

1. Cognitive Hypervisor hero.
2. Execution Observatory upgrade to DemoPlayer.
3. System Architecture Atlas.
4. Transactional State-Space Map.
5. Proof Capsule Evidence Lattice.
6. Adversarial Trust-Boundary Playback.

### P1 — Evaluation depth

1. Claim Dependency Graph.
2. Maturity Capability Topology.
3. Benchmark Reproducibility Workbench.
4. Developer Integration Simulator.
5. Scenario Lenses.

### P2 — Selective spectacle

1. PBR hero cutaway.
2. Deterministic product mechanism film.
3. Research Evidence Graph.
4. Experimental WebGPU causal field—only after a measured use case proves it superior to SVG/Canvas.

---

## 14. Included concept lab

The accompanying standalone HTML prototype includes:

1. **Cognitive Hypervisor** — phase-selectable hero mechanism.
2. **Causal Control Trace** — Commit/Abort comparison.
3. **Three-System Architecture Atlas** — layer isolation for Nexus-IQ, AEON-IQ, Nexus, and evidence.
4. **Proof Capsule Evidence Lattice** — field/source/interpretation relationships.
5. **Adversarial Trust-Boundary Playback** — selectable threat paths and explicit outcomes.
6. **PBR/material direction** and the route-level visual map.

It is dependency-free, makes no network requests, supports reduced motion, and is deliberately built from semantic HTML/SVG rather than generated cinematic scenery.

---

## 15. Final design rule

> **Cinematic grade should describe the craft—light, material, depth, timing, interaction, and precision—not the invention of a cinematic world around the product.**

The visual identity becomes “sovereign cognitive super-intelligence” when the site shows a coherent system that can observe context, preserve memory, limit itself, reason across state, refuse unsafe passage, commit deliberately, and explain what it did. That is a far more sophisticated representation of intelligence than a face, brain, orb, or fictional machine.

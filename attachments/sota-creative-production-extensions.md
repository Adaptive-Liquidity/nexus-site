# Nexus-IQ SOTA Creative Production Extensions

## Purpose and scope

This is a source-audited production extension to the supplied "How to Create $50,000 Cinematic Websites" tutorial. It is **not part of the video transcript** and must not be represented as something the tutorial taught.

Its purpose is to help Grok choose a modern production technique only when the approved Nexus-IQ concept requires it. It is a decision system, not an installation list and not evidence that adding more tools creates a more valuable website.

The default Nexus-IQ implementation remains the smallest approach that preserves product truth, accessibility, performance, and the existing application.

## Governing adoption rule

Do not select dependencies because they are associated with award-winning websites. After the baseline design audit, classify each approved experience as:

1. DOM/CSS-led;
2. native scroll-timeline or view-transition-led;
3. video-led;
4. shader-led;
5. interactive 3D-led.

Choose the smallest runtime capable of reproducing the approved storyboard. Every additional runtime dependency must have:

- a named visual requirement;
- alternatives considered;
- an accessibility and non-motion fallback;
- an initial-load and runtime performance budget;
- a browser-support strategy;
- a removal condition;
- verification evidence in the final report.

Do not install competing animation or rendering stacks "just in case."

## Runtime decision matrix

| Need | Default choice | Conditional escalation | Do not do |
|---|---|---|---|
| Simple entrances and state changes | CSS transitions/keyframes, existing utilities | Web Animations API | Install a timeline engine |
| Straightforward scroll-linked transforms | CSS Scroll-Driven Animations with feature detection | Small `requestAnimationFrame` controller | Main-thread scroll-state churn |
| Route or DOM-state transitions | View Transition API with fallback | Focused custom WAAPI treatment | Duplicate old/new interactive DOM |
| Complex pinned, synchronized cinematic timeline | Native implementation first | GSAP + ScrollTrigger when it materially reduces complexity | Add GSAP and Motion for the same job |
| React layout/state transitions | Existing CSS | Motion when shared layout choreography is a real requirement | Use Motion as the scroll/video engine by default |
| Smooth scrolling | Native browser scroll | Lenis only after native scrolling fails the approved feel | Call Lenis mandatory |
| One full-screen custom shader | CSS/canvas first | OGL for a small shader-focused renderer | Install R3F for one flat shader |
| Genuine interactive 3D scene | Three.js + React Three Fiber v9 | Selective Drei helpers | Use WebGL as status decoration |
| Deterministic product diagram | Semantic DOM/SVG/canvas | Evolve existing `HeroSchematic` | Generate labels or evidence fields as pixels |
| Cinematic atmosphere | Optimized still/video with poster | External generation service when authorized | Make product meaning depend on playback |

Current browser references:

- [CSS Scroll-Driven Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations)
- [View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)
- [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API)

## Conditional runtime tools

### GSAP and ScrollTrigger

Use only for complex, synchronized pinned timelines that would be brittle or substantially larger with native code.

If selected:

- install only the necessary package;
- integrate through a React-safe lifecycle and clean up all contexts/triggers;
- do not animate a pinned element in a way that conflicts with ScrollTrigger's measurements;
- use responsive/reduced-motion branches;
- verify reverse scrolling, refresh/reflow, route cleanup, sticky release, and mobile touch behavior;
- record why native CSS/WAAPI and the existing scroll logic were insufficient.

GSAP's current official pricing states that the full library is free, but licensing cost is not an architectural justification. See [GSAP pricing](https://gsap.com/pricing/) and [GSAP installation](https://gsap.com/docs/v3/Installation/).

### Lenis

Lenis is optional. Add it only after testing demonstrates that native scrolling cannot deliver the approved interaction.

If selected, verify:

- anchor links and focus targets;
- keyboard, wheel, touch, and trackpad behavior;
- sticky/pinned elements;
- browser history scroll restoration;
- reduced-motion behavior;
- integration with the chosen animation ticker;
- teardown across route transitions.

See [Lenis documentation](https://github.com/darkroomengineering/lenis).

### Three.js, React Three Fiber, and Drei

Use only for a concept that needs true camera, lighting, spatial depth, or interactive 3D.

React Three Fiber v9 is the appropriate React 19 line. If selected:

- pin compatible versions;
- lazy-load the 3D surface;
- cap device-pixel ratio;
- use `frameloop="demand"` when continuous rendering is unnecessary;
- pause or reduce work when offscreen or when the document is hidden;
- dispose geometries, materials, textures, render targets, and listeners;
- provide static, reduced-motion, no-WebGL, and context-loss fallbacks;
- verify mobile GPU/thermal behavior and report the bundle increase;
- use only the necessary Drei helpers.

References:

- [React Three Fiber v9 migration](https://r3f.docs.pmnd.rs/tutorials/v9-migration-guide)
- [React Three Fiber performance scaling](https://r3f.docs.pmnd.rs/advanced/scaling-performance)
- [Drei](https://github.com/pmndrs/drei)

### OGL

OGL is a focused alternative for a shader-led scene that does not justify a React 3D scene graph. Choose OGL or R3F for the approved surface, not both. See [OGL](https://oframe.github.io/ogl/).

### Lygia

Lygia can accelerate custom shader work, but it remains optional. Pin the source/version, include only audited shader functions, retain license notices, and test compilation across target browsers. See [Lygia](https://lygia.xyz/).

### Rapier and Matter.js

Physics is justified only when collision, constraint, or rigid-body behavior communicates the product concept. Nexus-IQ's controlled transaction narrative should normally prefer deterministic state choreography over decorative tumbling.

Rapier is a WASM physics engine and does not provide rendering. Matter.js is a 2D physics engine. Do not install either unless the storyboard contains a specific physics requirement and a deterministic/reduced-motion fallback.

- [Rapier JavaScript guide](https://rapier.rs/docs/user_guides/javascript/getting_started_js)
- [Matter.js](https://brm.io/matter-js/)

## 3D asset production and optimization

### Blender MCP boundary

The commonly referenced Blender MCP is a community project, not an official Blender capability. It can execute Python in a running Blender instance and therefore expands the trusted-code boundary.

Do not ask Grok Build to install or operate Blender in its restricted Linux web sandbox. Use a separate trusted desktop asset session only when explicitly authorized.

Desktop safety rules:

- use a dedicated project directory;
- do not expose secrets or private repositories to the Blender session;
- do not run untrusted prompts or scripts;
- save versioned `.blend` sources;
- retain model, texture, font, and reference licenses;
- inspect the scene and exports visually;
- export a clean GLB/glTF;
- attach only the approved export and provenance record to Grok.

Reference: [Blender MCP community repository](https://github.com/ahujasid/blender-mcp).

### Required web delivery pipeline

If any GLB/glTF is approved:

1. validate the source file;
2. remove unused nodes, scenes, materials, attributes, and animation clips;
3. consolidate materials and draw calls where reasonable;
4. resize textures to the actual displayed need;
5. compress textures with KTX2/Basis where supported;
6. use Meshopt or Draco only after measuring compatibility and decode cost;
7. preserve stable node and clip names required by code;
8. record original and final byte sizes;
9. test the optimized asset in the real site on desktop and mobile;
10. provide a poster/static fallback.

Use [glTF Transform](https://gltf-transform.dev/) and a Khronos-compatible validator. Do not treat compression as complete until the rendered result is inspected.

## External generative asset candidates

These tools are optional, credentialed production services. Model names, endpoints, availability, prices, and terms can change. Verify official documentation at execution time.

### FLUX

Use current FLUX.2 endpoints for controlled still-image or texture-source generation when authorized. Prefer a pinned, non-preview endpoint for reproducibility; use a preview endpoint only when the latest behavior is intentionally desired.

Generated "PBR maps" are source material, not automatically physically valid maps. Inspect seams, scale, tiling, normal direction, roughness range, and color-space handling before use.

Reference: [FLUX.2 overview](https://docs.bfl.ai/flux_2/flux2_overview).

### Kling

Kling 3.0 is a candidate for short atmospheric or multi-shot motion. Do not describe it as the universal leader or as objectively superior without a reproducible comparison. Confirm live API access, model identifiers, duration limits, commercial terms, and output rights before use.

Reference: [Kling 3.0 official guide](https://app.klingai.com/cn/quickstart/klingai-video-3-model-user-guide).

### Luma

"Ray 2" is outdated terminology for a current-stack report. Luma's official model information should be checked immediately before execution; as of this package's 2026-07-29 verification, it identifies Ray3.2 as the current video model.

Reference: [Luma model information](https://lumalabs.ai/llm-info).

### Cascadeur

Use Cascadeur only for an approved character-animation requirement. It is unnecessary for the current abstract Nexus-IQ commit-boundary direction. Exported animation still requires retargeting, web optimization, visual inspection, licensing checks, and mobile testing.

Reference: [Cascadeur GLTF/GLB export documentation](https://cascadeur.com/help/category/283).

## Media delivery escalation

Use this delivery ladder:

1. one or two short, optimized local assets with poster frames;
2. Cloudinary for responsive transformations and centralized asset management;
3. Mux for adaptive streaming, playback analytics, or a larger video catalog.

For the initial Nexus-IQ hero, an optimized local asset is usually simpler. Cloudinary and Mux require accounts, authorization, credentials, and potentially paid usage. Grok may prepare an integration plan without configuring or uploading to either service.

- [Cloudinary MCP documentation](https://cloudinary.com/documentation/cloudinary_llm_mcp)
- [Mux MCP documentation](https://www.mux.com/docs/integrations/mcp-server)

If authorized later:

- scope credentials to the minimum capability;
- use read-only or narrowly scoped access where possible;
- never commit credentials;
- do not upload private source or customer data;
- record asset IDs, delivery URLs, transformation settings, retention, and rollback steps;
- confirm accessibility and local fallback behavior.

## Tools that are not default Nexus-IQ dependencies

| Tool | Decision |
|---|---|
| ReactBits | Do not use by default. Recognizable effect templates work against bespoke art direction; Pro also introduces licensing/configuration requirements. |
| Tunnel-rat | Use only if the chosen architecture genuinely needs portals between renderers. It is not a default R3F requirement. |
| Packery | Use only for real draggable/bin-packed layout behavior. Use semantic CSS Grid for ordinary "bento" layouts. |
| D3 Delaunay | Use only for an approved organic spatial layout or geometry problem. |
| Tokens Studio + Style Dictionary | Introduce only if Nexus establishes a maintained Figma-to-code token workflow. The current CSS token source remains authoritative. |
| Storybook | Consider later if the project develops a reusable motion-component library. It is not required for this homepage milestone. |
| Leva | Development-only tuning aid for an approved shader/3D implementation. Never expose the panel in production. |

## Asset manifest contract

Create or extend a project-local manifest for every new production asset. Each record must contain:

- stable asset ID and filename;
- purpose and page/section;
- type, dimensions, duration, frame rate, and codec where applicable;
- origin: generated, commissioned, supplied, or code-produced;
- model/tool/version and prompt/settings when generated;
- source/reference links;
- ownership/license status;
- original and optimized byte sizes;
- transformations and optimization commands;
- poster/fallback path;
- desktop/mobile crop notes;
- accessibility behavior;
- final review status and reviewer;
- external service asset ID and rollback/delete instructions when applicable.

Generated assets are communication artifacts. They are never evidence of Nexus-IQ implementation, runtime behavior, cryptographic verification, customer usage, or maturity.

## Acceptance contract

A production extension is accepted only when:

- it makes the commit boundary or transactional sequence easier to understand;
- its dependency choice is recorded and justified;
- it looks bespoke to Nexus-IQ rather than copied from a component gallery;
- it works without motion and without WebGL;
- all text and controls remain semantic and accessible;
- desktop, tablet, mobile, keyboard, reduced-motion, and media-failure states pass;
- console, network, hydration, typecheck, lint, and production-build checks pass;
- media and bundle costs are measured;
- provenance and licensing are recorded;
- no external action exceeded its explicit authorization.

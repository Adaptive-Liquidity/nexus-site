# Cinematic Website Prompt Pack

These are cleaned, reusable versions of the tutorial instructions. Replace text in brackets.

## Usage boundary

- Prompts 1–13 transfer techniques from the supplied tutorial, generalized for reuse.
- Tutorial-specific values are identified as references, not Nexus-IQ defaults.
- Prompts 14–22 are Nexus-IQ production extensions and were not shown in the video.
- For the existing Nexus-IQ repository, inspect and adapt the live application. Do not scaffold a replacement app or import the tutorial’s purple palette, geology content, fonts, routes, or pricing.

## 1. Generate the hero still

```text
Use the attached reference as art direction.

Create a new 16:9 cinematic image for [brand/subject]. Keep the same sense of depth and atmosphere, but [describe the intended subject change]. Place [focal object] closer to [position] and leave generous negative space in [area] for website navigation and a large editorial headline.

Keep the composition clean. Do not add text, UI, logos, borders, or extra focal objects.
```

## 2. Animate the still

```text
Animate only [subject motion]. Make the movement slow, smooth, and dimensional.

Lock the composition:
- do not change the subject's size;
- do not change the subject's position;
- do not zoom in or out;
- do not pan, tilt, or reframe the camera;
- do not add objects or text;
- preserve the first frame's lighting and composition.

Create a seamless landscape result suitable for a full-screen website hero.
```

Tutorial-specific version:

```text
Make the planet spin. Do not change its size or position. Do not zoom in or zoom out.
```

## 3. Establish the frontend and hero

```text
If this is a greenfield tutorial exercise, build a full-screen, dark-themed hero for [brand] using React, TypeScript, Vite, Tailwind CSS, and lucide-react.

If this is an existing application, first inspect its framework, router, dependencies, tokens, components, copy, and constraints. Evolve that application without re-scaffolding or replacing its architecture.

Establish the visual grammar:
- [primary sans font] for UI and supporting copy;
- [display font] for editorial emphasis;
- pure black placeholder background;
- asymmetric editorial composition;
- navigation and logo;
- large two-line headline;
- compact corner copy and a clear CTA;
- responsive stacking below the large breakpoint.

Do not add a cursor spotlight, reveal mask, hover-reveal image, canvas effect, or placeholder illustration. I will provide the background video next.

Add restrained staggered entrance motion with IntersectionObserver. Users who request reduced motion must see the content immediately.

Run the typecheck when finished.
```

The tutorial’s displayed stack is React 18 + TypeScript + Vite + Tailwind CSS + lucide-react. Its fonts are Inter and italic Playfair Display.

## 4. Install the hero video

```text
Add the attached video as the background of the hero section.

Requirements:
- fill the full hero;
- preserve the intended focal point;
- do not add an overlay;
- keep all copy above the media;
- apply [approved accent token] consistently without replacing semantic status colors;
- keep the mobile composition readable.
```

The tutorial used `#522DFF`; Nexus-IQ must use its existing semantic design tokens instead.

## 5. Build pinned story sections

```text
Build the next two sections while keeping the hero video pinned in the background. As the user leaves the hero, its copy should disappear but the video should remain fixed.

For each section, add four text-only content groups: two on the left and two on the right. Each group should contain a tagline, headline, and short description. Add a small section headline in the established editorial style.

Do not add card backgrounds or a media overlay. Vary the composition slightly between sections while preserving the typography, spacing, and visual direction already established.

Use IntersectionObserver for staggered entrances. Stack content clearly on smaller screens, and show it immediately for reduced-motion users.
```

## 6. Expand the homepage — greenfield tutorial pattern only

Do not use this prompt to restructure Nexus-IQ. In the existing Nexus-IQ repository, preserve its routes, transaction beats, evidence surfaces, and approved milestone scope.

```text
Remove [section name/number]; it is too similar to the previous section.

Build four to five additional homepage sections using the visual grammar already established: the same fonts, background, accent, type scale, spacing, and asymmetric editorial composition.

Hide the hero video after the second story section. For a greenfield exercise only, include an information/list section, an accessible FAQ accordion, a large closing CTA, and a footer. Add pricing only when it is a verified business requirement with approved, current terms. Vary the composition and avoid generic dashboard grids.

Run the typecheck and verify the FAQ opens and closes.
```

## 7. Correct the background and card styling — greenfield pricing example

This pricing-card prompt is tutorial-specific and is not a Nexus-IQ implementation instruction.

```text
Make the background of every solid section [sampled color].

In pricing:
- remove borders from the ordinary cards;
- retain a 1 px [approved accent token] border only on the featured middle card;
- make the feature marks for ordinary cards neutral instead of accent-colored;
- preserve the existing type scale and spacing.

Remove any other repetitive strokes or decorative borders that make the design feel generic.
```

## 8. Add one video across the closing CTA and footer

```text
Add the attached video behind the “[CTA headline]” section and let it continue behind the footer so they read as one scene.

Requirements:
- no overlay;
- edge-to-edge object-cover video;
- autoplay, muted, loop, and playsInline;
- copy and links above the media;
- remove the divider between CTA and footer;
- preserve required copyright, legal, privacy, accessibility, and terms links unless an authorized product owner explicitly approves a change;
- change any low-contrast footer headings to white;
- preserve the focal point on mobile.
```

## 9. Add a motion background to an empty editorial section

```text
Find the section containing “[existing identifying copy]” and add the attached video as its edge-to-edge background.

Do not add an overlay. If contrast is weak, first adjust text color, copy position, text shadow, or the video's object-position. Remove [surplus tiles/cards] and shorten the section so the motion asset has a clear role.
```

## 10. Make hero playback follow scroll

```text
Tie the hero video's currentTime to the user's scroll progress through the hero.

Requirements:
- wait for loaded metadata before using duration;
- map clamped hero progress from 0 to 1 onto the full video duration;
- update through requestAnimationFrame;
- use passive scroll handling;
- support reverse scrolling;
- clean up all listeners and animation frames;
- do not autoplay the scrubbed hero video;
- hold the last frame through the second section.

Respect prefers-reduced-motion with a stable fallback frame or simplified behavior.
```

## 11. Soften the video-to-page transition

```text
The transition between [video section] and [solid section] is too abrupt.

Add a gradient at the end of the pinned-video region that moves from transparent to [sampled solid background color]. The video should complete before the gradient fully covers it.

Keep text in a separate isolated stacking context so blur or blend effects cannot create a compositing rectangle behind the heading.
```

## 12. Generate remaining routes — greenfield tutorial pattern only

For Nexus-IQ, default to a regression audit of existing routes. Do not create or redesign routes without separate authorization and an approved scope.

```text
Use the approved homepage principles to build the remaining routes: [route list].

Reuse the established navigation, footer, fonts, background, accent, spacing, motion restraint, and editorial composition. Each route should have its own purpose and layout; do not merely duplicate the homepage sections.

Keep forms presentational unless a backend is already in scope. Run the typecheck and verify every route and media path.
```

## 13. Final review prompt

```text
Audit the complete site at desktop and mobile widths.

Check:
1. text contrast over every frame of every video;
2. focal-point cropping and object-position;
3. forward and reverse scroll-scrubbing;
4. the transparent-to-background gradient handoff;
5. reduced-motion behavior;
6. keyboard and expanded-state behavior for the FAQ;
7. missing routes or media;
8. inconsistent colors, fonts, borders, spacing, or icon treatment;
9. scroll/resize listener cleanup;
10. typecheck and the safe local build path after inspecting build and migration scripts.

Report each item as pass or fail. Fix only the failures while preserving the approved art direction.
```

## 14. Choose the smallest production runtime

This is a Nexus-IQ production extension, not a prompt shown in the tutorial.

```text
Audit the approved storyboard and classify the surface as one primary path:
1. DOM/CSS;
2. native scroll/view transition;
3. video;
4. shader;
5. interactive 3D.

Inspect the current dependencies before installing anything. Choose the smallest capable runtime.

For every proposed dependency, report:
- the exact visual requirement;
- native/existing alternatives considered;
- bundle and runtime cost;
- accessibility, reduced-motion, browser, and failure fallback;
- removal condition;
- verification test.

Use GSAP only for a genuinely complex synchronized pinned timeline. Use OGL for a shader-only surface. Use Three.js + React Three Fiber v9 only for genuine interactive 3D. Do not install overlapping stacks or packages for prestige.
```

## 15. Create the asset manifest

This is a Nexus-IQ production extension, not a prompt shown in the tutorial.

```text
Create or update docs/build/CINEMATIC_ASSET_MANIFEST.md for every new image, video, shader source, font, GLB, or generated asset.

Record:
- stable ID, filename, purpose, and page/section;
- origin and source/reference links;
- ownership/license status;
- generation tool/model/version, prompt, and settings when applicable;
- dimensions, duration, frame rate, codec, and original byte size;
- transformations/optimization and final byte size;
- poster/fallback;
- desktop/mobile crop notes;
- reduced-motion and accessibility behavior;
- review status;
- external service ID and rollback/delete instructions when applicable.

Do not treat generated media as evidence of product implementation or maturity.
```

## 16. Prepare an external asset brief without taking external action

This is a Nexus-IQ production extension, not a prompt shown in the tutorial.

```text
Prepare a production brief for [Blender / FLUX / Kling / Luma / Cloudinary / Mux] for [asset purpose].

Do not install desktop software, create accounts, spend credits, upload assets, configure credentials, or mutate the external service. Produce only:
- the exact asset specification;
- prompt or scene instructions;
- camera/motion/composition constraints;
- output format and budget;
- licensing/provenance requirements;
- security/data boundary;
- integration and fallback plan;
- acceptance tests.

Wait for separate authorization before any external action.
```

## 17. Validate and optimize a GLB/glTF asset

This is a Nexus-IQ production extension, not a prompt shown in the tutorial.

```text
Inspect the supplied GLB/glTF before integration.

Validate it, remove unused data, consolidate materials/draw calls where reasonable, resize textures, evaluate KTX2/Basis texture compression and Meshopt/Draco geometry compression, and preserve every node/clip name required by code.

Report original and final sizes plus the exact optimization steps. Visually inspect the optimized result in the real desktop and mobile scene. Provide a poster/static fallback and reject any optimization that causes unacceptable visual or animation damage.
```
## 18. Build an institutional research protocol

This is a Nexus-IQ production extension, not a prompt shown in the tutorial.

```text
For [research question or technical claim], create a transparent protocol before synthesis. Record the intended decision, scope, comparators, outcomes, search repositories and full queries, dates, inclusion/exclusion rules, screening method, quality rubric, extraction fields, conflicts, and synthesis method.

Use PRISMA language only if the work actually qualifies as a systematic review. Capture contradictory, negative, and null evidence. Produce a claim-linked evidence table and calibrated conclusions that distinguish observed from inferred, association from causation, and current capability from proposed architecture. Do not publish or contact external parties.
```

## 19. Build a claim-to-proof ladder

This is a Nexus-IQ production extension, not a prompt shown in the tutorial.

```text
Audit [page or claim set]. For every material claim, map: exact wording → definition → scope → maturity → mechanism → model/diagram → demonstration → evidence artifact → reproducible method → independent validation, if real.

For each evidence object state what it proves, what it does not prove, version/date, environment, assumptions, provenance, limitations, and linked claim IDs. Flag unsupported wording instead of inventing support.
```

## 20. Design an institutional explainer with progressive disclosure

This is a Nexus-IQ production extension, not a prompt shown in the tutorial.

```text
Explain [Nexus-IQ mechanism] at five depths: ten-second premise, ninety-second mechanism, five-to-ten-minute interactive explanation, thirty-minute technical treatment, and evaluator pack.

Serve executive, technical, and evaluator readers without changing the underlying truth. Preserve exact maturity and limitations. Use diagrams and interaction only when they teach a state transition, threat boundary, failure path, or proof relationship. Provide accessible static/reduced-motion alternatives.
```

## 21. Audit curiosity, urgency, and trust

This is a Nexus-IQ production extension, not a prompt shown in the tutorial.

```text
Audit [page/campaign] for qualified curiosity and ethical urgency. Each open loop must expose a precise consequential gap, provide a partial mechanism immediately, point to an inspectable proof object, and resolve on the same page or a clearly named destination.

Reject vague clickbait, fake countdowns, false scarcity, fabricated activity, invented testimonials/logos, hidden limitations, unsupported superlatives, and urgency not grounded in a real dated condition. Report pass/fail findings and rewrite only the failures in Nexus-IQ's direct, mechanism-led voice.
```

## 22. Create a claim-safe distribution plan

This is a Nexus-IQ production extension, not a prompt shown in the tutorial.

```text
Starting from [approved evidence-bearing anchor asset], create channel-specific drafts for X, LinkedIn, video, newsletter, GitHub, technical communities, and an analyst brief.

Keep claim scope, maturity, caveats, and evidence links invariant while adapting structure to each channel. Define the qualified-evaluation metric and proof-engagement events. Do not publish, schedule, send outreach, configure analytics, buy promotion, or use customer/partner names without separate authorization.
```

/**
 * Hero Recovery A1 — Direction 2 regression checks (no new deps).
 * Usage: node scripts/hero-recovery-qa.mjs [baseURL]
 * Exit 0 = all pass; non-zero = failures.
 */
import { chromium } from "playwright";

const BASE = process.argv[2] || "http://127.0.0.1:8080/";
const MIN_GAP = 8;
const results = [];

function ok(name, pass, detail = "") {
  results.push({ name, pass, detail });
  console.log(`${pass ? "PASS" : "FAIL"}  ${name}${detail ? ` — ${detail}` : ""}`);
}

async function measure(page, sel) {
  return page.evaluate((selector) => {
    const rail = document.querySelector('nav[aria-label="Transaction progress"]');
    const el = document.querySelector(selector);
    if (!el) return null;
    const e = el.getBoundingClientRect();
    if (!rail) {
      return {
        railRight: 0,
        railVisible: false,
        targetLeft: e.left,
        gap: Infinity,
      };
    }
    const r = rail.getBoundingClientRect();
    const visible = getComputedStyle(rail).display !== "none" && r.width > 0;
    return {
      railRight: r.right,
      railVisible: visible,
      targetLeft: e.left,
      gap: e.left - r.right,
    };
  }, sel);
}

async function scrollPin(page, progress) {
  await page.evaluate((p) => {
    const track = document.getElementById("intent");
    if (!track) return;
    const total = Math.max(1, track.offsetHeight - window.innerHeight);
    const top = track.getBoundingClientRect().top + window.scrollY;
    window.scrollTo(0, top + total * p);
  }, progress);
  await page.waitForTimeout(250);
}

async function overflow(page) {
  return page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1,
  );
}

/** Sequentially-focusable descendants inside a root (mirrors inert/tabindex rules). */
async function focusableDescendants(page, rootSel) {
  return page.evaluate((selector) => {
    const root = document.querySelector(selector);
    if (!root) return { exists: false, count: 0, names: [] };
    const isHidden = root.getAttribute("aria-hidden") === "true";
    const isInert = root.hasAttribute("inert");
    const candidates = root.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const names = [];
    for (const el of candidates) {
      if (el.disabled) continue;
      if (el.getAttribute("tabindex") === "-1") continue;
      const cs = getComputedStyle(el);
      if (cs.display === "none" || cs.visibility === "hidden") continue;
      // inert subtree: nothing is sequentially focusable
      if (el.closest("[inert]")) continue;
      names.push(
        (el.getAttribute("aria-label") || el.textContent || "")
          .trim()
          .slice(0, 40),
      );
    }
    return {
      exists: true,
      count: names.length,
      names,
      ariaHidden: isHidden,
      inert: isInert,
    };
  }, rootSel);
}

const browser = await chromium.launch({ args: ["--no-sandbox"] });

// ── Rail collision (desktop) ─────────────────────────────────
for (const width of [1280, 1440, 1920]) {
  const page = await browser.newPage({
    viewport: { width, height: width >= 1920 ? 1080 : 900 },
  });
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(300);

  const h = await measure(page, "#hero-headline");
  ok(
    `headline clears rail ≥${MIN_GAP}px @ ${width}`,
    h && h.railVisible && h.gap >= MIN_GAP,
    h ? `gap=${h.gap?.toFixed?.(1) ?? h.gap} left=${h.targetLeft} railR=${h.railRight}` : "missing",
  );

  await scrollPin(page, 0.4);
  const g = await measure(page, "#intent h2");
  const gapReadable = await page.locator("#intent h2").evaluate((el) => {
    const parent = el.closest("[data-narrative-layer], [style], div");
    const op = parseFloat(getComputedStyle(parent ?? el).opacity || "1");
    return op >= 0.4 && el.getBoundingClientRect().width > 0;
  });
  ok(
    `gap h2 clears rail ≥${MIN_GAP}px mid-pin @ ${width}`,
    g && g.railVisible && g.gap >= MIN_GAP && gapReadable,
    g ? `gap=${g.gap?.toFixed?.(1)} readable=${gapReadable}` : "missing",
  );

  ok(
    `no horizontal overflow @ ${width}`,
    !(await overflow(page)),
    "",
  );
  await page.close();
}

// ── Mobile overflow ──────────────────────────────────────────
for (const width of [390, 430]) {
  const page = await browser.newPage({
    viewport: { width, height: 844 },
  });
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(250);
  ok(`no horizontal overflow @ ${width}`, !(await overflow(page)));
  await scrollPin(page, 0.5);
  ok(`no horizontal overflow mid-pin @ ${width}`, !(await overflow(page)));
  await page.close();
}

// ── Structure / instrument ───────────────────────────────────
{
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
  const canvasCount = await page.locator("#intent canvas").count();
  ok("single canvas instrument in pin", canvasCount === 1, `count=${canvasCount}`);
  const instrument = await page
    .locator(
      '[data-testid="forensic-instrument"], [data-instrument="cross-section"]',
    )
    .count();
  ok("forensic instrument landmark present", instrument >= 1, `count=${instrument}`);
  const bento = await page
    .locator("#intent .sticky .grid.md\\:grid-cols-3, #intent [data-bento]")
    .count();
  ok("no bento/card grid inside sticky pin", bento === 0);
  await page.close();
}

// ── Narrative layer inert / zero focusable under aria-hidden ─
{
  const page = await browser.newPage({
    viewport: { width: 1280, height: 800 },
  });
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(300);

  // Intent state (progress ≈ 0)
  await scrollPin(page, 0.02);
  let intent = await focusableDescendants(page, '[data-narrative-layer="intent"]');
  let gap = await focusableDescendants(page, '[data-narrative-layer="gap"]');
  const intentActiveAttrs = await page.evaluate(() => ({
    intent: document.querySelector('[data-narrative-layer="intent"]')?.getAttribute("data-narrative-active"),
    gap: document.querySelector('[data-narrative-layer="gap"]')?.getAttribute("data-narrative-active"),
  }));
  ok(
    "Intent state: intent layer active with focusable CTAs",
    intentActiveAttrs.intent === "true" && intent.count >= 2,
    JSON.stringify({ intent, intentActiveAttrs }),
  );
  ok(
    "Intent state: gap layer inert / zero sequential focusables",
    intentActiveAttrs.gap === "false" && gap.count === 0 && gap.inert && gap.ariaHidden,
    JSON.stringify(gap),
  );

  // Gap / Constrain mid-pin
  await scrollPin(page, 0.4);
  intent = await focusableDescendants(page, '[data-narrative-layer="intent"]');
  gap = await focusableDescendants(page, '[data-narrative-layer="gap"]');
  const gapAttrs = await page.evaluate(() => ({
    intent: document.querySelector('[data-narrative-layer="intent"]')?.getAttribute("data-narrative-active"),
    gap: document.querySelector('[data-narrative-layer="gap"]')?.getAttribute("data-narrative-active"),
  }));
  ok(
    "Gap state: intent layer inert / zero sequential focusables",
    gapAttrs.intent === "false" && intent.count === 0 && intent.inert && intent.ariaHidden,
    JSON.stringify(intent),
  );
  ok(
    "Gap state: gap layer active (no stranded focus requirement — no CTAs)",
    gapAttrs.gap === "true",
    JSON.stringify({ gap, gapAttrs }),
  );

  // Decide — gap may still be active; any aria-hidden layer must be inert + empty focus
  await scrollPin(page, 0.68);
  intent = await focusableDescendants(page, '[data-narrative-layer="intent"]');
  gap = await focusableDescendants(page, '[data-narrative-layer="gap"]');
  const decideHiddenOk = await page.evaluate(() => {
    const layers = Array.from(
      document.querySelectorAll("[data-narrative-layer]"),
    );
    return layers.map((el) => {
      const hidden = el.getAttribute("aria-hidden") === "true";
      const inert = el.hasAttribute("inert");
      const foc = Array.from(
        el.querySelectorAll(
          'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((n) => {
        if (n.disabled || n.getAttribute("tabindex") === "-1") return false;
        if (n.closest("[inert]")) return false;
        const cs = getComputedStyle(n);
        return cs.display !== "none" && cs.visibility !== "hidden";
      });
      return {
        layer: el.getAttribute("data-narrative-layer"),
        hidden,
        inert,
        focusable: foc.length,
        ok: !hidden || (inert && foc.length === 0),
      };
    });
  });
  ok(
    "Decide state: every aria-hidden narrative layer has zero sequential focusables",
    decideHiddenOk.every((l) => l.ok) && intent.count === 0,
    JSON.stringify({ decideHiddenOk, intent, gap }),
  );

  // Emit
  await scrollPin(page, 0.9);
  intent = await focusableDescendants(page, '[data-narrative-layer="intent"]');
  gap = await focusableDescendants(page, '[data-narrative-layer="gap"]');
  const emitHiddenOk = await page.evaluate(() => {
    const layers = Array.from(
      document.querySelectorAll("[data-narrative-layer]"),
    );
    return layers.map((el) => {
      const hidden = el.getAttribute("aria-hidden") === "true";
      const inert = el.hasAttribute("inert");
      const foc = Array.from(
        el.querySelectorAll(
          'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((n) => {
        if (n.disabled || n.getAttribute("tabindex") === "-1") return false;
        if (n.closest("[inert]")) return false;
        const cs = getComputedStyle(n);
        return cs.display !== "none" && cs.visibility !== "hidden";
      });
      return {
        layer: el.getAttribute("data-narrative-layer"),
        hidden,
        inert,
        focusable: foc.length,
        ok: !hidden || (inert && foc.length === 0),
      };
    });
  });
  ok(
    "Emit state: every aria-hidden narrative layer has zero sequential focusables",
    emitHiddenOk.every((l) => l.ok) &&
      intent.count === 0 &&
      gap.count === 0 &&
      intent.inert &&
      gap.inert,
    JSON.stringify({ emitHiddenOk, intent, gap }),
  );

  // Transition: focus CTA at Intent, scroll to Gap — focus must not remain on hidden CTA
  await scrollPin(page, 0.02);
  await page.locator('[data-narrative-layer="intent"] a[href="#problem"]').focus();
  const focusedBefore = await page.evaluate(
    () => document.activeElement?.textContent?.trim().slice(0, 40) ?? null,
  );
  await scrollPin(page, 0.4);
  await page.waitForTimeout(100);
  const focusAfter = await page.evaluate(() => {
    const el = document.activeElement;
    if (!el || el === document.body) return { name: null, inHidden: false };
    const hidden = el.closest('[aria-hidden="true"], [inert]');
    return {
      name: (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 40),
      inHidden: !!hidden,
    };
  });
  ok(
    "transition Intent→Gap does not strand focus in hidden layer",
    focusedBefore && !focusAfter.inHidden,
    JSON.stringify({ focusedBefore, focusAfter }),
  );

  // Active CTAs reachable at Intent
  await scrollPin(page, 0.02);
  await page.locator("body").click({ position: { x: 2, y: 2 } });
  let foundCta = false;
  for (let i = 0; i < 35; i++) {
    await page.keyboard.press("Tab");
    const name = await page.evaluate(
      () =>
        (document.activeElement?.getAttribute("aria-label") ||
          document.activeElement?.textContent ||
          "")
          .trim()
          .slice(0, 40),
    );
    if (/control gap|commit boundary|Explore the model|implementation maturity/i.test(name)) {
      foundCta = true;
      break;
    }
  }
  ok("active Intent CTAs remain keyboard reachable", foundCta);

  await page.close();
}

// ── DemoPlayer rail collision (desktop) ──────────────────────
for (const width of [1280, 1440, 1920]) {
  const page = await browser.newPage({
    viewport: { width, height: width >= 1920 ? 1080 : 900 },
  });
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
  await page.locator("#live-demo").scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);

  const geo = await page.evaluate(() => {
    const rail = document.querySelector('nav[aria-label="Transaction progress"]');
    if (!rail) return { error: "no rail" };
    const r = rail.getBoundingClientRect();
    const railVisible =
      getComputedStyle(rail).display !== "none" && r.width > 0;
    const railRight = r.right;
    const mode = rail.getAttribute("data-rail-mode") || document.documentElement.dataset.txnRail;
    const heading = document.getElementById("demo-heading");
    const commit = document.querySelector('#live-demo [data-demo-path="success"]');
    const abort = document.querySelector('#live-demo [data-demo-path="abort"]');
    const phase =
      document.querySelector('#live-demo button[aria-label*="Seek"]') ||
      document.querySelector('#live-demo input[type="range"]') ||
      Array.from(document.querySelectorAll("#live-demo button")).find((b) =>
        /prop|stag|auth|val|cmt|emit/i.test(b.textContent || ""),
      );

    function leftOf(el) {
      if (!el) return null;
      return el.getBoundingClientRect().left;
    }
    function underRail(el) {
      if (!el || !railVisible) return false;
      const e = el.getBoundingClientRect();
      // Overlap with rail box
      return e.left < railRight - 1 && e.right > r.left + 1 && e.top < r.bottom && e.bottom > r.top;
    }

    return {
      railRight,
      railVisible,
      mode,
      headingLeft: leftOf(heading),
      commitLeft: leftOf(commit),
      abortLeft: leftOf(abort),
      phaseLeft: leftOf(phase),
      under: {
        heading: underRail(heading),
        commit: underRail(commit),
        abort: underRail(abort),
        phase: underRail(phase),
      },
      gaps: {
        heading: heading ? leftOf(heading) - railRight : null,
        commit: commit ? leftOf(commit) - railRight : null,
        abort: abort ? leftOf(abort) - railRight : null,
        phase: phase ? leftOf(phase) - railRight : null,
      },
    };
  });

  const minGap = 8;
  ok(
    `Demo handoff: rail spine (not full) @ ${width}`,
    geo.mode === "spine" || (geo.railVisible && geo.railRight < 80),
    JSON.stringify({ mode: geo.mode, railRight: geo.railRight }),
  );
  ok(
    `Demo heading clears rail ≥${minGap}px @ ${width}`,
    geo.gaps?.heading != null && geo.gaps.heading >= minGap,
    JSON.stringify(geo.gaps),
  );
  ok(
    `Demo Commit control clears rail ≥${minGap}px @ ${width}`,
    geo.gaps?.commit != null && geo.gaps.commit >= minGap,
    JSON.stringify(geo.gaps),
  );
  ok(
    `Demo Abort control clears rail ≥${minGap}px @ ${width}`,
    geo.gaps?.abort != null && geo.gaps.abort >= minGap,
    JSON.stringify(geo.gaps),
  );
  ok(
    `Demo phase/pipeline control clears rail ≥${minGap}px @ ${width}`,
    geo.gaps?.phase != null && geo.gaps.phase >= minGap,
    JSON.stringify(geo.gaps),
  );
  ok(
    `Demo no pointer target under rail @ ${width}`,
    geo.under &&
      !geo.under.heading &&
      !geo.under.commit &&
      !geo.under.abort &&
      !geo.under.phase,
    JSON.stringify(geo.under),
  );

  // Focus Commit — must not be visually covered by rail
  const commitBtn = page.locator('#live-demo [data-demo-path="success"]');
  await commitBtn.focus();
  const focusCovered = await page.evaluate(() => {
    const el = document.activeElement;
    const rail = document.querySelector('nav[aria-label="Transaction progress"]');
    if (!el || !rail) return false;
    const e = el.getBoundingClientRect();
    const r = rail.getBoundingClientRect();
    return e.left < r.right - 1 && e.right > r.left && e.top < r.bottom && e.bottom > r.top;
  });
  ok(
    `Demo focused control not hidden by rail @ ${width}`,
    !focusCovered,
    `focusCovered=${focusCovered}`,
  );

  await page.close();
}

// ── Mobile Decide phase (real progress mapping) ──────────────
for (const width of [390, 430]) {
  const height = width === 390 ? 844 : 932;
  const page = await browser.newPage({ viewport: { width, height } });
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(250);
  // Scroll to Decide band (progress ≈ 0.68)
  await scrollPin(page, 0.68);
  await page.waitForTimeout(300);
  const decide = await page.evaluate(() => {
    const pin = document.getElementById("intent");
    const phaseEl = document.querySelector("[data-testid='operating-model-phase']");
    const dual = document.querySelector("[data-testid='dual-exit-chrome']");
    return {
      phaseId: pin?.getAttribute("data-pin-phase"),
      progress: pin?.getAttribute("data-pin-progress"),
      phaseLabel: phaseEl?.textContent?.trim(),
      dualPresent: !!dual,
      dualText: dual?.textContent?.replace(/\s+/g, " ").trim() ?? "",
      abortVisible: !!dual && /Abort/i.test(dual.textContent || ""),
      commitVisible: !!dual && /Commit/i.test(dual.textContent || ""),
    };
  });
  ok(
    `mobile Decide phase id @ ${width}`,
    decide.phaseId === "decide",
    JSON.stringify(decide),
  );
  ok(
    `mobile Decide label Commit·Abort @ ${width}`,
    /commit|abort|decide/i.test(decide.phaseLabel || ""),
    JSON.stringify(decide),
  );
  ok(
    `mobile Decide dual exits readable @ ${width}`,
    decide.dualPresent && decide.abortVisible && decide.commitVisible,
    JSON.stringify(decide),
  );
  ok(`no horizontal overflow mid-decide @ ${width}`, !(await overflow(page)));
  await page.close();
}

// ── Motif handoff: capsule + demo heading same viewport ──────
{
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(200);
  // Use Playwright scrollIntoView with block:start on the handoff root
  const handoffEl = page.locator("[data-testid='scene-handoff']");
  await handoffEl.scrollIntoViewIfNeeded();
  await page.evaluate(() => {
    const handoff = document.querySelector("[data-testid='scene-handoff']");
    if (!handoff) return;
    handoff.scrollIntoView({ block: "start", inline: "nearest" });
  });
  await page.waitForTimeout(400);
  // Nudge so capsule stays on screen if sticky chrome pushed it
  await page.evaluate(() => {
    const cap = document.querySelector("[data-testid='handoff-capsule']");
    if (!cap) return;
    const top = cap.getBoundingClientRect().top;
    if (top < 8 || top > 120) {
      window.scrollBy(0, top - 48);
    }
  });
  await page.waitForTimeout(200);
  const handoff = await page.evaluate(() => {
    const cap = document.querySelector("[data-testid='handoff-capsule']");
    const heading = document.getElementById("demo-heading");
    const player = document.querySelector("#live-demo [data-demo-scenario]");
    const vh = window.innerHeight;
    const cr = cap?.getBoundingClientRect();
    const hr = heading?.getBoundingClientRect();
    const pr = player?.getBoundingClientRect();
    return {
      scrollY: window.scrollY,
      capsuleInView: !!cr && cr.top < vh && cr.bottom > 0,
      headingInView: !!hr && hr.top < vh && hr.bottom > 0,
      headingFullyVisible: !!hr && hr.top >= -4 && hr.bottom <= vh + 4,
      playerTopInView: !!pr && pr.top < vh,
      capsuleTop: cr?.top ?? null,
      headingTop: hr?.top ?? null,
      headingBottom: hr?.bottom ?? null,
      playerTop: pr?.top ?? null,
    };
  });
  ok(
    "handoff capsule and demo heading share viewport",
    handoff.capsuleInView && handoff.headingInView,
    JSON.stringify(handoff),
  );
  ok(
    "demo heading fully visible at handoff",
    handoff.headingFullyVisible,
    JSON.stringify(handoff),
  );
  ok(
    "DemoPlayer top enters same handoff viewport",
    handoff.playerTopInView,
    JSON.stringify(handoff),
  );
  await page.close();
}

// ── Reduced motion: first paint + no rAF loop ────────────────
{
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  });

  // Capture first-paint signals via init script before navigation
  await page.addInitScript(() => {
    window.__rmProbe = {
      firstReducedAttr: null,
      firstProgress: null,
      rafScheduledBeforePaint: 0,
      rafIds: [],
    };
    const origRaf = window.requestAnimationFrame.bind(window);
    window.requestAnimationFrame = (cb) => {
      window.__rmProbe.rafScheduledBeforePaint += 1;
      const id = origRaf((t) => {
        cb(t);
      });
      window.__rmProbe.rafIds.push(id);
      return id;
    };
  });

  await page.goto(BASE, { waitUntil: "domcontentloaded", timeout: 60000 });

  // Immediately on first interactive frame after DOM
  const firstFrame = await page.evaluate(() => {
    const pin = document.getElementById("intent");
    return {
      reducedAttr: pin?.getAttribute("data-reduced-motion"),
      progress: pin?.getAttribute("data-pin-progress"),
      height: pin ? getComputedStyle(pin).height : null,
      abort: !!Array.from(pin?.querySelectorAll("*") || []).find(
        (el) => el.textContent?.trim() === "Abort",
      ),
      commit: !!Array.from(pin?.querySelectorAll("*") || []).find(
        (el) => el.textContent?.trim() === "Commit",
      ),
      capsule: !!document.querySelector(
        '#intent [data-testid="proof-capsule-silhouette"]',
      ),
    };
  });

  ok(
    "reduced-motion first paint: data-reduced-motion=true",
    firstFrame.reducedAttr === "true",
    JSON.stringify(firstFrame),
  );
  ok(
    "reduced-motion first paint: composed progress ≥0.9 (Decide+Emit)",
    firstFrame.progress != null && Number(firstFrame.progress) >= 0.9,
    JSON.stringify(firstFrame),
  );
  ok(
    "reduced-motion first paint: dual exits + capsule present",
    firstFrame.abort && firstFrame.commit && firstFrame.capsule,
    JSON.stringify(firstFrame),
  );

  await page.waitForTimeout(400);

  const lifecycle = await page.evaluate(() => {
    const d = window.__nexusCanvasDebug;
    return {
      hasDebug: !!d,
      rafActive: d?.rafActive ?? null,
      paused: d?.isPaused?.() ?? d?.paused ?? null,
      probeRaf: window.__rmProbe?.rafScheduledBeforePaint ?? null,
    };
  });

  // In DEV, debug API exists; rafActive must be false under reduced (no animation loop)
  ok(
    "reduced-motion: canvas animation loop not active",
    lifecycle.rafActive === false || lifecycle.rafActive === null,
    JSON.stringify(lifecycle),
  );

  ok(
    "reduced-motion: hero headline readable",
    /commit boundary/i.test(await page.locator("#hero-headline").innerText()),
  );
  ok(
    "reduced-motion: Abort exit label (exact)",
    (await page.locator("#intent").getByText("Abort", { exact: true }).count()) >= 1,
  );
  ok(
    "reduced-motion: Commit exit label (exact, not headline)",
    (await page.locator("#intent").getByText("Commit", { exact: true }).count()) >= 1,
  );
  ok(
    "reduced-motion: dual-exit shape markers present",
    (await page.locator("#intent .rotate-45, #intent .bg-oxide").count()) >= 1,
  );
  const capsule = await page
    .locator(
      '#intent [data-testid="proof-capsule-silhouette"], #intent [data-instrument-node="capsule"]',
    )
    .count();
  ok("reduced-motion: capsule silhouette present", capsule >= 1, `count=${capsule}`);
  await page.close();
}

// ── DemoPlayer: state-change assertions (not static copy) ────
{
  const page = await browser.newPage({
    viewport: { width: 1280, height: 900 },
  });
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
  await page.locator("#live-demo").scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);

  const commitBtn = page.getByRole("button", { name: /commit path/i });
  const abortBtn = page.getByRole("button", { name: /abort path/i });
  ok("DemoPlayer Commit path control present", (await commitBtn.count()) > 0);
  ok("DemoPlayer Abort path control present", (await abortBtn.count()) > 0);

  // Default is success; flip to abort first so we can prove a transition
  const before = await page.evaluate(() => {
    const root = document.querySelector("#live-demo [data-demo-scenario]");
    const commit = document.querySelector('#live-demo [data-demo-path="success"]');
    const abort = document.querySelector('#live-demo [data-demo-path="abort"]');
    return {
      scenario: root?.getAttribute("data-demo-scenario"),
      commitPressed: commit?.getAttribute("aria-pressed"),
      abortPressed: abort?.getAttribute("aria-pressed"),
    };
  });

  await abortBtn.click();
  await page.waitForTimeout(150);
  const afterAbort = await page.evaluate(() => {
    const root = document.querySelector("#live-demo [data-demo-scenario]");
    const commit = document.querySelector('#live-demo [data-demo-path="success"]');
    const abort = document.querySelector('#live-demo [data-demo-path="abort"]');
    return {
      scenario: root?.getAttribute("data-demo-scenario"),
      commitPressed: commit?.getAttribute("aria-pressed"),
      abortPressed: abort?.getAttribute("aria-pressed"),
    };
  });
  ok(
    "DemoPlayer Abort path changes scenario state",
    afterAbort.scenario === "abort" &&
      afterAbort.abortPressed === "true" &&
      afterAbort.commitPressed === "false" &&
      (before.scenario !== "abort" || before.abortPressed !== "true"),
    JSON.stringify({ before, afterAbort }),
  );

  await commitBtn.click();
  await page.waitForTimeout(150);
  const afterCommit = await page.evaluate(() => {
    const root = document.querySelector("#live-demo [data-demo-scenario]");
    const commit = document.querySelector('#live-demo [data-demo-path="success"]');
    const abort = document.querySelector('#live-demo [data-demo-path="abort"]');
    return {
      scenario: root?.getAttribute("data-demo-scenario"),
      commitPressed: commit?.getAttribute("aria-pressed"),
      abortPressed: abort?.getAttribute("aria-pressed"),
    };
  });
  ok(
    "DemoPlayer Commit path changes scenario state",
    afterCommit.scenario === "success" &&
      afterCommit.commitPressed === "true" &&
      afterCommit.abortPressed === "false" &&
      afterAbort.scenario === "abort",
    JSON.stringify({ afterAbort, afterCommit }),
  );

  await page.close();
}

// ── Canvas pause + debug-only debug API ──────────────────────
{
  const page = await browser.newPage({
    viewport: { width: 1280, height: 800 },
  });
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(400);
  const atTop = await page.evaluate(() => {
    const d = window.__nexusCanvasDebug;
    return d
      ? { paused: d.isPaused(), rafActive: d.rafActive, hasApi: true }
      : { hasApi: false };
  });
  // Dev server exposes debug; production builds must not (checked offline if needed)
  ok(
    "canvas exposes pause debug API in dev",
    atTop.hasApi === true,
    JSON.stringify(atTop),
  );
  ok(
    "canvas not paused while pin in view",
    atTop.hasApi && atTop.paused === false,
    JSON.stringify(atTop),
  );

  await page.evaluate(() => {
    const pin = document.getElementById("intent");
    if (pin) window.scrollTo(0, pin.offsetTop + pin.offsetHeight + 400);
  });
  await page.waitForTimeout(600);
  const past = await page.evaluate(() => {
    const d = window.__nexusCanvasDebug;
    const c = document.querySelector("#intent canvas");
    const r = c?.getBoundingClientRect();
    return {
      paused: d?.isPaused?.() ?? null,
      rafActive: d?.rafActive ?? null,
      canvasTop: r?.top ?? null,
      canvasBottom: r?.bottom ?? null,
      vh: window.innerHeight,
    };
  });
  ok(
    "canvas pauses when scrolled offscreen",
    past.paused === true,
    JSON.stringify(past),
  );

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);
  const back = await page.evaluate(() => {
    const d = window.__nexusCanvasDebug;
    return { paused: d?.isPaused?.() ?? null, rafActive: d?.rafActive ?? null };
  });
  ok(
    "canvas resumes when returned to view",
    back.paused === false,
    JSON.stringify(back),
  );
  await page.close();
}

await browser.close();

const failed = results.filter((r) => !r.pass);
console.log(`\n${results.length - failed.length}/${results.length} passed`);
if (failed.length) {
  console.log("Failures:");
  for (const f of failed) console.log(`  - ${f.name}: ${f.detail}`);
  process.exit(1);
}
process.exit(0);

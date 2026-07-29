/**
 * Keyboard matrix + console evidence for VISUAL_ACCEPTANCE evidence recovery.
 * Read-only — no product edits.
 */
import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const BASE = process.argv[2] || "http://127.0.0.1:8080/";
const OUT = "/workspace/artifacts/keyboard-console-evidence.json";
const report = {
  console: {},
  keyboard: {},
  focus: {},
  overflow: {},
  notes: [],
};

function collectConsole(page, bag) {
  page.on("console", (msg) => {
    if (msg.type() === "error" || msg.type() === "warning") {
      bag.push({ type: msg.type(), text: msg.text() });
    }
  });
  page.on("pageerror", (err) => {
    bag.push({ type: "pageerror", text: String(err.message || err) });
  });
}

async function focusRingVisible(page) {
  return page.evaluate(() => {
    const el = document.activeElement;
    if (!el || el === document.body) return { hasFocus: false };
    const cs = getComputedStyle(el);
    const outline = cs.outlineStyle !== "none" && parseFloat(cs.outlineWidth || "0") > 0;
    const ring =
      cs.boxShadow.includes("0 0") ||
      cs.outlineOffset !== "0px" ||
      el.className.toString().includes("focus") ||
      outline;
    // also check :focus-visible via matches
    const focusVisible = el.matches?.(":focus-visible") ?? false;
    const rect = el.getBoundingClientRect();
    return {
      hasFocus: true,
      tag: el.tagName,
      role: el.getAttribute("role"),
      name: (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 60),
      outline: `${cs.outlineStyle} ${cs.outlineWidth} ${cs.outlineColor}`,
      boxShadow: cs.boxShadow.slice(0, 80),
      focusVisible,
      ringLikely: ring || focusVisible,
      rect: { t: rect.top, l: rect.left, w: rect.width, h: rect.height },
    };
  });
}

async function tabUntil(page, predicate, max = 40) {
  const path = [];
  for (let i = 0; i < max; i++) {
    await page.keyboard.press("Tab");
    await page.waitForTimeout(40);
    const info = await focusRingVisible(page);
    path.push(info);
    if (predicate(info)) return { found: true, path, focus: info };
  }
  return { found: false, path, focus: path[path.length - 1] || null };
}

async function ariaHiddenFocusables(page) {
  return page.evaluate(() => {
    const hidden = Array.from(document.querySelectorAll('[aria-hidden="true"]'));
    const bad = [];
    for (const root of hidden) {
      const foc = root.querySelectorAll(
        'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      for (const el of foc) {
        if (el.disabled || el.getAttribute("tabindex") === "-1") continue;
        // check if actually focusable (not display:none)
        const cs = getComputedStyle(el);
        if (cs.display === "none" || cs.visibility === "hidden") continue;
        // opacity 0 still focusable — report
        bad.push({
          tag: el.tagName,
          name: (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 50),
          opacity: cs.opacity,
          inPin: !!el.closest("#intent"),
        });
      }
    }
    return bad;
  });
}

const browser = await chromium.launch({ args: ["--no-sandbox"] });

// ── 1. Initial load console ─────────────────────────────────
{
  const errors = [];
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  collectConsole(page, errors);
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(500);
  report.console.initialLoad = { count: errors.length, events: errors };
  await page.close();
}

// ── 2. Complete pinned scroll console ───────────────────────
{
  const errors = [];
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  collectConsole(page, errors);
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
  const steps = [0, 0.15, 0.3, 0.4, 0.55, 0.68, 0.8, 0.9, 1.0, 1.1];
  for (const p of steps) {
    await page.evaluate((prog) => {
      const track = document.getElementById("intent");
      if (!track) return;
      const total = Math.max(1, track.offsetHeight - window.innerHeight);
      const top = track.getBoundingClientRect().top + window.scrollY;
      window.scrollTo(0, top + total * prog);
    }, p);
    await page.waitForTimeout(120);
  }
  report.console.pinnedScroll = { count: errors.length, events: errors, steps };
  await page.close();
}

// ── 3. DemoPlayer Commit / Abort console ────────────────────
{
  const errors = [];
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  collectConsole(page, errors);
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
  await page.locator("#live-demo").scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  const commitBtn = page.getByRole("button", { name: /commit path/i });
  await commitBtn.click();
  await page.waitForTimeout(200);
  report.console.demoCommit = {
    count: errors.length,
    events: [...errors],
    demoSnippet: (await page.locator("#live-demo").innerText()).slice(0, 120),
  };
  const abortBtn = page.getByRole("button", { name: /abort path/i });
  await abortBtn.click();
  await page.waitForTimeout(200);
  report.console.demoAbort = {
    count: errors.length,
    events: [...errors],
    demoSnippet: (await page.locator("#live-demo").innerText()).slice(0, 120),
  };
  await page.close();
}

// ── 4. Reduced-motion reload console ────────────────────────
{
  const errors = [];
  const page = await browser.newPage({
    viewport: { width: 1280, height: 800 },
    reducedMotion: "reduce",
  });
  collectConsole(page, errors);
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(400);
  report.console.reducedMotion = {
    count: errors.length,
    events: errors,
    headline: await page.locator("#hero-headline").innerText().catch(() => null),
  };
  await page.close();
}

// ── 5. Mobile viewport console ──────────────────────────────
{
  const errors = [];
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  collectConsole(page, errors);
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(400);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 3));
  await page.waitForTimeout(300);
  report.console.mobile390 = { count: errors.length, events: errors };
  const ov = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1,
  );
  report.overflow.mobile390 = { hasHorizontalOverflow: ov };
  await page.close();
}

// ── Keyboard matrix ─────────────────────────────────────────
{
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(300);

  // Start from body
  await page.locator("body").click({ position: { x: 5, y: 5 } });

  // Header navigation
  const header = await tabUntil(
    page,
    (f) =>
      f.hasFocus &&
      (/system|evidence|security|research|developers|change|maturity|nexus/i.test(f.name || "") ||
        f.tag === "A"),
    25,
  );
  report.keyboard.headerNav = {
    reached: header.found,
    focus: header.focus,
    samplePath: header.path.slice(0, 8),
  };

  // Continue tabs looking for hero CTAs
  const heroCta = await tabUntil(
    page,
    (f) =>
      f.hasFocus &&
      (/see the boundary|explore|demo|commit|abort|view|start/i.test(f.name || "") ||
        (f.tag === "A" || f.tag === "BUTTON")),
    30,
  );
  report.keyboard.heroCTAs = {
    reached: heroCta.found,
    focus: heroCta.focus,
  };

  // Focus visibility sample on current focus
  report.focus.sampleOnActive = await focusRingVisible(page);

  // Scroll to demo and tab into DemoPlayer
  await page.locator("#live-demo").scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  await page.locator("#live-demo").focus().catch(() => {});
  // click container then tab
  await page.locator("#live-demo").click({ position: { x: 20, y: 20 } }).catch(() => {});
  const demoCommit = await tabUntil(
    page,
    (f) => f.hasFocus && /commit path/i.test(f.name || ""),
    40,
  );
  report.keyboard.demoCommitControl = {
    reached: demoCommit.found,
    focus: demoCommit.focus,
  };
  if (demoCommit.found) {
    await page.keyboard.press("Enter");
    await page.waitForTimeout(150);
    report.keyboard.demoCommitActivated = {
      snippet: (await page.locator("#live-demo").innerText()).slice(0, 100),
    };
  }

  const demoAbort = await tabUntil(
    page,
    (f) => f.hasFocus && /abort path/i.test(f.name || ""),
    20,
  );
  report.keyboard.demoAbortControl = {
    reached: demoAbort.found,
    focus: demoAbort.focus,
  };
  if (demoAbort.found) {
    await page.keyboard.press("Enter");
    await page.waitForTimeout(150);
    report.keyboard.demoAbortActivated = {
      snippet: (await page.locator("#live-demo").innerText()).slice(0, 100),
    };
  }

  // Scrubber / phase controls if any
  const phaseControls = await page.evaluate(() => {
    const demo = document.getElementById("live-demo");
    if (!demo) return [];
    return Array.from(
      demo.querySelectorAll('button, [role="slider"], input[type="range"], [role="tab"]'),
    ).map((el) => ({
      tag: el.tagName,
      role: el.getAttribute("role"),
      name: (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 50),
      tabIndex: el.tabIndex,
    }));
  });
  report.keyboard.demoPhaseControls = phaseControls;

  // Rail/spine — is it keyboard reachable?
  const railInfo = await page.evaluate(() => {
    const rail = document.querySelector('nav[aria-label="Transaction progress"]');
    if (!rail) return { present: false };
    const links = Array.from(rail.querySelectorAll("a, button, [tabindex]"));
    return {
      present: true,
      interactiveCount: links.length,
      items: links.slice(0, 8).map((el) => ({
        tag: el.tagName,
        name: (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 40),
        tabIndex: el.tabIndex,
      })),
    };
  });
  report.keyboard.transactionRail = railInfo;

  // Hero Commit/Abort labels in pin (may be non-interactive chrome)
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(200);
  const pinExits = await page.evaluate(() => {
    const pin = document.getElementById("intent");
    if (!pin) return null;
    const abort = Array.from(pin.querySelectorAll("*")).filter(
      (el) => el.childNodes.length && el.textContent?.trim() === "Abort",
    );
    const commit = Array.from(pin.querySelectorAll("*")).filter(
      (el) => el.childNodes.length && el.textContent?.trim() === "Commit",
    );
    const describe = (els) =>
      els.slice(0, 3).map((el) => ({
        tag: el.tagName,
        tabIndex: el.tabIndex,
        role: el.getAttribute("role"),
        interactive: el.matches("a,button,input,[tabindex]:not([tabindex='-1'])"),
      }));
    return { abort: describe(abort), commit: describe(commit) };
  });
  report.keyboard.heroCommitAbortChrome = pinExits;

  // aria-hidden focusables
  report.focus.ariaHiddenFocusables = await ariaHiddenFocusables(page);
  report.focus.ariaHiddenFocusableCount = report.focus.ariaHiddenFocusables.length;

  // Focus-visible CSS check: force :focus-visible via keyboard
  await page.locator("body").click({ position: { x: 2, y: 2 } });
  await page.keyboard.press("Tab");
  await page.waitForTimeout(50);
  report.focus.afterFirstTab = await focusRingVisible(page);

  await page.close();
}

// ── Rail + hero CTA keyboard path from top ──────────────────
{
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 60000 });
  // Build ordered tab order names for first 30 stops
  await page.locator("body").click({ position: { x: 2, y: 2 } });
  const order = [];
  for (let i = 0; i < 30; i++) {
    await page.keyboard.press("Tab");
    await page.waitForTimeout(30);
    const info = await focusRingVisible(page);
    if (info.hasFocus) {
      order.push({
        i,
        tag: info.tag,
        name: info.name,
        focusVisible: info.focusVisible,
        ringLikely: info.ringLikely,
      });
    }
  }
  report.keyboard.tabOrderFirst30 = order;
  await page.close();
}

await browser.close();
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
console.log("\nWROTE", OUT);

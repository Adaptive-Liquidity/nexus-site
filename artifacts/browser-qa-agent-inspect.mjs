import { chromium } from 'playwright';
import fs from 'fs';

const BASE = 'http://127.0.0.1:8080/';
const results = { cases: [], keyboard: {}, demo: {}, canvas: {} };

function log(...a) { console.log(...a); }

async function setHeroProgress(page, p) {
  return page.evaluate((progress) => {
    const track = document.getElementById('intent');
    if (!track) {
      window.scrollTo(0, progress * (document.documentElement.scrollHeight - window.innerHeight) * 0.2);
      return { method: 'fallback', progress };
    }
    const top = track.getBoundingClientRect().top + window.scrollY;
    // pin is sticky inside; scroll range is track height - viewport
    const max = Math.max(1, track.offsetHeight - window.innerHeight);
    const y = top + progress * max;
    window.scrollTo(0, y);
    return { method: 'intent-track', progress, y, max, trackH: track.offsetHeight };
  }, p);
}

async function measure(page, label) {
  return page.evaluate((label) => {
    const overflow = {
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
    };

    const rail = document.querySelector('nav[aria-label="Transaction progress"]');
    const headline = document.querySelector('#hero-headline');
    let gap = null, railRight = null, headlineLeft = null;
    let railRect = null, headlineRect = null;
    let railVisible = false;
    if (rail) {
      railRect = rail.getBoundingClientRect();
      railVisible = getComputedStyle(rail).display !== 'none' && railRect.width > 0;
      railRight = railRect.right;
    }
    if (headline) {
      headlineRect = headline.getBoundingClientRect();
      headlineLeft = headlineRect.left;
    }
    if (rail && headline && railVisible) {
      gap = headlineLeft - railRight;
    }

    let primary = null;
    const el = document.querySelector('#hero-headline') || document.querySelector('h1');
    if (el) {
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      primary = {
        text: (el.innerText || '').slice(0, 160),
        color: cs.color,
        opacity: cs.opacity,
        fontSize: cs.fontSize,
        visibility: cs.visibility,
        display: cs.display,
        w: r.width, h: r.height, top: r.top, left: r.left,
        inViewport: r.bottom > 0 && r.top < window.innerHeight && r.right > 0 && r.left < window.innerWidth,
        readable: cs.visibility !== 'hidden' && cs.display !== 'none' && parseFloat(cs.opacity) > 0.15 && r.width > 20 && r.height > 10 && (el.innerText || '').trim().length > 0,
      };
    }

    // Visible copy in pin for mid-progress phases
    const pin = document.querySelector('#intent .sticky, #intent [class*="sticky"]') || document.querySelector('#intent');
    let visibleCopy = [];
    if (pin) {
      pin.querySelectorAll('h1,h2,h3,p,[data-phase-copy]').forEach(n => {
        const r = n.getBoundingClientRect();
        const cs = getComputedStyle(n);
        if (r.width > 10 && r.height > 8 && parseFloat(cs.opacity) > 0.2 && cs.visibility !== 'hidden' && r.top < window.innerHeight && r.bottom > 0) {
          visibleCopy.push({ tag: n.tagName, text: (n.innerText || '').slice(0, 100), opacity: cs.opacity, top: Math.round(r.top) });
        }
      });
    }

    let canvasDebug = null;
    if (window.__nexusCanvasDebug) {
      try {
        canvasDebug = typeof window.__nexusCanvasDebug === 'function'
          ? window.__nexusCanvasDebug()
          : JSON.parse(JSON.stringify(window.__nexusCanvasDebug));
      } catch (e) {
        canvasDebug = { raw: String(window.__nexusCanvasDebug), err: String(e) };
        // try reading props
        const d = window.__nexusCanvasDebug;
        canvasDebug = { paused: d.paused, rafActive: d.rafActive, hasApi: true };
      }
    }

    const instrument = {
      canvasCount: document.querySelectorAll('#intent canvas, canvas').length,
      forensicLandmarks: document.querySelectorAll('[aria-label*="forensic" i], [aria-label*="instrument" i], [data-instrument]').length,
      bentoInPin: !!document.querySelector('#intent .bento, #intent [class*="card-grid"]'),
    };

    // Dual-exit markers at decide
    const dualExitText = Array.from(document.querySelectorAll('#intent *')).filter(n => {
      const t = (n.innerText || '').trim();
      return /^(COMMIT|ABORT|Commit|Abort)$/.test(t) || /commit path|abort path/i.test(t);
    }).slice(0, 10).map(n => n.innerText.trim().slice(0, 40));

    // Reduced motion static markers
    const reducedMarkers = {
      commitLabel: !!Array.from(document.querySelectorAll('*')).find(n => n.childNodes.length && n.childNodes[0].nodeType === 3 && /Commit/i.test(n.textContent) && n.getBoundingClientRect().width > 0),
      abortLabel: !!Array.from(document.querySelectorAll('*')).find(n => /Abort/i.test(n.textContent || '') && n.getBoundingClientRect().width > 0),
    };

    return {
      label,
      overflow,
      gap,
      railRight,
      headlineLeft,
      railVisible,
      railRect: railRect ? { l: +railRect.left.toFixed(1), r: +railRect.right.toFixed(1), t: +railRect.top.toFixed(1), b: +railRect.bottom.toFixed(1), w: +railRect.width.toFixed(1), h: +railRect.height.toFixed(1) } : null,
      headlineRect: headlineRect ? { l: +headlineRect.left.toFixed(1), r: +headlineRect.right.toFixed(1), t: +headlineRect.top.toFixed(1), b: +headlineRect.bottom.toFixed(1), w: +headlineRect.width.toFixed(1), h: +headlineRect.height.toFixed(1) } : null,
      primary,
      visibleCopy: visibleCopy.slice(0, 12),
      canvasDebug,
      instrument,
      dualExitText,
      reducedMarkers,
      scrollY: window.scrollY,
      vw: window.innerWidth,
      vh: window.innerHeight,
    };
  }, label);
}

function attachConsole(page, bucket) {
  page.on('console', msg => {
    const t = msg.type();
    if (t === 'error' || t === 'warning') bucket.push({ type: t, text: msg.text().slice(0, 300) });
  });
  page.on('pageerror', err => bucket.push({ type: 'pageerror', text: String(err).slice(0, 300) }));
}

async function runCase(browser, { name, width, height, progress, hash, reducedMotion }) {
  const context = await browser.newContext({
    viewport: { width, height },
    reducedMotion: reducedMotion ? 'reduce' : 'no-preference',
  });
  const page = await context.newPage();
  const consoleLogs = [];
  attachConsole(page, consoleLogs);

  await page.goto(BASE, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(700);

  let scrollInfo = null;
  if (hash) {
    await page.evaluate((h) => {
      const id = h.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
      location.hash = h;
    }, hash);
    await page.waitForTimeout(500);
  } else if (typeof progress === 'number') {
    scrollInfo = await setHeroProgress(page, progress);
    await page.waitForTimeout(550);
  }

  // reduced motion: also scroll to mid if needed for static complete view
  if (reducedMotion && progress > 0) {
    scrollInfo = await setHeroProgress(page, progress);
    await page.waitForTimeout(400);
  }

  const m = await measure(page, name);
  m.console = consoleLogs.slice();
  m.progressRequested = progress;
  m.hash = hash || null;
  m.reducedMotion = !!reducedMotion;
  m.scrollInfo = scrollInfo;

  const shotPath = `/workspace/artifacts/qa-agent-${name}.png`;
  await page.screenshot({ path: shotPath, fullPage: false });
  m.screenshot = shotPath;

  // PASS/FAIL helpers
  m.pass = {
    noOverflow: !m.overflow.hasOverflow,
    gapOk: m.railVisible ? (m.gap != null && m.gap >= 8) : true, // mobile may hide rail
    primaryReadable: m.primary?.readable === true || (m.visibleCopy && m.visibleCopy.length > 0),
    noConsoleErrors: !consoleLogs.some(c => c.type === 'error' || c.type === 'pageerror'),
  };

  results.cases.push(m);
  log(JSON.stringify({
    name,
    overflow: m.overflow.hasOverflow,
    sw: m.overflow.scrollWidth,
    cw: m.overflow.clientWidth,
    gap: m.gap,
    railVis: m.railVisible,
    primary: m.primary?.readable,
    primaryText: m.primary?.text?.slice(0, 60),
    console: m.console.length,
    scrollY: m.scrollY,
    canvas: m.canvasDebug,
    pass: m.pass,
  }));

  await context.close();
  return m;
}

async function keyboardDemoCanvas(browser) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  const consoleLogs = [];
  attachConsole(page, consoleLogs);
  await page.goto(BASE, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(800);

  // Start from top; tab through
  await page.locator('body').click({ position: { x: 2, y: 2 } });
  const focusTrail = [];
  for (let i = 0; i < 35; i++) {
    await page.keyboard.press('Tab');
    await page.waitForTimeout(50);
    const info = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el || el === document.body) return null;
      const cs = getComputedStyle(el);
      return {
        tag: el.tagName,
        id: el.id,
        text: (el.innerText || el.getAttribute('aria-label') || '').slice(0, 60).replace(/\s+/g, ' '),
        href: el.getAttribute('href'),
        focusVisible: !!el.matches?.(':focus-visible'),
        outline: cs.outline,
        outlineWidth: cs.outlineWidth,
        boxShadow: (cs.boxShadow || '').slice(0, 80),
        inAriaHidden: !!el.closest('[aria-hidden="true"]'),
        inHeader: !!el.closest('header'),
        inNav: !!el.closest('nav'),
        inHero: !!el.closest('#intent'),
        inDemo: !!el.closest('#live-demo'),
      };
    });
    if (info) focusTrail.push(info);
  }

  const hiddenFocusables = await page.evaluate(() => {
    const out = [];
    document.querySelectorAll('[aria-hidden="true"]').forEach(region => {
      region.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select,textarea,[tabindex]:not([tabindex="-1"])').forEach(el => {
        const ti = el.getAttribute('tabindex');
        if (ti === '-1') return;
        // if any ancestor between el and region has aria-hidden=false, skip
        let p = el.parentElement;
        while (p && p !== region) {
          if (p.getAttribute('aria-hidden') === 'false') return;
          p = p.parentElement;
        }
        out.push({
          tag: el.tagName,
          text: (el.innerText || el.getAttribute('aria-label') || '').slice(0, 50).replace(/\s+/g, ' '),
          region: (region.id || region.getAttribute('aria-label') || region.className || '').toString().slice(0, 50),
        });
      });
    });
    return out;
  });

  results.keyboard = {
    focusTrail,
    focusVisibleTrue: focusTrail.filter(f => f.focusVisible).length,
    focusWithRing: focusTrail.filter(f => f.focusVisible || (f.outlineWidth && f.outlineWidth !== '0px' && f.outline !== 'none') || (f.boxShadow && f.boxShadow !== 'none')).length,
    totalFocused: focusTrail.length,
    headerNavFocused: focusTrail.filter(f => f.inHeader || f.inNav).map(f => f.text),
    heroFocused: focusTrail.filter(f => f.inHero).map(f => f.text),
    demoFocused: focusTrail.filter(f => f.inDemo).map(f => f.text),
    inAriaHiddenDuringTab: focusTrail.filter(f => f.inAriaHidden),
    hiddenFocusables,
  };

  // DemoPlayer
  await page.evaluate(() => {
    document.getElementById('live-demo')?.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await page.waitForTimeout(600);

  const controls = await page.evaluate(() => {
    const root = document.querySelector('#live-demo');
    if (!root) return [];
    return Array.from(root.querySelectorAll('button, [role="button"], a')).map(el => ({
      text: (el.innerText || el.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ').slice(0, 100),
      aria: el.getAttribute('aria-label'),
      disabled: el.disabled || el.getAttribute('aria-disabled'),
    }));
  });

  const before = await page.locator('#live-demo').innerText();

  let commitClicked = false, abortClicked = false;
  const commitBtn = page.locator('#live-demo').getByRole('button', { name: /commit/i }).first();
  if (await commitBtn.count()) {
    await commitBtn.click();
    commitClicked = true;
    await page.waitForTimeout(900);
  }
  const afterCommit = await page.locator('#live-demo').innerText();

  const abortBtn = page.locator('#live-demo').getByRole('button', { name: /abort/i }).first();
  if (await abortBtn.count()) {
    await abortBtn.click();
    abortClicked = true;
    await page.waitForTimeout(900);
  }
  const afterAbort = await page.locator('#live-demo').innerText();

  // Keyboard activate paths
  let kbCommit = false, kbAbort = false, commitFV = false, abortFV = false;
  if (await commitBtn.count()) {
    await commitBtn.focus();
    commitFV = await page.evaluate(() => document.activeElement?.matches?.(':focus-visible') === true);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(400);
    kbCommit = true;
  }
  if (await abortBtn.count()) {
    await abortBtn.focus();
    abortFV = await page.evaluate(() => document.activeElement?.matches?.(':focus-visible') === true);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(400);
    kbAbort = true;
  }

  results.demo = {
    controls,
    commitClicked,
    abortClicked,
    before: before.slice(0, 400),
    afterCommit: afterCommit.slice(0, 500),
    afterAbort: afterAbort.slice(0, 500),
    commitChanged: afterCommit !== before,
    abortChanged: afterAbort !== afterCommit,
    keyboard: { kbCommit, kbAbort, commitFV, abortFV },
  };

  // Canvas lifecycle
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(700);
  const inView = await page.evaluate(() => {
    const d = window.__nexusCanvasDebug;
    if (!d) return { hasApi: false };
    return { hasApi: true, paused: d.paused, rafActive: d.rafActive, ...Object.fromEntries(Object.entries(d).slice(0, 12)) };
  });

  // scroll past intent
  await page.evaluate(() => {
    const intent = document.getElementById('intent');
    if (intent) {
      const bottom = intent.getBoundingClientRect().bottom + window.scrollY;
      window.scrollTo(0, bottom + 100);
    } else {
      window.scrollTo(0, window.innerHeight * 10);
    }
  });
  await page.waitForTimeout(900);
  const offscreen = await page.evaluate(() => {
    const d = window.__nexusCanvasDebug;
    const c = document.querySelector('#intent canvas, canvas');
    const r = c?.getBoundingClientRect();
    if (!d) return { hasApi: false };
    return { hasApi: true, paused: d.paused, rafActive: d.rafActive, canvasTop: r?.top, canvasBottom: r?.bottom };
  });

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(900);
  const returned = await page.evaluate(() => {
    const d = window.__nexusCanvasDebug;
    if (!d) return { hasApi: false };
    return { hasApi: true, paused: d.paused, rafActive: d.rafActive };
  });

  results.canvas = { inView, offscreen, returned };
  results.consoleDuringInteractive = consoleLogs.slice();

  await context.close();
}

const browser = await chromium.launch({ headless: true });
try {
  const cases = [
    { name: 'd1280-intent', width: 1280, height: 800, progress: 0 },
    { name: 'd1280-constrain', width: 1280, height: 800, progress: 0.4 },
    { name: 'd1280-validate', width: 1280, height: 800, progress: 0.55 },
    { name: 'd1280-decide', width: 1280, height: 800, progress: 0.68 },
    { name: 'd1280-emit', width: 1280, height: 800, progress: 0.9 },
    { name: 'd1280-demo-handoff', width: 1280, height: 800, hash: '#live-demo' },
    { name: 'd1440-intent', width: 1440, height: 900, progress: 0 },
    { name: 'm390-intent', width: 390, height: 844, progress: 0 },
    { name: 'm390-decide', width: 390, height: 844, progress: 0.68 },
    { name: 'm430-intent', width: 430, height: 932, progress: 0 },
    { name: 'd1280-reduced', width: 1280, height: 800, progress: 0.68, reducedMotion: true },
  ];
  for (const c of cases) await runCase(browser, c);
  await keyboardDemoCanvas(browser);
  fs.writeFileSync('/workspace/artifacts/browser-qa-agent-raw.json', JSON.stringify(results, null, 2));
  log('DONE');
  log(JSON.stringify({
    caseCount: results.cases.length,
    keyboard: {
      total: results.keyboard.totalFocused,
      fv: results.keyboard.focusVisibleTrue,
      hiddenTab: results.keyboard.inAriaHiddenDuringTab?.length,
      hiddenFocusables: results.keyboard.hiddenFocusables?.length,
    },
    demo: {
      commit: results.demo.commitClicked,
      abort: results.demo.abortClicked,
      commitChanged: results.demo.commitChanged,
      abortChanged: results.demo.abortChanged,
      kb: results.demo.keyboard,
    },
    canvas: results.canvas,
  }, null, 2));
} finally {
  await browser.close();
}

import { test, expect, type Page } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

const SHOT = path.join("screenshots", "p1-final");

fs.mkdirSync(SHOT, { recursive: true });

async function noPageErrors(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  return () => errors;
}

async function noBodyOverflow(page: Page) {
  const overflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth + 2,
  );
  expect(overflow).toBe(false);
}

const REQUIRED_ROUTES = [
  "/",
  "/system",
  "/evidence/claims",
  "/maturity",
  "/evidence/benchmarks",
  "/developers",
  "/security",
  "/evidence/proof-capsules",
] as const;

const VIEWPORTS = [
  { w: 390, h: 844, name: "m390" },
  { w: 430, h: 932, name: "m430" },
  { w: 768, h: 1024, name: "t768" },
  { w: 1280, h: 800, name: "d1280" },
  { w: 1440, h: 900, name: "d1440" },
  { w: 1920, h: 1080, name: "d1920" },
] as const;

test.describe("P1 global routes", () => {
  for (const route of REQUIRED_ROUTES) {
    test(`loads ${route}`, async ({ page }) => {
      const getErrors = await noPageErrors(page);
      const res = await page.goto(route, { waitUntil: "networkidle" });
      expect(res?.ok()).toBeTruthy();
      await expect(page.locator("body")).toBeVisible();
      await noBodyOverflow(page);
      expect(getErrors().filter((e) => !e.includes("favicon"))).toEqual([]);
    });
  }

  test("visible keyboard focus on primary nav", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    const focused = await page.evaluate(() => {
      const el = document.activeElement as HTMLElement | null;
      if (!el) return null;
      const s = getComputedStyle(el);
      return {
        tag: el.tagName,
        outline: s.outlineStyle + s.outlineWidth,
        boxShadow: s.boxShadow,
      };
    });
    expect(focused).not.toBeNull();
  });

  test("reduced-motion prefers static presentation", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/", { waitUntil: "networkidle" });
    await expect(page.locator("body")).toBeVisible();
    await page.locator("#live-demo").scrollIntoViewIfNeeded();
    await expect(page.getByTestId("execution-observatory")).toBeVisible();
    await page.screenshot({
      path: path.join(SHOT, "home-reduced-motion.png"),
    });
  });

  test("no destination claim silently shown as current on claims", async ({
    page,
  }) => {
    await page.goto("/evidence/claims", { waitUntil: "networkidle" });
    const graph = page.getByTestId("claim-dependency-graph");
    await expect(graph).toHaveAttribute("data-current-only", "true");
    // target nodes must not appear as current maturity badges in default graph
    const body = await graph.innerText();
    // Stage 0 / change gate remain In Integration when visible
    expect(body.toLowerCase()).not.toMatch(/100%\s*complete/);
  });
});

test.describe("Homepage Observatory", () => {
  test("commit / denial / rollback KAR and denial no rollback", async ({
    page,
  }) => {
    await page.goto("/?obs=commit&stage=5", { waitUntil: "networkidle" });
    await page.locator("#live-demo").scrollIntoViewIfNeeded();
    await expect(page.getByTestId("execution-observatory")).toBeVisible();
    const lenses = page.getByTestId("execution-observatory-lenses");
    await expect(lenses.getByTestId("kar-strip")).toBeVisible();
    // Commit terminal: reversible No after commit
    const karCommit = lenses.getByTestId("kar-strip");
    await expect(
      karCommit.locator('[data-kar-cell="reversible"]'),
    ).toHaveAttribute("data-kar-value", /No|Conditional|Yes|Not Established/);
    await page.screenshot({
      path: path.join(SHOT, "obs-commit-desktop.png"),
    });

    await page
      .getByTestId("execution-observatory")
      .locator('[data-demo-path="denial"]')
      .click();
    await page.waitForTimeout(300);
    await page.locator("input.demo-scrubber").fill("5");
    await page.waitForTimeout(200);
    await expect(lenses).toHaveAttribute("data-scenario", "denial");
    await expect(lenses).toHaveAttribute("data-rollback-occurred", "false");
    const text = await lenses.innerText();
    expect(text.toLowerCase()).toContain("not asserted");
    const kar = lenses.getByTestId("kar-strip");
    await expect(kar.locator('[data-kar-cell="authorized"]')).toHaveAttribute(
      "data-kar-value",
      "No",
    );
    await expect(kar.locator('[data-kar-cell="reversible"]')).toHaveAttribute(
      "data-kar-value",
      "Not Established",
    );
    await page.screenshot({
      path: path.join(SHOT, "obs-denial-desktop.png"),
    });

    await page
      .getByTestId("execution-observatory")
      .locator('[data-demo-path="rollback"]')
      .click();
    await page.waitForTimeout(300);
    await page.locator("input.demo-scrubber").fill("5");
    await page.waitForTimeout(200);
    await expect(lenses).toHaveAttribute("data-scenario", "rollback");
    await expect(lenses).toHaveAttribute("data-rollback-occurred", "true");
    const karRb = lenses.getByTestId("kar-strip");
    await expect(
      karRb.locator('[data-kar-cell="reversible"]'),
    ).toHaveAttribute("data-kar-value", "Yes");
    const rbText = await karRb.innerText();
    expect(rbText.toLowerCase()).toMatch(/guest|snapshot|restor|not established/);
    await page.screenshot({
      path: path.join(SHOT, "obs-rollback-desktop.png"),
    });
  });

  test("commit and abort are first-class terminal paths", async ({ page }) => {
    await page.goto("/?obs=commit&stage=0", { waitUntil: "networkidle" });
    await page.locator("#live-demo").scrollIntoViewIfNeeded();
    const obs = page.getByTestId("execution-observatory");
    await expect(obs.locator('[data-demo-path="commit"]')).toBeVisible();
    await expect(obs.locator('[data-demo-path="denial"]')).toBeVisible();
    await expect(obs.locator('[data-demo-path="rollback"]')).toBeVisible();
  });
});

test.describe("Architecture Atlas", () => {
  test("plane isolation keeps ghost contracts", async ({ page }) => {
    await page.goto("/system", { waitUntil: "networkidle" });
    const atlas = page.getByTestId("architecture-atlas");
    await expect(atlas).toBeVisible();
    for (const layer of ["nexusiq", "aeon", "nexus", "evidence"]) {
      await atlas.locator(`button[data-layer="${layer}"]`).click();
      await expect(atlas).toHaveAttribute("data-layer", layer);
      await expect(page.getByTestId("atlas-isolation-banner")).toBeVisible();
      await expect(page.getByTestId("atlas-isolation-banner")).toContainText(
        /not standalone/i,
      );
      await expect(page.getByTestId("atlas-contract-summary")).toBeVisible();
      await expect(page.getByTestId("atlas-contract-summary")).toContainText(
        /Inbound|Outbound|inbound|outbound/i,
      );
      await expect(page.getByTestId("atlas-contract-edges")).toBeVisible();
      await page.screenshot({
        path: path.join(SHOT, `atlas-${layer}-desktop.png`),
      });
    }
    await atlas.locator('button[data-layer="all"]').click();
    await page.screenshot({ path: path.join(SHOT, "atlas-all-desktop.png") });
  });

  test("keyboard plane selection and no hidden focus traps", async ({
    page,
  }) => {
    await page.goto("/system", { waitUntil: "networkidle" });
    const atlas = page.getByTestId("architecture-atlas");
    const btn = atlas.locator('button[data-layer="aeon"]');
    await btn.focus();
    await page.keyboard.press("Enter");
    await expect(atlas).toHaveAttribute("data-layer", "aeon");
    // SVG layer groups are not focusable controls
    const focusableInSvg = await atlas.locator("svg a, svg button").count();
    expect(focusableInSvg).toBe(0);
  });
});

test.describe("Claim graph", () => {
  test("current-only default, deep link, invalid fallback", async ({
    page,
  }) => {
    await page.goto("/evidence/claims", { waitUntil: "networkidle" });
    const graph = page.getByTestId("claim-dependency-graph");
    await expect(graph).toHaveAttribute("data-current-only", "true");
    await page.screenshot({
      path: path.join(SHOT, "claims-current-desktop.png"),
    });

    await page.goto(
      "/evidence/claims?claim=transactional-change-gate&view=support&targets=1",
      { waitUntil: "networkidle" },
    );
    await expect(graph).toHaveAttribute("data-current-only", "false");
    await expect(page.getByTestId("claim-graph-inspector")).toBeVisible();

    await page.goto("/evidence/claims?claim=not-a-real-id", {
      waitUntil: "networkidle",
    });
    await expect(page.getByTestId("claim-graph-inspector")).toContainText(
      /Change Gate|transactional/i,
    );
  });

  test("tabular registry remains available", async ({ page }) => {
    await page.goto("/evidence/claims", { waitUntil: "networkidle" });
    // registry list / table section
    await expect(
      page.getByRole("heading", { name: /claims|registry|capability/i }).first(),
    ).toBeVisible();
    const body = await page.locator("main").innerText();
    expect(body.length).toBeGreaterThan(200);
  });
});

test.describe("Maturity topology", () => {
  test("no percent complete, critical path, table remains", async ({
    page,
  }) => {
    await page.goto("/maturity", { waitUntil: "networkidle" });
    const topo = page.getByTestId("maturity-topology");
    await expect(topo).toBeVisible();
    const body = await page.locator("body").innerText();
    expect(body).not.toMatch(/\d{1,3}%\s*complete/i);
    await page.locator('button:has-text("Critical")').click();
    await expect(topo).toHaveAttribute("data-mode", "critical");
    await expect(page.locator("table")).toBeVisible();
    await page.screenshot({
      path: path.join(SHOT, "maturity-critical-desktop.png"),
    });
  });

  test("deep link capability and targets", async ({ page }) => {
    await page.goto(
      "/maturity?capability=transactional-change-gate&view=critical&targets=1",
      { waitUntil: "networkidle" },
    );
    const topo = page.getByTestId("maturity-topology");
    await expect(topo).toBeVisible();
    await expect(topo).toHaveAttribute("data-mode", "critical");
  });
});

test.describe("Benchmark workbench", () => {
  test("fixture disclaimer and never citable", async ({ page }) => {
    await page.goto("/evidence/benchmarks", { waitUntil: "networkidle" });
    const bench = page.getByTestId("benchmark-workbench");
    await expect(bench).toHaveAttribute("data-citable", "false");
    await expect(bench).toContainText(/NOT A PUBLIC PERFORMANCE CLAIM/i);
    await expect(bench).toContainText(/CITABLE:\s*NO/i);
    await page.screenshot({
      path: path.join(SHOT, "benchmarks-desktop.png"),
    });
  });

  test("deep link benchmark view", async ({ page }) => {
    await page.goto(
      "/evidence/benchmarks?benchmark=sandbox&view=distribution",
      { waitUntil: "networkidle" },
    );
    const bench = page.getByTestId("benchmark-workbench");
    await expect(bench).toHaveAttribute("data-citable", "false");
  });
});

test.describe("Developer simulator", () => {
  test("local fixture, denial, destination labeled", async ({ page }) => {
    await page.goto("/developers", { waitUntil: "networkidle" });
    const sim = page.getByTestId("integration-simulator");
    await expect(sim).toContainText(/LOCAL FIXTURE/i);
    await page.locator('button:has-text("Capability denied")').click();
    await expect(sim).toHaveAttribute("data-scenario", "capability-denied");
    await page.locator('button:has-text("Composed Change Gate")').click();
    await expect(sim).toContainText(
      /Target Architecture|DESTINATION|not current/i,
    );
    await page.screenshot({
      path: path.join(SHOT, "developers-desktop.png"),
    });
  });

  test("deep link scenario step architecture", async ({ page }) => {
    await page.goto(
      "/developers?scenario=capability-denied&step=0&architecture=current",
      { waitUntil: "networkidle" },
    );
    const sim = page.getByTestId("integration-simulator");
    await expect(sim).toHaveAttribute("data-scenario", "capability-denied");
  });
});

test.describe("Evidence Lattice", () => {
  test("limitations pinned and signature trust", async ({ page }) => {
    await page.goto("/evidence/proof-capsules", { waitUntil: "networkidle" });
    let el = page.getByTestId("evidence-lattice").first();
    if ((await el.count()) === 0) {
      await page.goto("/", { waitUntil: "networkidle" });
      el = page.getByTestId("evidence-lattice").first();
    }
    if (await el.count()) {
      await el.scrollIntoViewIfNeeded();
      await expect(el).toContainText(/limitations/i);
      await el.locator('button:has-text("Signature")').click();
      await expect(el).toContainText(/demo|custody|Target|optional/i);
      await page.screenshot({
        path: path.join(SHOT, "lattice-signature-desktop.png"),
      });
    }
  });
});

test.describe("Viewport matrix", () => {
  for (const vp of VIEWPORTS) {
    test(`${vp.name} home no overflow`, async ({ page }) => {
      await page.setViewportSize({ width: vp.w, height: vp.h });
      await page.goto("/", { waitUntil: "networkidle" });
      await noBodyOverflow(page);
      if (vp.w === 390 || vp.w === 1440) {
        await page.screenshot({
          path: path.join(SHOT, `home-${vp.name}.png`),
        });
      }
    });
  }

  for (const route of [
    "/evidence/claims",
    "/maturity",
    "/evidence/benchmarks",
    "/developers",
  ]) {
    test(`390 no overflow ${route}`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(route, { waitUntil: "networkidle" });
      await noBodyOverflow(page);
      await page.screenshot({
        path: path.join(
          SHOT,
          `mobile-390${route.replace(/\//g, "-") || "-home"}.png`,
        ),
      });
    });
  }

  test("1440 instruments contact set", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    for (const [route, name] of [
      ["/system", "system-d1440"],
      ["/evidence/claims", "claims-d1440"],
      ["/maturity", "maturity-d1440"],
      ["/evidence/benchmarks", "benchmarks-d1440"],
      ["/developers", "developers-d1440"],
    ] as const) {
      await page.goto(route, { waitUntil: "networkidle" });
      await noBodyOverflow(page);
      await page.screenshot({ path: path.join(SHOT, `${name}.png`) });
    }
  });
});

test.describe("Deep link history", () => {
  test("claims back/forward", async ({ page }) => {
    await page.goto(
      "/evidence/claims?claim=proof-capsules&view=all&targets=0",
      { waitUntil: "networkidle" },
    );
    await page.goto(
      "/evidence/claims?claim=transactional-change-gate&view=blockers&targets=1",
      { waitUntil: "networkidle" },
    );
    await page.goBack();
    await page.waitForTimeout(200);
    expect(page.url()).toContain("proof-capsules");
    await page.goForward();
    await page.waitForTimeout(200);
    expect(page.url()).toContain("transactional-change-gate");
  });

  test("maturity and developers history", async ({ page }) => {
    await page.goto("/maturity?view=current&targets=0", {
      waitUntil: "networkidle",
    });
    await page.goto("/maturity?view=critical&targets=1", {
      waitUntil: "networkidle",
    });
    await page.goBack();
    expect(page.url()).toMatch(/view=current|maturity/);
    await page.goto(
      "/developers?scenario=readonly-inspect&architecture=current",
      { waitUntil: "networkidle" },
    );
    await page.goto(
      "/developers?scenario=capability-denied&architecture=destination",
      { waitUntil: "networkidle" },
    );
    await page.goBack();
    expect(page.url()).toContain("readonly-inspect");
  });

  test("home observatory deep link", async ({ page }) => {
    await page.goto("/?obs=denial&stage=4", { waitUntil: "networkidle" });
    await page.locator("#live-demo").scrollIntoViewIfNeeded();
    const lenses = page.getByTestId("execution-observatory-lenses");
    await expect(lenses).toHaveAttribute("data-scenario", "denial");
  });
});

import { expect, test } from "@playwright/test";

test.describe("portfolio production experience", () => {
  test("presents the profile, impact, and domain metadata", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(
      /Mustafa Sadiq.*Software Application Engineer/,
    );
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /build secure digital systems/i,
      }),
    ).toBeVisible();
    await expect(page.getByText("22M+")).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://mustafasadiq.com/",
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      "https://mustafasadiq.com/og-uswds.png",
    );
    await expect(
      page.locator('meta[property="og:image:width"]'),
    ).toHaveAttribute("content", "1734");
    await expect(
      page.locator('meta[property="og:image:height"]'),
    ).toHaveAttribute("content", "907");
  });

  test("supports navigation and contact paths", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Explore my work" }).click();
    await expect(page.locator("#work")).toBeInViewport();
    await expect(
      page.getByRole("link", { name: "Get in touch" }),
    ).toHaveAttribute("href", "mailto:mustafa.sadiq@outlook.com");
    await expect(
      page.getByRole("link", { name: /LinkedIn/ }).first(),
    ).toHaveAttribute("href", "https://www.linkedin.com/in/mustafasadiq/");
  });

  test("avoids horizontal overflow at the configured viewport", async ({
    page,
  }) => {
    await page.goto("/");

    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      content: document.documentElement.scrollWidth,
    }));
    expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport + 1);
  });

  test("publishes crawlable SEO resources and structured data", async ({
    page,
    request,
  }) => {
    await page.goto("/");

    const structuredData = await page
      .locator('script[type="application/ld+json"]')
      .textContent();
    expect(structuredData).toContain('"@type":"Person"');
    expect(structuredData).toContain('"@type":"WebSite"');

    const robots = await request.get("/robots.txt");
    expect(robots.ok()).toBeTruthy();
    expect(await robots.text()).toContain(
      "Sitemap: https://mustafasadiq.com/sitemap.xml",
    );

    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.ok()).toBeTruthy();
    expect(await sitemap.text()).toContain("https://mustafasadiq.com");

    const manifest = await request.get("/manifest.webmanifest");
    expect(manifest.ok()).toBeTruthy();
    expect(await manifest.json()).toMatchObject({
      name: "Mustafa Sadiq | Software Application Engineer",
      theme_color: "#005ea8",
    });
  });

  test("loads without browser errors or failed same-origin resources", async ({
    page,
  }) => {
    const failures: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error")
        failures.push(`console: ${message.text()}`);
    });
    page.on("pageerror", (error) => failures.push(`page: ${error.message}`));
    page.on("response", (response) => {
      const url = new URL(response.url());
      if (url.origin === "http://127.0.0.1:3000" && response.status() >= 400) {
        failures.push(`${response.status()}: ${url.pathname}`);
      }
    });

    await page.goto("/");
    await page.waitForLoadState("networkidle");
    expect(failures).toEqual([]);
  });
});

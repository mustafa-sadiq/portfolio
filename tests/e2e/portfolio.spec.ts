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
      "https://mustafasadiq.com/og.png",
    );
    await expect(
      page.locator('meta[property="og:image:width"]'),
    ).toHaveAttribute("content", "1731");
    await expect(
      page.locator('meta[property="og:image:height"]'),
    ).toHaveAttribute("content", "909");
  });

  test("supports navigation and contact paths", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Explore my work" }).click();
    await expect(page.locator("#work")).toBeInViewport();
    await expect(
      page.getByRole("link", { name: "Let's talk" }),
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
});

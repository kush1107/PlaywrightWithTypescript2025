import { test, expect } from "@playwright/test";

test("My First Test", async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/');
  await page.waitForLoadState('domcontentloaded');

  await expect(
    page.locator("//h1[normalize-space()='Welcome to the-internet']")
  ).toBeVisible();

});

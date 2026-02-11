import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright'; // 1

test.describe('homepage', () => {
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/'); 

  const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
  
  });
});
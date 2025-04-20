import { test, expect } from '@playwright/test';

test.describe('Playwright wait Test', () => {
    test('Sample Test', async ({ page }) => {
        // Navigate to a sample URL
        await page.goto('https://rahulshettyacademy.com/client');

        // Assert the page title
        await expect(page).toHaveTitle("Let's Shop");

       await page.locator("//a[normalize-space()='Register']").waitFor({ state: 'attached' });
        // Click on the "Register" link
        await page.locator("//a[normalize-space()='Register']").click();

        // Assert the URL after clicking the link
        await expect(page).toHaveURL('https://rahulshettyacademy.com/client/auth/register');
    });
});
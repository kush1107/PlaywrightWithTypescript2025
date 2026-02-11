import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import config from '../../../../playwright.config';
const baseURL = config.use?.baseURL || '';

test.describe('Login Tests - Valid Credentials', () => {

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto(baseURL);
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });


    test('User should be able to login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        // Navigate to login page
        await loginPage.goto(baseURL);

        // Perform login with valid credentials
        await loginPage.login('existing.user@gmail.com', 'Password@123');

        // Verify successful login - adjust assertion based on actual behavior
        await page.waitForURL('https://rahulshettyacademy.com/client/#/dashboard/dash');
        await expect(page.url()).toContain('/dashboard');
        
    });
});
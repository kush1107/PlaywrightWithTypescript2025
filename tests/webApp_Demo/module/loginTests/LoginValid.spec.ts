import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';

test.describe('Login Tests - Valid Credentials', () => {
    test('User should be able to login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        // Navigate to login page
        await loginPage.goto('https://rahulshettyacademy.com/client/#/auth/login');

        // Perform login with valid credentials
        await loginPage.login('test@example.com', 'Test@123');

        // Verify successful login - adjust assertion based on actual behavior
        // For demo, assuming no error message appears
        await expect(page.locator('.toast-message')).not.toBeVisible();
        // Or check for a specific success element if available
    });
});
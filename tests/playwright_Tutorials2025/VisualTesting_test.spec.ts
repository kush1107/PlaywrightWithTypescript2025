import { test, expect } from '@playwright/test';

test.describe('Visual Testing Demo - ', () => {
    test('should match the visual snapshot of the homepage - MakeMyTrip', async ({ page }) => {
        // Navigate to the target URL
        await page.goto('https://www.makemytrip.com/');

        // Take a screenshot of the full page
        const screenshot = await page.screenshot();

        // Compare the screenshot with the baseline snapshot
        expect(screenshot).toMatchSnapshot('homepage-visual-snapshot-makemytrip.png');
        });
   


  test('should match the visual snapshot of the homepage', async ({ page }) => {
            // Navigate to the target URL
            await page.goto('https://www.rediff.com/');
    
            // Take a screenshot of the full page
            const screenshot = await page.screenshot();
    
            // Compare the screenshot with the baseline snapshot
            expect(screenshot).toMatchSnapshot('homepage-visual-snapshot-rediff.png');
        });

    });
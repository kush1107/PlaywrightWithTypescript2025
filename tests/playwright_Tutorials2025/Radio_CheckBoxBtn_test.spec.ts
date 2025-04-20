import { test, expect } from '@playwright/test';

test.describe('Checkbox and Radio Button Tests', () => {
    test('Checkbox Test', async ({ page }) => {
        await page.goto('https://www.lambdatest.com/selenium-playground/checkbox-demo'); 

        // Check a checkbox
        const checkboxSelector = '#isAgeSelected'; 
        page.locator(checkboxSelector).waitFor(); // Wait for the checkbox 
        if (!await page.isChecked(checkboxSelector)) {
            await page.check(checkboxSelector);
            expect(await page.isChecked(checkboxSelector)).toBeTruthy();
        }

        await page.waitForTimeout(3000); // Wait for 2 seconds to observe the checkbox state
        
        // Uncheck a checkboxṭ
        if (await page.isChecked(checkboxSelector)) {
            await page.uncheck(checkboxSelector);
            expect(await page.isChecked(checkboxSelector)).toBeFalsy();
        }
       
    });

    test('Radio Button Test', async ({ page }) => {
        await page.goto('https://www.lambdatest.com/selenium-playground/radiobutton-demo'); 

        // Select a radio button
        const radioButtonSelector = "input[value='RadioButton2']"; 
        page.locator(radioButtonSelector).waitFor(); // Wait for the checkbox 
        if (await page.locator(radioButtonSelector).isEnabled) {
            await page.click(radioButtonSelector); // Check for radio button is enable & Click the radio button  
        }
    });
});
import { test, expect } from '@playwright/test';
import path from 'path';

test('File upload example', async ({ page }) => {
    // Navigate to the file upload page
    await page.goto('https://www.lambdatest.com/selenium-playground/upload-file-demo');

    // Path to the file to upload
    const filePath = path.resolve(__dirname, '../testData/PlaywrightFileUploadDemo.png');

    // Upload the file
    await page.setInputFiles("//input[@id='file']", filePath);

    // Assert the file was uploaded
    await expect(page.locator('#error')).toHaveText('File Successfully Uploaded');

    page.close();
});
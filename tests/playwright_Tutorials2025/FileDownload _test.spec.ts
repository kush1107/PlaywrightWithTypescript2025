import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test('File Download using Playwright', async ({ page, context }) => {
    // Navigate to the page with the download link/button
    await page.goto('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo');

    await page.click('#textbox');

    await page.keyboard.type('Test with Playwright'); // Type in the textbox
    
    
    await page.click('#create'); // Update selector as needed
    // Wait for the download to start after clicking the download link
    const [ download ] = await Promise.all([
        page.waitForEvent('download'),
        page.click('#link-to-download')
       
    ]);

    // Save the downloaded file to a desired path
    const downloadPath = './downloads/Lambdainfo.txt';
    await download.saveAs(downloadPath);

    // Verify the file exists
    expect(fs.existsSync(downloadPath)).toBeTruthy();

    // Optionally, check file size or content
    const stats = fs.statSync(downloadPath);
    expect(stats.size).toBeGreaterThan(0);
});
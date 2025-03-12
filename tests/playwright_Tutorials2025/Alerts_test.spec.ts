import { test } from "@playwright/test";

test("Test to handle Alerts ", async ({ page }) => {
    await page.goto('https://letcode.in/alert'); // Navigating to URL
    await page.waitForLoadState('domcontentloaded'); // Waiting for DOM to load

    // Handling the first alert (Accept)
    page.once('dialog', async dialog => {
        console.log("First Alert Text: " + dialog.message()); // Printing alert text
        await dialog.accept(); // Accepting the alert
        console.log("Accepted the first alert");
    });
    await page.getByText('Simple Alert').click();
    await page.waitForTimeout(500); // Small delay

    // Handling the second alert (Dismiss)
    page.once('dialog', async dialog => {
        console.log("Second Alert Text: " + dialog.message()); // Printing alert text
        await dialog.dismiss(); // Dismissing the alert
        console.log("Dismissed the second alert");
    });
    await page.getByText('Confirm Alert').click();
    await page.waitForTimeout(500); // Small delay

     // Handling the thirs alert (Dismiss)
     page.once('dialog', async dialog => {
        console.log("Third Alert Text: " + dialog.message()); // Printing alert text
        await dialog.accept("I'm SDET QA"); // Input text in the alert
        console.log("Prompt the Third alert");
    });
    await page.getByText('Prompt Alert').click();
    await page.waitForTimeout(500); // Small delay
});

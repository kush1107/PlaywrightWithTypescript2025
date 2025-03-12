import { test, expect } from "@playwright/test";

test("Tests to handle Button", async ({ page }) => {
    await page.goto('https://letcode.in/button'); // Navigating to URL
    await page.waitForLoadState('domcontentloaded'); // Waiting for DOM to load

    // Clicking on "Go to Home" button (Button-1)
    await page.locator('#home').click(); 
    await page.waitForTimeout(200); // Static wait to see action
    await page.goBack(); // Navigating back to the previous screen

    // Checking if the button is enabled or disabled
    const disableBtn = page.locator("(//button[normalize-space()='Disabled'])[1]"); 
    const isDisabled = await disableBtn.isDisabled(); // check button is disable or not

    if (isDisabled) {
        console.log("Button is disabled");
    } else {
        console.log("Button is enabled");
    }

    //Click & Hold the button - long press
    const longPress_btn = page.locator("(//button[@id='isDisabled'])[2]"); 
    // Hover over the button to focus the mouse on it
    await longPress_btn.hover();
    await page.mouse.down();
    await page.waitForTimeout(2000); // Hold for 2 seconds
    await page.mouse.up();
    console.log("Clicked and hold the button.");
});

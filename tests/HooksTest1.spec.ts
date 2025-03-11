import { expect, test, chromium } from "@playwright/test";

let page;

test.beforeEach(async ({browser}) => {
    page = await browser.newPage();
    await page.goto("https://www.saucedemo.com/"); // Navigate to URL
    await expect(page).toHaveTitle('Swag Labs'); // Wait till title appears
});

test.afterEach(async () => {
    console.log("Closing browser");
    await page.close();
});


    test("Login to App Using Valid Credentials", async () => {
        console.log("Entering Credentials to Login Form - Valid");
        await page.locator("#user-name").fill("standard_user"); // Enter username
        await page.locator("#password").fill("secret_sauce");  // Enter password
        await page.locator("#login-button").click(); // Click the login button
        await expect(page.locator(".title")).toHaveText("Products"); // Verify successful login
    });

    test("Login to App Using InValid Credentials", async () => {
        console.log("Entering Credentials to Login Form - Invalid");
        await page.locator("#user-name").fill("standard_user12"); // Enter invalid username
        await page.locator("#password").fill("secret_sauce12");  // Enter invalid password
        await page.locator("#login-button").click(); // Click the login button
        await expect(page.locator("[data-test='error']")).toHaveText(
            "Epic sadface: Username and password do not match any user in this service"
        ); // Verify error message
    });

    test("Login to App Using Empty Credentials", async () => {
        console.log("Entering Credentials to Login Form - Empty");
        await page.locator("#user-name").fill(""); // Leave username empty
        await page.locator("#password").fill("");  // Leave password empty
        await page.locator("#login-button").click(); // Click the login button
        await expect(page.locator("[data-test='error']")).toHaveText(
            "Epic sadface: Username is required"
        ); // Verify error message
    });


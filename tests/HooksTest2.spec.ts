import { expect, test, chromium } from "@playwright/test";

let page;

test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
    await page.goto("https://www.saucedemo.com/"); // Navigate to URL
    await expect(page).toHaveTitle('Swag Labs'); // Wait till title appears
    await page.locator("#user-name").fill("standard_user"); // Enter username
    await page.locator("#password").fill("secret_sauce");  // Enter password
    await page.locator("#login-button").click(); // Click the login button
    await expect(page.locator(".title")).toHaveText("Products"); // Verify successful login
});

test.afterAll(async () => {
    console.log("Logout from the Application");
    
});


    test("Adding Product -1 to Cart & Checkout ", async () => {
        console.log("Entering Credentials to Login Form - Valid");
        await page.locator("//a[normalize-space()='Sauce Labs Backpack']").click();
       await page.locator("#add-to-cart",{ state: 'attached' }).click();
        await page.locator(".shopping_cart_link").click();
        await page.locator("#checkout").click();
        await page.locator("//input[@id='first-name']").fill("Kushal");
        await page.locator("//input[@id='last-name']").fill("Parikh");
        await page.locator("#postal-code").fill("390001");
        await page.locator("#continue").click();
        await page.locator("#finish").click();
        await expect(page.locator("//h2[normalize-space()='Thank you for your order!']")).toHaveText("Thank you for your order!");
    });

    // test("Login to App Using InValid Credentials", async () => {
    //     console.log("Entering Credentials to Login Form - Invalid");
    //     await page.locator("#user-name").fill("standard_user12"); // Enter invalid username
    //     await page.locator("#password").fill("secret_sauce12");  // Enter invalid password
    //     await page.locator("#login-button").click(); // Click the login button
    //     await expect(page.locator("[data-test='error']")).toHaveText(
    //         "Epic sadface: Username and password do not match any user in this service"
    //     ); // Verify error message
    // });

    // test("Login to App Using Empty Credentials", async () => {
    //     console.log("Entering Credentials to Login Form - Empty");
    //     await page.locator("#user-name").fill(""); // Leave username empty
    //     await page.locator("#password").fill("");  // Leave password empty
    //     await page.locator("#login-button").click(); // Click the login button
    //     await expect(page.locator("[data-test='error']")).toHaveText(
    //         "Epic sadface: Username is required"
    //     ); // Verify error message
    // });


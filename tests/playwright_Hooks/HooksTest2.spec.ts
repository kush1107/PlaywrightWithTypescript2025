import { expect, test, chromium } from "@playwright/test";

let page;

test.beforeAll(async ({browser}) => {
    page = await browser.newPage();
    await page.goto("https://www.saucedemo.com/"); // Navigate to URL
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveTitle('Swag Labs'); // Wait till title appears
    await page.locator("#user-name").fill("standard_user"); // Enter username
    await page.locator("#password").fill("secret_sauce");  // Enter password
    await page.locator("#login-button").click(); // Click the login button
    await expect(page.locator(".title")).toHaveText("Products"); // Verify successful login
});

test.afterAll(async () => {
    console.log("Logout from the Application");
    await page.locator("//button[@id='react-burger-menu-btn']").click();
    await page.locator("//a[@id='logout_sidebar_link']").click();
    await page.close();
    
});


    test("Adding Product -1 to Cart & Checkout ", async () => {
        console.log("Adding Product -1 to Cart & Checkout");
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

    test("Adding Product -2 to Cart & Checkout ", async () => {
        await page.goto("https://www.saucedemo.com/inventory.html"); // Navigate to URL
        await page.waitForLoadState('domcontentloaded');
        console.log("Adding Product -2 to Cart & Checkout");
        await page.locator("//a[normalize-space()='Sauce Labs Fleece Jacket']").click();
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

    test("Adding Product -3 to Cart & Checkout ", async () => {
        await page.goto("https://www.saucedemo.com/inventory.html"); // Navigate to URL
        await page.waitForLoadState('domcontentloaded');
        console.log("Adding Product -3 to Cart & Checkout");
        await page.locator("//a[normalize-space()='Sauce Labs Bolt T-Shirt']").click();
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


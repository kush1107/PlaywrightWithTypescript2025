import {test} from "@playwright/test"

test("My First Test",async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/'); // navigating to url
    await page.waitForLoadState('domcontentloaded'); //waiting for DOM to get loaded
    await page.locator("//h1[normalize-space()='Welcome to the-internet']").isVisible(); // waiting for element to be visible
})
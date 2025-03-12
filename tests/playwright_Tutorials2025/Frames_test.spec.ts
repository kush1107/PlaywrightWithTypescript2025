import {test} from "@playwright/test"

test("Test to handle iFrame",async ({page})=>{

    await page.goto('https://letcode.in/frame'); // navigating to url
    await page.waitForLoadState('domcontentloaded'); //waiting for DOM to get loaded

    // Locate the iframe and get its frame
    const frameElement = await page.frameLocator("#firstFr");

    // Interact with the input field inside the iframe
    await frameElement.locator("input[placeholder='Enter name']").fill('Kushal');
    await frameElement.locator("input[placeholder='Enter email']").fill('Parikh');;
   

})
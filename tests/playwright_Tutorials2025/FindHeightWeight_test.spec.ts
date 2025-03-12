import {test} from "@playwright/test"

test("Test to find height & width on that element",async ({page})=>{

    await page.goto('https://letcode.in/button'); // navigating to url

    await page.waitForLoadState('domcontentloaded'); //waiting for DOM to get loaded

    // Find height & width of given element
    // Locate Button-2 and get its coordinates
    const findLocation_btn = await page.locator('#property'); // Adjust the selector
    const box = await findLocation_btn.boundingBox();

    if (box) {
        const { width, height } = box;
        console.log(`Button-2 dimensions: Width = ${width}, Height = ${height}`);
    } else {
        console.log('Button-2 not found.');
    }

})
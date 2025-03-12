import {test} from "@playwright/test"

test("Test to find coordinates & clicking on that element",async ({page})=>{

    await page.goto('https://letcode.in/button'); // navigating to url

    await page.waitForLoadState('domcontentloaded'); //waiting for DOM to get loaded

    // Find X & y coordinates of button -2 & click on Find Location button
    // Locate Button-2 and get its coordinates
    const findLocation_btn = await page.locator('#position'); // Adjust the selector
    const box = await findLocation_btn.boundingBox();

    if (box) {
        const x = box.x;
        const y = box.y;
        console.log(`Button-2 coordinates: X = ${x}, Y = ${y}`);

        // Click the Find Location button
        await findLocation_btn.click();
        console.log('Clicked on Find Location button.');
    } else {
        console.log('Button-2 not found.');
    }

})
import {test} from "@playwright/test"

test("Test to handle iFrame",async ({page})=>{

    await page.goto('https://letcode.in/frame'); // navigating to url
    await page.waitForLoadState('domcontentloaded'); //waiting for DOM to get loaded

    const all_frames =  page.frames();
    console.log("No. of frames in page:"+all_frames.length);
    // Locate the iframe and get its frame
    const frameElement = page.frameLocator("#firstFr");

    // Interact with the input field inside the iframe
    await frameElement.locator("input[placeholder='Enter name']").fill('Kushal');
    await frameElement.locator("input[placeholder='Enter email']").fill('Parikh');
   
    //Interact with frames in nested iframe
    await frameElement.frameLocator("iframe[src='innerframe']").locator("input[name='email']").fill('kparikh123@gmail.com');

})
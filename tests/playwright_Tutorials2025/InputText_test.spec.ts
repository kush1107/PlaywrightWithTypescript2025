import {test} from "@playwright/test"

test("Test to handle input field",async ({page})=>{

    await page.goto('https://ecommerce-playground.lambdatest.io/'); // navigating to url
    await page.waitForLoadState('domcontentloaded'); //waiting for DOM to get loaded

    const searchInput = page.locator("//div[@id='entry_217822']//input[@placeholder='Search For Products']");

    await searchInput.isVisible(); // waiting for element to be visible

    //using fill() - most recommended
    await searchInput.fill("iphone"); 
    
    //using pressSequentially() - to make it real like user entering from keyboard.You need to use clear() it don't clear the text.
    await searchInput.clear();
    await searchInput.pressSequentially("Apple",{timeout:200}); 
})
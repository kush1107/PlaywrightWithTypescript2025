import {test} from "@playwright/test"

test("Test to handle WindowTabs",async ({page})=>{

    await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo'); // navigating to url
   
  const [NewWindowTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.click("'Follow On Twitter'")
    ])

    await NewWindowTab.waitForLoadState();
    console.log(NewWindowTab.url());
    await NewWindowTab.close();

    const [MultiWindowTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.click("#followboth")
    ])

    await MultiWindowTab.waitForLoadState();

    const pages = await MultiWindowTab.context().pages();
    console.log("No. of pages : "+pages.length);

    for (const tab of pages) {
        const tabUrl = tab.url();
        console.log("Tab URL: " + tabUrl);
        if (tabUrl.includes("facebook")) {
            console.log("✅ Switched to Facebook tab");
            await tab.bringToFront(); // This will bring the Facebook tab to focus
            // You can now interact with the Facebook page
        }
    }

})
import {test} from "@playwright/test"

test("Test to handle Dropdowns",async ({page})=>{

    await page.goto('https://letcode.in/dropdowns'); // navigating to url

    await page.waitForLoadState('domcontentloaded'); //waiting for DOM to get loaded

   await page.locator("#fruits").selectOption({ label: 'Apple' });; // using label or visible text

   await page.locator("//select[@id='superheros']").selectOption('Batman'); // using label or visible text

   await page.waitForTimeout(2000); //adding timeout to see actions

   await page.locator("//select[@id='superheros']").selectOption({ value: 'cm' }); //using value options

   // Get all the language options
   const options = await page.locator("//select[@id='lang']//option"); // Adjust the selector

   // Print all options
   const count = await options.count();
   console.log(`Total options: ${count}`);

   const optionTexts = await options.allTextContents();
    optionTexts.forEach((optionText, index) => {
        console.log(`Option ${index + 1}: ${optionText}`);
    });

   /// Select the last option using index
   await  page.locator("//select[@id='lang']").selectOption({ index: count - 1 });

   // Get the currently selected option's value
    const dropdown = await page.locator('#country'); 
    const deafaultSelectedValue = await dropdown.inputValue();
    console.log(`Default selected value: ${deafaultSelectedValue}`)


   // Select "India" using the value attribute

   await dropdown.selectOption({ value: 'India' }); // Replace 'india' with the actual value attribute

   // Get the selected option text
   const selectedValue = await dropdown.inputValue();
   console.log(`Selected value: ${selectedValue}`);

})
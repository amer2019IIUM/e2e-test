import { Given, Then, When } from "@cucumber/cucumber";
import profilePage from "../../pageObjects/profile.page";
import { invalidNameInput, invalidTelInput } from "../../src/lib/variables";

/*
    Scenario: Profile Page
*/
Given(/^the user is on the profile page$/, async function () {
  await profilePage.menuBtn.click();
  await profilePage.navToProfile.click();
});

Then(/^the user will see a update profile form$/, async function () {
  // await expect(await profilePage.form).toBeExisting();
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 10000);
  });
});

/*
    Scenario: Update Profile form successfullly
*/
Given(/^the user filled the country input$/, async function () {
  await profilePage.selectCountry();
});

Given(
  /^the user filled the phone number with numbers only$/,
  async function () {
    await profilePage.telephoneInput.setValue(112554);
  }
);

/*
     Scenario Outline: Update Profile form with invalid inputs
*/
//  All steps in the sharedSteps.ts file //

/*
    Scenario: Update Profile with invalid input of the name and submit to the system
*/

Given(
  /^the user has inputted more than one 255 characters in the name input field$/,
  async function () {
    await profilePage.violatedUpdate(invalidNameInput);
  }
);

Then(
  /^the user shall see a error message of max 255 characters that comes from the system$/,
  async function () {
    await expect(await profilePage.errorMessage).toBeExisting();
  }
);

/*
    Scenario: access profile but not authenticated
*/

Given(/^the user is accessed the profile page$/, async function () {
  profilePage.open();
});

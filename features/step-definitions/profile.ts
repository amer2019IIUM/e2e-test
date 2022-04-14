import { Given, Then, When } from "@cucumber/cucumber";
import profilePage from "../../pageObjects/profile.page";
import { invalidNameInput, invalidTelInput } from "../../src/lib/variables";
const assert = require("assert");

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

Then(/^the user will be able to update his name$/, async function () {
  await expect(await profilePage.formInputs[0]).toBeExisting();
});

Then(/^the user will be able to update his country$/, async function () {
  await expect(await profilePage.formInputs[1]).toBeExisting();
});

Then(/^the user will be able to update his phone number$/, async function () {
  await expect(await profilePage.formInputs[2]).toBeExisting();
});

Then(
  /^the user will be able to submit the updated profile form/,
  async function () {
    await expect(await profilePage.btnSubmit).toBeExisting();
  }
);

/*
    Scenario: Update Profile form successfullly
*/
Given(/^the user has filled the form validly$/, async function () {
  await profilePage.updateProfile("Amori", "Yemen", 12487);
});

When(/^the user submits the update profile form$/, async function () {
  await expect(await profilePage.updateProfileBtn).toBeExisting();
  await profilePage.updateProfileBtn.click();
});

Then(
  /^the user will a successfull message of updating profile$/,
  async function () {
    await expect(await profilePage.successMessage).toBeExisting();
  }
);

/*
     Scenario: Update Profile with invalid inputs
*/

Given(
  /^the user has not filled \"([^\"]*)\" input in the update profile form$/,
  async function (expectedValue) {
    await expect(await profilePage.form).toBeExisting();
    await profilePage.updateProfileInvalidly(expectedValue);
  }
);

Then(
  /^the user will see a \"([^\"]*)\" message of invalid inputting update form inputs fields$/,
  async function (expectedValue) {
    await expect(await $("span=هذا الحقل مطلوب")).toHaveText(expectedValue);
  }
);

/*
    Scenario Outline: Update Profile with with a very large phone number
*/

Given(
  /^the user has not filled \"([^\"]*)\" input with more than 399 number in update profile form$/,
  async function (expectedValue) {
    await expect(await profilePage.form).toBeExisting();
    await $(await profilePage.inputNameProperty(expectedValue)).setValue(
      invalidTelInput
    );
  }
);

/*
    Scenario: Update Profile with invalid inputs and submit to the system
*/

Given(
  /^the user violated a \"([^\"]*)\" rule$/,
  async function (expectedValue) {
    await profilePage.violatedUpdate(invalidNameInput);
  }
);

Then(
  /^the user shall see a \"([^\"]*)\" message that comes from the system in the profile page$/,
  async function (expectedValue) {
    await expect(await profilePage.errorMessage).toHaveText(expectedValue);
  }
);

/*
    Scenario: access profile but not authenticated
*/

Given(/^the user is accessed the profile page$/, async function () {
  profilePage.open();
});

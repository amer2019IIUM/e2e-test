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
Given(/^the user filled the name input$/, async function () {
  await profilePage.nameInput.setValue("amer");
});

Given(/^the user filled the country$/, async function () {
  await profilePage.selectCountry();
});

Given(
  /^the user filled the phone number with numbers only$/,
  async function () {
    await profilePage.telephoneInput.setValue(112554);
  }
);

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
     Scenario Outline: Update Profile form with invalid inputs
*/

Given(
  /^the user violated a \"([^\"]*)\" rule for \"([^\"]*)\" input$/,
  async function (validityRule, inputName) {
    await profilePage.violatedInputs(validityRule, inputName);
  }
);

Then(
  /^the user will see a \"([^\"]*)\" message because of \"([^\"]*)\" rule$/,
  async function (message, validityRule) {
    await expect(
      await profilePage.violatedMessage(validityRule)
    ).toBeExisting();
    await expect(await profilePage.violatedMessage(validityRule)).toHaveText(
      message
    );
  }
);

/*
     Scenario: left inputs field empty in the profile form that has been updated before
*/

Given(
  /^the user has left \"([^\"]*)\" input empty in the update profile form$/,
  async function (expectedValue) {
    await expect(await profilePage.form).toBeExisting();
    await profilePage.updateProfileInvalidly(expectedValue);
  }
);

Then(
  /^the user will see a \"([^\"]*)\" message of empty inputs$/,
  async function (expectedValue) {
    await expect(profilePage.emptyFieldErrorMessages[0]).toHaveText(
      expectedValue
    );
  }
);

/*
    Scenario Outline: Update Profile with with a very large phone number
*/

Given(
  /^the user has filled phone number input field with more than 399 number in update profile form$/,
  async function () {
    await expect(await profilePage.form).toBeExisting();
    await $(await profilePage.inputNameProperty("tel")).setValue(
      invalidTelInput
    );
  }
);
Then(
  /^the user will see a message that tells the input field is required$/,
  async function () {
    await expect(await profilePage.emptyFieldErrorMessages[0]).toBeExisting();
  }
);

/*
    Scenario: Update Profile with invalid inputs and submit to the system
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

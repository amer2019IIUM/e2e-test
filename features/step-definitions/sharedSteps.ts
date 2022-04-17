import { Given, Then, When } from "@wdio/cucumber-framework";
import Page from "../../pageObjects/page";
import { validEmail, validPassword } from "../../src/lib/variables";

var sharedPage = new Page();

// Shared Given(s)
Given(/^the user filled the name input$/, async function () {
  sharedPage.inputNameProperty("name").setValue("Amer Abdullah");
});

Given(
  /^the user filled the email input with correct email only$/,
  async function () {
    await sharedPage.inputNameProperty("email").setValue(validEmail);
  }
);

Given(
  /^the user filled the password input with correct password only$/,
  async function () {
    await sharedPage.inputNameProperty("password").setValue(validPassword);
  }
);

Given(
  /^the user violated a \"([^\"]*)\" rule for \"([^\"]*)\" input$/,
  async function (validityRule, inputName) {
    await sharedPage.violatedInputs(validityRule, inputName);
  }
);

// Shared when(s)
When(/^the user submits the form$/, async function () {
  await sharedPage.btnSubmit.click();
});

// Shared Then(s)
Then(/^the user will a successfull message$/, async function () {
  await expect(await sharedPage.successMessage).toBeExisting();
});

Then(
  /^the user will see a \"([^\"]*)\" message because of \"([^\"]*)\" rule$/,
  async function (message, validityRule) {
    await expect(await sharedPage.violatedMessage(validityRule)).toBeExisting();
    await expect(await sharedPage.violatedMessage(validityRule)).toHaveText(
      message
    );
  }
);

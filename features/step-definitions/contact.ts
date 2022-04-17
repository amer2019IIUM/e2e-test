import { Given, Then, When } from "@cucumber/cucumber";
import contactPage from "../../pageObjects/contact.page";
import profilePage from "../../pageObjects/profile.page";

/*
Background Given
*/
Given(/^the user is on the contact page$/, async function () {
  browser.url("/");
  await contactPage.menuBtn.click();
  await contactPage.navToContact.click();
});

/*
Scenario :  Contact page
*/
Then(/^the user will see a contact us form$/, async function () {
  await expect(await contactPage.form).toBeExisting();
});

/*
Scenario :  Send a message successfully
*/
Given(/^the user filled the subject input$/, async function () {
  await contactPage.inputNameProperty("subject").setValue("Test message");
});
Given(/^the user filled the message input$/, async function () {
  await contactPage.messageInput.setValue("This is a Test message");
});

/*
     Scenario Outline: Send a message with invalid inputs
*/
//  All steps in the sharedSteps.ts file //

/*
     Scenario Outline: send a message with invalid inputs and submit to the system
*/

Given(
  /^the user has inputted more than 255 characters in the \"([^\"]*)\" input field$/,
  async function (inputField) {
    await contactPage.inputFieldWithLargeCharacters(inputField);
  }
);

Then(
  /^the user shall see \"([^\"]*)\" that comes from the system$/,
  async function (errorMessage) {
    await expect(await profilePage.successMessage).toHaveText(errorMessage);
  }
);

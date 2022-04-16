import { Given, Then, When } from "@cucumber/cucumber";
import contactPage from "../../pageObjects/contact.page";

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

Then(/^the user will be able to input his full name$/, async function () {
  await expect(await contactPage.formInputs[0]).toHaveAttr("name", "name");
});

Then(/^the user will be able to input his email$/, async function () {
  await expect(await contactPage.email).toHaveAttr("name", "email");
});

Then(
  /^the user will be able to input the subject of his message$/,
  async function () {
    await expect(await contactPage.formInputs[2]).toHaveAttr("name", "subject");
  }
);

Then(/^the user will be able to input the message$/, async function () {
  await expect(await contactPage.messageInput).toHaveAttr("name", "message");
});

Then(/^the user will be able to submit the form$/, async function () {
  await expect(await contactPage.btnSubmit).toBeExisting();
});

/*
Scenario :  Send a message successfully
*/
Given(/^the user has filled the contact us form validly$/, async function () {
  await contactPage.submitForm(
    "amer",
    "amer23zx@gmail.com",
    "Testing subject",
    "Testing message, hi Amer, this is Mohamed"
  );
});

When(/^the user submits the contact form$/, async function () {
  await contactPage.btnSubmit.click();
});

Then(/^the user shall see a successful sending message$/, async function () {
  await expect(await contactPage.successMessage).toBeExisting();
});

/*
Scenario Outline :  Send a message with invalid inputs
*/
Given(
  /^the user has left \"([^\"]*)\" input in the contact form empty$/,
  async function (inputName) {
    await contactPage.leftInputEmpty(inputName);
  }
);

Then(
  /^the user will see a \"([^\"]*)\" message in contact page$/,
  async function (expectedValue: string) {
    await expect(contactPage.emptyFieldErrorMessages[0]).toHaveText(expectedValue);
  }
);

/*
Scenario Outline :  Send a message with invalid email
*/

Given(
  /^the user has filled an invalid email input$/,
  async function () {
    await contactPage.invalidEmail();
  }
);

Then(
  /^the user will see a error message of incorrect email format$/,
  async function () {
    await expect(contactPage.invalidEmailMessage).toBeExisting()
  }
);

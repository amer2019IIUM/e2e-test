import { Given, Then, When } from "@cucumber/cucumber";
import resetPasswordPage from "../../pageObjects/resetPassword.page";

/*
    Scenario: Forget-password page
*/
Given(/^the user is on the forgot-password page$/, async function () {
  await resetPasswordPage.menuBtn.click();
  await resetPasswordPage.navToForgetpassword.click();
});

Then(/^the user will see a forgot-password form$/, async function () {
  await expect(await resetPasswordPage.form).toBeExisting();
});

Then(
  /^the user will be able to submit the forgot password form$/,
  async function () {
    await expect(await resetPasswordPage.btnSubmit).toBeExisting();
  }
);

/*
    Scenario: Send a email to reset password
*/
Given(/^the user accessed forgot-password page$/, async function () {
  resetPasswordPage.open();
});

Given(
  /^the user has filled the forgot-password form validly$/,
  async function () {
    // await resetPasswordPage.email.setValue("amer23zx@gmail.com");
  }
);
When(/^the user submits the reset password form$/, async function () {
  await resetPasswordPage.btnSubmit.click();
});
 

Then(
  /^the user should receive a message to his email with a link to reset the password$/,
  function () {}
);

/*
    Scenario: input an email that is not in the system
*/

Given(
  /^the user has filled not his email input that is not exist in the system$/,
  async function () {
    await resetPasswordPage.email.setValue("notexistemail@gmail.com");
  }
);

Then(
  /^the user will be informed that the email is not exist$/,
  async function () {
    await expect(await resetPasswordPage.errorMessage).toBeExisting();
  }
);

/*
    Scenario Outline: invalid email
*/

Given(
  /^the user has filled \"([^\"]*)\" input in the reset password form$/,
  async function (expectedValue: string) {
    await $(`input[name='${expectedValue}']`).setValue("a");
    await $(`input[name='${expectedValue}']`).setValue("");
  }
);

Then(
  /^the user will see a \"([^\"]*)\" message in forgot password page$/,
  async function (expectedValue: string) {
    await expect(resetPasswordPage.forgotPasswordInputError[0]).toHaveText(
      expectedValue
    );
  }
);

/*
    Scenario: The email has been sent
*/

Given(/^the user has inputted the resetting link in the url$/, function () {
  browser.url("/password/reset/token");
});

Then(
  /^the user will be redirected to the new password page$/,
  async function () {
    await expect(await resetPasswordPage.form).toBeExisting();
  }
);

/*
    Scenario: New password  page
*/

Then(/^the user will see a new password form$/, async function () {
  await expect(await resetPasswordPage.form).toBeExisting();
});

Then(/^the user will be only able to read the email input$/, async function () {
  await expect(await resetPasswordPage.formInputs[0]).toBeExisting();
});

Then(/^the user will be able to input his new password$/, async function () {
  await expect(await resetPasswordPage.formInputs[1]).toBeExisting();
});

Then(
  /^the user will be able to reinput his new password for confirmation$/,
  async function () {
    await expect(await resetPasswordPage.formInputs[2]).toBeExisting();
  }
);

Then(
  /^the user will be able to submit the new password form$/,
  async function () {
    await expect(await resetPasswordPage.btnSubmit).toBeExisting();
  }
);

/*
    Scenario: Reset password successfully
*/

// This given should have a valid token to let this scenario works
Given(/^the user is on the new password page$/, function () {
  browser.url(
    "/password/reset/10c8729e0d2af36ba88293dbafd63536a7f7a7e7d47f9c8fbaa421b4894ecda6?email=amergaber%40zadgroup.net"
  );
});

Given(/^the user has filled the new password form validly$/, async function () {
  await resetPasswordPage.formInputs[1].setValue("@Mm0114741");
  await resetPasswordPage.formInputs[2].setValue("@Mm0114741");
});

When(/^the user submits the new password form$/, async function () {
  await resetPasswordPage.btnSubmit.click();
});

Then(/^the user will see a message of success$/, async function () {
  await expect(await resetPasswordPage.successfulResetting).toBeExisting();
});

Then(/^the user will see a button$/, async function () {
  await expect(await resetPasswordPage.loginLink).toBeExisting();
});

Then(
  /^the user will be able to click on a button be redirected to the sign in page$/,
  async function () {
    await expect(await resetPasswordPage.loginLink).toBeExisting();
  }
);

/*
    Scenario: Invalid new password inputs
*/

Given(
  /^the user has filled \"([^\"]*)\" input in the reset password page$/,
  async function (expectedValues) {
    const itemsList = expectedValues.split(",");
    await $(`input[name='${itemsList[0]}']`).setValue("");
    await $(`input[name='${itemsList[1]}']`).setValue("");
  }
);

Then(
  /^the user will see a \"([^\"]*)\" message in the reset password page$/,
  async function (expectedValue: string) {
    await expect(resetPasswordPage.resettingErrorMessages[1]).toHaveText(
      expectedValue
    );
  }
);

/*
    Scenario: token used before
*/

Given(/^the user is on the new password page with used token$/, function () {
  browser.url(
    "/password/reset/10c8729e0d2af36ba88293dbafd63536a7f7a7e7d47f9c8fbaa421b4894ecda6?email=amergaber%40zadgroup.net"
  );
});

Then(
  /^the user will be informed that the token is invalid$/,
  async function () {
    await expect(await resetPasswordPage.errorMessage).toBeExisting();
  }
);

/*
    Scenario: wrong token
*/

Given(/^the user is on the new password page with invalid token$/, function () {
  browser.url(
    "/password/reset/10c8729e0d2af36ba88293dbafd63536a7f7a7e7d47f9c8fbaa421b4894ecda6?email=amergaber%40zadgroup.net"
  );
});

/*
    Scenario: authenticated user resets the password
*/

Then(
  /^the user will see a error message of resetting a password$/,
  async function () {
    await expect(await resetPasswordPage.errorMessage).toBeExisting();
  }
);

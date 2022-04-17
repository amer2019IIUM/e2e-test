import { Given, Then, When } from "@cucumber/cucumber";
import loginPage from "../../pageObjects/login.page";
import signupPage from "../../pageObjects/signup.page";
import homePage from "../../pageObjects/home.page";
require("dotenv").config();
import {
  validEmail,
  validPassword,
  unactivatedEmail,
  wrongEmail,
} from "../../src/lib/variables";

/*
    Scenario: Sign up page
*/

Given(/^the user is not authenticated$/, async function () {
  browser.url("/logout");
  await expect(await $("a[href='/login']")).toBeExisting();
});

Given(/^the user is on the sign up page$/, async function () {
  await loginPage.menuBtn.click();
  await signupPage.navToSignup.click();
  await expect(await signupPage.form).toBeExisting();
});

Then(/^the user shall see a sign up form$/, async function () {
  await expect(await signupPage.form).toBeExisting();
});

Then(/^the user shall be able to input his email$/, async function () {
  await expect(await signupPage.formInputs[0]).toHaveAttr("name", "email");
});

Then(/^the user shall be able to input his password$/, async function () {
  await expect(await signupPage.formInputs[1]).toHaveAttr("name", "password");
});

Then(
  /^the user shall be able to input confirmation of his password$/,
  async function () {
    await expect(await signupPage.formInputs[2]).toHaveAttr(
      "name",
      "password_confirmation"
    );
  }
);

Then(/^the user shall be able to submit the form$/, async function () {
  await expect(await signupPage.btnSubmit).toBeExisting();
});

Then(
  /^the user shall be able to navigate to the terms and conditions page$/,
  async function () {
    await expect(await signupPage.termsLink).toBeExisting();
  }
);

Then(/^the user shall be able to navigate to sign in page$/, async function () {
  await expect(await signupPage.loginLink).toBeExisting();
});

/*
    Scenario: successful sign up

*/

Given(/^the user has filled the sign up form validly$/, async function () {
  await signupPage.submitForm(
    "alisaelh@gmail.com",
    "@Fv00110011",
    "@Fv00110011"
  );
});

Given(/^the user verified the recaptcha$/, async function () {
  // await assertions.toBeExisting(await signupPage.reCAPTCHA);
});

When(/^the user submits a sign up form$/, async function () {
  await signupPage.btnSubmit.click();
});

// Then(
//   /^the user will see a success message of the registeration$/,
//   async function () {
//     // await assertions.toBeExisting(await signupPage.getSubmitMessage);
//   }
// );
Then(
  /^the user will be redirected to register-succeeded page$/,
  async function () {
    await browser.url("/register-succeeded");
  }
);

Then(/^the user will recieve an activate link to his email$/, function () {});

/*
    Scenario: let the field empty

*/

Given(
  /^the user has not filled \"([^\"]*)\" input$/,
  async function (expectedValue: string) {
    await signupPage.submitForm(expectedValue, expectedValue, expectedValue);
  }
);

Then(
  /^the user will see a (.+) message$/,
  async function (expectedValue: string) {
    await expect(signupPage.signupErrorMessages[0]).toHaveText(expectedValue);
  }
);
/*
    Scenario: sign up with used email

*/
Given(/^the user inputted an used email$/, async function () {
  await signupPage.submitForm(
    "alisaelh@gmail.com",
    "@Fv00110011",
    "@Fv00110011"
  );
});

Then(
  /^the user will see be informed that the email has been used before$/,
  function () {}
);

/*
    Scenario: after the user registered successfully

*/

Given(/^the user is on the register-succeeded page$/, async function () {
  await browser.url("/register-succeeded");
});

Then(/^the user will see a button to sign in$/, async function () {
  await expect(await $('a[href="/login"]')).toBeExisting();
});

Then(
  /^the user will be able to click the button to navigate to sign in page$/,
  async function () {
    await $("a").click();
  }
);

/*
    Scenario: Activate the account

*/
Given(/^the user has inputted the activation link in the url$/, function () {});

When(/^the user presses enter$/, async function () {
  await browser.keys("Enter");
});

Then(/^the account will be activated$/, function () {});

Then(/^the user will be redirected to the activated page$/, async function () {
  await expect(await signupPage.activatedPageHero).toBeExisting();
});

// Then(
//   /^the user will see a successful message of account activation$/,
//   async function () {
//     await expect(await signupPage.activatedPageHero).toBeExisting();
//   }
// );

Then(/^the user will be able to navigate to sign in page$/, async function () {
  await $("a").click();
});

/*
    Scenario: user visit the sign up and he is authenticated
*/

Given(/^the user is authenticated$/, async function () {
  await loginPage.login(process.env.VALID_EMAIL, process.env.VALID_PASSWORD);
  await expect(await $("a[href='/logout']")).toBeExisting();
});

Then(
  /^the user will see a message that tells him he can start the competition$/,
  async function () {
    // await loginPage.open("/signup");
    // await $("h5").waitForDisplayed({ timeout: 60000 });
    // await expect(await $("h5=اشترك الآن")).toBeExisting();
  }
);

/*
    Scenario: Sign in page
*/

Given(/^the user is on the sign in page$/, async function () {
  await loginPage.menuBtn.click();
  await loginPage.navToLogin.click();
  await expect(await loginPage.form).toBeExisting();
});

Then(/^the user will see a sign in form$/, async function () {
  await expect(await loginPage.form).toBeExisting();
});

Then(
  /^the user will be able to input his email in sign in page$/,
  async function () {
    await expect(await loginPage.formInputs[0]).toHaveAttr("name", "email");
  }
);

Then(
  /^the user will be able to input his password in sign in page$/,
  async function () {
    await expect(await loginPage.formInputs[1]).toHaveAttr("name", "password");
  }
);

Then(
  /^the user will be able to submit the form in sign in page$/,
  async function () {
    await expect(await loginPage.btnSubmit).toHaveAttr("type", "submit");
  }
);

Then(
  /^the user will be able to navigate to the forgot page from sign in page$/,
  async function () {
    await expect(await loginPage.forgotPasswordLink).toBeExisting();
  }
);

Then(
  /^the user will be able to navigate to sign up page from sign in page$/,
  async function () {
    await expect(await loginPage.signupLink).toBeExisting();
  }
);

/*
    Scenario: successful sign in
*/

Given(/^the user has filled the sign in form validly$/, async function () {
  await loginPage.loginThisPage(validEmail, validPassword);
});

When(/^the user submit a sign in form$/, async function () {
  await loginPage.btnSubmit.click();
});

Then(/^the user shall see a login success message$/, async function () {
  // await expect(await loginPage.successMessage).toBeExisting();
});

Then(/^the user shall be redirected to home page$/, async function () {
  await browser.url("/");
});

/*
    Scenario Outline: sign in with empty inputs
*/

Given(
  /^the user has left \"([^\"]*)\" input empty$/,
  async function (expectedValue) {
    await signupPage.emptyFields(expectedValue);
  }
);

Then(
  /^the user shall see a \"([^\"]*)\" message for empty inputs$/,
  async function (expectedValue) {
    await expect(loginPage.emptyFieldErrorMessages[0]).toHaveText(
      expectedValue
    );
  }
);

/*
    Scenario: User did not activate the account through an email with unactivated email
*/

Given(
  /^the user has filled the sign in form validly with unactivated email$/,
  async function () {
    await loginPage.login(unactivatedEmail, validPassword);
  }
);

Given(/^the user has not activated the account$/, function () {});

Then(
  /^the user will be informed that his account not activated yet$/,
  async function () {
    await expect(loginPage.errorMessage).toBeExisting();
  }
);

/*
    Scenario : Invalid credentials account login
*/
Given(/^the user inputted invalid credentials$/, async function () {
  await loginPage.login(wrongEmail, validPassword);
});

Then(
  /^the user will be informed that the credentials do not match our records.$/,
  async function () {
    await expect(loginPage.NotMatchingCredentials).toBeExisting();
  }
);

/*
    Scenario : Login button to navigate the user to registeration section
*/
Given(/^the user is on the home page$/, async function () {
  await homePage.open();
});

When(/^the user clicks on the login button$/, async function () {
  await homePage.homePageButton.click();
});

Then(
  /^the page will be scrolled down to the login form inside the homepage$/,
  async function () {
    await expect(loginPage.forgotPasswordLink).toBeExisting();
  }
);

/*
    Scenario : logout page
*/

Given(
  /^the user has typed in the url \"([^\"]*)\"$/,
  async function (expectedValue) {
    await browser.url(expectedValue);
  }
);

Then(/^the user will logout from the website$/, function () {});

/*
    Scenario : logout in sign in page
*/

Given(/^the user accessed the sign in page$/, async function () {
  await loginPage.open();
});

Then(/^the user will see a logout button$/, async function () {
  await expect(loginPage.logoutBtn).toBeExisting();
});
Then(
  /^the user will be able to click a logout button to logout$/,
  async function () {
    await loginPage.logoutBtn.click();
  }
);

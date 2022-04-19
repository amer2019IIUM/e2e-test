import { Given, Then } from "@cucumber/cucumber";
import homePage from "../../pageObjects/home.page";

Given(/^the user is on the Home page$/, async function () {
  homePage.open();
});

Then(/^the user will see the hero section$/, async function () {
  await expect(await homePage.heroSection).toBeExisting();
});

Then(
  /^the user will see the description of the competition$/,
  async function () {
    await expect(await homePage.descriptionSection).toBeExisting();
  }
);

Then(
  /^the user will see the instructions in how to do the competition$/,
  async function () {
    await expect(await homePage.instructionSection).toBeExisting();
  }
);

Then(
  /^the user will the prize that will be given in the competition$/,
  async function () {
    await expect(await homePage.prizeSection).toBeExisting();
  }
);

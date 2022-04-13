import { Given, Then } from "@cucumber/cucumber";
import winnersPage from "../../pageObjects/winners.page";
const assert = require("assert");

/*

 Scenario: Winners page

*/
Given(/^the user is on the Winners page$/, async function () {
  await winnersPage.open();
});
Given(
  /^the winners are selected manually according to competition name and date$/,
  async function () {
    assert.equal(await winnersPage.checkWinnersData(), true);
  }
);

Then(
  /^the user will be able to see a list of winners with names, countries, and competition date of the active comepetition$/,
  async function () {
    await expect(await winnersPage.winnerName).toBeExisting();
  }
);

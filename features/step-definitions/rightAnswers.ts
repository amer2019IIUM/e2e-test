import { Given, Then, When } from "@cucumber/cucumber";
import rightAnswersPage from "../../pageObjects/rightAnswers.page";
const assert = require("assert");

/*
Background Given
*/
Given(/^the user is on the right answers page$/, async function () {
  await rightAnswersPage.open();
});

/*

Show Right answers 

*/

Given(/^there is an active competition$/, async function () {
  assert.equal(await rightAnswersPage.checkRightAnswers(), true);
});

Given(
  /^the current date is greater than the active competition$/,
  async function () {
    assert.equal(await rightAnswersPage.checkRightAnswers(), true);
  }
);

Then(
  /^the user will see a select input of competition days$/,
  async function () {
    await expect(await rightAnswersPage.selectAnswersDay).toBeExisting();
  }
);

Then(
  /^the user will see the active competition answers before the current date$/,
  async function () {
    await expect(await rightAnswersPage.checkRightAnswerIsExist).toBeExisting();
  }
);

Then(
  /^the user will able to choose any day of the active competition that is before the current date$/,
  async function () {
    await expect(
      await rightAnswersPage.selectAnswersDayOption[0]
    ).toBeExisting();
  }
);

Then(
  /^the user will see the right answers the competition of the selected date$/,
  async function () {
    await expect(await rightAnswersPage.checkRightAnswerIsExist).toBeExisting();
  }
);

/*
Filter the answers
*/

Given(/^the user clicked on a select input$/, async function () {
  await rightAnswersPage.selectAnswersDay.click();
});

When(/^the user selects the day of the competition$/, async function () {
  const isExist = await rightAnswersPage.selectAnswersDay.getValue();
  if (!!isExist) {
    await rightAnswersPage.selectAnswersDayOption[0].click();
  }
});

Then(
  /^the users will see the right answers of the selected day$/,
  async function () {
    await expect(await rightAnswersPage.checkRightAnswerIsExist).toBeExisting();
  }
);

/*
No Right answers because no competition
*/

Given(/^there is no an active competition$/, async function () {
  assert.equal(await rightAnswersPage.checkRightAnswers(), false);
});

Then(/^the user will see a select input with empty data$/, async function () {
  assert.equal(await rightAnswersPage.checkRightAnswers(), false);
});

Then(/^the user will not see the days of the competitions$/, async function () {
  assert.equal(await rightAnswersPage.checkRightAnswers(), false);
});

Then(
  /^the user will not see the right answers the competition$/,
  async function () {
    assert.equal(await rightAnswersPage.checkRightAnswers(), false);
  }
);

/*
No Right answers because not started yet
*/

Given(
  /^the active competition date is greater than the current date$/,
  async function () {
    assert.equal(await rightAnswersPage.checkRightAnswers(), false);
  }
);

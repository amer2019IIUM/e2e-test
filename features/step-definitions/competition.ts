import { Given, Then, When } from "@cucumber/cucumber";
import competitionPage from "../../pageObjects/competition.page";
import profilePage from "../../pageObjects/profile.page";
const assert = require("assert");

/*
    Scenario: A user can see the competition page with questions
*/

Given(/^the user is on the competition page$/, async function () {
  await expect(await competitionPage.navToQuiz).toBeExisting();
  await competitionPage.navToQuiz.click();
});

Given(
  /^an active competition is published to the users with at least one question with multichoices questions$/,
  async function () {
    const data = await competitionPage.checkQuiz();
    assert.equal(!data.questions.length, false);
  }
);

Given(
  /^the date of the competition is on the day that the user visited the competition$/,
  async function () {
    const data = await competitionPage.checkQuiz();
    assert.equal(!data.questions.length, false);
  }
);

Given(
  /^the user did not give any attempt in the given competition$/,
  async function () {
    const data = await competitionPage.checkQuiz();
    assert.equal(!data.questions.length, false);
  }
);

Then(
  /^the user will see a list of questions sorted by created date in desc order$/,
  async function () {
    const data = await competitionPage.checkQuiz();
    assert.equal(!data.questions.length, false);
  }
);

Then(/^the user will be able to answer all the questions$/, async function () {
  const questionsAnswers = await competitionPage.radioInputs;

  for (let index = 0; index < questionsAnswers.length; index++) {
    await browser.waitUntil(() => questionsAnswers[index].isClickable());
    questionsAnswers[index].click();
  }
});

Then(/^the user will be able submit the answers$/, async function () {
  await expect(await competitionPage.btnSubmit).toBeExisting();
});

/*
    Scenario: there is no competition has been set up in the competition settings in the system
*/

Given(
  /^there is no competition has been set up in the competition settings in the system$/,
  async function () {
    const data = await competitionPage.checkQuiz();
    assert.equal(await data.success, false);
  }
);

Then(/^the user will be informed that \"([^\"]*)\"$/, async function (message) {
  const data = await competitionPage.checkQuiz();
  if (data.message.includes(message)) {
    assert.equal(true, true);
  } else {
    assert.equal(false, true);
  }
});

/*
    Scenario: the competition date has been set up for a past date
*/

Given(
  /^the competition date is smaller than the current date$/,
  async function () {
    const data = await competitionPage.checkQuiz();
    assert.equal(await data.success, false);
  }
);

/*
    Scenario: the competition date has been set up for a future date
*/

Given(
  /^the competition date is greater than the current date$/,
  async function () {
    const data = await competitionPage.checkQuiz();
    assert.equal(await data.success, false);
  }
);

Given(
  /^there is a competition has been set up in the competition settings in the system$/,
  async function () {
    const data = await competitionPage.checkQuiz();
    assert.notEqual(
      await data.message,
      "عذراً، لا يوجد مسابقة في الوقت الحالي."
    );
  }
);

/*
    Scenario: A user already answered
*/

Given(
  /^the competition date is the acual date that the user sent his answers$/,
  async function () {
    const data = await competitionPage.checkQuiz();
    assert.equal(await data.success, false);
  }
);

Given(/^the user attempted the competition$/, async function () {
  const data = await competitionPage.checkQuiz();
  assert.equal(await data.success, false);
});

/*
    Scenario: submit the form of the questions without missing any multi choice question
*/

Given(
  /^the user visited the competition at the competition day$/,
  async function () {
    const data = await competitionPage.checkQuiz();
    assert.equal(!data.questions.length, false);
  }
);

Given(/^the user has updated the profile$/, async function () {
  const data = await competitionPage.isProfileUpdated();
  assert.equal(!!data.name, true);
  assert.equal(!!data.country, true);
  assert.equal(!!data.tel, true);
});

Given(/^the user answered all the multichoice questions$/, async function () {
  const questionsAnswers = await competitionPage.radioInputs;

  for (let index = 0; index < questionsAnswers.length; index++) {
    await browser.waitUntil(() => questionsAnswers[index].isClickable());
    questionsAnswers[index].click();
  }
});

When(/^the user submits the questions form$/, async function () {
  await browser.waitUntil(() => competitionPage.btnSubmit.isClickable());
  await competitionPage.btnSubmit.click();
});

Then(
  /^the user will see a successful message for sending his answers$/,
  async function () {
    await expect(await competitionPage.comepetitionMessage).toBeExisting();
  }
);

/*
    Scenario: submit the form of the questions without missing any multi choice question but missed one or more of their fatwa number
*/

Given(/^the user did not input the fatwas number$/, async function () {
  await expect(await competitionPage.form).toBeExisting();
});

/*
    Scenario: user tries to submit the form with incomplete answers of the Multichoices questions
*/

Given(/^the user missed one or more multichoices questions$/, function () {});

Then(
  /^the question will be highlighted to let the user know that question not answered yet$/,
  async function () {
    await expect(
      await competitionPage.unansweredQuestionHeighted
    ).toBeExisting();
  }
);

/*
    Scenario: submit the form of the questions with no updated profile
*/

Given(/^the user has not updated the profile$/, async function () {
  const data = await competitionPage.isProfileUpdated();
  if (!data.name || !data.country || !data.tel) {
    assert.equal(true, true);
  }
});

Then(
  /^the user will see a modal that contains an update profile form$/,
  async function () {
    await expect(await competitionPage.profileModalForm).toBeExisting();
  }
);

Then(/^the user will be able to update the profile$/, async function () {
  await expect(await competitionPage.btnSubmit).toBeExisting();
});

/*
    Scenario: As a user, I want to View the questions PDF file
*/

Given(/^there is a pdf file uploaded$/, async function () {
  const data = await competitionPage.checkQuiz();
  assert.equal(!!data.file_url, true);

  await browser.waitUntil(() =>
    competitionPage.isThereErrorTextMessage.isClickable()
  );
  await competitionPage.isThereErrorTextMessage.click();
});

Then(/^the user will see the details message$/, async function () {
  await expect(await competitionPage.isThereErrorTextMessage).toBeExisting();
});
Then(/^the user will see a pdf link of the questions$/, async function () {
  await expect(await competitionPage.isTherePdfFilelink).toBeExisting();
});
Then(
  /^the user will be able to open the pdf link of the questions$/,
  async function () {
    await browser.waitUntil(() =>
      competitionPage.isTherePdfFilelink.isClickable()
    );
    await competitionPage.isTherePdfFilelink.click();
  }
);

/*
    Scenario: Start the competition from the home page
*/

When(/^the user clicks on start competition$/, async function () {
  await competitionPage.homeQuizBtn.click();
});

Then(/^the user will be redirected to a competition page$/, async function () {
  await expect(await competitionPage.isQuizPageExist).toBeExisting();
});

/*
    Scenario: User participation details
*/

Then(
  /^the user will see the button of starting the Competition$/,
  async function () {
    await expect(await competitionPage.homeQuizBtn).toBeExisting();
  }
);
Then(/^the user will see his number of wins$/, async function () {
  await expect(await competitionPage.quizWinsNumber).toBeExisting();
});

Then(/^the user will see his last result$/, async function () {
  await expect(await competitionPage.quizLastResult).toBeExisting();
});

Then(/^the user will see his number of attempts$/, async function () {
  await expect(await competitionPage.quizJoinsNumber).toBeExisting();
});

/*
    Scenario: access competition but not authenticated
*/

Given(/^the users accessed the competition page$/, function () {
  browser.url("quiz");
});
Then(/^the user will be redirected to the login page$/, async function () {
  await expect(await competitionPage.form).toBeExisting();
});

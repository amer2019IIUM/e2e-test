import { API_URL } from "../src/config/urls";
import { axiosGet } from "../src/lib/helpers";
import { click, setText } from "../src/utils/commands";
import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CompetitionPage extends Page {
  /**
   * define selectors using getter methods
   */

  get navToQuiz() {
    return $("a[href='/quiz']");
  }

  get navToProfile() {
    return $("span=الملف الشخصي");
  }

  get comepetitionMessage() {
    return $("span[data-sut-cometition-error-message='true']");
  }
  get unansweredQuestionHeighted() {
    return $$(".data-sut-not-answered")[0];
  }
  get radioInputs() {
    return this.form.$$("input[data-sut-select-answer-input='true'");
  }
  get profileModalForm() {
    return $("form[data-sut-profile-form='true']");
  }

  get isThereErrorTextMessage() {
    return $("div[data-sut-text-quiz-error-message='true']");
  }

  get isTherePdfFilelink() {
    return $("a[data-sut-quiz-file-url='true']");
  }
  get homeQuizBtn() {
    return $("button[data-sut-quiz-home-btn='true']");
  }
  get isQuizPageExist() {
    return $("div[data-sut-quiz-page='true']");
  }
  get quizJoinsNumber() {
    return $("div[data-joins-number-quiz='true']");
  }
  get quizLastResult() {
    return $("div[data-last-result-quiz='true']");
  }
  get quizWinsNumber() {
    return $("div[data-number-wins-quiz='true']");
  }
  get loginNav() {
    return $("a[href='/login']");
  }
  open() {
    return super.open("/quiz");
  }
}

export default new CompetitionPage();

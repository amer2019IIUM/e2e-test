import Page from "./page";
import { axiosGet } from "../src/lib/helpers";
import { API_URL } from "../src/config/urls";
/**
 * sub page containing specific selectors and methods for a specific page
 */
class RightAnswersPage extends Page {
  /**
   * define selectors using getter methods
   */
  get navToRightAnswers() {
    return $("a[href='/right-answers']");
  }
  get checkRightAnswerIsExist() {
    return $$("h5[data-sut-rightAnswer='true']");
  }
  get selectAnswersDay() {
    return $("select[data-sut-competition-day='true']");
  }
  get selectAnswersDayOption() {
    return $("select").$$("option");
  }

  // Fetching Functions
  async checkRightAnswers() {
    const data = await axiosGet(`${API_URL}right-answers`);
    if (data.length > 0) {
      return true;
    }
    return false;
  }
  open() {
    return super.open("/right-answers");
  }
}

export default new RightAnswersPage();

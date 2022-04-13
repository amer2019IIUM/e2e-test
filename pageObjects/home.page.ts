import { click, setText } from "../src/utils/commands";
import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */
   get navToHome() {
    return $("a[href='/']");
  }

  get heroSection() {
    return $("div[data-sut-description-section='true']");
  }
  get descriptionSection() {
    return $("div[data-sut-description-section='true']");
  }
  get instructionSection() {
    return $("div[data-sut-instruction-section='true']");
  }
  get prizeSection() {
    return $("div[data-sut-prize-section='true']");
  }

  get homePageButton() {
    return $("button=تسجيل الدخول");
  }
  get homeQuizBtn() {
    return $("button[data-sut-quiz-home-btn='true']");
  }
  open() {
    return super.open("/");
  }
}

export default new HomePage();

import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResetPasswordPage extends Page {
  /**
   * define selectors using getter methods
   */

  get navToForgetpassword() {
    return $("a[href='/forget-password']");
  }

  get forgotPasswordInputError() {
    return $("form").$$("span");
  }

  get successfulResetting() {
    return $("div[data-sut-resetted-successfully='true']");
  }

  get loginLink() {
    return $("a[href='/login']");
  }

  get resettingErrorMessages() {
    return $("form").$$("span");
  }
  open() {
    return super.open("/forget-password");
  }
}

export default new ResetPasswordPage();

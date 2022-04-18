import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignupPage extends Page {
  /**
   * define selectors using getter methods
   */
  get navToSignup() {
    return $("a[href='/signup']");
  }
  get form() {
    return $("form");
  }

  async submitForm(
    email: string,
    password: string,
    password_confirmation: string
  ) {
    await this.formInputs[0].setValue(email);
    await this.formInputs[1].setValue(password);
    await this.formInputs[2].setValue(password_confirmation);
  }

  get getSubmitMessage() {
    return $(".go3958317564");
  }

  get registerationSucceeded() {
    return $("div[data-sut-registeration-succeeded='true']");
  }

  get signupErrorMessages() {
    return $("form").$$("span");
  }

  get termsLink() {
    return $('a[href="/terms"]');
  }

  get loginLink() {
    return $('a[href="/login"]');
  }

  get reCAPTCHA() {
    return $('div[class="rc-anchor-invisible-text"]');
  }

  get activatedPageHero() {
    return $("h1=تم تفعيل الحساب");
  }

  open() {
    return super.open("/signup");
  }
}

export default new SignupPage();

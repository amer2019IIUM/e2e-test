import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignupPage extends Page {
  /**
   * define selectors using getter methods
   */
  get form() {
    return $("form");
  }
  get signupInputs() {
    return $("form").$$("input");
  }

  async submitForm(
    email: string,
    password: string,
    password_confirmation: string
  ) {
    await this.signupInputs[0].setValue(email);
    await this.signupInputs[1].setValue(password);
    await this.signupInputs[2].setValue(password_confirmation);
  }

  get getSubmitMessage() {
    return $(".go3958317564");
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

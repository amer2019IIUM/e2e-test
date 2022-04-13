import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ContactPage extends Page {
  /**
   * define selectors using getter methods
   */

  get navToContact() {
    return $("a[href='/contact']");
  }

  get messageInput() {
    return $("textarea");
  }

  async submitForm(
    name: string,
    email: string,
    subject: string,
    message: string
  ) {
    await this.formInputs[0].setValue(name);
    await this.formInputs[1].setValue(email);
    await this.formInputs[2].setValue(subject);
    await this.messageInput.setValue(message);
  }
  async submitFormInvalidly(
    name: string,
    email: string,
    subject: string,
    message: string
  ) {
    await $(`input[name='${name}']`).setValue("");
    await $(`input[name='${email}']`).setValue("");
    await $(`input[name='${subject}']`).setValue("");
    await $(`textarea[name='${message}']`).setValue("");
  }
  get getSubmitMessage() {
    return $(".go3958317564");
  }

  get contactErrorMessages() {
    return $("form").$$("span");
  }

  open(path) {
    return super.open(path);
  }
}

export default new ContactPage();

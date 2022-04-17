import { invalidLengthInput } from "../src/lib/variables";
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
  async leftInputEmpty(nameValue: string) {
    if (nameValue === "message") {
      await $(`textarea[name='${nameValue}']`).setValue("a");
      await $(`textarea[name='${nameValue}']`).setValue("");
    } else {
      await $(`input[name='${nameValue}']`).setValue("a");
      await $(`input[name='${nameValue}']`).setValue("");
    }
  }
  async invalidEmail() {
    await $(`input[name='email']`).setValue("amer12");
  }

  async inputFieldWithLargeCharacters(inputName: string) {
    if (inputName === "name") {
      await this.inputNameProperty("name").setValue(invalidLengthInput);
      await this.inputNameProperty("email").setValue("test@gmail.com");
      await this.inputNameProperty("subject").setValue("test");
      await this.messageInput.setValue("testing Message.");
    } else if (inputName === "email") {
      await this.inputNameProperty("name").setValue("amer");
      await this.inputNameProperty("email").setValue(invalidLengthInput);
      await this.inputNameProperty("subject").setValue("test");
      await this.messageInput.setValue("testing Message.");
    } else if (inputName === "subject") {
      await this.inputNameProperty("name").setValue("Amer");
      await this.inputNameProperty("email").setValue("test@gmail.com");
      await this.inputNameProperty("subject").setValue(invalidLengthInput);
      await this.messageInput.setValue("testing Message.");
    }
  }
  open(path) {
    return super.open(path);
  }
}

export default new ContactPage();

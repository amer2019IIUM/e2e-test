export default class Page {
  /**
   * Opens a sub page of the page
   */
  open(path: string) {
    return browser.url(path);
  }

  /**
   * Shared selectors
   */
  // Form selector
  get form() {
    return $("form");
  }

  // Get form inputs
  get formInputs() {
    return $("form").$$("input");
  }

  // Get email
  get email() {
    return $("input[name='email']");
  }

  // Get form submit button
  get btnSubmit() {
    return $("button[type=submit]");
  }

  // Get form menu button
  get menuBtn() {
    return $("img[data-sut-menu-svg-button='true']");
  }

  /*
  Shared functions
  */
  inputNameProperty(name: string) {
    return $(`input[name=${name}]`);
  }

  async emptyFields(inputName) {
    await $(await this.inputNameProperty(inputName)).setValue("a");
    await $(await this.inputNameProperty(inputName)).setValue("");
  }
  /*
   Messages
  */
  // Get Toaster with success message
  get successMessage() {
    return $(".data-sut-toaster-success");
  }

  // Get Toaster with error message
  get errorMessage() {
    return $(".data-sut-toaster-error");
  }

  get emptyFieldErrorMessages() {
    return $("form").$$("span=هذا الحقل مطلوب");
  }
  get invalidEmailMessage() {
    return $("span=البريد الألكتروني غير صحيح");
  }
}

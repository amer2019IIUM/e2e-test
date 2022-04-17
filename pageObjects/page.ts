import { invalidTelInput } from "../src/lib/variables";

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

  async violatedInputs(validityRule: string, inputName: string) {
    if (inputName === "tel" && validityRule === "max 399") {
      await this.inputNameProperty(inputName).setValue(6);
      await this.inputNameProperty(inputName).setValue(invalidTelInput);
    }
    //
    else if (inputName === "email" && validityRule === "email") {
      await this.inputNameProperty(inputName).setValue("amer23");
    }
    //
    else if (
      inputName === "password" &&
      validityRule === "upper-lower-number charaters"
    ) {
      return "يجب ان تحوي أحرف إنكليزية صغيرة وكبيرة وأرقام";
    } else if (inputName === "country" && validityRule === "required") {
      const countryInput = await $("input[id='react-select-3-input']");
      const countryList = await $("div[id='react-select-3-listbox']");
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
      });
      await countryInput.setValue("");
      await this.btnSubmit.click();
    } else if (inputName === "message" && validityRule === "required") {
      await $(`textarea[name=${inputName}]`).setValue("a");
      await $(`textarea[name=${inputName}]`).setValue("");
    }
    //
    else if (inputName === "tel" && validityRule === "required") {
      await this.inputNameProperty(inputName).setValue(15515565);
      await this.inputNameProperty(inputName).setValue("");
    }
    //
    else {
      await this.inputNameProperty(inputName).setValue("a");
      await this.inputNameProperty(inputName).setValue("");
    }
  }

  violatedMessage(validityRule) {
    if (validityRule === "max 399") {
      return $("form").$$("span=هذا الحقل مطلوب")[0];
    } else if (validityRule === "email") {
      return $("span=البريد الألكتروني غير صحيح");
    } else if (validityRule === "upper-lower-number charaters") {
      return "يجب ان تحوي أحرف إنكليزية صغيرة وكبيرة وأرقام";
    } else {
      return $("form").$$("span=هذا الحقل مطلوب")[0];
    }
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

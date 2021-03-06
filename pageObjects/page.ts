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
    if (inputName === "email" && validityRule === "email") {
      await this.inputNameProperty(inputName).setValue("amer23");
    }
    //
    else if (inputName === "password" && validityRule === "minLength_8") {
      await this.inputNameProperty(inputName).setValue("amer23");
    }
    //
    else if (
      inputName === "password" &&
      validityRule === "upper_lower_number"
    ) {
      await this.inputNameProperty(inputName).setValue("ammmmermmmmer");
    }
    //
    else if (
      inputName === "password_confirmation" &&
      validityRule === "match_password"
    ) {
      await this.inputNameProperty(inputName).setValue("1");
    }
    //
    else if (inputName === "country" && validityRule === "required") {
      const countryInput = await $("input[id='react-select-3-input']");
      const countryList = await $("div[id='react-select-3-listbox']");
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
      });
      await countryInput.setValue("");
      await this.btnSubmit.click();
    }
    //
    else if (inputName === "message" && validityRule === "required") {
      await $(`textarea[name=${inputName}]`).setValue("a");
      await $(`textarea[name=${inputName}]`).setValue("");
    }
    //
    else if (inputName === "tel" && validityRule === "required") {
      await this.inputNameProperty(inputName).setValue(15515565);
      await this.inputNameProperty(inputName).setValue("");
    }
    //
    else if (inputName === "tel" && validityRule === "max 399") {
      await this.inputNameProperty(inputName).setValue(6);
      await this.inputNameProperty(inputName).setValue(invalidTelInput);
    }
    //
    else {
      await this.inputNameProperty(inputName).setValue("a");
      await this.inputNameProperty(inputName).setValue("");
    }
  }

  violatedMessage(validityRule) {
    if (validityRule === "max 399") {
      return $("form").$$("span=?????? ?????????? ??????????")[0];
    } else if (validityRule === "email") {
      return $("span=???????????? ???????????????????? ?????? ????????");
    } else if (validityRule === "minLength_8") {
      return $("span=?????? ???? ?????????? ???????? ???????? ???? 8 ?????????? ?????? ??????????");
    } else if (validityRule === "upper_lower_number") {
      return $("span=?????? ???? ???????? ???????? ???????????????? ?????????? ???????????? ????????????");
    } else if (validityRule === "match_password") {
      return $("span=?????? ???? ???????? ???????? ???????? ????????????");
    } else {
      return $("form").$$("span=?????? ?????????? ??????????")[0];
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
    return $("form").$$("span=?????? ?????????? ??????????");
  }
  get invalidEmailMessage() {
    return $("span=???????????? ???????????????????? ?????? ????????");
  }
}

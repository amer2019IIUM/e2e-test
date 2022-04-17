import { invalidTelInput } from "../src/lib/variables";
import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfilePage extends Page {
  // Selectors
  get navToProfile() {
    return $("span=الملف الشخصي");
  }

  get nameInput() {
    return $("input[name='name']");
  }
  get telephoneInput() {
    return $("input[name='tel']");
  }
  get countrySelectInput() {
    return $("input[id='react-select-3-input']");
  }
  get countrySelectList() {
    return $("div[id='react-select-3-listbox']");
  }
  get updateProfileBtn() {
    return $("button[data-sut-update-profile-btn='true']");
  }

  get errorMessages() {
    return $("form").$$("span");
  }

  // Form inputs
  async updateProfile(name: string, country: string, phoneNo: number) {
    await this.nameInput.setValue(name);
    const countryInput = await this.countrySelectInput;
    const countryList = await this.countrySelectList;
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 2000);
    });
    countryInput.setValue(country);
    await browser.waitUntil(() => countryList.isClickable());
    countryList.click();
    await this.telephoneInput.setValue(phoneNo);
  }

  async selectCountry() {
    const countryInput = await this.countrySelectInput;
    const countryList = await this.countrySelectList;
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 2000);
    });
    countryInput.setValue("Yemen");
    await browser.waitUntil(() => countryList.isClickable());
    countryList.click();
  }

  async updateProfileInvalidly(inputName) {
    if (inputName === "country") {
      await this.updateProfile("Amori", "", 12487);
      await expect(await this.updateProfileBtn).toBeExisting();
      await this.updateProfileBtn.click();
    } else {
      await $(await this.inputNameProperty(inputName)).setValue("a");
      await $(await this.inputNameProperty(inputName)).setValue("");
    }
  }

  async violatedUpdate(name: string) {
    await $(await this.inputNameProperty("name")).setValue(name);
    await this.selectCountry();
    await $(await this.inputNameProperty("tel")).setValue(15212);
  }

  open() {
    return super.open("/profile");
  }
}

export default new ProfilePage();

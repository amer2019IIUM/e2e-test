import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfilePage extends Page {
  get navToProfile() {
    return $("span=الملف الشخصي");
  }

  get nameInput() {
    return $("input[name='name']");
  }
  get numberInput() {
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
    await this.numberInput.setValue(phoneNo);
  }

  async violatedUpdate(name: string) {
    await $("input[name='name']").setValue(name);
  }

  get errorMessages() {
    return $("form").$$("span");
  }
  open() {
    return super.open("/profile");
  }
}

export default new ProfilePage();

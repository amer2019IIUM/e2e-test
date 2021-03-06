import axios from "axios";
import { validEmail, validPassword } from "../src/lib/variables";
import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get navToLogin() {
    return $("a[href='/login']");
  }

  async login(email: string, password: string) {
    await browser.url("/logout");
    const menuBtn = await $("img[data-sut-menu-svg-button='true']");
    await menuBtn.click();
    const loginNav = await $("a[href='/login']");
    await loginNav.click();
    await this.formInputs[0].setValue(email);
    await this.formInputs[1].setValue(password);
    await this.btnSubmit.click();
  }

  async loginThisPage(email: string, password: string) {
    await this.formInputs[0].setValue(email);
    await this.formInputs[1].setValue(password);
    await this.btnSubmit.click();
  }

  async loginInvalidly(email: string, password: string) {
    await $(`name=${email}`).setValue("");
    await $(`name=${password}`).setValue("");
    await this.btnSubmit.click();
  }

  get forgotPasswordLink() {
    return $('a[href="/forget-password"]');
  }

  get signupLink() {
    return $('a[href="/signup"]');
  }

  get getLoginSuccessMessage() {
    return $(".go3958317564");
  }

  get errorUnactivatedAccount() {
    return $(".go3958317564=Your account not activated yet");
  }

  get NotMatchingCredentials() {
    return $(".go3958317564=These credentials do not match our records.");
  }

  get loginErrorMessages() {
    return $("form").$$("span=هذا الحقل مطلوب");
  }
  get logoutBtn() {
    return $("button");
  }
  
  async globalAxiosHeader() {
    const obj: any = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const user: any = await browser.execute(async function () {
      return await JSON.parse(window.localStorage.getItem("auth_info"));
    });

    if (user && user.user_id) {
      obj["Authorization"] = `Bearer ${user.user_id}|${user.access_token}`;
    }

    axios.defaults.headers = obj;
  }

  open() {
    return super.open("/login");
  }
}

export default new LoginPage();

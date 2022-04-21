import Page from "./page";
import { axiosGet } from "../src/lib/helpers";
import { API_URL } from "../src/config/urls";
/**
 * sub page containing specific selectors and methods for a specific page
 */
class WinnersPage extends Page {
  /**
   * define selectors using getter methods
   */
  get navToWinners() {
    return $("a[href='/right-answers']");
  }

  async checkWinnersData() {
    const data = await axiosGet(`${API_URL}winners`);
    if (data.length > 0) {
      return true;
    }
    return false;
  }

  get winnerName() {
    return $("h2[data-sut-winner-name='true']");
  }
  open() {
    return super.open("/winners");
  }
}

export default new WinnersPage();

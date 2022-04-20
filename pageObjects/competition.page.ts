import { API_URL, API_URL_2 } from "../src/config/urls";
import { axiosGet } from "../src/lib/helpers";
import Page from "./page";

interface Profile {
  name: string | null;
  country: string | null;
  tel: number | null;
}
/**
 * sub page containing specific selectors and methods for a specific page
 */
class CompetitionPage extends Page {
  /**
   * define selectors using getter methods
   */
  get navToQuiz() {
    return $("button[data-sut-quiz-home-btn='true']");
  }

  get comepetitionMessage() {
    return $("span[data-sut-cometition-error-message='true']");
  }
  get unansweredQuestionHeighted() {
    return $$(".data-sut-not-answered")[0];
  }
  get radioInputs() {
    return this.form.$$("input[data-sut-select-answer-input='true'");
  }
  get profileModalForm() {
    return $("form[data-sut-profile-form='true']");
  }

  get isThereErrorTextMessage() {
    return $("div[data-sut-text-quiz-error-message='true']");
  }

  get isTherePdfFilelink() {
    return $("a[data-sut-quiz-file-url='true']");
  }
  get homeQuizBtn() {
    return $("button[data-sut-quiz-home-btn='true']");
  }
  get isQuizPageExist() {
    return $("div[data-sut-quiz-page='true']");
  }
  get quizJoinsNumber() {
    return $("div[data-joins-number-quiz='true']");
  }
  get quizLastResult() {
    return $("div[data-last-result-quiz='true']");
  }
  get quizWinsNumber() {
    return $("div[data-number-wins-quiz='true']");
  }
  get loginNav() {
    return $("a[href='/login']");
  }

  /*
  Check quiz availability
  */
  async fetchQuiz() {
    return await axiosGet(`${API_URL}competition`);
  }
  async fetchProfile() {
    return await axiosGet(`${API_URL_2}profile`);
  }

  async checkQuiz() {
    const status = await this.fetchQuiz()
      .then((items) => {
        return items;
      })
      .catch((err) => {
        console.log("err", err);
      });
    return status;
  }

  /*
  Check if the profile is updated
  */
  async isProfileUpdated() {
    const profileData: Profile = {
      name: null,
      country: null,
      tel: null,
    };
    const data = await this.fetchProfile()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log("err", err);
      });

    profileData.name = data["name"];
    profileData.country = data["country"];
    profileData.tel = data["metadata"]["tel"];
    console.log("HIHIH");
    console.log(profileData);

    return profileData;
  }

  open() {
    return super.open("/quiz");
  }
}

export default new CompetitionPage();

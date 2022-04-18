import { Before, Given, Then, When } from "@cucumber/cucumber";
import homePage from "../../pageObjects/home.page";
import navigationPage from "../../pageObjects/navigation.page";
const assert = require("assert");

/*
    Scenario Outline: Sidebar
*/

Given(/^the user is on a page$/, async function () {
  await expect(await navigationPage.menuBtn).toBeExisting();
});

Then(/^the user will see the (.+) item$/, async function (navigationItems) {
  const itemsList = navigationItems.split(",");

  itemsList.forEach(async (item: string) => {
    await assert.equal(await navigationPage.SidebarItems(), item);
  });
});

Then(
  /^the user will able to navigate to (.+) page$/,
  async function (navigationItems) {
    const itemsList = navigationItems.split(",");

    itemsList.forEach(async (item: string) => {
      await assert.equal(await navigationPage.SidebarItems(), item);
    });
  }
);

/*
    Scenario Outline: Footer
*/

Then(/^the user will see (.+) icon$/, async function (iconsLinks) {
  const itemsList = iconsLinks.split(",");

  itemsList.forEach(async (item: string) => {
    await expect(item).toHaveHref(item);
  });
});

Then(
  /^the user will be able to navigate to the (.+) website$/,
  async function (iconsLinks) {
    const itemsList = iconsLinks.split(",");

    itemsList.forEach(async (item: string) => {
      await expect(item).toHaveHref(item);
    });
  }
);

Then(/^the user will able to navigate to IslamQA website$/, async function () {
  await expect(await navigationPage.islamqaLink).toBeExisting();
});

/*
    Scenario: Logo
*/

When(/^the clicks on the logo$/, async function () {
  await (await navigationPage.logo).click();
});

Then(/^the user will navigate to home page$/, async function () {
  await expect(await homePage.heroSection).toBeExisting();
});

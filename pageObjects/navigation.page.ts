import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class NavigationPage extends Page {
  /**
   * define selectors using getter methods
   */
  get heroSection() {
    return $("div[data-sut-description-section='true']");
  }
  get navItems() {
    return $$("span[data-sut-sidebar-nav='true']");
  }
  async SidebarItems(navItem) {
    const items: any = await this.navItems;
    for (let index = 0; index < items.length; index++) {
      return await expect(await items[index].getText()).toHaveText(navItem);
    }
  }
  get islamqaLink() {
    return $("a[href='https://islamqa.info/']");
  }

  async socialMediaIcons() {
    const items: any = await $("footer").$$(
      "a[data-sut-social-media-link='true']"
    );
    for (let index = 0; index < items.length; index++) {
      return items[index];
    }
  }
  get logo() {
    return $("header>div>div>a");
  }
  open() {
    return super.open("/");
  }
}

export default new NavigationPage();

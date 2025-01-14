import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class HomePage {
  readonly page: Page;
  readonly currentUnitNumber: Locator;
  readonly nextActivityBanner: Locator;
  readonly nextActivityButton: Locator;
  readonly cardUnitContainers: Locator;
  readonly groupClassesCards: Locator;
  readonly lastUnitCardContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.currentUnitNumber = page.locator("[data-testid='unit-number']");
    this.nextActivityBanner = page.locator("data-testid='banner']");
    this.nextActivityButton = page.locator("[data-testid='button']");
    this.cardUnitContainers = page.locator(".unit-card-component-container");
    this.groupClassesCards = page.locator(
      ".unit-card-component-container .live-book-container"
    );
    this.lastUnitCardContainer = page.locator(
      "[data-testid='units-section'] > div:nth-child(30)"
    );
  }

  async isPresent() {
    await this.lastUnitCardContainer.waitFor({ state: "visible" });

    await this.currentUnitNumber.isVisible();
    await this.nextActivityBanner.isVisible();
    await this.nextActivityButton.isVisible();
    await this.cardUnitContainers.isVisible();

    const cardUnitContainersCount = await this.cardUnitContainers.count();
    expect(cardUnitContainersCount).toBe(30);
    const groupClassesCardsCount = await this.groupClassesCards.count();
    expect(groupClassesCardsCount).toBe(6);
  }
}

export default HomePage;

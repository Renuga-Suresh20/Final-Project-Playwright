import { Page } from '@playwright/test';
import { test as baseTest, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AdvertisePage } from '../pages/AdvertisePage';
import { CarWashPage } from '../pages/CarWashPage';
import { GymPage } from '../pages/GymPage';
import { HomeLoanPage } from '../pages/HomeLoanPage';
import {ServicesPage} from '../pages/ServicesPage';

export class PageFixture {
  readonly homePage: HomePage;
  readonly searchResultsPage: SearchResultsPage;
  readonly giftCardPage: GiftCardPage;
  readonly cartPage: CartPage;
  constructor(page: Page) {
    this.homePage = new HomePage(page);
    this.searchResultsPage = new SearchResultsPage(page);
    this.giftCardPage = new GiftCardPage(page);
    this.cartPage = new CartPage(page);
  }
}
type Fixtures = {
  pages: PageFixture;
};
export const test = baseTest.extend<Fixtures>({
  pages: async ({ page }, use) => {
    await use(new PageFixture(page));
  },
});
export { expect };
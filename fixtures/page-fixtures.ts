import { Page } from '@playwright/test';
import { test as baseTest, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { Advertise, AdvertisePage } from '../pages/AdvertisePage';
import { CarWashPage } from '../pages/CarWashPage';
import { GymPage } from '../pages/GymPage';
import { HomeLoanPage } from '../pages/HomeLoanPage';
import {ServicesPage} from '../pages/ServicesPage';

export class PageFixture {
  readonly homePage: HomePage;
  readonly advertise: AdvertisePage;
  readonly carwash: CarWashPage;
  readonly gym: GymPage;
  readonly home: HomeLoanPage;
  readonly services: ServicesPage;
  constructor(page: Page) {
    this.homePage = new HomePage(page);
    this.advertise = new AdvertisePage(page);
    this.carwash=new CarWashPage(page);
    this.gym=new GymPage(page);
    this.home=new HomeLoanPage(page);
    this.services=ServicesPage(page);
    
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
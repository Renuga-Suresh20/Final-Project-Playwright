import { Page } from '@playwright/test';
import { test as baseTest, expect } from '@playwright/test';
import { Login } from '../pages/HomePage';
import { Advertise} from '../pages/AdvertisePage';
import { CarWash } from '../pages/CarWashPage';
import { Gym } from '../pages/GymPage';
import { HomeLoan } from '../pages/HomeLoanPage';
import {Services} from '../pages/ServicesPage';

export class PageFixture {
  readonly homePage: Login;
  readonly advertise: Advertise;
  readonly carwash: CarWash;
  readonly gym: Gym;
  readonly home: HomeLoan;
  readonly services: Services;
  constructor(page: Page) {
    this.homePage = new Login(page);
    this.advertise = new Advertise(page);
    this.carwash=new CarWash(page);
    this.gym=new Gym(page);
    this.home=new HomeLoan(page);
    this.services=new Services(page);
    
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


import { test as base } from "@playwright/test";
import { HomePage } from "./home.page";
import { SearchPage } from "./search.page";

type Fixtures = {
  homePage: HomePage,
  searchPage: SearchPage,
}

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page))
  },

  searchPage: async ({ page }, use) => {
    await use(new SearchPage(page))
  },
})

export { expect } from "@playwright/test"
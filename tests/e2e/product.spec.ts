import { test, expect } from "../../pages/page.fixture"

test.describe("Product Search", () => {
  test("Search for product", async ({ homePage, searchPage }) => {
    await test.step("Open Home Page", async () => {
      await homePage.goto();
    });

    await test.step("Search for product", async () => {
      await homePage.navbar.search("Acme Circles T-Shirt");

      const searchResponse = searchPage.page.waitForResponse(
        /.*[\/search?q=acme+Circles+T\-Shirt&rsc=].*/
      );
      expect((await searchResponse).status()).toBe(200);
      await expect(searchPage.page).toHaveURL(`/search?q=Acme+Circles+T-Shirt`);
    });

    await test.step("Verify product cards", async () => {
      await expect(searchPage.products).toHaveCount(1);
      for (let productCard of await searchPage.products.all()) {
        await expect(productCard).toBeVisible();
        await expect(productCard.getByRole("img")).toHaveAttribute(
          "alt",
          "Acme Circles T-Shirt"
        );
        await expect(productCard).toContainText("Acme Circles T-Shirt");
        await expect(productCard).toContainText("$20.00");
      }
    });
  });
});
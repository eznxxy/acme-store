import { type Page } from '@playwright/test';
import { BaseComponent } from "./base.component";

export class ProductComponent extends BaseComponent {
  constructor(page: Page, locator = page.locator(".grid").getByRole("link")) {
    super(locator);
  }
}
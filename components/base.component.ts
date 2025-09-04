import type { Locator } from "@playwright/test";

export abstract class BaseComponent {
  constructor(readonly host: Locator) {}
}
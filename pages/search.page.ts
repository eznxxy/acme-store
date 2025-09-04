import { BasePage } from "./base.page";
import { ProductComponent } from "../components/product.component";
import { escape } from "querystring";

type Collections =
  | "All"
  | "Bags"
  | "Drinkware"
  | "Electronics"
  | "Footware"
  | "Headwear"
  | "Hoodies"
  | "Jackets"
  | "Kids"
  | "Pets"
  | "Shirts"
  | "Stickers";

export class SearchPage extends BasePage {
  readonly products = new ProductComponent(this.page).host;

  async search(searchQuery = "") {
    await super.goto(`/search?q=${escape(searchQuery)}`);
  }

  async openCollection(collection: Collections) {
    await super.goto(`/search/${collection}`);
  }
}
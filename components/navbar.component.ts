import { BaseComponent } from "./base.component";

export class NavbarComponent extends BaseComponent {
  readonly link = {
    home: this.host.getByRole('link', { name: 'Home' }),
    all: this.host.getByRole('link', { name: 'All' }),
    shirt: this.host.getByRole('link', { name: 'Shirt' }),
    stickers: this.host.getByRole('link', { name: 'Stickers' }),
  }

  readonly input = {
    searchbar: this.host.getByPlaceholder('Search for products...'),
  }

  readonly button = {
    cart: this.host.getByRole("button", {
      name: "Open cart",
    }),
  }

  async search(product: string) {
    await this.input.searchbar.fill(product);
    await this.input.searchbar.press("Enter");
  }
}
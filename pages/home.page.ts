import { BasePage } from './base.page';
import { ProductComponent } from '../components/product.component';

export class HomePage extends BasePage {
  readonly products = new ProductComponent(this.page).host;

  async goto() {
    await super.goto('/');
  }
}
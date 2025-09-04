import { BaseComponent } from "./base.component";

export class FooterComponent extends BaseComponent {
  readonly link = {
    home: this.host.getByRole('link', { name: 'Home' }),
    about: this.host.getByRole('link', { name: 'About' }),
    tnc: this.host.getByRole('link', { name: 'Terms & Conditions' }),
    shippingnreturnpolicy: this.host.getByRole('link', { name: 'Shipping & Return Policy' }),
    privacypolicy: this.host.getByRole('link', { name: 'Privacy Policy' }),
    faq: this.host.getByRole('link', { name: 'FAQ' }),
  }
}
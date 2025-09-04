import { type Page } from '@playwright/test';
import { NavbarComponent } from '../components/navbar.component';
import { FooterComponent } from '../components/footer.component';

export class BasePage {
	readonly page: Page;
	readonly navbar: NavbarComponent;
	readonly footer: FooterComponent;


	constructor(page: Page) {
		this.page = page;
		this.navbar = new NavbarComponent(this.page.getByRole("navigation"));
		this.footer = new FooterComponent(this.page.getByRole("contentinfo"));
	}
	

	async goto(path: string) {
		await this.page.goto(path);
	}
}
import { Page, Locator } from '@playwright/test';

export class HotelBookingPage {

    readonly page: Page;
    readonly reserveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.reserveButton = page.getByRole('button', { name: 'Reserve', description: 'Book your hotel now!',
            exact: true });
    }

    async clickReserve() {
        await this.reserveButton.click();
    }
}
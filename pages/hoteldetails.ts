import { Page, Locator } from '@playwright/test';

export class HotelDetailsPage {

    readonly page: Page;
    readonly dismissButton: Locator;
    readonly hotelLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dismissButton = page.getByRole('button', { name: 'Dismiss sign-in info.' });
        this.hotelLink = page.getByRole('link', { name: 'Tripli Hotels Ayushman' });
    }

    async dismissSignInPopup() {
        await this.dismissButton.click();
    }

    async openBookingSite() {
        const popupPromise = this.page.waitForEvent('popup');
        await this.hotelLink.click();
        return await popupPromise;
    }
}
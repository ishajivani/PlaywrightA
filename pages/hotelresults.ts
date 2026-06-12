import { Page, Locator } from '@playwright/test';

export class HotelResultPage {

    readonly page: Page;
    readonly breakfastFilter: Locator;
    readonly wifiFilter: Locator;
    readonly acFilter: Locator;
    readonly fitnessFilter: Locator;

    constructor(page: Page) {
        this.page = page;
        this.breakfastFilter = page.getByText('Breakfast Included').nth(1);
        this.wifiFilter = page.getByText('Free Wifi').nth(1);
        this.acFilter = page.getByText('Air Conditioning').nth(1);
        this.fitnessFilter = page.getByText('Fitness Center').first();
    }

    async applyFilters() {
        await this.breakfastFilter.click();
        await this.wifiFilter.click();
        await this.acFilter.click();
        await this.fitnessFilter.click();
    }

    async openHotel() {
        const popupPromise = this.page.waitForEvent('popup');
        await this.page.getByText( 'Tripli Hotels Ayushman Retreat Previous Next12345678' ).click();
        return await popupPromise;
    }
}
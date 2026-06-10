import { Page, Locator, expect } from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly destinationTextbox: Locator;
    readonly suggestionDropdown: Locator;
    readonly tripDurationButton: Locator;
    readonly durationOption: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.destinationTextbox = page.getByRole('textbox', { name: 'Where to?' });
        this.suggestionDropdown = page.locator('.tt-menu').first();
        this.tripDurationButton = page.getByRole('button', { name: 'Trip Duration' });
        this.durationOption = page.locator('.dropdown-item').nth(0);
        this.searchButton = page.getByRole('button', { name: 'Search >' });
    }

    async navigateToHomePage() {
        await this.page.goto('https://www.holidify.com/');
    }

    async selectDestination() {
        await this.destinationTextbox.click();
        await this.suggestionDropdown.click();
        await this.page.keyboard.press('Enter');
    }

    async selectTripDuration() {
        await this.tripDurationButton.click();
        await this.durationOption.click();
    }

    async clickSearch() {
        await this.searchButton.click();
    }

    async searchTrip() {
        await this.selectDestination();
        await this.selectTripDuration();
        await this.clickSearch();
    }
}
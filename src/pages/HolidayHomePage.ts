import { Page, Locator } from '@playwright/test';

export class HolidayHomePage {

    readonly page: Page;
    readonly destinationTextbox: Locator;
    readonly tripDurationButton: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.destinationTextbox =
            page.getByRole('textbox', { name: 'Where to?' });

        this.tripDurationButton =
            page.getByRole('button', { name: 'Trip Duration' });

        this.searchButton =
            page.getByRole('button', { name: /search/i });
    }

    async navigate() {
        await this.page.goto('https://www.holidify.com/');
    }

    async selectDestination(destination: string) {

        await this.destinationTextbox.click();

        await this.page
            .locator('div')
            .filter({ hasText: new RegExp(`^${destination}$`) })
            .click();
    }

    async selectTripDuration(duration: string) {

        await this.tripDurationButton.click();

        await this.page
            .getByText(duration)
            .click();
    }

    async clickSearch() {
        await this.searchButton.click();
    }
}
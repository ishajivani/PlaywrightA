import { Page, Locator } from '@playwright/test';

export class HotelHomePage {

    readonly page: Page;
    readonly hotelsMenu: Locator;
    readonly hotelsLink: Locator;
    readonly cityTextbox: Locator;
    readonly checkInTextbox: Locator;
    readonly nextMonthButton: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.hotelsMenu = page.getByRole('listitem').filter({ hasText: 'Hotels' }).first();
        this.hotelsLink = page.getByText('Hotels', { exact: true });
        this.cityTextbox = page.getByPlaceholder('Enter City Name');
        this.checkInTextbox = page.getByRole('textbox', { name: 'Check In' });
        this.nextMonthButton = page.getByRole('columnheader', { name: '>' });
        this.searchButton = page.getByRole('link', { name: 'Search For Your Dates' });
    }

    async navigateToHomePage() {
        await this.page.goto('https://www.holidify.com/');
    }

    async openHotelsSection() {
        await this.hotelsMenu.click();
        await this.hotelsLink.click();
    }

    async selectCity(city: string, suggestion?: string) {
        await this.page.waitForLoadState('networkidle');
        await this.cityTextbox.waitFor({ state: 'visible', timeout: 10000 });
        await this.cityTextbox.click();
        await this.cityTextbox.fill(city);
        if (suggestion) {
            await this.page.getByText(suggestion).click();
        } 
        else {
            await this.page.waitForTimeout(5000);
        }
    }

    async selectDates( checkIn: string, checkOut: string ) {
        await this.checkInTextbox.click();
        await this.nextMonthButton.click();
        await this.page.getByRole('cell', { name: checkIn }).click();
        await this.page.getByRole('cell', { name: checkOut }).click();
    }

    async searchHotels() {
        await this.searchButton.click();
    }
}
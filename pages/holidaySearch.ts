import { Page, Locator, expect } from '@playwright/test';

export class SearchResultsPage {
    readonly page: Page;
    readonly closePopupButton: Locator;
    readonly firstFilter: Locator;
    readonly secondFilter: Locator;
    readonly thirdFilter: Locator;
    readonly fourthFilter: Locator;
    readonly sortDropdown: Locator;
    readonly packageLink: Locator;
    readonly itineraryTab: Locator;
    readonly stayMealsTab: Locator;
    readonly policiesTab: Locator;
    readonly reviewsTab: Locator;

    constructor(page: Page) {

        this.page = page;
        this.closePopupButton = page.getByRole('button', { name: 'Close' });
        this.firstFilter = page.locator('.checkbox-hole').first();
        this.secondFilter = page.locator('label:nth-child(3) > .checkbox-hole').first();
        this.thirdFilter = page.locator('div:nth-child(4) > label:nth-child(4) > .checkbox-hole').first();
        this.fourthFilter = page.locator('div:nth-child(6) > label:nth-child(5) > .checkbox-hole').first();
        this.sortDropdown = page.locator('#sortPackages');
        this.packageLink = page.getByRole('link', { name: 'Rishikesh Rafting Package for' });
        this.itineraryTab = page.getByText('Itinerary', { exact: true });
        this.stayMealsTab = page.getByText('Stay & Meals');
        this.policiesTab = page.getByText('Policies', { exact: true });
        this.reviewsTab = page.getByText('Reviews', { exact: true });
    }

    async applyFilters() {
        await this.firstFilter.click();
        await this.secondFilter.click();
        await this.thirdFilter.click();
        await this.fourthFilter.click();
    }

    async openPackageModalPage() {
        await this.page.goto('https://www.holidify.com/state/uttarakhand/packages.html?minDuration=0&maxDuration=3#packageModal');
    }

    async closePopupIfPresent() {
        if (await this.closePopupButton.isVisible()) {
            await this.closePopupButton.click();
        }
    }

    async sortByPriceLowToHigh() {
        await this.sortDropdown.selectOption('priceLowHigh');
    }

    async openPackage() {
        await this.packageLink.click();
    }

    async verifyPackageTabs() {
        await this.itineraryTab.click();
        await this.stayMealsTab.click();
        await this.policiesTab.click();
        await this.reviewsTab.click();
    }
}
import {Page, expect, Locator} from '@playwright/test';

export class HolidaySearchResultsPage{
    readonly page: Page;
    readonly packageCards: Locator;

    constructor(page: Page) {

        this.page = page;

        this.packageCards =
            page.locator('.package-card');
    }

    async verifyResultsDisplayed() {

        await this.page.waitForLoadState('networkidle');

        await expect(
            this.page.locator('body')
        ).toContainText(/package|trip|tour/i);
    }
}

import { test } from '@playwright/test';
import { HomePage } from '../pages/holidayhome';
import { SearchResultsPage } from '../pages/holidaySearch';

test('Search holiday package', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchResultsPage = new SearchResultsPage(page);
    await homePage.navigateToHomePage();
    await homePage.searchTrip();
    await searchResultsPage.closePopupIfPresent();
});

test('Without Filters Flow', async ({page}) => { 
    const hoamepage = new HomePage(page);
    const searchResultsPage = new SearchResultsPage(page);
    await hoamepage.navigateToHomePage();
    await hoamepage.selectDestination();
    await hoamepage.selectTripDuration();
    await hoamepage.clickSearch();
    await searchResultsPage.openPackageModalPage();
    await searchResultsPage.closePopupIfPresent();
    await searchResultsPage.openPackage();
    await searchResultsPage.verifyPackageTabs();
});

test('Uttarakhand Package Flow', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchResultsPage = new SearchResultsPage(page);
    await homePage.navigateToHomePage();
    await homePage.searchTrip();
    await searchResultsPage.applyFilters();
    await searchResultsPage.openPackageModalPage();
    await searchResultsPage.closePopupIfPresent();
    await searchResultsPage.sortByPriceLowToHigh();
    await searchResultsPage.openPackage();
    await searchResultsPage.verifyPackageTabs();
});

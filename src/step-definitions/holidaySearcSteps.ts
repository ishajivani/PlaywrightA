import { page } from '../support/hooks';
import { Given, When, Then } from '@cucumber/cucumber';
import { HolidayHomePage } from '../pages/HolidayHomePage';
import { HolidaySearchResultsPage } from '../pages/HolidaySearchResultsPage';


let homePage: HolidayHomePage;
let resultPage: HolidaySearchResultsPage;

Given('user opens Holidify website', async ()=> {
  homePage = new HolidayHomePage(page);
  resultPage = new HolidaySearchResultsPage(page);

  await homePage.navigate();
});

When('user selects destination {string}', async (destination: string) => {
  await homePage.selectDestination(destination);
});

When('user selects trip duration {string}', async (duration: string) => {
  await homePage.selectTripDuration(duration);
});

Then('holiday packages should be displayedddd', async () => {
  await resultPage.verifyResultsDisplayed();
});
import { test } from '@playwright/test';
import { FlightSearchPage } from '../pages/flightsearchpage';

test('Search flight and view details', async ({ page }) => {
    const flightPage = new FlightSearchPage(page);
    await flightPage.navigateToApplication();
    await flightPage.acceptCookies();
    await flightPage.openFlightsTab();
    await flightPage.selectDepartureCity('new');
    await flightPage.selectArrivalCity('new de');
    await flightPage.selectTravelDate('27');
    await flightPage.increasePassengers();
    await flightPage.searchFlights();
    await flightPage.viewFlightDetails();
});
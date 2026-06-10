import { Page, Locator, expect } from '@playwright/test';

export class FlightSearchPage {

    readonly page: Page;

    readonly cookieButton: Locator;
    readonly flightsTab: Locator;
    readonly departureTextbox: Locator;
    readonly arrivalTextbox: Locator;
    readonly departureSuggestion: Locator;
    readonly arrivalSuggestion: Locator;
    readonly passengersDropdown: Locator;
    readonly adultIncrementButton: Locator;
    readonly searchFlightsButton: Locator;
    readonly flightDetailsButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cookieButton = page.getByRole('button', { name: 'I Understand & Continue'});
        this.flightsTab = page.getByRole('tab', { name: 'flight_takeoff Flights' });
        this.departureTextbox = page.getByRole('textbox', { name: 'Departure From' });
        this.arrivalTextbox = page.getByRole('textbox', { name: 'Arrival To' });
        this.departureSuggestion = page.getByText('subdirectory_arrow_right John');
        this.arrivalSuggestion = page.getByText('Indira Gandhi Intl');
        this.passengersDropdown = page.getByText('person Passengers 1 Passenger');
        this.adultIncrementButton = page.getByRole('button', { name: 'add' }).nth(1);
        this.searchFlightsButton = page.getByRole('button', { name: 'Search Flights' });
        this.flightDetailsButton = page.getByRole('button', { name: 'Details expand_more' }).first();
    }

    async navigateToApplication() {
        await this.page.goto('https://phptravels.net/');
    }

    async acceptCookies() {
        await this.cookieButton.click();
    }

    async openFlightsTab() {
        await this.flightsTab.click();
    }

    async selectDepartureCity(city: string) {
        await this.departureTextbox.click();
        await this.departureTextbox.fill(city);
        await this.departureSuggestion.click();
    }

    async selectArrivalCity(city: string) {
        await this.arrivalTextbox.click();
        await this.arrivalTextbox.fill(city);
        await this.arrivalSuggestion.click();
    }

    async selectTravelDate(date: string) {
        await this.page
            .getByRole('table')
            .getByText(date, { exact: true })
            .click();
    }

    async increasePassengers() {
        await this.passengersDropdown.click();
        await this.adultIncrementButton.click();
    }

    async searchFlights() {
        await this.searchFlightsButton.click();
    }

    async viewFlightDetails() {
        await this.flightDetailsButton.click();
    }
}
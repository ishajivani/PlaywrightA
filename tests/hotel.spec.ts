import { test } from '@playwright/test';

import { HotelHomePage } from '../pages/hotelhome';
import { HotelResultPage } from '../pages/hotelresults';
import { HotelDetailsPage } from '../pages/hoteldetails';
import { HotelBookingPage } from '../pages/hotelbooking';

test('Holidify Hotels', async ({ page }) => {
    const hotelHomePage = new HotelHomePage(page);
    await hotelHomePage.navigateToHomePage();
    await hotelHomePage.openHotelsSection();
    await hotelHomePage.selectCity('rishi','Rishikesh, Uttarakhand');
    await hotelHomePage.selectDates( '25', '26');
    await hotelHomePage.searchHotels();
    const hotelResultPage = new HotelResultPage(page);
    await hotelResultPage.applyFilters();
    const hotelPopup = await hotelResultPage.openHotel();
    const hotelDetailsPage = new HotelDetailsPage(hotelPopup);
    await hotelDetailsPage.dismissSignInPopup();
    const bookingPopup = await hotelDetailsPage.openBookingSite();
    const hotelBookingPage = new HotelBookingPage(bookingPopup);
    await hotelBookingPage.clickReserve();
});
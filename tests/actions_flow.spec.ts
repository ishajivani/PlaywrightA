import {test, expect } from '@playwright/test';

test('Test Name', async ({ page }) => {

   // await page.goto('https://phptravels.net/');
    await page.goto('https://phptravels.net/');
    await page.getByRole('button', { name: 'I Understand & Continue' }).click();
    await page.getByRole('tab', { name: 'flight_takeoff Flights' }).click();
    await page.getByRole('button', { name: 'Economy expand_more' }).click();
    await page.getByText('Economy Premium').click();
    await page.getByRole('textbox', { name: 'Departure From' }).click();
    await page.getByRole('textbox', { name: 'Departure From' }).fill('new');
    await page.getByText('subdirectory_arrow_right John').click();
    await page.getByRole('textbox', { name: 'Arrival To' }).click();
    await page.getByRole('textbox', { name: 'Arrival To' }).fill('delh');
    await page.locator('.p-2\\.5 > .flex.items-center.gap-2').click();
    await page.getByRole('table').getByText('22', { exact: true }).click();
    await page.getByRole('button', { name: 'Search Flights' }).click();
    await page.getByRole('button', { name: 'connecting_airports Stops' }).hover();
   //  await page.locator('.checkbox-item.checkbox-container').first().click();
    // await page.locator('#departure_airport_input').click();
    // await page.locator('#departure_airport_input').fill('New York');
    // await page.locator('.p-2.5 hover:bg-gray-50.cursor-pointer border-b.border-gray-100.last:border-b-0.transition-colors').nth(2).press('Enter');
    // //await page.locator('#arrival_airport_input').click();
    


});
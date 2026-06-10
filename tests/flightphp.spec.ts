import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://phptravels.net/');
await page.getByRole('button', { name: 'I Understand & Continue' }).click();
await page.getByRole('tab', { name: 'flight_takeoff Flights' }).click();
await page.getByRole('textbox', { name: 'Departure From' }).click();
await page.getByRole('textbox', { name: 'Departure From' }).fill('new');
await page.getByText('subdirectory_arrow_right John').click();
await page.getByRole('textbox', { name: 'Arrival To' }).fill('new de');
await page.getByText('Indira Gandhi Intl').click();
await page.getByRole('table').getByText('27', { exact: true }).click();
await page.getByText('person Passengers 1 Passenger').click();
await page.getByRole('button', { name: 'add' }).nth(1).click();
await page.getByRole('button', { name: 'Search Flights' }).click();
await page.getByRole('button', { name: 'Details expand_more' }).first().click();
});
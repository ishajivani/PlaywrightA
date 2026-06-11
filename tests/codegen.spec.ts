import { test, expect } from '@playwright/test';

test('Codegen Recording', async ({ page }) => {
await page.goto('https://phptravels.net/');
await page.getByRole('button', { name: 'I Understand & Continue' }).click();
await page.getByRole('tab', { name: 'mosque Umrah' }).click();
await page.getByText('location_on Destination Select City expand_more').click();
await page.getByText('location_city Makkah Saudi').click();
await page.getByRole('button', { name: 'Search Umrah' }).click();
await page.getByRole('link', { name: 'info More Details' }).first().click();
await page.getByRole('button', { name: 'Arrival in Makkah' }).click();
await page.getByRole('button', { name: 'Performing Umrah' }).click();
await page.getByRole('button', { name: 'Discovering Makkah\'s Heritage' }).click();
await page.getByRole('button', { name: 'Visit to Madinah' }).click();
await page.getByRole('button', { name: 'Exploring Islamic Sites' }).click();
await page.getByRole('button', { name: 'Final Days of Worship' }).click();
await page.getByRole('button', { name: 'Departure' }).click();
});
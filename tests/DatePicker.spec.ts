import { test, expect } from '@playwright/test';

test('Date Picker', async ({ page }) => {

await page.goto('https://airobuzz.com/#/');
await page.locator('#FromCity').fill('Ahmedabad' );
await page.locator('#ToCity').fill('Rajkot');
await page.locator('#txtFromDate').click();
await page.locator('.day').nth(5).click();
await page.locator('#txtToDate').click();
await page.locator('.day').nth(6).click();
await page.getByText ('SEARCH BUS').click();

});

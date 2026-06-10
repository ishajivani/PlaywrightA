import { test, expect } from '@playwright/test';

test('Check boxes', async ({ page }) => {

await page.goto('https://www.amazon.in/');
await page.getByPlaceholder('Search Amazon.in').fill('mobile');
await page.getByPlaceholder('Search Amazon.in').press('Enter');
// await page.locator('#brandsRefinements').locator('.a-icon.a-icon-checkbox').first().check();
// await page.locator('#brandsRefinements').locator('.a-icon.a-icon-checkbox').nth(2).check();
await page.getByRole('link', { name: 'Apply the filter Samsung to' }).dblclick();
await page.getByRole('link', { name: 'Apply the filter OnePlus to' }).dblclick();
// await page.getByRole('group', { name: 'Storage Capacity'}).getByText('.a-section.a-spacing-none').last().check();
// await page.getByRole('link', { name: 'Apply the filter 64 GB to narrow results' }).check();

});

test('DropDown', async ({ page }) => {
await page.goto('https://www.amazon.in/s?k=mobile&crid=1XJR7OOZR001J&sprefix=%2Caps%2C258&ref=nb_sb_ss_recent_1_0_recent');
await page.getByLabel('Select the department you').selectOption('search-alias=stripbooks');
await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('harry potter');
await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
await page.getByLabel('Select the department you').selectOption('search-alias=beauty');
await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('liner');
await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
});

import { test, expect } from '@playwright/test';

test('Codegen Recording', async ({ page }) => {
await page.goto('https://www.amazon.in/');
await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
await page.goto('https://www.amazon.in/s?k=mobile&crid=39QZOHGZL9UOE&sprefix=%2Caps%2C262&ref=nb_sb_noss');
const page1Promise = page.waitForEvent('popup');
  await page.locator('.a-link-normal.s-no-outline').first().click();
  const page1 = await page1Promise;
await page1.getByRole('button', { name: 'Add to cart' }).click();
await page1.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
await page1.getByRole('link', { name: 'Amazon.in' }).click();
await page1.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
await page1.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('boat');
await page1.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('link', { name: 'Sponsored Ad - Boat New' }).click();
  const page2 = await page2Promise;
await page2.getByRole('button', { name: 'Add to cart' }).click();
await page2.getByRole('link', { name: 'items in cart' }).click();
await page2.getByRole('button', { name: 'Proceed to Buy Buy Amazon' }).click();
});
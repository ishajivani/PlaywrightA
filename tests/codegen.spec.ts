import { test, expect } from '@playwright/test';

test('Codegen Recording', async ({ page }) => {
await page.goto('https://www.amazon.in/');
await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('iphone17');
await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
await page.locator('#a-autoid-1-announce').click();
await page.getByRole('link', { name: 'item in cart' }).click();
await page.getByRole('button', { name: 'Increase quantity by one' }).click();
await page.getByRole('button', { name: 'Proceed to Buy Buy Amazon' }).click();
});
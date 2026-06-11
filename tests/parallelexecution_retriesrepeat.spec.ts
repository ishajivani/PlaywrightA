import { test, expect } from '@playwright/test';

test.describe.configure({
  mode: 'parallel'
});

// test('Mobile Search', async ({ page }) => {
//   await page.waitForTimeout(5000);
//   await page.goto('https://www.amazon.in/');
//   await page.waitForTimeout(5000);
//   await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
//   await page.waitForTimeout(5000);
//   await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('mobile');
//   await page.waitForTimeout(5000);
//   await page.keyboard.press('Enter');
//   await page.waitForTimeout(5000);
//   await page.getByRole('button', { name: 'Add to cart' }).first().click();
//   await page.waitForTimeout(5000);
// });

// test('Boat Search', async ({ page }) => {
//     await page.goto('https://www.amazon.in/');
//     await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
//     await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('boat');
//     await page.keyboard.press('Enter');
//     await page.locator('#a-autoid-1-announce').click();
//     await page.waitForTimeout(5000);
// });


test('Mobile Search', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  const searchBox = page.locator('#twotabsearchtextbox');
  await expect(searchBox).toBeVisible({ timeout: 15000 });
  await searchBox.fill('mobile');
  await page.keyboard.press('Enter');
  await page.waitForLoadState('domcontentloaded');
  const searchResults = page.locator('[data-component-type="s-search-result"]');
  await expect(searchResults.first()).toBeVisible({timeout: 15000});
});

test('Boat Search', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  const searchBox = page.locator('#twotabsearchtextbox');
  await expect(searchBox).toBeVisible({timeout: 15000});
  await searchBox.fill('boat');
  await page.keyboard.press('Enter');
  await page.waitForLoadState('domcontentloaded');
  const searchResults = page.locator('[data-component-type="s-search-result"]');
  await expect(searchResults.first()).toBeVisible({timeout: 15000});
});

import { test, expect } from '@playwright/test';

test.describe.configure({
  mode: 'parallel'
});

// useage of only one worker as in parallel mode if 2 workeres work together there is clash in database 

test('Mobile Search', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  const searchBox = page.locator('#twotabsearchtextbox');
  await expect(searchBox).toBeVisible({ timeout: 60000 });
  await searchBox.fill('laptop');
  await page.keyboard.press('Enter');
  await page.waitForLoadState('domcontentloaded');
  const searchResults = page.locator('[data-component-type="s-search-result"]');
  await expect(searchResults.first()).toBeVisible({timeout: 60000});
});

test('Boat Search', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  const searchBox = page.locator('#twotabsearchtextbox');
  await expect(searchBox).toBeVisible({timeout: 60000});
  await searchBox.fill('boat');
  await page.keyboard.press('Enter');
  await page.waitForLoadState('domcontentloaded');
  const searchResults = page.locator('[data-component-type="s-search-result"]');
  await expect(searchResults.first()).toBeVisible({timeout: 60000});
});

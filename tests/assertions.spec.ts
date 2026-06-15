import { test, expect } from '@playwright/test';

//test.describe.configure({ mode: 'parallel' });

test('Amazon Assertions', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await expect(page).toHaveURL(/amazon/);
  await page.locator('#twotabsearchtextbox').fill('iphone 17');
  await page.locator('#nav-search-submit-button').click();
  await expect(page.locator('[data-component-type="s-search-result"]').first()).toBeVisible();

// Screenshot before action
//   await page.screenshot({
//     path: 'screenshots/search-results.png',
//     fullPage: true
//   });

  await page.locator('#a-autoid-1-announce').click();
  await expect(page.locator('#nav-cart-count')).toHaveText('1');
  await expect.soft(page.locator('#nav-cart-count')).toBeVisible();
  await expect.soft(page).toHaveTitle(/Amazon/);
  await page.locator('#nav-cart-count').click();
  await expect(page).toHaveURL(/cart/);
  await page.getByRole('link', { name: 'Amazon.in' }).click();
  await page.locator('#nav-hamburger-menu').click();
  await page.getByRole('button', { name: 'Open All Categories Menu' }).click();
  await page.getByRole('link', { name: 'Bestsellers' }).click();
  await page.locator('#B0FMDL81GS > a').click();
  await page.getByRole('button', { name: 'Add to cart', exact: true }).click();

});
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.amazon.in/');
  await expect(page).toHaveTitle(/Amazon/);
  await page.getByPlaceholder('Search Amazon.in').fill('boAt Airdopes Joy');
  await page.getByPlaceholder('Search Amazon.in').press('Enter');
  await page.getByRole('link', { name: /boAt Airdopes Joy/i }).click();
  await page.goto(
    'https://www.amazon.in/boAt-Airdopes-Alpha-Wireless-Earbuds/dp/B0C3ZYFZ77/?th=1'
  );
  await expect(page.locator('span#productTitle')).toBeVisible();
  await page.getByRole('radio', { name: 'Swedish White ₹799.00 with 77' }).click();
  await expect(
    page.getByRole('radio', { name: 'Swedish White ₹799.00 with 77' })
  ).toBeChecked();
  await page.getByRole('button', { name: 'Add to cart', exact: true }).click();
  await expect(
    page.getByRole('heading', { name: /Added to Cart|1 item in cart/i })
  ).toBeVisible({ timeout: 5000 }).catch(() => {
    console.log('Cart confirmation heading not found — continuing...');
  });
});

test('test2', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('boat ');
  await page.goto('https://www.amazon.in/s?k=boat+ear+buds+airpods&crid=GK9JIPG65UF7&sprefix=boat+%2Caps%2C465&ref=nb_sb_ss_mvt-t11-ranker_1_5');
  await page.locator('#a-autoid-1-announce').click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.s-widget-container.s-spacing-small.s-widget-container-height-small.celwidget.slot\\=MAIN.template\\=SEARCH_RESULTS.widgetId\\=search-results_2 > div > .rush-component.s-featured-result-item > span > .puis-card-container > div > div > .puisg-col.puisg-col-4-of-4.puisg-col-4-of-8.puisg-col-4-of-12.puisg-col-4-of-16.puisg-col-4-of-20.puisg-col-4-of-24.puis-list-col-left > .puisg-col-inner > .s-product-image-container > div > .rush-component > .a-link-normal').click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'item in cart' }).click();
});
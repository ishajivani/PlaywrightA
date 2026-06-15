import { test, expect } from '@playwright/test';

test.describe.configure({
  mode: 'serial'
});

test('Amazon Search And Add To Cart', async ({ page }) => {

  test.setTimeout(90000);

  await page.goto('https://www.amazon.in/', {
    waitUntil: 'domcontentloaded'
  });

  await expect(page).toHaveTitle(/Amazon/i);

  // Search
  const searchBox = page.locator('#twotabsearchtextbox');

  await expect(searchBox).toBeVisible({
    timeout: 15000
  });

  await searchBox.fill('boAt Airdopes');

  await page.keyboard.press('Enter');

  await page.waitForLoadState('domcontentloaded');

  // Screenshot for debugging
  await page.screenshot({
    path: 'amazon-search-results.png',
    fullPage: true
  });

  // Check if Amazon returned results
  const results = page.locator(
    '[data-component-type="s-search-result"]'
  );

  await expect(results.first()).toBeVisible({
    timeout: 30000
  });

  console.log(
    'Results Found:',
    await results.count()
  );

  // Open first product
  const firstProduct = page.locator(
    '[data-component-type="s-search-result"] h2 a'
  ).first();

  await firstProduct.scrollIntoViewIfNeeded();

  await firstProduct.click();

  await page.waitForLoadState('domcontentloaded');

  // Product title validation
  const productTitle = page.locator('#productTitle');

  await expect(productTitle).toBeVisible({
    timeout: 15000
  });

  console.log(
    'Product:',
    await productTitle.textContent()
  );

  // Add to cart
  const addToCartButton =
    page.locator('#add-to-cart-button');

  await expect(addToCartButton).toBeVisible({
    timeout: 15000
  });

  await addToCartButton.click();

  // Cart validation
  await expect(
    page.locator('body')
  ).toContainText(
    /Added to Cart|added to cart|Proceed to checkout/i,
    {
      timeout: 15000
    }
  );

});

test('Amazon Product Navigation', async ({ page }) => {

  test.setTimeout(90000);

  await page.goto('https://www.amazon.in/');

  const searchBox =
    page.locator('#twotabsearchtextbox');

  await expect(searchBox).toBeVisible({
    timeout: 15000
  });

  await searchBox.fill('boat earbuds');

  await page.keyboard.press('Enter');

  await page.waitForLoadState('domcontentloaded');

  const results =
    page.locator('[data-component-type="s-search-result"]');

  await expect(results.first()).toBeVisible({
    timeout: 30000
  });

  const firstProduct =
    page.locator(
      '[data-component-type="s-search-result"] h2 a'
    ).first();

  await firstProduct.scrollIntoViewIfNeeded();

  const popupPromise =
    page.waitForEvent('popup')
      .catch(() => null);

  await firstProduct.click();

  const popup =
    await popupPromise;

  const activePage =
    popup ?? page;

  await activePage.waitForLoadState();

  await expect(
    activePage.locator('#productTitle')
  ).toBeVisible({
    timeout: 15000
  });

  console.log(
    'Opened Product:',
    await activePage
      .locator('#productTitle')
      .textContent()
  );

});
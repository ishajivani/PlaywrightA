// // import { test, expect } from '@playwright/test';

// // //test.describe.configure({ mode: 'parallel' });

// // test('Amazon Assertions', async ({ page }) => {
// //   await page.goto('https://www.amazon.in/');
// //   await expect(page).toHaveURL(/amazon/);
// //   await page.locator('#twotabsearchtextbox').fill('iphone 17');
// //   await page.locator('#nav-search-submit-button').click();
// //   await expect(page.locator('[data-component-type="s-search-result"]').first()).toBeVisible();

// // // Screenshot before action
// // //   await page.screenshot({
// // //     path: 'screenshots/search-results.png',
// // //     fullPage: true
// // //   });

// //   await page.locator('#a-autoid-1-announce').click();
// //   await expect(page.locator('#nav-cart-count')).toHaveText('1');
// //   await expect.soft(page.locator('#nav-cart-count')).toBeVisible();
// //   await expect.soft(page).toHaveTitle(/Amazon/);
// //   await page.locator('#nav-cart-count').click();
// //   await expect(page).toHaveURL(/cart/);
// //   await page.getByRole('link', { name: 'Amazon.in' }).click();
// //   await page.locator('#nav-hamburger-menu').click();
// //   await page.getByRole('button', { name: 'Open All Categories Menu' }).click();
// //   await page.getByRole('link', { name: 'Bestsellers' }).click();
// //   await page.locator('#B0FMDL81GS > a').click();
// //   await page.getByRole('button', { name: 'Add to cart', exact: true }).click();

// // });

// import { test, expect } from '@playwright/test';

// test('Amazon Assertions', async ({ page }) => {
//   await page.goto('https://www.amazon.in/');
//   await expect(page).toHaveURL(/amazon/);
//   await page.locator('#twotabsearchtextbox').fill('iphone 17');
//   await page.locator('#nav-search-submit-button').click();
//   const firstResult = page
//     .locator('[data-component-type="s-search-result"]')
//     .first();
//   await expect(firstResult).toBeVisible();
//   const addToCartButton = page.locator(
//     '#a-autoid-1-announce'
//   );
//   if (await addToCartButton.isVisible()) {
//     await addToCartButton.click();
//   }
//   await expect(page.locator('#nav-cart-count')).toHaveText('1');
//   await expect.soft(
//     page.locator('#nav-cart-count')
//   ).toBeVisible();
//   await expect.soft(page).toHaveTitle(/Amazon/);
//   await page.locator('#nav-cart-count').click();
//   await expect(page).toHaveURL(/cart/);
//   // await page.getByRole('link', { name: 'Amazon.in' }).click();
//   // await page.locator('#nav-hamburger-menu').click();
//   // await page.locator('#hmenu-content').waitFor({
//   //   state: 'visible'
//   // });
//   // await page.getByText('Best Sellers', {
//   //   exact: true
//   // }).click();

//   await page.getByRole('link', {
//   name: /Best Sellers/i
// }).click();

//   await expect(page).toHaveURL(/bestsellers/i);
//   const product = page.locator('a.a-link-normal').first();
//   await product.click();
//   const pages = page.context().pages();
//   const productPage =
//     pages.length > 1
//       ? pages[pages.length - 1]
//       : page;
//   await productPage.waitForLoadState();
//   const productAddToCart = productPage.locator(
//     '#add-to-cart-button'
//   );
//   await expect(productAddToCart).toBeVisible({
//     timeout: 15000
//   });
//   await productAddToCart.click();
//   await expect(
//     productPage.locator('#nav-cart-count')
//   ).toBeVisible();
// });

import { test, expect } from '@playwright/test';

test('Amazon Assertions', async ({ page }) => {

  test.setTimeout(120000);

  await page.goto(
    'https://www.amazon.in/',
    {
      waitUntil: 'domcontentloaded'
    }
  );

  await expect(page)
    .toHaveURL(/amazon/i);

  const searchBox =
    page.locator('#twotabsearchtextbox');

  await searchBox.fill('iphone 17');

  await page.locator(
    '#nav-search-submit-button'
  ).click();

  const firstResult =
    page.locator(
      '[data-component-type="s-search-result"]'
    ).first();

  await expect(firstResult)
    .toBeVisible({
      timeout: 60000
    });

  await page.locator(
    '#nav-cart-count'
  ).click();

  await expect(page)
    .toHaveURL(
      /cart|gp\/cart/i
    );

  // Direct Best Sellers navigation
  await page.goto(
    'https://www.amazon.in/gp/bestsellers',
    {
      waitUntil: 'domcontentloaded'
    }
  );

  await expect(page)
    .toHaveURL(
      /bestsellers/i
    );

  const firstProduct =
    page.locator(
      'a.a-link-normal'
    ).first();

  await expect(firstProduct)
    .toBeVisible({
      timeout: 30000
    });

  await firstProduct.click();

  const productTitle =
    page.locator('#productTitle');

  await expect(productTitle)
    .toBeVisible({
      timeout: 30000
    });

});
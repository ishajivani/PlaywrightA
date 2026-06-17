import { test, expect } from '@playwright/test';

test('Mouse Actions', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://www.amazon.in/', { waitUntil: 'domcontentloaded' });
    const accountList = page.locator('#nav-link-accountList');
    await expect(accountList).toBeVisible({ timeout: 15000 });
    await accountList.hover();
    await expect( page.locator('#nav-flyout-accountList')).toBeVisible({ timeout: 10000 });
    const languageMenu = page.locator('#icp-nav-flyout');
    await expect(languageMenu).toBeVisible();
    await languageMenu.hover();
    const primeMenu = page.locator('#nav-link-amazonprime');
    await expect(primeMenu).toBeVisible();
    await primeMenu.hover();
    await page.evaluate(() => { window.scrollBy(0, 1000);});
    await page.waitForTimeout(1000);
    await page.evaluate(() => { window.scrollBy(0, -500);});
    await page.waitForTimeout(1000);
    await page.locator('body').hover();
    const cart = page.locator('#nav-cart');
    await expect(cart).toBeVisible({ timeout: 15000 });
    await expect( page.locator('#nav-cart-count')).toBeVisible();
    const logo = page.locator('#nav-logo-sprites');
    await expect(logo).toBeVisible();
});

test('Keyboard Actions', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://www.amazon.in/');
    const searchBox = page.locator('#twotabsearchtextbox');
    await expect(searchBox).toBeVisible();
    await searchBox.fill('mobile');
    await page.keyboard.press('Enter');
    await page.waitForLoadState('domcontentloaded');
    const results = page.locator( '[data-component-type="s-search-result"]' );
    await expect(results.first()).toBeVisible({ timeout: 30000});
    await page.keyboard.press('PageDown');
    const brandFilters = page.locator('#brandsRefinements li');
    const filterCount = await brandFilters.count();
    if (filterCount > 0) {
        await brandFilters.first().click();
        await page.waitForLoadState(
            'domcontentloaded'
        );
    }
});
import { test, expect } from '@playwright/test';

test('Mouse Actions', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://www.amazon.in/');
    await page.locator('#nav-link-accountList').hover();
    await page.locator('#icp-nav-flyout').hover();
    await page.locator('#nav-link-amazonprime').hover();
    await page.mouse.wheel(0, 1000);
    await page.mouse.wheel(0, -500);
    await page.locator('#nav-cart').hover();
    await page.locator('#nav-cart').click();
    await page.waitForLoadState('domcontentloaded');
    await page.goBack();
    await page.waitForLoadState('domcontentloaded');
    await page.locator('#nav-logo-sprites').hover();
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
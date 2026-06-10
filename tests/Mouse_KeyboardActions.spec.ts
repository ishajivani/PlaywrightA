import { test, expect } from '@playwright/test';



test('Mouse Actions', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.locator('#nav-link-accountList').hover();
    await page.locator('#icp-nav-flyout').hover();
    await page.locator('#nav-link-amazonprime').hover();
    await page.mouse.wheel(0, 1000);
    await page.mouse.wheel(0, -500);
    await page.locator('#nav-cart').hover();
    await page.locator('#nav-cart').click();
    await page.goBack();
    await page.locator('#nav-logo-sprites').hover();
    await page.locator('#nav-logo-sprites').dblclick();
    await page.locator('#nav-logo-sprites').click({  button: 'right' });

});

test('Keyboard Actions', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.getByPlaceholder('Search Amazon.in').fill('mobile');
    await page.keyboard.press('Enter');
    // await page.waitForLoadState('networkidle');
    await page.locator('#brandsRefinements').locator('.a-icon.a-icon-checkbox').first().check();
    await page.keyboard.press('Space');
    await page.keyboard.press('PageDown');
    await page.locator('#brandsRefinements').locator('.a-icon.a-icon-checkbox').nth(3).check();
    await page.keyboard.press('Enter');
    // await page.keyboard.press('Tab');


});

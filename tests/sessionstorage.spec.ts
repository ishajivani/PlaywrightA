import { test, expect } from '@playwright/test';


test('Validate Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/', {timeout:60000});
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.context().storageState({ path: 'test-data/auth.json' });
})

test('Cart Section', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/cart.html', {timeout:60000});
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').dblclick();
    await page.locator('[data-test="firstName"]').fill('isha');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('jivani');
    await page.locator('[data-test="continue"]').click();
})


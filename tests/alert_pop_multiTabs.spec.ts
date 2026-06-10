import { test, expect } from '@playwright/test';

test('Alerts', async ({ page }) => {
    await page.goto ('https://automationintesting.online/');
    const alert = page.getByRole('alert');
    await expect(alert).toBeVisible();
    const message = await alert.textContent();
    console.log('Alert Message:', message);
});

test('J Alerts', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog', async dialog => {
        console.log(dialog.type());      // alert
        console.log(dialog.message());   // I am a JS Alert
        await dialog.accept();
    });
    await page.getByRole('button', { name: 'Click for JS Alert'}).click();
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
});

// https://the-internet.herokuapp.com/javascript_alerts
// test('A Alerts', async ({ page }) => {
//     await page.goto('https://www.amazon.in/s?k=mobile&crid=1UJQN2PPPGMVE&sprefix=mobil%2Caps%2C313&ref=nb_sb_noss_2');
//     const alert = page.locator('[role="alert"]');
//     await expect(alert).toBeVisible();
// });


test('Multi Tab Handling', async ({ page }) => {
await page.goto('https://www.amazon.in/');
await page.getByRole('searchbox', { name: 'Search Amazon.in' }).dblclick();
await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('boat');
await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
const page1Promise = page.waitForEvent('popup');
  await page.locator('.s-product-image-container').first().click();
  const page1 = await page1Promise;
await page1.getByRole('button', { name: 'Add to cart' }).click();
});


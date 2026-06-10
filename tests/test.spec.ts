import { test, expect } from '@playwright/test';   

test('test', async ({ page }) => {
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
await page.getByRole('textbox', { name: 'Username:' }).click();
await page.getByRole('textbox', { name: 'Username:' }).fill('rahulshettyacademy');
await page.getByRole('textbox', { name: 'Password:' }).click();
await page.getByRole('textbox', { name: 'Password:' }).fill('Learning@830$3mK2');
await page.getByRole('button', { name: 'Sign In' }).click();
await page.locator('app-card').filter({ hasText: 'iphone X $24.99 Lorem ipsum' }).getByRole('button').click();
await page.getByText('Checkout ( 1 ) (current)').click();
await page.getByRole('button', { name: 'Checkout' }).click();

});

 

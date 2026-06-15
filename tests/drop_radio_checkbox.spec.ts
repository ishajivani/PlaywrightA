import { test, expect } from '@playwright/test';

test ('Check boxes', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://www.amazon.in/');
    await page.locator('#twotabsearchtextbox').fill('mobile');
    await page.keyboard.press('Enter');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('[data-component-type="s-search-result"]').first()).toBeVisible({timeout: 30000});
    const samsungFilter = page.getByRole('link', {name: /Samsung/i});
    if (await samsungFilter.count() > 0) {
        await samsungFilter.first().click();
        await page.waitForLoadState('domcontentloaded');
    }
    const onePlusFilter = page.getByRole('link', {
        name: /OnePlus/i
    });
    if (await onePlusFilter.count() > 0) {
        await onePlusFilter.first().click();
        await page.waitForLoadState('domcontentloaded');
    }
});

test('DropDown', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('https://www.amazon.in/', {
        waitUntil: 'domcontentloaded'
    });
    const departmentDropdown = page.locator('#searchDropdownBox');
    await expect(departmentDropdown).toBeVisible({
        timeout: 30000
    });
    await expect( departmentDropdown.locator('option') ).toContainText(['Books']);
    await departmentDropdown.selectOption({ label: 'Books' });
    const searchBox = page.locator('#twotabsearchtextbox');
    await searchBox.clear();
    await searchBox.fill('harry potter');
    await page.keyboard.press('Enter');
    const bookResults = page.locator('[data-component-type="s-search-result"]');
    await expect(bookResults.first()).toBeVisible({ timeout: 60000 });
    await page.goto('https://www.amazon.in/', {
        waitUntil: 'domcontentloaded'
    });
    const beautyDropdown = page.locator('#searchDropdownBox');
    await expect(beautyDropdown).toBeVisible({ timeout: 30000 });
    const options = await beautyDropdown.locator('option').allTextContents();
    try {
        await beautyDropdown.selectOption({ label: 'Beauty' });
    } 
    catch {
        await beautyDropdown.selectOption( 'search-alias=beauty' );
    }
    const beautySearchBox = page.locator('#twotabsearchtextbox');
    await beautySearchBox.clear();
    await beautySearchBox.fill('eyeliner');
    await page.keyboard.press('Enter');
    const beautyResults = page.locator('[data-component-type="s-search-result"]');
    await expect(beautyResults.first()).toBeVisible({ timeout: 60000 });
    await expect(page).toHaveTitle(/Amazon/i);
});
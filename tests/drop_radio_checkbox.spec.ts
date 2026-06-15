import { test, expect } from '@playwright/test';

test('Check boxes', async ({ page }) => {

    test.setTimeout(60000);

    await page.goto('https://www.amazon.in/');

    await page.locator('#twotabsearchtextbox').fill('mobile');
    await page.keyboard.press('Enter');

    await page.waitForLoadState('domcontentloaded');

    await expect(
        page.locator('[data-component-type="s-search-result"]').first()
    ).toBeVisible({
        timeout: 30000
    });

    // Samsung Filter
    const samsungFilter = page.getByRole('link', {
        name: /Samsung/i
    });

    if (await samsungFilter.count() > 0) {
        await samsungFilter.first().click();
        await page.waitForLoadState('domcontentloaded');
    }

    // OnePlus Filter
    const onePlusFilter = page.getByRole('link', {
        name: /OnePlus/i
    });

    if (await onePlusFilter.count() > 0) {
        await onePlusFilter.first().click();
        await page.waitForLoadState('domcontentloaded');
    }

});

test('DropDown', async ({ page }) => {

    test.setTimeout(60000);

    await page.goto('https://www.amazon.in/');

    const departmentDropdown =
        page.locator('#searchDropdownBox');

    await expect(departmentDropdown)
        .toBeVisible();

    // Books
    await departmentDropdown.selectOption({
        label: 'Books'
    });

    const searchBox =
        page.locator('#twotabsearchtextbox');

    await searchBox.fill('harry potter');

    await page.keyboard.press('Enter');

    await page.waitForLoadState('domcontentloaded');

    await expect(
        page.locator('[data-component-type="s-search-result"]').first()
    ).toBeVisible({
        timeout: 30000
    });

    // Go back to home page
    await page.goto('https://www.amazon.in/');

    await departmentDropdown.selectOption({
        label: 'Beauty'
    });

    await searchBox.fill('eyeliner');

    await page.keyboard.press('Enter');

    await page.waitForLoadState('domcontentloaded');

});

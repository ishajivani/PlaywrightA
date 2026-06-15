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


test.only ('DropDown', async ({ page }) => {

    test.setTimeout(60000);

    // ---------- BOOKS ----------
    await page.goto('https://www.amazon.in/');

    let departmentDropdown =
        page.locator('#searchDropdownBox');

    await expect(departmentDropdown).toBeVisible();

    await departmentDropdown.selectOption({
        label: 'Books'
    });

    let searchBox =
        page.locator('#twotabsearchtextbox');

    await searchBox.fill('harry potter');

    await page.keyboard.press('Enter');

    await page.waitForLoadState('networkidle');

    await expect(
        page.locator('[data-component-type="s-search-result"]').first()
    ).toBeVisible({
        timeout: 30000
    });

    // ---------- BEAUTY ----------
    await page.goto('https://www.amazon.in/');

    await page.waitForLoadState('networkidle');

    // Re-locate after navigation
    departmentDropdown =
        page.locator('#searchDropdownBox');

    searchBox =
        page.locator('#twotabsearchtextbox');

    await expect(departmentDropdown).toBeVisible();

    // Debug available options
    const options = await departmentDropdown.locator('option').allTextContents();
    console.log('Available Options:', options);

    await departmentDropdown.selectOption({
        label: 'Beauty'
    });

    await searchBox.fill('eyeliner');

    await page.keyboard.press('Enter');

    await page.waitForLoadState('networkidle');

    await expect(
        page.locator('[data-component-type="s-search-result"]').first()
    ).toBeVisible({
        timeout: 30000
    });
});
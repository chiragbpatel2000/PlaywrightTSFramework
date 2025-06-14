import test, { expect } from "@playwright/test";

test('It should verify documentation menu items', async ({ page }) => {
    await page.goto('https://rickandmortyapi.com/documentation/');
    await page.waitForLoadState('domcontentloaded');
    await page.locator('role=link[name="Endpoints"]').click();
    await expect(page).toHaveURL(/documentation\/?$/);
});
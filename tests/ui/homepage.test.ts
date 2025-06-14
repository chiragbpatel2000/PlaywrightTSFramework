import { test, expect } from '@playwright/test';

test('should navigate to documentation and verify content', async ({ page }) => {
    await page.goto('https://rickandmortyapi.com/documentation/');
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveTitle(/Rick and Morty API/);
    const mainHeading = page.locator('role=heading[name="Rick and Morty API"]');
    await expect(mainHeading).toBeVisible();
});
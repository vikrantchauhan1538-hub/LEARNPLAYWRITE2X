import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.locator('div:nth-child(6) > .slds-is-relative.slds-grid.slds-grid_vertical-stretch > div > div > .slds-template__container > .slds-is-relative > .js-content').click();
    await page.getByRole('menuitem', { name: 'Training' }).click();
    await page.getByRole('menuitem', { name: 'Resources' }).click();
    await page.getByRole('menuitem', { name: 'Training' }).click();
    await page.getByRole('menuitem', { name: 'Training Calendar' }).click();
});
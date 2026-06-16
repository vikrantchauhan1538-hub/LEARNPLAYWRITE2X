import { test, expect } from '@playwright/test';

async function getResult() {
    return "Pass";
}

getResult().then(result => console.log(result));
import { test, except } from @Playwright / test;
import { test, expect } from '@playwright/test';
test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
})
await expect(page).toHaveTitle(/Playwright/);

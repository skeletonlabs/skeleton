import { expect, test } from '@playwright/test';
import { cwd } from 'process';

const [template, theme] = cwd().split('/').slice(-2);
test(`Screenshot matches golden image for ${template}-${theme}`, async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveScreenshot(`${template}-${theme}.png`);
});
test.use({ colorScheme: 'dark' });
test(`Screenshot matches golden dark image for ${template}-${theme}-dark`, async ({	page }) => {
	await page.goto('/');
	await expect(page).toHaveScreenshot(`${template}-${theme}-dark.png`);
});
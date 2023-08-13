import { expect, test } from '@playwright/test';
import { cwd } from 'process';
import path from 'path';

const template = (cwd().split(path.sep).pop())?.split('-').pop();
const themes = [
	'skeleton',
	'modern',
	'hamlindigo',
	'rocket',
	'sahara',
	'gold-nouveau',
	'vintage',
	'seafoam',
	'crimson',
];
themes.forEach((theme) => {
	test(`Screenshot test ${template} ${theme}`, async ({ page }) => {
		await page.goto('/');
		await page.evaluate((newTheme) => {
			document.body.setAttribute('data-theme', newTheme);
		}, theme);
		await expect(page).toHaveScreenshot(`${template}-${theme}.png`);
	});
});
// test(`Screenshot matches golden image for ${template}-${theme}`, async ({ page }) => {
// 	await page.goto('/');
// 	await expect(page).toHaveScreenshot(`${template}-${theme}.png`);
// });
// test.use({ colorScheme: 'dark' });
// test(`Screenshot matches golden dark image for ${template}-${theme}-dark`, async ({	page }) => {
// 	await page.goto('/');
// 	await expect(page).toHaveScreenshot(`${template}-${theme}-dark.png`);
// });

// let body = document.body
// body.setAttribute('data-theme','crimson')
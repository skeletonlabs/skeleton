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
	test(`Screenshot light ${template} ${theme}`, async ({ page }) => {
		//await page.emulateMedia({ colorScheme: 'light', forcedColors: 'active' });
		await page.goto('/');
		await page.evaluate((newTheme) => {
			document.body.setAttribute('data-theme', newTheme);
			document.documentElement.classList.remove('dark');
		}, theme);
		await expect(page).toHaveScreenshot(`${template}-${theme}.png`);
	});
	
	test(`Screenshot dark ${template} ${theme}`, async ({ page }) => {
		//await page.emulateMedia({ colorScheme: 'dark', forcedColors: 'active' });
		await page.goto('/');
		await page.evaluate((newTheme) => {
			document.body.setAttribute('data-theme', newTheme);
			document.documentElement.classList.add('dark');
		}, theme);
		await expect(page).toHaveScreenshot(`${template}-${theme}-dark.png`);
	});
});
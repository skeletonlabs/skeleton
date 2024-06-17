import { expect, test } from '@playwright/test';

test('placeholder test', async ({ page }) => {
	await page.goto('/');
	expect(true).toBe(true);
});

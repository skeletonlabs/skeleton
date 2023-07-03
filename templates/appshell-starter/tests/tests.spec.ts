// @ts-check
import { test, expect } from '@playwright/test';
import { readFileSync, writeFileSync } from 'node:fs';


const themes = [
    'skeleton',
    'modern',
    'hamlindigo',
    'rocket',
    'sahara',
    'gold-nouveau',
    'vintage',
    'seafoam',
    'crimson'];

const appHtml = readFileSync('./src/app.html', 'utf-8');
const layoutHtml = readFileSync('./src/routes/+layout.svelte', 'utf-8');
for (let i = 0; i < themes.length; i++) {
    writeFileSync('./src/app.html', appHtml.replace(/data-theme=".*"/, `data-theme="${themes[i]}"`));
    writeFileSync('./src/routes/+layout.svelte', layoutHtml.replace(/theme-.*\.css/, `theme-${themes[i]}.css`));
    test(`test theme ${themes[i]}`, async ({ page }) => {
        await page.goto(`/#${themes[i]}`);
        await page.reload({ waitUntil: 'domcontentloaded' });
        const screenshot = await page.screenshot({ path: `tests/themescreens/theme-${themes[i]}.png`, fullPage: true });
        expect(screenshot).toMatchSnapshot(`theme-${themes[i]}.png`);
    });
}
writeFileSync('./src/app.html', appHtml.replace(/data-theme=".*"/, `data-theme="skeleton"`));
writeFileSync('./src/routes/+layout.svelte', layoutHtml.replace(/theme-.*\.css/, `theme-skeleton.css`));

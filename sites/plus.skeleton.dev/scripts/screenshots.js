/**
 * Captures and optimizes screenshots for community project pages.
 * Run with: pnpm screenshots
 *
 * Page selection guidelines:
 *   - Prefer visually rich pages: tools, editors, galleries, dashboards
 *   - Skip login/auth-gated pages — only capture publicly accessible content
 *   - Skip legal, privacy, and terms pages
 *   - Avoid pages that are mostly text with no notable design
 *   - Use scrollY to capture sections below the fold on single-page sites
 *   - heroCard and heroDetail should target the homepage hero section
 */

import { chromium } from 'playwright';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '../src/lib/assets/images/community');

// Config ---
// Add a new entry here for each community project. The slug must match the
// project's slug in get-projects.remote.ts and the output directory name.

const projects = [
	{
		slug: 'etesie',
		heroUrl: 'https://etesie.dev',
		screenshots: [
			{ url: 'https://etesie.dev/themes/browse' },
			{ url: 'https://etesie.dev/docs/auth/overview/introduction' },
			{ url: 'https://etesie.dev/figma' },
		],
	},
	{
		slug: 'typogram',
		heroUrl: 'https://typogram.co',
		screenshots: [
			{ url: 'https://typogram.co/studio/landing.html' },
			{ url: 'https://typogram.co/brand-guidelines.html?brandName=Radiant%20Waves%20Reiki' },
			{ url: 'https://typogram.co/font-discovery/' },
		],
	},
];

// Helpers ---

// Attempts to close common cookie banners and modals before capturing.
async function dismissOverlays(page) {
	try {
		await page.click(
			'[aria-label="Close"], button:has-text("Accept"), button:has-text("OK"), button:has-text("Got it"), button:has-text("Dismiss")',
			{ timeout: 2000 },
		);
	} catch {}
}

// Opens a page, waits for it to settle, then returns a raw screenshot buffer.
async function capturePage(browser, { url, width, height, scrollY = 0 }) {
	const ctx = await browser.newContext({
		colorScheme: 'dark',
		viewport: { width, height },
		deviceScaleFactor: 1,
	});
	const page = await ctx.newPage();

	await page.goto(url, { waitUntil: 'load', timeout: 45000 });
	await page.waitForTimeout(2000);
	await dismissOverlays(page);

	if (scrollY > 0) {
		await page.evaluate((y) => window.scrollTo(0, y), scrollY);
		await page.waitForTimeout(500);
	}

	const buffer = await page.screenshot({ clip: { x: 0, y: 0, width, height } });
	await page.close();
	return buffer;
}

// Capture functions ---

async function captureHero(browser, url, dest) {
	console.log(`  hero -> ${url}`);
	const buffer = await capturePage(browser, { url, width: 1600, height: 900 });

	await sharp(buffer).resize(1280, 560, { fit: 'cover', position: 'top' }).webp({ quality: 92 }).toFile(path.join(dest, 'hero.webp'));
	console.log('    saved hero.webp');
}

async function captureScreenshot(browser, { url, scrollY }, index, dest) {
	const filename = `screenshot-${String(index).padStart(3, '0')}.webp`;
	console.log(`  ${filename} -> ${url}`);

	try {
		const buffer = await capturePage(browser, { url, width: 1440, height: 900, scrollY });
		await sharp(buffer).resize(600, 400, { fit: 'cover', position: 'top' }).webp({ quality: 85 }).toFile(path.join(dest, filename));
		console.log(`    saved ${filename}`);
	} catch (e) {
		console.error(`    FAILED: ${e.message}`);
	}
}

function printSummary(projects) {
	console.log('\n=== Done ===');
	for (const { slug } of projects) {
		const dir = path.join(OUT, slug);
		const files = fs.readdirSync(dir).sort();
		console.log(`\n${slug}:`);
		for (const file of files) {
			const { size } = fs.statSync(path.join(dir, file));
			console.log(`  ${file} — ${(size / 1024).toFixed(1)} KB`);
		}
	}
}

// Main ---

// --hide-scrollbars suppresses scrollbars at the browser level — more reliable
// than CSS injection for capturing third-party sites.
const browser = await chromium.launch({ args: ['--hide-scrollbars'] });

for (const project of projects) {
	console.log(`\n=== ${project.slug} ===`);
	const dest = path.join(OUT, project.slug);
	fs.mkdirSync(dest, { recursive: true });

	await captureHero(browser, project.heroUrl, dest);

	for (let i = 0; i < project.screenshots.length; i++) {
		await captureScreenshot(browser, project.screenshots[i], i + 1, dest);
	}
}

await browser.close();
printSummary(projects);

/**
 * Captures and optimizes imagery for the plus.skeleton.dev showcases.
 *
 * Usage:
 *   pnpm screenshots               capture both showcases (community + templates)
 *   pnpm screenshots --community   capture community projects only
 *   pnpm screenshots --template    capture templates only
 *
 * Per entry the script writes:
 *   - card.webp         used by the listing/index page (768x432)
 *   - hero.webp         used by the detail page banner (1920x1080)
 *   - screenshot-NNN.webp  one per screenshot URL (zero-padded, 3 digits)
 *
 * Screenshot dimensions are per-showcase (community: 960x540, templates: 426x240).
 *
 * Page selection guidelines:
 *   - Prefer visually rich pages: tools, editors, galleries, dashboards
 *   - Skip login/auth-gated pages — only capture publicly accessible content
 *   - Skip legal, privacy, and terms pages
 *   - Avoid pages that are mostly text with no notable design
 *   - Use scrollY to capture sections below the fold on single-page sites
 *   - homepageUrl should target the project/template homepage hero
 */

import { chromium } from 'playwright';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS = path.join(__dirname, '../src/lib/assets/images');

// Capture viewport (matches the largest output — hero — so we never upscale).
const VIEWPORT = { width: 1920, height: 1080 };

// Shared output sizes.
const CARD = { width: 768, height: 432, quality: 88 };
const HERO = { width: 1920, height: 1080, quality: 92 };

// Showcases ---

const showcases = {
	community: {
		label: 'community',
		outDir: path.join(ASSETS, 'community'),
		screenshotSize: { width: 960, height: 540, quality: 85 },
		entries: [
			{
				slug: 'etesie',
				homepageUrl: 'https://etesie.dev',
				screenshots: [
					{ url: 'https://etesie.dev/themes/browse' },
					{ url: 'https://etesie.dev/docs/auth/overview/introduction' },
					{ url: 'https://etesie.dev/figma' },
				],
			},
			{
				slug: 'typogram',
				homepageUrl: 'https://typogram.co',
				screenshots: [
					{ url: 'https://typogram.co/studio/landing.html' },
					{ url: 'https://typogram.co/brand-guidelines.html?brandName=Radiant%20Waves%20Reiki' },
					{ url: 'https://typogram.co/font-discovery/' },
				],
			},
		],
	},
	template: {
		label: 'templates',
		outDir: path.join(ASSETS, 'templates'),
		screenshotSize: { width: 426, height: 240, quality: 85 },
		entries: [
			{
				slug: 'persona',
				homepageUrl: 'https://skeleton-template-portfolio.vercel.app/',
				screenshots: [
					{ url: 'https://skeleton-template-portfolio.vercel.app/about' },
					{ url: 'https://skeleton-template-portfolio.vercel.app/projects' },
					{ url: 'https://skeleton-template-portfolio.vercel.app/projects/development/project-1' },
					{ url: 'https://skeleton-template-portfolio.vercel.app/projects/design/project-6' },
				],
			},
			{
				slug: 'stardust',
				homepageUrl: 'https://skeleton-template-blog.vercel.app/',
				screenshots: [
					{ url: 'https://skeleton-template-blog.vercel.app/about' },
					{ url: 'https://skeleton-template-blog.vercel.app/blog' },
					{ url: 'https://skeleton-template-blog.vercel.app/blog/second-post/' },
					{ url: 'https://skeleton-template-blog.vercel.app/blog/third-post/' },
				],
			},
		],
	},
};

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

// Injects CSS to suppress scrollbars on third-party pages that ignore --hide-scrollbars.
async function hideScrollbars(page) {
	await page.addStyleTag({
		content: `
			::-webkit-scrollbar { display: none !important; width: 0 !important; height: 0 !important; }
			* { scrollbar-width: none !important; -ms-overflow-style: none !important; }
		`,
	});
}

// Opens a page, waits for it to settle, then returns a raw screenshot buffer at VIEWPORT.
async function capturePage(browser, { url, scrollY = 0 }) {
	const ctx = await browser.newContext({
		colorScheme: 'dark',
		viewport: VIEWPORT,
		deviceScaleFactor: 1,
	});
	const page = await ctx.newPage();

	await page.goto(url, { waitUntil: 'load', timeout: 45000 });
	await page.waitForTimeout(2000);
	await hideScrollbars(page);
	await dismissOverlays(page);

	if (scrollY > 0) {
		await page.evaluate((y) => window.scrollTo(0, y), scrollY);
		await page.waitForTimeout(500);
	}

	const buffer = await page.screenshot({ clip: { x: 0, y: 0, ...VIEWPORT } });
	await page.close();
	await ctx.close();
	return buffer;
}

// Writes a buffer to disk resized to the given output spec.
async function writeImage(buffer, { width, height, quality }, file) {
	await sharp(buffer).resize(width, height, { fit: 'cover', position: 'top' }).webp({ quality }).toFile(file);
}

// Pipeline ---

async function captureEntry(browser, entry, showcase) {
	console.log(`\n=== ${showcase.label}/${entry.slug} ===`);
	const dest = path.join(showcase.outDir, entry.slug);
	fs.mkdirSync(dest, { recursive: true });

	// Homepage → card + hero (one capture, two outputs).
	console.log(`  homepage -> ${entry.homepageUrl}`);
	try {
		const buffer = await capturePage(browser, { url: entry.homepageUrl });
		await writeImage(buffer, HERO, path.join(dest, 'hero.webp'));
		console.log('    saved hero.webp');
		await writeImage(buffer, CARD, path.join(dest, 'card.webp'));
		console.log('    saved card.webp');
	} catch (e) {
		console.error(`    FAILED homepage: ${e.message}`);
	}

	// Screenshots.
	for (let i = 0; i < entry.screenshots.length; i++) {
		const { url, scrollY } = entry.screenshots[i];
		const file = `screenshot-${String(i + 1).padStart(3, '0')}.webp`;
		console.log(`  ${file} -> ${url}`);
		try {
			const buffer = await capturePage(browser, { url, scrollY });
			await writeImage(buffer, showcase.screenshotSize, path.join(dest, file));
			console.log(`    saved ${file}`);
		} catch (e) {
			console.error(`    FAILED: ${e.message}`);
		}
	}
}

function printSummary(showcase) {
	console.log(`\n=== Summary: ${showcase.label} ===`);
	for (const { slug } of showcase.entries) {
		const dir = path.join(showcase.outDir, slug);
		if (!fs.existsSync(dir)) continue;
		const files = fs.readdirSync(dir).sort();
		console.log(`\n${slug}:`);
		for (const file of files) {
			const { size } = fs.statSync(path.join(dir, file));
			console.log(`  ${file} — ${(size / 1024).toFixed(1)} KB`);
		}
	}
}

// Main ---

function selectShowcases(argv) {
	const flags = argv.slice(2);
	if (flags.length === 0) return [showcases.community, showcases.template];
	if (flags.length === 1 && flags[0] === '--community') return [showcases.community];
	if (flags.length === 1 && flags[0] === '--template') return [showcases.template];

	console.error('Usage: pnpm screenshots [--community | --template]');
	process.exit(1);
}

const selected = selectShowcases(process.argv);

// --hide-scrollbars suppresses scrollbars at the browser level; hideScrollbars()
// also injects CSS as a fallback for sites that render their own scrollbar styles.
const browser = await chromium.launch({ args: ['--hide-scrollbars'] });

for (const showcase of selected) {
	for (const entry of showcase.entries) {
		await captureEntry(browser, entry, showcase);
	}
}

await browser.close();
for (const showcase of selected) printSummary(showcase);

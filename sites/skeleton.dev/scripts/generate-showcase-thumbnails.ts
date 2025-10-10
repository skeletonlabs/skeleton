import chromium from '@sparticuz/chromium';
import { mkdir, readFile, rm } from 'node:fs/promises';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium as playwright } from 'playwright-core';
import { glob } from 'tinyglobby';

const ROOT_DIRECTORY = join(dirname(fileURLToPath(import.meta.url)), '..');
const SHOWCASE_PROJECTS_DIRECTORY = join(ROOT_DIRECTORY, 'src', 'content', 'showcase-projects');
const OUTPUT_DIRECTORY = join(ROOT_DIRECTORY, 'src', 'images', 'showcase-projects');

export async function generateShowcaseThumbnails() {
	const browser = await playwright.launch({
		args: chromium.args,
		executablePath: await chromium.executablePath(),
	});

	const projects = await Promise.all(
		(await glob('*.json', { cwd: SHOWCASE_PROJECTS_DIRECTORY })).map(async (file) => {
			const content = JSON.parse(await readFile(join(SHOWCASE_PROJECTS_DIRECTORY, file), 'utf-8'));
			return {
				slug: basename(file, '.json'),
				name: String(content.name),
				url: String(content.url),
			};
		}),
	);

	await rm(join(OUTPUT_DIRECTORY), { recursive: true, force: true });
	await mkdir(OUTPUT_DIRECTORY, { recursive: true });

	await Promise.all(
		projects.map(async (project) => {
			const page = await browser.newPage({
				viewport: { width: 1920, height: 1080 },
			});
			await page.goto(project.url, {
				timeout: 10_000,
			});
			await page.screenshot({ path: join(OUTPUT_DIRECTORY, `${project.slug}.png`) });
		}),
	);

	await browser.close();
}

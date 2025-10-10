import { mkdir, readFile, rm } from 'node:fs/promises';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { glob } from 'tinyglobby';

const ROOT_DIRECTORY = join(dirname(fileURLToPath(import.meta.url)), '..');
const SHOWCASE_PROJECTS_DIRECTORY = join(ROOT_DIRECTORY, 'src', 'content', 'showcase-projects');
const OUTPUT_DIRECTORY = join(ROOT_DIRECTORY, 'src', 'images', 'showcase-projects');

async function generateShowcaseThumbnails() {
	const browser = await chromium.launch();

	const projects = await Promise.all(
		(await glob('*.json', { cwd: SHOWCASE_PROJECTS_DIRECTORY })).map(async (file) => {
			const content = JSON.parse(await readFile(join(SHOWCASE_PROJECTS_DIRECTORY, file), 'utf-8'));
			return {
				slug: basename(file, '.json'),
				name: String(content.name),
				url: String(content.url),
				playwright: content.playwright as { instructions: string[] } | undefined,
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
				waitUntil: 'networkidle',
			});
			for (const instruction of project.playwright?.instructions ?? []) {
				const fn = new Function('page', `return (async () => { ${instruction} })()`);
				await fn(page);
			}
			await page.screenshot({ path: join(OUTPUT_DIRECTORY, `${project.slug}.png`) });
		}),
	);

	await browser.close();
}

generateShowcaseThumbnails().catch((error) => {
	console.error(error);
	process.exit(1);
});

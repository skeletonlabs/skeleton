import { SkeletonOptions, createSkeleton } from '../../packages/create-skeleton-app/src/creator.js'
import { resolve, join } from 'path';
import { cwd } from 'process';
import { fileURLToPath } from 'url';
import { rm } from 'fs';
import fg from 'fast-glob';
const __dirname = fileURLToPath(new URL('.', import.meta.url));

async function generateTemplates() {
	console.log('Generating templates');
	await rm(resolve(cwd(), 'installs'), { recursive: true }, (err) => { if (err) console.log(err.message) });
	const themes = ['skeleton', 'modern', 'hamlindigo', 'rocket', 'sahara', 'gold-nouveau', 'vintage', 'seafoam', 'crimson'];
	const templates = fg.globSync(['skeleton-template-*/csa-meta.json'], { cwd: resolve(__dirname, '..'), deep: 2 });

	let opts = new SkeletonOptions();
	opts.monorepo = false;
	opts.test = true;

	opts.types = 'typescript';
	opts.prettier = true;
	opts.eslint = true;
	opts.playwright = true;
	opts.vitest = true;

	for (const template of templates) {
		const src = resolve(__dirname, '..', template.split('/')[0]);
		const templateName = template.slice(18).split('/')[0] 
		const dest = join(cwd(), 'installs', templateName);
		opts.skeletontemplatedir = src
		opts.skeletontemplate = opts.skeletontemplatedir + '/csa-meta.json';
		for (const theme of themes) {
			opts.skeletontheme = theme;
			opts.name = `test-${templateName}-${theme}`
			opts.path = join(dest, theme);
			await createSkeleton(opts);
		}
	}
}

await generateTemplates();

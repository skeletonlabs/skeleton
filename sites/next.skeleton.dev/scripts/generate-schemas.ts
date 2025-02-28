import { glob } from 'tinyglobby';
import { getInterfaces } from '@skeletonlabs/necroparser';
import { writeFile, mkdir, rm } from 'fs/promises';
import { basename, dirname, join } from 'path';
import { resolve } from 'node:url';
import { intro, spinner, outro } from '@clack/prompts';

const OUTPUT_DIR = join(import.meta.dirname, '../src/content/schemas');
const MATCHER = './node_modules/@skeletonlabs/skeleton-*/src/lib/components/*/types.ts';

function toKebabCase(str: string) {
	str = str.charAt(0).toLowerCase() + str.slice(1);
	return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

async function processFile(path: string): Promise<number> {
	const component = basename(dirname(path));
	const matches = path.match(/skeleton-([^/]+)(?=\/|$)/g);
	const match = matches?.at(-1);
	const framework = match?.replace('skeleton-', '');
	if (!framework) {
		throw new Error(`Invalid framework path: ${path}`);
	}
	const outPath = join(OUTPUT_DIR, framework, `${toKebabCase(component)}.json`);
	await mkdir(dirname(outPath), { recursive: true });
	const interfaces = getInterfaces(path, {
		matcher: /^[\w-]+Props$/,
		transformProperty(property) {
			if (property.type.startsWith('Snippet')) {
				return {
					...property,
					typeKind: 'primitive'
				};
			}
			return property;
		}
	});
	await writeFile(outPath, JSON.stringify(interfaces, null, 2));
	return Object.keys(interfaces).length;
}

async function main() {
	intro(`Generating schemas for: ${MATCHER}`);
	try {
		await rm(OUTPUT_DIR, { recursive: true, force: true });
		const paths = await glob(resolve(import.meta.dirname, MATCHER), { absolute: true });
		const s = spinner();
		s.start('Processing files...');
		const startTime = performance.now();
		let totalInterfaces = 0;
		for (const path of paths) {
			const componentName = basename(dirname(path));
			s.message(`Processing ${componentName}...`);
			try {
				totalInterfaces += await processFile(path);
			} catch {
				s.message(`Failed to process ${componentName}`);
			}
		}
		const seconds = ((performance.now() - startTime) / 1000).toFixed(1);
		s.stop(`Processed ${totalInterfaces} interfaces from ${paths.length} files in ${seconds}s`);
		outro('Documentation generation complete!');
	} catch {
		process.exit(1);
	}
}

main();

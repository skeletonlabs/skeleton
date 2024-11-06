import fg from 'fast-glob';
import { getInterfaces } from '@skeletonlabs/typelens';
import { writeFile, mkdir } from 'fs/promises';
import { basename, dirname, join } from 'path';
import { resolve } from 'node:url';
import { intro, spinner, outro } from '@clack/prompts';

const OUTPUT_DIR = join(import.meta.dirname, '../.generated/component-schemas');
const MATCHER = './node_modules/@skeletonlabs/skeleton-*/src/lib/components/*/types.ts';

async function processFile(path: string): Promise<number> {
	const componentName = basename(dirname(path));
	const framework = path.match(/skeleton-([^/]+)/)?.[1];
	if (!framework) {
		throw new Error(`Invalid framework path: ${path}`);
	}
	const outPath = join(OUTPUT_DIR, framework, `${componentName}.json`);
	await mkdir(dirname(outPath), { recursive: true });
	const interfaces = getInterfaces(path);
	await writeFile(outPath, JSON.stringify(interfaces, null, 2));
	return Object.keys(interfaces).length;
}

async function main() {
	intro(`Generating schemas for: ${MATCHER}`);
	try {
		const paths = await fg(resolve(import.meta.dirname, MATCHER), { absolute: true });
		const s = spinner();
		s.start('Processing files...');
		const startTime = performance.now();
		let totalInterfaces = 0;
		for (const path of paths) {
			const componentName = basename(dirname(path));
			s.message(`Processing ${componentName}...`);
			try {
				totalInterfaces += await processFile(path);
			} catch (error) {
				s.message(`Failed to process ${componentName}`);
			}
		}
		const seconds = ((performance.now() - startTime) / 1000).toFixed(1);
		s.stop(`Processed ${totalInterfaces} interfaces from ${paths.length} files in ${seconds}s`);
		outro('Documentation generation complete!');
	} catch (error) {
		process.exit(1);
	}
}

main();

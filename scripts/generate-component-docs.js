import fg from 'fast-glob';
import { getInterfaces } from 'typelens';
import { writeFile, mkdir } from 'fs/promises';
import { basename, dirname, join } from 'path';

function extractPathInfo(path) {
	const componentName = basename(dirname(path));
	const frameworkMatch = path.match(/skeleton-([^/]+)/);
	const frameworkName = frameworkMatch ? frameworkMatch[1] : 'unknown';
	return { frameworkName, componentName };
}

async function ensureDirectoryExists(directory) {
	await mkdir(directory, { recursive: true });
}

async function processFile(path) {
	const baseOutputDir = join(import.meta.dirname, '..', 'sites/next.skeleton.dev/.generated/component-docs');
	const { frameworkName, componentName } = extractPathInfo(path);
	const interfaces = getInterfaces(path);
	const frameworkDir = join(baseOutputDir, frameworkName);
	await ensureDirectoryExists(frameworkDir);
	const outputPath = join(frameworkDir, `${componentName}.json`);
	await writeFile(outputPath, JSON.stringify(interfaces, null, 2));
	console.log(`Generated: ${outputPath}`);
}

async function main() {
	console.time('Documentation generation');
	const paths = fg.sync('./packages/skeleton-*/src/lib/components/*/types.ts', {
		absolute: true
	});
	await Promise.all(paths.map((path) => processFile(path)));
	console.timeEnd('Documentation generation');
	console.log('All files processed successfully!');
}

main().catch((error) => {
	console.error('Error generating documentation:', error);
	process.exit(1);
});

import fg from 'fast-glob';
import { getInterfaces } from '@skeletonlabs/typelens';
import { writeFile, mkdir } from 'fs/promises';
import { basename, dirname, join } from 'path';
import { resolve } from 'node:url';

const BASE_OUTPUT_DIR = join(import.meta.dirname, '..', './.generated/component-schemas');

const logger = {
	start: (msg: string) => console.time(`⏱️ ${msg}`),
	end: (msg: string) => console.timeEnd(`⏱️ ${msg}`),
	info: (msg: string) => console.log(`ℹ️ ${msg}`),
	success: (msg: string) => console.log(`✅ ${msg}`),
	error: (msg: string, error: Error) => console.error(`❌ ${msg}:`, error),
	stats: (data: Record<string, unknown>) => console.table(data)
};

interface PathInfo {
	frameworkName: string;
	componentName: string;
	outputPath: string;
}

function getPathInfo(path: string): PathInfo {
	const componentName = basename(dirname(path));
	const frameworkMatch = path.match(/skeleton-([^/]+)/);
	if (!frameworkMatch) {
		throw new Error(`Invalid framework path pattern: ${path}`);
	}
	const frameworkName = frameworkMatch[1];
	const frameworkDir = join(BASE_OUTPUT_DIR, frameworkName);
	const outputPath = join(frameworkDir, `${componentName}.json`);
	return { frameworkName, componentName, outputPath };
}

async function processFile(path: string): Promise<void> {
	const start = performance.now();
	const pathInfo = getPathInfo(path);
	logger.info(`Processing ${pathInfo.componentName} for ${pathInfo.frameworkName}...`);
	try {
		await mkdir(dirname(pathInfo.outputPath), { recursive: true });
		const interfaces = getInterfaces(path);
		await writeFile(pathInfo.outputPath, JSON.stringify(interfaces, null, 2));
		const duration = (performance.now() - start).toFixed(2);
		logger.success(`Generated ${pathInfo.componentName} (${Object.keys(interfaces).length} interfaces) in ${duration}ms`);
	} catch (error) {
		logger.error(`Failed to process ${pathInfo.componentName}`, error as Error);
		throw error;
	}
}

async function main() {
	logger.start('Total Documentation Generation');
	const stats = { processed: 0, failed: 0, totalTime: 0 };
	try {
		const matcher = resolve(import.meta.dirname, 'node_modules/@skeletonlabs/skeleton-*/src/lib/components/*/types.ts');
		logger.info(`Searching for component types using pattern: ${matcher}`);
		const paths = await fg(matcher, { absolute: true });
		logger.info(`Found ${paths.length} component type files to process`);
		const startTime = performance.now();
		for (const path of paths) {
			try {
				await processFile(path);
				stats.processed++;
			} catch {
				stats.failed++;
			}
		}
		stats.totalTime = Number(Number((performance.now() - startTime) / 1000).toFixed(2));
		logger.stats({
			'Total Files': paths.length,
			'Successfully Processed': stats.processed,
			Failed: stats.failed,
			'Processing Time (s)': stats.totalTime,
			'Average Time per File (s)': (stats.totalTime / paths.length).toFixed(2)
		});
		logger.end('Total Documentation Generation');
	} catch (error) {
		logger.error('Fatal error during documentation generation', error as Error);
		process.exit(1);
	}
}

main();

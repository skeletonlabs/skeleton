import { glob } from 'tinyglobby';
import { Project } from '@skeletonlabs/necroparser';
import { mkdir, rm, writeFile } from 'fs/promises';
import { join, resolve } from 'path';
import { performance } from 'perf_hooks';

function log(message: string) {
	console.log(`[${new Date().toLocaleTimeString()}] ${message}`);
}

async function generateSchemas() {
	log('Generating schemas...');
	const start = performance.now();
	const inputPaths = await glob('./node_modules/@skeletonlabs/skeleton-**/src/components/**/types.ts');
	const outputPath = resolve(import.meta.dirname, '../src/content/schemas');
	const project = new Project(inputPaths);
	await rm(outputPath, { recursive: true, force: true });
	await Promise.all(
		inputPaths.map(async (path) => {
			const framework = path.match(/@skeletonlabs\/skeleton-(\w+)/)?.[1];
			const component = path.match(/\/components\/(\w+)/)?.[1];
			if (!framework || !component) return;

			const interfaces = project.getInterfaces(path, {
				filter: (node) => /\w+Props/.test(node.name.getText()),
				transformProperty: (property) => (property.type.startsWith('Snippet') ? { ...property, typeKind: 'primitive' } : property)
			});

			const frameworkPath = join(outputPath, framework);
			await mkdir(frameworkPath, { recursive: true });
			await writeFile(join(frameworkPath, `${component}.json`), JSON.stringify(interfaces, null, 4));
		})
	);
	const end = performance.now();
	log(`Generated ${inputPaths.length} schemas in ${((end - start) / 1000).toFixed(2)}s`);
}

await generateSchemas();

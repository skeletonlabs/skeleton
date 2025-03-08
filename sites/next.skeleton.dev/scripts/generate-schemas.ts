import { glob } from 'tinyglobby';
import { Project } from '@skeletonlabs/necroparser';
import { mkdir, rm, writeFile } from 'fs/promises';
import { join, resolve } from 'path';
import { performance } from 'perf_hooks';
import { blue, bold, gray } from 'colorette';

function log(message: string) {
	console.log(`${gray(new Date().toLocaleTimeString())} ${blue('[generate-schemas]')} ${message}`);
}

function toKebabCase(str: string) {
	str = str.charAt(0).toLowerCase() + str.slice(1);
	return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

async function generateSchemas() {
	log('Preparing to generate schemas');
	const start = performance.now();
	const inputPaths = await glob('./node_modules/@skeletonlabs/skeleton-**/src/components/**/types.ts');
	const outputPath = resolve(import.meta.dirname, '../src/content/schemas');
	const project = new Project(inputPaths);
	await rm(outputPath, {
		recursive: true,
		force: true
	});
	await Promise.allSettled(
		inputPaths.map(async (path) => {
			const framework = path.match(/@skeletonlabs\/skeleton-(\w+)/)?.[1];
			const component = toKebabCase(path.match(/\/components\/(\w+)/)?.[1] ?? '');
			if (!(framework && component)) {
				return;
			}
			log(`Generating ${bold(framework)}/${bold(component)}`);
			const interfaces = project.getInterfaces(path, {
				filter(node) {
					return /\w+Props/.test(node.name.getText());
				},
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
			const frameworkPath = join(outputPath, framework);
			await mkdir(frameworkPath, {
				recursive: true
			});
			await writeFile(join(frameworkPath, `${component}.json`), JSON.stringify(interfaces, null, 4));
		})
	);
	const end = performance.now();
	log(`Generated ${inputPaths.length} schemas in ${((end - start) / 1000).toFixed(2)}s`);
}

await generateSchemas();

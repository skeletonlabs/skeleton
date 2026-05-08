import { extname, join } from 'node:path';
import { glob } from 'tinyglobby';
import { createProjectForConfig, createSourceFile, getInterface } from './parser.ts';
import { getPartOrder } from './anatomy.ts';
import { kebabToPascal } from './casing.ts';
import type { Component } from './types.ts';

const MONOREPO_DIR = join(import.meta.dirname, '..', '..', '..');
const packageDir = (name: string) => join(MONOREPO_DIR, 'packages', name);

async function processPart(componentName: string, partPath: string, project: ReturnType<typeof createProjectForConfig>) {
	const partName = partPath.split('/').pop()?.replace(extname(partPath), '');
	if (!partName) return;

	const sourceFile = createSourceFile(partPath, project);
	const typeName = `${kebabToPascal(componentName)}${kebabToPascal(partName)}Props`;
	const iface = getInterface(typeName, sourceFile);
	if (!iface) return;

	return {
		name: iface.name,
		props: iface.props,
	};
}

export async function getFramework(frameworkName: string) {
	const pkgDir = packageDir(`skeleton-${frameworkName}`);
	const project = createProjectForConfig(join(pkgDir, 'tsconfig.json'));
	const componentPaths = await glob('src/components/*', {
		cwd: pkgDir,
		onlyDirectories: true,
		absolute: true,
	});
	return {
		name: frameworkName,
		packageDir: pkgDir,
		project,
		componentPaths,
	};
}

interface GetComponentOptions {
	onProcessedComponent?: (componentName: string) => void;
}

export async function getComponents(framework: Awaited<ReturnType<typeof getFramework>>, options: GetComponentOptions = {}) {
	return await Promise.all(
		framework.componentPaths.map(async (componentPath) => {
			const componentName = componentPath.split('/').filter(Boolean).pop();
			if (!componentName) return;

			const frameworkPkgDir = packageDir(`skeleton-${framework.name}`);

			const [partPaths, partOrder] = await Promise.all([
				glob(`${componentPath}/anatomy/*.{svelte,tsx}`, { absolute: true }),
				Promise.resolve(getPartOrder(frameworkPkgDir, componentName)),
			]);

			const types = (await Promise.all(partPaths.map((partPath) => processPart(componentName, partPath, framework.project)))).filter(
				Boolean,
			) as Component['types'];

			types.sort((a, b) => {
				const aName = a.name.replace(/Props$/, '');
				const bName = b.name.replace(/Props$/, '');
				return partOrder.indexOf(aName) - partOrder.indexOf(bName);
			});

			options.onProcessedComponent?.(componentName);

			return {
				name: componentName,
				types,
			};
		}),
	);
}

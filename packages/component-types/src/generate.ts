import { mkdirSync, writeFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import { glob } from 'tinyglobby';
import { createProjectForConfig, createSourceFile, getInterface } from './parser.ts';
import { getPartOrder, loadClassValues } from './anatomy.ts';
import { kebabToPascal, kebabToCamel } from './casing.ts';
import type { Component } from './types.ts';

const MONOREPO_DIR = join(import.meta.dirname, '..', '..', '..', '..');
const packageDir = (name: string) => join(MONOREPO_DIR, 'packages', name);
const OUTPUT_DIR = join(MONOREPO_DIR, 'packages', 'component-types', 'data');

async function processPart(
	componentName: string,
	partPath: string,
	classValues: Map<string, string>,
	project: ReturnType<typeof createProjectForConfig>,
): Promise<Component['types'][number] | undefined> {
	const partName = partPath.split('/').pop()?.replace(extname(partPath), '');
	if (!partName) return;

	const sourceFile = createSourceFile(partPath, project);
	const typeName = `${kebabToPascal(componentName)}${kebabToPascal(partName)}Props`;
	const iface = getInterface(typeName, sourceFile);
	if (!iface) return;

	return {
		name: iface.name,
		props: iface.props,
		metadata: { classValue: classValues.get(kebabToCamel(partName)) },
	};
}

async function processComponent(
	frameworkName: string,
	componentPath: string,
	project: ReturnType<typeof createProjectForConfig>,
): Promise<void> {
	const componentName = componentPath.split('/').filter(Boolean).pop();
	if (!componentName) return;

	const frameworkPkgDir = packageDir(`skeleton-${frameworkName}`);
	const commonPkgDir = packageDir('skeleton-common');

	const [partPaths, partOrder, classValues] = await Promise.all([
		glob(`${componentPath}/anatomy/*.{svelte,tsx}`, { absolute: true }),
		Promise.resolve(getPartOrder(frameworkPkgDir, componentName)),
		Promise.resolve(loadClassValues(commonPkgDir, componentName)),
	]);

	const types = (await Promise.all(partPaths.map((partPath) => processPart(componentName, partPath, classValues, project)))).filter(
		Boolean,
	) as Component['types'];

	types.sort((a, b) => {
		const aName = a.name.replace(/Props$/, '');
		const bName = b.name.replace(/Props$/, '');
		return partOrder.indexOf(aName) - partOrder.indexOf(bName);
	});

	const entry: Component = { name: componentName, types };
	const outputDir = join(OUTPUT_DIR, frameworkName);
	mkdirSync(outputDir, { recursive: true });
	writeFileSync(join(outputDir, `${componentName}.json`), JSON.stringify(entry, null, 2), 'utf-8');
}

export async function processFramework(frameworkName: string): Promise<void> {
	const pkgDir = packageDir(`skeleton-${frameworkName}`);
	const project = createProjectForConfig(join(pkgDir, 'tsconfig.json'));
	const componentPaths = await glob('src/components/*', {
		cwd: pkgDir,
		onlyDirectories: true,
		absolute: true,
	});

	await Promise.all(componentPaths.map((componentPath) => processComponent(frameworkName, componentPath, project)));
}

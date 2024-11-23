import fg from 'fast-glob';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { extname } from 'node:path';
import type { PackageJson } from 'type-fest';
import { lt } from 'semver';
import { join } from 'path';
import { Project } from 'ts-morph';
import { ScriptKind, ScriptTarget } from 'typescript';

const CLASS_REGEXES = [
	// Forward color pairings
	{
		find: /(\w+)-50-900-token\b/g,
		replace: '$1-50-950'
	},
	{
		find: /(\w+)-100-800-token\b/g,
		replace: '$1-100-900'
	},
	{
		find: /(\w+)-200-700-token\b/g,
		replace: '$1-200-800'
	},
	{
		find: /(\w+)-300-600-token\b/g,
		replace: '$1-300-700'
	},
	{
		find: /(\w+)-400-500-token\b/g,
		replace: '$1-500'
	},

	// Backward color pairings
	{
		find: /(\w+)-900-50-token\b/g,
		replace: '$1-950-50'
	},
	{
		find: /(\w+)-800-100-token\b/g,
		replace: '$1-900-100'
	},
	{
		find: /(\w+)-700-200-token\b/g,
		replace: '$1-800-200'
	},
	{
		find: /(\w+)-600-300-token\b/g,
		replace: '$1-700-300'
	},
	{
		find: /(\w+)-500-400-token\b/g,
		replace: '$1-600-400'
	},

	// Backgrounds
	{
		find: /bg-(\w+)-backdrop-token\b/g,
		replace: 'bg-$1-50/50 dark:bg-$1-950/50'
	},
	{
		find: /bg-(\w+)-hover-token\b/g,
		replace: 'preset-tonal-$1'
	},
	{
		find: /bg-(\w+)-active-token\b/g,
		replace: 'preset-filled-$1-500'
	},

	// Border Radius
	{
		find: /rounded-token\b/g,
		replace: 'rounded'
	},
	{
		find: /rounded-(tl|tr|bl|br)-token\b/g,
		replace: 'rounded-$1'
	},
	{
		find: /rounded-container-token\b/g,
		replace: 'rounded-container'
	},
	{
		find: /rounded-(tl|tr|bl|br)-container-token\b/g,
		replace: 'rounded-$1-container'
	},

	// Borders
	{
		find: /border-token\b/g,
		replace: 'border'
	},
	{
		find: /border-(\w+)-(\d+)-(\d+)-token\b/g,
		replace: 'border-$1-$2-$3'
	},

	// Rings
	{
		find: /ring-token\b/g,
		replace: 'ring'
	},
	{
		find: /ring-(\w+)-(\d+)-(\d+)-token\b/g,
		replace: 'ring-$1-$2-$3'
	},

	// Text
	{
		find: /heading-font-family\b/g,
		replace: 'heading-font-family'
	},
	{
		find: /base-font-family\b/g,
		replace: 'base-font-family'
	},
	{
		find: /base-font-color\b/g,
		replace: 'base-font-color'
	},
	{
		find: /text-on-(\w+)-token\b/g,
		replace: 'text-$1-contrast-500'
	},
	{
		find: /text-(\w+)-(\d+)-(\d+)-token\b/g,
		replace: 'text-$1-$2-$3'
	},

	// Text Decoration
	{
		find: /decoration-(\w+)-(\d+)-(\d+)-token\b/g,
		replace: 'decoration-$1-$2-$3'
	}
];

function migratePackage(code: string) {
	const packageJson: PackageJson = JSON.parse(code);
	for (const field of ['dependencies', 'devDependencies'] as const) {
		const dependencies = packageJson[field];
		if (!dependencies) {
			continue;
		}
		if (dependencies['@skeletonlabs/skeleton']) {
			const version = dependencies['@skeletonlabs/skeleton'];
			if (lt(version, '3.0.0')) {
				delete dependencies['@skeletonlabs/skeleton'];
				dependencies['@skeletonlabs/skeleton-svelte'] = '^1.0.0';
			}
		}
		if (dependencies['@skeletonlabs/tw-plugin']) {
			delete dependencies['@skeletonlabs/tw-plugin'];
			dependencies['@skeletonlabs/skeleton'] = '^3.0.0';
		}
	}
	return JSON.stringify(packageJson, null, '\t');
}

function migrateTailwindConfig(code: string) {
	const project = new Project({
		useInMemoryFileSystem: true,
		compilerOptions: {
			target: ScriptTarget.Latest
		}
	});
	const sourceFile = project.createSourceFile('virtual.ts', code, { scriptKind: ScriptKind.TS });

	// Imports
	sourceFile.getImportDeclarations().forEach((importDeclaration) => {
		const specifier = importDeclaration.getModuleSpecifierValue();
		if (specifier === '@skeletonlabs/tw-plugin') {
			importDeclaration.remove();
			sourceFile.addImportDeclaration({
				namedImports: [{ name: 'skeleton' }, { name: 'contentPath' }],
				moduleSpecifier: '@skeletonlabs/skeleton/plugin'
			});
		}
		if (['path', 'node:path'].includes(specifier)) {
			importDeclaration.remove();
		}
	});
	return sourceFile.getFullText();
}

function migrateClasses(code: string) {
	return CLASS_REGEXES.reduce((result, migration) => {
		return result.replace(migration.find, migration.replace);
	}, code);
}

function migrateSvelteCode(code: string) {
	code = migrateClasses(code);
	// TODO: Generate AST (svelte/compiler)
	// TODO: Update imports
	// TODO: Update components
	return code;
}

function migrateModuleCode(code: string) {
	code = migrateClasses(code);
	// TODO: Generate AST (acorn-typecript)
	// TODO: Update imports
	return code;
}

function migrateProject(cwd = process.cwd()) {
	// package.json
	const packagePath = join(cwd, 'package.json');
	if (!existsSync(packagePath)) {
		throw new Error('"package.json" not found, please migrate from the root of your project.');
	}
	const packageCode = readFileSync(packagePath, 'utf-8');
	const migratedPackageCode = migratePackage(packageCode);
	writeFileSync(packagePath, migratedPackageCode);

	// tailwind.config.js
	const tailwindConfigPath = join(cwd, 'tailwind.config.js');
	if (!existsSync(tailwindConfigPath)) {
		throw new Error('"tailwind.config.js" not found, please migrate from the root of your project.');
	}
	const tailwindConfigCode = readFileSync(tailwindConfigPath, 'utf-8');
	const migrateTailwindConfigCode = migrateTailwindConfig(tailwindConfigCode);
	writeFileSync(tailwindConfigCode, migrateTailwindConfigCode);

	// Source code
	const paths = fg.sync(`./src/**/*.{js,cjs,mjs,ts,cts,mts,svelte}`);
	for (const path of paths) {
		const sourceCode = readFileSync(path, 'utf-8');
		const extension = extname(path);
		const migratedCode = extension === '.svelte' ? migrateSvelteCode(sourceCode) : migrateModuleCode(sourceCode);
		writeFileSync(path, migratedCode);
	}
}

export { migrateProject, migratePackage, migrateTailwindConfig, migrateClasses, migrateModuleCode, migrateSvelteCode };

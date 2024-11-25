import fg from 'fast-glob';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { extname } from 'node:path';
import type { PackageJson } from 'type-fest';
import { lt, valid } from 'semver';
import { join } from 'path';
import { Node, ObjectLiteralExpression, Project, SatisfiesExpression, SourceFile, ts } from 'ts-morph';
import SyntaxKind = ts.SyntaxKind;

const COLOR_PAIRING_REGEXES = [
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
	}
];

const BACKGROUND_REGEXES = [
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
	}
];

const BORDER_RADIUS_REGEXES = [
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
	}
];

const BORDER_RING_REGEXES = [
	{
		find: /border-token\b/g,
		replace: 'border'
	},
	{
		find: /border-(\w+)-(\d+)-(\d+)-token\b/g,
		replace: 'border-$1-$2-$3'
	},
	{
		find: /ring-token\b/g,
		replace: 'ring'
	},
	{
		find: /ring-(\w+)-(\d+)-(\d+)-token\b/g,
		replace: 'ring-$1-$2-$3'
	}
];

const TEXT_REGEXES = [
	{
		find: /font-headings-token\b/g,
		replace: 'heading-font-family'
	},
	{
		find: /font-token\b/g,
		replace: 'base-font-family'
	},
	{
		find: /text-token\b/g,
		replace: 'base-font-color'
	},
	{
		find: /text-on-(\w+)-token\b/g,
		replace: 'text-$1-contrast-500'
	},
	{
		find: /text-(\w+)-([^-]+)-([^-]+)-token\b/g,
		replace: 'text-$1-$2-$3'
	}
];

const DECORATION_ACCENT_REGEXES = [
	{
		find: /decoration-(\w+)-([^-]+)-([^-]+)-token\b/g,
		replace: 'decoration-$1-$2-$3'
	},
	{
		find: /accent-(\w+)-token\b/g,
		replace: 'accent-$1-500'
	}
];

const PRESET_REGEXES = [
	{
		find: /variant-filled-(\w+)\b/g,
		replace: 'variant-filled-$1-500'
	},
	{
		find: /variant-ghost-(\w+)\b/g,
		replace: 'preset-tonal-$1 border border-$1-500'
	},
	{
		find: /variant-soft-(\w+)\b/g,
		replace: 'preset-tonal-$1'
	},
	{
		find: /variant-ringed-(\w+)\b/g,
		replace: 'preset-outlined-$1-500'
	},
	{
		find: /variant-glass-(\w+)\b/g,
		replace: 'preset-tonal-$1'
	},
	{
		find: /variant-gradient-(\w+)-(\w+)\b/g,
		replace: 'from-$1-500 to-$2-500'
	}
];

const TAILWIND_COMPONENT_REGEXES = [
	{
		find: /\bcard\b(?!.*bg-)/g,
		replace: 'card bg-surface-100-900-token'
	},
	{
		find: /btn-xl\b/g,
		replace: 'btn-lg'
	},
	{
		find: /btn-icon-xl\b/g,
		replace: 'btn-icon-lg'
	},
	{
		find: /btn-group\b/g,
		replace: ''
	},
	{
		find: /table-hover\b/g,
		replace: ''
	}
];

const CLASS_REGEXES = [
	...COLOR_PAIRING_REGEXES,
	...BACKGROUND_REGEXES,
	...BORDER_RADIUS_REGEXES,
	...BORDER_RING_REGEXES,
	...TEXT_REGEXES,
	...DECORATION_ACCENT_REGEXES,
	...PRESET_REGEXES,
	...TAILWIND_COMPONENT_REGEXES
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
			if (valid(version) && lt(version, '3.0.0')) {
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
			target: ts.ScriptTarget.Latest
		}
	});
	const sourceFile = project.createSourceFile('virtual.ts', code, { scriptKind: ts.ScriptKind.TS });

	// Imports
	sourceFile.getImportDeclarations().forEach((importDeclaration) => {
		const specifier = importDeclaration.getModuleSpecifierValue();
		if (specifier === '@skeletonlabs/tw-plugin') {
			importDeclaration.addNamedImport('contentPath');
			importDeclaration.setModuleSpecifier('@skeletonlabs/skeleton/plugin');
		}
		if (['path', 'node:path'].includes(specifier)) {
			importDeclaration.remove();
		}
	});

	// Content path
	function getDefaultExportObject(sourceFile: SourceFile): ObjectLiteralExpression | SatisfiesExpression | null {
		const exportAssignment = sourceFile.getFirstDescendantByKind(SyntaxKind.ExportAssignment);
		if (!exportAssignment) {
			return null;
		}
		const exportExpression = exportAssignment.getExpression();
		const objectLiteralExpression = exportAssignment.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);
		if (objectLiteralExpression) {
			return objectLiteralExpression;
		}
		if (exportExpression.isKind(SyntaxKind.Identifier)) {
			const definition = exportExpression.getDefinitionNodes()[0];
			if (definition.isKind(SyntaxKind.VariableDeclaration)) {
				const objectLiteralExpression = definition.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);
				if (objectLiteralExpression) {
					return objectLiteralExpression;
				}
			}
		}
		return null;
	}
	function isJoinedContent(node: Node) {
		if (!node.isKind(SyntaxKind.CallExpression)) {
			return false;
		}
		const expression = node.getExpression();
		if (!expression.isKind(SyntaxKind.Identifier) || expression.getText() !== 'join') {
			return false;
		}
		const [argOne, argTwo] = node.getArguments();
		if (!argOne.isKind(SyntaxKind.CallExpression)) {
			return false;
		}
		const argOneExpression = argOne.getExpression();
		if (!argOneExpression.isKind(SyntaxKind.PropertyAccessExpression)) {
			return false;
		}
		const requireExpression = argOneExpression.getExpression();
		if (!requireExpression.isKind(SyntaxKind.Identifier) || requireExpression.getText() !== 'require') {
			return false;
		}
		if (argOneExpression.getName() !== 'resolve') {
			return false;
		}
		const callArgs = argOne.getArguments();
		if (callArgs.length !== 1) {
			return false;
		}
		const firstCallArg = callArgs[0];
		if (!firstCallArg.isKind(SyntaxKind.StringLiteral) || firstCallArg.getLiteralText() !== '@skeletonlabs/skeleton') {
			return false;
		}
		if (!argTwo.isKind(SyntaxKind.StringLiteral) || argTwo.getLiteralText() !== '../**/*.{html,js,svelte,ts}') {
			return false;
		}
		return true;
	}

	const configNode = getDefaultExportObject(sourceFile);
	if (configNode) {
		const contentProperty = configNode.getProperty('content');
		if (contentProperty && ts.isPropertyAssignment(contentProperty.compilerNode)) {
			const propertyAssignment = contentProperty.asKindOrThrow(SyntaxKind.PropertyAssignment);
			const initializer = propertyAssignment.getInitializer();
			if (initializer && ts.isArrayLiteralExpression(initializer.compilerNode)) {
				const arrayLiteral = initializer.asKindOrThrow(SyntaxKind.ArrayLiteralExpression);
				const elements = arrayLiteral.getElements();
				for (const element of elements) {
					if (isJoinedContent(element)) {
						element.replaceWithText("contentPath(import.meta.url, 'svelte')");
					}
				}
			}
		}
	}
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
	// TODO: Generate AST (ts-morph)
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

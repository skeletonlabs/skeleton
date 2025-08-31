import { mkdir, rm, writeFile } from 'node:fs/promises';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { glob } from 'tinyglobby';
import { Project, ts } from 'ts-morph';

const monorepoRoot = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

const frameworks = [
	{
		name: 'svelte',
		dtsExtension: '.svelte.d.ts',
		extendsBlacklistPatterns: [/^HTML.*Attributes(?:<.*>)?$/, /^Omit<\s*HTML.*Attributes.*>$/] as RegExp[],
		root: join(monorepoRoot, 'packages', 'skeleton-svelte')
	},
	{
		name: 'react',
		dtsExtension: '.d.ts',
		extendsBlacklistPatterns: [/^ComponentProps(?:<.*>)?$/, /^Omit<\s*ComponentProps.*>$/] as RegExp[],
		root: join(monorepoRoot, 'packages', 'skeleton-react')
	}
] as const;

function toPascalCase(name: string): string {
	return name.replace(/(^\w|[-_]\w)/g, (m) => m.replace(/[-_]/, '').toUpperCase());
}

function createProject(tsConfigPath: string) {
	return new Project({ tsConfigFilePath: tsConfigPath });
}

function extractPropertyInfo(prop: import('ts-morph').Symbol, sourceFile: import('ts-morph').SourceFile) {
	const propType = prop.getTypeAtLocation(sourceFile);
	return {
		name: prop.getName(),
		type: propType.getText(undefined, ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope),
		optional: prop.hasFlags(ts.SymbolFlags.Optional)
	};
}

function extractInterfaceInfo(sourceFile: import('ts-morph').SourceFile, interfaceName: string, blacklist: RegExp[]) {
	const iface = sourceFile.getInterface(interfaceName);
	if (!iface) return null;

	iface.getExtends().forEach((ext) => {
		if (blacklist.some((pattern) => pattern.test(ext.getText()))) iface.removeExtends(ext);
	});

	const properties = iface
		.getType()
		.getProperties()
		.map((prop) => extractPropertyInfo(prop, sourceFile));

	return {
		interface: interfaceName,
		properties
	};
}

async function extractComponentTypes(componentDir: string, framework: (typeof frameworks)[number]) {
	const paths = await glob(`./anatomy/*${framework.dtsExtension}`, { cwd: componentDir, absolute: true });
	const project = createProject(join(framework.root, 'tsconfig.json'));

	const anatomy = paths
		.map((path) => {
			const name = toPascalCase(basename(path).replace(framework.dtsExtension, ''));
			const info = extractInterfaceInfo(project.addSourceFileAtPath(path), `${name}Props`, framework.extendsBlacklistPatterns);
			return info ? { component: name, ...info } : null;
		})
		.filter(Boolean);

	return { component: basename(componentDir), anatomy };
}

async function extractFrameworkTypes(framework: (typeof frameworks)[number]) {
	const componentDirs = await glob('*', {
		cwd: join(framework.root, 'dist', 'components'),
		onlyDirectories: true,
		absolute: true
	});
	return Promise.all(componentDirs.map((dir) => extractComponentTypes(dir, framework)));
}

async function main() {
	const processedFrameworks = await Promise.all(
		frameworks.map(async (framework) => ({
			name: framework.name,
			types: await extractFrameworkTypes(framework)
		}))
	);

	await rm(join(monorepoRoot, 'sites', 'skeleton.dev', 'src', 'content', 'schemas'), { recursive: true, force: true });
	await mkdir(join(monorepoRoot, 'sites', 'skeleton.dev', 'src', 'content', 'schemas'), { recursive: true });
	await Promise.all(
		processedFrameworks.map((framework) =>
			writeFile(
				join(monorepoRoot, 'sites', 'skeleton.dev', 'src', 'content', 'schemas', `${framework.name}.json`),
				JSON.stringify(framework, null, 2)
			)
		)
	);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});

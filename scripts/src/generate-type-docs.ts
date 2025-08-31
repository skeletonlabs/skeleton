import { basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { glob } from 'tinyglobby';
import { Project, ts } from 'ts-morph';

function toPascalCase(name: string): string {
	return name.replace(/(^\w|[-_]\w)/g, (m) => m.replace(/[-_]/, '').toUpperCase());
}

async function extractTypes(framework: (typeof frameworks)[number]) {
	const componentDirectories = await glob('*', {
		cwd: join(framework.root, 'dist', 'components'),
		onlyDirectories: true,
		absolute: true
	});

	return await Promise.all(
		componentDirectories.map(async (componentDirectory) => {
			const parts = await glob(`./anatomy/*${framework.dtsExtension}`, {
				cwd: componentDirectory,
				absolute: true
			});
			const project = new Project({
				tsConfigFilePath: join(framework.root, 'tsconfig.json')
			});

			const anatomy = parts
				.map((part) => {
					const componentName = toPascalCase(basename(part).replace(framework.dtsExtension, ''));
					const componentPropsInterfaceName = `${componentName}Props`;
					const sourceFile = project.addSourceFileAtPath(part);
					const iface = sourceFile.getInterface(componentPropsInterfaceName);
					if (!iface) {
						console.warn(`Interface "${componentPropsInterfaceName}" not found in ${part}`);
						return null;
					}
					iface.getExtends().forEach((ext) => {
						const text = ext.getText();
						if (framework.extendsBlacklistPatterns.some((pattern) => pattern.test(text))) {
							iface.removeExtends(ext);
						}
					});

					const properties = iface
						.getType()
						.getProperties()
						.map((prop) => {
							const propType = prop.getTypeAtLocation(sourceFile);
							return {
								name: prop.getName(),
								description: prop
									.getJsDocTags()
									.map((tag) => tag.getText())
									.join('\n'),
								type: propType.getText(undefined, ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope),
								optional: prop.hasFlags(ts.SymbolFlags.Optional)
							};
						})
						.filter(Boolean);
					return {
						component: componentName,
						interface: componentPropsInterfaceName,
						properties: properties
					};
				})
				.filter(Boolean);

			return {
				component: basename(componentDirectory),
				anatomy: anatomy
			};
		})
	);
}

const monorepoRoot = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

const frameworks = [
	{
		name: 'svelte',
		dtsExtension: '.svelte.d.ts',
		extendsBlacklistPatterns: [/^HTML.*Attributes(?:<.*>)?$/, /^Omit<\s*HTML.*Attributes.*>$/],
		root: join(monorepoRoot, 'packages', 'skeleton-svelte')
	},
	{
		name: 'react',
		dtsExtension: '.d.ts',
		extendsBlacklistPatterns: [/^ComponentProps$/],
		root: join(monorepoRoot, 'packages', 'skeleton-react')
	}
] as const;

async function main() {
	for (const framework of frameworks) {
		const types = await extractTypes(framework);
		console.dir(
			{
				framework: framework,
				types: types
			},
			{
				depth: null
			}
		);
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});

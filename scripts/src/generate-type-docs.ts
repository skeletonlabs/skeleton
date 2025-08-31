import { basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { glob } from 'tinyglobby';
import { Project, ts } from 'ts-morph';

function toPascalCase(name: string): string {
	return name.replace(/(^\w|[-_]\w)/g, (m) => m.replace(/[-_]/, '').toUpperCase());
}

async function processFramework(config: (typeof frameworks)[keyof typeof frameworks]) {
	const componentDirectories = await glob('*', {
		cwd: config.componentDirectoryPath,
		onlyDirectories: true,
		absolute: true
	});

	return await Promise.all(
		componentDirectories.map(async (componentDirectory) => {
			const anatomy = await glob(`./anatomy/*${config.dtsExtension}`, {
				cwd: componentDirectory,
				absolute: true
			});

			const project = new Project({
				tsConfigFilePath: config.tsConfigFilePath
			});

			return anatomy
				.map((part) => {
					const interfaceName = `${toPascalCase(basename(part).replace(config.dtsExtension, ''))}Props`;
					const sourceFile = project.addSourceFileAtPath(part);
					const iface = sourceFile.getInterface(interfaceName);
					if (!iface) {
						console.warn(`Interface ${interfaceName} not found in ${part}`);
						return null;
					}
					const resolvedType = iface.getType();
					const properties = resolvedType
						.getProperties()
						.map((prop) => {
							const propType = prop.getTypeAtLocation(sourceFile);
							return {
								name: prop.getName(),
								type: propType.getText(),
								optional: prop.hasFlags(ts.SymbolFlags.Optional)
							};
						})
						.filter(Boolean);
					return {
						file: part,
						interface: interfaceName,
						properties: properties
					};
				})
				.filter(Boolean);
		})
	);
}

const monorepoRoot = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

const frameworks = {
	svelte: {
		root: join(monorepoRoot, 'packages', 'skeleton-svelte'),
		get tsConfigFilePath() {
			return join(this.root, 'tsconfig.json');
		},
		get componentDirectoryPath() {
			return join(this.root, 'dist', 'components');
		},
		dtsExtension: '.svelte.d.ts'
	},
	react: {
		root: join(monorepoRoot, 'packages', 'skeleton-react'),
		get tsConfigFilePath() {
			return join(this.root, 'tsconfig.json');
		},
		get componentDirectoryPath() {
			return join(this.root, 'dist', 'components');
		},
		dtsExtension: '.d.ts'
	}
};

async function main() {
	for (const [framework, config] of Object.entries(frameworks)) {
		const docs = await processFramework(config);
		console.log(`Framework: ${framework}`);
		console.dir(docs, { depth: null });
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});

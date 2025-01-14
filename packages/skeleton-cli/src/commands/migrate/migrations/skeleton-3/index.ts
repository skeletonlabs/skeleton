import fg from 'fast-glob';
import { transformTailwindConfig } from './transformers/transform-tailwind-config.js';
import { transformPackage } from './transformers/transform-package.js';
import type { MigrateOptions } from '../../index.js';
import { isCancel, multiselect, spinner } from '@clack/prompts';
import { cli } from '../../../../index.js';
import { extname } from 'node:path';
import { transformSvelte } from './transformers/transform-svelte';
import { transformModule } from './transformers/transform-module';
import { transformApp } from './transformers/transform-app';
import { readFile, writeFile } from 'node:fs/promises';

export default async function (options: MigrateOptions) {
	const cwd = options.cwd ?? process.cwd();

	const pkg = {
		matcher: 'package.json',
		paths: await fg('package.json', { cwd })
	};
	const tailwindConfig = {
		matcher: 'tailwind.config.{js,mjs,ts,mts}',
		paths: await fg('tailwind.config.{js,mjs,ts,mts}', { cwd })
	};
	const app = {
		matcher: 'src/app.html',
		paths: await fg('src/app.html', { cwd })
	};

	for (const file of [pkg, tailwindConfig, app]) {
		if (file.paths.length === 0) {
			cli.error(`"${file.matcher}" not found in directory "${cwd}".`);
		}
		if (file.paths.length > 1) {
			cli.error(`Multiple "${file.matcher}" entries found in directory: "${cwd}", please ensure there is only one`);
		}
	}

	const availableSourceFolders = await fg('*', { cwd, onlyDirectories: true, ignore: ['node_modules'] });
	const sourceFolders = await multiselect({
		message: 'What folders contain usage of Skeleton? (classes, imports, etc.)',
		options: availableSourceFolders.map((folder) => ({ label: folder, value: folder })),
		initialValues: availableSourceFolders
	});

	if (isCancel(sourceFolders)) {
		cli.error('Migration cancelled.');
		return;
	}

	const packageSpinner = spinner();
	packageSpinner.start(`Migrating ${pkg.matcher}...`);
	const pkgCode = await readFile(pkg.paths[0], 'utf-8');
	const transformedPkg = await transformPackage(pkgCode);
	await writeFile(pkg.paths[0], transformedPkg.code);
	packageSpinner.stop(`Successfully migrated ${pkg.matcher}`);

	const tailwindSpinner = spinner();
	tailwindSpinner.start(`Migrating ${tailwindConfig.matcher}...`);
	const tailwindCode = await readFile(tailwindConfig.paths[0], 'utf-8');
	const transformedTailwind = transformTailwindConfig(tailwindCode);
	await writeFile(tailwindConfig.paths[0], transformedTailwind.code);
	tailwindSpinner.stop(`Successfully migrated ${tailwindConfig.matcher}`);

	const theme = transformedTailwind.meta.themes.find((theme) => theme.type === 'preset');

	const appSpinner = spinner();
	appSpinner.start(`Migrating ${app.matcher}...`);
	const appCode = await readFile(app.paths[0], 'utf-8');
	const transformedApp = transformApp(appCode, theme?.name ?? 'cerberus');
	await writeFile(app.paths[0], transformedApp.code);
	appSpinner.stop(`Successfully migrated ${app.matcher}`);

	const sourceFileMatcher = `{${sourceFolders.join(',')}}/**/*.{js,mjs,ts,mts,svelte}`;
	const sourceFiles = await fg(sourceFileMatcher, { cwd, ignore: ['node_modules', 'dist', 'build', 'public'] });

	const sourceFilesSpinner = spinner();
	sourceFilesSpinner.start(`Migrating source files...`);
	for (const sourceFile of sourceFiles) {
		sourceFilesSpinner.message(`Migrating ${sourceFile}...`);
		const extension = extname(sourceFile);
		if (extension === '.svelte') {
			const svelteCode = await readFile(sourceFile, 'utf-8');
			const transformedSvelte = transformSvelte(svelteCode);
			await writeFile(sourceFile, transformedSvelte.code);
		} else {
			const moduleCode = await readFile(sourceFile, 'utf-8');
			const transformedModule = transformModule(moduleCode);
			await writeFile(sourceFile, transformedModule.code);
		}
		sourceFilesSpinner.message(`Successfully migrated ${sourceFile}`);
	}
	sourceFilesSpinner.stop('Successfully migrated all source files');
}

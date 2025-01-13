import fg from 'fast-glob';
import { transformTailwindConfig } from './transformers/transform-tailwind-config.js';
import { transformPackage } from './transformers/transform-package.js';
import type { MigrateOptions } from '../../index.js';
import { isCancel, multiselect, spinner } from '@clack/prompts';
import { cli } from '../../../../index.js';
import { extname } from 'node:path';
import { transformSvelte } from './transformers/transform-svelte';
import { transformModule } from './transformers/transform-module';

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

	for (const file of [pkg, tailwindConfig]) {
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
	await transformPackage(pkg.paths[0]);
	packageSpinner.stop(`Successfully migrated ${pkg.matcher}`);

	const tailwindConfigSpinner = spinner();
	tailwindConfigSpinner.start(`Migrating ${tailwindConfig.matcher}...`);
	await transformTailwindConfig(tailwindConfig.paths[0]);
	tailwindConfigSpinner.stop(`Successfully migrated ${tailwindConfig.matcher}`);

	const sourceFileMatcher = `{${sourceFolders.join(',')}}/**/*.{js,mjs,ts,mts,svelte}`;
	const sourceFiles = await fg(sourceFileMatcher, { cwd, ignore: ['node_modules', 'dist', 'build', 'public'] });

	const sourceFilesSpinner = spinner();
	sourceFilesSpinner.start(`Migrating source files...`);
	for (const sourceFile of sourceFiles) {
		sourceFilesSpinner.message(`Migrating ${sourceFile}...`);
		const extension = extname(sourceFile);
		if (extension === '.svelte') {
			await transformSvelte(sourceFile);
		} else {
			await transformModule(sourceFile);
		}
		sourceFilesSpinner.message(`Successfully migrated ${sourceFile}`);
	}
	sourceFilesSpinner.stop('Successfully migrated all source files');
}

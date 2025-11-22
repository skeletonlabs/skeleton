import { cli } from '../../../../index.js';
import type { FileMigration } from '../../../../utility/file-migration.js';
import { installDependencies } from '../../../../utility/install-dependencies.js';
import type { MigrateOptions } from '../../index.js';
import { transformModule } from './transformers/transform-module.js';
import { transformPackageJson } from './transformers/transform-package.json.js';
import { transformStylesheet } from './transformers/transform-stylesheet.js';
import { transformSvelte } from './transformers/transform-svelte.js';
import { isCancel, log, multiselect, spinner } from '@clack/prompts';
import { globSync, lstatSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';

export default async function (options: MigrateOptions) {
	const cwd = options.cwd ?? process.cwd();
	const migrations: FileMigration[] = [];

	// Find all required files
	const packageJson = {
		name: 'package.json',
		paths: globSync('package.json', { cwd }),
	};

	// Validate file existence
	for (const file of [packageJson]) {
		if (file.paths.length === 0) {
			cli.error(`"${file.name}" not found in directory "${cwd}".`);
		}
		if (file.paths.length > 1) {
			cli.error(`Multiple "${file.name}" entries found in directory: "${cwd}", please ensure there is only one`);
		}
	}

	const availableSourceFolders = globSync('*', {
		cwd: cwd,
		exclude: ['node_modules'],
	}).filter((path) => lstatSync(join(cwd, path)).isDirectory());

	const sourceFolders = await multiselect({
		message: 'What folders make use of Skeleton? (classes, imports, etc.)',
		options: availableSourceFolders.map((folder) => ({ label: folder, value: folder })),
		initialValues: availableSourceFolders,
	});

	if (isCancel(sourceFolders)) {
		cli.error('Migration canceled, nothing written to disk');
		return;
	}

	// Migrate package.json
	const packageSpinner = spinner();
	packageSpinner.start(`Migrating ${packageJson.name}...`);
	try {
		const packageJsonCode = await readFile(packageJson.paths.at(0)!, 'utf-8');
		const transformedPackageJson = transformPackageJson(packageJsonCode);
		migrations.push({
			path: packageJson.paths.at(0)!,
			content: transformedPackageJson.code,
		});
		packageSpinner.stop(`Successfully migrated ${packageJson.name}!`);
	} catch (error) {
		packageSpinner.stop(`Failed to migrate ${packageJson.name}: ${error instanceof Error ? error.message : 'Unknown error'}`, 1);
		cli.error('Migration canceled, nothing written to disk');
	}

	// Migrate source files
	const sourceFiles = globSync(
		sourceFolders.map((folder) => `${folder}**/*.{svelte,js,mjs,ts,mts,css,pcss,postcss}`),
		{
			cwd: cwd,
			exclude: ['node_modules'],
		},
	);
	const sourceFilesSpinner = spinner();
	sourceFilesSpinner.start(`Migrating source files...`);
	for (const path of sourceFiles) {
		const content = await readFile(path, 'utf-8');
		switch (extname(path)) {
			case '.svelte':
				const transformedSvelte = transformSvelte(content);
				migrations.push({
					path: path,
					content: transformedSvelte.code,
				});
				break;
			case '.css':
			case '.pcss':
			case '.postcss':
				const transformedStylesheet = transformStylesheet(content);
				migrations.push({
					path: path,
					content: transformedStylesheet.code,
				});
				break;
			case '.js':
			case '.mjs':
			case '.cjs':
			case '.ts':
			case '.mts':
			case '.jsx':
			case '.tsx':
				const transformedModule = transformModule(content);
				migrations.push({
					path: path,
					content: transformedModule.code,
				});
				break;
		}
		sourceFilesSpinner.message(`Migrated source file: ${path}!`);
	}
	sourceFilesSpinner.stop(`Successfully migrated ${sourceFiles.length} source files!`);

	// Write all migrations to disk
	const writeSpinner = spinner();
	writeSpinner.start('Applying all migrations...');
	try {
		await Promise.all(migrations.map(({ path, content }) => writeFile(path, content)));
		writeSpinner.stop('Successfully applied all migrations!');
	} catch (error) {
		writeSpinner.stop(`Failed to apply migrations: ${error instanceof Error ? error.message.replace('\n', ' ') : 'Unknown error'}`, 1);
		cli.error('Migration canceled');
	}

	// Install dependencies
	const installDependenciesSpinner = spinner();
	installDependenciesSpinner.start('Installing dependencies...');
	try {
		await installDependencies(cwd);
		installDependenciesSpinner.stop('Successfully installed dependencies!');
	} catch (error) {
		installDependenciesSpinner.stop(`Failed to install dependencies: ${error instanceof Error ? error.message : 'Unknown error'}`, 1);
		cli.error('Migration canceled');
		return;
	}

	log.info('Migration complete! Visit https://skeleton.dev for more information.');
}

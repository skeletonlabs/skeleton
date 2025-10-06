import type { MigrateOptions } from '../..';
import { cli } from '../../../..';
import type { FileMigration } from '../../../../utility/file-migration';
import { installDependencies } from '../../../../utility/install-dependencies';
import { transformPackageJson } from './transformers/transform-package.json';
import { transformStylesheet } from './transformers/transform-stylesheet';
import { log, spinner } from '@clack/prompts';
import { readFile, writeFile } from 'fs/promises';
import { glob } from 'tinyglobby';

export default async function (options: MigrateOptions) {
	const cwd = options.cwd ?? process.cwd();
	const migrations: FileMigration[] = [];

	// Find all required files
	const packageJson = {
		name: 'package.json',
		paths: await glob('package.json', { cwd }),
	};
	const stylesheets = {
		name: 'stylesheets',
		paths: await glob('**/*.{css,scss,sass,less,styl,stylus}', {
			cwd: cwd,
			ignore: ['node_modules'],
		}),
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

	// Migrate stylesheets
	const stylesheetSpinner = spinner();
	stylesheetSpinner.start(`Migrating ${stylesheets.name}...`);
	for (const stylesheetPath of stylesheets.paths) {
		const stylesheetCode = await readFile(stylesheetPath, 'utf-8');
		const transformedStylesheet = transformStylesheet(stylesheetCode);
		migrations.push({
			path: stylesheetPath,
			content: transformedStylesheet.code,
		});
		stylesheetSpinner.message(`Migrated stylesheet: ${stylesheetPath}`);
	}
	stylesheetSpinner.stop(`Successfully migrated ${stylesheets.name}!`);

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
	installDependenciesSpinner.start('Updating dependencies...');
	try {
		await installDependencies(cwd);
		installDependenciesSpinner.stop('Successfully updated dependencies!');
	} catch (error) {
		installDependenciesSpinner.stop(`Failed to update dependencies: ${error instanceof Error ? error.message : 'Unknown error'}`, 1);
		cli.error('Migration canceled');
		return;
	}

	log.info('Migration complete! Visit https://skeleton.dev for more information.');
}

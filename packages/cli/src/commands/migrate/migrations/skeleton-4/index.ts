import type { MigrateOptions } from '../..';
import { cli } from '../../../..';
import type { FileMigration } from '../../../../utility/file-migration';
import { transformStyleSheet } from './transformers/transform-stylesheet';
import { spinner } from '@clack/prompts';
import { readFile } from 'fs/promises';
import { glob } from 'tinyglobby';

export default async function (options: MigrateOptions) {
	const cwd = options.cwd ?? process.cwd();
	const migrations: FileMigration[] = [];

	// Find required files
	const stylesheet = {
		name: 'stylesheet.css',
		paths: await glob(['src/app.css' /* SvelteKit */, 'app/globals.css' /* NextJS */, 'src/styles/global.css' /* Astro */], {
			cwd,
		}),
	};

	// Migrate Stylesheet Entry Point
	const stylesheetSpinner = spinner();
	stylesheetSpinner.start(`Migrating ${stylesheet.name}...`);
	try {
		const stylesheetCode = await readFile(stylesheet.paths.at(0)!, 'utf-8');
		const transformedStylesheet = transformStyleSheet(stylesheetCode);
		migrations.push({
			path: stylesheet.paths.at(0)!,
			content: transformedStylesheet.code,
		});
		stylesheetSpinner.stop(`Successfully migrated ${stylesheet.name}!`);
	} catch (error) {
		stylesheetSpinner.stop(`Failed to migrate ${stylesheet.name}: ${error instanceof Error ? error.message : 'Unknown error'}`, 1);
		cli.error('Migration canceled, nothing written to disk');
	}
}

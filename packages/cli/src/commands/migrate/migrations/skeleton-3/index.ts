import type { MigrateOptions } from '../..';
import { cli } from '../../../..';
import type { FileMigration } from '../../../../utility/file-migration';
import { installDependencies } from '../../../../utility/install-dependencies';
import { transformAppCss } from './transformers/transform-app.css';
import { transformAppHtml } from './transformers/transform-app.html';
import { transformModule } from './transformers/transform-module';
import { transformPackageJson } from './transformers/transform-package.json';
import { transformStylesheet } from './transformers/transform-stylesheet';
import { transformSvelte } from './transformers/transform-svelte';
import { FALLBACK_THEME } from './utility/constants';
import { THEME_MAPPINGS } from './utility/theme-mappings';
import type { Theme } from './utility/types';
import { isCancel, log, multiselect, spinner } from '@clack/prompts';
import getLatestVersion from 'latest-version';
import { readFile, writeFile } from 'node:fs/promises';
import { extname } from 'node:path';
import { glob } from 'tinyglobby';

export default async function (options: MigrateOptions) {
	const cwd = options.cwd ?? process.cwd();
	const migrations: FileMigration[] = [];

	// Find all required files
	const packageJson = {
		name: 'package.json',
		paths: await glob('package.json', { cwd }),
	};
	const appHtml = {
		name: 'src/app.html',
		paths: await glob('src/app.html', { cwd }),
	};
	const appCss = {
		name: 'src/app.css',
		paths: await glob('src/app.css', { cwd }),
	};

	// Validate file existence
	for (const file of [packageJson, appHtml, appCss]) {
		if (file.paths.length === 0) {
			cli.error(`"${file.name}" not found in directory "${cwd}".`);
		}
		if (file.paths.length > 1) {
			cli.error(`Multiple "${file.name}" entries found in directory: "${cwd}", please ensure there is only one`);
		}
	}

	// Get source folders
	const availableSourceFolders = await glob('*', {
		cwd: cwd,
		onlyDirectories: true,
		ignore: ['node_modules'],
	});
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
		const skeletonVersion = await getLatestVersion('@skeletonlabs/skeleton', { version: '>=3.0.0-0 <4.0.0' });
		const skeletonSvelteVersion = await getLatestVersion('@skeletonlabs/skeleton-svelte', { version: '>=1.0.0-0 <2.0.0' });
		const transformedPackageJson = transformPackageJson(packageJsonCode, skeletonVersion, skeletonSvelteVersion);
		migrations.push({ path: packageJson.paths.at(0)!, content: transformedPackageJson.code });
		packageSpinner.stop(`Successfully migrated ${packageJson.name}!`);
	} catch (error) {
		packageSpinner.stop(`Failed to migrate ${packageJson.name}: ${error instanceof Error ? error.message : 'Unknown error'}`, 1);
		cli.error('Migration canceled, nothing written to disk');
	}

	// Migrate app.html
	let theme: Theme | undefined;
	const appHtmlSpinner = spinner();
	appHtmlSpinner.start(`Migrating ${appHtml.name}...`);
	try {
		const appHtmlCode = await readFile(appHtml.paths.at(0)!, 'utf-8');
		const transformedAppHtml = transformAppHtml(appHtmlCode);
		if (transformedAppHtml.meta.theme && Object.hasOwn(THEME_MAPPINGS, transformedAppHtml.meta.theme.value)) {
			theme = THEME_MAPPINGS[transformedAppHtml.meta.theme.value];
		} else if (transformedAppHtml.meta.theme) {
			theme = transformedAppHtml.meta.theme;
		} else {
			theme = FALLBACK_THEME;
		}
		migrations.push({ path: appHtml.paths.at(0)!, content: transformedAppHtml.code });
		appHtmlSpinner.stop(`Successfully migrated ${appHtml.name}!`);
	} catch (error) {
		appHtmlSpinner.stop(`Failed to migrate ${appHtml.name}: ${error instanceof Error ? error.message : 'Unknown error'}`, 1);
		cli.error('Migration canceled, nothing written to disk');
	}

	// Migrate app.css
	const appCssSpinner = spinner();
	appCssSpinner.start(`Migrating ${appCss.name}...`);
	try {
		const appCssCode = await readFile(appCss.paths.at(0)!, 'utf-8');
		const transformedAppCss = transformAppCss(appCssCode, theme ?? FALLBACK_THEME);
		migrations.push({ path: appCss.paths.at(0)!, content: transformedAppCss.code });
		appCssSpinner.stop(`Successfully migrated ${appCss.name}!`);
	} catch (error) {
		appCssSpinner.stop(`Failed to migrate ${appCss.name}: ${error instanceof Error ? error.message : 'Unknown error'}`, 1);
		cli.error('Migration canceled, nothing written to disk');
	}

	// Migrate source files
	if (sourceFolders.length > 0) {
		const sourceFiles = await glob(
			sourceFolders.map((folder) => `${folder}**/*.{svelte,js,mjs,ts,mts,css,pcss,postcss}`),
			{
				cwd: cwd,
				ignore: ['node_modules', 'src/app.css'],
			},
		);
		const sourceFilesSpinner = spinner();
		sourceFilesSpinner.start(`Migrating source files...`);
		for (const sourceFile of sourceFiles) {
			sourceFilesSpinner.message(`Migrating ${sourceFile}...`);
			const extension = extname(sourceFile);
			try {
				const code = await readFile(sourceFile, 'utf-8');
				switch (extension) {
					case '.svelte': {
						const transformedSvelte = transformSvelte(code);
						migrations.push({ path: sourceFile, content: transformedSvelte.code });
						break;
					}
					case '.js':
					case '.mjs':
					case '.ts':
					case '.mts': {
						const transformedModule = transformModule(code);
						migrations.push({ path: sourceFile, content: transformedModule.code });
						break;
					}
					case '.css':
					case '.pcss':
					case '.postcss': {
						const transformedStyleSheet = transformStylesheet(code);
						migrations.push({ path: sourceFile, content: transformedStyleSheet.code });
						break;
					}
				}
				sourceFilesSpinner.message(`Successfully migrated ${sourceFile}!`);
			} catch (error) {
				sourceFilesSpinner.stop(`Failed to migrate ${sourceFile}: ${error instanceof Error ? error.message : 'Unknown error'}`, 1);
				cli.error('Migration canceled, nothing written to disk');
			}
		}
		sourceFilesSpinner.stop(`Successfully migrated ${sourceFiles.length} source files!`);
	}

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

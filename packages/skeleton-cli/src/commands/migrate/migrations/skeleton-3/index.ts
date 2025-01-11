import fg from 'fast-glob';
import { transformTailwindConfig } from './transform-tailwind-config.js';
import { transformPackage } from './transform-package.js';
import type { MigrateOptions } from '../../index.js';
import { program } from 'commander';

export default async function (options: MigrateOptions) {
	/**
	 * Option handling
	 */
	const cwd = options.cwd ?? process.cwd();

	/**
	 * Ensure the required files exist.
	 */
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
			program.error(
				`"${file.matcher}" not found in directory: "${cwd}", please change directory into your project root or provide the "cwd" argument`
			);
		}
		if (file.paths.length > 1) {
			program.error(`Multiple "${file.matcher}" files found in directory: "${cwd}", please ensure there is only one`);
		}
	}

	/**
	 * Run migrations
	 */
	await transformPackage(pkg.paths[0]);
	await transformTailwindConfig(tailwindConfig.paths[0]);
	// TODO: Transform svelte components (.svelte)
	// TODO: Transform modules (.ts/.js)
	// TODO: Run: "<pm> install"
}

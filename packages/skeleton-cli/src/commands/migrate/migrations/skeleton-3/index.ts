import fg from 'fast-glob';
import { transformTailwindConfig } from './transform-tailwind-config.js';
import { transformPackage } from './transform-package.js';
import type { MigrateOptions } from '../../index.js';
import { spinner } from '@clack/prompts';
import { cli } from '../../../../index.js';
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
			cli.error(`Multiple "${file.matcher}" files found in directory: "${cwd}", please ensure there is only one`);
		}
	}

	const packageSpinner = spinner();
	packageSpinner.start(`Migrating ${pkg.matcher}...`);
	await transformPackage(pkg.paths[0]);
	packageSpinner.stop(`Successfully migrated ${pkg.matcher}`);

	const tailwindConfigSpinner = spinner();
	tailwindConfigSpinner.start(`Migrating ${tailwindConfig.matcher}...`);
	await transformTailwindConfig(tailwindConfig.paths[0]);
	tailwindConfigSpinner.stop(`Successfully migrated ${tailwindConfig.matcher}`);

	// TODO: Transform svelte components (.svelte)
	// TODO: Transform modules (.ts/.js)
}

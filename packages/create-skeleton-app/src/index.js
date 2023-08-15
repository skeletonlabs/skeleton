#!/usr/bin/env node
import { SkeletonOptions, createSkeleton } from './creator.js';
import fs from 'fs-extra';
import mri from 'mri';
import { bold, cyan, gray, grey, red } from 'kleur/colors';
import { intro, text, select, multiselect, spinner } from '@clack/prompts';
import { dist, getHelpText, goodbye, whichPMRuns, checkIfDirSafeToInstall } from './utils.js';
import path, { resolve, join } from 'path';
import semver from 'semver';
import fg from 'fast-glob';

// Minimum version required for Svelte Kit
const requiredVersion = '16.14.0';

async function main() {
	if (semver.lt(process.version, requiredVersion)) {
		console.error(`You need to be running Node ${requiredVersion} to use Svelte Kit`);
		process.exit(1);
	}

	const startPath = process.cwd();
	let defaults = new SkeletonOptions();

	// grab any passed arguments from the command line
	let opts = await parseArgs();
	// need to set some defaults if they are not passed in
	if (!('quiet' in opts)) opts.quiet = false;
	// if no templatedir is provided we have to account for the dist location
	if (!('skeletontemplatedir' in opts)) {
		opts.skeletontemplatedir = resolve(dist('.'), '../templates');
	} else {
		// Resolve can handle multiple absolute paths so passing in a relative or absolute path is fine
		opts.skeletontemplatedir = resolve(process.cwd(), opts.skeletontemplatedir);
	}

	try {
		checkIfDirSafeToInstall(opts.path);
	} catch (e) {
		console.error(red(`\n${e.message}`));
		process.exit(1);
	}

	if (!opts.quiet) {
		opts = await askForMissingParams(opts);
	}
	opts = Object.assign(defaults, opts);
	opts.packagemanager = whichPMRuns()?.name;

	// Now that we have all of the options, lets create it.
	const s = spinner();
	if (!opts.quiet) {
		s.start('Installing');
	}

	try {
		await createSkeleton(opts);
	} catch (e) {
		console.error(red(`\n${e.message}`));
		process.exit(1);
	}

	if (!opts.quiet) {
		s.stop('Done installing');
		// And give the user some final information on what to do Next

		const pm = opts.packagemanager;
		let runString = `${pm} install\n${pm} dev\n`;

		if (pm == 'npm') {
			runString = 'npm install\nnpm run dev\n';
		}
		let finalInstructions = bold(cyan(`\nDone! You can now:\n\n`));
		if (startPath != opts.path) {
			finalInstructions += bold(cyan(`cd ${path.relative(startPath, opts.path)}\n`));
		}
		finalInstructions += bold(cyan(runString));
		finalInstructions += grey(`Need some help or found an issue? Visit us on Discord https://discord.gg/EXqV7W8MtY`);
		console.log(finalInstructions);
	}
	process.exit();
}

async function parseArgs() {
	const argv = process.argv.slice(2);

	// mri will parse argv and expand any shorthand args.  Accepted args are the literal props of SkelOptions
	/** @type {SkeletonOptions} */
	const opts = mri(argv, {
		alias: {
			h: 'help',
			p: 'path',
			t: 'skeletontheme',
			m: 'monorepo',
			q: 'quiet',
			v: 'verbose',
		},
		boolean: [
			'help',
			'quiet',
			'monorepo',
			'library',
			'prettier',
			'eslint',
			'playwright',
			'vitest',
			'inspector',
			'codeblocks',
			'popups',
			'forms',
			'typography',
			'mdsvex',
		],
	});

	// If a user invokes 'create-app blah foo', it falls into the _ catch all list, the best we can do is take the first one and use that as the path
	// if args are passed in incorrectly such as --prettier=0 instead of --prettier=false then a 0 will be added to the _ collection, we check that the
	// first one isn't a bungled arg set to 0
	if (opts._.length && opts._[0] != 0) {
		opts.path = opts._[0];
	}
	// Show help if specified regardless of how many other options are specified, have fun updating the text string in utils.ts :(
	if ('help' in opts) {
		console.log(getHelpText());
		process.exit();
	}
	return opts;
}

/**
 * @param {SkeletonOptions} opts
 */
export async function askForMissingParams(opts) {
	const { version } = JSON.parse(fs.readFileSync(dist('../package.json'), 'utf-8'));

	intro(`Create Skeleton App ${gray(`(version ${version})`)}
	
${bold(cyan('Welcome to Skeleton 💀! A UI toolkit for Svelte + Tailwind'))}

Problems? Open an issue on ${cyan('https://github.com/skeletonlabs/skeleton/issues')} if none exists already.`);

	//NOTE: When doing checks here, make sure to test for the presence of the prop, not the prop value as it may be set to false deliberately.
	if (!('path' in opts)) {
		opts.path = await text({
			message: 'Where should we install your project (Enter for current directory) ?',
			placeholder: '',
			validate(value) {
				if (value.length === 0) value = '.';
				try {
					checkIfDirSafeToInstall(resolve(process.cwd(), value));
				} catch (e) {
					return e.message;
				}
			},
		});
		goodbye(opts.path);
	}
	// name to set in package.json
	opts.name = opts.path;

	// Skeleton Template Selection
	// We have to ask for the template first as it may dictate things like required packages and typechecking
	// skeletontemplatedir is the path to the templates directory, it's either passed in as an arg or set to cwd
	// it may be a single directory with a csa-meta in the root,
	// or it holds multiple directories with csa-meta files in them and skeletontemplate selects that sub folder.

	let templateFound = false;
	if (opts?.skeletontemplate) {
		// they have asked for a specific template within the folder
		opts.skeletontemplate = resolve(opts.skeletontemplatedir, opts.skeletontemplate, 'csa-meta.json');
		//check that it exists
		if (!fs.existsSync(opts.skeletontemplate)) {
			console.error(`The template ${opts.skeletontemplate} does not exist`);
			process.exit(1);
		}
		templateFound = true;
	}
	// no template specified, so scan the templatedir for csa-meta files
	if (!templateFound) {
		const metaFiles = fg.sync(['**/csa-meta.json'], { cwd: opts.skeletontemplatedir, deep: 2 });
		if (metaFiles.length === 0) {
			console.error(`No templates found in ${opts.skeletontemplatedir}`);
			process.exit(1);
		}
		let parsedChoices = [];
		metaFiles.forEach((meta_file) => {
			const path = join(opts.skeletontemplatedir, meta_file);
			const { position, label, description, enabled } = JSON.parse(fs.readFileSync(path, 'utf8'));
			if (enabled) {
				parsedChoices.push({ position, label, hint: description, value: path });
			}
		});
		parsedChoices.sort((a, b) => a.position - b.position);
		opts.skeletontemplate = await select({
			message: 'Which Skeleton app template?',
			options: parsedChoices,
		});
		goodbye(opts.skeletontemplate);
	}
	// Now that we have the template, lets get the meta data from it and the base path
	opts.meta = JSON.parse(fs.readFileSync(opts.skeletontemplate, 'utf8'));
	if (opts.meta.requiredFeatures) {
		opts.meta.requiredFeatures.forEach((val) => {
			Object.assign(opts, val);
		});
	}
	opts.skeletontemplatedir = path.dirname(opts.skeletontemplate);

	// If it's a premium template, wording needs to be change to indicate that there is a theme already built in
	// Skeleton Theme Selection
	if (!('skeletontheme' in opts)) {
		let themeChoices = [
			{ label: 'Skeleton', value: 'skeleton' },
			{ label: 'Modern', value: 'modern' },
			{ label: 'Hamlindigo', value: 'hamlindigo' },
			{ label: 'Rocket', value: 'rocket' },
			{ label: 'Sahara', value: 'sahara' },
			{ label: 'Gold Nouveau', value: 'gold-nouveau' },
			{ label: 'Vintage', value: 'vintage' },
			{ label: 'Seafoam', value: 'seafoam' },
			{ label: 'Crimson', value: 'crimson' },
			{ label: cyan('Custom'), value: 'custom', hint: 'Will ask for a name next' },
		];
		if (opts.meta.type === 'premium') {
			themeChoices.unshift({ label: 'Use templates built in theme', value: 'builtin' });
		}
		opts.skeletontheme = await multiselect({
			message: 'Select a theme (top most selection will be default):',
			options: themeChoices,
			required: true,
		});
		goodbye(opts.skeletontheme);
	}

	if (opts.skeletontheme.includes('custom')) {
		let customName = await text({
			message: 'Enter a name for your custom theme:',
			placeholder: 'theme_name',
			validate(value) {
				if (value.length === 0) {
					return 'Please enter a name for your custom theme';
				}
				// regex to check if value can be used as a variable name, it cannot allow hyphens
				if (!/^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(value)) {
					return 'Name for theme must be a valid syntax for a Javascript variable name';
				}
			},
		});
		opts.skeletontheme.pop('custom');
		opts.skeletontheme.push({ custom: customName });
		goodbye();
	}

	// Additional packages to install - these can be influenced by the template selected
	let packages = [
		{ value: 'forms', label: 'Add Tailwind forms ?', package: '@tailwindcss/forms', force: false },
		{ value: 'typography', label: 'Add Tailwind typography ?', package: '@tailwindcss/typography', force: false },
		{ value: 'codeblocks', label: 'Add CodeBlock (installs highlight.js) ?', package: 'highlight.js', force: false },
		{ value: 'popups', label: 'Add Popups (installs floating-ui) ?', package: '@floating-ui/dom', force: false },
		// { value: 'mdsvex', label: 'Add Markdown support (installs mdsvex) ?', package: 'mdsvex', force: false },
	];
	// Force the packages that are required by the template
	packages.forEach((pkg) => {
		if (opts[pkg.value] != undefined) pkg.force = true;
	});
	// Now we can ask the user about any options that are not forced to be installed
	let optionalPackages = packages.filter((pkg) => !pkg.force);
	// Get list of forced packages to display to the user
	let msg = '';
	packages.forEach((p) => {
		if (p.force) msg += p.package + '\n';
	});
	if (msg.length > 0) {
		msg = `\nThe following packages will be installed because they are required by the template:\n\n${msg}\nWhat other packages would you like to install:`;
	} else {
		msg = `\nWhat other packages would you like to install:`;
	}

	if (optionalPackages.length > 0) {
		// check which options are set and fill the initialValues array
		const packageChoices = await multiselect({
			message: msg,
			options: optionalPackages,
			required: false,
		});
		goodbye(packages);
		if (Array.isArray(packageChoices)) {
			packageChoices.forEach((value) => (opts[value] = true));
		}
	}

	if (!('types' in opts)) {
		opts.types = await select({
			message: 'Add type checking with TypeScript?',
			options: [
				{ value: 'typescript', label: 'Yes, using TypeScript syntax' },
				{ value: 'checkjs', label: 'Yes, using JavaScript with JSDoc comments' },
				{ value: null, label: 'No' },
			],
		});
		goodbye(opts.type);
	}

	// Setup dev oriented packages and settings
	if (
		!['eslint', 'prettier', 'playwright', 'vitest', 'inspector'].every((value) => {
			return Object.keys(opts).includes(value);
		})
	) {
		const optionalInstalls = await multiselect({
			message: 'What would you like setup in your project:',
			// test opts for which values have been provided and prefill them
			initialValues: ['eslint', 'prettier', 'playwright', 'vitest', 'inspector'].filter((value) => {
				return Object.keys(opts).includes(value);
			}),
			options: [
				{ value: 'eslint', label: 'Add ESLint for code linting?' },
				{ value: 'prettier', label: 'Add Prettier for code formatting ?' },
				{ value: 'playwright', label: 'Add Playwright for browser testing ?' },
				{ value: 'vitest', label: 'Add Vitest for unit testing ?' },
				{ value: 'inspector', label: 'Add Svelte Inspector for quick access to your source files from the browser ?' },
			],
			required: false,
		});
		goodbye(optionalInstalls);
		optionalInstalls.forEach((value) => (opts[value] = true));
	}
	return opts;
}

main();

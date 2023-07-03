#!/usr/bin/env node
import { SkeletonOptions, createSkeleton } from './creator.js';
import fs from 'fs-extra';
import mri from 'mri';
import { bold, cyan, gray, grey, red } from 'kleur/colors';
import { intro, text, select, multiselect, spinner } from '@clack/prompts';
import events from 'events';
import { dist, getHelpText, goodbye, whichPMRuns } from './utils.js';
import path from 'path';
import semver from 'semver';
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

	if (!opts?.quiet) {
		opts = await askForMissingParams(opts);
	}
	opts = Object.assign(defaults, opts);
	opts.packagemanager = whichPMRuns()?.name;

	// Now that we have all of the options, lets create it.
	if (!opts?.quiet) {
		const s = spinner();
		s.start('Installing');
	}

	await createSkeleton(opts);

	if (!opts?.quiet) {
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
			n: 'name',
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
			'skeletonui',
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
			'verbose',
		],
	});

	// If a user invokes 'create-app blah foo', it falls into the _ catch all list, the best we can do is take the first one and use that as the name
	// if args are passed in incorrectly such as --prettier=0 instead of --prettier=false then a 0 will be added to the _ collection, we check that the
	// first one isn't a bungled arg set to 0
	if (opts._.length && opts._[0] != 0) {
		opts.name = opts._[0];
	}
	// Show help if specified regardless of how many other options are specified, have fun updating the text string in utils.ts :(
	if ('help' in opts) {
		console.log(getHelpText());
		process.exit();
	}
	return opts;
}

function checkIfDirSafeToInstall(path) {
	// Check if the directory already exists.
	if (!fs.existsSync(path)) return;

	//lets see whats in there
	const conflicts = fs
		.readdirSync(path)
		.filter((file) =>
			/^(package.json|svelte.config.js|tailwind.config.cjs|pnpm-lock.yaml|postcss.config.cjs|vite.config.ts)$/.test(file),
		);

	if (conflicts.length > 0) {
		console.error("create-skeleton-app doesn't support updating an existing project, it needs a new empty directory to install into");
		console.error(`The directory ${path} contains files that could conflict:\n`);
		for (const file of conflicts) {
			try {
				const stats = fs.lstatSync(path + '/' + file);
				if (stats.isDirectory()) {
					console.error(`  ${red(file)}/`);
				} else {
					console.error(`  ${red(file)}`);
				}
			} catch {
				console.error(`  ${red(file)}`);
			}
		}
		console.error('Either try using a new directory name, or remove the files listed above.');
		process.exit(1);
	}
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
	if (!('name' in opts)) {
		opts.name = await text({
			message: 'Name for your new project:?',
			placeholder: 'my-app',
			validate(value) {
				if (value.length === 0) return `App name is required!`;
			},
		});
		goodbye(opts.name);
	}
	// test the path to make sure it is safe to install
	if (opts.path === undefined) opts.path = process.cwd();
	opts.name = opts.name.replace(/\s+/g, '-').toLowerCase();
	opts.path = path.resolve(opts.path, opts.name);
	checkIfDirSafeToInstall(opts.path);

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
		optionalInstalls.every((value) => (opts[value] = true));
	}

	// Skeleton Theme Selection
	if (!('skeletontheme' in opts)) {
		opts.skeletontheme = await select({
			message: 'Select a theme:',
			options: [
				{ label: 'Skeleton', value: 'skeleton' },
				{ label: 'Modern', value: 'modern' },
				{ label: 'Hamlindigo', value: 'hamlindigo' },
				{ label: 'Rocket', value: 'rocket' },
				{ label: 'Sahara', value: 'sahara' },
				{ label: 'Gold Nouveau', value: 'gold-nouveau' },
				{ label: 'Vintage', value: 'vintage' },
				{ label: 'Seafoam', value: 'seafoam' },
				{ label: 'Crimson', value: 'crimson' },
			],
		});
		goodbye(opts.skeletontheme);
	}

	const templateDir = opts.skeletontemplatedir || '../templates';

	//Skeleton Template Selection
	if (!('skeletontemplate' in opts)) {
		// need to check whether a templatedir has been passed in (might be from a script in package.json pointing to real template projects)

		let parsedChoices = [];
		fs.readdirSync(dist(templateDir)).forEach((dir) => {
			const meta_file = dist(`${templateDir}/${dir}/csa-meta.json`);
			const { position, label, description, enabled } = JSON.parse(fs.readFileSync(meta_file, 'utf8'));
			if (enabled) {
				parsedChoices.push({
					position,
					label,
					hint: description,
					value: dir,
				});
			}
		});
		parsedChoices.sort((a, b) => a.position - b.position);
		opts.skeletontemplate = await select({
			message: 'Which Skeleton app template?',
			options: parsedChoices,
		});
		goodbye(opts.skeletontemplate);
	}

	// Additional packages to install - these can be influenced by the template selected
	if (!['forms', 'typography', 'codeblocks', 'popups'].every((value) => {
		return Object.keys(opts).includes(value);
	})) {
		const csaMeta = JSON.parse(fs.readFileSync(dist(`${templateDir}/${opts.skeletontemplate}/csa-meta.json`), 'utf8'));
		let msg = "";
		["dependencies", "devDependencies", "peerDependencies"].forEach((depType) => {
			if (csaMeta[depType]) {
				Object.keys(csaMeta[depType]).forEach((dep) => {
					msg += dep + "\n";
				});
			}
		});
		if (msg.length > 0) {
			msg = "The following packages are required by the template: \n" + msg + "\n";
		}
		const packages = await multiselect({
			message: msg + 'What other packages would you like to install:',
			initialValues: ['forms', 'typography', 'codeblocks', 'popups'].filter((value) => {
				return Object.keys(opts).includes(value);
			}),
			options: [
				{ value: 'forms', label: 'Add Tailwind forms ?' },
				{ value: 'typography', label: 'Add Tailwind typography ?' },
				{ value: 'codeblocks', label: 'Add CodeBlock (installs highlight.js) ?' },
				{ value: 'popups', label: 'Add Popups (installs floating-ui) ?' }
			],
			required: false,
		});
		goodbye(packages);
		packages.every((value) => (opts[value] = true));
	}

	return opts;
}

main();

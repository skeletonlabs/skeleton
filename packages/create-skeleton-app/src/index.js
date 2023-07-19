#!/usr/bin/env node
import { SkeletonOptions, createSkeleton } from './creator.js';
import fs from 'fs-extra';
import mri from 'mri';
import { bold, cyan, gray, grey, red } from 'kleur/colors';
import { intro, text, select, multiselect, spinner } from '@clack/prompts';
import { dist, getHelpText, goodbye, whichPMRuns, checkIfDirSafeToInstall } from './utils.js';
import path, { resolve, join } from 'node:path';
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
	if (!('skeletontemplatedir' in opts)) opts.skeletontemplatedir = '../templates';
	// Resolve can handle multiple absolute paths so passing in a relative or absolute path is fine
	opts.skeletontemplatedir = resolve(process.cwd(), opts.skeletontemplatedir);

	// TODO: Need to determine best place to check - we may have a path arg passed in, we may have to ask for it, we may need to default to my-skeleton-app if in quiet mode
	// test the path to make sure it is safe to install
	checkIfDirSafeToInstall(opts.path);

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

	await createSkeleton(opts);

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
			'mdsvex'
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
			placeholder: 'skeleton-app',
			validate(value) {
				if (value.length === 0) return `App name is required!`;
				const safeCheck = checkIfDirSafeToInstall(resolve(process.cwd(), value));
				if (!safeCheck.safe) {
					return `The directory ${value} contains files that could conflict:\n${safeCheck.conflicts.join()}\nEither try using a new directory, or remove the files listed above.`;
				}
			},
		});
		goodbye(opts.name);
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
		optionalInstalls.every((value) => (opts[value] = true));
	}

	//Skeleton Template Selection
	// TODO: do we still need skeletontemplate?  Can we just use the skeletontemplatedir?
	// skeletontemplatedir is the path to the templates directory, there may be a template with a csa-meta sitting directly within that folder
	// or it holds multiple directories with csa-meta files in them and skeletontemplate selects that sub folder.

	let templateFound = false;
	// they have asked for a specific template within the folder
	if (opts?.skeletontemplate) {
		opts.skeletontemplate = resolve(opts.skeletontemplatedir, opts.skeletontemplate, 'csa-meta.json');
		//check that it exists
		if (!fs.existsSync(opts.skeletontemplate)) {
			console.error(`The template ${opts.skeletontemplate} does not exist`);
			process.exit(1);
		}
		templateFound = true;
	}

	if (!templateFound) {
		const metaFiles = fg.sync(['**/csa-meta.json'], { cwd: resolve(process.cwd(), opts.skeletontemplatedir), deep:2 })
		if (metaFiles.length === 0) {
			console.error(`No templates found in ${opts.skeletontemplatedir}`);
			process.exit(1);
		}
		let parsedChoices = [];

		metaFiles.forEach((meta_file) => {
			const path = join(opts.skeletontemplatedir, meta_file);
			const { position, label, description, enabled } = JSON.parse(fs.readFileSync(path, 'utf8'));
			if (enabled) {
				parsedChoices.push({
					position,
					label,
					hint: description,
					value: path
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
	
	console.log("THIS IS THE TEMPLATE",opts.skeletontemplate)

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

	// Additional packages to install - these can be influenced by the template selected
	if (!['forms', 'typography', 'codeblocks', 'popups', 'mdsvex'].every((value) => {
		return Object.keys(opts).includes(value);
	})) {
		const csaMeta = JSON.parse(fs.readFileSync(opts.skeletontemplate), 'utf8');
		let msg = "";
		["dependencies", "devDependencies", "peerDependencies"].forEach((depType) => {
			if (csaMeta[depType]) {
				Object.keys(csaMeta[depType]).forEach((dep) => { 
					msg += dep + "\n";
					switch(dep){
						case "@tailwindcss/forms":
							opts.forms = true;
							break;
						case "@tailwindcss/typography":
							opts.typography = true;
							break;
						case "highlight.js":
							opts.codeblocks = true;
							break;
						case "@floating-ui/dom":
							opts.popups = true;
							break;
						case "mdsvex":
							opts.mdsvex = true;
							break;
					}
				});
			}
		});
		if (msg.length > 0) {
			msg = "The following packages are required by the template: \n" + msg + "\n";
		}
		// check which options are set and fill the initialValues array
		console.log(['forms', 'typography', 'codeblocks', 'popups', 'mdsvex'].filter((value) => {
			return Object.keys(opts).includes(value);
		}))
		const packages = await multiselect({
			message: msg + 'What other packages would you like to install:',
			initialValues: ['forms', 'typography', 'codeblocks', 'popups', 'mdsvex'].filter((value) => {
				if ( Object.keys(opts).includes(value)) {return value;}
			}),
			options: [
				{ value: 'forms', label: 'Add Tailwind forms ?', disabled: true },//csaMeta?.devDependencies?.['@tailwindcss/forms'] ? true : false },
				{ value: 'typography', label: 'Add Tailwind typography ?', disabled: csaMeta?.devDependencies?.['@tailwindcss/typography'] ? true : false },
				{ value: 'codeblocks', label: 'Add CodeBlock (installs highlight.js) ?', disabled: csaMeta?.dependencies?.['highlight.js'] ? true : false },
				{ value: 'popups', label: 'Add Popups (installs floating-ui) ?', disabled: csaMeta?.dependencies?.['@floating-ui/dom'] ? true : false },
				{ value: 'mdsvex', label: 'Add Markdown support (installs mdsvex) ?', disabled: csaMeta?.devDependencies?.['mdsvex'] ? true : false}
			],
			required: false,
		});
		goodbye(packages);
		packages.every((value) => (opts[value] = true));
	}

	return opts;
}

main();

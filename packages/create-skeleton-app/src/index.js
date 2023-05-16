#!/usr/bin/env node
import { SkeletonOptions, createSkeleton } from './creator.js';
export { SkeletonOptions, createSkeleton }
import fs from 'fs-extra';
import mri from 'mri';
import { bold, cyan, gray, grey, red } from 'kleur/colors';
import { intro, outro, text, select, multiselect, spinner, confirm, cancel, isCancel } from '@clack/prompts';
import events from 'events'
import { dist, getHelpText, goodbye } from './utils.js';
import path from 'path';
import semver from 'semver';
// Minimum version required for Svelte Kit
const requiredVersion = '16.14.0';

async function main() {
	if (semver.lt(process.version, requiredVersion)) {
		console.error(`You need to be running Node ${requiredVersion} to use Svelte Kit`)
		process.exit(1)
	}

	// This is required to handle spawning processes
	events.EventEmitter.defaultMaxListeners = 15;

	// grab any passed arguments from the command line
	const startPath = process.cwd()
	let opts = await parseArgs();

	if ('quiet' in opts) {
		// in quiet mode we prefill the defaults, then overlay the passed options and bypass all of askForMissingParams so that it
		// doesn't have to constantly check for quietmode all the time.
		let defaults = new SkeletonOptions();
		opts = Object.assign(defaults, opts);
	} else {
		// in interactive mode we ask the user to fill anything not passed in
		opts = await askForMissingParams(opts);
	}

	// Now that we have all of the options, lets create it.
	const s = spinner()
	s.start("Installing")
	await createSkeleton(opts);
	s.stop("Done installing")
	// And give the user some final information on what to do Next
	if (!(opts?.quiet)) {
		const pm = opts.packagemanager;
		let runString = `${pm} dev\n`;

		if (pm == 'npm') {
			runString = 'npm run dev\n';
		}
		let finalInstructions = bold(cyan(`\nDone! You can now:\n\n`));
		if (startPath != opts.path) {
			finalInstructions += bold(cyan(`cd ${path.relative(startPath, opts.path)}\n`));
		}
		finalInstructions += bold(cyan(runString))
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
			'prettier',
			'eslint',
			'playwright',
			'vitest',
			'codeblocks',
			'popups',
			'forms',
			'typography',
			'verbose'
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

Problems? Open an issue on ${cyan('https://github.com/skeletonlabs/skeleton/issues')} if none exists already.`)

	//NOTE: When doing checks here, make sure to test for the presence of the prop, not the prop value as it may be set to false deliberately.
	if (!('name' in opts)) {
		opts.name = await text({
			message: "Name for your new project:?",
			placeholder: "my-app",
			validate(value) {
				if (value.length === 0) return `App name is required!`;
			},
		});
		goodbye(opts.name)
	}

	if (!('types' in opts)) {
		opts.types = await select({
			message: 'Add type checking with TypeScript?',
			options: [
				{
					label: 'Yes, using TypeScript syntax',
					value: 'typescript',
				},
				{
					label: 'Yes, using JavaScript with JSDoc comments',
					value: 'checkjs',
				},
				{ label: 'No', value: null },
			]
		})
		goodbye(opts.type)
	}

	if (!('eslint' in opts)) {
		opts.eslint = await confirm({
			message: 'Add ESLint for code linting?'
		});
		goodbye(opts.eslint)
	}

	if (!('prettier' in opts)) {
		opts.prettier = await confirm({ message: 'Add Prettier for code formatting ?' });
		goodbye(opts.prettier)
	}

	if (!('playwright' in opts)) {
		opts.playwright = await confirm({ message: 'Add Playwright for browser testing ?' });
		goodbye(opts.playwright)
	}

	if (!('vitest' in opts)) {
		opts.vitest = await confirm({ message: 'Add Vitest for unit testing ?' });
		goodbye(opts.vitest)
	}

	// Component Package Selection
	if (!(['codeblocks', 'popups'].every(value => { return Object.keys(opts).includes(value) }))) {
		const componentPackages = await multiselect({
			message: "Install component dependencies:",
			options: [
				{ value: "codeblocks", label: "CodeBlock (installs highlight.js)", },
				{ value: "popups", label: "Popups (installs floating-ui)" },
			],
			required: false
		});
		goodbye(componentPackages)
		componentPackages.every(value => opts[value] = true)
	}

	// Tailwind Plugin Selection
	if (!(['forms', 'typography'].every(value => { return Object.keys(opts).includes(value) }))) {
		const twplugins = await multiselect({
			message: "Pick tailwind plugins to add:",
			options: [
				{ value: "forms", label: "forms" },
				{ value: "typography", label: "typography" }
			],
			required: false
		});
		goodbye(opts.twplugins)
		twplugins.every(value => opts[value] = true)
	}

	// Skeleton Theme Selection
	if (!('skeletontheme' in opts)) {
		opts.skeletontheme = await select({
			message: "Select a theme:",
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
		goodbye(opts.skeletontheme)
	}

	//Skeleton Template Selection
	if (!('skeletontemplate' in opts)) {
		// need to check whether a templatedir has been passed in (might be from a script in package.json pointing to real template projects)
		const templateDir = opts.skeletontemplatedir || '../templates';
		let parsedChoices = [];
		fs.readdirSync(dist(templateDir)).forEach((dir) => {
			const meta_file = dist(`${templateDir}/${dir}/csa-meta.json`);
			const { position, label, description, enabled } = JSON.parse(fs.readFileSync(meta_file, 'utf8'));
			if (enabled) {
				parsedChoices.push({
					position,
					label,
					description,
					value: dir,
				});
			}
		});
		parsedChoices.sort((a, b) => a.position - b.position);
		opts.skeletontemplate = await select({
			message: 'Which Skeleton app template?',
			options: parsedChoices
		});
		goodbye(opts.skeletontemplate)
	}

	const skelOpts = new SkeletonOptions();
	Object.assign(skelOpts, opts);
	return skelOpts;
}
await main();

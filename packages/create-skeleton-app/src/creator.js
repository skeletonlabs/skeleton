import { create } from 'create-svelte';
import { readFileSync, writeFileSync, cpSync, appendFileSync, existsSync } from 'fs';
import got from 'got';
import { resolve } from 'path';
import { cwd, chdir } from 'process';
import { mkdirp, setNestedValue, checkIfDirSafeToInstall, iti } from './utils.js';
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// NOTE: Any changes here must also be reflected in the --help output in utils.js and shortcut expansions in index.js.
// Probably a good idea to do a search on the values you are changing to catch any other areas they are used in

export class SkeletonOptions {
	constructor() {
		// svelte-create expects these options, do not change the names or values.
		this.name = 'skeleton-app'; // only used for the name field in the package.json
		this.template = 'skeleton'; // 'default' | 'skeleton' | 'skeletonlib' has nothing to do with Skeleton
		this.types = 'typescript'; //'typescript' | 'checkjs' | null;
		this.prettier = false;
		this.eslint = false;
		this.playwright = false;
		this.vitest = false;

		// create-skeleton-app additions
		this._ = []; //catch all for extraneous params from mri, used to capture project name.
		this.help = false;
		this.quiet = false;
		this.path = '.';
		this.forms = false;
		this.typography = false;
		this.codeblocks = false;
		this.popups = false;
		this.mdsvex = false;
		this.inspector = false;
		this.skeletontheme = 'skeleton';
		this.skeletontemplate = 'skeleton-template-bare';
		this.skeletontemplatedir = '../templates';
		this.packagemanager = 'npm';
		this.packageVersionsAdded = false;
		this.devDependencies = new Map([
			['postcss', 'latest'],
			['autoprefixer', 'latest'],
			['tailwindcss', 'latest'],
			['@tailwindcss/typography', 'latest'],
			['@tailwindcss/forms', 'latest'],
			['@skeletonlabs/skeleton', 'latest'],
			['@sveltejs/adapter-vercel', 'latest'],
			['mdsvex', 'latest'],
		]);
		this.dependencies = new Map([
			['highlight.js', 'latest'],
			['@floating-ui/dom', 'latest'],
		]);

		// props below are private to the Skeleton team
		this.monorepo = false; // Adds additional config for installing into a pnpm monorepo
		this.library = false; // allows forcing of a library install (could be forced by directly setting template to skeletonlib)
		this.test = false; // adjusts tests to a common parent directory for monorepo testing, API only, set by testing scripts
		this.meta = undefined; // holds the csa-meta.json data
	}
	set metaObject(value) {
		console.log('hrm we should be set')
		this.meta = value;
		if (this.meta.requiredFeatures) {
			this.meta.requiredFeatures.forEach((val) => { Object.assign(this, val) })
		}
	}
}

export async function createSkeleton(opts) {
	// When being run multiple times in a row, we need to make sure we return to this current directory
	// and not the newly created projects subdir
	const startPath = cwd();

	// Hidden option to change the install type to be a Svelte-Kit library project
	if (opts.library) {
		opts.template = 'skeletonlib';
	}
	// We could have been called directly as an API, so we still need to check if the directory is safe to install into
	checkIfDirSafeToInstall(opts.path);

	// create-svelte will build the base install for us
	await create(opts.path, opts);
	chdir(opts.path);

	if (opts.meta == undefined) {
		if (existsSync(opts.skeletontemplate)) {
			opts.metaObject = JSON.parse(readFileSync(opts.skeletontemplate, 'utf8'));
		} else {
			const err = new Error(`Could not find skeleton template meta file at ${opts.skeletontemplate}`);
			throw err
		}
	}

	await modifyPackageJson(opts);
	// write out config files
	createSvelteConfig(opts);
	await createVSCodeSettings();
	createTailwindConfig(opts);
	createPostCssConfig();
	copyTemplate(opts);

	// Monorepo additions
	if (opts.monorepo) cpSync(resolve(__dirname, '../README-MONO.md'), resolve(cwd(), 'README.md'), { force: true });

	if (opts.test) createTestConfig(opts);
	// go back to starting location in case we get called again to create another template
	chdir(startPath);
	opts.meta = undefined;
	return opts;
}

async function modifyPackageJson(opts) {
	await getLatestPackageVersions(opts);
	let pkgJson = JSON.parse(readFileSync('./package.json'));

	for (const [pkg, version] of opts.dependencies) {
		setNestedValue(pkgJson, ['dependencies', pkg], version);
	};
	for (const [pkg, version] of opts.devDependencies) {
		setNestedValue(pkgJson, ['devDependencies', pkg], version);
	};

	// Extra packages and scripts for a monorepo install
	if (opts.monorepo) {
		['@sveltejs/adapter-vercel'].forEach((pkg) => pkg.devDependencies[pkg] = opts.devDependencies.get(pkg));
		// TODO copy over github workflows for deploying to CF
		// TODO auto-detect if we are in a mono from '@pnpm/find-workspace-dir';
		pkgJson['deployConfig'] = { "@skeletonlabs/skeleton": "^1.0.0" }
	}

	// Optional packages
	if (opts.mdsvex) pkgJson.devDependencies['mdsvex'] = opts.devDependencies.get('mdsvex');
	if (opts.typography) pkgJson.devDependencies['@tailwindcss/typography'] = opts.devDependencies.get('@tailwindcss/typography');
	if (opts.forms) pkgJson.devDependencies['@tailwindcss/forms'] = opts.devDependencies.get('@tailwindcss/forms');
	if (opts.codeblocks) setNestedValue(pkgJson, ['dependencies', 'highlight.js'], opts.dependencies.get('highlight.js'));
	if (opts.popups) setNestedValue(pkgJson, ['dependencies', '@floating-ui/dom'], opts.dependencies.get('@floating-ui/dom'));

	// Template specific packages
	if (opts.meta?.dependencies) { pkgJson.dependencies = { ...pkgJson.dependencies, ...opts.meta.dependencies } };
	if (opts.meta?.devDependencies) { pkgJson.devDependencies = { ...pkgJson.devDependencies, ...opts.meta.devDependencies } };
	writeFileSync('./package.json', JSON.stringify(pkgJson, null, 2));
}

async function getLatestPackageVersions(opts) {
	if (opts.packageVersionsAdded) return;
	for await (const name of opts.devDependencies.keys()) {
		const data = await got(`https://registry.npmjs.org/${name}/latest`).json();
		opts.devDependencies.set(name, data.version);
	};
	for await (const name of opts.dependencies.keys()) {
		const data = await got(`https://registry.npmjs.org/${name}/latest`).json();
		opts.dependencies.set(name, data.version);
	};
	opts.packageVersionsAdded = true;
}

function createSvelteConfig(opts) {
	// For some reason create-svelte will turn off preprocessing for jsdoc and no type checking
	// this will break the using of all CSS preprocessing as well, which is undesirable.
	// Here we will just return the typescript default setup
	const mdsvexConfig = `import { mdsvex } from 'mdsvex'
		
/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
}`;
	const inspectorConfig = `
	vitePlugin: {
		inspector: true,   
	},`
	
	let str = `import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
${iti(opts.mdsvex, mdsvexConfig)}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'${iti(opts.mdsvex,`, '.md'`)}],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [${iti(opts.mdsvex,'mdsvex(mdsvexOptions),')} vitePreprocess()],
	${iti(opts.inspector, inspectorConfig)}
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};
export default config;`;
	writeFileSync('svelte.config.js', str);
}

async function createVSCodeSettings() {
	try {
		mkdirp('.vscode');
		const data = await got('https://raw.githubusercontent.com/skeletonlabs/skeleton/master/packages/skeleton/scripts/tw-settings.json').text();
		writeFileSync('.vscode/settings.json', data);
	} catch (error) {
		console.error('Unable to download settings file for VSCode, please read manual instructions at https://skeleton.dev/guides/install');
	}
}

function createTailwindConfig(opts) {
	let plugins = [];
	let pluginImports = [];

	if (opts.forms == true) {
		pluginImports.push(`import forms from '@tailwindcss/forms'`);
		plugins.push(`forms`);
	}
	if (opts.typography == true) {
		pluginImports.push(`import typography from '@tailwindcss/typography'`);
		plugins.push(`typography`);
	}
	pluginImports.push(`import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs'`);
	plugins.push(`...skeleton()`);

	const str = `import { join } from 'path'
${pluginImports.join('\n')}

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {},
	},
	plugins: [${plugins.join(',')}],
}
`;
	writeFileSync('tailwind.config.cjs', str);
}

function createPostCssConfig() {
	const str = `module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
}`;
	writeFileSync('postcss.config.cjs', str);
}

function copyTemplate(opts) {
	if (opts.meta == null) {
		opts.meta = JSON.parse(readFileSync(opts.skeletontemplate, 'utf8'));
	}

	//TODO pathing is fucked up - we need to have early resolution of source and destination paths for both API access as well as when using CLI
	// Use the paths specified in the csaMeta to determine what files/folders to copy over

	opts.meta.foldersToCopy.forEach((folder) => {
		cpSync(resolve(opts.skeletontemplatedir, folder), resolve(opts.path, folder), { force: true, recursive: true });
	});

	// Determine which font is used by the theme, copy it over to the static folder
	// and then update the app.postcss file to include the correct font
	// Themes can by applied to any template, so we can't have the fonts as part of the templates themselves.
	let fontFamily = '';
	let fontFile = '';
	switch (opts.skeletontheme) {
		case 'gold-nouveau':
		case 'modern':
		case 'seasonal':
			fontFamily = 'Quicksand';
			fontFile = 'Quicksand.ttf';
			break;
		case 'rocket':
			fontFamily = 'Space Grotesk';
			fontFile = 'SpaceGrotesk.ttf';
			break;
		case 'seafoam':
			fontFamily = 'Playfair Display';
			fontFile = 'PlayfairDisplay-Italic.ttf';
			break;
		case 'vintage':
			fontFamily = 'Abril Fatface';
			fontFile = 'AbrilFatface.ttf';
			break;
		default:
			fontFamily = '';
			fontFile = '';
	}
	if (fontFamily !== '') {
		appendFileSync('./src/app.postcss',
			`
@font-face {
	font-family: '${fontFamily}';
	src: url('/fonts/${fontFile}');
	font-display: swap;
}`);
		cpSync(resolve(__dirname, '../fonts/', fontFile), './static/fonts/' + fontFile);
	}

	// patch back in their theme choice - it may have been replaced by the theme template, it may still be the correct auto-genned one, depends on the template - we don't care, this fixes it.
	let content = readFileSync(resolve(opts.path,'src/routes/+layout.svelte'), { encoding: 'utf8' });
	//If the template is a premium version we replace ../theme.css with Skeletons packaged theme
	// TODO: this doesn't seem to work
	if (opts.meta?.type === 'premium') {
		if (opts.skeletontheme != 'built-in') {
			content = content.replace("../theme.css", `@skeletonlabs/skeleton/themes/theme-${opts.skeletontheme}.css`);
		}
	} else {
		const themeReg = /theme-.*\.css';$/gim;
		content = content.replace(themeReg, `theme-${opts.skeletontheme}.css';`);
	}
	// Set the script ype depending on their choice of typescript or checkjs
	content = (opts.types === 'typescript' ? `<script lang="ts">` : '<script>') + content.substring(content.indexOf('\n'));

	// Add in the basic boilerplate for codeblocks and popups if they were selected and do a basic check for the import name to avoid duplicates
	const scriptEndReg = /<\/script>/g;

	if (opts.codeblocks && content.indexOf('highlight.js') === -1) {
		content = content.replace(
			scriptEndReg,
			`
	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);
</script>`,
		);
	}

	if (opts?.popups && content.indexOf('@floating-ui/dom') === -1) {
		content = content.replace(
			scriptEndReg,
			`
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>`,
		);
	}

	writeFileSync('./src/routes/+layout.svelte', content);

	// Update the data-theme attribute in the app.html file
	content = readFileSync(resolve(opts.path,'src/app.html'), { encoding: 'utf8' });
	const dataThemeRegex = /data-theme=".*"/gim;
	writeFileSync(resolve(opts.path,'src/app.html'), content.replace(dataThemeRegex, `data-theme="${opts.skeletontheme}"`));
}

function createTestConfig() {
	const str = `import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'pnpm build && pnpm preview',
		port: 4173
	},
	testDir: '../../../tests/',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
`;
	writeFileSync('playwright.config.ts', str);
}
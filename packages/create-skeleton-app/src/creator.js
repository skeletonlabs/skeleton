import { create } from 'create-svelte';
import { readFileSync, writeFileSync, cpSync, appendFileSync, existsSync } from 'fs';
import got from 'got';
import { join, resolve } from 'path';
import { cwd, chdir } from 'process';
import { mkdirp, setNestedValue, checkIfDirSafeToInstall, iit } from './utils.js';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const presetThemes = ['skeleton', 'modern', 'hamlindigo', 'rocket', 'sahara', 'gold-nouveau', 'vintage', 'seafoam', 'crimson'];
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
		this.skeletontheme = ['skeleton'];
		this.skeletontemplate = 'skeleton-template-bare';
		this.skeletontemplatedir = '../templates';
		this.packagemanager = 'npm';
		this.devDependencies = new Map([
			['postcss', 'latest'],
			['autoprefixer', 'latest'],
			['tailwindcss', 'latest'],
			['@skeletonlabs/skeleton', 'latest'],
		]);

		// props below are private to the Skeleton team
		this.monorepo = false; // Adds additional config for installing into a pnpm monorepo
		this.library = false; // allows forcing of a library install (could be forced by directly setting template to skeletonlib)
		this.test = false; // adjusts tests to a common parent directory for monorepo testing, API only, set by testing scripts
		this.meta = undefined; // holds the csa-meta.json data
	}
	set metaObject(value) {
		this.meta = value;
		if (this.meta.requiredFeatures) {
			this.meta.requiredFeatures.forEach((val) => {
				Object.assign(this, val);
			});
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
			throw err;
		}
	}

	// mri may only receive a single template and pass it to us as a string
	if (typeof opts.skeletontheme === 'string') {
		opts.skeletontheme = [opts.skeletontheme];
	}

	await modifyPackageJson(opts);
	// write out config files
	createSvelteConfig(opts);
	createViteConfig(opts);
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
	const pkgPath = join(cwd(), 'package.json');
	let pkgJson = JSON.parse(readFileSync(pkgPath));

	// add required packages
	for (const pkg of [
		'postcss',
		'autoprefixer',
		'tailwindcss',
		'@skeletonlabs/skeleton',
		'@skeletonlabs/tw-plugin',
		'vite-plugin-tailwind-purgecss',
	]) {
		setNestedValue(pkgJson, ['devDependencies', pkg], 'latest');
	}

	// Extra packages and scripts for a monorepo install
	if (opts.monorepo) {
		['@sveltejs/adapter-vercel'].forEach((pkg) => (pkg.devDependencies[pkg] = opts.devDependencies.get(pkg)));
		// TODO copy over github workflows for deploying to CF
		// TODO auto-detect if we are in a mono from '@pnpm/find-workspace-dir';
		pkgJson['deployConfig'] = { '@skeletonlabs/skeleton': '^1.0.0' };
	}

	// Optional packages
	if (opts.mdsvex) pkgJson.devDependencies['mdsvex'] = 'latest';
	if (opts.typography) pkgJson.devDependencies['@tailwindcss/typography'] = 'latest';
	if (opts.forms) pkgJson.devDependencies['@tailwindcss/forms'] = 'latest';
	if (opts.types == 'typescript') pkgJson.devDependencies['@types/node'] = 'latest';
	if (opts.codeblocks) setNestedValue(pkgJson, ['dependencies', 'highlight.js'], 'latest');
	if (opts.popups) setNestedValue(pkgJson, ['dependencies', '@floating-ui/dom'], 'latest');

	// Template specific packages
	if (opts.meta?.dependencies) {
		pkgJson.dependencies = { ...pkgJson.dependencies, ...opts.meta.dependencies };
	}
	if (opts.meta?.devDependencies) {
		pkgJson.devDependencies = { ...pkgJson.devDependencies, ...opts.meta.devDependencies };
	}

	await getLatestPackageVersions(pkgJson);
	writeFileSync(pkgPath, JSON.stringify(pkgJson, null, 2));
}

async function getLatestPackageVersions(pkgJson) {
	const devDeps = Object.keys(pkgJson.devDependencies);
	for await (const pkg of devDeps) {
		if (pkgJson.devDependencies[pkg] == 'latest') {
			const data = await got(`https://registry.npmjs.org/${pkg}/latest`).json();
			pkgJson.devDependencies[pkg] = data.version;
		}
	}
	const deps = pkgJson.dependencies == undefined ? [] : Object.keys(pkgJson.dependencies);
	for await (const pkg of deps) {
		if (pkgJson.dependencies[pkg] == 'latest') {
			const data = await got(`https://registry.npmjs.org/${pkg}/latest`).json();
			pkgJson.dependencies[pkg] = data.version;
		}
	}
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
	},`;

	let str = `import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
${iit(opts.mdsvex, mdsvexConfig)}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'${iit(opts.mdsvex, `, '.md'`)}],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [${iit(opts.mdsvex, 'mdsvex(mdsvexOptions),')} vitePreprocess()],
	${iit(opts.inspector, inspectorConfig)}
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};
export default config;`;
	writeFileSync(join(cwd(), 'svelte.config.js'), str);
}

function createViteConfig(opts) {
	const filename = join(cwd(), opts.types == 'typescript' ? 'vite.config.ts' : 'vite.config.js');
	let contents = `import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), purgeCss()]
});
`;
	writeFileSync(filename, contents);
}

async function createVSCodeSettings() {
	try {
		mkdirp(join(cwd(), '.vscode'));
		const data = await got(
			'https://raw.githubusercontent.com/skeletonlabs/skeleton/master/packages/skeleton/scripts/tw-settings.json',
		).text();
		writeFileSync(join(cwd(), '.vscode', 'settings.json'), data);
	} catch (error) {
		console.error(
			'Unable to download settings file for VSCode, please read manual instructions at https://skeleton.dev/guides/install',
		);
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
	pluginImports.push(`import { skeleton } from '@skeletonlabs/tw-plugin'`);
	// Can't use JSON.stringify because we node code literals in there without everything being coerced to quoted strings
	// space on the end is important
	let presetConfig = '{ themes: { preset: [ ';
	let customConfig = '';
	for (const theme of opts.skeletontheme) {
		if (typeof theme === 'string') {
			presetConfig += `{ name: "${theme}", enhancements: true },`;
		} else {
			pluginImports.push(`import { ${theme.custom} } from './src/${theme.custom}.js'`);
			customConfig = `, custom:[${theme.custom}]`;
			createCustomTheme(opts, theme.custom);
		}
	}
	const finalConfig = presetConfig.slice(0, -1) + ']' + customConfig + '}}';
	plugins.push(`skeleton(${finalConfig})`);

	const str = `import { join } from 'path'
${iit(opts.types == 'typescript', `import type { Config } from 'tailwindcss'`)}
${pluginImports.join('\n')}

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {},
	},
	plugins: [${plugins.join(',')}],
}${iit(opts.types == 'typescript', ' satisfies Config')};
`;
	writeFileSync(join(cwd(), `tailwind.config.${iit(opts.types == 'typescript', 'ts', 'js')}`), str);
}

function createCustomTheme(opts, name) {
	const str = `// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
${iit(opts.types == 'typescript', `import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';`)}
export const ${name}${iit(opts.types == 'typescript', ': CustomThemeConfig')} = {
	name: '${name}',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": "system-ui",
		"--theme-font-family-heading": "system-ui",
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #0FBA81 
		"--color-primary-50": "219 245 236", // #dbf5ec
		"--color-primary-100": "207 241 230", // #cff1e6
		"--color-primary-200": "195 238 224", // #c3eee0
		"--color-primary-300": "159 227 205", // #9fe3cd
		"--color-primary-400": "87 207 167", // #57cfa7
		"--color-primary-500": "15 186 129", // #0FBA81
		"--color-primary-600": "14 167 116", // #0ea774
		"--color-primary-700": "11 140 97", // #0b8c61
		"--color-primary-800": "9 112 77", // #09704d
		"--color-primary-900": "7 91 63", // #075b3f
		// secondary | #4F46E5 
		"--color-secondary-50": "229 227 251", // #e5e3fb
		"--color-secondary-100": "220 218 250", // #dcdafa
		"--color-secondary-200": "211 209 249", // #d3d1f9
		"--color-secondary-300": "185 181 245", // #b9b5f5
		"--color-secondary-400": "132 126 237", // #847eed
		"--color-secondary-500": "79 70 229", // #4F46E5
		"--color-secondary-600": "71 63 206", // #473fce
		"--color-secondary-700": "59 53 172", // #3b35ac
		"--color-secondary-800": "47 42 137", // #2f2a89
		"--color-secondary-900": "39 34 112", // #272270
		// tertiary | #0EA5E9 
		"--color-tertiary-50": "219 242 252", // #dbf2fc
		"--color-tertiary-100": "207 237 251", // #cfedfb
		"--color-tertiary-200": "195 233 250", // #c3e9fa
		"--color-tertiary-300": "159 219 246", // #9fdbf6
		"--color-tertiary-400": "86 192 240", // #56c0f0
		"--color-tertiary-500": "14 165 233", // #0EA5E9
		"--color-tertiary-600": "13 149 210", // #0d95d2
		"--color-tertiary-700": "11 124 175", // #0b7caf
		"--color-tertiary-800": "8 99 140", // #08638c
		"--color-tertiary-900": "7 81 114", // #075172
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #D41976 
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #495a8f 
		"--color-surface-50": "228 230 238", // #e4e6ee
		"--color-surface-100": "219 222 233", // #dbdee9
		"--color-surface-200": "210 214 227", // #d2d6e3
		"--color-surface-300": "182 189 210", // #b6bdd2
		"--color-surface-400": "128 140 177", // #808cb1
		"--color-surface-500": "73 90 143", // #495a8f
		"--color-surface-600": "66 81 129", // #425181
		"--color-surface-700": "55 68 107", // #37446b
		"--color-surface-800": "44 54 86", // #2c3656
		"--color-surface-900": "36 44 70", // #242c46
	}
}`;
	let filename = name + iit(opts.types == 'typescript', '.ts', '.js');
	writeFileSync(join('src', filename), str);
}
function createPostCssConfig() {
	const str = `module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
}`;
	writeFileSync(join(cwd(), 'postcss.config.cjs'), str);
}

function copyTemplate(opts) {
	if (opts.meta == null) {
		opts.meta = JSON.parse(readFileSync(opts.skeletontemplate, 'utf8'));
	}

	opts.meta.foldersToCopy.forEach((folder) => {
		cpSync(resolve(opts.skeletontemplatedir, folder), resolve(opts.path, folder), { force: true, recursive: true });
	});

	// Determine which font is used by the theme, copy it over to the static folder
	// and then update the app.postcss file to include the correct font
	// Themes can by applied to any template, so we can't have the fonts as part of the templates themselves.
	let fontFamily = '';
	let fontFile = '';
	let addedFontConfig = '';
	for (const theme of opts.skeletontheme) {
		switch (theme) {
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
			addedFontConfig += `
/* ${theme} theme */
@font-face {
	font-family: '${fontFamily}';
	src: url('/fonts/${fontFile}');
	font-display: swap;
}`;
			cpSync(resolve(__dirname, '../fonts/', fontFile), join(cwd(), 'static', 'fonts', fontFile));
		}
	}
	appendFileSync(join(cwd(), 'src', 'app.postcss'), addedFontConfig);

	const layoutFile = resolve(cwd(), 'src/routes/+layout.svelte');
	// patch back in their theme choice - it may have been replaced by the theme template, it may still be the correct auto-genned one, depends on the template - we don't care, this fixes it.
	let content = readFileSync(layoutFile, { encoding: 'utf8' });
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

	writeFileSync(layoutFile, content);

	// Update the data-theme attribute in the app.html file
	content = readFileSync(resolve(opts.path, 'src/app.html'), { encoding: 'utf8' });
	const dataThemeRegex = /data-theme=".*"/gim;
	let activeTheme = 'skeleton';
	if (typeof opts.skeletontheme[0] === 'string') {
		activeTheme = opts.skeletontheme[0];
	} else {
		activeTheme = opts.skeletontheme[0].custom;
	}
	writeFileSync(resolve(opts.path, 'src/app.html'), content.replace(dataThemeRegex, `data-theme="${activeTheme}"`));
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

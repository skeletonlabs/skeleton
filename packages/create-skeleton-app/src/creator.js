import { create } from 'create-svelte';
import fs from 'fs-extra';
import got from 'got';
import path from 'path';
import process from 'process';
import { dist, mkdirp, setNestedValue } from './utils.js';
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// NOTE: Any changes here must also be reflected in the --help output in utils.js and shortcut expansions in index.js.
// Probably a good idea to do a search on the values you are changing to catch any other areas they are used in

export class SkeletonOptions {
	// svelte-create expects these options, do not change the names or values.
	constructor() {
		this.name = 'skeleton-app';
		this.template = 'skeleton';
		this.types = 'typescript';
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
		this.skeletontemplate = 'bare';
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
		this.verbose = false;
		this.monorepo = false;
		this.library = false;
	}
}

export async function createSkeleton(opts) {
	const startPath = process.cwd();

	// Hidden option to change the install type to be a Svelte-Kit library project
	if (opts.library) {
		opts.template = 'skeletonlib';
	}

	// create-svelte will build the base install for us
	await create(opts.path, opts);
	process.chdir(opts.path);

	await modifyPackageJson(opts);
	// write out config files
	createSvelteConfig(opts);
	await createVSCodeSettings();
	createTailwindConfig(opts);
	createPostCssConfig();
	copyTemplate(opts);

	// Monorepo additions
	if (opts.monorepo) {
		fs.copySync(path.resolve(__dirname, '../README-MONO.md'), path.resolve(process.cwd(), 'README.md'), { overwrite: true });
		// mkdirp('scripts');
		// TODO: remove swapdeps script and use package instead
		// fs.copySync(path.resolve(__dirname, './swapdeps.mjs'), path.resolve(process.cwd(), '/scripts/swapdeps.mjs'), { overwrite: true });
	}
	// creating the missing lib folder...
	// mkdirp(path.join('src', 'lib'));
	// go back to starting location in case we get called again to create another template
	process.chdir(startPath);
	return opts;
}

async function modifyPackageJson(opts) {
	await getLatestPackageVersions(opts);
	let pkgJson = JSON.parse(fs.readFileSync('./package.json'));
	// the order matters due to dependency resolution, because yarn
	for (const pkg of ['postcss', 'autoprefixer', 'tailwindcss', '@skeletonlabs/skeleton']) {
		pkgJson.devDependencies[pkg] = opts.devDependencies.get(pkg);
	};

	// Extra packages and scripts for a monorepo install
	if (opts.monorepo) {
		['@sveltejs/adapter-vercel'].forEach((pkg) => pkg.devDependencies[pkg] = opts.devDependencies.get(pkg));
		// TODO copy over github workflows for deploying to Vercel
		// TODO auto-detect if we are in a mono from '@pnpm/find-workspace-dir';
		pkgJson['deployConfig'] = { "@skeletonlabs/skeleton": "^1.0.0" }
	}

	// Optional packages
	if (opts.mdsvex) pkgJson.devDependencies['mdsvex'] = opts.devDependencies.get('mdsvex');
	if (opts.typography) pkgJson.devDependencies['@tailwindcss/typography'] = opts.devDependencies.get('@tailwindcss/typography');
	if (opts.forms) pkgJson.devDependencies['@tailwindcss/forms'] = opts.devDependencies.get('@tailwindcss/forms');
	if (opts.codeblocks) setNestedValue(pkgJson, ['dependencies',"highlight.js"], opts.dependencies.get('highlight.js'));
	if (opts.popups) setNestedValue(pkgJson, ['dependencies','@floating-ui/dom'], opts.dependencies.get('@floating-ui/dom'));

	// Template specific packages
	console.log("Attempting to read:", opts.skeletontemplatedir)
	const csaMeta = JSON.parse(fs.readFileSync(opts.skeletontemplate, 'utf8'));
	if (csaMeta.dependencies) {pkgJson.dependencies = {...pkgJson.dependencies, ...csaMeta.dependencies}};
	if (csaMeta.devDependencies) {pkgJson.devDependencies = {...pkgJson.devDependencies, ...csaMeta.devDependencies}};
	if (csaMeta.peerDependencies) {pkgJson.peerDependencies = {...pkgJson.peerDependencies, ...csaMeta.peerDependencies}};
	fs.writeFileSync('./package.json', JSON.stringify(pkgJson, null, 2));
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
	let str = '';
	if (opts.monorepo) {
		str += `import adapter from '@sveltejs/adapter-vercel';\nimport path from 'path';\n`;
	} else {
		str += `import adapter from '@sveltejs/adapter-auto';\n`;
	}
	str += `import { vitePreprocess } from '@sveltejs/kit/vite';\n`

	if (opts.mdsvex){
		str += `import { mdsvex } from 'mdsvex'
		
/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
}`;
	}

	str += `

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'${opts.mdsvex && `, '.md'`}],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [${opts.mdsvex && 'mdsvex(mdsvexOptions),'} vitePreprocess()],
	${opts.inspector && `
	vitePlugin: {
		inspector: true,   
	},`}
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};
export default config;`;
	fs.writeFileSync('svelte.config.js', str);
}

async function createVSCodeSettings() {
	try {
		mkdirp('.vscode');
		const data = await got(
			'https://raw.githubusercontent.com/skeletonlabs/skeleton/master/packages/skeleton/scripts/tw-settings.json',
		).text();
		fs.writeFileSync('.vscode/settings.json', data);
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
	pluginImports.push(`import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs'`);
	plugins.push(`...skeleton()`);

	const str = `import { join } from 'path'
${pluginImports.join('\n')}

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'))],
	theme: {
		extend: {},
	},
	plugins: [${plugins.join(',')}],
}
`;
	fs.writeFileSync('tailwind.config.cjs', str);
}

function createPostCssConfig() {
	const str = `module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
}`;
	fs.writeFileSync('postcss.config.cjs', str);
}

function copyTemplate(opts) {
	const src = opts.skeletontemplate.substring(0, opts.skeletontemplate.lastIndexOf("/"));
	fs.copySync(src + '/src', './src', { overwrite: true });
	fs.copySync(src + '/static', './static', { overwrite: true });

	// Determine which font is used by the theme, copy it over to the static folder
	// and then update the app.postcss file to include the correct font
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
		fs.appendFileSync(
			'./src/app.postcss',
			`
@font-face {
	font-family: '${fontFamily}';
	src: url('/fonts/${fontFile}');
	font-display: swap;
}`,
		);
		fs.copySync(path.resolve(__dirname, '../fonts/', fontFile), './static/fonts/' + fontFile);
	}

	// patch back in their theme choice - it may have been replaced by the theme template, it may still be the correct auto-genned one, depends on the template - we don't care, this fixes it.
	let content = fs.readFileSync('./src/routes/+layout.svelte', {
		encoding: 'utf8',
		flag: 'r',
	});
	const themeReg = /theme-.*\.css';$/gim;
	content = content.replace(themeReg, `theme-${opts.skeletontheme}.css';`);
	content = (opts.types === 'typescript' ? "<script lang='ts'>" : '<script>') + content.substring(content.indexOf('\n'));

	// Add in the basic boilerplate for codeblocks and popups if they were selected and do a basic check for the import name to avoid duplicates
	const scriptEndReg = /<\/script>/g;

	if (opts?.codeblocks && opts.skeletontemplate != 'bare' && content.indexOf('highlight.js') === -1) {
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

	if (opts?.popups && opts.skeletontemplate != 'bare' && content.indexOf('@floating-ui/dom') === -1) {
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

	fs.writeFileSync('./src/routes/+layout.svelte', content);

	if (opts.skeletontemplate != 'bare') {
		// update the <body> to have the data-theme
		content = fs.readFileSync('./src/app.html', {
			encoding: 'utf8',
			flag: 'r',
		});

		fs.writeFileSync(
			'./src/app.html',
			content.replace('<body>', `<body data-sveltekit-preload-data="hover" data-theme="${opts.skeletontheme}">`),
		);
	}
}

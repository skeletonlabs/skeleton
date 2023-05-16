// Types
import { create } from 'create-svelte';
import fs from 'fs-extra';
import got from 'got';
import { bold, cyan, red } from 'kleur/colors';
import { spawnSync } from 'node:child_process';
import path from 'path';
import process from 'process';
import { dist, mkdirp, removeFilesExceptSync, whichPMRuns } from './utils.js';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// NOTE: Any changes here must also be reflected in the --help output in utils.js and shortcut expansions in index.js.
// Probably a good idea to do a search on the values you are changing to catch any other areas they are used in

export class SkeletonOptions {
	// svelte-create expects these options, do not change the names or values.
	constructor() {
		this.name = 'new-skel-app';
		this.template = 'skeleton';
		this.types = 'typescript';
		this.prettier = true;
		this.eslint = true;
		this.playwright = false;
		this.vitest = false;

		// create-skeleton-app additions
		this._ = []; //catch all for extraneous params from mri, used to capture project name.
		this.help = false;
		this.quiet = false;
		this.path = '.';
		this.forms = false;
		this.typography = false;
		this.lineclamp = false;
		this.skeletontheme = 'skeleton';
		this.skeletontemplate = 'bare';
		this.packagemanager = 'npm';
		this.packages = [];
		this.codeblocks = false;
		this.popups = true;

		// props below are private to the Skeleton team
		this.verbose = false;
		this.monorepo = false;
		this.packages = [];
		this.skeletontemplatedir = '../templates';
		this.workspace = '';
	}
}

export async function createSkeleton(opts) {
	//create-svelte will happily overwrite an existing directory, foot guns are bad mkay
	opts.path = path.resolve(
		opts?.path,
		opts.name.replace(/\s+/g, '-').toLowerCase(),
	);

	if (fs.existsSync(opts.path) && fs.readdirSync(opts.path).length != 0) {
		console.error(red(bold('Install directory already exists!')));
		process.exit();
	}

	fs.mkdirp(opts.path);

	//create-svelte will build the base install for us
	await create(opts.path, opts);
	process.chdir(opts.path);

	// install packages
	opts.packagemanager = whichPMRuns()?.name || 'npm';

	// the order matters due to dependency resolution, because yarn
	let packages = [
		'postcss',
		'autoprefixer',
		'tailwindcss',
		
	];
	if (!opts.monorepo) packages.push('@skeletonlabs/skeleton')
	if (opts?.monorepo) packages.push('@sveltejs/adapter-vercel')

	// Tailwind Packages
	if (opts?.typography) packages.push('@tailwindcss/typography');
	if (opts?.forms) packages.push('@tailwindcss/forms');

	// Component dependencies
	if (opts?.codeblocks) packages.push('highlight.js');
	if (opts?.popups) packages.push('@floating-ui/dom');

	let result = spawnSync(opts.packagemanager, ['add', '-D', ...packages], {
		shell: true,
	});

	if (opts?.monorepo) spawnSync('pnpm', ['-F', opts?.name, `exec`, `pnpm`, `i`, `-D`, `@skeletonlabs/skeleton@latest`, `--workspace`])
	
	// Capture any errors from stderr and display for the user to report it to us
	if (result?.stderr.toString().length) {
		console.log(red(bold(
			'The following was reported to stderr - please read carefully to determine whether it actually affects your install:\n')),
			result?.stderr.toString()
		);
	}

	// Just to help with any user error reports
	if (opts.verbose) {
		const stdout = result?.stdout.toString();
		if (stdout.length) console.log(bold(cyan('stdout:')), stdout);
		const stderr = result?.stderr.toString();
		if (stderr.length) console.log(bold(red('stderr:')), stderr);
	}

	// write out config files
	out("svelte.config.js", createSvelteConfig(opts));
	out('.vscode/settings.json', await createVSCodeSettings());
	out('tailwind.config.cjs', createTailwindConfig(opts));
	out('postcss.config.cjs', createPostCssConfig());

	// Monorepo additions
	if (opts?.monorepo) {
		fs.copySync(__dirname + '../README-MONO.md', process.cwd() + '/README.md', { overwrite: true });
		let pkg = JSON.parse(fs.readFileSync('package.json'));
		pkg.scripts['dep'] = 'vercel build && vercel deploy --prebuilt';
		pkg.scripts['prod'] = 'vercel build --prod && vercel deploy --prebuilt --prod';
		fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
	}
	// copy over selected template
	copyTemplate(opts);
	// creating the missing lib folder...
	mkdirp(path.join('src', 'lib'))
	return opts;
}

async function createVSCodeSettings() {
	try {
		mkdirp('.vscode')
		const data = await got('https://raw.githubusercontent.com/skeletonlabs/skeleton/master/scripts/tw-settings.json').text()
		return data
	} catch (error) {
		console.error('Unable to download settings file for VSCode, please read manual instructions at https://skeleton.dev/guides/install')
	}
}

function createSvelteConfig(opts) {
	// For some reason create-svelte will turn off preprocessing for jsdoc and no type checking
	// this will break the using of all CSS preprocessing as well, which is undesirable.
	// Here we will just return the typescript default setup
	let str = ""; 
	if (opts?.monorepo) {
		str += `import adapter from '@sveltejs/adapter-vercel';\n`
	} else {
		str += `import adapter from '@sveltejs/adapter-auto';\n`
	}
	str +=`import { vitePreprocess } from '@sveltejs/kit/vite';`
	if (opts?.monorepo) { str += `\nimport path from 'path';` }
	str += `
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};
export default config;`
	return str;
};

function createTailwindConfig(opts) {
	let plugins = [];
	if (opts.forms == true) plugins.push(`require('@tailwindcss/forms')`);
	if (opts.typography == true)
		plugins.push(`require('@tailwindcss/typography')`);
	plugins.push(`...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()`);

	const str = `/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {},
	},
	plugins: [${plugins.join(',')}],
}
`;
	return str;
}

function createPostCssConfig() {
	const str = `module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
}`;
	return str;
}

function copyTemplate(opts) {
	const src = path.resolve(
		dist(opts.skeletontemplatedir),
		opts.skeletontemplate,
	);

	fs.copySync(src + '/src', './src', { overwrite: true });
	fs.copySync(src + '/static', './static', { overwrite: true });

	// All fonts are in the template static folder, so we need to remove the ones that are not relevant to the theme
	// and then update the app.postcss file to include the correct font
	let fontFamily = '';
	let fontFile = '';
	switch (opts.skeletontheme) {
		case 'gold-nouveau':
		case 'modern':
		case 'seasonal':
			fontFamily = 'Quicksand';
			fontFile = ['Quicksand.ttf'];
			break;
		case 'rocket':
			fontFamily = 'Space Grotesk';
			fontFile = ['SpaceGrotesk.ttf'];
			break;
		case 'seafoam':
			fontFamily = 'Playfair Display';
			fontFile = ['PlayfairDisplay-Italic.ttf'];
			break;
		case 'vintage':
			fontFamily = 'Abril Fatface';
			fontFile = ['AbrilFatface.ttf'];
			break;
		default:
			fontFamily = '';
			fontFile = '';
	}
	if (fontFamily !== '') {
		fs.appendFileSync('./src/app.postcss', `
@font-face {
	font-family: '${fontFamily}';
	src: url('/fonts/${fontFile}');
	font-display: swap;
}`);
		removeFilesExceptSync('./static/fonts/', fontFile);
	} else {
		fs.removeSync('./static/fonts');
	}


	// patch back in their theme choice - it may have been replaced by the theme template, it may still be the correct auto-genned one, depends on the template - we don't care, this fixes it.
	let content = fs.readFileSync('./src/routes/+layout.svelte', {
		encoding: 'utf8',
		flag: 'r',
	});
	const themeReg = /theme-.*\.css';$/gim;
	content = content.replace(themeReg, `theme-${opts.skeletontheme}.css';`);
	content = (opts.types === "typescript" ? "<script lang='ts'>" : "<script>") + content.substring(content.indexOf('\n'));

	const scriptEndReg = /<\/script>/g;
	if (opts?.highlightjs) {
		content = content.replace(scriptEndReg, `
	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);
</script>`);
	}

	if (opts?.highlightjs) {
		content = content.replace(scriptEndReg, `
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>`);
	}

	fs.writeFileSync('./src/routes/+layout.svelte', content);

	// update the <body> to have the data-theme
	content = fs.readFileSync('./src/app.html', { encoding: 'utf8', flag: 'r' });
	fs.writeFileSync(
		'./src/app.html',
		content.replace('<body>', `<body data-sveltekit-preload-data="hover" data-theme="${opts.skeletontheme}">`),
	);
}

function out(filename, data) {
	if (data == undefined) return
	fs.writeFileSync(filename, data);
}
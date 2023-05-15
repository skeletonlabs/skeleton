const postcss = require('postcss');
const postcssJs = require('postcss-js');
const fs = require('fs');
const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');

// Transpiles all of our library's CSS to JS
async function transpileCssToJs() {
	const cssEntryPath = './src/lib/styles/skeleton.css';
	// Custom tailwind config so that we only use the necessities
	const twConfig = {
		darkMode: 'class',
		content: ['./src/**/*.{html,js,svelte,ts}'],
		plugins: [require('@tailwindcss/typography'), require('../src/lib/tailwind/core.cjs')]
	};

	const css = fs.readFileSync(cssEntryPath, 'utf8');
	const result = await postcss().use(postcssImport()).use(tailwindcss(twConfig)).process(css, { from: cssEntryPath });
	const cssInJs = postcssJs.objectify(result.root);

	return structuredClone(cssInJs); // return as a POJO
}

// Generates all of the TW classes so that we can use this to remove duplicates in our plugin.
// Takes ~8 seconds to run.
async function generateAllTWClasses() {
	console.log("First time running, generating all tailwind classes... this may take a while... (it's only once though!)");
	const cssEntryPath = './src/lib/styles/partials/tailwind.css';

	// Special tailwind config so that all TW classes are included
	const twConfig = {
		content: [{ raw: '' }],
		safelist: [
			{
				pattern: /.*/
			}
		]
	};

	const css = fs.readFileSync(cssEntryPath, 'utf8');
	const result = await postcss().use(tailwindcss(twConfig)).process(css, { from: cssEntryPath });
	const cssInJs = postcssJs.objectify(result.root);

	// Caches the TW classes so we don't have to generate them again after the initial run
	fs.writeFileSync('./.temp/twClasses.cjs', `module.exports = ${JSON.stringify(cssInJs)}`);

	return structuredClone(cssInJs); // return as a POJO
}

module.exports = { transpileCssToJs, generateAllTWClasses };

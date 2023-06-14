const postcss = require('postcss');
const postcssJs = require('postcss-js');
const fs = require('fs');
const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');

// Transpiles all of our library's CSS to JS
async function transpileCssToJs(cssEntryPath, plugins = []) {
	const selectors = [];

	// We'll first get all the custom the class names,
	// then we can feed that into the TW preprocessor as the `content`
	// so that TW can detect and generate them properly

	const css = fs.readFileSync(cssEntryPath, 'utf8');
	const processor = postcss([postcssImport()]);
	const result = await processor.process(css, { from: cssEntryPath });

	result.root.walk((node) => {
		if (node.type === 'rule') {
			selectors.push(...node.selectors);
		}
	});

	// Custom tailwind config so that we only use the necessities
	const twConfig = {
		darkMode: 'class',
		content: [{ raw: selectors.join(' ') }],
		plugins: [
			require('../src/lib/tailwind/core.cjs'),
			// add skeleton component classes for the base styles
			...plugins
		]
	};

	const result2 = await postcss([postcssImport(), tailwindcss(twConfig)]).process(css, { from: cssEntryPath });
	if (result2.root.type === 'document') throw Error('This should never happen');

	const cssInJs = postcssJs.objectify(result2.root);

	return cssInJs;
}

// Generates all TW base styles so that we can use this to
// the remove duplicates in our plugin.
// Takes ~600ms second to run.
async function generateBaseTWStyles() {
	const twConfig = {
		content: [{ raw: 'w-1' }]
	};

	const result = await postcss(tailwindcss(twConfig)).process('@tailwind base', { from: undefined });
	if (result.root.type === 'document') throw Error('This should never happen');

	const cssInJs = postcssJs.objectify(result.root);

	return cssInJs;
}

module.exports = { transpileCssToJs, generateBaseTWStyles };

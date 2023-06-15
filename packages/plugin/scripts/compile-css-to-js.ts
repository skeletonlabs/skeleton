import postcss, { type PluginCreator } from 'postcss';
import postcssJs from 'postcss-js';
import { readFileSync } from 'fs';
import postcssImport from 'postcss-import';
import tw from 'tailwindcss';
import type { Config } from 'tailwindcss';
import { corePlugin } from '../src/tailwind/core.js';

// tailwind needs to fix their exports :]
const tailwindcss = tw as unknown as PluginCreator<string | Config | { config: string | Config }>;

// Transpiles all of our library's CSS to JS
export async function transpileCssToJs(cssEntryPath: string, plugins: Config['plugins'] = []) {
	const selectors: string[] = [];

	// We'll first get all the custom class names,
	// then we can feed that into the TW preprocessor as the `content`
	// so that TW can detect and generate them properly

	const css = readFileSync(cssEntryPath, 'utf8');
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
			corePlugin,
			// add skeleton component classes for the base styles
			...plugins
		]
	} satisfies Config;

	const result2 = await postcss([postcssImport(), tailwindcss(twConfig)]).process(css, { from: cssEntryPath });
	if (result2.root.type === 'document') throw Error('This should never happen');

	const cssInJs = postcssJs.objectify(result2.root);

	return cssInJs;
}

// Generates all TW base styles so that we can use this to
// the remove duplicates in our plugin.
// Takes ~600ms second to run.
export async function generateBaseTWStyles() {
	const twConfig = {
		content: [{ raw: 'w-1' }]
	} satisfies Config;

	const result = await postcss(tailwindcss(twConfig)).process('@tailwind base', { from: undefined });
	if (result.root.type === 'document') throw Error('This should never happen');

	const cssInJs = postcssJs.objectify(result.root);

	return cssInJs;
}

import postcss, { type PluginCreator } from 'postcss';
import postcssJs from 'postcss-js';
import fs from 'fs';
import postcssImport from 'postcss-import';
import tw from 'tailwindcss';
import type { Config } from 'tailwindcss';
import corePlugin from '../src/tailwind/core.js';

// tailwind needs to fix their exports :]
const tailwindcss = tw as unknown as PluginCreator<string | Config | { config: string | Config }>;

// Transpiles all of our library's CSS to JS
export async function transpileCssToJs(cssEntryPath: string) {
	const selectors: string[] = [];

	// let's get all custom the class names first,
	// then we can feed that into the tailwind preprocessor as the content

	const css = fs.readFileSync(cssEntryPath, 'utf8');
	const processor = postcss([postcssImport()]);
	const result = await processor.process(css, { from: cssEntryPath });

	// if (result.root.type === 'document') throw Error('This should never happen');

	result.root.walk((node, i) => {
		if (node.type === 'rule') {
			selectors.push(...node.selectors);

			// console.log({ name: node.selectors, type: node.type, i });
		}
	});

	// Custom tailwind config so that we only use the necessities
	const twConfig = {
		darkMode: 'class',
		content: [{ raw: selectors.join(' ') }],
		plugins: [corePlugin]
	} satisfies Config;

	const result2 = await postcss([postcssImport(), tailwindcss(twConfig)]).process(css, { from: cssEntryPath });
	if (result2.root.type === 'document') throw Error('This should never happen');

	const cssInJs = postcssJs.objectify(result2.root);
	console.dir({ selectors }, { depth: Infinity, maxArrayLength: Infinity, compact: false, maxStringLength: Infinity });
	// console.dir(result.css, { depth: Infinity, maxArrayLength: Infinity, compact: false, maxStringLength: Infinity });

	return structuredClone(cssInJs); // return as a POJO
}

// Generates all of the TW classes so that we can use this to remove duplicates in our plugin.
// Takes ~8 seconds to run.
export async function generateAllTWClasses() {
	console.log("First time running, generating all tailwind classes... this may take a while... (it's only once though!)");
	const cssEntryPath = './src/styles/partials/tailwind.css';

	// Special tailwind config so that all TW classes are included
	const twConfig = {
		content: [{ raw: '' }],
		safelist: [
			{
				pattern: /.*/
			}
		]
	} satisfies Config;

	const css = fs.readFileSync(cssEntryPath, 'utf8');
	const result = await postcss(tailwindcss(twConfig)).process(css, { from: cssEntryPath });

	if (result.root.type === 'document') throw Error('This should never happen');

	const cssInJs = postcssJs.objectify(result.root);

	// Caches the TW classes so we don't have to generate them again after the initial run
	fs.writeFileSync('./.temp/twClasses.js', `export default ${JSON.stringify(cssInJs)}`);

	return structuredClone(cssInJs); // returnas a POJO
}

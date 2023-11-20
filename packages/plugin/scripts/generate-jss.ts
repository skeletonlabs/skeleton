import type { CssInJs } from 'postcss-js';
import { transpileCssToJs } from './compile-css-to-js.js';
import { mkdir, writeFile } from 'fs/promises';
import plugin from 'tailwindcss/plugin.js';

const INTELLISENSE_FILE_NAME = 'generated-classes.js';
const GENERATED_DIR_PATH = `./src/tailwind/generated`;

async function exec() {
	// Makes directory that stores our generated CSS-in-JS
	await mkdir(GENERATED_DIR_PATH).catch(() => {
		// directory already exists
	});

	const generatedComponentJSS = await transpileCssToJs('./src/styles/components.css');
	const componentClasses = patchMediaQueries(generatedComponentJSS);

	const componentPlugin = plugin(({ addComponents }) => {
		addComponents(componentClasses);
	});
	const baseStyles = await transpileCssToJs('./src/styles/base.css', [componentPlugin]);

	// Creates the generated CSS-in-JS file
	await writeFile(
		`${GENERATED_DIR_PATH}/${INTELLISENSE_FILE_NAME}`,
		`module.exports = { components: ${JSON.stringify(componentClasses)}, base: ${JSON.stringify(baseStyles)} };`
	).catch((e) => console.error(e));
}

// Moves all of the media queries towards the end of the cssInJs object.
function patchMediaQueries(cssInJs: CssInJs) {
	const mediaQueries: CssInJs = {};

	for (const key of Object.keys(cssInJs)) {
		if (key.startsWith('@media')) {
			mediaQueries[key] = cssInJs[key];
			delete cssInJs[key];
		}
	}

	for (const key of Object.keys(mediaQueries)) {
		cssInJs[key] = mediaQueries[key];
	}

	return cssInJs;
}

exec();

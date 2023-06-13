#!/usr/bin/env node
import { generateBaseTWStyles, transpileCssToJs } from './compile-css-to-js.cjs';
import { mkdir, writeFile, unlink } from 'fs/promises';

const INTELLISENSE_FILE_NAME = 'intellisense-classes.cjs';

exec();

async function exec() {
	// Deletes the previously generated CSS-in-JS file. If we don't, our plugin will
	// add duplicate classes to our newly generated CSS-in-JS file.
	await unlink(`./src/lib/tailwind/generated/${INTELLISENSE_FILE_NAME}`).catch(() => {
		// file doesn't exist, don't worry about it
	});

	// Makes directory that stores our generated CSS-in-JS
	await mkdir('./src/lib/tailwind/generated').catch(() => {
		// directory already exists
	});

	const baseTWStyles = await generateBaseTWStyles();
	const generatedComponentJSS = await transpileCssToJs('./src/lib/styles/skeleton.css');
	const cleanedComponentClasses = removeDuplicateClasses(generatedComponentJSS, baseTWStyles);
	const componentClasses = patchMediaQueries(cleanedComponentClasses);

	// Creates the generated CSS-in-JS file
	await writeFile(`./src/lib/tailwind/generated/${INTELLISENSE_FILE_NAME}`, `module.exports = ${JSON.stringify(componentClasses)}`).catch(
		(e) => console.error(e)
	);
}

// Purges the generated CSS-in-JS file of duplicate TW classes
function removeDuplicateClasses(cssInJs, baseTWStyles) {
	for (const key of Object.keys(cssInJs)) {
		// We'll delete all the TW Base styles (i.e. html {...} body {...} etc.)
		if (baseTWStyles[key] !== undefined) delete cssInJs[key];
		if (key.includes(':is')) continue;
		if (key.startsWith('@media')) continue;
		// deletes the dark variant of type selectors (ex: .dark body {...})
		if (key.startsWith('.dark') && key[6] !== '.') delete cssInJs[key];
		// if it's not a class selector, delete it (only want classes in the intellisense)
		if (key[0] !== '.') delete cssInJs[key];
	}

	return cssInJs;
}

// Moves all of the media queries towards the end of the cssInJs object.
function patchMediaQueries(cssInJs) {
	const mediaQueries = {};

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

#!/usr/bin/env node
import type { CssInJs } from 'postcss-js';
import { generateBaseTWStyles, transpileCssToJs } from './compile-css-to-js.js';
import { mkdir, writeFile, unlink } from 'fs/promises';

const INTELLISENSE_FILE_NAME = 'intellisense-classes.json';
const GENERATED_DIR_PATH = `./src/tailwind/generated`;

async function exec() {
	// Deletes the previously generated CSS-in-JS file. If we don't, our plugin will
	// add duplicate classes to our newly generated CSS-in-JS file.
	await unlink(`${GENERATED_DIR_PATH}/${INTELLISENSE_FILE_NAME}`).catch(() => {
		// file doesn't exist, don't worry about it
	});

	// Makes directory that stores our generated CSS-in-JS
	await mkdir(GENERATED_DIR_PATH).catch(() => {
		// directory already exists
	});

	const baseTWStyles = await generateBaseTWStyles();

	const generatedJSS = await transpileCssToJs('./src/styles/test.css');
	const purgedJSS = await removeDuplicateClasses(generatedJSS, baseTWStyles);

	// Creates the generated CSS-in-JS file
	await writeFile(`${GENERATED_DIR_PATH}/${INTELLISENSE_FILE_NAME}`, `${JSON.stringify(purgedJSS)}`).catch((e) => console.error(e));
}

// Purges the generated CSS-in-JS file of duplicate TW classes
async function removeDuplicateClasses(cssInJs: CssInJs, baseTWStyles: CssInJs) {
	// We'll delete all the TW Base styles
	for (const [key] of Object.entries(cssInJs)) {
		if (baseTWStyles[key] !== undefined) delete cssInJs[key];
	}

	return cssInJs;
}

exec();

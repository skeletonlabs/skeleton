#!/usr/bin/env node
import { renameSync, mkdirSync } from 'fs';

try {
	// makes the directory if it doesn't exist
	mkdirSync('src/lib/tailwind/generated');
} catch (e) {
	// throws if the directory already exists
}

try {
	// moves generated file to appropriate location
	renameSync('.temp/all.js', 'src/lib/tailwind/generated/allComponents.cjs');
} catch (e) {
	console.error(`Failed to move file: ${e}`);
}

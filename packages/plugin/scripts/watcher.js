/* eslint-disable @typescript-eslint/no-var-requires */
const chokidar = require('chokidar');
const { join, resolve, basename } = require('path');
const { exec } = require('child_process');

const pathToStyles = resolve('.', join('src'));
// We want to ignore the `generated` dir so we don't have an endless loop
const generatedPath = resolve('.', join('src', 'tailwind', 'generated'));

// Simple watcher to detect changes in /packages/plugin/src
// This will rebuild the package on any `src` file changes.
let locked = false;

chokidar.watch(pathToStyles, { ignored: [generatedPath] }).on('change', (path) => {
	const now = Date.now();
	console.log(`[Build Start]: File Updated: ${basename(path)}`);
	if (!locked) {
		locked = true;
		exec('pnpm -F @skeletonlabs/tw-plugin build', () => {
			console.log(`[Build End]: Completed in ${Date.now() - now}ms`);
			locked = false;
		});
	}
});

/* eslint-disable @typescript-eslint/no-var-requires */
const chokidar = require('chokidar');
const { join, resolve, basename } = require('path');
const { exec } = require('child_process');

const pathToStyles = resolve('.', join('src'));
// We want to ignore the `generated` dir so we don't have an endless loop
const generatedPath = resolve('.', join('src', 'tailwind', 'generated'));

// Simple watcher to detect changes in /packages/plugin/src
// This will rebuild the package on any `src` file changes.
chokidar.watch(pathToStyles, { ignored: [generatedPath] }).on('change', (path) => {
	console.log(`[Rebuilding]: File Updated: ${basename(path)}`);
	exec('pnpm -F @skeletonlabs/plugin build');
});

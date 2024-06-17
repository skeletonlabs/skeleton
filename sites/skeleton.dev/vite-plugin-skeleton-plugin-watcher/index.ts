import type { Plugin } from 'vite';
import { Minimatch } from 'minimatch';
import { exec } from 'child_process';
import { join, resolve, basename } from 'path';

export default function skeletonPluginWatcher(): Plugin {
	const pluginSrcPath = resolve('.', join('..', '..', 'packages', 'plugin', 'src'));
	const mm = new Minimatch('**/packages/plugin/src/**/*');
	let locked = false;

	return {
		name: 'skeleton-plugin-watcher',
		configureServer(vite) {
			vite.watcher.add(pluginSrcPath);
			vite.watcher.on('all', async (event, path) => {
				if (mm.match(path) && !path.includes('generated')) {
					console.log(`[TW Plugin]: File Updated: ${basename(path)}`);
					if (!locked) {
						locked = true;
						const now = Date.now();
						exec('pnpm -F @skeletonlabs/tw-plugin build', () => {
							console.log(`[TW Plugin]: Completed in ${Date.now() - now}ms`);
							locked = false;
						});
					}
				}
			});
		},
		async buildStart() {
			const now = Date.now();
			exec('pnpm -F @skeletonlabs/tw-plugin build', () => {
				console.log(`[TW Plugin]: Completed in ${Date.now() - now}ms`);
			});
		}
	};
}

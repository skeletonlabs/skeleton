import { defineConfig } from 'vite';
import fg from 'fast-glob';
import { generateColorPairings } from './src/computed/color-pairings.js';
import { generatePresets } from './src/computed/presets.js';

export default defineConfig({
	build: {
		cssCodeSplit: true,
		lib: {
			entry: [
				'src/static/base.css',
				'src/static/components.css',
				'src/index.css',
			]
		},
		rollupOptions: {
			output: {
				preserveModules: true
			}
		}
	},
	assetsInclude: ['src/index.css'],
	plugins: [
		{
			name: 'skeleton-chunk-generation',
			apply: 'build',
			async buildStart() {
				const files = await fg('./src/computed/*.ts');
				for (const file of files) {
					this.addWatchFile(file);
				}
				this.emitFile({
					fileName: 'computed/color-pairings.css',
					type: 'prebuilt-chunk',
					code: generateColorPairings()
				});
				this.emitFile({
					fileName: 'computed/presets.css',
					type: 'prebuilt-chunk',
					code: generatePresets()
				});
			}
		}
	]
});

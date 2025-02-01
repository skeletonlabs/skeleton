import { defineConfig } from 'vite';
import fg from 'fast-glob';
import { generateColorPairings } from './src/computed/color-pairings.js';
import { generatePresets } from './src/computed/presets.js';

export default defineConfig({
	build: {
		cssCodeSplit: true,
		lib: {
			entry: ['src/static/base.css', 'src/static/components.css', 'src/themes/cerberus.css']
		},
		rollupOptions: {
			output: {
				preserveModules: true
			}
		}
	},
	plugins: [
		{
			name: 'skeleton-computed-chunk-generation',
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
			},
			buildEnd() {
				this.emitFile({
					fileName: 'index.css',
					type: 'prebuilt-chunk',
					code: `@import './static/base.css';
@import './static/components.css';
@import './computed/presets.css';
@import './computed/color-pairings.css';`
				});
			}
		}
	]
});

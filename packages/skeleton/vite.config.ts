import { defineConfig, Plugin, ResolvedConfig } from 'vite';
import fg from 'fast-glob';
import generateColorPairings from './src/generators/color-pairings.css.js';
import { mkdir, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { existsSync } from 'node:fs';
import generatePresets from './src/generators/presets.css.js';

interface GeneratedFile {
	input: string;
	output: string;
	generator: () => string;
}

function cssGenerator(files: GeneratedFile[] = []) {
	let resolvedConfig: ResolvedConfig;
	return {
		name: 'css-generator',
		apply: 'build',
		async configResolved(config) {
			resolvedConfig = config;
			for (const file of files) {
				const path = join(config.root, file.output);
				if (!existsSync(dirname(path))) {
					await mkdir(dirname(path), { recursive: true });
				}
				await writeFile(path, file.generator());
			}
		},
		async buildStart() {
			for (const file of files) {
				const path = join(resolvedConfig.root, file.input);
				this.addWatchFile(path);
			}
		}
	} satisfies Plugin;
}

export default defineConfig({
	build: {
		cssCodeSplit: true,
		lib: {
			entry: ['src/index.css', ...(await fg.glob('./src/themes/*.css'))]
		},
		rollupOptions: {
			output: {
				preserveModules: true
			}
		}
	},
	plugins: [
		cssGenerator([
			{
				input: './src/generators/color-pairings.css.ts',
				output: './generated/color-pairings.css',
				generator: generateColorPairings
			},
			{
				input: './src/generators/presets.css.ts',
				output: './generated/presets.css',
				generator: generatePresets
			}
		])
	]
});

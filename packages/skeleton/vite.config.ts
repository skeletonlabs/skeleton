import {createServer, defineConfig, Plugin, ViteDevServer} from 'vite';
import fg from 'fast-glob';
import { ViteNodeServer } from "vite-node/server";
import { ViteNodeRunner } from "vite-node/client";

async function generators(files: string[] = []) {
	let viteDevServer: ViteDevServer;
	let viteNodeServer: ViteNodeServer;
	let viteNodeRunner: ViteNodeRunner;
	return {
		name: 'generators',
		apply: 'build',
		async config(config) {
			viteDevServer = await createServer(config);
			await viteDevServer.pluginContainer.buildStart();
			viteNodeServer = new ViteNodeServer(viteDevServer);
			viteNodeRunner = new ViteNodeRunner({
				root: viteDevServer.config.root,
				base: viteDevServer.config.base,
				fetchModule(id) {
					return viteNodeServer.fetchModule(id)
				},
				resolveId(id, importer) {
					return viteNodeServer.resolveId(id, importer)
				},
			});
		},
		async buildStart() {
			for (const file of files) {
				this.addWatchFile(file);
				await viteNodeRunner.executeFile(file);
			}
		},
		async buildEnd() {
			await viteDevServer.close();
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
		generators([
			'./src/generators/color-pairings.css.ts',
			'./src/generators/presets.css.ts'
		])
	]
});

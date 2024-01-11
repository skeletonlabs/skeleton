import { Minimatch } from "minimatch";
import { exec } from "node:child_process";
import { join, resolve, basename } from "node:path";

/**
 * @returns {NonNullable<import('astro').ViteUserConfig['plugins']>[number]}
 */
export default function skeletonPluginWatcher() {
	const pluginSrcPath = resolve(
		".",
		join("..", "..", "packages", "skeleton", "src", "plugin")
	);
	const mm = new Minimatch("**/packages/skeleton/src/plugin/**/*");
	let locked = false;

	return {
		name: "skeleton-plugin-watcher",
		configureServer(vite) {
			vite.watcher.add(pluginSrcPath);
			vite.watcher.on("all", async (event, path) => {
				if (mm.match(path) && !path.includes("generated")) {
					console.log(`[TW Plugin]: File Updated: ${basename(path)}`);
					if (!locked) {
						locked = true;
						const now = Date.now();
						exec("pnpm -F @skeletonlabs/skeleton build", () => {
							console.log(`[TW Plugin]: Completed in ${Date.now() - now}ms`);
							locked = false;
						});
					}
				}
			});
		},
		async buildStart() {
			const now = Date.now();
			exec("pnpm -F @skeletonlabs/skeleton build", () => {
				console.log(`[TW Plugin]: Completed in ${Date.now() - now}ms`);
			});
		},
	};
}


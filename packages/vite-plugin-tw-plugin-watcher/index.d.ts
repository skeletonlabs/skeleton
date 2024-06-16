/**
 * @param {string} twPluginPath - Path to the Tailwind plugin
 * @example
 * ```js
 * import path from "node:path";
 * import skeletonPluginWatcher from "vite-plugin-tw-plugin-watcher";
 *
 * const pluginPath = path.resolve(".", path.join("..", "..", "packages", "skeleton", "src", "plugin"));
 *
 * const viteConfig = {
 *  plugins: [
 *      skeletonPluginWatcher(pluginPath),
 *      // ... other vite plugins
 *  ]
 * };
 *
 * plugins: [
 * skeletonPluginWatcher(path.resolve(".", path.join("..", "..", "packages", "skeleton", "src", "plugin"))),
 * // ... other vite plugins
 * ]
 * ```
 * @returns {import('vite').Plugin}
 */
export default function skeletonPluginWatcher(twPluginPath: string): {
  name: string;
  configureServer(vite: any): void;
  buildStart(): Promise<void>;
};

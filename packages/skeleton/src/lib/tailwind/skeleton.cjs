// The Skeleton Tailwind Plugin
// Tailwind Docs: https://tailwindcss.com/docs/plugins
// Skeleton Docs: https://www.skeleton.dev/docs/get-started

const intellisensePlugin = require('./intellisense.cjs');
const corePlugin = require('./core.cjs');

// The default export is a function that returns an array of plugins
// and accepts an optional config that determines which plugins are included.
// By default, all plugins are included.
module.exports = function (config = { intellisense: true }) {
	const { intellisense } = config;
	const plugins = [corePlugin];

	// Add the plugin if the option is not explicitly set to false
	if (intellisense !== false) plugins.push(intellisensePlugin);

	return plugins;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
// Type definitions for postcss-js 4.0
// Project: https://github.com/postcss/postcss-js
// Definitions by: Adam Thompson-Sharpe <https://github.com/MysteryBlokHed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'postcss-js' {
	type CssInJs = Record<string, any>;
	/**
	 * Convert a PostCSS `Root` into a CSS-in-JS object
	 * @param root The root to convert
	 * @returns CSS-in-JS object
	 */
	function objectify(root: import('postcss').Root): CssInJs;

	/**
	 * Parse a CSS-in-JS object into a PostCSS `Root`
	 * @param obj The CSS-in-JS to parse
	 * @returns A PostCSS `Root`
	 */
	function parse(obj: CssInJs): import('postcss').Root;

	/**
	 * Create a PostCSS processor with a simple API
	 * @param plugins Synchronous plugins to use with PostCSS
	 * @returns A processor function that accepts (idk) and returns a CSS-in-JS object
	 */
	function sync(plugins: import('postcss').AcceptedPlugin[]): (input: CssInJs) => CssInJs;

	/**
	 * Create a PostCSS processor with a simple API, allowing asynchronous plugins
	 * @param plugins Plugins to use with PostCSS
	 * @returns A processor function that accepts (idk) and returns a CSS-in-JS object
	 */
	function async(plugins: import('postcss').AcceptedPlugin[]): (input: CssInJs) => Promise<CssInJs>;
}

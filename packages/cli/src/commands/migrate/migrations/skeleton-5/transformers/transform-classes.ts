/**
 * v4 -> v5 utility class renames.
 *
 * Only 1:1 swaps that are safe to apply mechanically live here. Two documented v5 class
 * changes are intentionally omitted because a class rewrite cannot express them correctly:
 * - `ig-cell` -> `label label-text`, which also requires switching the element to a semantic
 *   `<label for>` with a matching `id`.
 * - `@variant theme-[name]`, which is an at-rule / variant removal rather than a class.
 * Both remain manual steps.
 */
const CLASS_MAPPINGS = [
	{
		find: /\binput-group\b/g,
		replace: 'field-group',
	},
	{
		find: /\big-input\b/g,
		replace: 'input',
	},
	{
		find: /\big-select\b/g,
		replace: 'select',
	},
	{
		find: /\big-btn\b/g,
		replace: 'btn',
	},
	{
		// `card` now auto-applies hover styles to `<a>`/`<button>`, so the modifier is dropped.
		find: /\s*\bcard-hover\b/g,
		replace: '',
	},
];

function transformClasses(code: string) {
	return {
		code: CLASS_MAPPINGS.reduce((result, { find, replace }) => result.replace(find, replace), code),
	};
}

export { transformClasses };

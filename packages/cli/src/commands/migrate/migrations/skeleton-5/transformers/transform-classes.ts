/**
 * v4 -> v5 utility class renames.
 *
 * Only 1:1 swaps that are safe to apply mechanically live here, verified against the real
 * `@skeletonlabs/skeleton@4.15.2` -> v5 utility delta.
 *
 * Deliberately NOT handled (require structural changes or have no v5 class equivalent — leave
 * these as manual steps / surface them in a report):
 * - `ig-cell` -> `label label-text`, which also needs switching the element to a `<label for>`.
 * - `@variant theme-[name]`, an at-rule / variant removal rather than a class.
 * - `code`, removed in v5 with no drop-in replacement class.
 * - `*-font-weight`, `*-font-style`, `anchor-text-decoration*` typography classes: v5 exposes no
 *   generated utility for these, so there is nothing to rename them to.
 *
 * These are detected via `detectManualClasses` and reported to the user as manual steps.
 */
import { detectManualClasses } from '../utility/manual-steps.js';

const CLASS_MAPPINGS = [
	// Form groups
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
	// Cards — `card` now auto-applies hover styles to `<a>`/`<button>`, so the modifier is dropped.
	{
		find: /\s*\bcard-hover\b/g,
		replace: '',
	},
	// Typography utilities — v4 `core.css` exposed one class per theme token; v5 replaces them with
	// Tailwind-generated utilities. The `(?![-\w])` right-boundary keeps a class from matching inside
	// a longer variant (e.g. `base-font-color` inside `base-font-color-dark`).
	// Base
	{
		find: /\bbase-font-family(?![-\w])/g,
		replace: 'font-typo-base',
	},
	{
		find: /\bbase-font-size(?![-\w])/g,
		replace: 'text-typo-base',
	},
	{
		find: /\bbase-line-height(?![-\w])/g,
		replace: 'leading-typo-base',
	},
	{
		find: /\bbase-letter-spacing(?![-\w])/g,
		replace: 'tracking-typo-base',
	},
	{
		find: /\bbase-font-color-dark(?![-\w])/g,
		replace: 'text-typo-base-dark',
	},
	{
		find: /\bbase-font-color(?![-\w])/g,
		replace: 'text-typo-base-light',
	},
	// Heading
	{
		find: /\bheading-font-family(?![-\w])/g,
		replace: 'font-typo-heading',
	},
	{
		find: /\bheading-letter-spacing(?![-\w])/g,
		replace: 'tracking-typo-heading',
	},
	{
		find: /\bheading-font-color-dark(?![-\w])/g,
		replace: 'text-typo-heading-dark',
	},
	{
		find: /\bheading-font-color(?![-\w])/g,
		replace: 'text-typo-heading-light',
	},
	// Anchor
	{
		find: /\banchor-font-family(?![-\w])/g,
		replace: 'font-typo-anchor',
	},
	{
		find: /\banchor-font-size(?![-\w])/g,
		replace: 'text-typo-anchor',
	},
	{
		find: /\banchor-line-height(?![-\w])/g,
		replace: 'leading-typo-anchor',
	},
	{
		find: /\banchor-letter-spacing(?![-\w])/g,
		replace: 'tracking-typo-anchor',
	},
	{
		find: /\banchor-font-color-dark(?![-\w])/g,
		replace: 'text-typo-anchor-dark',
	},
	{
		find: /\banchor-font-color(?![-\w])/g,
		replace: 'text-typo-anchor-light',
	},
	// Root background
	{
		find: /\bbody-background-color-dark(?![-\w])/g,
		replace: 'bg-root-bg-dark',
	},
	{
		find: /\bbody-background-color(?![-\w])/g,
		replace: 'bg-root-bg-light',
	},
];

function transformClasses(code: string) {
	return {
		code: CLASS_MAPPINGS.reduce((result, { find, replace }) => result.replace(find, replace), code),
		meta: {
			// Classes with no safe 1:1 rename are left in place; surface them as manual steps.
			manual: detectManualClasses(code),
		},
	};
}

export { transformClasses };

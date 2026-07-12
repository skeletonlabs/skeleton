import { detectManualClasses } from '../utility/manual-steps.js';

// v4 -> v5 class renames; classes without a 1:1 v5 equivalent are reported as manual steps instead
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
	// Cards (`card` now applies hover styles automatically)
	{
		find: /\s*\bcard-hover\b/g,
		replace: '',
	},
	// Typography — the `(?![-\w])` right-boundary prevents matching inside longer class names
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
			manual: detectManualClasses(code),
		},
	};
}

export { transformClasses };

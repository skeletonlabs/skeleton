// v4 -> v5 theme token renames, applied to declarations and `var()` references
export const TOKEN_MAPPINGS: Record<string, string> = {
	// Typography Base
	'--base-font-family': '--typo-base--font-family',
	'--base-font-size': '--typo-base--font-size',
	'--base-font-color': '--typo-base--color-light',
	'--base-font-color-dark': '--typo-base--color-dark',
	'--base-line-height': '--typo-base--line-height',
	'--base-font-weight': '--typo-base--font-weight',
	'--base-font-style': '--typo-base--font-style',
	'--base-letter-spacing': '--typo-base--letter-spacing',
	// Typography Heading
	'--heading-font-family': '--typo-heading--font-family',
	'--heading-font-color': '--typo-heading--color-light',
	'--heading-font-color-dark': '--typo-heading--color-dark',
	'--heading-font-weight': '--typo-heading--font-weight',
	'--heading-font-style': '--typo-heading--font-style',
	'--heading-letter-spacing': '--typo-heading--letter-spacing',
	// Typography Anchor
	'--anchor-font-family': '--typo-anchor--font-family',
	'--anchor-font-size': '--typo-anchor--font-size',
	'--anchor-font-color': '--typo-anchor--color-light',
	'--anchor-font-color-dark': '--typo-anchor--color-dark',
	'--anchor-line-height': '--typo-anchor--line-height',
	'--anchor-font-weight': '--typo-anchor--font-weight',
	'--anchor-font-style': '--typo-anchor--font-style',
	'--anchor-letter-spacing': '--typo-anchor--letter-spacing',
	// Typography Anchor decoration
	'--anchor-text-decoration': '--typo-anchor--text-decoration-line',
	'--anchor-text-decoration-hover': '--typo-anchor--hover--text-decoration-line',
	'--anchor-text-decoration-active': '--typo-anchor--active--text-decoration-line',
	'--anchor-text-decoration-focus': '--typo-anchor--focus--text-decoration-line',
	// Root background
	'--body-background-color': '--color-root-bg-light',
	'--body-background-color-dark': '--color-root-bg-dark',
};

// v4 theme tokens removed in v5
export const REMOVED_TOKENS: string[] = ['--default-divide-width', '--heading-font-size', '--heading-line-height'];

// Tokens new in v5, appended to theme blocks with appearance-preserving defaults
export const ADDED_TOKENS: Record<string, string> = {
	// Typography extended properties
	'--typo-base--font-stretch': 'inherit',
	'--typo-base--font-kerning': 'inherit',
	'--typo-base--text-shadow': 'inherit',
	'--typo-base--word-spacing': 'inherit',
	'--typo-base--hyphens': 'inherit',
	'--typo-base--text-transform': 'inherit',
	'--typo-heading--font-stretch': 'inherit',
	'--typo-heading--font-kerning': 'inherit',
	'--typo-heading--text-shadow': 'inherit',
	'--typo-heading--word-spacing': 'inherit',
	'--typo-heading--hyphens': 'inherit',
	'--typo-heading--text-transform': 'inherit',
	'--typo-anchor--font-stretch': 'inherit',
	'--typo-anchor--font-kerning': 'inherit',
	'--typo-anchor--text-shadow': 'inherit',
	'--typo-anchor--word-spacing': 'inherit',
	'--typo-anchor--hyphens': 'inherit',
	'--typo-anchor--text-transform': 'inherit',
	// Anchor decoration sub-properties
	'--typo-anchor--text-decoration-color': 'inherit',
	'--typo-anchor--text-decoration-style': 'inherit',
	'--typo-anchor--text-decoration-thickness': 'inherit',
	'--typo-anchor--text-underline-offset': 'inherit',
	'--typo-anchor--text-underline-position': 'inherit',
	'--typo-anchor--hover--text-decoration-color': 'inherit',
	'--typo-anchor--hover--text-decoration-style': 'inherit',
	'--typo-anchor--hover--text-decoration-thickness': 'inherit',
	'--typo-anchor--hover--text-underline-offset': 'inherit',
	'--typo-anchor--hover--text-underline-position': 'inherit',
	'--typo-anchor--active--text-decoration-color': 'inherit',
	'--typo-anchor--active--text-decoration-style': 'inherit',
	'--typo-anchor--active--text-decoration-thickness': 'inherit',
	'--typo-anchor--active--text-underline-offset': 'inherit',
	'--typo-anchor--active--text-underline-position': 'inherit',
	'--typo-anchor--focus--text-decoration-color': 'inherit',
	'--typo-anchor--focus--text-decoration-style': 'inherit',
	'--typo-anchor--focus--text-decoration-thickness': 'inherit',
	'--typo-anchor--focus--text-underline-offset': 'inherit',
	'--typo-anchor--focus--text-underline-position': 'inherit',
	// Edges
	'--default-outline-width': '1px',
	// Corner shape
	'--corner-shape-base': 'initial',
	'--corner-shape-container': 'initial',
	// Brand colors
	'--color-brand-light': 'var(--color-primary-500)',
	'--color-brand-contrast-light': 'var(--color-primary-contrast-500)',
	'--color-brand-dark': 'var(--color-primary-500)',
	'--color-brand-contrast-dark': 'var(--color-primary-contrast-500)',
};

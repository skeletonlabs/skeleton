/**
 * v4 -> v5 theme token (CSS custom property) renames.
 * Applied to declarations *and* `var()` references, so both sides of the theme move together.
 */
export const TOKEN_MAPPINGS: Record<string, string> = {
	// Typography - Base
	'--base-font-family': '--typo-base--font-family',
	'--base-font-size': '--typo-base--font-size',
	'--base-font-color': '--typo-base--color-light',
	'--base-font-color-dark': '--typo-base--color-dark',
	'--base-line-height': '--typo-base--line-height',
	'--base-font-weight': '--typo-base--font-weight',
	'--base-font-style': '--typo-base--font-style',
	'--base-letter-spacing': '--typo-base--letter-spacing',
	// Typography - Heading
	'--heading-font-family': '--typo-heading--font-family',
	'--heading-font-color': '--typo-heading--color-light',
	'--heading-font-color-dark': '--typo-heading--color-dark',
	'--heading-font-weight': '--typo-heading--font-weight',
	'--heading-font-style': '--typo-heading--font-style',
	'--heading-letter-spacing': '--typo-heading--letter-spacing',
	// Typography - Anchor
	'--anchor-font-family': '--typo-anchor--font-family',
	'--anchor-font-size': '--typo-anchor--font-size',
	'--anchor-font-color': '--typo-anchor--color-light',
	'--anchor-font-color-dark': '--typo-anchor--color-dark',
	'--anchor-line-height': '--typo-anchor--line-height',
	'--anchor-font-weight': '--typo-anchor--font-weight',
	'--anchor-font-style': '--typo-anchor--font-style',
	'--anchor-letter-spacing': '--typo-anchor--letter-spacing',
	// Typography - Anchor decoration (flat token -> `-line` suffix + `--state--` infix)
	'--anchor-text-decoration': '--typo-anchor--text-decoration-line',
	'--anchor-text-decoration-hover': '--typo-anchor--hover--text-decoration-line',
	'--anchor-text-decoration-active': '--typo-anchor--active--text-decoration-line',
	'--anchor-text-decoration-focus': '--typo-anchor--focus--text-decoration-line',
	// Root background
	'--body-background-color': '--color-root-bg-light',
	'--body-background-color-dark': '--color-root-bg-dark',
};

/**
 * v4 theme tokens removed in v5. Their declarations are dropped entirely.
 */
export const REMOVED_TOKENS: string[] = [
	'--default-divide-width', // `divide` now derives from `--default-border-width`
	'--heading-font-size', // derived from the typographic scale
	'--heading-line-height', // derived from the typographic scale
];

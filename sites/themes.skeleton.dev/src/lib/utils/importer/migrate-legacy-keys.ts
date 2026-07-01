// Migrate Legacy (v3) Theme Keys -> v5
// Renames/drops property names from the legacy v3 theme format (stable across Skeleton v3/v4)
// into the current v5 format. New v5-only keys (brand, corner shape, outline width, extended
// typography, decoration sub-properties) are intentionally left unset here — they keep whatever
// the pre-import "reset to defaults" pass already seeded (the Cerberus theme's v5 defaults).

/** Renamed 1:1 — value carries across under the new key name. */
const RENAMED_KEYS: Record<string, string> = {
	// Typography — Base
	'--base-font-family': '--typo-base--font-family',
	'--base-font-size': '--typo-base--font-size',
	'--base-font-color': '--typo-base--color-light',
	'--base-font-color-dark': '--typo-base--color-dark',
	'--base-line-height': '--typo-base--line-height',
	'--base-font-weight': '--typo-base--font-weight',
	'--base-font-style': '--typo-base--font-style',
	'--base-letter-spacing': '--typo-base--letter-spacing',
	// Typography — Heading
	'--heading-font-family': '--typo-heading--font-family',
	'--heading-font-color': '--typo-heading--color-light',
	'--heading-font-color-dark': '--typo-heading--color-dark',
	'--heading-font-weight': '--typo-heading--font-weight',
	'--heading-font-style': '--typo-heading--font-style',
	'--heading-letter-spacing': '--typo-heading--letter-spacing',
	// Typography — Anchor
	'--anchor-font-family': '--typo-anchor--font-family',
	'--anchor-font-size': '--typo-anchor--font-size',
	'--anchor-font-color': '--typo-anchor--color-light',
	'--anchor-font-color-dark': '--typo-anchor--color-dark',
	'--anchor-line-height': '--typo-anchor--line-height',
	'--anchor-font-weight': '--typo-anchor--font-weight',
	'--anchor-font-style': '--typo-anchor--font-style',
	'--anchor-letter-spacing': '--typo-anchor--letter-spacing',
	// Typography — Anchor decoration (flat -> `-line` suffix, state infix)
	'--anchor-text-decoration': '--typo-anchor--text-decoration-line',
	'--anchor-text-decoration-hover': '--typo-anchor--hover--text-decoration-line',
	'--anchor-text-decoration-active': '--typo-anchor--active--text-decoration-line',
	'--anchor-text-decoration-focus': '--typo-anchor--focus--text-decoration-line',
	// Root background
	'--body-background-color': '--color-root-bg-light',
	'--body-background-color-dark': '--color-root-bg-dark',
};

/** Removed outright — no v5 equivalent. */
const REMOVED_KEYS = new Set(['--default-divide-width', '--heading-font-size', '--heading-line-height']);

/** True if the parsed properties already use v5 key names (presence of any `--typo-` key). */
export function isV5Format(properties: Record<string, string>) {
	return Object.keys(properties).some((key) => key.startsWith('--typo-'));
}

/** Renames/drops legacy (v3) keys in place, returning a new v5-shaped property record. */
export function migrateLegacyThemeKeys(properties: Record<string, string>) {
	const migrated: Record<string, string> = {};
	for (const [key, value] of Object.entries(properties)) {
		if (REMOVED_KEYS.has(key)) {
			continue;
		}
		const migratedKey = RENAMED_KEYS[key] ?? key;
		migrated[migratedKey] = value;
	}
	return migrated;
}

// State Types

// Globals ---

export interface Globals {
	panel: 'preview' | 'code';
	activeColor: string;
}

// Control Settings ---

export interface SettingsCore {
	name: string;
}

// NOTE: SettingsColors handled as `Record<string, string>`
// export interface SettingsColors {}

export interface SettingsBackgrounds {
	'--body-background-color': string;
	'--body-background-color-dark': string;
}

export interface SettingsTypography {
	// Scale Factor
	'--text-scaling': string;
	// Base
	'--base-font-color': string;
	'--base-font-color-dark': string;
	'--base-font-family': string;
	'--base-font-size': string;
	'--base-line-height': string;
	'--base-font-weight': string;
	'--base-font-style': string;
	'--base-letter-spacing': string;
	// Headings
	'--heading-font-color': string;
	'--heading-font-color-dark': string;
	'--heading-font-family': string;
	'--heading-font-weight': string;
	'--heading-font-style': string;
	'--heading-letter-spacing': string;
	// Anchors
	'--anchor-font-color': string;
	'--anchor-font-color-dark': string;
	'--anchor-font-family': string;
	'--anchor-font-size': string;
	'--anchor-line-height': string;
	'--anchor-font-weight': string;
	'--anchor-font-style': string;
	'--anchor-letter-spacing': string;
	'--anchor-text-decoration': string;
	'--anchor-text-decoration-hover': string;
	'--anchor-text-decoration-active': string;
	'--anchor-text-decoration-focus': string;
}

export interface SettingsSpacing {
	'--spacing': string; // rem
}

export interface SettingsEdges {
	'--radius-base': string; // rem
	'--radius-container': string; // rem
	'--default-border-width': string; // px
	'--default-divide-width': string; // px
	'--default-ring-width': string; // px
}

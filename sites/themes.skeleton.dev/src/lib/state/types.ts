// State Types

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
	'--type-scale-factor': string;
	// Scale Numeric
	'--type-scale-1': string;
	'--type-scale-2': string;
	'--type-scale-3': string;
	'--type-scale-4': string;
	'--type-scale-5': string;
	'--type-scale-6': string;
	'--type-scale-7': string;
	'--type-scale-8': string;
	'--type-scale-9': string;
	'--type-scale-10': string;
	'--type-scale-11': string;
	'--type-scale-12': string;
	'--type-scale-13': string;
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
	'--space-scale-factor': number;
}

export interface SettingsEdges {
	'--radii-default': number;
	'--radii-container': number;
	'--border-width-default': number;
	'--divide-width-default': number;
	'--outline-width-default': number;
	'--ring-width-default': number;
}

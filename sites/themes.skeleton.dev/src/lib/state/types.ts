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

export interface SettingsColors {
	'--color-primary-50': string;
	'--color-primary-100': string;
	'--color-primary-200': string;
	'--color-primary-300': string;
	'--color-primary-400': string;
	'--color-primary-500': string;
	'--color-primary-600': string;
	'--color-primary-700': string;
	'--color-primary-800': string;
	'--color-primary-900': string;
	'--color-primary-950': string;
	'--color-primary-contrast-dark': string;
	'--color-primary-contrast-light': string;
	'--color-primary-contrast-50': string;
	'--color-primary-contrast-100': string;
	'--color-primary-contrast-200': string;
	'--color-primary-contrast-300': string;
	'--color-primary-contrast-400': string;
	'--color-primary-contrast-500': string;
	'--color-primary-contrast-600': string;
	'--color-primary-contrast-700': string;
	'--color-primary-contrast-800': string;
	'--color-primary-contrast-900': string;
	'--color-primary-contrast-950': string;
	'--color-secondary-50': string;
	'--color-secondary-100': string;
	'--color-secondary-200': string;
	'--color-secondary-300': string;
	'--color-secondary-400': string;
	'--color-secondary-500': string;
	'--color-secondary-600': string;
	'--color-secondary-700': string;
	'--color-secondary-800': string;
	'--color-secondary-900': string;
	'--color-secondary-950': string;
	'--color-secondary-contrast-dark': string;
	'--color-secondary-contrast-light': string;
	'--color-secondary-contrast-50': string;
	'--color-secondary-contrast-100': string;
	'--color-secondary-contrast-200': string;
	'--color-secondary-contrast-300': string;
	'--color-secondary-contrast-400': string;
	'--color-secondary-contrast-500': string;
	'--color-secondary-contrast-600': string;
	'--color-secondary-contrast-700': string;
	'--color-secondary-contrast-800': string;
	'--color-secondary-contrast-900': string;
	'--color-secondary-contrast-950': string;
	'--color-tertiary-50': string;
	'--color-tertiary-100': string;
	'--color-tertiary-200': string;
	'--color-tertiary-300': string;
	'--color-tertiary-400': string;
	'--color-tertiary-500': string;
	'--color-tertiary-600': string;
	'--color-tertiary-700': string;
	'--color-tertiary-800': string;
	'--color-tertiary-900': string;
	'--color-tertiary-950': string;
	'--color-tertiary-contrast-dark': string;
	'--color-tertiary-contrast-light': string;
	'--color-tertiary-contrast-50': string;
	'--color-tertiary-contrast-100': string;
	'--color-tertiary-contrast-200': string;
	'--color-tertiary-contrast-300': string;
	'--color-tertiary-contrast-400': string;
	'--color-tertiary-contrast-500': string;
	'--color-tertiary-contrast-600': string;
	'--color-tertiary-contrast-700': string;
	'--color-tertiary-contrast-800': string;
	'--color-tertiary-contrast-900': string;
	'--color-tertiary-contrast-950': string;
	'--color-success-50': string;
	'--color-success-100': string;
	'--color-success-200': string;
	'--color-success-300': string;
	'--color-success-400': string;
	'--color-success-500': string;
	'--color-success-600': string;
	'--color-success-700': string;
	'--color-success-800': string;
	'--color-success-900': string;
	'--color-success-950': string;
	'--color-success-contrast-dark': string;
	'--color-success-contrast-light': string;
	'--color-success-contrast-50': string;
	'--color-success-contrast-100': string;
	'--color-success-contrast-200': string;
	'--color-success-contrast-300': string;
	'--color-success-contrast-400': string;
	'--color-success-contrast-500': string;
	'--color-success-contrast-600': string;
	'--color-success-contrast-700': string;
	'--color-success-contrast-800': string;
	'--color-success-contrast-900': string;
	'--color-success-contrast-950': string;
	'--color-warning-50': string;
	'--color-warning-100': string;
	'--color-warning-200': string;
	'--color-warning-300': string;
	'--color-warning-400': string;
	'--color-warning-500': string;
	'--color-warning-600': string;
	'--color-warning-700': string;
	'--color-warning-800': string;
	'--color-warning-900': string;
	'--color-warning-950': string;
	'--color-warning-contrast-dark': string;
	'--color-warning-contrast-light': string;
	'--color-warning-contrast-50': string;
	'--color-warning-contrast-100': string;
	'--color-warning-contrast-200': string;
	'--color-warning-contrast-300': string;
	'--color-warning-contrast-400': string;
	'--color-warning-contrast-500': string;
	'--color-warning-contrast-600': string;
	'--color-warning-contrast-700': string;
	'--color-warning-contrast-800': string;
	'--color-warning-contrast-900': string;
	'--color-warning-contrast-950': string;
	'--color-error-50': string;
	'--color-error-100': string;
	'--color-error-200': string;
	'--color-error-300': string;
	'--color-error-400': string;
	'--color-error-500': string;
	'--color-error-600': string;
	'--color-error-700': string;
	'--color-error-800': string;
	'--color-error-900': string;
	'--color-error-950': string;
	'--color-error-contrast-dark': string;
	'--color-error-contrast-light': string;
	'--color-error-contrast-50': string;
	'--color-error-contrast-100': string;
	'--color-error-contrast-200': string;
	'--color-error-contrast-300': string;
	'--color-error-contrast-400': string;
	'--color-error-contrast-500': string;
	'--color-error-contrast-600': string;
	'--color-error-contrast-700': string;
	'--color-error-contrast-800': string;
	'--color-error-contrast-900': string;
	'--color-error-contrast-950': string;
	'--color-surface-50': string;
	'--color-surface-100': string;
	'--color-surface-200': string;
	'--color-surface-300': string;
	'--color-surface-400': string;
	'--color-surface-500': string;
	'--color-surface-600': string;
	'--color-surface-700': string;
	'--color-surface-800': string;
	'--color-surface-900': string;
	'--color-surface-950': string;
	'--color-surface-contrast-dark': string;
	'--color-surface-contrast-light': string;
	'--color-surface-contrast-50': string;
	'--color-surface-contrast-100': string;
	'--color-surface-contrast-200': string;
	'--color-surface-contrast-300': string;
	'--color-surface-contrast-400': string;
	'--color-surface-contrast-500': string;
	'--color-surface-contrast-600': string;
	'--color-surface-contrast-700': string;
	'--color-surface-contrast-800': string;
	'--color-surface-contrast-900': string;
	'--color-surface-contrast-950': string;
}

export interface SettingsBackgrounds {
	'--color-root-bg-light': string;
	'--color-root-bg-dark': string;
}

export interface SettingsTypography {
	// Scale Factor
	'--text-scaling': string;
	// Base
	'--typo-base--font-family': string;
	'--typo-base--font-size': string;
	'--typo-base--color-light': string;
	'--typo-base--color-dark': string;
	'--typo-base--line-height': string;
	'--typo-base--font-weight': string;
	'--typo-base--font-style': string;
	'--typo-base--letter-spacing': string;
	'--typo-base--font-stretch': string;
	'--typo-base--font-kerning': string;
	'--typo-base--text-shadow': string;
	'--typo-base--word-spacing': string;
	'--typo-base--hyphens': string;
	'--typo-base--text-transform': string;
	// Headings
	'--typo-heading--font-family': string;
	'--typo-heading--color-light': string;
	'--typo-heading--color-dark': string;
	'--typo-heading--font-weight': string;
	'--typo-heading--font-style': string;
	'--typo-heading--letter-spacing': string;
	'--typo-heading--font-stretch': string;
	'--typo-heading--font-kerning': string;
	'--typo-heading--text-shadow': string;
	'--typo-heading--word-spacing': string;
	'--typo-heading--hyphens': string;
	'--typo-heading--text-transform': string;
	// Anchors
	'--typo-anchor--font-family': string;
	'--typo-anchor--font-size': string;
	'--typo-anchor--color-light': string;
	'--typo-anchor--color-dark': string;
	'--typo-anchor--line-height': string;
	'--typo-anchor--font-weight': string;
	'--typo-anchor--font-style': string;
	'--typo-anchor--letter-spacing': string;
	'--typo-anchor--font-stretch': string;
	'--typo-anchor--font-kerning': string;
	'--typo-anchor--text-shadow': string;
	'--typo-anchor--word-spacing': string;
	'--typo-anchor--hyphens': string;
	'--typo-anchor--text-transform': string;
	// Anchors — Decoration (default state)
	'--typo-anchor--text-decoration-line': string;
	'--typo-anchor--text-decoration-color': string;
	'--typo-anchor--text-decoration-style': string;
	'--typo-anchor--text-decoration-thickness': string;
	'--typo-anchor--text-underline-offset': string;
	'--typo-anchor--text-underline-position': string;
	// Anchors — Decoration (hover state)
	'--typo-anchor--hover--text-decoration-line': string;
	'--typo-anchor--hover--text-decoration-color': string;
	'--typo-anchor--hover--text-decoration-style': string;
	'--typo-anchor--hover--text-decoration-thickness': string;
	'--typo-anchor--hover--text-underline-offset': string;
	'--typo-anchor--hover--text-underline-position': string;
	// Anchors — Decoration (active state)
	'--typo-anchor--active--text-decoration-line': string;
	'--typo-anchor--active--text-decoration-color': string;
	'--typo-anchor--active--text-decoration-style': string;
	'--typo-anchor--active--text-decoration-thickness': string;
	'--typo-anchor--active--text-underline-offset': string;
	'--typo-anchor--active--text-underline-position': string;
	// Anchors — Decoration (focus state)
	'--typo-anchor--focus--text-decoration-line': string;
	'--typo-anchor--focus--text-decoration-color': string;
	'--typo-anchor--focus--text-decoration-style': string;
	'--typo-anchor--focus--text-decoration-thickness': string;
	'--typo-anchor--focus--text-underline-offset': string;
	'--typo-anchor--focus--text-underline-position': string;
}

export interface SettingsSpacing {
	'--spacing': string; // rem
}

export interface SettingsEdges {
	'--radius-base': string; // rem
	'--radius-container': string; // rem
	'--default-border-width': string; // px
	'--default-ring-width': string; // px
	'--default-outline-width': string; // px
}

export interface SettingsCorners {
	'--corner-shape-base': string;
	'--corner-shape-container': string;
}

export interface SettingsBrand {
	'--color-brand-light': string;
	'--color-brand-contrast-light': string;
	'--color-brand-dark': string;
	'--color-brand-contrast-dark': string;
}

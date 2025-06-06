import * as constants from '$lib/constants/generator';
import type {
	Globals,
	SettingsCore,
	SettingsColors,
	SettingsBackgrounds,
	SettingsTypography,
	SettingsSpacing,
	SettingsEdges
} from './types';

// Globals

export const globals: Globals = $state({
	/** Set the preview panel: preview | code */
	panel: 'preview',
	activeColor: 'primary'
});

// Control Settings ---

export const settingsCore: SettingsCore = $state({
	name: ''
});

export const settingsColors: SettingsColors = $state({
	// primary
	'--color-primary-50': '#d3e5ff',
	'--color-primary-100': '#a9cefd',
	'--color-primary-200': '#7fb6fa',
	'--color-primary-300': '#559ff8',
	'--color-primary-400': '#2b87f5',
	'--color-primary-500': '#0170f3',
	'--color-primary-600': '#0361d2',
	'--color-primary-700': '#0453b2',
	'--color-primary-800': '#064491',
	'--color-primary-900': '#073671',
	'--color-primary-950': '#092750',
	'--color-primary-contrast-dark': 'var(--color-primary-950)',
	'--color-primary-contrast-light': 'var(--color-primary-50)',
	'--color-primary-contrast-50': 'var(--color-primary-contrast-dark)',
	'--color-primary-contrast-100': 'var(--color-primary-contrast-dark)',
	'--color-primary-contrast-200': 'var(--color-primary-contrast-dark)',
	'--color-primary-contrast-300': 'var(--color-primary-contrast-dark)',
	'--color-primary-contrast-400': 'var(--color-primary-contrast-dark)',
	'--color-primary-contrast-500': 'var(--color-primary-contrast-light)',
	'--color-primary-contrast-600': 'var(--color-primary-contrast-light)',
	'--color-primary-contrast-700': 'var(--color-primary-contrast-light)',
	'--color-primary-contrast-800': 'var(--color-primary-contrast-light)',
	'--color-primary-contrast-900': 'var(--color-primary-contrast-light)',
	'--color-primary-contrast-950': 'var(--color-primary-contrast-light)',
	// secondary
	'--color-secondary-50': '#d8ccf1',
	'--color-secondary-100': '#c5abe9',
	'--color-secondary-200': '#b28ae1',
	'--color-secondary-300': '#9f6ada',
	'--color-secondary-400': '#8c49d2',
	'--color-secondary-500': '#7928ca',
	'--color-secondary-600': '#6b25b6',
	'--color-secondary-700': '#5d22a3',
	'--color-secondary-800': '#4e1f8f',
	'--color-secondary-900': '#401c7c',
	'--color-secondary-950': '#321968',
	'--color-secondary-contrast-dark': 'var(--color-secondary-950)',
	'--color-secondary-contrast-light': 'var(--color-secondary-50)',
	'--color-secondary-contrast-50': 'var(--color-secondary-contrast-dark)',
	'--color-secondary-contrast-100': 'var(--color-secondary-contrast-dark)',
	'--color-secondary-contrast-200': 'var(--color-secondary-contrast-dark)',
	'--color-secondary-contrast-300': 'var(--color-secondary-contrast-dark)',
	'--color-secondary-contrast-400': 'var(--color-secondary-contrast-light)',
	'--color-secondary-contrast-500': 'var(--color-secondary-contrast-light)',
	'--color-secondary-contrast-600': 'var(--color-secondary-contrast-light)',
	'--color-secondary-contrast-700': 'var(--color-secondary-contrast-light)',
	'--color-secondary-contrast-800': 'var(--color-secondary-contrast-light)',
	'--color-secondary-contrast-900': 'var(--color-secondary-contrast-light)',
	'--color-secondary-contrast-950': 'var(--color-secondary-contrast-light)',
	// tertiary
	'--color-tertiary-50': '#ffcefb',
	'--color-tertiary-100': '#ffa5e2',
	'--color-tertiary-200': '#ff7cca',
	'--color-tertiary-300': '#ff52b1',
	'--color-tertiary-400': '#ff2999',
	'--color-tertiary-500': '#ff0080',
	'--color-tertiary-600': '#e40074',
	'--color-tertiary-700': '#c80068',
	'--color-tertiary-800': '#ad005b',
	'--color-tertiary-900': '#91004f',
	'--color-tertiary-950': '#760043',
	'--color-tertiary-contrast-dark': 'var(--color-tertiary-950)',
	'--color-tertiary-contrast-light': 'var(--color-tertiary-50)',
	'--color-tertiary-contrast-50': 'var(--color-tertiary-contrast-dark)',
	'--color-tertiary-contrast-100': 'var(--color-tertiary-contrast-dark)',
	'--color-tertiary-contrast-200': 'var(--color-tertiary-contrast-dark)',
	'--color-tertiary-contrast-300': 'var(--color-tertiary-contrast-light)',
	'--color-tertiary-contrast-400': 'var(--color-tertiary-contrast-light)',
	'--color-tertiary-contrast-500': 'var(--color-tertiary-contrast-light)',
	'--color-tertiary-contrast-600': 'var(--color-tertiary-contrast-light)',
	'--color-tertiary-contrast-700': 'var(--color-tertiary-contrast-light)',
	'--color-tertiary-contrast-800': 'var(--color-tertiary-contrast-light)',
	'--color-tertiary-contrast-900': 'var(--color-tertiary-contrast-light)',
	'--color-tertiary-contrast-950': 'var(--color-tertiary-contrast-light)',
	// success
	'--color-success-50': '#aaffec',
	'--color-success-100': '#98f9e4',
	'--color-success-200': '#86f4db',
	'--color-success-300': '#74eed3',
	'--color-success-400': '#62e9ca',
	'--color-success-500': '#50e3c2',
	'--color-success-600': '#41bfa4',
	'--color-success-700': '#329b85',
	'--color-success-800': '#237667',
	'--color-success-900': '#145248',
	'--color-success-950': '#052e2a',
	'--color-success-contrast-dark': 'var(--color-success-950)',
	'--color-success-contrast-light': 'var(--color-success-50)',
	'--color-success-contrast-50': 'var(--color-success-contrast-dark)',
	'--color-success-contrast-100': 'var(--color-success-contrast-dark)',
	'--color-success-contrast-200': 'var(--color-success-contrast-dark)',
	'--color-success-contrast-300': 'var(--color-success-contrast-dark)',
	'--color-success-contrast-400': 'var(--color-success-contrast-dark)',
	'--color-success-contrast-500': 'var(--color-success-contrast-dark)',
	'--color-success-contrast-600': 'var(--color-success-contrast-light)',
	'--color-success-contrast-700': 'var(--color-success-contrast-light)',
	'--color-success-contrast-800': 'var(--color-success-contrast-light)',
	'--color-success-contrast-900': 'var(--color-success-contrast-light)',
	'--color-success-contrast-950': 'var(--color-success-contrast-light)',
	// warning
	'--color-warning-50': '#ffefcf',
	'--color-warning-100': '#fde4b7',
	'--color-warning-200': '#fcd99e',
	'--color-warning-300': '#facf86',
	'--color-warning-400': '#f9c46d',
	'--color-warning-500': '#f7b955',
	'--color-warning-600': '#e6a345',
	'--color-warning-700': '#d58e35',
	'--color-warning-800': '#c37825',
	'--color-warning-900': '#b26315',
	'--color-warning-950': '#a14d05',
	'--color-warning-contrast-dark': 'var(--color-warning-950)',
	'--color-warning-contrast-light': 'var(--color-warning-50)',
	'--color-warning-contrast-50': 'var(--color-warning-contrast-dark)',
	'--color-warning-contrast-100': 'var(--color-warning-contrast-dark)',
	'--color-warning-contrast-200': 'var(--color-warning-contrast-dark)',
	'--color-warning-contrast-300': 'var(--color-warning-contrast-dark)',
	'--color-warning-contrast-400': 'var(--color-warning-contrast-dark)',
	'--color-warning-contrast-500': 'var(--color-warning-contrast-dark)',
	'--color-warning-contrast-600': 'var(--color-warning-contrast-light)',
	'--color-warning-contrast-700': 'var(--color-warning-contrast-light)',
	'--color-warning-contrast-800': 'var(--color-warning-contrast-light)',
	'--color-warning-contrast-900': 'var(--color-warning-contrast-light)',
	'--color-warning-contrast-950': 'var(--color-warning-contrast-light)',
	// error
	'--color-error-50': '#f7d4d6',
	'--color-error-100': '#f6b6b5',
	'--color-error-200': '#f59895',
	'--color-error-300': '#f57b74',
	'--color-error-400': '#f45d54',
	'--color-error-500': '#f33f33',
	'--color-error-600': '#e03229',
	'--color-error-700': '#cd261f',
	'--color-error-800': '#ba1914',
	'--color-error-900': '#a70d0a',
	'--color-error-950': '#940000',
	'--color-error-contrast-dark': 'var(--color-error-950)',
	'--color-error-contrast-light': 'var(--color-error-50)',
	'--color-error-contrast-50': 'var(--color-error-contrast-dark)',
	'--color-error-contrast-100': 'var(--color-error-contrast-dark)',
	'--color-error-contrast-200': 'var(--color-error-contrast-dark)',
	'--color-error-contrast-300': 'var(--color-error-contrast-dark)',
	'--color-error-contrast-400': 'var(--color-error-contrast-dark)',
	'--color-error-contrast-500': 'var(--color-error-contrast-light)',
	'--color-error-contrast-600': 'var(--color-error-contrast-light)',
	'--color-error-contrast-700': 'var(--color-error-contrast-light)',
	'--color-error-contrast-800': 'var(--color-error-contrast-light)',
	'--color-error-contrast-900': 'var(--color-error-contrast-light)',
	'--color-error-contrast-950': 'var(--color-error-contrast-light)',
	// surface
	'--color-surface-50': '#ffffff',
	'--color-surface-100': '#e0e0e0',
	'--color-surface-200': '#c2c2c2',
	'--color-surface-300': '#a3a3a3',
	'--color-surface-400': '#858585',
	'--color-surface-500': '#666666',
	'--color-surface-600': '#555555',
	'--color-surface-700': '#444444',
	'--color-surface-800': '#333333',
	'--color-surface-900': '#222222',
	'--color-surface-950': '#111111',
	'--color-surface-contrast-dark': 'var(--color-surface-950)',
	'--color-surface-contrast-light': 'var(--color-surface-50)',
	'--color-surface-contrast-50': 'var(--color-surface-contrast-dark)',
	'--color-surface-contrast-100': 'var(--color-surface-contrast-dark)',
	'--color-surface-contrast-200': 'var(--color-surface-contrast-dark)',
	'--color-surface-contrast-300': 'var(--color-surface-contrast-dark)',
	'--color-surface-contrast-400': 'var(--color-surface-contrast-light)',
	'--color-surface-contrast-500': 'var(--color-surface-contrast-light)',
	'--color-surface-contrast-600': 'var(--color-surface-contrast-light)',
	'--color-surface-contrast-700': 'var(--color-surface-contrast-light)',
	'--color-surface-contrast-800': 'var(--color-surface-contrast-light)',
	'--color-surface-contrast-900': 'var(--color-surface-contrast-light)',
	'--color-surface-contrast-950': 'var(--color-surface-contrast-light)'
});

export const settingsBackgrounds: SettingsBackgrounds = $state({
	'--body-background-color': 'var(--color-surface-50)',
	'--body-background-color-dark': 'var(--color-surface-950)'
});

// Reference: https://designcode.io/typographic-scales
export const settingsTypography: SettingsTypography = $state({
	// Scale Factor
	'--text-scaling': '1.067',
	// Base
	'--base-font-color': 'var(--color-surface-950)',
	'--base-font-color-dark': 'var(--color-surface-50)',
	'--base-font-family': constants.fontFamilies[1],
	'--base-font-size': 'inherit',
	'--base-line-height': 'inherit',
	'--base-font-weight': 'normal',
	'--base-font-style': 'normal',
	'--base-letter-spacing': '0em',
	// Headings
	'--heading-font-color': 'inherit',
	'--heading-font-color-dark': 'inherit',
	'--heading-font-family': 'inherit',
	'--heading-font-weight': 'bold',
	'--heading-font-style': 'normal',
	'--heading-letter-spacing': 'inherit',
	// Anchors
	'--anchor-font-color': 'var(--color-primary-500)',
	'--anchor-font-color-dark': 'var(--color-primary-500)',
	'--anchor-font-family': 'inherit',
	'--anchor-font-size': 'inherit',
	'--anchor-line-height': 'inherit',
	'--anchor-font-weight': 'inherit',
	'--anchor-font-style': 'inherit',
	'--anchor-letter-spacing': 'inherit',
	'--anchor-text-decoration': 'none',
	'--anchor-text-decoration-hover': 'underline',
	'--anchor-text-decoration-active': 'none',
	'--anchor-text-decoration-focus': 'none'
});

// Reference: https://tailwindcss.com/docs/customizing-spacing
export const settingsSpacing: SettingsSpacing = $state({
	'--spacing': '0.25rem'
});

export const settingsEdges: SettingsEdges = $state({
	'--radius-base': '0.375rem',
	'--radius-container': '0.75rem',
	'--default-border-width': '1px',
	'--default-divide-width': '1px',
	'--default-ring-width': '1px'
});

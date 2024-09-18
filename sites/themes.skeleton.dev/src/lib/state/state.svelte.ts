import * as constants from '$lib/constants/constants';
import type { SettingsCore, SettingsColors, SettingsTypography, SettingsSpacing, SettingsEdges } from './types';

// State ---

export const settingsCore: SettingsCore = $state({
	name: ''
});

export const settingsColors: SettingsColors = $state({
	foo: 'bar'
});

export const settingsTypography: SettingsTypography = $state({
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

export const settingsSpacing: SettingsSpacing = $state({
	'--space-scale-factor': 1.0
});

export const settingsEdges: SettingsEdges = $state({
	'--radii-default': 6, // px
	'--radii-container': 12, // px
	'--border-width-default': 1, // px
	'--divide-width-default': 1, // px
	'--outline-width-default': 1, // px
	'--ring-width-default': 1 // px
});

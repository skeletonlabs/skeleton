import catppuccin from './catppuccin.js';
import cerberus from './cerberus.js';
import concord from './concord.js';
import jupiter from './jupiter.js';
import mint from './mint.js';
import mona from './mona.js';
import nosh from './nosh.js';
import pine from './pine.js';
import reign from './reign.js';
import rose from './rose.js';
import terminus from './terminus.js';
import vox from './vox.js';
// v2 Legacy
import crimson from './legacy/crimson.js';
import hamlindigo from './legacy/hamlindigo.js';
import legacy from './legacy/legacy.js';
import modern from './legacy/modern.js';
import nouveau from './legacy/nouveau.js';
import rocket from './legacy/rocket.js';
import sahara from './legacy/sahara.js';
import seafoam from './legacy/seafoam.js';
import vintage from './legacy/vintage.js';
import wintry from './legacy/wintry.js';

export {
	catppuccin,
	cerberus,
	jupiter,
	mint,
	mona,
	nosh,
	pine,
	reign,
	rose,
	terminus,
	concord,
	vox,
	// v2 Legacy
	crimson,
	hamlindigo,
	legacy,
	modern,
	nouveau,
	rocket,
	sahara,
	seafoam,
	vintage,
	wintry
};

export type Theme = {
	name: string;
	properties: ThemeProperties;
	metadata: {
		version: string;
		emoji?: string;
	};
};

export type ThemeProperties = {
	// Spacing
	// https://tailwindcss.com/docs/customizing-spacing
	'--space-scale-factor': string;
	// Typography
	// https://designcode.io/typographic-scales
	'--type-scale-factor': string;
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
	'--base-font-color': string;
	'--base-font-color-dark': string;
	'--base-font-family': string;
	'--base-font-size': string;
	'--base-line-height': string;
	'--base-font-weight': string;
	'--base-font-style': string;
	'--base-letter-spacing': string;
	'--heading-font-color': string;
	'--heading-font-color-dark': string;
	'--heading-font-family': string;
	'--heading-font-weight': string;
	'--heading-font-style': string;
	'--heading-letter-spacing': string;
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
	// Backgrounds
	'--body-background-color': string;
	'--body-background-color-dark': string;
	// Edges
	'--radii-default': string;
	'--radii-container': string;
	'--border-width-default': string;
	'--ring-width-default': string;
	'--outline-width-default': string;
	'--divide-width-default': string;
	// Colors
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
};

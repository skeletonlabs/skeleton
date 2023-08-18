import crimson from './crimson.js';
import goldNouveau from './gold-nouveau.js';
import hamlindigo from './hamlindigo.js';
import modern from './modern.js';
import rocket from './rocket.js';
import sahara from './sahara.js';
import seafoam from './seafoam.js';
import skeleton from './skeleton.js';
import vintage from './vintage.js';
import wintry from './wintry.js';
import type { CSSRuleObject } from 'tailwindcss/types/config.js';

export const themes = { crimson, 'gold-nouveau': goldNouveau, hamlindigo, modern, rocket, sahara, seafoam, skeleton, vintage, wintry };

export type PresetThemeName = ObjectKeys<typeof themes>;

export function getThemeProperties(themeName: PresetThemeName) {
	return themes[themeName].properties;
}

export type ObjectValues<T> = T[keyof T];
export type ObjectKeys<T> = keyof T;

export type BaseTheme = {
	name: string;
	properties: ThemeProperties;
	properties_dark: Partial<ThemeProperties>;
};

export type PresetTheme = BaseTheme & {
	enhancements: CSSRuleObject;
};

export type ThemeProperties = {
	/* =~= Theme Properties =~= */
	'--theme-font-family-base': string;
	'--theme-font-family-heading': string;
	'--theme-font-color-base': string;
	'--theme-font-color-dark': string;
	'--theme-rounded-base': string;
	'--theme-rounded-container': string;
	'--theme-border-base': string;
	/* =~= Theme On-X Colors =~= */
	'--on-primary': string;
	'--on-secondary': string;
	'--on-tertiary': string;
	'--on-success': string;
	'--on-warning': string;
	'--on-error': string;
	'--on-surface': string;
	/* =~= Theme Colors  =~= */
	/* primary */
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
	/* secondary */
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
	/* tertiary */
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
	/* success */
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
	/* warning */
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
	/* error */
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
	/* surface */
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
};

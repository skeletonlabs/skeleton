import { get, type Writable } from 'svelte/store';
import { localStorageStore } from '$lib/utilities/LocalStorageStore/LocalStorageStore';
import { genHexPalette, getTailwindColor } from './utils';
import type { SemanticNames, TailwindColorObject } from '$lib/tailwind/colors';

// Mode - T: Tailwind | F: Custom
export const storeMode: Writable<boolean> = localStorageStore('storeMode', true);

// Live Preview Enabled State
export const storePreview: Writable<boolean> = localStorageStore('storePreview', false);

// Tailwind: Form Values
export const storeTailwindForm: Writable<Record<SemanticNames, string>> = localStorageStore('storeTailwindForm', {
	primary: 'emerald',
	accent: 'indigo',
	tertiary: 'yellow',
	warning: 'rose',
	surface: 'gray'
});

// Tailwind: Generated Palette Colors
export const storeTailwindPalette: Writable<Record<SemanticNames, TailwindColorObject>> = localStorageStore('storeTailwindPalette', {
	primary: getTailwindColor(get(storeTailwindForm).primary),
	accent: getTailwindColor(get(storeTailwindForm).accent),
	tertiary: getTailwindColor(get(storeTailwindForm).tertiary),
	warning: getTailwindColor(get(storeTailwindForm).warning),
	surface: getTailwindColor(get(storeTailwindForm).surface)
});

// Hex: Form Values
export const storeHexForm: Writable<Record<SemanticNames, string>> = localStorageStore('storeHexForm', {
	primary: getTailwindColor('emerald').shades['500'].hex,
	accent: getTailwindColor('indigo').shades['500'].hex,
	tertiary: getTailwindColor('yellow').shades['500'].hex,
	warning: getTailwindColor('rose').shades['500'].hex,
	surface: getTailwindColor('gray').shades['500'].hex
});

// Hex: Generated Palette Colors
export const storeHexPalette: Writable<Record<SemanticNames, TailwindColorObject>> = localStorageStore('storeHexPalette', {
	primary: genHexPalette('primary', get(storeHexForm).primary),
	accent: genHexPalette('accent', get(storeHexForm).accent),
	tertiary: genHexPalette('tertiary', get(storeHexForm).tertiary),
	warning: genHexPalette('warning', get(storeHexForm).warning),
	surface: genHexPalette('surface', get(storeHexForm).surface)
});

export type CustomisableAttributes = 'colors' | 'borderBase' | 'fontFamilyHeading' | 'fontFamilyBase' | 'fontColorBase' | 'fontColorDark' | 'roundedBase' | 'roundedContainer';

// Settings Form Data
export const storeFormData: Writable<Record<CustomisableAttributes, string>> = localStorageStore('storeFormData', {
	colors: '',
	borderBase: '1px',
	fontFamilyHeading: 'system',
	fontFamilyBase: 'sans',
	fontColorBase: 'var(--color-surface-900)',
	fontColorDark: 'var(--color-surface-50)',
	roundedBase: '4px',
	roundedContainer: '8px'
});

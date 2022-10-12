import { get, type Writable } from 'svelte/store';
import { localStorageStore } from '$lib/utilities/LocalStorageStore/LocalStorageStore';
import { genHexPalette, getTailwindColor } from './utils';

// Mode - T: Tailwind | F: Custom
export let storeMode: Writable<boolean> = localStorageStore('storeMode', true);

// Live Preview Enabled State
export let storePreview: Writable<boolean> = localStorageStore('storePreview', false);

// Tailwind: Form Values
export let storeTailwindForm: Writable<any> = localStorageStore('storeTailwindForm', {
	primary: 'emerald',
	accent: 'indigo',
	ternary: 'yellow',
	warning: 'rose',
	surface: 'gray'
});

// Tailwind: Generated Palette Colors
export let storeTailwindPalette: Writable<any> = localStorageStore('storeTailwindPalette', {
	primary: getTailwindColor(get(storeTailwindForm).primary),
	accent: getTailwindColor(get(storeTailwindForm).accent),
	ternary: getTailwindColor(get(storeTailwindForm).ternary),
	warning: getTailwindColor(get(storeTailwindForm).warning),
	surface: getTailwindColor(get(storeTailwindForm).surface)
});

// Hex: Form Values
export let storeHexForm: Writable<any> = localStorageStore('storeHexForm', {
	primary: getTailwindColor('emerald').shades['500'].hex,
	accent: getTailwindColor('indigo').shades['500'].hex,
	ternary: getTailwindColor('yellow').shades['500'].hex,
	warning: getTailwindColor('rose').shades['500'].hex,
	surface: getTailwindColor('gray').shades['500'].hex
});

// Hex: Generated Palette Colors
export let storeHexPalette: Writable<any> = localStorageStore('storeHexPalette', {
	primary: genHexPalette('primary', get(storeHexForm).primary),
	accent: genHexPalette('accent', get(storeHexForm).accent),
	ternary: genHexPalette('ternary', get(storeHexForm).ternary),
	warning: genHexPalette('warning', get(storeHexForm).warning),
	surface: genHexPalette('surface', get(storeHexForm).surface)
});

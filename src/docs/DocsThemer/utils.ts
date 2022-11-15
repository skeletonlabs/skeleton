import { get } from 'svelte/store';

// Types
import type { HexRgb, SemanticNames, TailwindColorObject, TailwindNumbers } from '../../lib/tailwind/colors';

// Helpers
// @ts-ignore
import paletteGenerator from '@bobthered/tailwindcss-palette-generator';
import { tailwindDefaultColors, tailwindNumbers } from '../../lib/tailwind/colors';
import { storeTailwindPalette, storeTailwindForm, storeHexPalette } from './stores';

// Tailwind ---

// Get a Particular Color
export function getTailwindColor(colorName: string) {
	const result = tailwindDefaultColors.find((c) => c.label === colorName);
	if (!result) throw new Error(`Color ${colorName} not found`);
	return result;
}

// Pick Random Color
export function randomTailwindColor() {
	return tailwindDefaultColors[(Math.random() * tailwindDefaultColors.length) | 0];
}

// On selection change
export function onTailwindSelect(): void {
	storeTailwindPalette.set({
		primary: getTailwindColor(get(storeTailwindForm).primary),
		accent: getTailwindColor(get(storeTailwindForm).accent),
		tertiary: getTailwindColor(get(storeTailwindForm).tertiary),
		warning: getTailwindColor(get(storeTailwindForm).warning),
		surface: getTailwindColor(get(storeTailwindForm).surface)
	});
}

// On randomize button click
export function onRandomize(): void {
	const newColors: Record<SemanticNames, TailwindColorObject> = {
		primary: randomTailwindColor(),
		accent: randomTailwindColor(),
		warning: randomTailwindColor(),
		tertiary: randomTailwindColor(),
		surface: randomTailwindColor()
	};
	storeTailwindForm.set({
		primary: newColors.primary.label,
		accent: newColors.accent.label,
		tertiary: newColors.tertiary.label,
		warning: newColors.warning.label,
		surface: newColors.surface.label
	});
	storeTailwindPalette.set({
		primary: newColors.primary,
		accent: newColors.accent,
		warning: newColors.warning,
		tertiary: newColors.tertiary,
		surface: newColors.surface
	});
}

// Hex ---

// Generate Hex Palette - Source: https://github.com/bobthered/tailwindcss-palette-generator
export function genHexPalette(key: SemanticNames, hexColor: string): TailwindColorObject & { source: string } {
	// Generate base palette
	const hexShades: {
		[key in SemanticNames]: {
			[key in TailwindNumbers]: string;
		};
	} = paletteGenerator({ names: [key], colors: [hexColor] });
	// @ts-expect-error It's too much bother to create a new type for the 950 swatch when we're going to bin it immediately.
	delete hexShades[key]['950']; // drop swatch 950
	// Generate RGB values and map data structure
	const hexRgbShades = {} as { [key in TailwindNumbers]: HexRgb };
	Object.values(hexShades[key]).forEach((hexColor, i) => {
		hexRgbShades[tailwindNumbers[i]] = { hex: hexColor, rgb: hexToRgb(hexColor) };
	});
	// Update Hex Palette
	return { label: key, shades: hexRgbShades, source: hexColor };
}

// Hex -> RGB - Source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
export function hexToRgb(hex: string): string {
	hex = hex.replace('#', '');
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	if (result) {
		const color = { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) };
		return `${color.r} ${color.g} ${color.b}`;
	}
	return '(invalid)';
}

// On Input Change
export function onHexInput(key: SemanticNames, hexColor: string): void {
	const regexValidHexCode = new RegExp(/^#[0-9a-f]{6}$/i);
	console.log({ key, hexColor, test: regexValidHexCode.test(hexColor) });
	if (regexValidHexCode.test(hexColor)) {
		// Generate Palette
		let newStoreHexPalette = get(storeHexPalette);
		newStoreHexPalette[key] = genHexPalette(key, hexColor);
		storeHexPalette.set(newStoreHexPalette);
	}
}

// CSS Generation ---

export function genCssColorStrings(colorKey: string, colorSet: TailwindColorObject): string {
	let css = '';
	Object.entries(colorSet.shades).forEach((set, i: number) => {
		const [key, v] = set;
		css += i === 0 ? '' : '\n' + '\t';
		css += `--color-${colorKey}-${key}: ${v['rgb']}; /* ⬅ ${v['hex']} */`;
	});
	return css;
}

// Local Storage ---

export function resetSettings(): void {
	if (confirm('Clear all theme settings and restore the site back to the default settings?')) {
		// Clear Local Storage Values
		localStorage.removeItem('storeMode');
		localStorage.removeItem('storePreview');
		localStorage.removeItem('storeTailwindForm');
		localStorage.removeItem('storeTailwindPalette');
		localStorage.removeItem('storeHexForm');
		localStorage.removeItem('storeHexPalette');
		localStorage.removeItem('storeFormData');
		// Reload Window
		location.reload();
	}
}

// This script is based 'tailwindcolorshades' by Javis V. Pérez:
// https://github.com/javisperez/tailwindcolorshades/blob/master/src/composables/colors.ts
import type { ColorSettings, FormTheme, PassReport } from './types';

import { tailwindNumbers } from '$lib/types';
import chroma from 'chroma-js';
export type Palette = {
	[key: number]: {
		/** The hex color. */
		hex: string;
		/** The overlapping text/fill color. */
		on: string;
	};
};

export function hexToTailwindRgbString(hex: string): string {
	const sanitizedHex = hex.replaceAll('##', '#');
	const color = chroma(sanitizedHex).rgb();
	return `${color[0]} ${color[1]} ${color[2]}`;
}

export function generateA11yOnColor(hex: string): '255 255 255' | '0 0 0' {
	const blackContrast = chroma.contrast(chroma(hex), chroma('#000000'));
	const whiteContrast = chroma.contrast(chroma(hex), chroma('#FFFFFF'));
	return blackContrast > whiteContrast ? '0 0 0' : '255 255 255';
}

export function generatePalette(baseColor: string): Palette {
	if (!chroma.valid(baseColor)) baseColor = '#CCCCCC';
	const hex500 = chroma(baseColor).hex();

	const response: Palette = {
		500: { hex: hex500, on: generateA11yOnColor(hex500) }
	};
	const color = chroma(baseColor);
	const chromaScale = chroma
		.scale([color.set('lch.c', '*0.5').set('lch.l', 100), color, color.set('lch.l', '*0.5').set('lch.h', '+15')])
		.domain([0.05, 0.5, 0.9])
		.correctLightness()
		.mode('lch');

	for (const entry of tailwindNumbers) {
		const number = parseInt(entry);
		const scale = number / 1000;
		response[entry] = {
			hex: chromaScale(scale).hex(),
			on: generateA11yOnColor(chromaScale(scale).hex())
		};
	}
	return response as Palette;
}

type ContrastLevel = 'AA' | 'AAA';
type ContrastSize = 'small' | 'large';

export const contrastLevels: Record<
	ContrastSize,
	{
		[key in ContrastLevel]: number;
	}
> = {
	/** For text that is less than 18pt */
	small: {
		AA: 4.5,
		AAA: 7
	},
	/** For text that is at or is larger than 18pt */
	large: {
		AA: 3,
		AAA: 4.5
	}
};

export function destringRgb(rgbString: string) {
	const rgb = rgbString.match(/(\d+),?\s*(\d+),?\s*(\d+)/); // matches "255, 255, 255" and "255 255 255"
	if (!rgb) throw new Error('Invalid RGB string!');
	return [parseInt(rgb[1], 10), parseInt(rgb[2], 10), parseInt(rgb[3], 10)];
}

export function handleStringColor(colorString: string): string {
	// if it's a css variable
	if (colorString.includes('--')) {
		colorString = colorString.replace(/var\(|\)/g, ''); // grab just the variable name
		const cssVarHydrated = getComputedStyle(document.documentElement).getPropertyValue(colorString).trim();
		return handleStringColor(cssVarHydrated);
	}
	// if it has spaces, it's an rgb string
	if (colorString.includes(' ')) {
		const rgb = destringRgb(colorString);
		return chroma(rgb).hex();
	}

	return chroma(colorString).hex();
}

export function textPasses(
	textColor: string | chroma.Color,
	backgroundColor: string | chroma.Color,
	size: ContrastSize,
	level: ContrastLevel
) {
	const ratio = chroma.contrast(chroma(textColor), chroma(backgroundColor));
	return ratio >= contrastLevels[size][level];
}

export function hexValueIsValid(textColor: string) {
	return /^#[0-9A-F]{6}$/i.test(textColor);
}

/** A catch-all function to give a report on what size and level a given combination achieves.  */
export function getPassReport(textColor: string, backgroundColor: string): PassReport {
	const _textColor = handleStringColor(textColor);
	const _backgroundColor = handleStringColor(backgroundColor);
	const contrast = chroma.contrast(chroma(_textColor), chroma(_backgroundColor));
	const smallAA = textPasses(_textColor, _backgroundColor, 'small', 'AA');
	const smallAAA = textPasses(_textColor, _backgroundColor, 'small', 'AAA');
	const largeAA = textPasses(_textColor, _backgroundColor, 'large', 'AA');
	const largeAAA = textPasses(_textColor, _backgroundColor, 'large', 'AAA');
	const fails = !smallAA && !smallAAA && !largeAA && !largeAAA;
	const AAAEmoji = '<i class="fa-solid fa-heart h-3"></i>';
	const AAEmoji = '<i class="fa-solid fa-star h-3"></i>';
	const largeAAEmoji = '<i class="fa-solid fa-star-half-stroke h-3"></i>';
	const failEmoji = '<i class="fa-solid fa-triangle-exclamation h-3"></i>';
	const report = {
		emoji: smallAAA ? AAAEmoji : smallAA ? AAEmoji : largeAA ? largeAAEmoji : failEmoji,
		note:
			`${_textColor} and ${_backgroundColor} ` +
			(smallAAA
				? 'has great contrast!'
				: smallAA
				? 'is satisfactory for larger text'
				: largeAA
				? 'has poor contrast'
				: 'fails contrast guidelines')
	};
	return {
		textColor: _textColor,
		backgroundColor: _backgroundColor,
		contrast,
		report,
		smallAA,
		smallAAA,
		largeAA,
		largeAAA,
		fails
	};
}

export function generateColorCSS(formTheme: FormTheme): string {
	let newCSS = '';
	const newPalette: Record<string, Palette> = {};
	// Loop store colors
	formTheme.colors.forEach((color: ColorSettings, i: number) => {
		const colorKey = color.key;
		// Generate the new color palette hex/rgb/on values
		newPalette[color.key] = generatePalette(formTheme.colors[i].hex);
		// The color set comment
		newCSS += `/* ${colorKey} | ${newPalette[colorKey][500].hex} */\n\t`;
		// CSS props for shade 50-900 per each color
		for (const [k, v] of Object.entries(newPalette[colorKey])) {
			newCSS += `--color-${colorKey}-${k}: ${hexToTailwindRgbString(v.hex)}; /* ⬅ ${v.hex} */\n\t`;
		}
	});
	return newCSS;
}

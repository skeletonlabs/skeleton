// This script is based 'tailwindcolorshades' by Javis V. Pérez:
// https://github.com/javisperez/tailwindcolorshades/blob/master/src/composables/colors.ts
import { contrastLevels, type ColorSettings, type FormTheme, type PassReport, type ContrastLevel, type ContrastSize } from './types';

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

export const colorSchemes = {
	analogous: {
		distance: '+30'
	},
	// 150 + 210, needs to have some more logic
	// 'split complementary': {
	// 	distance: '+150'
	// },
	triadic: {
		distance: '+120'
	},
	tetradic: {
		distance: '+90'
	}
};

export function hexToTailwindRgbString(hex: string): string {
	const sanitizedHex = hex.replaceAll('##', '#');
	const color = chroma(sanitizedHex).rgb();
	return `${color[0]} ${color[1]} ${color[2]}`;
}

function random(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomizeColors(colors: ColorSettings[], scheme: keyof typeof colorSchemes = 'tetradic') {
	colors.forEach((_, i: number) => {
		// This lets the first, fourth, and sixth colors be generated randomly, with the others being generated as a complementary color
		let color = [1, 2, 4, 5].includes(i)
			? generateComplementaryColor(colors[i - 1].hex, colorSchemes[scheme].distance)
			: chroma.random().set('oklab.l', 0.5).hex();
		if (i === colors.length - 1) color = chroma(color).set('lch.c', random(15, 40)).set('lch.l', random(30, 60)).hex(); // make the last color a bit less saturated
		colors[i].hex = color;
		colors[i].on = generateA11yOnColor(color);
	});
	return colors;
}

function generateComplementaryColor(color: string, distance = '+90'): string {
	const complementaryColor = chroma(color).set('lch.h', distance);
	return complementaryColor.hex();
}

export function generateA11yHex(hex: string) {
	const blackContrast = chroma.contrast(chroma(hex), chroma('#000000'));
	const whiteContrast = chroma.contrast(chroma(hex), chroma('#FFFFFF'));
	return blackContrast > whiteContrast ? '#000000' : '#FFFFFF';
}

export function generateA11yOnColor(hex: string) {
	return generateA11yHex(hex) === '#000000' ? '0 0 0' : '255 255 255';
}

export function generatePalette(baseColor: string): Palette {
	if (!chroma.valid(baseColor)) baseColor = '#CCCCCC';
	const color = chroma(baseColor);

	const response: Palette = {
		500: { hex: color.hex(), on: generateA11yOnColor(color.hex()) }
	};
	const chromaScale = chroma
		.scale([color.set('lch.c', '*0.5').set('lch.l', 100), color, color.set('lch.l', '5').set('lch.h', '+15').set('lch.c', '*2')])
		.domain([0.05, 0.5, 0.95])
		.mode('lch');

	for (const entry of tailwindNumbers) {
		const number = parseInt(entry);
		const scale = number / 1000;
		response[entry] = {
			hex: chromaScale(scale).hex(),
			on: generateA11yOnColor(chromaScale(scale).hex())
		};
	}
	return response;
}

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
	return chroma.valid(textColor);
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
		// Generate the new color palette hex/on values
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

export function generateOnSemantic(colors: ColorSettings[]) {
	const string = `/* =~= Theme On-X Colors =~= */`;
	const onColors = colors.map((color) => {
		if (color.on)
			return `
	--on-${color.key}: ${color.on};`;
	});
	return string + onColors.join('');
}

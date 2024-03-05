import chroma from 'chroma-js';

// State
import {
	stateFormColors,
	stateFormBackgrounds,
	stateFormTypography,
	stateFormSpacing,
	stateFormEdges
} from '$lib/state.svelte';
import { typographicScales, themeStatic, colorShades } from '$lib/constants';

// Generates a color ramp with default settings
function genColorRamp(colorSettings: Record<string, string[]>) {
	// Validate and create color scale
	// prettier-ignore
	const colorScale = chroma.scale([
		chroma.valid(colorSettings.seeds[0]) ? chroma(colorSettings.seeds[0]) : '#CCCCCC',
		chroma.valid(colorSettings.seeds[1]) ? chroma(colorSettings.seeds[1]) : '#CCCCCC',
		chroma.valid(colorSettings.seeds[2]) ? chroma(colorSettings.seeds[2]) : '#CCCCCC',
	]).colors(11);
	// Return the values as RGB
	return {
		50: chroma(colorScale[0]).rgb(),
		100: chroma(colorScale[1]).rgb(),
		200: chroma(colorScale[2]).rgb(),
		300: chroma(colorScale[3]).rgb(),
		400: chroma(colorScale[4]).rgb(),
		500: chroma(colorScale[5]).rgb(),
		600: chroma(colorScale[6]).rgb(),
		700: chroma(colorScale[7]).rgb(),
		800: chroma(colorScale[8]).rgb(),
		900: chroma(colorScale[9]).rgb(),
		950: chroma(colorScale[10]).rgb()
	};
}

// Loops the object of colors to generate a ramp per color
export function genColorPalette(stateFormColors: any) {
	let palette: any = {};
	Object.entries(stateFormColors).map(([colorName, colorSettings]: any) => {
		palette[colorName] = genColorRamp(colorSettings);
	});
	return palette;
}

// Generates the Theme's color properties
export function genColorProperties() {
	let code: any = {};
	let colorsArr: any = Object.entries(genColorPalette(stateFormColors));
	for (const [colorName, colorRamp] of colorsArr) {
		// Base Colors
		colorShades.forEach((cs) => (code[`--color-${colorName}-${cs}`] = colorRamp[cs].join(' ')));
		// Contrast Colors
		code[`--color-${colorName}-contrast-dark`] = stateFormColors[colorName].contrastDark;
		code[`--color-${colorName}-contrast-light`] = stateFormColors[colorName].contrastLight;
		// Base Colors
		colorShades.forEach((cs, i) => {
			const breakpointIndex = stateFormColors[colorName].breakpoint;
			const breakpointValue = i < breakpointIndex ? 'dark' : 'light';
			code[`--color-${colorName}-contrast-${cs}`] = `var(--color-${colorName}-contrast-${breakpointValue})`;
		});
	}
	return code;
}

// Generates the full theme file code
export function genThemeCode() {
	return {
		properties: {
			// Scaling
			'--space-scale-factor': `${stateFormSpacing.factor}`,
			// Typography
			'--type-scale-factor': `${typographicScales[stateFormTypography.factor as number].value}`,
			...themeStatic.typoScale,
			// Typography - Base
			'--base-font-color': stateFormTypography.baseFontColor,
			'--base-font-color-dark': stateFormTypography.baseFontColorDark,
			'--base-font-family': stateFormTypography.baseFontFamily,
			'--base-font-size': stateFormTypography.baseFontsize,
			'--base-line-height': stateFormTypography.baseLineHeight,
			'--base-font-weight': stateFormTypography.baseFontWeight,
			'--base-font-style': stateFormTypography.baseFontStyle,
			'--base-letter-spacing': stateFormTypography.baseLetterSpacing,
			// Typography - Heading
			'--heading-font-color': stateFormTypography.headingFontColor,
			'--heading-font-color-dark': stateFormTypography.headingFontColorDark,
			'--heading-font-family': stateFormTypography.headingFontFamily,
			'--heading-font-size': stateFormTypography.headingFontsize,
			'--heading-line-height': stateFormTypography.headingLineHeight,
			'--heading-font-weight': stateFormTypography.headingFontWeight,
			'--heading-font-style': stateFormTypography.headingFontStyle,
			'--heading-letter-spacing': stateFormTypography.headingLetterSpacing,
			// Typography - Anchor
			'--anchor-font-color': stateFormTypography.anchorFontColor,
			'--anchor-font-color-dark': stateFormTypography.anchorFontColorDark,
			'--anchor-font-family': stateFormTypography.anchorFontFamily,
			'--anchor-font-size': stateFormTypography.anchorFontsize,
			'--anchor-line-height': stateFormTypography.anchorLineHeight,
			'--anchor-font-weight': stateFormTypography.anchorFontWeight,
			'--anchor-font-style': stateFormTypography.anchorFontStyle,
			'--anchor-letter-spacing': stateFormTypography.anchorLetterSpacing,
			'--anchor-text-decoration': stateFormTypography.anchorTextDecoration,
			'--anchor-text-decoration-hover': stateFormTypography.anchorTextDecorationHover,
			'--anchor-text-decoration-active': stateFormTypography.anchorTextDecorationActive,
			'--anchor-text-decoration-focus': stateFormTypography.anchorTextDecorationFocus,
			// Backgrounds
			'--body-background-color': stateFormBackgrounds.bodyBackgroundColor,
			'--body-background-color-dark': stateFormBackgrounds.bodyBackgroundColorDark,
			// Edges ---
			'--radii-default': stateFormEdges.radiiDefault,
			'--radii-container': stateFormEdges.radiiContainer,
			'--border-width-default': stateFormEdges.borderWidthDefault,
			'--ring-width-default': stateFormEdges.ringWidthDefault,
			'--outline-width-default': stateFormEdges.outlineWidthDefault,
			'--divide-width-default': stateFormEdges.divideWidthDefault,
			// Colors
			...genColorProperties()
		}
	};
}

// Generates the Live Preview css code
export function genCssCode() {
	let theme = genThemeCode();
	let rawCssCode = '';
	for (const [key, value] of Object.entries(theme.properties)) {
		rawCssCode += `\t${key}: ${value};\n`;
	}
	return `:root {\n${rawCssCode}\n}`;
}

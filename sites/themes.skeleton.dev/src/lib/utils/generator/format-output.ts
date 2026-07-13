// Theme Output Formatters
// Deep clones each state object and formats as needed.
import type {
	SettingsBackgrounds,
	SettingsBrand,
	SettingsColors,
	SettingsCore,
	SettingsCorners,
	SettingsEdges,
	SettingsSpacing,
	SettingsTypography,
} from '$lib/state/types';
import chroma from 'chroma-js';

/** UTIL: Format from JS Object to CSS properties format. Omits empty-string values (e.g. unset custom fonts). */
function objectToCssProperties(obj: Record<string, string>) {
	let css = '';
	Object.entries(obj).forEach(([key, value]) => {
		if (value === '') return;
		css += `\t${key}: ${value};\n`;
	});
	return `\t${css.trim()}`;
}

// ---

export function formatCore(core: SettingsCore) {
	const _core = JSON.parse(JSON.stringify(core));
	// Strip all special characters from theme name
	_core.name = core.name.trim().replace(/[^a-zA-Z]/g, '');
	// Fallback to `theme` when theme name is empty
	if (_core.name === '') {
		_core.name = 'theme';
	}
	return _core;
}

export function formatTypography(typography: SettingsTypography) {
	const _typography = JSON.parse(JSON.stringify(typography));
	return objectToCssProperties(_typography);
}

/** UTIL: Format typography for the exported theme. Resolves `var(--font-custom-N)` references to their raw
 * font-family value and drops the internal `--font-custom-N` helper properties, since they're only needed
 * to resolve custom fonts for the live preview and aren't part of the documented theme schema. */
export function formatTypographyForTheme(typography: SettingsTypography) {
	const _typography = JSON.parse(JSON.stringify(typography));
	const customFonts: Record<string, string> = {
		'var(--font-custom-1)': _typography['--font-custom-1'],
		'var(--font-custom-2)': _typography['--font-custom-2'],
	};
	Object.keys(_typography).forEach((key) => {
		if (_typography[key] in customFonts) _typography[key] = customFonts[_typography[key]];
	});
	delete _typography['--font-custom-1'];
	delete _typography['--font-custom-2'];
	return objectToCssProperties(_typography);
}

export function formatSpacing(spacing: SettingsSpacing) {
	const _spacing = JSON.parse(JSON.stringify(spacing));
	return objectToCssProperties(_spacing);
}

export function formageEdges(edges: SettingsEdges) {
	const _edges = JSON.parse(JSON.stringify(edges));
	return objectToCssProperties(_edges);
}

export function formatBackgrounds(backgrounds: SettingsBackgrounds) {
	const _backgrounds = JSON.parse(JSON.stringify(backgrounds));
	return objectToCssProperties(_backgrounds);
}

export function formatCorners(corners: SettingsCorners) {
	const _corners = JSON.parse(JSON.stringify(corners));
	return objectToCssProperties(_corners);
}

export function formatBrand(brand: SettingsBrand) {
	const _brand = JSON.parse(JSON.stringify(brand));
	return objectToCssProperties(_brand);
}

export function formatColors(colors: SettingsColors) {
	const _colors = JSON.parse(JSON.stringify(colors));
	Object.keys(_colors).forEach((key) => {
		if (_colors[key].includes('#')) {
			_colors[key] = chroma(_colors[key]).css('oklch');
		}
	});
	return objectToCssProperties(_colors);
}

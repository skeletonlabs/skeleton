// Theme Output Formatters
// Deep clones each state object and formats as needed.
import type {
	SettingsBackgrounds,
	SettingsColors,
	SettingsCore,
	SettingsEdges,
	SettingsSpacing,
	SettingsTypography,
} from '$lib/state/types';
import chroma from 'chroma-js';

/** UTIL: Format from JS Object to CSS properties format. */
function objectToCssProperties(obj: Record<string, string>) {
	let css = '';
	Object.entries(obj).forEach(([key, value]) => (css += `\t${key}: ${value};\n`));
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

export function formatColors(colors: SettingsColors) {
	const _colors = JSON.parse(JSON.stringify(colors));
	Object.keys(_colors).forEach((key) => {
		if (_colors[key].includes('#')) {
			_colors[key] = chroma(_colors[key]).css('oklch');
		}
	});
	return objectToCssProperties(_colors);
}

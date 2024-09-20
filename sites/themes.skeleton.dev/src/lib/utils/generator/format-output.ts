// Theme Output Formatters
// Deep clones each state object and formats as needed.

import chroma from 'chroma-js';
import type { SettingsCore, SettingsBackgrounds, SettingsTypography, SettingsSpacing, SettingsEdges } from '$lib/state/types';

export function formatCore(core: SettingsCore) {
	const _core = JSON.parse(JSON.stringify(core));
	_core.name = core.name.trim().replace(/[^a-zA-Z]/g, ''); // letters only
	return _core;
}

export function formatTypography(typography: SettingsTypography) {
	const _typography = JSON.parse(JSON.stringify(typography));
	return _typography;
}

export function formatSpacing(spacing: SettingsSpacing) {
	const _spacing = JSON.parse(JSON.stringify(spacing));
	_spacing['--space-scale-factor'] = String(_spacing['--space-scale-factor']);
	return _spacing;
}

export function formageEdges(edges: SettingsEdges) {
	const _edges = JSON.parse(JSON.stringify(edges));
	Object.keys(_edges).forEach((key) => {
		if (typeof _edges[key] === 'number') _edges[key] = String(_edges[key] + 'px');
	});
	return _edges;
}

export function formatBackgrounds(backgrounds: SettingsBackgrounds) {
	const _backgrounds = JSON.parse(JSON.stringify(backgrounds));
	return _backgrounds;
}

export function formatColors(colors: Record<string, string>) {
	const _colors = JSON.parse(JSON.stringify(colors));
	Object.keys(_colors).forEach((key) => {
		if (_colors[key].includes('#')) _colors[key] = chroma(_colors[key]).rgb().join(' ');
	});
	return _colors;
}

import type { SettingsCore, SettingsColors, SettingsTypography, SettingsSpacing, SettingsEdges } from './types';

// State ---

/** Core settings, such as theme name. */
export const settingsCore: SettingsCore = $state({
	name: ''
});

export const settingsColors: SettingsColors = $state({
	foo: 'bar'
});

export const settingsTypography: SettingsTypography = $state({
	foo: 'bar'
});

export const settingsSpacing: SettingsSpacing = $state({
	'--space-scale-factor': 1.0
});

export const settingsEdges: SettingsEdges = $state({
	foo: 'bar'
});

import type { SettingsCore, SettingsColors, SettingsTypography, SettingsEdges } from './types';

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

export const settingsEdges: SettingsEdges = $state({
	foo: 'bar'
});

// Import Theme Template
// Reads preset theme properties, updates local generator state.

import { settingsCore } from '$lib/state/generator.svelte';
import { formatColors, formatBackgrounds, formatSpacing, formatEdges, formatTypography } from './format-input';

export function importThemeTemplate(name: string, properties: Record<string, string>) {
	settingsCore.name = name;
	formatColors(properties);
	formatBackgrounds(properties);
	formatSpacing(properties);
	formatEdges(properties);
	formatTypography(properties);
}

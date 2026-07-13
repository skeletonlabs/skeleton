// Utility: Generate Font Install
// Generates the `npm install` command and `@import` lines for any set custom fonts.
import { settingsCustomFonts } from '$lib/state/generator.svelte';

function uniqueFontIds(): string[] {
	const ids = [settingsCustomFonts.font1?.id, settingsCustomFonts.font2?.id].filter((id): id is string => !!id);
	return [...new Set(ids)];
}

export function generateFontInstallCommand(): string {
	const uniqueIds = uniqueFontIds();
	return uniqueIds.length ? `npm install ${uniqueIds.map((id) => `@fontsource/${id}`).join(' ')}` : '';
}

export function generateFontImports(): string {
	return uniqueFontIds()
		.map((id) => `@import '@fontsource/${id}';`)
		.join('\n');
}

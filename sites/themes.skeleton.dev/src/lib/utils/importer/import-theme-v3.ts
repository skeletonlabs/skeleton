// Import v3 Theme File
// Read a legacy v3-format theme file (stable naming across Skeleton v3/v4), migrates its
// property names to v5, then updates local generator state.
import * as constants from '$lib/constants/generator';
import { settingsCore } from '$lib/state/generator.svelte';
import { genColorRamp } from '$lib/utils/generator/colors';
import { applyThemeProperties, parseThemeProperties } from '$lib/utils/importer/import-theme-v5';
import { migrateLegacyThemeKeys } from '$lib/utils/importer/migrate-legacy-keys';

export async function importThemeV3(fileText: string, fileName: string) {
	const properties = parseThemeProperties(fileText);
	const migratedProperties = migrateLegacyThemeKeys(properties);

	// Set Generator State ---
	if (fileName) {
		settingsCore.name = fileName.split('.')[0];
	} // before .css
	applyThemeProperties(migratedProperties);

	/* Generate Contrast Colors */
	/* NOTE: this is a bit redundant, but should get us by for now */
	constants.colorNames.forEach((name) => genColorRamp(false, name));
}

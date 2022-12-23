import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	let theme = cookies.get('theme');
	// If no theme, set theme to skeleton
	if (!theme) {
		cookies.set('theme', 'skeleton');
		theme = 'skeleton';
	}
	// Imports theme as a string
	const themeImport = (await import(`$lib/themes/theme-${theme}.css`)) as { default: string };
	return { currentTheme: themeImport.default };
};

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	let theme = cookies.get('theme');
	// If no theme, set theme to skeleton
	if (!theme) {
		cookies.set('theme', 'skeleton');
		theme = 'skeleton';
	}
	// We return early so we don't return skeleton string as it's already inlined by default
	if (theme === 'skeleton') return {};
	// Imports theme as a string
	const modules = import.meta.glob(`$lib/themes/*.css`, { as: 'raw' });
	return { currentTheme: modules[`/src/lib/themes/theme-${theme}.css`]() };
};

import type { LayoutServerLoad } from './$types';
import { VERCEL_ENV } from '$env/static/private';

export const load: LayoutServerLoad = async ({ cookies }) => {
	let theme = cookies.get('theme');
	// If no theme, set theme to skeleton
	if (!theme) {
		cookies.set('theme', 'skeleton', { path: '/' });
		theme = 'skeleton';
	}
	// Imports theme as a string
	const modules = import.meta.glob(`@skeletonlabs/skeleton/themes/*.css`, { as: 'raw' });
	return { currentTheme: modules[`../../packages/skeleton/src/lib/themes/theme-${theme}.css`](), vercelEnv: VERCEL_ENV };
};

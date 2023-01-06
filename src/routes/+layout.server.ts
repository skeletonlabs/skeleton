import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const theme = cookies.get('theme') ?? 'skeleton';

	// returns the theme so we can have access to it in the page store
	return { theme };
};

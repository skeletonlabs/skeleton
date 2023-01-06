import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	// This action is called when the user clicks the theme button
	setTheme: async ({ cookies, url }) => {
		const theme = url.searchParams.get('theme') ?? 'skeleton';
		const redirectTo = url.searchParams.get('redirectTo');
		cookies.set('theme', theme);

		throw redirect(303, redirectTo ?? '/');
	}
};

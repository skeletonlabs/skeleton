import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	// Redirects and scrolls to the appropriate section
	redirect(301, `/content/blocks#${params.category}`);
};

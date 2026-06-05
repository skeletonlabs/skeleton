import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { resolve } from '$app/paths';

export const load: PageServerLoad = ({ params }) => {
	redirect(301, `${resolve('/content/tutorials')}?tier=${params.tier}`);
};

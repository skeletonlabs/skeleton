import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	submit: async ({ request }) => {
		const formData = await request.formData();
		console.log('formData', formData);

		const name = String(formData.get('name'));
		const flavors = String(formData.get('flavors'));

		console.log('flavors', flavors);

		return { success: true, name, flavors };
	}
};

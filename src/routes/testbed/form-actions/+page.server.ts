import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	submit: async ({ request }) => {
		const formData = await request.formData();
		console.log('formData', formData);

		const data = {
			first_name: String(formData.get('first_name')),
			file_button: String(formData.get('file_button')),
			file_dropzone: String(formData.get('file_dropzone')),
			chips: formData.getAll('chips').join(','),
			listbox_single: String(formData.getAll('listbox_single')),
			listbox_multi: formData.getAll('listbox_multiple').join(',')
		};
		console.log('data', data);

		return { success: true, data };
	}
};

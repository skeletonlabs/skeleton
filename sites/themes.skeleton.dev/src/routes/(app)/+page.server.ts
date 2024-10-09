import { redirect } from '@sveltejs/kit';

export function load() {
	// Redirect: keep in place until the browse
	// section is ready to use by end users.
	redirect(302, '/themes/create');
}

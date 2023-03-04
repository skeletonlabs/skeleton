import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

// This exists because JSDoc doesn't like multiple '-' characters in a line and a lot of our url's have hyphen's, so we do redirects to the natural destination
export const load = (({ params }) => {
	switch (params.destination) {
		case "appbar":
			throw redirect(302, "/components/app-bar")
	}
}) satisfies PageLoad;

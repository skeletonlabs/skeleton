import { form, getRequestEvent } from '$app/server';
import { error, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/auth/auth';
import { LinkAccountSchema } from '$lib/schemas/auth/link-account-schema';

export const linkAccount = form(LinkAccountSchema, async (data) => {
	const event = getRequestEvent();

	try {
		const linkAccount = await auth.api.linkSocialAccount({
			headers: event.request.headers,
			body: {
				provider: data.providerId,
				callbackURL: data.callbackURL,
			},
		});

		if (!linkAccount.redirect || !linkAccount.url) {
			error(500, 'Failed to link account');
		}

		redirect(303, linkAccount.url);
	} catch (e) {
		if (e instanceof Error) {
			throw error(400, e.message);
		}
		throw error(400, 'An unknown error occurred while linking the account');
	}
});

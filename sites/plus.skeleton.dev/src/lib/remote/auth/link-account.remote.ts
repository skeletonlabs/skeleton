import { form, getRequestEvent } from '$app/server';
import { error, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/auth/auth';
import { LinkAccountSchema } from '$lib/schemas/auth/link-account-schema';

export const linkAccount = form(LinkAccountSchema, async (data) => {
	const event = getRequestEvent();

	const link = await auth.api.linkSocialAccount({
		headers: event.request.headers,
		body: {
			provider: data.providerId,
			callbackURL: data.callbackURL,
		},
	});

	if (!link.redirect || !link.url) {
		error(500, 'Failed to link account');
	}

	redirect(303, link.url);
});

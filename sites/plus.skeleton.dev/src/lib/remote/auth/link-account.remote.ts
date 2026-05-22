import { form, getRequestEvent } from '$app/server';
import { error, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/auth/auth';
import { LinkAccountSchema } from '$lib/schemas/auth/link-account-schema';
import { ResultAsync } from 'neverthrow';

export const linkAccount = form(LinkAccountSchema, async (data) => {
	const event = getRequestEvent();

	const linkAccountResult = await ResultAsync.fromPromise(
		auth.api.linkSocialAccount({
			headers: event.request.headers,
			body: {
				provider: data.providerId,
				callbackURL: data.callbackURL,
			},
		}),
		(e) => new Error('Failed to link account', { cause: e }),
	);

	if (linkAccountResult.isErr()) {
		error(500, linkAccountResult.error.message);
	}

	redirect(303, linkAccountResult.value.url);
});

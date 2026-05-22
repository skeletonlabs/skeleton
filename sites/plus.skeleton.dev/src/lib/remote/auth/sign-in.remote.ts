import { form, getRequestEvent } from '$app/server';
import { auth } from '$lib/server/auth/auth';
import { error, redirect } from '@sveltejs/kit';
import { SignInSchema } from '$lib/schemas/auth/sign-in-schema';

export const signIn = form(SignInSchema, async (data) => {
	const event = getRequestEvent();

	const signIn = await auth.api.signInSocial({
		headers: event.request.headers,
		body: {
			provider: data.providerId,
			callbackURL: data.callbackURL,
		},
	});

	if (!signIn.redirect || !signIn.url) {
		error(500, 'Failed to initiate social sign-in');
	}

	redirect(303, signIn.url);
});

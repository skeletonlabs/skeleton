import { form, getRequestEvent } from '$app/server';
import { auth } from '$lib/server/auth/auth';
import { error, redirect } from '@sveltejs/kit';
import { SignInSchema } from '$lib/schemas/auth/sign-in-schema';
import { ResultAsync } from 'neverthrow';

export const signIn = form(SignInSchema, async (data) => {
	const event = getRequestEvent();

	const signInResult = await ResultAsync.fromPromise(
		auth.api.signInSocial({
			headers: event.request.headers,
			body: {
				provider: data.providerId,
				callbackURL: data.callbackURL,
			},
		}),
		(e) => {
			return new Error('Failed to initiate social sign in', {
				cause: e,
			});
		},
	);

	if (signInResult.isErr()) {
		error(400, signInResult.error.message);
	}

	if (signInResult.value.redirect && signInResult.value.url) {
		redirect(303, signInResult.value.url);
	}
});

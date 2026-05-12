import { form, getRequestEvent } from '$app/server';
import { auth } from '$lib/features/auth/auth.server';
import { error, redirect } from '@sveltejs/kit';
import * as v from 'valibot';

export const signIn = form(
	v.object({
		provider: v.picklist(Object.keys(auth.options.socialProviders)),
	}),
	async (data) => {
		const event = getRequestEvent();

		const signIn = await auth.api.signInWithOAuth2({
			headers: event.request.headers,
			body: {
				providerId: data.provider,
			},
		});

		if (!signIn.redirect || !signIn.url) {
			error(500, 'Failed to initiate OAuth2 sign-in');
		}

		redirect(303, signIn.url);
	},
);

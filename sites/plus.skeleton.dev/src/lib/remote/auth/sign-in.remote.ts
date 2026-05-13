import { form, getRequestEvent } from '$app/server';
import { auth } from '$lib/server/auth/auth';
import { error, redirect } from '@sveltejs/kit';
import * as v from 'valibot';
import { supportedOAuthProviders } from '$lib/client/auth/supported-oauth-providers';

export const signIn = form(
	v.object({
		provider: v.picklist(supportedOAuthProviders.map((provider) => provider.id)),
	}),
	async (data) => {
		const event = getRequestEvent();

		const signIn = await auth.api.signInSocial({
			headers: event.request.headers,
			body: {
				provider: data.provider,
			},
		});

		if (!signIn.redirect || !signIn.url) {
			error(500, 'Failed to initiate OAuth2 sign-in');
		}

		redirect(303, signIn.url);
	},
);

import { form, getRequestEvent } from '$app/server';
import { authentication } from '$lib/server/authentication/authentication';
import { error, redirect } from '@sveltejs/kit';
import * as v from 'valibot';
import { supportedOAuthProviders } from '../../client/authentication/supported-oauth-providers';

export const signIn = form(
	v.object({
		provider: v.picklist(supportedOAuthProviders.map((provider) => provider.id)),
	}),
	async (data) => {
		const event = getRequestEvent();

		const signIn = await authentication.api.signInWithOAuth2({
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

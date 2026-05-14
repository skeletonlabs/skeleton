import { form, getRequestEvent } from '$app/server';
import { error, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/auth/auth';
import * as v from 'valibot';
import { supportedOAuthProviders } from '$lib/client/auth/supported-oauth-providers';

export const linkAccount = form(
	v.object({
		providerId: v.picklist(supportedOAuthProviders.map((provider) => provider.id)),
	}),
	async (data) => {
		const event = getRequestEvent();

		const link = await auth.api.linkSocialAccount({
			headers: event.request.headers,
			body: {
				provider: data.providerId,
			},
		});

		if (!link.redirect || !link.url) {
			error(500, 'Failed to link account');
		}

		redirect(303, link.url);
	},
);

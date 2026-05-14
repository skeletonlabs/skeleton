import { form, getRequestEvent } from '$app/server';
import { error } from '@sveltejs/kit';
import { auth } from '$lib/server/auth/auth';
import * as v from 'valibot';
import { supportedOAuthProviders } from '$lib/client/auth/supported-oauth-providers';

export const unlinkAccount = form(
	v.object({
		providerId: v.picklist(supportedOAuthProviders.map((provider) => provider.id)),
	}),
	async (data) => {
		const event = getRequestEvent();

		const unlink = await auth.api.unlinkAccount({
			headers: event.request.headers,
			body: {
				providerId: data.providerId,
			},
		});

		if (!unlink.status) {
			error(500, 'Failed to unlink account');
		}
	},
);

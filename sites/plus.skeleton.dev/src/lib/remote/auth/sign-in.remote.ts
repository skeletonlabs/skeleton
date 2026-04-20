import * as v from 'valibot';
import { form } from '$app/server';
import { error, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/auth/auth';

export const signIn = form(
	v.object({
		provider: v.picklist(Object.keys(auth.options.socialProviders)),
	}),
	async (data) => {
		const signIn = await auth.api.signInSocial({
			body: {
				provider: data.provider,
			},
		});

		if (!signIn.redirect || !signIn.url) {
			error(500, 'Failed to initiate social sign-in');
		}

		redirect(303, signIn.url);
	},
);

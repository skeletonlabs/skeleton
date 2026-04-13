import * as v from 'valibot';
import { form, getRequestEvent } from '$app/server';
import { SUPPORTED_PROVIDERS } from '$lib/auth/supported-providers';
import { error, redirect } from '@sveltejs/kit';

export const signIn = form(
	v.object({
		provider: v.picklist(SUPPORTED_PROVIDERS),
	}),
	async (data) => {
		const event = getRequestEvent();

		const signInResult = await event.locals.supabase.auth.signInWithOAuth({
			provider: data.provider,
			options: {
				redirectTo: 'https://plus.skeleton.dev/auth/callback',
			},
		});

		if (signInResult.error) {
			error(signInResult.error.status ?? 400, signInResult.error.message);
		}

		redirect(303, signInResult.data.url);
	},
);

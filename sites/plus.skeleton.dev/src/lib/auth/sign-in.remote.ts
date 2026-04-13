import * as v from 'valibot';
import { form, getRequestEvent } from '$app/server';
import { SUPPORTED_PROVIDERS } from '$lib/auth/supported-providers';
import { error, redirect } from '@sveltejs/kit';

function getRedirectTo() {
	const path = '/auth/callback';
	if (import.meta.env.DEV) {
		return new URL(path, 'http://localhost:5173').toString();
	}
	if (process.env.VERCEL_ENV === 'production') {
		return new URL(path, `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`).toString();
	}
	return new URL(path, `https://${process.env.VERCEL_URL}`).toString();
}

export const signIn = form(
	v.object({
		provider: v.picklist(SUPPORTED_PROVIDERS),
	}),
	async (data) => {
		const event = getRequestEvent();

		const signInResult = await event.locals.supabase.auth.signInWithOAuth({
			provider: data.provider,
			options: {
				redirectTo: getRedirectTo(),
			},
		});

		if (signInResult.error) {
			error(signInResult.error.status ?? 400, signInResult.error.message);
		}

		redirect(303, signInResult.data.url);
	},
);

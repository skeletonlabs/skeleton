import * as v from 'valibot';
import { form, getRequestEvent } from '$app/server';
import { SUPPORTED_PROVIDERS } from '$lib/auth/supported-providers';
import { error, redirect } from '@sveltejs/kit';
import { dev } from '$app/environment';

function getRedirectTo() {
	const callbackPath = '/auth/callback';
	if (dev) {
		return new URL(callbackPath, 'http://localhost:5173').toString();
	} else if (process.env.VERCEL_ENV === 'preview') {
		return new URL(callbackPath, `https://${process.env.VERCEL_URL}`).toString();
	}
	return new URL(callbackPath, `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`).toString();
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

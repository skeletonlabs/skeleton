import * as v from 'valibot';
import { form } from '$app/server';
import { error, redirect } from '@sveltejs/kit';
import { SUPPORTED_PROVIDERS } from './supported-providers';
import { getSupabase } from './get-supabase.server';

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
		provider: v.picklist(SUPPORTED_PROVIDERS.map((p) => p.name)),
	}),
	async (data) => {
		const supabase = getSupabase();

		const signIn = await supabase.auth.signInWithOAuth({
			provider: data.provider,
			options: {
				redirectTo: getRedirectTo(),
			},
		});

		if (signIn.error) {
			error(signIn.error.status ?? 400, signIn.error.message);
		}

		redirect(303, signIn.data.url);
	},
);

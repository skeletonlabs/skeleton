import * as v from 'valibot';
import { form } from '$app/server';
import { SUPPORTED_PROVIDERS } from './supported-providers';
import { getSupabase } from './get-supabase.remote';
import { error, redirect } from '@sveltejs/kit';

export const signIn = form(
	v.object({
		provider: v.picklist(SUPPORTED_PROVIDERS),
	}),
	async (data) => {
		const supabase = await getSupabase();

		const signInResult = await supabase.auth.signInWithOAuth({
			provider: data.provider,
		});

		if (signInResult.error) {
			error(400, signInResult.error.message);
		}

		redirect(303, signInResult.data.url);
	},
);

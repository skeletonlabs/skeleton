import * as v from 'valibot';
import { form } from '$app/server';
import { error } from '@sveltejs/kit';
import { getSupabase } from './get-supabase.server';

export const signOut = form(v.object({}), async () => {
	const supabase = getSupabase();

	const signOut = await supabase.auth.signOut();

	if (signOut.error) {
		error(signOut.error.status ?? 400, signOut.error.message);
	}
});

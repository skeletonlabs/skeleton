import { query } from '$app/server';
import { getSupabase } from './get-supabase.server';
import { getUser } from './get-user.remote';

export const getProfile = query(async () => {
	const supabase = getSupabase();

	const user = await getUser();

	if (!user) {
		return null;
	}

	const profile = await supabase.from('profiles').select('*').eq('id', user.id).single();

	if (profile.error) {
		return null;
	}

	return profile.data;
});

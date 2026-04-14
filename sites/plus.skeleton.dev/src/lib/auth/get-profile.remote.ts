import { query } from '$app/server';
import { getSupabase } from './get-supabase.server';

export const getProfile = query(async () => {
	const supabase = getSupabase();

	const session = await supabase.auth.getSession();

	if (session.error || !session.data.session) {
		return null;
	}

	const profile = await supabase.from('profiles').select('*').eq('id', session.data.session.user.id).single();

	if (profile.error) {
		return null;
	}

	return profile.data;
});

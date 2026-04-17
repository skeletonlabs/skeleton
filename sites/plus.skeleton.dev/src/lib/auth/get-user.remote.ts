import { query } from '$app/server';
import { getSupabase } from './get-supabase.server';

export const getUser = query(async () => {
	const supabase = getSupabase();

	const session = await supabase.auth.getSession();

	if (session.error || !session.data.session) {
		return null;
	}

	const user = await supabase.auth.getUser();

	if (user.error) {
		return null;
	}

	return user.data.user;
});

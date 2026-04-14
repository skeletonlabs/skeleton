import { query } from '$app/server';
import { getSupabase } from './get-supabase.server';

export const getUser = query(async () => {
	const supabase = getSupabase();

	const user = await supabase.auth.getUser();

	if (user.error) {
		return null;
	}

	return user.data.user;
});

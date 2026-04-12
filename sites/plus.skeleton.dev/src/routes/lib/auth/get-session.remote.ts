import { query } from '$app/server';
import { getSupabase } from './get-supabase.remote';

export const getSession = query(async () => {
	const supabase = await getSupabase();

	const sessionResult = await supabase.auth.getSession();

	if (sessionResult.error) {
		return { session: null, user: null };
	}

	const userResult = await supabase.auth.getUser();
	
	if (userResult.error) {
		// JWT validation has failed
		return { session: null, user: null };
	}

	return {
		session: sessionResult.data.session,
		user: userResult.data.user,
	};
});

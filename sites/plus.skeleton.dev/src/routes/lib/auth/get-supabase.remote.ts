import { getRequestEvent, query } from '$app/server';

export const getSupabase = query(async () => {
	const event = getRequestEvent();
	return event.locals.supabase;
});

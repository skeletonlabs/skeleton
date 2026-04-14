import { getRequestEvent } from '$app/server';

export function getSupabase() {
	const event = getRequestEvent();

	return event.locals.supabase;
}

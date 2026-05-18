import { getRequestEvent, query } from '$app/server';

export const getUser = query(async () => {
	const event = getRequestEvent();
	return event.locals.user;
});

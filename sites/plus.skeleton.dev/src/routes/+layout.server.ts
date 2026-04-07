export const load = async (event) => {
	const { session, user } = await event.locals.safeGetSession();

	return {
		session,
		user,
		cookies: event.cookies.getAll(),
	};
};

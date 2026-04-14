import { error, redirect, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (event) => {
	const code = event.url.searchParams.get('code') as string;

	if (!code) {
		error(400, 'Authentication failed. No code provided.');
	}

	const next = event.url.searchParams.get('next') ?? '/';

	const exchangeResult = await event.locals.supabase.auth.exchangeCodeForSession(code);

	if (exchangeResult.error) {
		error(400, exchangeResult.error.message);
	}

	redirect(303, `/${next.slice(1)}`);
};

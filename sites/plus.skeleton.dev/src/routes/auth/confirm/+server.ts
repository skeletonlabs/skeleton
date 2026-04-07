import { redirect } from '@sveltejs/kit';
import { type EmailOtpType } from '@supabase/supabase-js';

export const GET = async (event) => {
	const token_hash = event.url.searchParams.get('token_hash') as string;
	const type = event.url.searchParams.get('type') as EmailOtpType | null;
	const next = event.url.searchParams.get('next') ?? '/';

	/**
	 * Clean up the redirect URL by deleting the Auth flow parameters.
	 *
	 * `next` is preserved for now, because it's needed in the error case.
	 */
	const redirectTo = new URL(event.url);
	redirectTo.pathname = next;
	redirectTo.searchParams.delete('token_hash');
	redirectTo.searchParams.delete('type');

	if (token_hash && type) {
		const { error } = await event.locals.supabase.auth.verifyOtp({ token_hash, type });
		if (!error) {
			redirectTo.searchParams.delete('next');
			redirect(303, redirectTo);
		}
	}

	// return the user to an error page with some instructions
	// TODO: Create a proper error page and pass the error message along
	redirectTo.pathname = '/auth/error';
	redirect(303, redirectTo);
};

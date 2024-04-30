import type { LayoutServerLoad } from './$types';

// @ts-ignore only available on deployment to Vercel:
import { VERCEL_ENV } from '$env/static/private';

export const load: LayoutServerLoad = async () => {
	return { vercelEnv: VERCEL_ENV };
};

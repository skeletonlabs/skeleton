import type { LayoutServerLoad } from './$types';
import { VERCEL_ENV } from '$env/static/private';

export const load: LayoutServerLoad = async () => {
	return { vercelEnv: VERCEL_ENV };
};

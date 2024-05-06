import type { LayoutServerLoad } from './$types';
import { env } from '$env/dynamic/private';

export const load: LayoutServerLoad = async () => {
	return { vercelEnv: env.VERCEL_ENV };
};

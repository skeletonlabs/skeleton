import { env } from '$env/dynamic/private';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	return { vercelEnv: env?.VERCEL_ENV ?? 'dev' };
};

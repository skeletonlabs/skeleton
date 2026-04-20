import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';

export function getAppOrigin() {
	if (dev) {
		return 'http://localhost:5173';
	}
	if (env.VERCEL_ENV === 'production') {
		return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`;
	}
	return `https://${env.VERCEL_URL}`;
}

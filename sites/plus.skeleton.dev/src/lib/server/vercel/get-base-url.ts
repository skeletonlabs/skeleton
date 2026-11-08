import { VERCEL_ENV, VERCEL_URL, VERCEL_PROJECT_PRODUCTION_URL } from "$app/env/private";

export function getBaseUrl() {
	if (import.meta.env.DEV) {
		return `http://localhost:3000`;
	}
	if (VERCEL_ENV === "preview") {
		return `https://${VERCEL_URL}`;
	}
	return VERCEL_PROJECT_PRODUCTION_URL;
}

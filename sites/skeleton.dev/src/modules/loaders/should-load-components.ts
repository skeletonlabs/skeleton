export function shouldLoadComponents() {
	return ['production', 'next'].includes(process.env.VERCEL_TARGET_ENV ?? '') && process.env.LOAD_COMPONENT_COLLECTION === '1';
}

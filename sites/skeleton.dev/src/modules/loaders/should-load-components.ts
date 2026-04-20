export function shouldLoadComponents() {
	return ['production', 'next'].includes(process.env.VERCEL_ENV ?? '');
}

import type { MiddlewareHandler } from 'astro';

const redirects = {
	'/news': 'https://bsky.app/profile/skeleton.dev',
	'/figma': 'https://www.etesie.dev/figma',
	'/docs/tailwind/[component]': '/docs/tailwind-components/[component]',
	'/docs/components/[component]/[framework]': '/docs/[framework]/framework-components/[component]',
	'/docs/headless/[library]': '/docs/integrations/[library]',
};

export const onRequest: MiddlewareHandler = async (context, next) => {
	const path = context.url.pathname;
	for (const [pattern, target] of Object.entries(redirects)) {
		const regex = new RegExp(`^${pattern.replace(/\[([^\]]+)\]/g, '(?<$1>[^/]+)').replace(/\//g, '\\/')}\\/?$`);
		const match = path.match(regex);
		if (match) {
			const destination = Object.entries(match.groups ?? {}).reduce((acc, [key, value]) => acc.replace(`[${key}]`, value), target);
			return context.redirect(destination);
		}
	}
	return next();
};

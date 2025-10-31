import type { APIRoute } from 'astro';

export const prerender = false;

const redirects = {
	'/news': 'https://bsky.app/profile/skeleton.dev',
	'/figma': 'https://www.etesie.dev/figma',
	'/docs/tailwind/[component]': '/docs/tailwind-components/[component]',
	'/docs/components/[component]/[framework]': '/docs/[framework]/framework-components/[component]',
	'/docs/headless/[library]': '/docs/integrations/[library]',
};

export const GET: APIRoute = async (context) => {
	for (const [pattern, target] of Object.entries(redirects)) {
		const regex = new RegExp('^' + pattern.replace(/\[([^\]]+)\]/g, '(?<$1>[^/]+)').replace(/\//g, '\\/') + '$');
		const match = context.url.pathname.match(regex);
		if (!match) {
			continue;
		}
		const destination = Object.entries(match.groups ?? {}).reduce((acc, [key, value]) => acc.replace(`[${key}]`, value), target);
		return context.redirect(destination, 302);
	}
	return context.redirect('/404', 302);
};

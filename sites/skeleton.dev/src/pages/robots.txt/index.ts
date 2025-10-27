import type { APIRoute } from 'astro';

export const GET: APIRoute = (context) => {
	const sitemap = new URL('sitemap-index.xml', context.site).href;
	return new Response(`\
User-agent: *
Allow: /

Sitemap: ${sitemap}
`);
};

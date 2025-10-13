import type { APIRoute } from 'astro';

export const GET: APIRoute = (context) => {
  return new Response(`
User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', context.site).href}
    `.trim());
};
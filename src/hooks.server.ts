import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	let theme = '';

	const newTheme = event.url.searchParams.get('theme');
	const cookieTheme = event.cookies.get('theme');

	// If no theme, set cookie and theme to skeleton
	if (!cookieTheme) {
		event.cookies.set('theme', 'skeleton');
		theme = 'skeleton';
	} else theme = cookieTheme;

	// if a new theme was selected, set the cookie to the new theme
	if (newTheme) {
		theme = newTheme;
	}

	// loads the current theme and injects into the head
	const modules = import.meta.glob(`$lib/themes/*.css`, { as: 'raw' });
	const currentTheme = await modules[`/src/lib/themes/theme-${theme}.css`]();
	const inject = `<style type="text/css">${currentTheme}}</style>`;

	return await resolve(event, {
		transformPageChunk: ({ html }) => {
			const index = html.indexOf('</head>');
			const first = html.substring(0, index);
			const end = html.substring(index);
			html = first + inject + end;
			return html.replace('data-theme=""', `data-theme="${theme}"`);
		}
	});
}) satisfies Handle;

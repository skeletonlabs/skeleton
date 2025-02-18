import { parse } from 'node-html-parser';
import { THEME_MAPPINGS } from '../utility/theme-mappings';

function transformAppHtml(code: string) {
	const parsed = parse(code);
	const html = parsed.querySelector('html');
	const body = parsed.querySelector('body');
	if (!(html && body)) {
		return {
			code: code,
			meta: {
				theme: undefined
			}
		};
	}
	const theme = body.getAttribute('data-theme');
	if (theme) {
		body.removeAttribute('data-theme');
		if (Object.hasOwn(THEME_MAPPINGS, theme)) {
			html.setAttribute('data-theme', THEME_MAPPINGS[theme]);
		} else {
			html.setAttribute('data-theme', theme);
		}
	}
	return {
		code: parsed.toString(),
		meta: {
			theme: theme
		}
	};
}

export { transformAppHtml };

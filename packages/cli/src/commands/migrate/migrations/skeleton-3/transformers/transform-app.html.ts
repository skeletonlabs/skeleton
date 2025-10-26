import { THEME_MAPPINGS } from '../utility/theme-mappings.js';
import { parse } from 'node-html-parser';

function transformAppHtml(code: string) {
	const parsed = parse(code);
	const html = parsed.querySelector('html');
	const body = parsed.querySelector('body');
	if (!(html && body)) {
		return {
			code: code,
			meta: {
				theme: undefined,
			},
		};
	}
	const theme = body.getAttribute('data-theme');
	if (!theme) {
		return {
			code: code,
			meta: {
				theme: undefined,
			},
		};
	}
	let type: 'preset' | 'custom';
	body.removeAttribute('data-theme');
	if (Object.hasOwn(THEME_MAPPINGS, theme)) {
		html.setAttribute('data-theme', THEME_MAPPINGS[theme]!.value);
		type = 'preset';
	} else {
		html.setAttribute('data-theme', theme);
		type = 'custom';
	}
	return {
		code: parsed.toString(),
		meta: {
			theme: {
				value: theme,
				type: type,
			},
		},
	};
}

export { transformAppHtml };

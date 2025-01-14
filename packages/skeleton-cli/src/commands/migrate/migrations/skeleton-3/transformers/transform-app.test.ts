import { describe, expect, it } from 'vitest';
import { transformApp } from './transform-app.js';
import { THEME_MAPPINGS } from '../utility/theme-mappings.js';

describe('transformsApp', () => {
	for (const [oldTheme, newTheme] of Object.entries(THEME_MAPPINGS)) {
		it(`transforms the \`data-theme="${oldTheme}"\` attribute to \`data-theme="${newTheme}"\``, () => {
			expect(
				transformApp(
					`
<html lang="en">
<head><title>foo</title></head>
<body data-theme="${oldTheme}"></body>
</html>

		`,
					newTheme
				)
					.code.trim()
					.replace(/\r\n|\r|\n/g, '\n')
			).toBe(
				`
<html lang="en">
<head><title>foo</title></head>
<body data-theme="${newTheme}"></body>
</html>
		`
					.trim()
					.replace(/\r\n|\r|\n/g, '\n')
			);
		});
		it(`adds the \`data-theme="${newTheme}"\` attribute`, () => {
			expect(
				transformApp(
					`
<html lang="en">
<head><title>foo</title></head>
<body></body>
</html>
		`,
					newTheme
				)
					.code.trim()
					.replace(/\r\n|\r|\n/g, '\n')
			).toBe(
				`
<html lang="en">
<head><title>foo</title></head>
<body data-theme="${newTheme}"></body>
</html>
		`
					.trim()
					.replace(/\r\n|\r|\n/g, '\n')
			);
		});
	}
});

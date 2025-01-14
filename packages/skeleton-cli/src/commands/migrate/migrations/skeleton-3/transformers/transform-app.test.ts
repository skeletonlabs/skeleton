import { describe, expect, it } from 'vitest';
import { transformApp } from './transform-app.js';

describe('transformsApp', () => {
	it('edits the `data-them` attribute when already present', () => {
		expect(
			transformApp(
				`
<html lang="en">
<head><title>foo</title></head>
<body data-theme="skeleton"></body>
</html>

		`,
				'cerberus'
			)
				.code.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
<html lang="en">
<head><title>foo</title></head>
<body data-theme="cerberus"></body>
</html>
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
	it('adds the `data-theme` attribute ', () => {
		expect(
			transformApp(
				`
<html lang="en">
<head><title>foo</title></head>
<body></body>
</html>
		`,
				'cerberus'
			)
				.code.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		).toBe(
			`
<html lang="en">
<head><title>foo</title></head>
<body data-theme="cerberus"></body>
</html>
		`
				.trim()
				.replace(/\r\n|\r|\n/g, '\n')
		);
	});
});

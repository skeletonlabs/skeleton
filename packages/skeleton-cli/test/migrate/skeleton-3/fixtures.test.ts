import { fileURLToPath, resolve } from 'node:url';
import { describe, expect, test } from 'vitest';
import { readFile } from 'node:fs/promises';
import { transformSvelte } from '../../../src/commands/migrate/migrations/skeleton-3/transformers/transform-svelte.js';
import { transformModule } from '../../../src/commands/migrate/migrations/skeleton-3/transformers/transform-module.js';
import { transformAppHtml } from '../../../src/commands/migrate/migrations/skeleton-3/transformers/transform-app.html.js';
import { transformPackageJson } from '../../../src/commands/migrate/migrations/skeleton-3/transformers/transform-package.json.js';
import { transformAppCss } from '../../../src/commands/migrate/migrations/skeleton-3/transformers/transform-app.css.js';
import { FALLBACK_THEME } from '../../../src/commands/migrate/migrations/skeleton-3/utility/constants.js';
import { transformStyleSheet } from '../../../src/commands/migrate/migrations/skeleton-3/transformers/transform-stylesheet.js';

const TRANSFORMER_MAP = {
	svelte: transformSvelte,
	module: transformModule,
	stylesheet: transformStyleSheet,
	'app.html': transformAppHtml,
	'app.css': transformAppCss,
	'package.json': transformPackageJson
};

const fixtures = import.meta.glob('./fixtures/**/*', {
	query: '?raw'
});

function getResult(code: string, transformer: keyof typeof TRANSFORMER_MAP) {
	switch (transformer) {
		case 'svelte':
		case 'module':
		case 'stylesheet':
		case 'app.html':
			return TRANSFORMER_MAP[transformer](code).code;
		case 'app.css':
			return TRANSFORMER_MAP[transformer](code, FALLBACK_THEME).code;
		case 'package.json':
			return TRANSFORMER_MAP[transformer](code, '3.0.0', '1.0.0').code;
	}
}

function clean(code: string) {
	return code.trim().replace(/\r\n|\r|\n/g, '\n');
}

const fixtureTests: Record<string, { name: string; path: string }[]> = {};

for (const path of Object.keys(fixtures)) {
	const name = path.split('/').at(-1);
	const transformer = path.split('/').at(-2) as keyof typeof TRANSFORMER_MAP | undefined;
	if (!name || !transformer || !(transformer in TRANSFORMER_MAP)) {
		continue;
	}
	if (!fixtureTests[transformer]) {
		fixtureTests[transformer] = [];
	}
	fixtureTests[transformer].push({ name, path });
}

describe('fixtures', () => {
	for (const [transformerName, cases] of Object.entries(fixtureTests)) {
		describe(transformerName, () => {
			for (const { name, path } of cases) {
				test(name, async () => {
					const result = getResult(
						await readFile(resolve(fileURLToPath(import.meta.url), path), 'utf-8'),
						transformerName as keyof typeof TRANSFORMER_MAP
					);
					const expected = await readFile(resolve(fileURLToPath(import.meta.url), path.replace('fixtures', 'results')), 'utf-8');
					expect(clean(result)).toEqual(clean(expected));
				});
			}
		});
	}
});

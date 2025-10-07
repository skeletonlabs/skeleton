import { transformAppCss } from '../../../src/commands/migrate/migrations/skeleton-3/transformers/transform-app.css.js';
import { transformAppHtml } from '../../../src/commands/migrate/migrations/skeleton-3/transformers/transform-app.html.js';
import { transformModule } from '../../../src/commands/migrate/migrations/skeleton-3/transformers/transform-module.js';
import { transformPackageJson } from '../../../src/commands/migrate/migrations/skeleton-3/transformers/transform-package.json.js';
import { transformStylesheet } from '../../../src/commands/migrate/migrations/skeleton-3/transformers/transform-stylesheet.js';
import { transformSvelte } from '../../../src/commands/migrate/migrations/skeleton-3/transformers/transform-svelte.js';
import { FALLBACK_THEME } from '../../../src/commands/migrate/migrations/skeleton-3/utility/constants.js';
import { readFile } from 'node:fs/promises';
import { fileURLToPath, resolve } from 'node:url';
import { describe, expect, test } from 'vitest';

const TRANSFORMER_MAP = {
	svelte: transformSvelte,
	module: transformModule,
	stylesheet: transformStylesheet,
	'app.html': transformAppHtml,
	'app.css': transformAppCss,
	'package.json': transformPackageJson,
};

function getResult(code: string, transformer: keyof typeof TRANSFORMER_MAP) {
	switch (transformer) {
		case 'svelte':
		case 'module':
		case 'stylesheet':
		case 'app.html': {
			return TRANSFORMER_MAP[transformer](code).code;
		}
		case 'app.css': {
			return TRANSFORMER_MAP[transformer](code, FALLBACK_THEME).code;
		}
		case 'package.json': {
			return TRANSFORMER_MAP[transformer](code, '3.0.0', '1.0.0').code;
		}
	}
}

function clean(code: string) {
	return code.trim().replace(/\r\n|\r|\n/g, '\n');
}

const samples = import.meta.glob('./samples/**/*', {
	query: '?raw',
});

const testCases = Object.keys(samples).reduce(
	(acc, path) => {
		const pathParts = path.split('/');
		const transformer = pathParts[2];
		const testName = pathParts[3];
		const fileType = pathParts[4];
		if (!transformer || !testName || !fileType || !(transformer in TRANSFORMER_MAP) || !['input', 'output'].includes(fileType)) {
			return acc;
		}
		acc[transformer] = acc[transformer] || {};
		acc[transformer][testName] = acc[transformer][testName] || { input: '', output: '' };
		acc[transformer][testName][fileType as 'input' | 'output'] = path;
		return acc;
	},
	{} as Record<string, Record<string, { input: string; output: string }>>,
);

describe('samples', () => {
	for (const [transformerName, tests] of Object.entries(testCases)) {
		describe(transformerName, () => {
			for (const [testName, { input: inputPath, output: outputPath }] of Object.entries(tests)) {
				if (!inputPath || !outputPath) {
					continue;
				}
				test(testName, async () => {
					const input = await readFile(resolve(fileURLToPath(import.meta.url), inputPath), 'utf8');
					const actual = getResult(input, transformerName as keyof typeof TRANSFORMER_MAP);
					const expected = await readFile(resolve(fileURLToPath(import.meta.url), outputPath), 'utf8');
					expect(clean(actual)).toBe(clean(expected));
				});
			}
		});
	}
});

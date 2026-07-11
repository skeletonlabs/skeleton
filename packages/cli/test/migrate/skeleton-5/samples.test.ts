import { transformJsx } from '../../../src/commands/migrate/migrations/skeleton-5/transformers/transform-jsx.js';
import { transformPackageJson } from '../../../src/commands/migrate/migrations/skeleton-5/transformers/transform-package.json.js';
import { transformStylesheet } from '../../../src/commands/migrate/migrations/skeleton-5/transformers/transform-stylesheet.js';
import { transformSvelte } from '../../../src/commands/migrate/migrations/skeleton-5/transformers/transform-svelte.js';
import { readFile } from 'node:fs/promises';
import { fileURLToPath, resolve } from 'node:url';
import { describe, expect, test } from 'vitest';

const TRANSFORMER_MAP = {
	svelte: transformSvelte,
	jsx: transformJsx,
	stylesheet: transformStylesheet,
	'package.json': transformPackageJson,
};

function getResult(code: string, transformer: keyof typeof TRANSFORMER_MAP) {
	return TRANSFORMER_MAP[transformer](code).code;
}

function clean(code: string) {
	return code.trim().replace(/\r\n|\r|\n/g, '\n');
}

const CATEGORIES = ['positive', 'negative'];

const samples = import.meta.glob('./samples/**/*', {
	query: '?raw',
});

// Fixtures are grouped `samples/<category>/<transformer>/<testName>/<input|output>`, where
// `category` is `positive` (asserts a transformation) or `negative` (asserts nothing changes).
const testCases = Object.keys(samples).reduce(
	(acc, path) => {
		const pathParts = path.split('/');
		const category = pathParts[2];
		const transformer = pathParts[3];
		const testName = pathParts[4];
		const fileType = pathParts[5];
		if (
			!category ||
			!transformer ||
			!testName ||
			!fileType ||
			!CATEGORIES.includes(category) ||
			!(transformer in TRANSFORMER_MAP) ||
			!['input', 'output'].includes(fileType)
		) {
			return acc;
		}
		acc[category] = acc[category] || {};
		acc[category][transformer] = acc[category][transformer] || {};
		acc[category][transformer][testName] = acc[category][transformer][testName] || { input: '', output: '' };
		acc[category][transformer][testName][fileType as 'input' | 'output'] = path;
		return acc;
	},
	{} as Record<string, Record<string, Record<string, { input: string; output: string }>>>,
);

describe('samples', () => {
	for (const [category, transformers] of Object.entries(testCases)) {
		describe(category, () => {
			for (const [transformerName, tests] of Object.entries(transformers)) {
				describe(transformerName, () => {
					for (const [testName, { input: inputPath, output: outputPath }] of Object.entries(tests)) {
						if (!inputPath || !outputPath) {
							continue;
						}
						test(testName, async () => {
							const input = await readFile(resolve(fileURLToPath(import.meta.url), inputPath), 'utf-8');
							const actual = getResult(input, transformerName as keyof typeof TRANSFORMER_MAP);
							const expected = await readFile(resolve(fileURLToPath(import.meta.url), outputPath), 'utf-8');
							expect(clean(actual)).toBe(clean(expected));
						});
					}
				});
			}
		});
	}
});

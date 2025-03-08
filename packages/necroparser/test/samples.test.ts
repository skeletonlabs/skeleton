/// <reference types="vite/client" />

import { fileURLToPath, resolve } from 'node:url';
import { describe, expect, test } from 'vitest';
import { getInterfaces } from '../src/index.js';

const samples = import.meta.glob('./samples/**/input.ts', {
	query: '?raw'
});

describe('fixtures', () => {
	for (const path of Object.keys(samples)) {
		const parts = path.split('/');
		const name = parts.at(-2);
		if (!name) {
			continue;
		}
		test(name, async () => {
			const actual = getInterfaces(resolve(fileURLToPath(import.meta.url), path));
			const expected = await import(path.replace('input.ts', 'output.json')).then((module) => module.default);
			expect(actual).toStrictEqual(expected);
		});
	}
});

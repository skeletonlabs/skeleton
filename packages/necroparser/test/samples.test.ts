import { glob } from 'tinyglobby';
import { describe, expect, test } from 'vitest';
import { Project } from '../src/index.js';

const samples = await glob('./samples/**/input.ts', {
	absolute: true,
	cwd: import.meta.dirname
});

describe('fixtures', () => {
	for (const path of samples) {
		const parts = path.split('/');
		const name = parts.at(-2);
		if (!name) {
			continue;
		}
		test(name, async () => {
			const project = new Project([path]);
			const actual = project.getInterfaces(path);
			const expected = await import(path.replace('input.ts', 'output.json')).then((module) => module.default);
			expect(actual).toStrictEqual(expected);
		});
	}
});

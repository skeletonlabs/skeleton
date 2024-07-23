import { describe, expect, it } from 'vitest';
import { normalizeSvelteAttributes } from './svelte.js';

describe('normalizeSvelteAttributes', () => {
	it('Does not alter event listeners', () => {
		const noop = () => {};

		const input = {
			onclick: noop,
			onkeydown: noop,
			onkeyup: noop
		};

		const output = input;

		expect(normalizeSvelteAttributes(input)).toEqual(output);
	});
	// TODO: Add more tests
});

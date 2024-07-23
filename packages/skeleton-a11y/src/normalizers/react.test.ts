import { describe, expect, it } from 'vitest';
import { normalizeReactAttributes } from './react.js';

describe('normalizeReactAttributes', () => {
	it('Camelcases event listeners', () => {
		const noop = () => {};

		const input = {
			onclick: noop,
			onkeydown: noop,
			onkeyup: noop
		};

		const output = {
			onClick: noop,
			onKeyDown: noop,
			onKeyUp: noop
		};

		expect(normalizeReactAttributes(input)).toEqual(output);
	});
	// TODO: Add more tests
});

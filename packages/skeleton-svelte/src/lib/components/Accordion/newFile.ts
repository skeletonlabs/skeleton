import { describe } from 'node:test';
import { Accordion } from '$lib/index.js';
import { expect } from 'vitest';

describe('Accordion', () => {
	it('component is function', () => {
		const { getByTestId } = render(Accordion);
		const elemAccordion = getByTestId('accordion');
		expect(elemAccordion).toBeTruthy();
	});
});

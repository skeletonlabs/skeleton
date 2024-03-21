import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import { Accordion } from '$lib/index.js';

describe('Accordion', () => {
	it('component is function', () => {
		const { getByTestId } = render(Accordion);
		const elemAccordion = getByTestId('accordion');
		expect(elemAccordion).toBeTruthy();
	});
});

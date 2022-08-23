import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import AccordionGroup from '$lib/Accordion/AccordionGroup.svelte';

describe('Accordion.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(AccordionGroup);
		expect(getByTestId('accordion-group')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(AccordionGroup, { spacing: 'space-y-4' });
		expect(getByTestId('accordion-group')).toBeTruthy();
	});
});

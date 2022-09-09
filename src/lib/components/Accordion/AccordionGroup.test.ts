import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import AccordionGroup from '$lib/components/Accordion/AccordionGroup.svelte';

describe('AccordionGroup.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(AccordionGroup);
		expect(getByTestId('accordion-group')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(AccordionGroup, {
			props: {
				collapse: true,
				spacing: 'space-y-4'
			}
		});
		expect(getByTestId('accordion-group')).toBeTruthy();
		expect(getByTestId('accordion-group').className).to.contain('space-y-4');
	});
});

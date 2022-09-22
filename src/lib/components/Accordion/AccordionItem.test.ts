import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import AccordionItem from '$lib/components/Accordion/AccordionItem.svelte';

describe('AccordionItem.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(AccordionItem);
		expect(getByTestId('accordion-item')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(AccordionItem, {
			open: true,
			hover: 'bg-green-500/50',
			spacing: 'space-y-2',
			summaryId: 'testSummary1',
			contentId: 'testContent1',
			slotSummary: 'bg-red-500',
			slotContent: 'bg-green-500'
		});
		expect(getByTestId('accordion-item')).toBeTruthy();
		expect(getByTestId('accordion-item').className).to.contain('space-y-2');
		expect(getByTestId('accordion-item').querySelector('summary')?.className).to.contain('bg-green-500/50');
		expect(getByTestId('accordion-item').querySelector('#testSummary1')).toBeTruthy();
		expect(getByTestId('accordion-item').querySelector('#testContent1')).toBeTruthy();
	});
});

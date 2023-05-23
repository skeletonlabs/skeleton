import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import { slide } from 'svelte/transition';

import AccordionItem from '$lib/components/Accordion/AccordionItem.svelte';

describe('AccordionItem.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(AccordionItem, {
			transition: { transition: slide, params: { duration: 200 } }
		});
		expect(getByTestId('accordion-item')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(AccordionItem, {
			open: true,
			padding: 'py-2 px-4',
			hover: 'hover:bg-primary-hover-token',
			rounded: 'rounded-container-token',
			regionControl: '',
			regionPanel: 'space-y-4',
			regionCaret: '',
			transition: { transition: slide, params: { duration: 200 } }
		});
		expect(getByTestId('accordion-item')).toBeTruthy();
		expect(getByTestId('accordion-item').querySelector('.accordion-control')?.className).to.contain('py-2 px-4');
	});
});

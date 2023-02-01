import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import Accordion from '$lib/components/Accordion/Accordion.svelte';

describe('Accordion.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Accordion);
		expect(getByTestId('accordion')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Accordion, {
			props: {
				autocollapse: true,
				duration: 200,
				spacing: 'space-y-1',
				padding: 'py-2 px-4',
				hover: 'hover:bg-primary-hover-token',
				rounded: 'rounded-container-token',
				regionControl: '',
				regionPanel: 'space-y-4',
				regionCaret: ''
			}
		});
		expect(getByTestId('accordion')).toBeTruthy();
		expect(getByTestId('accordion').className).to.contain('space-y-1');
	});
});

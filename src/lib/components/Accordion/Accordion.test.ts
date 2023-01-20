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
				collapse: true,
				spacing: 'space-y-4'
			}
		});
		expect(getByTestId('accordion')).toBeTruthy();
		expect(getByTestId('accordion').className).to.contain('space-y-4');
	});
});

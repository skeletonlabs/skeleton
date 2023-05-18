import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import ConicGradient from '$lib/components/ConicGradient/ConicGradient.svelte';

describe('ConicGradient.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(ConicGradient);
		expect(getByTestId('conic-gradient')).toBeTruthy();
	});

	it('Renders with props', () => {
		const { getByTestId } = render(ConicGradient, {
			props: {
				data: [
					{ label: 'Emerald', color: ['emerald', 500], start: 0, end: 33 },
					{ label: 'Indigo', color: ['indigo', 500], start: 33, end: 66 },
					{ label: 'Rose', color: ['rose', 500], start: 66, end: 100 }
				],
				legend: true,
				width: 'w-8'
			}
		});
		expect(getByTestId('conic-gradient')).toBeTruthy();
	});
});

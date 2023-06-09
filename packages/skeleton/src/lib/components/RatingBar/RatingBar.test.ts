import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import RatingBar from '$lib/components/RatingBar/RatingBar.svelte';

describe('RatingBar.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(RatingBar);
		expect(getByTestId('rating-bar')).toBeTruthy();
	});

	it('Renders with all props', () => {
		const { getByTestId } = render(RatingBar, {
			props: {
				max: 10,
				value: 5.5,
				justify: 'justify-center',
				spacing: 'space-x-4'
			}
		});
		expect(getByTestId('rating-bar')).toBeTruthy();
	});
});

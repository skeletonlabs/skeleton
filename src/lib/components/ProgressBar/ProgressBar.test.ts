import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import ProgressBar from '$lib/components/ProgressBar/ProgressBar.svelte';

describe('ProgressBar.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(ProgressBar);
		expect(getByTestId('progress-bar')).toBeTruthy();
	});

	it('Renders with all props', () => {
		const { getByTestId } = render(ProgressBar, {
			props: {
				label: 'Test',
				min: 10,
				value: 50,
				max: 100,
				height: 'h-1',
				rounded: 'rounded-none',
				meter: 'bg-warning-500',
				track: 'bg-warning-500/30'
			}
		});
		expect(getByTestId('progress-bar')).toBeTruthy();
	});
});

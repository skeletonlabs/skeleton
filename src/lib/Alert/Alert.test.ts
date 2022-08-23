import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import Alert from '$lib/Alert/Alert.svelte';

describe('Alert.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Alert);
		expect(getByTestId('alert')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Alert, {
			props: {
				visible: true,
				color: 'bg-primary-500',
				radius: 'rounding-lg',
				textColor: 'text-accent-500'
			}
		});
		expect(getByTestId('alert')).toBeTruthy();
	});
});

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
				duration: 100,
				background: 'bg-primary-500',
				color: 'text-accent-500',
				radius: 'rounded'
			}
		});
		expect(getByTestId('alert')).toBeTruthy();
	});
});

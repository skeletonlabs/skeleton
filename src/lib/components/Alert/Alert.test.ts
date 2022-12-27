import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import Alert from '$lib/components/Alert/Alert.svelte';

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
				background: 'bg-primary-500/30',
				color: 'text-secondary-500',
				borderWidth: 'border-l-2',
				borderColor: 'border-l-primary-500',
				radius: 'rounded',
				// Slots
				slotLead: 'bg-red-500',
				slotContent: 'bg-green-500',
				slotTrail: 'bg-blue-500'
			}
		});
		expect(getByTestId('alert')).toBeTruthy();
	});
});

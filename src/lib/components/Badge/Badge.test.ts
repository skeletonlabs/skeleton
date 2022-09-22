import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import Badge from '$lib/components/Badge/Badge.svelte';

describe('Badge.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Badge);
		expect(getByTestId('badge')).toBeTruthy();
	});

	// FIXME: props are missing and need to be updated!
	it('Renders with all props', async () => {
		const { getByTestId } = render(Badge, {
			props: {
				icon: false,
				background: 'bg-primary-500',
				fill: 'fill-white',
				text: 'text-xs',
				color: 'text-white',
				padding: 'p-3',
				rounded: 'rounded-full',
				shadow: 'shadow-xl'
			}
		});
		expect(getByTestId('badge')).toBeTruthy();
	});
});

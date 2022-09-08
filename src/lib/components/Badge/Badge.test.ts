import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import Badge from '$lib/components/Badge/Badge.svelte';

describe('Badge.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Badge);
		expect(getByTestId('badge')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Badge, {
			props: {
				background: 'bg-red-500',
				color: 'text-white',
				fill: 'fill-white',
				rounded: 'rounded',
				icon: false
			}
		});
		expect(getByTestId('badge')).toBeTruthy();
	});
});

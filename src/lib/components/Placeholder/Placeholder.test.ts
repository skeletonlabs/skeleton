import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import Placeholder from '$lib/components/Placeholder/Placeholder.svelte';

describe('Placeholder.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Placeholder);
		expect(getByTestId('placeholder')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Placeholder, {
			props: {
				circle: false,
				animate: true,
				background: 'bg-surface-400 dark:bg-surface-700',
				height: 'h-4',
				width: 'w-full',
				rounded: 'rounded-lg'
			}
		});
		expect(getByTestId('placeholder')).toBeTruthy();
	});
});

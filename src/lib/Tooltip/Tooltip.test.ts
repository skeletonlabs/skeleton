import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import Tooltip from '$lib/Tooltip/Tooltip.svelte';

describe('Tooltip.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Tooltip);
		expect(getByTestId('tooltip')).toBeTruthy();
	});

	it('Renders with all props', () => {
		const { getByTestId } = render(Tooltip, {
			props: {
				visible: true,
				position: 'top',
				background: 'bg-black dark:bg-white',
				color: 'text-white dark:text-black',
				width: 'w-auto',
				whitespace: 'whitespace-nowrap',
				rounded: 'rounded',
				duration: 100,
			}
		});
		expect(getByTestId('tooltip')).toBeTruthy();
	});
});

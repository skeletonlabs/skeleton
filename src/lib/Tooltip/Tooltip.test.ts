import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import Tooltip from '$lib/Tooltip/Tooltip.svelte';

describe('Tooltip.svelte', () => {
	it('Renders without props', async () => {
		const { getByTestId } = render(Tooltip);
		expect(getByTestId('tooltip')).toBeTruthy();
	});

	it('Renders with props', () => {
		const { getByTestId } = render(Tooltip, {
			props: {
				position: 'bottom',
				background: 'bg-green-500',
				color: 'text-red-500',
				width: 'w-[300px]',
				whitespace: 'whitespace-normal',
				rounded: 'rounded-xl',
				duration: 500
			}
		});
		expect(getByTestId('tooltip')).toBeTruthy();
	});
});

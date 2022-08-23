import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import Divider from '$lib/Divider/Divider.svelte';

describe('Divider.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(Divider);
		expect(getByTestId('divider')).toBeTruthy();
		expect(getByTestId('divider').className).toContain('border-solid');
		expect(getByTestId('divider').className).toContain('border-t');
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(Divider, {
			props: {
				variant: 'dotted',
				weight: '2',
				orientation: 'h'
			}
		});
		expect(getByTestId('divider')).toBeTruthy();
		expect(getByTestId('divider').className).toContain('border-dotted');
		expect(getByTestId('divider').className).toContain('border-t-2');
	});
});

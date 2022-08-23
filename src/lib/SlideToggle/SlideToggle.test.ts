import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import SliderToggle from '$lib/SlideToggle/SlideToggle.svelte';

describe('SliderToggle.svelte', () => {
	it('Renders with all props', async () => {
		const { getByTestId } = render(SliderToggle, {
			props: { color: 'bg-primary-200', size: 'lg' }
		});
		expect(getByTestId('slide-toggle')).toBeTruthy();
	});

	it('Renders with minimal props', async () => {
		const { getByTestId } = render(SliderToggle);
		expect(getByTestId('slide-toggle')).toBeTruthy();
	});
});

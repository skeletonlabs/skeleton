import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import SliderToggle from '$lib/components/SlideToggle/SlideToggle.svelte';

describe('SliderToggle.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(SliderToggle, { props: { name: 'testName' } });
		expect(getByTestId('slide-toggle')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(SliderToggle, {
			props: {
				name: 'testName',
				checked: true,
				accent: 'bg-primary-500',
				size: 'lg',
				label: 'testSlideToggle1'
			}
		});
		expect(getByTestId('slide-toggle')).toBeTruthy();
	});
});

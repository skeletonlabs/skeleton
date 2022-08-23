import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import RangeSlider from '$lib/RangeSlider/RangeSlider.svelte';

describe('RangeSlider.svelte', () => {
	
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(RangeSlider);
		expect(getByTestId('range-slider')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(RangeSlider, {
			props: {
				id: 'testRangeSlider1',
				name: 'testRangeSlider1',
				min: 0,
				max: 20,
				step: 5,
				value: 10,
				label: 'testRangeSliderLabel1',
				ticked: true,
				accent: 'bg-primary-500',
			}
		});
		expect(getByTestId('range-slider')).toBeTruthy();
	});

	it('Ticks enabled', async () => {
		const { getByTestId } = render(RangeSlider, {
			props: { ticked: true } 
		});
		expect(getByTestId('range-slider').querySelector('datalist')).toBeTruthy();
	});

	it('Disabled state', async () => {
		const { getByTestId } = render(RangeSlider, {
			props: { disabled: true } 
		});
		expect(getByTestId('range-slider').querySelector('input')?.disabled).eq(true)
	});
});

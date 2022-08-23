import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import RangeSlider from '$lib/RangeSlider/RangeSlider.svelte';

const testProps: any = {
	id: 'test1',
	name: 'test1',
	min: 0,
	max: 20,
	step: 5,
	value: 10,
	label: 'Testing',
	ticked: true,
	accent: 'bg-primary-500',
	height: 'h-3'
};

describe('RangeSlider.svelte', () => {
	it('Renders with all props', async () => {
		const { getByTestId } = render(RangeSlider, { props: testProps });
		expect(getByTestId('range-slider')).toBeTruthy();
	});

	it('Renders with minimal props', async () => {
		const { getByTestId } = render(RangeSlider);
		expect(getByTestId('range-slider')).toBeTruthy();
	});

	it('Ticks added', async () => {
		const { getByTestId, container } = render(RangeSlider, { props: { ticked: true } });
		expect(getByTestId('range-slider').getElementsByTagName('datalist')).toBeTruthy();
	});

	it('Disabled state', async () => {
		const { getByTestId, container } = render(RangeSlider, { disabled: true });
		expect(getByTestId('range-slider').getElementsByTagName('input')[0].getAttribute('disabled'));
	});
});

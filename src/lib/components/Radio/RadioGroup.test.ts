import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { writable } from 'svelte/store';

import RadioGroup from '$lib/components/Radio/RadioGroup.svelte';

describe('RadioGroup.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(RadioGroup, {
			props: {
				selected: writable(0)
			}
		});
		expect(getByTestId('radio-group')).toBeTruthy();
	});

	it('Renders with all props', () => {
		const { getByTestId } = render(RadioGroup, {
			props: {
				selected: writable('foobar'),
				display: 'inline-flex',
				background: 'bg-surface-300 dark:bg-surface-700',
				hover: 'hover:bg-primary-500/10',
				accent: 'bg-primary-500 !text-white',
				color: 'text-white',
				fill: 'fill-white',
				rounded: 'rounded',
				// A11y
				label: 'testRadioGroup'
			}
		});
		expect(getByTestId('radio-group')).toBeTruthy();
	});
});

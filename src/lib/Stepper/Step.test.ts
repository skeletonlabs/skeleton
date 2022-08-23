import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { writable } from 'svelte/store';

// @ts-ignore
import Step from '$lib/Stepper/Step.svelte';

describe('Step.svelte', () => {
	it('Renders with mininal props', async () => {
		const { getByTestId } = render(Step, { props: { index: 0 } });
		expect(getByTestId('step')).toBeTruthy();
	});

	it('Renders with all props', () => {
		const { getByTestId } = render(Step, {
			props: {
				index: 0,
				disabled: true,
				done: true,
				active: writable(0),
				length: 3,
				accent: 'bg-green-500',
				background: 'bg-surface-500'
			}
		});
		expect(getByTestId('step')).toBeTruthy();
	});
});

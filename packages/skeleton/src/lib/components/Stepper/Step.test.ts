import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import { writable, type Writable } from 'svelte/store';

import Step from '$lib/components/Stepper/Step.svelte';

const mockState: Writable<any> = writable({ current: 1, total: 1 }); // NOTE: current/total must match!

describe('Step.svelte', () => {
	it('Renders with mininal props', async () => {
		const { getByTestId } = render(Step, { props: { state: mockState, index: 0 } });
		expect(getByTestId('step')).toBeTruthy();
	});

	it('Renders with all props', () => {
		const { getByTestId } = render(Step, {
			props: {
				state: mockState,
				index: 0,
				locked: false
			}
		});
		expect(getByTestId('step')).toBeTruthy();
	});
});

import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// @ts-ignore
import Step from '$lib/Stepper/Step.svelte';

describe('Step.svelte', () => {
	it('Renders without props', async () => {
		const { getByTestId } = render(Step);
		expect(getByTestId('step')).toBeTruthy();
	});

	it('Renders with props', () => {
		const { getByTestId } = render(Step, {
			props: {
				index: 0,
				disabled: true,
				done: true
			}
		});
		expect(getByTestId('step')).toBeTruthy();
	});
});

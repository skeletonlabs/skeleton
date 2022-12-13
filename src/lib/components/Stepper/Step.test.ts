import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import Step from '$lib/components/Stepper/Step.svelte';

describe('Step.svelte', () => {
	it('Renders with mininal props', async () => {
		const { getByTestId } = render(Step, { props: { index: 0 } });
		expect(getByTestId('step')).toBeTruthy();
	});

	it('Renders with all props', () => {
		const { getByTestId } = render(Step, {
			props: {
				index: 0,
				locked: false
			}
		});
		expect(getByTestId('step')).toBeTruthy();
	});
});

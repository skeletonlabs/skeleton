import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

import Stepper from '$lib/components/Stepper/Stepper.svelte';

describe('Stepper.svelte', () => {
	it('Renders with minimal props', () => {
		const { getByTestId } = render(Stepper);
		expect(getByTestId('stepper')).toBeTruthy();
	});

	it('Renders with all props', () => {
		const { getByTestId } = render(Stepper, {
			props: {
				duration: 200,
				// Props (timeline)
				color: 'text-white',
				background: 'bg-accent-500 text-white',
				// Props (buttons)
				buttonBack: {},
				buttonNext: {},
				buttonComplete: {}
			}
		});
		expect(getByTestId('stepper')).toBeTruthy();
	});
});

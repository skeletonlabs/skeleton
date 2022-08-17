/**
 * @vitest-environment jsdom
 */

import { cleanup, render } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';

import ConicGradient from '$lib/ConicGradient/ConicGradient.svelte';

describe('ConicGradient.svelte', () => {
	afterEach(() => cleanup());

	it('Renders without props', async () => {
		const { getByTestId } = render(ConicGradient);
		expect(getByTestId('conic-gradient')).toBeTruthy();
	});

	it('Renders with props', () => {
		const { getByTestId } = render(ConicGradient, {
			props: {
				data: [
					{ label: 'Emerald', swathe: { color: 'emerald', weight: 500 }, start: 0, end: 35 },
					{ label: 'Indigo', swathe: { color: 'indigo', weight: 500 }, start: 35, end: 60 },
					{ label: 'Rose', swathe: { color: 'rose', weight: 500 }, start: 60, end: 100 }
				],
				legend: true,
				width: 'w-8'
			}
		});
		expect(getByTestId('conic-gradient')).toBeTruthy();
	});
});

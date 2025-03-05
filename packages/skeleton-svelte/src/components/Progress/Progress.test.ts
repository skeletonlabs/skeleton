import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

import { mockSnippet } from '../../internal/test-utils.js';
import { Progress } from '../../index.js';

describe('Progress', () => {
	const testIds = {
		root: 'progress',
		label: 'progress-label',
		track: 'progress-track',
		meter: 'progress-meter'
	};
	const commonProps = {
		value: 50,
		max: 100
	};

	it('Renders the component', () => {
		render(Progress, {});
		const component = screen.getByTestId(testIds.root);
		expect(component).toBeInTheDocument();
	});

	for (const prop of ['base', 'height', 'width', 'classes']) {
		it(`Correctly applies the root \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(Progress, { ...commonProps, [prop]: value });
			const component = screen.getByTestId(testIds.root);
			expect(component).toHaveClass(value);
		});
	}

	for (const prop of ['labelBase', 'labelText', 'labelClasses']) {
		it(`Correctly applies the label \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(Progress, { ...commonProps, children: mockSnippet('children'), [prop]: value });
			const component = screen.getByTestId(testIds.label);
			expect(component).toHaveClass(value);
		});
	}

	for (const prop of ['trackBase', 'trackBg', 'trackRounded', 'trackClasses']) {
		it(`Correctly applies the track \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(Progress, { ...commonProps, children: mockSnippet('children'), [prop]: value });
			const component = screen.getByTestId(testIds.track);
			expect(component).toHaveClass(value);
		});
	}

	for (const prop of ['meterBase', 'meterBg', 'meterRounded', 'meterTransition', 'meterClasses']) {
		it(`Correctly applies the \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(Progress, { ...commonProps, children: mockSnippet('children'), [prop]: value });
			const component = screen.getByTestId(testIds.meter);
			expect(component).toHaveClass(value);
		});
	}

	it('Applies the `meterAnimate` prop in indeterminate mode', async () => {
		const meterAnimate = 'meterAnimate';
		render(Progress, { value: null, meterAnimate });
		const component = screen.getByTestId(testIds.meter);
		expect(component).toHaveClass(meterAnimate);
	});
});

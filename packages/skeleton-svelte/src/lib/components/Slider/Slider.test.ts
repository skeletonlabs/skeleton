import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

// import { mockSnippet } from '$lib/internal/test-utils.js';
import { Slider } from '$lib/index.js';

describe('Slider', () => {
	const testIds = {
		root: 'slider',
		markers: 'slider-markers',
		mark: 'slider-mark',
		thumb: 'slider-thumb'
	};
	const commonProps = {
		value: [40]
	};

	it('Renders the component', () => {
		render(Slider, { ...commonProps });
		const component = screen.getByTestId(testIds.root);
		expect(component).toBeInTheDocument();
	});

	it('should render the component with multiple values', () => {
		render(Slider, { value: [40, 60] });
		const component = screen.getByTestId(testIds.root);
		expect(component).toBeInTheDocument();
	});

	it('should render the component with markers', () => {
		render(Slider, { ...commonProps, markers: [25, 50, 75] });

		const elemMakers = screen.getByTestId(testIds.markers);
		expect(elemMakers).toBeInTheDocument();

		const elemMarks = screen.getAllByTestId(testIds.mark);
		expect(elemMarks).toHaveLength(3);
	});

	it('should render the component in the disabled state', () => {
		render(Slider, { ...commonProps, disabled: true });
		const component = screen.getByTestId(testIds.root);
		expect(component).toHaveClass('disabled');
	});

	it('should render the component in the read-only state', () => {
		render(Slider, { ...commonProps, readOnly: true });
		const component = screen.getByTestId(testIds.thumb);
		expect(component).toHaveClass('cursor-not-allowed');
	});

	for (const prop of ['base', 'spaceY', 'classes']) {
		it(`Correctly applies the root \`${prop}\` prop`, () => {
			const value = 'bg-green-500';
			render(Slider, { ...commonProps, [prop]: value });
			const component = screen.getByTestId(testIds.root);
			expect(component).toHaveClass(value);
		});
	}
});
